from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from .. import models, schemas, database
from .auth import get_current_user

router = APIRouter(prefix="/api/leave", tags=["leave"])

@router.post("/apply", response_model=schemas.LeaveResponse)
async def apply_leave(
    leave_data: schemas.LeaveCreate,
    db: Session = Depends(database.get_db),
    current_user: models.User = Depends(get_current_user)
):
    new_leave = models.LeaveApplication(
        user_id=current_user.id,
        **leave_data.model_dump()
    )
    db.add(new_leave)
    db.commit()
    db.refresh(new_leave)
    
    # Add initial log
    log = models.LeaveLog(
        leave_id=new_leave.id,
        action="applied",
        operator_id=current_user.id,
        comment="User submitted leave application"
    )
    db.add(log)
    db.commit()
    
    return new_leave

@router.get("/history", response_model=List[schemas.LeaveResponse])
async def get_leave_history(
    db: Session = Depends(database.get_db),
    current_user: models.User = Depends(get_current_user)
):
    leaves = db.query(models.LeaveApplication).filter(
        models.LeaveApplication.user_id == current_user.id
    ).order_by(models.LeaveApplication.created_at.desc()).all()
    return leaves

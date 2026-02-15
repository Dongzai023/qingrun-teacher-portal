from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from datetime import datetime
from .. import models, schemas, database
from .auth import get_current_user

from typing import Optional

router = APIRouter(prefix="/api/attendance", tags=["attendance"])

@router.get("/today", response_model=Optional[schemas.AttendanceResponse])
async def get_today_checkin(db: Session = Depends(database.get_db), current_user: models.User = Depends(get_current_user)):
    today = datetime.now().date()
    # Simple logic: get the latest check-in for today
    attendance = db.query(models.Attendance).filter(
        models.Attendance.user_id == current_user.id,
        models.Attendance.date == today
    ).order_by(models.Attendance.id.desc()).first()
    
    if not attendance:
        return None
    return attendance

@router.post("/check-in", response_model=schemas.AttendanceResponse)
async def check_in(
    attendance_data: schemas.AttendanceCreate,
    db: Session = Depends(database.get_db),
    current_user: models.User = Depends(get_current_user)
):
    today = datetime.now().date()
    now = datetime.now()
    
    # Simple logic: create a new record for each check-in
    new_attendance = models.Attendance(
        user_id=current_user.id,
        date=today,
        slot=attendance_data.slot,
        check_in=now,
        status="normal", # In real app, calculate based on slot time
        location=attendance_data.location
    )
    db.add(new_attendance)
    db.commit()
    db.refresh(new_attendance)
    return new_attendance

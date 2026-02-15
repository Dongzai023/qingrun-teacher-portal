from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func
from datetime import datetime, timedelta
from .. import models, database
from .auth import get_current_user

router = APIRouter(prefix="/api/stats", tags=["stats"])

@router.get("/monthly")
async def get_monthly_stats(db: Session = Depends(database.get_db), current_user: models.User = Depends(get_current_user)):
    today = datetime.now().date()
    first_day = today.replace(day=1)
    
    # Total work days estimation (simple version)
    total_days = today.day
    
    # Count normal attendances
    attended_count = db.query(models.Attendance).filter(
        models.Attendance.user_id == current_user.id,
        models.Attendance.date >= first_day,
        models.Attendance.status == "normal"
    ).count()
    
    rate = (attended_count / total_days * 100) if total_days > 0 else 0
    
    return {
        "attendance_rate": round(rate, 1),
        "total_days": total_days,
        "attended_days": attended_count,
        "exceptions": 0 # Placeholder for late/early out
    }

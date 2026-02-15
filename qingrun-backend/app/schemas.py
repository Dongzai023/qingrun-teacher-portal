from pydantic import BaseModel, ConfigDict
from datetime import datetime, date
from typing import List, Optional

# Shared schemas
class UserBase(BaseModel):
    username: str
    real_name: str
    staff_id: str
    department: str
    title: str
    avatar_url: Optional[str] = None

class UserCreate(UserBase):
    password: str

class UserResponse(UserBase):
    id: int
    model_config = ConfigDict(from_attributes=True)

# Auth schemas
class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None

# Attendance schemas
class AttendanceBase(BaseModel):
    slot: str
    location: Optional[str] = None

class AttendanceCreate(AttendanceBase):
    pass

class AttendanceResponse(AttendanceBase):
    id: int
    user_id: int
    date: date
    check_in: Optional[datetime]
    check_out: Optional[datetime]
    status: str
    model_config = ConfigDict(from_attributes=True)

# Leave schemas
class LeaveBase(BaseModel):
    type: str
    start_time: datetime
    end_time: datetime
    duration: float
    reason: str
    attachment_url: Optional[str] = None

class LeaveCreate(LeaveBase):
    pass

class LeaveResponse(LeaveBase):
    id: int
    user_id: int
    status: str
    created_at: datetime
    model_config = ConfigDict(from_attributes=True)

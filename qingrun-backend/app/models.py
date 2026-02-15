from sqlalchemy import Column, Integer, String, DateTime, Date, ForeignKey, Text, Float
from sqlalchemy.orm import relationship
from .database import Base
import datetime

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, index=True)
    password_hash = Column(String(255))
    real_name = Column(String(50))
    staff_id = Column(String(20), unique=True)
    department = Column(String(100))
    title = Column(String(50))
    avatar_url = Column(String(255))

    attendances = relationship("Attendance", back_populates="user")
    leave_applications = relationship("LeaveApplication", back_populates="user")

class Attendance(Base):
    __tablename__ = "attendances"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    date = Column(Date, default=datetime.date.today)
    slot = Column(String(20))  # morning, am, pm, evening
    check_in = Column(DateTime, nullable=True)
    check_out = Column(DateTime, nullable=True)
    status = Column(String(20))  # normal, late, missed
    location = Column(String(100))

    user = relationship("User", back_populates="attendances")

class LeaveApplication(Base):
    __tablename__ = "leave_applications"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    type = Column(String(20))  # sick, casual, public
    start_time = Column(DateTime)
    end_time = Column(DateTime)
    duration = Column(Float)
    reason = Column(Text)
    status = Column(String(20), default="pending")  # pending, approved, rejected
    attachment_url = Column(String(255), nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    user = relationship("User", back_populates="leave_applications")
    logs = relationship("LeaveLog", back_populates="application")

class LeaveLog(Base):
    __tablename__ = "leave_logs"

    id = Column(Integer, primary_key=True, index=True)
    leave_id = Column(Integer, ForeignKey("leave_applications.id"))
    action = Column(String(50))
    operator_id = Column(Integer, ForeignKey("users.id"))
    timestamp = Column(DateTime, default=datetime.datetime.utcnow)
    comment = Column(Text, nullable=True)

    application = relationship("LeaveApplication", back_populates="logs")

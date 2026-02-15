from app.database import SessionLocal, engine
from app import models, auth_utils
from datetime import datetime, date

def seed():
    db = SessionLocal()
    # Create tables
    models.Base.metadata.create_all(bind=engine)

    # Check if admin exists
    admin = db.query(models.User).filter(models.User.username == "admin").first()
    if not admin:
        admin = models.User(
            username="admin",
            password_hash=auth_utils.get_password_hash("admin123"),
            real_name="张晓东",
            staff_id="T09283",
            department="技术组",
            title="高级教师",
            avatar_url="https://i.pravatar.cc/100?img=11"
        )
        db.add(admin)
        db.commit()
        print("Admin user created: admin / admin123")

    # Add mock attendance if empty
    if db.query(models.Attendance).count() == 0:
        for i in range(1, 6): # Last 5 days
            day = date.today() - timedelta(days=i)
            att = models.Attendance(
                user_id=admin.id,
                date=day,
                slot="morning",
                check_in=datetime.combine(day, datetime.min.time()).replace(hour=8, minute=30),
                status="normal",
                location="校本部"
            )
            db.add(att)
        db.commit()
        print("Mock attendance added.")

    db.close()

from datetime import timedelta
if __name__ == "__main__":
    seed()

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine, Base
from .routers import auth, attendance, leave, stats
import time
from sqlalchemy.exc import OperationalError
from . import models

# Wait for database to be ready
max_retries = 10
for i in range(max_retries):
    try:
        Base.metadata.create_all(bind=engine)
        print("Database connected successfully!")
        
        # Initialize default admin user if database is empty
        from .database import SessionLocal
        from .auth_utils import get_password_hash
        db = SessionLocal()
        admin_exists = db.query(models.User).filter(models.User.username == "admin").first()
        if not admin_exists:
            hashed_pw = get_password_hash("admin123")
            admin_user = models.User(
                username="admin", 
                password_hash=hashed_pw,
                full_name="Administrator",
                role="admin"
            )
            db.add(admin_user)
            db.commit()
            print("Default admin user created.")
        db.close()
        
        break
    except OperationalError as e:
        if i == max_retries - 1:
            raise e
        print(f"Database not ready, retrying in 3 seconds... ({i+1}/{max_retries})")
        time.sleep(3)

app = FastAPI(title="Qingjian Teacher Portal API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, restrict this to specific domains
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(attendance.router)
app.include_router(leave.router)
app.include_router(stats.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to Qingjian Teacher Portal API"}

@app.get("/ping")
def ping():
    return {"status": "ok", "timestamp": time.time()}

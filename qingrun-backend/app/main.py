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

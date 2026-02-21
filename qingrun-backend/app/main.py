from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine, Base
from .routers import auth, attendance, leave, stats
from . import models

Base.metadata.create_all(bind=engine)

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

from fastapi import FastAPI
from .database import engine, Base
from .routers import auth, attendance, leave, stats
from . import models

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Qingjian Teacher Portal API")

app.include_router(auth.router)
app.include_router(attendance.router)
app.include_router(leave.router)
app.include_router(stats.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to Qingjian Teacher Portal API"}

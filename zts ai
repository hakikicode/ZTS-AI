# Backend - FastAPI (Python)

from fastapi import FastAPI, Depends
from pydantic import BaseModel
import uvicorn
import joblib
import numpy as np

# Load AI model for threat detection
model = joblib.load("model.pkl")
app = FastAPI()

# Request model for AI security checks
class SecurityCheckRequest(BaseModel):
    user_id: str
    device_id: str
    login_attempts: int
    failed_logins: int
    ip_address: str
    location: str
    behavior_score: float

@app.post("/analyze")
def analyze_risk(data: SecurityCheckRequest):
    features = np.array([
        [data.login_attempts, data.failed_logins, data.behavior_score]
    ])
    risk_score = model.predict(features)[0]
    return {"user_id": data.user_id, "risk_score": risk_score}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

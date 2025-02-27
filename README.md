# ZTS AI Demo

## Overview
ZTS AI is a cybersecurity risk analysis system that integrates AI-powered threat detection using FastAPI (Python) for the backend and Next.js (React) for the frontend. The system predicts risk levels based on user behavior and provides AI-generated security insights.

## Features
- **AI-Powered Risk Analysis:** Uses OpenAI's GPT-4 to analyze security risks.
- **Machine Learning Model:** Predicts risk scores based on login attempts, failed logins, and behavior scores.
- **FastAPI Backend:** Handles API requests and integrates AI.
- **Next.js Frontend:** Simple UI for testing risk analysis.
- **Vercel Deployment:** Hosted on Vercel for live demo.

## Project Structure
```
ZTS-AI/
│── backend/                     # FastAPI Backend
│   ├── main.py                   # API with OpenAI Integration
│   ├── model.pkl                  # Pre-trained ML Model
│   ├── requirements.txt            # Python dependencies
│   ├── .env                        # Environment variables (optional)
│── frontend/                     # Frontend (Next.js)
│   ├── pages/
│   │   ├── index.js                # UI for testing API
│   │   ├── _app.js                 
│   ├── components/                 
│   ├── styles/                     
│   ├── package.json                # Frontend dependencies
│── vercel.json                   # Vercel Configuration
│── README.md                     # Documentation
│── .gitignore                     # Ignore files
```

## Installation & Setup
### Backend (FastAPI)
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
3. Set up environment variables:
   ```sh
   echo "OPENAI_API_KEY=openai_api_key_here" > .env
   ```
4. Run the server:
   ```sh
   uvicorn main:app --reload
   ```

### Frontend (Next.js)
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the frontend:
   ```sh
   npm run dev
   ```

## Deployment
1. Deploy backend on Vercel:
   ```sh
   vercel --prod
   ```
2. Deploy frontend on Vercel:
   ```sh
   vercel --prod
   ```

## API Endpoint
- **POST /analyze** – Accepts user security data and returns AI-generated insights.

## Usage
1. Enter login attempts, failed logins, and behavior score in the frontend UI.
2. Click "Analyze" to send data to the backend.
3. View the risk score and AI security suggestions.

## Live Demo
- **Backend API:** `https://your-vercel-backend-url/analyze`
- **Frontend UI:** `https://your-frontend-url/`

## License
MIT License


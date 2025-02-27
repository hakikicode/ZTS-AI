import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [formData, setFormData] = useState({
    user_id: "",
    device_id: "",
    login_attempts: 0,
    failed_logins: 0,
    ip_address: "",
    location: "",
    behavior_score: 0.5
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const analyzeRisk = async () => {
    try {
      const response = await axios.post("https://your-vercel-backend-url/analyze", formData);
      setResult(response.data);
    } catch (error) {
      console.error("Error analyzing risk:", error);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h1>AI-Powered Security Risk Analysis</h1>
      <input type="text" name="user_id" placeholder="User ID" onChange={handleChange} /><br />
      <input type="text" name="device_id" placeholder="Device ID" onChange={handleChange} /><br />
      <input type="number" name="login_attempts" placeholder="Login Attempts" onChange={handleChange} /><br />
      <input type="number" name="failed_logins" placeholder="Failed Logins" onChange={handleChange} /><br />
      <input type="text" name="ip_address" placeholder="IP Address" onChange={handleChange} /><br />
      <input type="text" name="location" placeholder="Location" onChange={handleChange} /><br />
      <input type="number" step="0.1" name="behavior_score" placeholder="Behavior Score" onChange={handleChange} /><br />
      <button onClick={analyzeRisk}>Analyze</button>

      {result && (
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ddd" }}>
          <h3>Risk Score: {result.risk_score}</h3>
          <p><strong>AI Suggestion:</strong> {result.ai_suggestion}</p>
        </div>
      )}
    </div>
  );
}

import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleQuery = async () => {
    setLoading(true);
    setResponse(null);
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      setResponse("Error fetching response.");
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <Head>
        <title>ZTS-AI Security Assistant</title>
        <meta name="description" content="AI-powered Zero Trust Security Assistant" />
      </Head>
      <main className="main">
        <h1>ZTS-AI Security Assistant</h1>
        <p>Ask a security-related question:</p>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your question..."
        />
        <button onClick={handleQuery} disabled={loading}>
          {loading ? "Processing..." : "Ask AI"}
        </button>
        {response && <div className="response">{response}</div>}
      </main>
      <style jsx>{`
        .container { text-align: center; padding: 50px; }
        .main { max-width: 600px; margin: auto; }
        input { width: 80%; padding: 10px; margin: 10px 0; }
        button { padding: 10px 20px; }
        .response { margin-top: 20px; padding: 10px; border: 1px solid #ddd; }
      `}</style>
    </div>
  );
}

import { useState } from "react";
import "./SmartHelp.css";
import API_URL from "../../config";


function SmartHelp() {
  const [problem, setProblem] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    console.log("clicked 🔥");

    if (!problem.trim()) {
      alert("Write something first");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/ai/chat`
, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: problem })
      });

      const data = await res.json();
      console.log("backend reply:", data);

      if (data.reply) {
        setResult(data.reply);
      } else {
        setResult("AI Failed!");
      }

    } catch (err) {
      console.log("frontend error:", err);
      setResult("Network Error: Backend not responding!");
    }

    setLoading(false);
  };

  return (
    <div className="smart-help">
      <h1>Smart Help (AI Assistant)</h1>
      <p>Describe your home issue, AI will help you.</p>

      <textarea
        value={problem}
        onChange={(e) => setProblem(e.target.value)}
        placeholder="Example: fan not working, water leakage, wiring problem..."
      />

      <button type="button" onClick={handleSubmit}>
        {loading ? "Analyzing..." : "Get Help"}
      </button>

      {result && (
        <pre className="ai-result-box">
          {result}
        </pre>
      )}
    </div>
  );
}

export default SmartHelp;

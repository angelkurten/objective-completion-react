import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  // States to hold priorities (P_i), completions (C_i), and impact (I)
  const [priorities, setPriorities] = useState([1.0, 0.5, 0.8]);
  const [completions, setCompletions] = useState([0.75, 1.0, 0.25]);
  const [impact, setImpact] = useState(10);

  // Calculate sum of P_i * C_i
  const sumPC = priorities.reduce((acc, p, i) => acc + p * completions[i], 0);
  // Calculate sum of P_i
  const sumP = priorities.reduce((acc, p) => acc + p, 0);

  // Objective Completion formula:
  // OC = I * (sum(P_i * C_i) / sum(P_i))
  const oc = sumP === 0 ? 0 : impact * (sumPC / sumP);

  // Handlers to update states
  const handlePriorityChange = (index, value) => {
    const updated = [...priorities];
    updated[index] = parseFloat(value) || 0;
    setPriorities(updated);
  };

  const handleCompletionChange = (index, value) => {
    const updated = [...completions];
    updated[index] = parseFloat(value) || 0;
    setCompletions(updated);
  };

  const handleImpactChange = (value) => {
    setImpact(parseFloat(value) || 0);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Objective Completion (OC) Calculator</h1>

      <p>
        <strong>Formula in LaTeX:</strong>
      </p>
      <pre>
{String.raw`
\[
OC = I \times
\frac{\sum (P_i \times C_i)}
     {\sum P_i}.
\]
`}
      </pre>

      <hr />

      <h2>Impact (I)</h2>
      <input
        type="number"
        step="0.01"
        value={impact}
        onChange={(e) => handleImpactChange(e.target.value)}
      />

      <h2>Tasks</h2>
      {priorities.map((p, i) => (
        <div key={i} style={{ marginBottom: '8px' }}>
          <label style={{ marginRight: '10px' }}>
            Task {i + 1} Priority (P_{i+1}):
          </label>
          <input
            type="number"
            step="0.01"
            value={p}
            onChange={(e) => handlePriorityChange(i, e.target.value)}
            style={{ width: '60px', marginRight: '20px' }}
          />
          <label style={{ marginRight: '10px' }}>
            Completion (C_{i+1}):
          </label>
          <input
            type="number"
            step="0.01"
            value={completions[i]}
            onChange={(e) => handleCompletionChange(i, e.target.value)}
            style={{ width: '60px' }}
          />
        </div>
      ))}

      <hr />

      <h2>Result</h2>
      <p>
        <strong>OC = {oc.toFixed(2)}</strong>
      </p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

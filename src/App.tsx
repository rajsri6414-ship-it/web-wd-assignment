import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { mapReduceTests } from './mapReduce';
import RegistrationForm from './RegistrationForm';

const App: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '1000px', margin: '0 auto' }}>
            <button
                onClick={() => setShowPopup(true)}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginBottom: '20px'
                }}
            >
                Open Registration Form
            </button>

            <h1>Map & Reduce Function Examples</h1>

            <section style={{ marginBottom: '30px', border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
                <h2>MAP FUNCTION TESTS</h2>
                <p><strong>1. Double numbers [1,2,3,4,5]:</strong> {JSON.stringify(mapReduceTests.doubled)}</p>
                <p><strong>2. Square numbers [1,2,3,4,5]:</strong> {JSON.stringify(mapReduceTests.squared)}</p>
                <p><strong>3. User names:</strong> {JSON.stringify(mapReduceTests.names)}</p>
                <p><strong>4. User salaries:</strong> {JSON.stringify(mapReduceTests.salaries)}</p>
            </section>

            <section style={{ marginBottom: '30px', border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
                <h2>REDUCE FUNCTION TESTS</h2>
                <p><strong>1. Sum of [1,2,3,4,5]:</strong> <span style={{ color: 'green', fontWeight: 'bold' }}>{mapReduceTests.sum}</span></p>
                <p><strong>2. Product of [1,2,3,4,5]:</strong> <span style={{ color: 'green', fontWeight: 'bold' }}>{mapReduceTests.product}</span></p>
                <p><strong>3. Max value:</strong> <span style={{ color: 'green', fontWeight: 'bold' }}>{mapReduceTests.max}</span></p>
                <p><strong>4. Min value:</strong> <span style={{ color: 'green', fontWeight: 'bold' }}>{mapReduceTests.min}</span></p>
                <p><strong>5. Total salary:</strong> <span style={{ color: 'green', fontWeight: 'bold' }}>${mapReduceTests.totalSalary.toLocaleString()}</span></p>
                <p><strong>6. Count occurrences:</strong> {JSON.stringify(mapReduceTests.count)}</p>
            </section>

            <section style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px', backgroundColor: '#f0f8ff' }}>
                <h2>MAP + REDUCE COMBINED</h2>
                <p><strong>1. Sum of doubled [1,2,3,4,5]:</strong> <span style={{ color: 'green', fontWeight: 'bold' }}>{mapReduceTests.doubledSum}</span></p>
                <p><strong>2. Total with 10% increase:</strong> <span style={{ color: 'green', fontWeight: 'bold' }}>${mapReduceTests.totalWithIncrease.toLocaleString()}</span></p>
                <p><strong>3. Average salary:</strong> <span style={{ color: 'green', fontWeight: 'bold' }}>${mapReduceTests.averageSalary.toLocaleString()}</span></p>
            </section>

            <section style={{ marginTop: '30px', border: '1px solid #ddd', padding: '15px', borderRadius: '5px', backgroundColor: '#f5f5f5' }}>
                <h2>Code Examples</h2>
                <h4>Map - Double each number:</h4>
                <pre style={{ backgroundColor: '#222', color: '#0f0', padding: '10px', borderRadius: '3px', overflow: 'auto' }}>
                    {`const doubled = [1,2,3,4,5].map(n => n * 2);
// Result: ${JSON.stringify(mapReduceTests.doubled)}`}
                </pre>

                <h4>Reduce - Sum all numbers:</h4>
                <pre style={{ backgroundColor: '#222', color: '#0f0', padding: '10px', borderRadius: '3px', overflow: 'auto' }}>
                    {`const sum = [1,2,3,4,5].reduce((acc, n) => acc + n, 0);
// Result: ${mapReduceTests.sum}`}
                </pre>

                <h4>Combined - Sum of doubled:</h4>
                <pre style={{ backgroundColor: '#222', color: '#0f0', padding: '10px', borderRadius: '3px', overflow: 'auto' }}>
                    {`const result = [1,2,3,4,5]
  .map(n => n * 2)
  .reduce((acc, n) => acc + n, 0);
// Result: ${mapReduceTests.doubledSum}`}
                </pre>
            </section>

            {showPopup && (
                <RegistrationForm onClose={() => setShowPopup(false)} />
            )}
        </div>
    );
};

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CheckboxPage from './CheckboxPage';

const App: React.FC = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <Router>
            <div>
                <h1>Hello, React!</h1>
                <p>Current count: {count}</p>
                <button onClick={increment}>Increment</button>
                <br />
                <Link to="/checkboxes">
                    <button>Go to Checkbox Page</button>
                </Link>
            </div>
            <Routes>
                <Route path="/checkboxes" element={<CheckboxPage />} />
            </Routes>
        </Router>
    );
};

export default App;
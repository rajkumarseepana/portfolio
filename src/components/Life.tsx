import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

function LifeProgress() {
    const [effort, setEffort] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(`Trying... Attempt #${effort}`);
        if (effort === 5) {
            navigate('/next-step'); // life moves forward after consistent effort
        }
    }, [effort, navigate]);

    const message = useMemo(() => (
        effort === 0 ? "Start now!" :
            effort < 5 ? "Keep learning!" :
                "Redirecting to new path..."
    ), [effort]);

    return (
        <div>
            <button onClick={() => setEffort(effort + 1)}>Try Again</button>
            <p>{message}</p>
        </div>
    );
}

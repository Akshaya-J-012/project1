import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import DreamForm from "./components/DreamForm";
import DreamList from "./components/DreamList";
import Thoughts from "./components/Thoughts";
import Navbar from "./components/Navbar";
import FloatingAssets from "./components/FloatingAssets";
import Landing from "./pages/Landing";


function App() {
    const [dreams, setDreams] = useState(() => {
        const saved = localStorage.getItem("lucidia_dreams");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("lucidia_dreams", JSON.stringify(dreams));
    }, [dreams]);

    const addDream = (newDream) => {
        setDreams([newDream, ...dreams]);
    };

    const deleteDream = (id) => {
        if (window.confirm("Are you sure you want to delete this dream?")) {
            setDreams(dreams.filter(dream => dream.id !== id));
        }
    };

    return (
        <Router>
            <div className="app-wrapper">
                <div className="background-decor">
                    <div className="cloud cloud-1"></div>
                    <div className="cloud cloud-2"></div>
                    <div className="stars"></div>
                    <FloatingAssets />
                </div>
                
                <Navbar />
                
                <div className="page-content">
                    <Routes>
                        <Route path="/" element={<Landing dreams={dreams} />} />
                        <Route path="/composer" element={<div className="page-fade"><Header /><DreamForm onAddDream={addDream} /></div>} />
                        <Route path="/vault" element={<div className="page-fade"><Header /><DreamList dreams={dreams} onDeleteDream={deleteDream} /></div>} />
                        <Route path="/thoughts" element={<div className="page-fade"><Header /><Thoughts /></div>} />
                    </Routes>
                </div>

                <footer>
                    <p>Lucidia © 2026 | Made for your subconscious</p>
                </footer>
            </div>
        </Router>
    );
}


export default App;
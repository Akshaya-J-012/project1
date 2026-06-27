import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function DreamForm({ onAddDream }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [mood, setMood] = useState("🌙 Calm");
    const [tags, setTags] = useState("");
    const [toastMessage, setToastMessage] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [toastFadeOut, setToastFadeOut] = useState(false);
    const toastTimerRef = useRef(null);
    const fadeTimerRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        return () => {
            if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
            if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
        };
    }, []);

    const handleCloseToast = () => {
        setToastFadeOut(true);
        fadeTimerRef.current = setTimeout(() => {
            setShowToast(false);
        }, 500);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !content) return;

        const newDream = {
            id: Date.now(),
            date: new Date().toLocaleDateString(),
            title,
            content,
            mood,
            tags: tags.split(",").map(tag => tag.trim()).filter(tag => tag !== ""),
        };

        onAddDream(newDream);
        
        // Setup Toast Notification
        if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
        if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
        
        setToastMessage(title);
        setShowToast(true);
        setToastFadeOut(false);

        setTitle("");
        setContent("");
        setMood("🌙 Calm");
        setTags("");

        toastTimerRef.current = setTimeout(() => {
            setToastFadeOut(true);
            fadeTimerRef.current = setTimeout(() => {
                setShowToast(false);
            }, 500);
        }, 4000);
    };

    return (
        <section className="composer-section">
            <div className="container">
                <form className="dream-form card-glass" onSubmit={handleSubmit}>
                    <h2>Record Your Journey</h2>
                    
                    <div className="input-group">
                        <label>Dream Title</label>
                        <input 
                            type="text" 
                            placeholder="e.g., Flying over the moon" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label>The Experience</label>
                        <textarea 
                            placeholder="Describe what you saw and felt..." 
                            rows="5"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="form-row">
                        <div className="input-group">
                            <label>Mood</label>
                            <select value={mood} onChange={(e) => setMood(e.target.value)}>
                                <option>🌙 Calm</option>
                                <option>😱 Scary</option>
                                <option>🌀 Confusing</option>
                                <option>✨ Lucid</option>
                                <option>💖 Joyful</option>
                            </select>
                        </div>

                        <div className="input-group">
                            <label>Tags (comma separated)</label>
                            <input 
                                type="text" 
                                placeholder="flying, water, school" 
                                value={tags}
                                onChange={(e) => setTags(e.target.value)}
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn-primary">Store in Vault</button>
                </form>
            </div>

            {showToast && (
                <div className="success-toast-container">
                    <div className={`success-toast ${toastFadeOut ? 'fade-out' : ''}`}>
                        <div className="success-toast-content">
                            <div className="success-toast-icon">✨</div>
                            <div className="success-toast-text">
                                <h4>Stored in Vault!</h4>
                                <p>"{toastMessage}" has been safely secured in your subconscious log.</p>
                            </div>
                        </div>
                        <div className="success-toast-actions">
                            <button className="toast-btn toast-btn-secondary" onClick={handleCloseToast}>Dismiss</button>
                            <button className="toast-btn toast-btn-primary" onClick={() => navigate("/vault")}>View Vault</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default DreamForm;

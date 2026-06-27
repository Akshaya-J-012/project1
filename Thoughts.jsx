import { useState, useEffect } from "react";

function Thoughts() {
    const [thoughts, setThoughts] = useState(() => {
        const saved = localStorage.getItem("lucidia_thoughts");
        return saved ? JSON.parse(saved) : [];
    });
    const [input, setInput] = useState("");

    useEffect(() => {
        localStorage.setItem("lucidia_thoughts", JSON.stringify(thoughts));
    }, [thoughts]);

    const addThought = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        setThoughts([...thoughts, { id: Date.now(), text: input, completed: false }]);
        setInput("");
    };

    const toggleThought = (id) => {
        setThoughts(thoughts.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    const removeThought = (id) => {
        setThoughts(thoughts.filter(t => t.id !== id));
    };

    return (
        <section id="thoughts" className="thoughts-section">
            <div className="container">
                <div className="thoughts-container card-glass">
                    <h2>Rapid Thoughts</h2>
                    <p className="subtitle">Quick notes for your waking mind</p>

                    <form onSubmit={addThought} className="thought-form">
                        <input 
                            type="text" 
                            placeholder="Add a thought..." 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button type="submit">Add</button>
                    </form>

                    <ul className="thought-list">
                        {thoughts.map(thought => (
                            <li key={thought.id} className={thought.completed ? "completed" : ""}>
                                <span onClick={() => toggleThought(thought.id)}>{thought.text}</span>
                                <button onClick={() => removeThought(thought.id)}>×</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Thoughts;

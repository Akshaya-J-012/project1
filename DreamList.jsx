import { useState } from "react";

function DreamList({ dreams, onDeleteDream }) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredDreams = dreams.filter(dream => 
        dream.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dream.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dream.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <section className="vault-section">
            <div className="container">
                <div className="vault-header">
                    <h2>Dream Vault</h2>
                    <input 
                        type="text" 
                        placeholder="Search your dreams..." 
                        className="search-bar"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="dream-grid">
                    {filteredDreams.length > 0 ? (
                        filteredDreams.map(dream => (
                            <div className="dream-card card-glass" key={dream.id}>
                                <div className="card-header">
                                    <span className="dream-date">{dream.date}</span>
                                    <span className="dream-mood">{dream.mood}</span>
                                </div>
                                <h3>{dream.title}</h3>
                                <p>{dream.content}</p>
                                <div className="dream-tags">
                                    {dream.tags.map((tag, i) => (
                                        <span key={i} className="tag">#{tag}</span>
                                    ))}
                                </div>
                                <button className="delete-btn" onClick={() => onDeleteDream(dream.id)}>Remove</button>
                            </div>
                        ))
                    ) : (
                        <p className="no-dreams">No dreams found. Start recording your subconscious!</p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default DreamList;

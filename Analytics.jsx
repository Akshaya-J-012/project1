function Analytics({ dreams }) {
    const totalDreams = dreams.length;
    
    // Count moods
    const moods = dreams.reduce((acc, dream) => {
        const moodBase = dream.mood.split(" ")[1]; // Remove emoji
        acc[moodBase] = (acc[moodBase] || 0) + 1;
        return acc;
    }, {});

    // Get most common mood
    const mostCommonMood = Object.entries(moods).sort((a, b) => b[1] - a[1])[0]?.[0] || "None yet";

    // Unique tags
    const allTags = dreams.flatMap(d => d.tags);
    const uniqueTagsCount = new Set(allTags).size;

    return (
        <section className="analytics-section">
            <div className="container">
                <div className="analytics-grid">
                    <div className="stat-card card-glass">
                        <h4>Total Dreams</h4>
                        <p className="stat-value">{totalDreams}</p>
                    </div>
                    <div className="stat-card card-glass">
                        <h4>Top Mood</h4>
                        <p className="stat-value">{mostCommonMood}</p>
                    </div>
                    <div className="stat-card card-glass">
                        <h4>Themes Tracked</h4>
                        <p className="stat-value">{uniqueTagsCount}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Analytics;

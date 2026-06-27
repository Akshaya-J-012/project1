import { useState, useEffect } from "react";

const slides = [
    {
        url: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1200&q=80",
        title: "Magical Moonlit Gardens",
        desc: "Where flowers glow with the light of forgotten dreams."
    },
    {
        url: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1000&q=80",
        title: "Celestial Portals",
        desc: "Step through the stars into another consciousness."
    },
    {
        url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
        title: "The Ethereal Library",
        desc: "A sanctuary for every story your mind creates at night."
    }
];


function Slideshow() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="slideshow card-glass">
            <div className="slide-content" style={{ backgroundImage: `url(${slides[index].url})` }}>
                <div className="slide-overlay">
                    <h2>{slides[index].title}</h2>
                    <p>{slides[index].desc}</p>
                </div>
            </div>
            <div className="slide-dots">
                {slides.map((_, i) => (
                    <div 
                        key={i} 
                        className={`dot ${i === index ? "active" : ""}`}
                        onClick={() => setIndex(i)}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Slideshow;

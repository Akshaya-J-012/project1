import Header from "../components/Header";
import Analytics from "../components/Analytics";
import Slideshow from "../components/Slideshow";
import { Link } from "react-router-dom";

function Landing({ dreams }) {
    return (
        <div className="page-fade">
            <Header />
            
            <div className="container">
                <Slideshow />
                
                <div className="landing-actions">
                    <Link to="/composer" className="btn-primary">Record New Dream</Link>
                    <Link to="/vault" className="btn-secondary">Explore Vault</Link>
                </div>

                <div className="insight-heading" style={{ marginTop: '60px', textAlign: 'center' }}>
                     <h2 className="gradient-text">Journal Insights</h2>
                </div>
                <Analytics dreams={dreams} />
            </div>
        </div>
    );
}

export default Landing;

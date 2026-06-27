import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="dream-nav card-glass">
            <div className="nav-logo">
                <Link to="/">🌙 Lucidia</Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/composer">New Dream</Link></li>
                <li><Link to="/vault">Vault</Link></li>
                <li><Link to="/thoughts">Thoughts</Link></li>
            </ul>

        </nav>
    );
}

export default Navbar;


import { Link } from "react-router-dom";

export function Header() {
    return (
        <header>
            <Link to="/"><h1>DocLock</h1></Link>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/page1">Page1</Link>
                <Link to="/page2">Page2</Link>
            </nav>
      </header>
    )
}


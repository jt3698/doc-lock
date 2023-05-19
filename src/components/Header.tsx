import { Link } from "react-router-dom";

export function Header() {
    return (
        <header>
            <Link to="/"><h1>DocLock</h1></Link>
            <nav className="navbar" style={styles}>
                <Link to="/">Home</Link>
                <Link to="/upload">Upload</Link>
                <Link to="/approve">Approve</Link>
            </nav>
      </header>
    )
}

const styles = {
    marginBottom: 0
}
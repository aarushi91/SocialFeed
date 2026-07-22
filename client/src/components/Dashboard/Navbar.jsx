import "./Navbar.css";

function Navbar({ onLogout }) {

    return (

        <nav className="navbar">

            <div className="logo">
                💬 <span>SocialFeed</span>
            </div>

            <div className="nav-right">

                <div>
                    🔔 Notifications
                </div>

                <button
                    className="logout-btn"
                    onClick={onLogout}
                >
                    Logout
                </button>

            </div>

        </nav>

    );

}

export default Navbar;
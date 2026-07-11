import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const role = localStorage.getItem("role");

    const logout = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <nav className="navbar">

            <div className="navbar-left">

                <h2 className="logo">
                    JobPortal
                </h2>

                <NavLink to="/dashboard">Dashboard</NavLink>

                <NavLink to="/jobs">Jobs</NavLink>

                <NavLink to="/interviews">Interviews</NavLink>

            </div>

            <div className="navbar-right">

                <span>{role}</span>

                <div className="profile-icon">

                    <NavLink to="/profile">
                        👤
                    </NavLink>
                </div>


                <button
                    className="btn btn-danger"
                    onClick={logout}
                >
                    Logout
                </button>

            </div>

        </nav>
    );
}

export default Navbar;
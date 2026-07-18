import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const role = sessionStorage.getItem("role");

    const logout = () => {
        sessionStorage.clear();
        navigate("/");
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <h2
                    className="logo"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/dashboard")}
                >
                    💼 JobPortal
                </h2>

                {/* =========== JOB SEEKER ========== */}

                {role === "SEEKER" && (
                    <>
                        <NavLink to="/dashboard">Dashboard</NavLink>

                        <NavLink to="/jobs">Jobs</NavLink>

                        <NavLink to="/interviews">Interviews</NavLink>

                    </>
                )}

                {/* ========= EMPLOYER ======== */}

                {role === "EMPLOYER" && (
                    <>
                        <NavLink to="/dashboard">Dashboard</NavLink>

                        <NavLink to="/jobs">Jobs</NavLink>

                        <NavLink to="/applicants">Applicants</NavLink>

                        <NavLink to="/interviews">Interviews</NavLink>

                    </>
                )}

                {/* ======== ADMIN =========== */}

                {role === "ADMIN" && (
                    <>
                        <NavLink to="/dashboard">Dashboard</NavLink>

                        <NavLink to="/seekers">Seekers</NavLink>

                        <NavLink to="/employers">Employers</NavLink>

                        <NavLink to="/jobs">Jobs</NavLink>

                        <NavLink to="/interviews">Interviews</NavLink>

                    </>
                )}
            </div>

            <div className="navbar-right">
                <span className="badge badge-success">
                    {role}
                </span>

                <NavLink
                    to="/profile"
                    className="profile-icon"
                    title="Profile"
                >
                    👤
                </NavLink>

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
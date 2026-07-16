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
                <h2 className="logo">JobPortal</h2>

                {/* Common */}
                <NavLink to="/dashboard">Dashboard</NavLink>

                {/* Job Seeker Menu */}
                {role === "SEEKER" && (
                    <>
                        <NavLink to="/jobs">Jobs</NavLink>

                        <NavLink to="/interviews">Interviews</NavLink>
                    </>
                )}

                {/* Employer Menu */}
                {role === "EMPLOYER" && (
                    <>
                        <NavLink to="/jobs">Jobs</NavLink>

                        <NavLink to="/applicants">Applicants</NavLink>

                        <NavLink to="/interviews">Interviews</NavLink>
                    </>
                )}

                {/* Admin Menu (Optional) */}
                {role === "ADMIN" && (
                    <>
                        <NavLink to="/jobs">Jobs</NavLink>

                        <NavLink to="/applicants">Applicants</NavLink>

                        <NavLink to="/interviews">Interviews</NavLink>

                        <NavLink to="/users">Users</NavLink>
                    </>
                )}
            </div>

            <div className="navbar-right">
                <span className="badge badge-success">
                    {role}
                </span>

                <NavLink to="/profile" className="profile-icon">
                    👤
                </NavLink>

                <button className="btn btn-danger" onClick={logout}>
                    Logout
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
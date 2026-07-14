import { useState } from "react";

function Profile() {
  const [user] = useState({
    name: "Akshay Bharati",
    email: "akshay@example.com",
    phone: "+91 9876543210",
    role: localStorage.getItem("role") || "SEEKER",
    location: "Pune, Maharashtra",
    experience: "2 Years",
    skills: "React.js, JavaScript, Node.js, Express.js, MongoDB",
    education: "B.E. Computer Engineering",
    profileScore: "92%",
    about:
      "Passionate Full Stack Developer with experience in React.js, Node.js, Express.js and MongoDB. Interested in building scalable web applications.",
  });

  return (
    <div className="page-content">
      <h1 className="mb-3">My Profile</h1>

      <div className="grid grid-3">
        {/* Left Card */}
        <div className="card text-center">
          <img
            src="https://ui-avatars.com/api/?name=Akshay+Bharati&background=2563eb&color=fff&size=150"
            alt="profile"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              marginBottom: "15px",
            }}
          />

          <h2>{user.name}</h2>
          <p>{user.role}</p>

          <div className="mt-2">
            <span className="badge badge-success">
              Profile Score {user.profileScore}
            </span>
          </div>

          <button className="btn btn-primary mt-3" style={{ width: "100%" }}>
            Edit Profile
          </button>
        </div>

        {/* Right Section */}
        <div className="card" style={{ gridColumn: "span 2" }}>
          <h2 className="mb-2">Personal Information</h2>

          <table className="table">
            <tbody>
              <tr>
                <td>
                  <strong>Name</strong>
                </td>
                <td>{user.name}</td>
              </tr>

              <tr>
                <td>
                  <strong>Email</strong>
                </td>
                <td>{user.email}</td>
              </tr>

              <tr>
                <td>
                  <strong>Phone</strong>
                </td>
                <td>{user.phone}</td>
              </tr>

              <tr>
                <td>
                  <strong>Location</strong>
                </td>
                <td>{user.location}</td>
              </tr>

              <tr>
                <td>
                  <strong>Experience</strong>
                </td>
                <td>{user.experience}</td>
              </tr>

              <tr>
                <td>
                  <strong>Education</strong>
                </td>
                <td>{user.education}</td>
              </tr>

              <tr>
                <td>
                  <strong>Skills</strong>
                </td>
                <td>{user.skills}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* About */}
      <div className="card mt-3">
        <h2 className="mb-2">About Me</h2>
        <p>{user.about}</p>
      </div>

      {/* Resume */}
      <div className="card mt-3">
        <div className="flex-between">
          <div>
            <h2>Resume</h2>
            <p>Resume_React_Developer.pdf</p>
          </div>

          <button className="btn btn-primary">Download Resume</button>
        </div>
      </div>

      {/* Skills */}
      <div className="card mt-3">
        <h2 className="mb-2">Skills</h2>

        <div
          className="flex"
          style={{
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <span className="badge badge-success">React</span>
          <span className="badge badge-success">JavaScript</span>
          <span className="badge badge-success">Node.js</span>
          <span className="badge badge-success">Express</span>
          <span className="badge badge-success">MongoDB</span>
          <span className="badge badge-success">Git</span>
          <span className="badge badge-success">REST API</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;

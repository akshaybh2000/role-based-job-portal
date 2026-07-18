import Navbar from "../../components/Navbar";

function AdminDashboard() {
  const activities = [
    {
      id: 1,
      activity: "New Employer Registered",
      user: "ABC Technologies",
      time: "5 mins ago",
    },
    {
      id: 2,
      activity: "Job Approved",
      user: "Infosys",
      time: "20 mins ago",
    },
    {
      id: 3,
      activity: "New Job Seeker Joined",
      user: "Rahul Sharma",
      time: "1 hour ago",
    },
    {
      id: 4,
      activity: "Employer Verified",
      user: "TCS",
      time: "Yesterday",
    },
    {
      id: 5,
      activity: "Job Removed",
      user: "Spam Company",
      time: "2 days ago",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="dashboard-page">
        <div className="container mt-2">
          {/* Header */}

          <div className="dashboard-header flex-between mb-3">
            <div>
              <h1>Admin Dashboard</h1>
              <p>Welcome Administrator 👋</p>
            </div>

            <button className="btn btn-primary">Generate Report</button>
          </div>

          {/* Stats */}

          <div className="grid grid-4 mb-3">
            <div className="card">
              <h3>Total Users</h3>
              <h1>2,540</h1>
              <p>Registered Users</p>
            </div>

            <div className="card">
              <h3>Employers</h3>
              <h1>325</h1>
              <p>Verified Companies</p>
            </div>

            <div className="card">
              <h3>Job Seekers</h3>
              <h1>2,180</h1>
              <p>Active Candidates</p>
            </div>

            <div className="card">
              <h3>Jobs Posted</h3>
              <h1>580</h1>
              <p>Available Jobs</p>
            </div>
          </div>

          <div className="grid grid-3 mb-3">
            <div className="card">
              <h3>Pending Employer Approval</h3>
              <h1>18</h1>
              <p>Waiting for Verification</p>
            </div>

            <div className="card">
              <h3>Pending Jobs</h3>
              <h1>42</h1>
              <p>Need Approval</p>
            </div>

            <div className="card">
              <h3>Reported Users</h3>
              <h1>7</h1>
              <p>Require Review</p>
            </div>
          </div>

          {/* Recent Activities */}

          <div className="card">
            <h2 className="mb-2">Recent Activities</h2>

            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Activity</th>
                  <th>User / Company</th>
                  <th>Time</th>
                </tr>
              </thead>

              <tbody>
                {activities.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.activity}</td>
                    <td>{item.user}</td>
                    <td>{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;

import { useState } from "react";
import Navbar from "../../components/Navbar";
import ScheduleInterview from "./interviewForm";

// const getStatusClass = (status) => {
//   switch (status) {
//     case "Scheduled":
//       return "status status-active";

//     case "Pending":
//       return "status status-pending";

//     case "Completed":
//       return "status status-inactive";

//     case "Cancelled":
//       return "status status-rejected";

//     default:
//       return "status";
//   }
// };

function EmployerInterview() {
  const [showModal, setShowModal] = useState(false);
  const [interviews, setInterviews] = useState([
    {
      id: 1,
      candidate: "Rahul Sharma",
      job: "React Developer",
      company: "ABC Technologies",
      date: "20 Jul 2026",
      time: "10:00 AM",
      mode: "Online",
      interviewer: "John Smith",
      status: "Scheduled",
    },
    {
      id: 2,
      candidate: "Priya Patil",
      job: "Java Full Stack Developer",
      company: "ABC Technologies",
      date: "21 Jul 2026",
      time: "02:30 PM",
      mode: "Offline",
      interviewer: "Amit Kumar",
      status: "Pending",
    },
    {
      id: 3,
      candidate: "Akshay Bharati",
      job: "MERN Stack Developer",
      company: "ABC Technologies",
      date: "23 Jul 2026",
      time: "11:00 AM",
      mode: "Online",
      interviewer: "Neha Gupta",
      status: "Scheduled",
    },
    {
      id: 4,
      candidate: "Sneha Joshi",
      job: "Node.js Developer",
      company: "ABC Technologies",
      date: "24 Jul 2026",
      time: "04:00 PM",
      mode: "Online",
      interviewer: "Raj Verma",
      status: "Completed",
    },
    {
      id: 5,
      candidate: "Rohit Deshmukh",
      job: "Frontend Developer",
      company: "ABC Technologies",
      date: "25 Jul 2026",
      time: "09:30 AM",
      mode: "Offline",
      interviewer: "Pooja Singh",
      status: "Scheduled",
    },
    {
      id: 6,
      candidate: "Anjali Kulkarni",
      job: "UI/UX Designer",
      company: "ABC Technologies",
      date: "26 Jul 2026",
      time: "03:00 PM",
      mode: "Online",
      interviewer: "Karan Mehta",
      status: "Pending",
    },
    {
      id: 7,
      candidate: "Vikas Yadav",
      job: "Python Developer",
      company: "ABC Technologies",
      date: "27 Jul 2026",
      time: "11:30 AM",
      mode: "Offline",
      interviewer: "Shweta Rao",
      status: "Scheduled",
    },
    {
      id: 8,
      candidate: "Meera Nair",
      job: "QA Engineer",
      company: "ABC Technologies",
      date: "28 Jul 2026",
      time: "01:00 PM",
      mode: "Online",
      interviewer: "Rakesh Jain",
      status: "Completed",
    },
    {
      id: 9,
      candidate: "Arjun Patil",
      job: "DevOps Engineer",
      company: "ABC Technologies",
      date: "29 Jul 2026",
      time: "05:00 PM",
      mode: "Online",
      interviewer: "Sanjay Patel",
      status: "Scheduled",
    },
    {
      id: 10,
      candidate: "Kavita Sharma",
      job: "Backend Developer",
      company: "ABC Technologies",
      date: "30 Jul 2026",
      time: "10:30 AM",
      mode: "Offline",
      interviewer: "Anil Joshi",
      status: "Pending",
    },
  ]);
  const addInterview = (interview) => {
    setInterviews((prev) => [...prev, interview]);
  };

  return (
    <>
      <Navbar />

      <div className="dashboard-page">
        <div className="container mt-2">
          <div className="dashboard-header flex-between mb-3">
            <div>
              <h1>Schedule Interview</h1>
              <p>Create and manage candidate interviews.</p>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => setShowModal(true)}
            >
              + Schedule Interview
            </button>
          </div>

          <div className="card">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Candidate</th>
                  <th>Job</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Mode</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {interviews.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.candidate}</td>
                    <td>{item.job}</td>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    <td>{item.mode}</td>

                    <td>
                      <span className="status status-active">
                        {item.status}
                      </span>
                    </td>

                    <td>
                      <button className="btn btn-primary">View</button>

                      <button
                        className="btn btn-danger"
                        style={{ marginLeft: 8 }}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ScheduleInterview
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSchedule={addInterview}
      />
    </>
  );
}

export default EmployerInterview;

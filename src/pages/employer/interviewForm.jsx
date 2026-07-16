import { useState } from "react";

function ScheduleInterview({ isOpen, onClose, onSchedule }) {
  const [form, setForm] = useState({
    candidate: "",
    job: "",
    date: "",
    time: "",
    mode: "Online",
    interviewer: "",
    meetingLink: "",
    notes: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const interview = {
      id: Date.now(),
      ...form,
      status: "Scheduled",
    };

    onSchedule(interview);

    setForm({
      candidate: "",
      job: "",
      date: "",
      time: "",
      mode: "Online",
      interviewer: "",
      meetingLink: "",
      notes: "",
    });

    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">

        <div className="flex-between mb-3">
          <h2>Schedule Interview</h2>

          <button
            className="btn btn-danger"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="grid grid-2">

            <div>
              <label>Candidate</label>

              <select
                className="input"
                name="candidate"
                value={form.candidate}
                onChange={handleChange}
              >
                <option value="">Select Candidate</option>
                <option>Rahul Sharma</option>
                <option>Akshay Bharati</option>
                <option>Priya Patil</option>
              </select>
            </div>

            <div>
              <label>Job Position</label>

              <select
                className="input"
                name="job"
                value={form.job}
                onChange={handleChange}
              >
                <option value="">Select Job</option>
                <option>React Developer</option>
                <option>Node Developer</option>
                <option>Java Full Stack</option>
              </select>
            </div>

            <div>
              <label>Interview Date</label>

              <input
                className="input"
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Interview Time</label>

              <input
                className="input"
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Interview Mode</label>

              <select
                className="input"
                name="mode"
                value={form.mode}
                onChange={handleChange}
              >
                <option>Online</option>
                <option>Offline</option>
              </select>
            </div>

            <div>
              <label>Interviewer</label>

              <input
                className="input"
                name="interviewer"
                value={form.interviewer}
                onChange={handleChange}
                placeholder="John Smith"
              />
            </div>

          </div>

          {form.mode === "Online" && (
            <div className="mt-2">
              <label>Meeting Link</label>

              <input
                className="input"
                name="meetingLink"
                value={form.meetingLink}
                onChange={handleChange}
                placeholder="https://meet.google.com/..."
              />
            </div>
          )}

          <div className="mt-2">
            <label>Notes</label>

            <textarea
              className="input"
              rows="4"
              name="notes"
              value={form.notes}
              onChange={handleChange}
            />
          </div>

          <div className="mt-3 flex-between">
            <button
              type="button"
              className="btn btn-danger"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="btn btn-primary"
            >
              Schedule Interview
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default ScheduleInterview;
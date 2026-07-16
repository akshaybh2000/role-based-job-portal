import { useState } from "react";

function AddJob({ isOpen, onClose, onAddJob }) {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    experience: "",
    salary: "",
    type: "Full Time",
    vacancies: "",
    skills: "",
    description: "",
    deadline: "",
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

    const job = {
      id: Date.now(),
      ...form,
      status: "Active",
      postedOn: new Date().toLocaleDateString(),
    };

    onAddJob(job);

    setForm({
      title: "",
      company: "",
      location: "",
      experience: "",
      salary: "",
      type: "Full Time",
      vacancies: "",
      skills: "",
      description: "",
      deadline: "",
    });

    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="flex-between mb-3">
          <h2>Add New Job</h2>

          <button className="btn btn-danger" onClick={onClose}>
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-2">
            <div>
              <label>Job Title</label>

              <input
                className="input"
                name="title"
                placeholder="React Developer"
                value={form.title}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Company Name</label>

              <input
                className="input"
                name="company"
                placeholder="ABC Technologies"
                value={form.company}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Location</label>

              <input
                className="input"
                name="location"
                placeholder="Pune"
                value={form.location}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Experience</label>

              <input
                className="input"
                name="experience"
                placeholder="2-4 Years"
                value={form.experience}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Salary</label>

              <input
                className="input"
                name="salary"
                placeholder="₹6 - ₹10 LPA"
                value={form.salary}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Job Type</label>

              <select
                className="input"
                name="type"
                value={form.type}
                onChange={handleChange}
              >
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Internship</option>
                <option>Remote</option>
                <option>Hybrid</option>
              </select>
            </div>

            <div>
              <label>Vacancies</label>

              <input
                className="input"
                type="number"
                name="vacancies"
                placeholder="5"
                value={form.vacancies}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Application Deadline</label>

              <input
                className="input"
                type="date"
                name="deadline"
                value={form.deadline}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mt-2">
            <label>Required Skills</label>

            <input
              className="input"
              name="skills"
              placeholder="React, Node.js, MongoDB"
              value={form.skills}
              onChange={handleChange}
            />
          </div>

          <div className="mt-2">
            <label>Job Description</label>

            <textarea
              className="input"
              rows="5"
              name="description"
              placeholder="Enter job description..."
              value={form.description}
              onChange={handleChange}
            />
          </div>

          <div className="mt-3 flex-between">
            <button type="button" className="btn btn-danger" onClick={onClose}>
              Cancel
            </button>

            <button type="submit" className="btn btn-primary">
              Add Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddJob;

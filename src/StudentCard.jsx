function StudentCard({ name, role, course, level, skills }) {
  return (
    <div className="student-card">
      <h2>{name}</h2>

      <p>{role}</p>

      <p>Course: {course}</p>

      <p>Level: {level}</p>

      <h3>Skills</h3>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentCard;

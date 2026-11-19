import StudentCard from "./StudentCard";

function App() {

  // Student data
  const students = [
    {
      id: 1,
      name: "George Ozoemena",
      role: "Software Developer",
      course: "ReactJS",
      level: "Intermediate",
      skills: ["JavaScript", "React", "Git"]
    },

    {
      id: 2,
      name: "Victoria",
      role: "UI/UX Designer",
      course: "Frontend Development",
      level: "Beginner",
      skills: ["Figma", "HTML", "CSS"]
    }
  ];

  return (
    <div>

      <h1>Student Dashboard</h1>

      {students.map((student) => (

        <StudentCard
          key={student.id}
          name={student.name}
          role={student.role}
          course={student.course}
          level={student.level}
          skills={student.skills}
        />

      ))}

    </div>
  );

}

export default App;
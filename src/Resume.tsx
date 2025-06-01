import './Resume.css';

function Resume() {
  return (
    <div className="resume-page">
      <h1>Resume</h1>
      <a href="/resume.pdf" download className="resume-download">Download My Resume</a>
      <h2>Proficiencies</h2>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>TypeScript</li>
        <li>Node.js</li>
        <li>CSS</li>
        <li>HTML</li>
      </ul>
    </div>
  );
}

export default Resume;
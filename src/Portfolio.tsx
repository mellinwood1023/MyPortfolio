import './Portfolio.css';

function Portfolio() {
  return (
    <main>
      <section className="hero">
        <h1>Maggie Ellinwood</h1>
        <h2>Full Stack Developer</h2>
        <p>Welcome to my portfolio! I specialize in building modern, responsive web applications.</p>
      </section>

      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Project One</h3>
            <p>A brief description of the project.</p>
          </div>
          <div className="project-card">
            <h3>Project Two</h3>
            <p>A brief description of the project.</p>
          </div>
          <div className="project-card">
            <h3>Project Three</h3>
            <p>A brief description of the project.</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="contact-container">
          <h2>Contact Me</h2>
          <p className="text-gray-700 mb-4">
        
          </p>
          <p>Feel free to reach out ❤️</p>
          <a 
            href="mailto:mellinwood1023.com" 
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition"
          >
            📧 Get in Touch
          </a>
          <br />
          <a 
            href="https://www.linkedin.com/in/magdalene-e-855814352" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}

export default Portfolio;
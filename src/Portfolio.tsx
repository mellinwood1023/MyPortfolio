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
        <h2>Contact Me</h2>
        <p>Feel free to reach out for collaborations or just a friendly chat!</p>
        <a href="mailto:maggie@example.com" className="contact-button">Get in Touch</a>
      </section>
    </main>
  );
}

export default Portfolio;
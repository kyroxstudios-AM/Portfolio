import Image from 'next/image';

const navItems = ['About', 'Focus', 'Credential', 'Contact'];

const focusAreas = [
  'Computer Technology',
  'Artificial Intelligence',
  'Research Foundations',
  'Product Strategy',
  'Technical Leadership',
  'Freelance Delivery',
];

const highlights = [
  ['2026-2030', 'BCA research student at Central University of Kerala'],
  ['Current', 'Chief Technology Officer at Contios'],
  ['Kerala', 'Studying, researching, and building practical technology'],
];

const timeline = [
  {
    title: 'Central University of Kerala',
    meta: 'BCA batch 2026-2030',
    text: 'Building an academic foundation in computing with a research-led interest in artificial intelligence.',
  },
  {
    title: 'Contios',
    meta: 'Chief Technology Officer',
    text: 'Freelance technology leadership across product thinking, systems direction, and practical implementation.',
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <nav className="site-nav">
          <a className="brand" href="#top">
            Abhishek Meena
          </a>
          <div className="nav-links">
            {navItems.map((item) => (
              <a href={`#${item.toLowerCase()}`} key={item}>
                {item}
              </a>
            ))}
          </div>
          <a className="nav-cta" href="mailto:m.abhishek1913@gmail.com">
            Email
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <Image
          alt="Abhishek Meena portrait background"
          className="hero-bg"
          fill
          priority
          sizes="100vw"
          src="/abhishek-meena.jpeg"
        />
        <div className="hero-overlay" />

        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Kerala, India</p>
            <h1>Abhishek Meena</h1>
            <p className="hero-text">
              BCA research student at Central University of Kerala and Chief
              Technology Officer at Contios, focused on computer technology,
              artificial intelligence, and practical digital products.
            </p>
            <div className="hero-actions">
              <a
                className="button button-light"
                href="https://www.linkedin.com/in/abhishek-meena-450ba5427/"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                className="button button-outline"
                href="https://github.com/kyroxstudios-AM"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="button button-outline"
                href="https://x.com/Abhipbc"
                rel="noreferrer"
                target="_blank"
              >
                X @Abhipbc
              </a>
              <a
                className="button button-outline"
                href="mailto:m.abhishek1913@gmail.com"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="portrait-wrap">
            <div className="portrait-offset" />
            <div className="portrait-card">
              <Image
                alt="Portrait of Abhishek Meena"
                fill
                priority
                sizes="40vw"
                src="/abhishek-meena.jpeg"
              />
            </div>
          </div>
        </div>

        <div className="highlight-band">
          <div className="highlight-grid">
            {highlights.map(([label, text]) => (
              <div className="highlight-item" key={label}>
                <p>{label}</p>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white" id="about">
        <div className="section-grid">
          <div>
            <p className="section-label">About</p>
            <h2>Research-minded student. Practical technology builder.</h2>
          </div>
          <div className="body-copy">
            <p>
              I am a BCA student at Central University of Kerala, batch
              2026-2030, developing a strong base in computer science with a
              research-oriented interest in artificial intelligence.
            </p>
            <p>
              I also work freelance as Chief Technology Officer at Contios,
              where I help shape technical direction and turn ideas into
              structured, usable digital systems.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-mint" id="focus">
        <div className="focus-grid">
          <div>
            <p className="section-label">Focus</p>
            <h2>Building foundations for AI-era products.</h2>
          </div>
          <div className="focus-list">
            {focusAreas.map((area) => (
              <div className="focus-card" key={area}>
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="credential">
        <div className="credential-grid">
          <article className="credential-image">
            <Image
              alt="IBM SkillsBuild AI Fundamentals certificate graphic"
              fill
              sizes="(min-width: 1024px) 46vw, 92vw"
              src="/ai-fundamentals.png"
            />
          </article>
          <div className="credential-copy">
            <p className="gold-label">Credential</p>
            <h2>AI Fundamentals: Foundations for Understanding AI</h2>
            <p>
              IBM SkillsBuild learning that supports my interest in artificial
              intelligence, modern computing, and practical technology
              leadership.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="path-grid">
          <div>
            <p className="section-label">Path</p>
            <h2>Learning, leading, and shipping.</h2>
          </div>
          <div className="timeline">
            {timeline.map((item) => (
              <article className="timeline-card" key={item.title}>
                <div>
                  <p>{item.meta}</p>
                  <h3>{item.title}</h3>
                </div>
                <span>{item.text}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="footer-inner">
          <div>
            <p className="gold-label">Contact</p>
            <h2>Let&apos;s build something useful.</h2>
            <p>
              Student and freelance CTO open to technology, AI, and product
              opportunities.
            </p>
          </div>
          <div className="footer-actions">
            <a className="button button-light" href="mailto:m.abhishek1913@gmail.com">
              Email Me
            </a>
            <a
              className="button button-outline"
              href="https://github.com/kyroxstudios-AM"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="button button-outline"
              href="https://x.com/Abhipbc"
              rel="noreferrer"
              target="_blank"
            >
              X @Abhipbc
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Learn', href: '#learn' },
  { label: 'Trade Examples', href: '#examples' },
  { label: 'Simulator', href: '#simulator' },
  { label: 'Login / Sign Up', href: '#auth' },
];

const featureCards = [
  {
    id: 'learn',
    number: '01',
    title: 'Beginner Trading Lessons',
    description:
      'Clear educational modules that break down trading concepts with plain language and visual guidance.',
  },
  {
    id: 'examples',
    number: '02',
    title: 'Example Trades',
    description:
      'Study real setup examples to understand entries, exits, risk, and the logic behind each move.',
  },
  {
    id: 'simulator',
    number: '03',
    title: 'Practice Trading Simulator',
    description:
      'Build confidence in a risk-free environment before transitioning from learning to live markets.',
  },
  {
    id: 'auth',
    number: '04',
    title: 'Learning Roadmap',
    description:
      'Follow a guided progression designed for complete beginners who need clarity on what to learn next.',
  },
];

const insightCards = [
  {
    label: 'Problem',
    body: 'New traders face scattered information, costly mistakes, and no clear starting point.',
    className: 'panel-card emphasis',
  },
  {
    label: 'Solution',
    body: 'One learning roadmap with lessons, examples, and simulation built around beginner safety.',
    className: 'panel-card',
  },
  {
    label: 'Focus',
    body: 'Visual explanations, practical setups, and step-by-step progress instead of noise.',
    className: 'panel-card accent',
  },
];

function LogoMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 64 64" role="img">
        <rect x="8" y="34" width="10" height="18" rx="3" />
        <rect x="27" y="22" width="10" height="30" rx="3" />
        <rect x="46" y="12" width="10" height="40" rx="3" />
        <path
          d="M13 20 L32 11 L51 19"
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="TradeSetup home" onClick={handleNavClick}>
          <LogoMark />
          <span className="brand-text">TradeSetup</span>
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="site-nav"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav ${isMenuOpen ? 'is-open' : ''}`} id="site-nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={handleNavClick}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Trading education for real beginners</p>
            <h1>Learn Trading Step-by-Step and Practice Without Risk.</h1>
            <p className="hero-text">
              TradeSetup gives new traders a structured path with visual lessons, practical
              examples, and a simulator that builds confidence before real money is on the line.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#learn">
                Start Learning
              </a>
              <a className="button button-secondary" href="#features">
                Explore Features
              </a>
            </div>
          </div>

          <div className="hero-panel" aria-label="TradeSetup overview">
            <div className="panel-grid">
              {insightCards.map((card) => (
                <article key={card.label} className={card.className}>
                  <span className="panel-label">{card.label}</span>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="feature-section" id="features">
          <div className="section-heading">
            <p className="eyebrow">What the platform offers</p>
            <h2>Built to make trading education simple, structured, and usable.</h2>
          </div>

          <div className="feature-grid">
            {featureCards.map((card) => (
              <article key={card.id} className="feature-card" id={card.id}>
                <div className="feature-icon">{card.number}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

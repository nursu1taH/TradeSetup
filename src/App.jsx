import { useState } from 'react';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Trust', href: '#trust' },
  { label: 'Contact', href: '#footer' },
];

const featureCards = [
  {
    id: 'lessons',
    icon: 'book',
    title: 'Beginner Lessons',
    description: 'Learn trading from basics in a simple way with clear visual breakdowns.',
  },
  {
    id: 'examples',
    icon: 'target',
    title: 'Trade Examples',
    description: 'Review real trade setups with entry, stop loss, and target explained clearly.',
  },
  {
    id: 'simulator',
    icon: 'screen',
    title: 'Practice Simulator',
    description: 'Practice trading without risking real money while building better habits.',
  },
  {
    id: 'strategy',
    icon: 'brain',
    title: 'Strategy Building',
    description: 'Understand how to think like a trader instead of copying random signals.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Learn the basics',
    description: 'Start with simple lessons that explain markets, risk, and execution in plain language.',
  },
  {
    number: '02',
    title: 'Understand trade setups',
    description: 'See how entries, stop loss placement, and targets work together in real examples.',
  },
  {
    number: '03',
    title: 'Practice and improve',
    description: 'Use guided practice to build confidence before putting real money on the line.',
  },
];

const stats = [
  { value: '100+', label: 'learners' },
  { value: '4', label: 'core learning paths' },
  { value: 'Beginner-friendly', label: 'platform' },
];

const trustPoints = [
  'Built for beginner traders',
  'Simple and practical learning approach',
  'Clear structure instead of information overload',
];

const testimonials = [
  {
    quote:
      'This feels like the type of platform that finally explains setups without assuming prior knowledge.',
    author: 'Early learner feedback',
  },
  {
    quote:
      'The flow is simple, the examples are practical, and the product already feels more trustworthy than a basic landing page.',
    author: 'Product preview note',
  },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { label: 'Instagram', href: 'https://www.instagram.com' },
  { label: 'X', href: 'https://x.com' },
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

function FeatureIcon({ type }) {
  if (type === 'book') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v16H7.5A2.5 2.5 0 0 0 5 21.5z" />
        <path d="M5 5.5V21M9 7h6M9 11h6" fill="none" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 'target') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="7" fill="none" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3" fill="none" strokeWidth="1.8" />
        <path d="M12 5v2.5M19 12h-2.5M12 19v-2.5M5 12h2.5" fill="none" strokeWidth="1.8" />
      </svg>
    );
  }

  if (type === 'screen') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="5" width="17" height="11" rx="2.5" fill="none" strokeWidth="1.8" />
        <path
          d="M8 19h8M12 16v3M7.5 12l2.5-3 2.5 2 3-4"
          fill="none"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M9 6.5a3 3 0 0 1 6 0c0 1.5-1 2.2-1.9 2.9-.9.6-1.6 1.2-1.6 2.3M12 18h.01"
        fill="none"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M6.5 9.5a5.5 5.5 0 1 1 11 0 5.7 5.7 0 0 1-1.1 3.4L12 19l-4.4-6.1A5.7 5.7 0 0 1 6.5 9.5Z"
        fill="none"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DashboardPreview() {
  return (
    <div className="dashboard-preview" id="demo" aria-label="Trading dashboard style preview">
      <div className="dashboard-topbar">
        <div>
          <p className="dashboard-label">Live learning path</p>
          <strong>EUR/USD Momentum Setup</strong>
        </div>
        <span className="dashboard-badge">Safe practice mode</span>
      </div>

      <div className="dashboard-grid">
        <div className="chart-card">
          <div className="chart-header">
            <span>Setup confidence</span>
            <strong>82%</strong>
          </div>
          <div className="chart-visual">
            <span className="chart-line chart-line-one" />
            <span className="chart-line chart-line-two" />
            <span className="chart-dot chart-dot-one" />
            <span className="chart-dot chart-dot-two" />
            <span className="chart-dot chart-dot-three" />
          </div>
          <div className="chart-metrics">
            <div>
              <span>Entry</span>
              <strong>1.0842</strong>
            </div>
            <div>
              <span>Stop</span>
              <strong>1.0818</strong>
            </div>
            <div>
              <span>Target</span>
              <strong>1.0899</strong>
            </div>
          </div>
        </div>

        <div className="mini-card lesson-card">
          <span className="mini-label">Today&apos;s lesson</span>
          <strong>Breakout vs. fakeout</strong>
          <p>Understand why patience matters before entry.</p>
        </div>

        <div className="mini-card checklist-card">
          <span className="mini-label">Setup checklist</span>
          <ul>
            <li>Trend confirmed</li>
            <li>Risk defined</li>
            <li>Target mapped</li>
          </ul>
        </div>

        <div className="mini-card progress-card">
          <span className="mini-label">Weekly progress</span>
          <div className="progress-bars" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <p>Practice streak: 6 sessions</p>
        </div>
      </div>
    </div>
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
            <p className="eyebrow">Beginner-first trading education</p>
            <h1>Learn Trading Step-by-Step Without Losing Money</h1>
            <p className="hero-text">
              A beginner-friendly platform to understand markets, master trade setups, and
              practice safely.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#features">
                Start Learning
              </a>
              <a className="button button-secondary" href="#demo">
                View Demo
              </a>
            </div>

            <div className="hero-points">
              <span>Clear lessons</span>
              <span>Guided setup examples</span>
              <span>Practice without pressure</span>
            </div>
          </div>

          <DashboardPreview />
        </section>

        <section className="feature-section" id="features">
          <div className="section-heading">
            <p className="eyebrow">Core features</p>
            <h2>Everything is built to make the first months of trading feel less confusing.</h2>
          </div>

          <div className="feature-grid">
            {featureCards.map((card) => (
              <article key={card.id} className="feature-card" id={card.id}>
                <div className="feature-icon">
                  <FeatureIcon type={card.icon} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="how-section" id="how-it-works">
          <div className="section-heading narrow">
            <p className="eyebrow">How it works</p>
            <h2>A simple path from confusion to confident practice.</h2>
          </div>

          <div className="steps-grid">
            {steps.map((step) => (
              <article key={step.number} className="step-card">
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="trust-section" id="trust">
          <div className="trust-copy">
            <p className="eyebrow">Trust and clarity</p>
            <h2>Designed to feel like a real product for beginners, not just a polished mockup.</h2>
            <p className="section-text">
              TradeSetup is shaped around practical learning, readable guidance, and safer
              decision-making for people starting from zero.
            </p>

            <div className="trust-list">
              {trustPoints.map((point) => (
                <div key={point} className="trust-item">
                  <span className="trust-bullet" aria-hidden="true" />
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="trust-panel">
            <div className="stats-grid">
              {stats.map((stat) => (
                <article key={stat.label} className="stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>

            <div className="testimonial-grid">
              {testimonials.map((item) => (
                <blockquote key={item.author} className="testimonial-card">
                  <p>{item.quote}</p>
                  <footer>{item.author}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="footer">
        <div className="footer-brand">
          <a className="brand" href="#home">
            <LogoMark />
            <span className="brand-text">TradeSetup</span>
          </a>
          <p>
            A clean, beginner-friendly platform focused on helping new traders understand setups
            and practice with more confidence.
          </p>
        </div>

        <div className="footer-column">
          <h3>About</h3>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#trust">Why Beginners Trust It</a>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <a href="mailto:hello@tradesetup.app">hello@tradesetup.app</a>
          <a href="tel:+10000000000">+1 (000) 000-0000</a>
        </div>

        <div className="footer-column">
          <h3>Social</h3>
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>

        <p className="disclaimer">
          Trading involves risk. This platform is for educational purposes and does not promise
          financial results.
        </p>
      </footer>
    </div>
  );
}

import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Asterisk,
  Braces,
  Check,
  Code2,
  Layers3,
  Mail,
  MousePointer2,
  Shapes,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { FallingLine } from "@/components/falling-line";
import { SiteHeader } from "@/components/site-header";

const projects = [
  {
    number: "01",
    name: "Fresh Fields",
    category: "E-commerce experience",
    type: "Concept study",
    description:
      "A clean shopping experience for fresh produce, connecting local growers with everyday customers.",
    visual: "fresh",
    tags: ["UX strategy", "UI design", "Responsive"],
  },
  {
    number: "02",
    name: "BOP Dashboard",
    category: "SaaS product design",
    type: "Concept study",
    description:
      "A focused workspace concept that turns complex project information into a calmer, clearer overview.",
    visual: "BOP",
    tags: ["Dashboard", "Design system", "Prototyping"],
  },
  {
    number: "03",
    name: "Mori Studio",
    category: "Creative brand website",
    type: "Concept study",
    description:
      "A minimal digital storefront built around expressive typography, considered spacing, and simple browsing.",
    visual: "mori",
    tags: ["Art direction", "Web design", "Frontend"],
  },
] as const;

const skills = [
  "UI/UX Design",
  "Figma",
  "Wireframing",
  "Prototyping",
  "Design Systems",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Responsive Design",
  "Accessibility",
  "Git",
];

function ProjectVisual({
  variant,
}: {
  variant: (typeof projects)[number]["visual"];
}) {
  if (variant === "fresh") {
    return (
      <div
        aria-label="Fresh Fields produce store interface preview"
        className="project-visual visual-fresh"
        role="img"
      >
        <div className="fresh-window-bar">
          <span />
          <span />
          <span />
          <b>fresh fields</b>
        </div>
        <div className="fresh-layout">
          <div className="fresh-copy">
            <small>GOOD FOOD, GROWN CLOSE</small>
            <strong>
              Fresh picks
              <br />
              for every day.
            </strong>
            <i>Explore seasonal produce ↗</i>
          </div>
          <div className="produce-orbit">
            <span className="produce produce-one">🥬</span>
            <span className="produce produce-two">🥕</span>
            <span className="produce produce-three">🥑</span>
            <span className="produce produce-four">🍅</span>
          </div>
        </div>
        <div className="fresh-bottom">
          <span>LOCAL HARVEST</span>
          <span>FRESH • SIMPLE • GOOD</span>
        </div>
      </div>
    );
  }

  if (variant === "forma") {
    return (
      <div
        aria-label="Forma SaaS dashboard interface preview"
        className="project-visual visual-forma"
        role="img"
      >
        <div className="forma-sidebar">
          <b>f.</b>
          <span className="side-active" />
          <span />
          <span />
          <span />
          <div />
        </div>
        <div className="forma-main">
          <div className="forma-top">
            <span>Workspace / Overview</span>
            <i>JD</i>
          </div>
          <div className="forma-heading">
            <small>MONDAY, 09:41 AM</small>
            <strong>
              Your work,
              <br />
              in good shape.
            </strong>
          </div>
          <div className="forma-stats">
            <div>
              <small>In progress</small>
              <b>08</b>
              <em>↗ 12%</em>
            </div>
            <div>
              <small>Completed</small>
              <b>24</b>
              <em>↗ 8%</em>
            </div>
          </div>
          <div className="forma-chart">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      aria-label="Mori Studio creative website interface preview"
      className="project-visual visual-mori"
      role="img"
    >
      <div className="mori-nav">
        <b>
          mori<span>®</span>
        </b>
        <small>OBJECTS FOR SLOW LIVING</small>
        <i>MENU +</i>
      </div>
      <div className="mori-content">
        <small>FORM MEETS FEELING</small>
        <strong>
          Make room
          <br />
          for <em>meaning.</em>
        </strong>
        <span className="mori-object" />
      </div>
      <div className="mori-footer">
        <span>COLLECTION 01 — 2026</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="home">
        <section className="hero section-shell">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" /> UI/UX DEVELOPER &amp; WEB
              DESIGNER
            </div>
            <h1>
              <FallingLine className="hero-line" text="Design with" />
              <FallingLine
                className="hero-line hero-line-accent"
                startDelay={390}
                text="intention."
              />
              <span className="hero-line hero-line-small">
                Build with purpose.
              </span>
            </h1>
            <p className="hero-description">
              I turn ideas into thoughtful digital experiences — pairing clear
              user-centered design with clean, responsive frontend development.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="#work">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a className="text-link text-link-light" href="#about">
                A little about me <ArrowDownRight size={16} />
              </a>
            </div>
            <div className="hero-meta">
              <span>
                <span className="availability-dot" /> Open to opportunities
              </span>
              <span>Based in the Philippines</span>
            </div>
          </div>

          <div
            aria-label="Abstract design and development illustration"
            className="hero-art"
            role="img"
          >
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-sticker">
              <Asterisk size={21} />
              <span>
                DESIGN
                <br />
                MEETS
                <br />
                DETAIL
              </span>
            </div>
            <div className="art-window">
              <div className="art-window-top">
                <div className="window-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <span>jords.studio</span>
                <ArrowUpRight size={13} />
              </div>
              <div className="art-window-body">
                <div className="art-mini-label">A DIGITAL SPACE</div>
                <div className="art-mini-title">
                  Ideas into
                  <br />
                  <em>experiences.</em>
                </div>
                <div className="art-mini-line" />
                <div className="art-mini-grid">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
            <div className="art-floating-card">
              <div className="floating-icon">
                <Braces size={17} />
              </div>
              <div>
                <b>Design + Code</b>
                <small>One thoughtful process</small>
              </div>
              <Check size={17} />
            </div>
            <div className="art-caption">
              CURIOUS BY NATURE. PRECISE BY DESIGN.
            </div>
          </div>
          <a
            aria-label="Scroll to selected work"
            className="hero-scroll"
            href="#work"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={15} />
          </a>
        </section>

        <section className="intro-strip" aria-label="Portfolio introduction">
          <div className="intro-strip-inner">
            <Sparkles size={17} />
            <p>
              Good design is not just how it looks. It&apos;s how naturally it
              works.
            </p>
            <span>✳</span>
          </div>
        </section>

        <section className="work-section section-shell" id="work">
          <div className="section-heading">
            <div>
              <div className="eyebrow eyebrow-dark">
                <span className="eyebrow-dot" /> SELECTED WORK
              </div>
              <h2>
                Ideas made <em>visible.</em>
              </h2>
            </div>
            <p>
              A few concept projects exploring how thoughtful design and
              frontend craft can make everyday digital experiences better.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-preview-wrap">
                  <ProjectVisual variant={project.visual} />
                  <span className="project-number">{project.number}</span>
                </div>
                <div className="project-info">
                  <div className="project-title-row">
                    <div>
                      <p className="project-category">{project.category}</p>
                      <h3>{project.name}</h3>
                    </div>
                    <span className="project-type">{project.type}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="work-note">
            <Asterisk size={14} /> These are starter concept studies. Replace
            them with your own case studies, project links, and results.
          </p>
        </section>

        <section className="about-section" id="about">
          <div className="about-inner section-shell">
            <div className="about-left">
              <div className="eyebrow eyebrow-dark">
                <span className="eyebrow-dot" /> A LITTLE ABOUT ME
              </div>
              <h2>
                Designer&apos;s eye.
                <br />
                <em>Developer&apos;s</em> mindset.
              </h2>
            </div>
            <div className="about-right">
              <p className="about-lead">
                I&apos;m a UI/UX Developer &amp; Web Designer who enjoys making
                the digital feel simple, useful, and human.
              </p>
              <p className="about-body">
                I care about the full experience — understanding the problem,
                shaping the interface, and bringing the final design to life in
                code. My approach is grounded in curiosity, clear communication,
                and attention to the details people notice when everything just
                works.
              </p>
              <a className="text-link" href="#contact">
                Let&apos;s create something meaningful{" "}
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="toolkit-section section-shell" id="toolkit">
          <div className="toolkit-top">
            <div>
              <div className="eyebrow eyebrow-dark">
                <span className="eyebrow-dot" /> MY TOOLKIT
              </div>
              <h2>
                Good tools.
                <br />
                <em>Better thinking.</em>
              </h2>
            </div>
            <p>
              The tools are part of the process, not the point. I choose what
              helps create a clearer, more useful result.
            </p>
          </div>
          <div className="toolkit-content">
            <div className="toolkit-feature">
              <div className="toolkit-icon-grid">
                <span>
                  <Shapes size={22} />
                </span>
                <span>
                  <Code2 size={22} />
                </span>
                <span>
                  <Layers3 size={22} />
                </span>
                <span>
                  <MousePointer2 size={22} />
                </span>
              </div>
              <div>
                <b>Design to development</b>
                <p>
                  From early sketches and prototypes to polished, responsive
                  interfaces.
                </p>
              </div>
            </div>
            <div className="skill-list">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="process-section" id="process">
          <div className="process-inner section-shell">
            <div className="process-heading">
              <div className="eyebrow">
                <span className="eyebrow-dot" /> HOW I WORK
              </div>
              <h2>
                Make it clear.
                <br />
                <em>Make it count.</em>
              </h2>
              <p>
                A simple, collaborative process keeps the work focused from
                first idea to final detail.
              </p>
            </div>
            <div className="process-steps">
              <article>
                <span className="step-number">01 / DISCOVER</span>
                <div className="step-icon">
                  <MousePointer2 size={20} />
                </div>
                <h3>Understand</h3>
                <p>
                  Start with the people, goals, and problem. Ask better
                  questions before jumping into screens.
                </p>
              </article>
              <article>
                <span className="step-number">02 / DESIGN</span>
                <div className="step-icon">
                  <Layers3 size={20} />
                </div>
                <h3>Shape the experience</h3>
                <p>
                  Explore the structure, test ideas, and create a visual system
                  that feels intentional.
                </p>
              </article>
              <article>
                <span className="step-number">03 / DEVELOP</span>
                <div className="step-icon">
                  <Braces size={20} />
                </div>
                <h3>Bring it to life</h3>
                <p>
                  Build responsive interfaces with clean components, thoughtful
                  interactions, and care.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="contact-section section-shell" id="contact">
          <div className="contact-card">
            <div className="contact-orb contact-orb-one" />
            <div className="contact-orb contact-orb-two" />
            <div className="eyebrow">
              <span className="eyebrow-dot" /> HAVE A PROJECT IN MIND?
            </div>
            <h2>
              Let&apos;s make
              <br />
              <em>good things</em> happen.
            </h2>
            <p>
              Have a product to shape, a website to build, or an opportunity to
              discuss? I&apos;d love to hear what you&apos;re working on.
            </p>
            <a
              className="button button-lime"
              href="mailto:your.email@example.com"
            >
              Say hello <Mail size={17} />
            </a>
            <div className="contact-bottom">
              <span>JORDS PORTFOLIO</span>
              <span>DESIGN WITH INTENTION — BUILD WITH PURPOSE</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <Link
          aria-label="Jords Portfolio back to top"
          className="brand-mark"
          href="#home"
        >
          jords<span>.</span>
        </Link>
        <p>Designed with intention. Built with care.</p>
        <a href="#home">
          Back to top <ArrowUpRight size={14} />
        </a>
        <span className="copyright">© {new Date().getFullYear()} Jords</span>
      </footer>
    </>
  );
}

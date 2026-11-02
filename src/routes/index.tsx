import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Plus,
  Send,
  Github,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shaurya — A little code. A lot of curiosity." },
      {
        name: "description",
        content:
          "The personal portfolio of Shaurya Pratap Singh. A little code, a lot of curiosity, and thoughtfully crafted digital experiences.",
      },
      { property: "og:title", content: "Shaurya — Personal portfolio" },
      {
        property: "og:description",
        content:
          "A little code. A lot of curiosity. Explore the personal portfolio of Shaurya Pratap Singh.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const jobs = [
  {
    role: "Front-End Developer Intern",
    org: "Helping Hut NGO",
    orgNote: "Apr 2026 – May 2026 · Internship",
    period: "Apr 2026 – May 2026",
    bullets: [
      "Owned the complete UI/UX redesign of the NGO’s newly launching website using Next.js, React, and Tailwind CSS.",
      "Resolved image loading and visual consistency issues across pages, delivering a polished, production-ready interface.",
      "Curated and gathered website content alongside development, taking ownership beyond core coding tasks.",
    ],
  },
];

const projects = [
  {
    title: "Parisara",
    description: "Community-driven environmental platform",
    screenshot: "/parisara-preview.png",
    githubUrl: "https://github.com/shauryasync/Parisara",
    liveUrl: "https://parisara.vercel.app",
    techStack: [
      "React 18",
      "Vite 6",
      "Tailwind CSS 3",
      "React Router 7",
      "Axios",
      "Lucide React",
      "Node.js",
      "Express 5",
      "Mongoose 9",
      "JWT",
      "Bcrypt",
      "Multer",
      "Cloudinary",
      "Brevo API",
      "MongoDB Atlas",
    ],
  },
  {
    title: "Verity",
    description: "NGO impact tracking · Full-stack platform",
    screenshot: "/verity-preview.png",
    details:
      "Verity is a full-stack web application designed to help nonprofit organizations manage events, coordinate volunteers, and measure community impact through a centralized dashboard. It gives NGOs one place to track initiatives, volunteer participation, and beneficiary outcomes.",
    githubUrl: "https://github.com/shauryasync/verity-impact",
    liveUrl: "https://verity-smoky.vercel.app/",
    techStack: [
      "Next.js 15",
      "React",
      "Tailwind CSS",
      "Lucide React",
      "Next.js API Routes",
      "MongoDB",
      "Vercel",
    ],
  },
  {
    title: "GitPeek",
    description: "GitHub repository search and discovery",
    screenshot: "/gitpeek-preview.png",
    details:
      "GitPeek is a React-based web application for searching and exploring GitHub repositories with a clean, simple interface.",
    githubUrl: "https://github.com/shauryasync/gitpeek",
    liveUrl: "https://gitpeek-sigma.vercel.app/",
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "GitHub REST API",
    ],
  },
];

function Index() {
  const [dialog, setDialog] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const selectedProject = projects.find((project) => project.title === dialog);
  return (
    <>
      <header className="site-header">
        <a href="#" className="wordmark" aria-label="Shaurya home">
          shaurya<span className="text-muted-foreground">.</span>
        </a>
        <Button variant="outline" size="sm" className="resume-button" asChild>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            Résumé <ArrowUpRight />
          </a>
        </Button>
      </header>
      <main>
        <section className="hero">
          <div className="hero-lines" aria-hidden="true" />
          <div className="hero-inner">
            <div className="portrait-wrap">
              <img
                className="portrait"
                src="/portrait.png"
                alt="Hand-drawn illustration of a person leaning back in a chair"
              />
              <a
                className="float-chip chip-gh"
                href="https://github.com/shauryasync"
                target="_blank"
                rel="noreferrer"
                aria-label="Shaurya's GitHub profile"
              >
                <Github size={13} /> GitHub
              </a>
              <a
                className="float-chip chip-li"
                href="https://www.linkedin.com/in/shaurya-pratap-singh-4567b7324/"
                target="_blank"
                rel="noreferrer"
                aria-label="Shaurya's LinkedIn profile"
              >
                <Linkedin size={13} /> LinkedIn
              </a>
            </div>
            <div className="hello">
              <span>Hey!</span> I'm Shaurya Pratap Singh
            </div>
            <h1>
              A little code.
              <br />A lot of <em>curiosity.</em>
            </h1>
            <div className="hero-actions">
              <Button asChild>
                <a href="#contact">
                  Let's talk <ArrowUpRight />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#work">
                  Explore my work <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
        </section>
        <section id="about" className="section">
          <div className="section-inner about-grid">
            <div>
              <span className="section-kicker">01 / A little introduction</span>
              <h2>
                A bit about me.
                <br />
                Beyond the screen.
              </h2>
            </div>
            <div className="about-copy">
              <p>
                A Full-Stack Developer who loves to take an idea and turn it
                into a purposeful application. I enjoy working within both
                front-end and back-end development as well as creating practical
                solutions.
              </p>
              <p>
                I am currently studying my BCA. I'm curious, disciplined, a team
                player and always looking to learn something new.
              </p>
              <a className="text-link" href="#contact">
                More about me? Let's talk <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>
        <section id="work" className="section work-section">
          <div className="section-inner">
            <div className="section-heading">
              <div>
                <span className="section-kicker">02 / Selected work</span>
                <h2>My little playground.</h2>
              </div>
              <span className="section-note">
                A few projects,
                <br />
                brought to life.
              </span>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-item" key={project.title}>
                  <div className="project-visual project-visual-screenshot">
                    <img
                      className="project-screenshot"
                      src={project.screenshot}
                      alt={`${project.title} project screenshot`}
                    />
                  </div>
                  <div className="project-title">
                    <h3>{project.title}</h3>
                    <Button
                      size="icon"
                      variant="ghost"
                      aria-label={`View ${project.title} project`}
                      onClick={() => setDialog(project.title)}
                    >
                      <ArrowUpRight />
                    </Button>
                  </div>
                  <p>{project.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="experience" className="section experience-section">
          <div className="section-inner">
            <div className="section-heading">
              <div>
                <span className="section-kicker">03 / Where I've worked</span>
                <h2>The journey so far.</h2>
              </div>
              <span className="section-note">
                Teams, roles,
                <br />
                and a little impact.
              </span>
            </div>
            <div className="experience-list">
              {jobs.map((job) => (
                <article className="job-card" key={job.org}>
                  <div className="job-head">
                    <div>
                      <h3>{job.role}</h3>
                      <p className="job-role-meta">{job.period}</p>
                    </div>
                  </div>
                  <ul className="job-bullets">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <div className="job-org">
                    <div>
                      <strong>{job.org}</strong>
                      <span>{job.orgNote}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="skills" className="section">
          <div className="section-inner">
            <span className="section-kicker">04 / The toolkit</span>
            <h2>Tools I build with.</h2>
            {[
              ["Languages", "JavaScript", "HTML", "CSS"],
              [
                "Frontend",
                "React",
                "Next.js",
                "Vite",
                "Tailwind CSS",
                "React Router",
                "Lucide React",
              ],
              [
                "Backend & data",
                "Node.js",
                "Express",
                "Next.js API Routes",
                "MongoDB",
                "MongoDB Atlas",
                "Mongoose",
              ],
              [
                "APIs & integrations",
                "REST APIs",
                "Axios",
                "GitHub REST API",
                "Cloudinary",
                "Brevo API",
              ],
              ["Auth & uploads", "JWT", "Bcrypt", "Multer"],
              [
                "Concepts & tools",
                "CRUD operations",
                "Responsive web design",
                "Git",
                "GitHub",
                "Vercel",
                "VS Code",
              ],
            ].map(([label, ...items]) => (
              <div className="stack-row" key={label}>
                <span>{label}</span>
                <div className="stack-items">
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="contact" className="section contact-section">
          <div className="section-inner">
            <span className="section-kicker">05 / Say hello</span>
            <h2>
              Good things start
              <br />
              with a conversation.
            </h2>
            <p>An idea, a question, or just a hello. I'm all ears.</p>
            <Button
              onClick={() => {
                setSubmitted(false);
                setDialog("contact");
              }}
            >
              Let's talk <ArrowUpRight />
            </Button>
          </div>
        </section>
      </main>
      <footer>
        <span>© {new Date().getFullYear()} Shaurya Pratap Singh</span>
        <span>Made with intention. And a little coffee.</span>
        <a className="footer-back-to-top" href="#" aria-label="Back to top">
          Back to top ↑
        </a>
      </footer>
      <Dialog
        open={dialog !== null}
        onOpenChange={(open) => {
          if (!open) setDialog(null);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {selectedProject
                ? selectedProject.title
                : dialog === "contact"
                ? submitted
                  ? "Your email draft is ready."
                  : "Hey, nice to meet you."
                : dialog}
            </DialogTitle>
            <DialogDescription>
              {selectedProject
                ? "details" in selectedProject
                  ? selectedProject.details
                  : selectedProject.description
                : dialog === "contact"
                ? submitted
                  ? "Your email app should open with your message ready. Review it and press Send to contact me."
                  : "Tell me a little about what you have in mind."
                : "A portfolio project preview."}
            </DialogDescription>
          </DialogHeader>
          {selectedProject && "techStack" in selectedProject ? (
            <div className="project-details">
              <h3>Built with</h3>
              <div className="project-tech-tags">
                {selectedProject.techStack.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <div className="project-detail-links">
                <Button asChild>
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live project <ArrowUpRight />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub repository <ArrowUpRight />
                  </a>
                </Button>
              </div>
            </div>
          ) : dialog === "contact" && !submitted ? (
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get("name")?.toString().trim() ?? "";
                const email = formData.get("email")?.toString().trim() ?? "";
                const message = formData.get("message")?.toString().trim() ?? "";
                const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
                const body = encodeURIComponent(
                  `Name: ${name}\nEmail: ${email}\n\n${message}`,
                );
                window.location.href = `mailto:edshaurya@gmail.com?subject=${subject}&body=${body}`;
                setSubmitted(true);
              }}
            >
              <label>
                Your name
                <input
                  required
                  name="name"
                  autoComplete="name"
                  placeholder="Alex"
                />
              </label>
              <label>
                Email address
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="alex@example.com"
                />
              </label>
              <label>
                What's on your mind?
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="I've got an idea…"
                />
              </label>
              <Button type="submit">
                Open email app <Send />
              </Button>
            </form>
          ) : dialog === "contact" && submitted ? (
            <p className="text-sm text-muted-foreground">
              If your email app didn’t open, you can email me directly at{" "}
              <a className="text-link" href="mailto:edshaurya@gmail.com">
                edshaurya@gmail.com
              </a>
              .
            </p>
          ) : !selectedProject && dialog !== "contact" ? (
            <div className="flex items-center gap-3 py-5 text-sm text-muted-foreground">
              <Plus size={18} /> A space for the things I'm building.
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}

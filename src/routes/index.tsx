import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sahil Ansari — Full Stack Developer | Bengaluru" },
      { name: "description", content: "Sahil Ansari — Full Stack Developer building static, dynamic, eCommerce, and CRM web applications." },
    ],
    links: [
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "https://unpkg.com/aos@2.3.1/dist/aos.css" },
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" },
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" },
    ],
    scripts: [
      { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js", defer: true },
      { src: "https://unpkg.com/aos@2.3.1/dist/aos.js", defer: true },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js", defer: true },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js", defer: true },
      { src: "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js", defer: true },
    ],
  }),
});

/* ===== Color scheme: Navy #0A0F1E + Electric Blue #0066FF + Cyan #00D4FF + White ===== */
const CSS = `
:root{
  --navy:#0A0F1E;
  --navy-2:#0d1428;
  --blue:#0066FF;
  --cyan:#00D4FF;
  --white:#FFFFFF;
  --grad:linear-gradient(135deg,#0066FF 0%,#00D4FF 100%);
  --glow:0 0 30px rgba(0,212,255,.45);
}
*{box-sizing:border-box}
html,body{overflow-x:hidden;max-width:100%}
html{scroll-behavior:smooth}
body{margin:0;background:var(--navy);color:#fff;font-family:'Poppins',sans-serif}
a{text-decoration:none;color:inherit}
img{max-width:100%;height:auto;display:block}

.gradient-text{background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent}

.btn-grad{background:var(--grad);border:none;color:#fff;padding:.75rem 1.75rem;border-radius:50px;font-weight:600;transition:all .3s ease;box-shadow:0 4px 20px rgba(0,102,255,.4)}
.btn-grad:hover{transform:translateY(-3px);box-shadow:0 8px 30px rgba(0,212,255,.6);color:#fff}
.btn-outline-grad{background:transparent;border:2px solid var(--cyan);color:#fff;padding:.7rem 1.6rem;border-radius:50px;font-weight:600;transition:all .3s ease}
.btn-outline-grad:hover{background:var(--cyan);color:var(--navy);transform:translateY(-3px);box-shadow:var(--glow)}

/* Navbar */
.navbar{transition:all .35s ease;padding:1rem 0;background:transparent}
.navbar.scrolled{background:rgba(10,15,30,.85);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);box-shadow:0 4px 30px rgba(0,0,0,.5)}
.navbar .nav-link{color:#cfd6e4!important;font-weight:500;margin:0 .5rem;position:relative}
.navbar .nav-link:hover{color:var(--cyan)!important}
.navbar .nav-link::after{content:'';position:absolute;left:50%;bottom:-4px;width:0;height:2px;background:var(--grad);transition:all .3s}
.navbar .nav-link:hover::after{width:100%;left:0}
.brand-logo{font-size:1.6rem;font-weight:800;letter-spacing:1px}
.navbar-toggler{color:#fff;border:1px solid rgba(255,255,255,.2)!important;padding:.35rem .6rem}
.navbar-toggler:focus{box-shadow:0 0 0 .15rem rgba(0,212,255,.35)}
@media(max-width:991px){
  .navbar-collapse{background:rgba(10,15,30,.97);backdrop-filter:blur(14px);border-radius:14px;margin-top:.75rem;padding:1rem;border:1px solid rgba(0,212,255,.15)}
  .navbar .nav-link{margin:.3rem 0;padding:.6rem .8rem!important}
  .navbar .nav-item .btn-grad{display:inline-block;margin-top:.5rem}
}

/* Hero */
.hero{min-height:100vh;position:relative;display:flex;align-items:center;justify-content:center;text-align:center;overflow:hidden;padding:120px 0 80px}
.hero h1{font-size:clamp(2.2rem,6vw,5rem);font-weight:800;line-height:1.15;margin-bottom:1.2rem}
.hero p.lead{font-size:1.1rem;color:#9fb0c9;max-width:680px;margin:0 auto 2rem;padding:0 1rem}
.blob{position:absolute;border-radius:50%;filter:blur(90px);opacity:.4;z-index:0}
.blob1{width:420px;height:420px;background:var(--blue);top:-100px;left:-120px}
.blob2{width:380px;height:380px;background:var(--cyan);bottom:-120px;right:-100px}
.blob3{width:280px;height:280px;background:#0a5cff;top:40%;left:50%}
.hero .container{position:relative;z-index:2}
.scroll-arrow{position:absolute;bottom:30px;left:50%;transform:translateX(-50%);font-size:1.6rem;color:var(--cyan);animation:bounce 2s infinite;z-index:2;cursor:pointer}
@keyframes bounce{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(12px)}}

/* Sections */
section{padding:100px 0;position:relative}
.section-title{font-size:clamp(1.8rem,4vw,3rem);font-weight:800;margin-bottom:1rem;text-align:center}
.section-sub{color:#8ea0bb;text-align:center;max-width:720px;margin:0 auto 3rem;padding:0 1rem}

/* Glass card */
.glass{background:rgba(255,255,255,.04);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border:1px solid rgba(0,212,255,.15);border-radius:20px;transition:all .35s ease;position:relative;overflow:hidden}
.glass:hover{border-color:rgba(0,212,255,.55);box-shadow:0 10px 40px rgba(0,102,255,.25)}

/* Profile image */
.profile-wrap{display:flex;justify-content:center;margin-bottom:2rem}
.profile-img{width:220px;height:220px;border-radius:50%;object-fit:cover;border:4px solid var(--cyan);box-shadow:0 0 0 6px rgba(0,102,255,.15),0 0 40px rgba(0,212,255,.55);background:#111}
@media(max-width:576px){.profile-img{width:170px;height:170px}}

/* About text */
.about-text{color:#c4d0e3;font-size:1.05rem;line-height:1.8;max-width:820px;margin:0 auto;text-align:center;padding:0 1rem}
.about-text strong{color:var(--cyan)}

/* Stats */
.stat-card{padding:2rem 1rem;text-align:center}
.stat-num{font-size:clamp(2.2rem,5vw,3rem);font-weight:800;background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent}
.stat-label{color:#9fb0c9;margin-top:.5rem;font-weight:500}

/* Skills */
.skill-card{padding:1.5rem;text-align:center;height:100%;cursor:default}
.skill-card i{font-size:2.4rem;color:var(--cyan);margin-bottom:.8rem;transition:all .3s}
.skill-card:hover i{transform:translateY(-6px) scale(1.1);color:var(--white);text-shadow:0 0 18px var(--cyan)}
.skill-card h6{font-weight:600;margin:0;color:#e6edf9}

/* Services */
.service-card{padding:2rem 1.5rem;text-align:center;height:100%;display:flex;flex-direction:column}
.service-icon{font-size:2.6rem;margin-bottom:1rem;display:inline-block}
.service-card h5{font-weight:700;margin-bottom:.6rem;color:#fff}
.service-card p.desc{color:#a9b8d0;font-size:.95rem;margin-bottom:1rem}
.service-card p.cta{color:#7e8fa8;font-size:.85rem;font-style:italic;margin-bottom:1.2rem;flex-grow:1}
.service-card:hover .service-icon{animation:bounceIcon .8s ease}
@keyframes bounceIcon{0%,100%{transform:translateY(0)}30%{transform:translateY(-12px)}60%{transform:translateY(-6px)}}

/* Contact form */
.contact-wrap{max-width:720px;margin:0 auto}
.form-floating>.form-control,.form-floating>textarea{background:rgba(255,255,255,.04);border:1px solid rgba(0,212,255,.2);color:#fff;border-radius:12px}
.form-floating>.form-control:focus,.form-floating>textarea:focus{background:rgba(255,255,255,.06);border-color:var(--cyan);box-shadow:0 0 0 .15rem rgba(0,212,255,.25);color:#fff}
.form-floating>label{color:#8ea0bb}
.form-floating>.form-control:focus~label,.form-floating>.form-control:not(:placeholder-shown)~label{color:var(--cyan)}
.invalid-feedback{color:#ff8aa0}

/* Popup */
.popup-overlay{position:fixed;inset:0;background:rgba(0,0,0,.75);backdrop-filter:blur(8px);display:none;align-items:center;justify-content:center;z-index:9999;padding:1rem}
.popup-overlay.show{display:flex}
.popup-box{background:#0f1731;border:1px solid rgba(0,212,255,.3);border-radius:24px;padding:2.5rem 2rem;text-align:center;max-width:420px;width:100%}
.check-circle{width:90px;height:90px;border-radius:50%;background:var(--grad);display:flex;align-items:center;justify-content:center;margin:0 auto 1.5rem;font-size:2.5rem;color:#fff;box-shadow:var(--glow)}

/* Footer */
footer{padding:50px 0 30px;border-top:1px solid rgba(0,212,255,.1);position:relative;background:#070b18}
footer::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:var(--grad)}
.social-icons a{display:inline-flex;width:42px;height:42px;border-radius:50%;align-items:center;justify-content:center;background:rgba(255,255,255,.05);margin:0 6px;transition:all .3s;color:#fff}
.social-icons a:hover{background:var(--grad);transform:translateY(-4px) scale(1.1);box-shadow:var(--glow)}
.footer-links a{color:#9fb0c9;margin:0 .6rem;font-size:.95rem;transition:color .3s;display:inline-block;line-height:2}
.footer-links a:hover{color:var(--cyan)}
.spinner-border-sm{width:1rem;height:1rem;border-width:.18em}

/* Responsive tweaks */
@media(max-width:768px){
  section{padding:70px 0}
  .hero{padding:110px 0 70px}
  .contact-wrap{padding:1.25rem!important}
  .footer-links a{margin:0 .4rem}
}
@media(max-width:375px){
  .container{padding-left:1rem;padding-right:1rem}
  .btn-grad,.btn-outline-grad{padding:.65rem 1.25rem;font-size:.95rem}
}
`;

// EmailJS credentials
const EMAILJS_PUBLIC_KEY = "_G982YW0HScWtP8S6";
const EMAILJS_SERVICE_ID = "service_z8dmrf7";
const EMAILJS_TEMPLATE_ID = "template_o4twtzn";

function Index() {
  useEffect(() => {
    // Initialize libraries after CDN scripts load
    const init = () => {
      const w = window as any;
      if (w.AOS) w.AOS.init({ duration: 900, once: true, offset: 80 });
      if (w.emailjs) w.emailjs.init(EMAILJS_PUBLIC_KEY);

      // GSAP animations
      if (w.gsap) {
        const gsap = w.gsap;
        if (w.ScrollTrigger) gsap.registerPlugin(w.ScrollTrigger);

        // Navbar entrance
        gsap.from("#mainNav", { y: -60, opacity: 0, duration: 1, ease: "power3.out" });

        // Hero entrance
        gsap.from(".hero h1", { y: 40, opacity: 0, duration: 1.1, delay: 0.2, ease: "power3.out" });
        gsap.from(".hero p.lead", { y: 30, opacity: 0, duration: 1, delay: 0.5, ease: "power3.out" });
        gsap.from(".hero .hero-cta", { y: 30, opacity: 0, duration: 1, delay: 0.8, ease: "power3.out" });

        // Section headings scroll-trigger
        if (w.ScrollTrigger) {
          document.querySelectorAll(".section-title").forEach((el) => {
            gsap.from(el, {
              y: 40, opacity: 0, duration: 0.9, ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 85%" }
            });
          });
        }
      }
    };
    const t = setTimeout(init, 700);

    // Navbar scroll effect
    const nav = document.getElementById("mainNav");
    const onScroll = () => {
      if (!nav) return;
      if (window.scrollY > 50) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll);

    // Auto-close mobile menu on link click
    const navLinks = document.querySelectorAll("#navMenu .nav-link, #navMenu .btn-grad");
    const closeMenu = () => {
      const menu = document.getElementById("navMenu");
      if (menu?.classList.contains("show")) {
        const w = window as any;
        if (w.bootstrap) {
          const c = w.bootstrap.Collapse.getInstance(menu) || new w.bootstrap.Collapse(menu, { toggle: false });
          c.hide();
        }
      }
    };
    navLinks.forEach((l) => l.addEventListener("click", closeMenu));

    // Counters (GSAP-driven)
    const counters = document.querySelectorAll<HTMLElement>(".stat-num");
    const animateCounter = (el: HTMLElement) => {
      const target = +(el.dataset.target || "0");
      const suffix = el.dataset.suffix || "";
      const w = window as any;
      if (w.gsap) {
        const obj = { v: 0 };
        w.gsap.to(obj, {
          v: target, duration: 1.8, ease: "power2.out",
          onUpdate: () => { el.textContent = Math.floor(obj.v).toString() + suffix; }
        });
      } else {
        el.textContent = target + suffix;
      }
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { animateCounter(e.target as HTMLElement); io.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach((c) => io.observe(c));

    // Contact form
    const form = document.getElementById("contactForm") as HTMLFormElement | null;
    const btn = document.getElementById("submitBtn") as HTMLButtonElement | null;
    const btnText = document.getElementById("submitText");
    const btnSpin = document.getElementById("submitSpin");
    const popup = document.getElementById("popup");
    const errAlert = document.getElementById("errAlert");

    const handler = async (e: Event) => {
      e.preventDefault();
      if (!form) return;
      if (!form.checkValidity()) { form.classList.add("was-validated"); return; }
      const data = new FormData(form);
      const payload = {
        from_name: data.get("from_name") as string,
        from_email: data.get("from_email") as string,
        phone: (data.get("phone") as string) || "Not provided",
        message: data.get("message") as string,
        to_email: "ansarisahil00@gmail.com",
      };
      if (btn) btn.disabled = true;
      if (btnText) btnText.textContent = "Sending...";
      if (btnSpin) btnSpin.classList.remove("d-none");
      if (errAlert) errAlert.classList.add("d-none");
      try {
        const w = window as any;
        await w.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, payload);
        if (popup) popup.classList.add("show");
        form.reset();
        form.classList.remove("was-validated");
      } catch (err) {
        console.error(err);
        if (errAlert) errAlert.classList.remove("d-none");
      } finally {
        if (btn) btn.disabled = false;
        if (btnText) btnText.textContent = "Send Message";
        if (btnSpin) btnSpin.classList.add("d-none");
      }
    };
    form?.addEventListener("submit", handler);

    const closeBtn = document.getElementById("popupClose");
    const close = () => popup?.classList.remove("show");
    closeBtn?.addEventListener("click", close);

    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
      navLinks.forEach((l) => l.removeEventListener("click", closeMenu));
      form?.removeEventListener("submit", handler);
      closeBtn?.removeEventListener("click", close);
      io.disconnect();
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* Navbar */}
      <nav id="mainNav" className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand brand-logo gradient-text" href="#home">SAHIL.</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
            aria-controls="navMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars text-white"></i>
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
              <li className="nav-item ms-lg-3 mt-2 mt-lg-0"><a className="btn btn-grad" href="#contact">Hire Me</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header id="home" className="hero">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
        <div className="container">
          <h1>
            Hi, I'm <span className="gradient-text">Sahil Ansari</span><br />
            Full Stack Developer
          </h1>
          <p className="lead">
            I build fast, scalable, and beautifully crafted web applications — from static sites to powerful CRM systems.
          </p>
          <div className="hero-cta">
            <a href="#portfolio" className="btn btn-grad me-2 mb-2 animate__animated animate__pulse animate__infinite animate__slower">
              <i className="fas fa-briefcase me-2"></i>View My Work
            </a>
            <a href="#contact" className="btn btn-outline-grad mb-2">
              <i className="fas fa-paper-plane me-2"></i>Contact Me
            </a>
          </div>
        </div>
        <a href="#about" className="scroll-arrow" aria-label="Scroll down"><i className="fas fa-chevron-down"></i></a>
      </header>

      {/* About */}
      <section id="about">
        <div className="container">
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>

          <div className="profile-wrap" data-aos="zoom-in">
            {/* Replace profile.jpg with your own photo in /public/profile.jpg */}
            <img src="/profile.jpg" alt="Sahil Ansari" className="profile-img" />
          </div>

          <p className="about-text" data-aos="fade-up" data-aos-delay="100">
            Hi, I'm <strong>Sahil Ansari</strong> — a passionate Full Stack Developer based in <strong>Bengaluru, India</strong>.
            I was born and raised in <strong>Birgunj, Nepal</strong>. I studied till 10th grade at Angel International
            Secondary School and completed my 12th at Birgunj Public College. I then moved to Bengaluru to chase my
            dreams in the IT field. I completed my <strong>BCA in 2022</strong> and my <strong>MCA in 2025</strong>.
            I have <strong>5+ years</strong> of hands-on experience in building web applications and I'm always
            excited to take on new challenges.
          </p>

          {/* Stats */}
          <div className="row g-4 mt-4">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="glass stat-card">
                <div className="stat-num" data-target="10" data-suffix="+">0</div>
                <div className="stat-label">✅ Projects Done</div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="glass stat-card">
                <div className="stat-num" data-target="20" data-suffix="+">0</div>
                <div className="stat-label">😊 Happy Clients</div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="glass stat-card">
                <div className="stat-num" data-target="5" data-suffix="+">0</div>
                <div className="stat-label">⭐ Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <div className="container">
          <h2 className="section-title">My <span className="gradient-text">Tech Stack</span></h2>
          <p className="section-sub">Technologies I work with every day.</p>
          <div className="row g-4">
            {[
              { i: "fab fa-laravel", t: "Laravel" },
              { i: "fab fa-php", t: "PHP (CodeIgniter 3)" },
              { i: "fab fa-html5", t: "HTML & CSS" },
              { i: "fab fa-python", t: "Python" },
              { i: "fab fa-java", t: "Java" },
              { i: "fas fa-leaf", t: "Spring Framework" },
              { i: "fas fa-database", t: "MySQL / PostgreSQL" },
            ].map((s, i) => (
              <div className="col-6 col-md-4 col-lg-3" key={i} data-aos="zoom-in" data-aos-delay={80 * i}>
                <div className="glass skill-card animate__animated">
                  <i className={s.i}></i>
                  <h6>{s.t}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Services */}
      <section id="portfolio">
        <div className="container">
          <h2 className="section-title">What I <span className="gradient-text">Build</span></h2>
          <p className="section-sub">From simple landing pages to complete business systems — I've got you covered.</p>
          <div className="row g-4">
            {[
              { e: "🌐", t: "Static Websites", d: "Clean, fast, and beautiful static sites." },
              { e: "⚙️", t: "Dynamic Websites", d: "Powerful data-driven web applications." },
              { e: "🛒", t: "eCommerce Websites", d: "Full online store with payment integration." },
              { e: "🗂️", t: "CRM Systems", d: "Custom CRM solutions for your business." },
            ].map((s, i) => (
              <div className="col-md-6 col-lg-3" key={i} data-aos="fade-up" data-aos-delay={100 * i}>
                <div className="glass service-card">
                  <span className="service-icon">{s.e}</span>
                  <h5>{s.t}</h5>
                  <p className="desc">{s.d}</p>
                  <p className="cta">Interested? Feel free to reach out — I'd love to build something great for you!</p>
                  <a href="#contact" className="btn btn-grad mt-auto"><i className="fas fa-envelope me-2"></i>Contact Me</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="container">
          <h2 className="section-title">Let's Build <span className="gradient-text">Something Together</span></h2>
          <p className="section-sub">
            Whether you need a static site, dynamic web app, eCommerce store, or CRM — I'm just a message away.
          </p>
          <div className="contact-wrap glass p-4 p-md-5" data-aos="fade-up" data-aos-delay="100">
            <div id="errAlert" className="alert alert-danger d-none" role="alert">
              <i className="fas fa-circle-exclamation me-2"></i>Something went wrong. Please try again.
            </div>
            <form id="contactForm" noValidate>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="from_name" name="from_name" placeholder="Full Name" required minLength={2} />
                    <label htmlFor="from_name">Full Name</label>
                    <div className="invalid-feedback">Please enter your name.</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="email" className="form-control" id="from_email" name="from_email" placeholder="Email" required />
                    <label htmlFor="from_email">Email Address</label>
                    <div className="invalid-feedback">Please enter a valid email.</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="tel" className="form-control" id="phone" name="phone" placeholder="Phone" pattern="[0-9+\-\s()]{6,}" />
                    <label htmlFor="phone">Phone (optional)</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea className="form-control" id="message" name="message" placeholder="Message" style={{ height: 140 }} required minLength={10}></textarea>
                    <label htmlFor="message">Your Message</label>
                    <div className="invalid-feedback">Message must be at least 10 characters.</div>
                  </div>
                </div>
                <div className="col-12 text-center mt-2">
                  <button type="submit" id="submitBtn" className="btn btn-grad px-5 py-3">
                    <span id="submitSpin" className="spinner-border spinner-border-sm me-2 d-none" role="status"></span>
                    <span id="submitText">Send Message</span>
                    <i className="fas fa-paper-plane ms-2"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container text-center">
          <h3 className="brand-logo gradient-text mb-2">SAHIL.</h3>
          <div className="footer-links mb-3">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="social-icons mb-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
            <a href="https://wa.me/" target="_blank" rel="noreferrer" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
          </div>
          <p className="text-secondary small mb-0">
            © 2025 Sahil Ansari — Full Stack Developer | Bengaluru, India 🇮🇳 | Originally from Birgunj, Nepal 🇳🇵
          </p>
        </div>
      </footer>

      {/* Success popup */}
      <div id="popup" className="popup-overlay">
        <div className="popup-box animate__animated animate__zoomIn">
          <div className="check-circle"><i className="fas fa-check"></i></div>
          <h4 className="mb-2 fw-bold">Message Sent Successfully!</h4>
          <p className="text-secondary">Thanks for reaching out. I'll get back to you soon.</p>
          <button id="popupClose" className="btn btn-grad mt-2 px-4">Awesome!</button>
        </div>
      </div>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sahil Ansari — Portfolio & Contact" },
      { name: "description", content: "Animated portfolio with glassmorphism, gallery, and contact form." },
    ],
    links: [
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "https://unpkg.com/aos@2.3.1/dist/aos.css" },
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" },
    ],
    scripts: [
      { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js", defer: true },
      { src: "https://unpkg.com/aos@2.3.1/dist/aos.js", defer: true },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.1/vanilla-tilt.min.js", defer: true },
      { src: "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js", defer: true },
    ],
  }),
});

const CSS = `
:root{--purple:#6C3EF4;--pink:#F43E8C;--bg:#0D0D0D;--grad:linear-gradient(135deg,#6C3EF4 0%,#F43E8C 100%);}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:var(--bg);color:#fff;font-family:'Poppins',sans-serif;overflow-x:hidden}
a{text-decoration:none;color:inherit}
.gradient-text{background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent;background-size:200% 200%;animation:gradShift 6s ease infinite}
@keyframes gradShift{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
.btn-grad{background:var(--grad);border:none;color:#fff;padding:.75rem 1.75rem;border-radius:50px;font-weight:600;transition:all .3s ease;box-shadow:0 4px 20px rgba(108,62,244,.35);position:relative;overflow:hidden}
.btn-grad:hover{transform:translateY(-3px);box-shadow:0 8px 30px rgba(244,62,140,.6);color:#fff}
.btn-outline-grad{background:transparent;border:2px solid transparent;background-image:linear-gradient(#0D0D0D,#0D0D0D),var(--grad);background-origin:border-box;background-clip:padding-box,border-box;color:#fff;padding:.7rem 1.6rem;border-radius:50px;font-weight:600;transition:all .3s ease}
.btn-outline-grad:hover{box-shadow:0 8px 30px rgba(108,62,244,.5);color:#fff;transform:translateY(-3px)}
/* Navbar */
.navbar{transition:all .35s ease;padding:1rem 0;background:transparent}
.navbar.scrolled{background:rgba(13,13,13,.65);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);box-shadow:0 4px 30px rgba(0,0,0,.4)}
.navbar .nav-link{color:#ddd!important;font-weight:500;margin:0 .5rem;position:relative}
.navbar .nav-link:hover{color:#fff!important}
.navbar .nav-link::after{content:'';position:absolute;left:50%;bottom:-4px;width:0;height:2px;background:var(--grad);transition:all .3s}
.navbar .nav-link:hover::after{width:100%;left:0}
.brand-logo{font-size:1.6rem;font-weight:800;letter-spacing:1px}
/* Hero */
.hero{min-height:100vh;position:relative;display:flex;align-items:center;justify-content:center;text-align:center;overflow:hidden;padding-top:80px}
.hero h1{font-size:clamp(2.5rem,6vw,5rem);font-weight:800;line-height:1.1;margin-bottom:1.2rem}
.hero p.lead{font-size:1.15rem;color:#bbb;max-width:680px;margin:0 auto 2rem}
.blob{position:absolute;border-radius:50%;filter:blur(80px);opacity:.55;animation:float 12s ease-in-out infinite;z-index:0}
.blob1{width:480px;height:480px;background:var(--purple);top:-100px;left:-120px}
.blob2{width:420px;height:420px;background:var(--pink);bottom:-120px;right:-100px;animation-delay:-4s}
.blob3{width:300px;height:300px;background:#9b5cff;top:40%;left:50%;animation-delay:-8s}
@keyframes float{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(40px,-40px) scale(1.1)}}
.hero .container{position:relative;z-index:2}
.scroll-arrow{position:absolute;bottom:30px;left:50%;transform:translateX(-50%);font-size:1.6rem;color:#fff;animation:bounce 2s infinite;z-index:2;cursor:pointer}
@keyframes bounce{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(12px)}}
/* Sections */
section{padding:100px 0;position:relative}
.section-title{font-size:clamp(2rem,4vw,3rem);font-weight:800;margin-bottom:1rem;text-align:center}
.section-sub{color:#aaa;text-align:center;max-width:680px;margin:0 auto 3rem}
/* Glass card */
.glass{background:rgba(255,255,255,.05);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.1);border-radius:20px;transition:all .35s ease;position:relative;overflow:hidden}
.glass:hover{border-color:rgba(244,62,140,.5);box-shadow:0 10px 40px rgba(108,62,244,.3)}
/* Stats */
.stat-card{padding:2rem 1rem;text-align:center}
.stat-num{font-size:3rem;font-weight:800;background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent}
.stat-label{color:#bbb;margin-top:.5rem;font-weight:500}
/* Gallery */
.gallery-card{position:relative;border-radius:20px;overflow:hidden;cursor:pointer;transform-style:preserve-3d}
.gallery-card img{width:100%;height:380px;object-fit:cover;display:block;transition:transform .6s ease}
.gallery-card:hover img{transform:scale(1.08)}
.gallery-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(13,13,13,.92) 0%,rgba(108,62,244,.4) 60%,transparent 100%);display:flex;flex-direction:column;justify-content:flex-end;padding:1.5rem;opacity:0;transition:opacity .4s ease}
.gallery-card:hover .gallery-overlay{opacity:1}
.gallery-overlay h5{font-weight:700;margin-bottom:.3rem;color:#fff}
.gallery-overlay p{color:#ddd;font-size:.9rem;margin:0}
.gallery-card::before{content:'';position:absolute;inset:0;border-radius:20px;padding:2px;background:var(--grad);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:0;transition:opacity .4s;pointer-events:none;z-index:2}
.gallery-card:hover::before{opacity:1;animation:pulseBorder 1.8s ease-in-out infinite}
@keyframes pulseBorder{0%,100%{opacity:1}50%{opacity:.4}}
/* Features */
.feature-card{padding:2.2rem 1.5rem;text-align:center;height:100%}
.feature-icon{width:70px;height:70px;border-radius:50%;background:var(--grad);display:flex;align-items:center;justify-content:center;margin:0 auto 1.2rem;font-size:1.6rem;color:#fff;transition:all .4s ease}
.feature-card:hover{transform:translateY(-8px)}
.feature-card:hover .feature-icon{box-shadow:0 0 30px rgba(244,62,140,.8);transform:scale(1.1)}
.feature-card h5{font-weight:700;margin-bottom:.6rem}
.feature-card p{color:#aaa;font-size:.95rem;margin:0}
/* Contact form */
.contact-wrap{max-width:720px;margin:0 auto}
.form-floating>.form-control,.form-floating>textarea{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.12);color:#fff;border-radius:12px}
.form-floating>.form-control:focus,.form-floating>textarea:focus{background:rgba(255,255,255,.06);border-color:var(--pink);box-shadow:0 0 0 .15rem rgba(244,62,140,.25);color:#fff}
.form-floating>label{color:#888}
.form-floating>.form-control:focus~label,.form-floating>.form-control:not(:placeholder-shown)~label{color:var(--pink)}
.invalid-feedback{color:#ff6b8a}
/* Success popup */
.popup-overlay{position:fixed;inset:0;background:rgba(0,0,0,.7);backdrop-filter:blur(8px);display:none;align-items:center;justify-content:center;z-index:9999}
.popup-overlay.show{display:flex;animation:fadeIn .3s ease}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
.popup-box{background:#1a1a1a;border:1px solid rgba(255,255,255,.1);border-radius:24px;padding:3rem 2.5rem;text-align:center;max-width:420px;width:90%;animation:popIn .5s cubic-bezier(.34,1.56,.64,1)}
@keyframes popIn{from{transform:scale(.5);opacity:0}to{transform:scale(1);opacity:1}}
.check-circle{width:90px;height:90px;border-radius:50%;background:var(--grad);display:flex;align-items:center;justify-content:center;margin:0 auto 1.5rem;font-size:2.5rem;color:#fff;animation:checkPulse 1.5s ease-in-out infinite}
@keyframes checkPulse{0%,100%{box-shadow:0 0 0 0 rgba(244,62,140,.6)}50%{box-shadow:0 0 0 20px rgba(244,62,140,0)}}
/* Footer */
footer{padding:60px 0 30px;border-top:1px solid rgba(255,255,255,.05);position:relative;background:#080808}
footer::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:var(--grad)}
.social-icons a{display:inline-flex;width:42px;height:42px;border-radius:50%;align-items:center;justify-content:center;background:rgba(255,255,255,.05);margin:0 6px;transition:all .3s;color:#fff}
.social-icons a:hover{background:var(--grad);transform:translateY(-4px) scale(1.1);box-shadow:0 6px 20px rgba(244,62,140,.5)}
.footer-links a{color:#aaa;margin:0 .8rem;font-size:.95rem;transition:color .3s}
.footer-links a:hover{color:var(--pink)}
.spinner-border-sm{width:1rem;height:1rem;border-width:.18em}
@media(max-width:768px){section{padding:70px 0}.hero{padding-top:100px}.gallery-card img{height:300px}}
`;

function Index() {
  useEffect(() => {
    // wait for CDNs to load
    const init = () => {
      // @ts-ignore
      if (window.AOS) window.AOS.init({ duration: 900, once: true, offset: 80 });
      // @ts-ignore
      if (window.VanillaTilt) {
        // @ts-ignore
        window.VanillaTilt.init(document.querySelectorAll(".gallery-card"), {
          max: 12, speed: 600, glare: true, "max-glare": 0.3,
        });
      }
      // @ts-ignore
      if (window.emailjs) {
        // TODO: Replace 'YOUR_PUBLIC_KEY' with your EmailJS public key
        // @ts-ignore
        window.emailjs.init("YOUR_PUBLIC_KEY");
      }
    };
    const t = setTimeout(init, 600);

    // Navbar scroll
    const nav = document.getElementById("mainNav");
    const onScroll = () => {
      if (!nav) return;
      if (window.scrollY > 50) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll);

    // Counters
    const counters = document.querySelectorAll<HTMLElement>(".stat-num");
    const animateCounter = (el: HTMLElement) => {
      const target = +(el.dataset.target || "0");
      const dur = 1800;
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min((now - start) / dur, 1);
        el.textContent = Math.floor(p * target).toString() + (el.dataset.suffix || "");
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          animateCounter(e.target as HTMLElement);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach((c) => io.observe(c));

    // Form
    const form = document.getElementById("contactForm") as HTMLFormElement | null;
    const btn = document.getElementById("submitBtn") as HTMLButtonElement | null;
    const btnText = document.getElementById("submitText");
    const btnSpin = document.getElementById("submitSpin");
    const popup = document.getElementById("popup");
    const popupBox = document.getElementById("popupBox");
    const errAlert = document.getElementById("errAlert");

    const handler = async (e: Event) => {
      e.preventDefault();
      if (!form) return;
      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        return;
      }
      const data = new FormData(form);
      const payload = {
        from_name: data.get("from_name") as string,
        from_email: data.get("from_email") as string,
        phone: data.get("phone") as string,
        message: data.get("message") as string,
        to_email: "ansarisahil00@gmail.com",
      };
      if (btn) btn.disabled = true;
      if (btnText) btnText.textContent = "Sending...";
      if (btnSpin) btnSpin.classList.remove("d-none");
      if (errAlert) errAlert.classList.add("d-none");
      try {
        // @ts-ignore — Replace SERVICE_ID & TEMPLATE_ID with your EmailJS values
        await window.emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", payload);
        if (popup) popup.classList.add("show");
        if (popupBox) (popupBox as HTMLElement).querySelector("h4")!.textContent = "Message Sent Successfully!";
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
          <button className="navbar-toggler text-white border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
            <i className="fas fa-bars text-white"></i>
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#gallery">Gallery</a></li>
              <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
              <li className="nav-item ms-lg-3 mt-2 mt-lg-0"><a className="btn btn-grad" href="#contact">Get In Touch</a></li>
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
          <h1 data-aos="fade-up">
            Crafting <span className="gradient-text">Digital Experiences</span><br />That Inspire
          </h1>
          <p className="lead" data-aos="fade-up" data-aos-delay="150">
            Welcome to my creative corner — where bold design meets clean code. Explore my work, my story, and let's build something amazing together.
          </p>
          <div data-aos="fade-up" data-aos-delay="300">
            <a href="#gallery" className="btn btn-grad me-2 mb-2"><i className="fas fa-images me-2"></i>View Gallery</a>
            <a href="#contact" className="btn btn-outline-grad mb-2"><i className="fas fa-paper-plane me-2"></i>Contact Us</a>
          </div>
        </div>
        <a href="#about" className="scroll-arrow"><i className="fas fa-chevron-down"></i></a>
      </header>

      {/* About */}
      <section id="about">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">About <span className="gradient-text">Me</span></h2>
          <p className="section-sub" data-aos="fade-up" data-aos-delay="100">
            Passionate creator blending aesthetics with functionality. I focus on delivering memorable, performant, and beautifully animated digital products.
          </p>
          <div className="row g-4 mt-2">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="glass stat-card">
                <div className="stat-num" data-target="120" data-suffix="+">0</div>
                <div className="stat-label">Projects Completed</div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="glass stat-card">
                <div className="stat-num" data-target="80" data-suffix="+">0</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="glass stat-card">
                <div className="stat-num" data-target="5" data-suffix="+">0</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">My <span className="gradient-text">Gallery</span></h2>
          <p className="section-sub" data-aos="fade-up" data-aos-delay="100">A snapshot of moments and creative captures.</p>
          <div className="row g-4">
            {[
              { src: "/images/image1.jpg", t: "Sharp & Bold", d: "Style meets confidence." },
              { src: "/images/image2.jpg", t: "Mountain Adventures", d: "Reaching new heights." },
              { src: "/images/image3.jpg", t: "Urban Cool", d: "City vibes & shades." },
              { src: "/images/image4.jpg", t: "Misty Mornings", d: "Calm and contemplative." },
            ].map((g, i) => (
              <div className="col-md-6" key={i} data-aos="fade-up" data-aos-delay={100 * (i + 1)}>
                <div className="gallery-card">
                  <img src={g.src} alt={g.t} loading="lazy" />
                  <div className="gallery-overlay">
                    <h5>{g.t}</h5>
                    <p>{g.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Why <span className="gradient-text">Choose Me</span></h2>
          <p className="section-sub" data-aos="fade-up" data-aos-delay="100">A blend of quality, creativity and dedication.</p>
          <div className="row g-4">
            {[
              { i: "fa-rocket", t: "Fast Delivery", d: "Quick turnaround without compromising on quality." },
              { i: "fa-paint-brush", t: "Creative Design", d: "Modern aesthetics tailored to your brand identity." },
              { i: "fa-mobile-screen", t: "Fully Responsive", d: "Looks stunning on every screen size, every device." },
              { i: "fa-headset", t: "24/7 Support", d: "Always available to help and iterate with you." },
            ].map((f, i) => (
              <div className="col-md-6 col-lg-3" key={i} data-aos="fade-up" data-aos-delay={100 * (i + 1)}>
                <div className="glass feature-card">
                  <div className="feature-icon"><i className={`fas ${f.i}`}></i></div>
                  <h5>{f.t}</h5>
                  <p>{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-sub" data-aos="fade-up" data-aos-delay="100">
            Have a project in mind or just want to say hi? Drop a message below.
          </p>
          <div className="contact-wrap glass p-4 p-md-5" data-aos="fade-up" data-aos-delay="200">
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
          <p className="text-secondary mb-3">Designing experiences that leave a mark.</p>
          <div className="footer-links mb-3">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#features">Features</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="social-icons mb-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter/X"><i className="fab fa-x-twitter"></i></a>
            <a href="https://wa.me/" target="_blank" rel="noreferrer" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
          </div>
          <p className="text-secondary small mb-0">© {new Date().getFullYear()} Sahil Ansari. All rights reserved.</p>
        </div>
      </footer>

      {/* Success popup */}
      <div id="popup" className="popup-overlay">
        <div id="popupBox" className="popup-box">
          <div className="check-circle"><i className="fas fa-check"></i></div>
          <h4 className="mb-2 fw-bold">Message Sent Successfully!</h4>
          <p className="text-secondary">Thanks for reaching out. I'll get back to you soon.</p>
          <button id="popupClose" className="btn btn-grad mt-2 px-4">Awesome!</button>
        </div>
      </div>
    </>
  );
}

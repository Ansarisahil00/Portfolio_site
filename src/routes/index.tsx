import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sahil Ansari — Full Stack Developer | Portfolio" },
      { name: "description", content: "Sahil Ansari — Full Stack Developer specializing in Laravel, PHP, Java, Python. Building static websites, dynamic web apps, eCommerce stores & CRM systems. Based in Bengaluru, India." },
      { property: "og:title", content: "Sahil Ansari — Full Stack Developer" },
      { property: "og:description", content: "I build static sites, dynamic web apps, eCommerce stores & CRM systems. Let's work together!" },
    ],
    links: [
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" },
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" },
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&family=DM+Sans:wght@400;500;700&display=swap" },
    ],
    scripts: [
      { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js", defer: true },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js", defer: true },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js", defer: true },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js", defer: true },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.1/vanilla-tilt.min.js", defer: true },
      { src: "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js", defer: true },
    ],
  }),
});

/* ===============================================================
   CINEMATIC DUAL-ZONE THEME
   - Zone 1 (Hero + About): warm cream + burnt gold
   - Zone 2 (Skills onward): deep space black + electric cyan
=============================================================== */
const CSS = `
:root{
  /* Cream zone */
  --cream:#F5F0E8;
  --ivory:#EDE8DC;
  --charcoal:#1A1A1A;
  --gold:#C9A84C;
  --amber:#A0522D;
  /* Dark zone — FIRE */
  --space:#0A0A0A;
  --navy:#1A0000;
  --ember:#3D0000;
  --cyan:#FF2200;   /* electric red (kept var name for reuse) */
  --blue:#FF6600;   /* hot orange */
  --white:#fff;
  --grad-gold:linear-gradient(135deg,#C9A84C 0%,#A0522D 100%);
  --grad-cyan:linear-gradient(135deg,#FF2200 0%,#FF6600 100%);
  --glow-cyan:0 0 30px rgba(255,34,0,.55);
  --glow-gold:0 0 30px rgba(201,168,76,.45);
}
*{box-sizing:border-box}
html,body{overflow-x:hidden;max-width:100vw}
html{scroll-behavior:smooth}
body{margin:0;background:var(--cream);color:var(--charcoal);font-family:'Inter','DM Sans',sans-serif;cursor:none}
a{text-decoration:none;color:inherit}
img{max-width:100%;height:auto;display:block}

h1,h2,h3,h4,.display-font{font-family:'Bebas Neue','Inter',sans-serif;letter-spacing:.02em}

/* Custom cursor (no mix-blend-mode — better perf over animated bg) */
.cursor-dot,.cursor-ring{position:fixed;top:0;left:0;pointer-events:none;z-index:99998;border-radius:50%;transition:transform .15s ease,background .25s ease,border-color .25s ease,width .2s,height .2s}
.cursor-dot{width:6px;height:6px;background:#FF2200;box-shadow:0 0 12px #FF2200;transform:translate(-50%,-50%)}
.cursor-ring{width:32px;height:32px;border:1.5px solid rgba(255,34,0,.6);transform:translate(-50%,-50%)}
.cursor-ring.hovering{transform:translate(-50%,-50%) scale(1.6);border-color:#FF6600;background:rgba(255,102,0,.15)}
@media(hover:none),(max-width:768px){body{cursor:auto}.cursor-dot,.cursor-ring{display:none}}

/* ============ BINARY DIGITS — gold (hero) / red rain (dark) ============ */
.binary-gold,.binary-red{position:absolute;font-family:'Courier New',monospace;font-weight:700;pointer-events:none;user-select:none;will-change:transform,opacity}
.binary-gold{color:rgba(201,168,76,.55);text-shadow:0 0 8px rgba(201,168,76,.4);animation:binFloat linear infinite}
@keyframes binFloat{0%{transform:translateY(110vh);opacity:0}10%{opacity:.7}90%{opacity:.7}100%{transform:translateY(-10vh);opacity:0}}
.binary-red{color:rgba(255,34,0,.7);text-shadow:0 0 10px rgba(255,34,0,.8);animation:binRain linear infinite}
@keyframes binRain{0%{transform:translateY(-15vh);opacity:0}10%{opacity:.9}100%{transform:translateY(110vh);opacity:0}}

/* Ghost code snippets */
.ghost-code{position:absolute;font-family:'Courier New',monospace;font-size:.85rem;color:rgba(255,102,0,.35);pointer-events:none;user-select:none;text-shadow:0 0 6px rgba(255,34,0,.4);animation:ghostFlash 6s ease-in-out infinite}
@keyframes ghostFlash{0%,85%,100%{opacity:0}10%,25%{opacity:1}}

/* Hex grid + scanline overlay for dark zone */
.dark-zone .hex-overlay{position:absolute;inset:0;pointer-events:none;z-index:0;opacity:.04;background-image:
  linear-gradient(60deg,transparent 49%,#FF2200 49% 51%,transparent 51%),
  linear-gradient(-60deg,transparent 49%,#FF2200 49% 51%,transparent 51%),
  linear-gradient(0deg,transparent 49%,#FF2200 49% 51%,transparent 51%);
  background-size:40px 40px;animation:hexPulse 6s ease-in-out infinite}
@keyframes hexPulse{0%,100%{opacity:.03}50%{opacity:.07}}

/* ============ PRELOADER ============ */
.preloader{position:fixed;inset:0;background:#000;z-index:99999;display:flex;align-items:center;justify-content:center;transition:opacity .8s ease,visibility .8s ease}
.preloader.hide{opacity:0;visibility:hidden;pointer-events:none}
.preloader .spin{width:64px;height:64px;border-radius:50%;border:3px solid rgba(201,168,76,.18);border-top-color:var(--gold);animation:spin 1s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}

/* ============ NAVBAR ============ */
.navbar{transition:all .4s ease;padding:1rem 0;background:transparent;z-index:1050}
.navbar.scrolled{background:rgba(245,240,232,.85);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);box-shadow:0 4px 30px rgba(0,0,0,.08)}
.navbar.dark-mode.scrolled{background:rgba(6,8,16,.85);box-shadow:0 4px 30px rgba(0,0,0,.6)}
.navbar .nav-link{color:var(--charcoal)!important;font-family:'Inter',sans-serif;font-weight:500;margin:0 .6rem;position:relative;text-transform:uppercase;font-size:.85rem;letter-spacing:.1em}
.navbar.dark-mode .nav-link{color:#cfd6e4!important}
.navbar .nav-link:hover{color:var(--amber)!important}
.navbar.dark-mode .nav-link:hover{color:var(--cyan)!important}
.navbar .nav-link::after{content:'';position:absolute;left:50%;bottom:-4px;width:0;height:2px;background:var(--grad-gold);border-radius:2px;transition:all .3s;box-shadow:0 0 8px var(--gold)}
.navbar.dark-mode .nav-link::after{background:var(--grad-cyan);box-shadow:0 0 8px var(--cyan)}
.navbar .nav-link:hover::after,.navbar .nav-link.active::after{width:100%;left:0}
.navbar .nav-link.active{color:var(--amber)!important}
.navbar.dark-mode .nav-link.active{color:var(--cyan)!important}
.brand-logo{font-family:'Bebas Neue',sans-serif;font-size:1.8rem;font-weight:400;letter-spacing:.12em;color:var(--charcoal)}
.navbar.dark-mode .brand-logo{color:#fff}
.navbar-toggler{border:1px solid rgba(0,0,0,.2)!important;padding:.35rem .6rem;color:var(--charcoal)}
.navbar.dark-mode .navbar-toggler{border-color:rgba(255,255,255,.2)!important;color:#fff}
.navbar-toggler:focus{box-shadow:0 0 0 .15rem rgba(201,168,76,.35)}
.toggler-icon{width:24px;height:18px;position:relative;display:inline-block}
.toggler-icon span{position:absolute;left:0;width:100%;height:2px;background:currentColor;border-radius:2px;transition:all .35s ease}
.toggler-icon span:nth-child(1){top:0}
.toggler-icon span:nth-child(2){top:50%;transform:translateY(-50%)}
.toggler-icon span:nth-child(3){bottom:0}
.navbar-toggler[aria-expanded="true"] .toggler-icon span:nth-child(1){top:50%;transform:translateY(-50%) rotate(45deg)}
.navbar-toggler[aria-expanded="true"] .toggler-icon span:nth-child(2){opacity:0}
.navbar-toggler[aria-expanded="true"] .toggler-icon span:nth-child(3){bottom:50%;transform:translateY(50%) rotate(-45deg)}
@media(max-width:991px){
  .navbar-collapse{background:rgba(5,5,5,.97)!important;backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-radius:14px;margin-top:.75rem;padding:1rem;border:1px solid rgba(255,34,0,.35);box-shadow:0 12px 40px rgba(0,0,0,.6)}
  .navbar .navbar-collapse .nav-link{color:#fff!important;margin:.3rem 0;padding:.7rem .8rem!important}
  .navbar .navbar-collapse .nav-link:hover{color:#FF6600!important}
  .navbar .navbar-collapse .btn-gold{display:inline-block;margin-top:.5rem}
}

/* ============ BUTTONS ============ */
.btn-gold{background:var(--grad-gold);border:none;color:#fff;padding:.85rem 1.9rem;border-radius:50px;font-family:'Inter',sans-serif;font-weight:600;letter-spacing:.05em;text-transform:uppercase;font-size:.85rem;transition:all .35s ease;box-shadow:0 4px 20px rgba(160,82,45,.35)}
.btn-gold:hover{transform:translateY(-3px);box-shadow:0 8px 30px rgba(201,168,76,.6);color:#fff}
.btn-outline-dark-cream{background:transparent;border:2px solid var(--charcoal);color:var(--charcoal);padding:.75rem 1.7rem;border-radius:50px;font-weight:600;letter-spacing:.05em;text-transform:uppercase;font-size:.85rem;transition:all .35s ease}
.btn-outline-dark-cream:hover{background:var(--charcoal);color:var(--cream);transform:translateY(-3px)}
.btn-cyan{background:var(--grad-cyan);border:none;color:#001;padding:.85rem 1.9rem;border-radius:50px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;font-size:.85rem;transition:all .35s ease;box-shadow:0 4px 20px rgba(0,102,255,.4)}
.btn-cyan:hover{transform:translateY(-3px);box-shadow:0 8px 30px rgba(0,255,229,.6);color:#001}
.btn-outline-cyan{background:transparent;border:2px solid var(--cyan);color:#fff;padding:.75rem 1.7rem;border-radius:50px;font-weight:600;letter-spacing:.05em;text-transform:uppercase;font-size:.85rem;transition:all .35s ease}
.btn-outline-cyan:hover{background:var(--cyan);color:var(--space);transform:translateY(-3px);box-shadow:var(--glow-cyan)}

/* ============ HERO — Cinematic ============ */
.hero{min-height:100vh;position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:120px 0 80px;background:linear-gradient(180deg,var(--cream) 0%,var(--ivory) 100%)}
.hero-grid{position:absolute;inset:0;perspective:600px;perspective-origin:50% 50%;z-index:0;overflow:hidden;pointer-events:none}
.hero-grid::before,.hero-grid::after{content:'';position:absolute;left:-50%;right:-50%;height:200%;
  background-image:linear-gradient(rgba(160,82,45,.18) 1px,transparent 1px),linear-gradient(90deg,rgba(160,82,45,.18) 1px,transparent 1px);
  background-size:60px 60px;transform-origin:50% 0%;transform:rotateX(60deg) translateZ(0);animation:gridMove 18s linear infinite}
.hero-grid::before{top:50%}
.hero-grid::after{bottom:50%;transform:rotateX(-60deg) translateZ(0);transform-origin:50% 100%}
@keyframes gridMove{0%{background-position:0 0,0 0}100%{background-position:0 60px,60px 0}}
.hero-particles{position:absolute;inset:0;z-index:1;pointer-events:none;overflow:hidden}
.gold-dust{position:absolute;width:4px;height:4px;border-radius:50%;background:radial-gradient(circle,rgba(201,168,76,.9),rgba(201,168,76,0));animation:drift linear infinite}
@keyframes drift{0%{transform:translateY(110vh) translateX(0);opacity:0}10%{opacity:1}90%{opacity:1}100%{transform:translateY(-10vh) translateX(40px);opacity:0}}
.hero .container{position:relative;z-index:3}
.hero-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(3rem,11vw,9rem);font-weight:400;line-height:.95;margin:0 0 1rem;color:var(--charcoal);letter-spacing:.02em;text-align:center;cursor:none}
.hero-title .letter{display:inline-block;transition:color .3s ease}
.hero-title .letter.space{width:.35em}
.hero-eyebrow{font-family:'Inter',sans-serif;text-transform:uppercase;letter-spacing:.45em;font-size:.8rem;color:var(--amber);font-weight:500;margin-bottom:1.2rem;text-align:center}
.typing-wrap{font-family:'Inter',sans-serif;font-size:clamp(1.1rem,2.5vw,1.6rem);font-weight:500;color:var(--amber);min-height:1.8em;margin-bottom:1.2rem;text-align:center;letter-spacing:.05em}
.typing-cursor{display:inline-block;width:2px;background:var(--amber);margin-left:3px;animation:blink 1s infinite;vertical-align:middle;height:1em}
@keyframes blink{50%{opacity:0}}
.hero p.lead{font-family:'Inter',sans-serif;font-size:1.05rem;color:#3a3a3a;max-width:680px;margin:0 auto 2rem;padding:0 1rem;text-align:center;font-weight:400}
.scroll-arrow{position:absolute;bottom:30px;left:50%;transform:translateX(-50%);font-size:1.4rem;color:var(--amber);animation:bounce 2s infinite;z-index:3}
@keyframes bounce{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(12px)}}

/* Glitch hover on name */
.hero-title.glitching{animation:glitchShake .35s linear}
@keyframes glitchShake{0%,100%{filter:none}25%{filter:hue-rotate(20deg) contrast(1.2)}50%{filter:invert(.05)}75%{filter:hue-rotate(-15deg)}}
.scanline{position:absolute;left:0;right:0;height:2px;background:rgba(201,168,76,.6);box-shadow:0 0 12px rgba(201,168,76,.8);pointer-events:none;opacity:0;z-index:4}

/* ============ SECTION BASE ============ */
section{padding:90px 0;position:relative}
@media(max-width:768px){section{padding:60px 0}.hero{padding:100px 0 70px}}
.section-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.2rem,6vw,5rem);font-weight:400;margin-bottom:.6rem;letter-spacing:.02em;line-height:1}
.section-eyebrow{font-family:'Inter',sans-serif;text-transform:uppercase;letter-spacing:.4em;font-size:.75rem;font-weight:500;margin-bottom:1rem;opacity:.7}
.section-sub{font-family:'Inter',sans-serif;max-width:720px;margin:1rem 0 3rem;padding:0;font-size:1rem;line-height:1.7;opacity:.75}

/* ============ ABOUT (cream zone) ============ */
.about-zone{background:linear-gradient(180deg,var(--ivory) 0%,#E5DFD0 100%);color:var(--charcoal);position:relative;overflow:hidden}
.about-zone .section-title{color:var(--charcoal)}
.about-zone .accent{color:var(--amber)}
.about-bokeh{position:absolute;border-radius:50%;background:radial-gradient(circle,rgba(201,168,76,.28),transparent 70%);filter:blur(40px);pointer-events:none;animation:floatBokeh 18s ease-in-out infinite}
.profile-wrap{display:flex;justify-content:center;margin-bottom:2.5rem;perspective:1000px}
.profile-img{width:240px;height:240px;border-radius:50%;object-fit:cover;border:4px solid var(--gold);box-shadow:0 0 0 6px rgba(160,82,45,.12),0 20px 50px rgba(0,0,0,.18);background:#eee;transition:transform .3s ease}
@media(max-width:576px){.profile-img{width:180px;height:180px}}
.about-text{font-family:'Inter',sans-serif;color:#2a2a2a;font-size:1.05rem;line-height:1.85;max-width:820px;margin:0 auto;text-align:center;padding:0 1rem;font-weight:400}
.about-text strong{color:var(--amber);font-weight:600}
.about-word{display:inline-block;opacity:.15;transition:opacity .4s ease;margin-right:.25em}
@keyframes floatBokeh{0%,100%{transform:translate(0,0)}50%{transform:translate(30px,-30px)}}

/* Stats — cream */
.stat-cream{background:rgba(255,255,255,.55);backdrop-filter:blur(8px);border:1px solid rgba(160,82,45,.18);border-radius:20px;padding:2rem 1rem;text-align:center;transition:all .35s ease}
.stat-cream:hover{transform:translateY(-6px);box-shadow:0 18px 40px rgba(0,0,0,.1);border-color:var(--gold)}
.stat-num-cream{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.5rem,6vw,4rem);background:var(--grad-gold);-webkit-background-clip:text;background-clip:text;color:transparent;line-height:1}
.stat-label-cream{font-family:'Inter',sans-serif;color:#444;margin-top:.5rem;font-weight:500;text-transform:uppercase;letter-spacing:.12em;font-size:.8rem}

/* ============ TRANSITION ZONE — ink bleed ============ */
.transition-zone{height:90vh;position:relative;overflow:hidden;background:linear-gradient(180deg,#E5DFD0 0%,#E5DFD0 100%)}
.ink-pour{position:absolute;left:0;right:0;top:-10%;height:120%;background:radial-gradient(ellipse 80% 60% at 50% 0%,#1A0000 0%,#3D0000 45%,#0A0A0A 80%,transparent 100%);transform:translateY(-100%);z-index:2}
.ink-pour::before{content:'';position:absolute;left:0;right:0;bottom:-2px;height:100px;background:radial-gradient(ellipse 60% 100% at 50% 0%,#3D0000 0%,#1A0000 40%,transparent 80%);filter:blur(2px)}
.transition-stars{position:absolute;inset:0;background:radial-gradient(ellipse at center,#3D0000 0%,#0A0A0A 70%);z-index:1;opacity:0}
.shockwave{box-shadow:0 0 80px #FF2200,0 0 120px #FF6600 !important;border-color:#FF2200 !important}
.shockwave{position:absolute;left:50%;top:50%;width:20px;height:20px;border-radius:50%;border:3px solid var(--cyan);transform:translate(-50%,-50%) scale(0);opacity:0;z-index:3;box-shadow:0 0 60px var(--cyan)}

/* ============ DARK ZONE — fire/ember ============ */
.dark-zone{background:
  radial-gradient(ellipse 80% 50% at 50% 0%,rgba(61,0,0,.8),transparent 70%),
  radial-gradient(ellipse 60% 40% at 0% 100%,rgba(255,34,0,.18),transparent 70%),
  radial-gradient(ellipse 60% 40% at 100% 100%,rgba(255,102,0,.15),transparent 70%),
  linear-gradient(180deg,#0A0A0A 0%,#0A0A0A 100%);
  color:#fff;position:relative;overflow:hidden}
.starfield{position:absolute;inset:0;pointer-events:none;z-index:0;overflow:hidden}
.star{position:absolute;width:2px;height:2px;background:#FF6600;border-radius:50%;opacity:.5;box-shadow:0 0 6px #FF2200;animation:twinkle linear infinite}
@keyframes twinkle{0%,100%{opacity:.15}50%{opacity:.9}}
.dark-zone .container{position:relative;z-index:2}
.dark-zone .section-title{color:#fff}
.dark-zone .accent{background:var(--grad-cyan);-webkit-background-clip:text;background-clip:text;color:transparent}
.dark-zone .section-sub{color:#c9b0a8}
.dark-zone .section-eyebrow{color:var(--cyan)}

/* Glass card dark */
.glass-dark{background:rgba(255,255,255,.03);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border:1px solid rgba(0,255,229,.14);border-radius:20px;transition:all .35s ease;position:relative;overflow:hidden}
.glass-dark:hover{border-color:rgba(0,255,229,.55);box-shadow:0 12px 40px rgba(0,102,255,.22)}

/* Skills */
/* Skills — circular fire balls */
.skill-card{padding:1.4rem .8rem;text-align:center;height:100%;border-radius:50%;aspect-ratio:1/1;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;background:radial-gradient(circle at 30% 30%,rgba(255,102,0,.12),rgba(255,34,0,.04) 60%,transparent);border:1px solid rgba(255,102,0,.25);transition:transform .4s ease,box-shadow .4s ease;max-width:160px;margin:0 auto;will-change:transform}
.skill-card::before{content:'';position:absolute;inset:-2px;border-radius:50%;padding:2px;background:conic-gradient(from 0deg,#FF2200,#FF6600,#FFC400,#FF2200);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:.7;animation:rotateBorder 5s linear infinite}
.skill-card:hover{transform:translateY(-15px);box-shadow:0 20px 50px rgba(255,34,0,.45),0 0 40px rgba(255,102,0,.35)}
.skill-card:hover .skill-inner{animation:spinY 4s linear infinite}
.skill-inner{transform-style:preserve-3d}
@keyframes spinY{to{transform:rotateY(360deg)}}
.skill-card i{font-size:2.2rem;color:#FF6600;margin-bottom:.4rem;text-shadow:0 0 14px rgba(255,34,0,.7);display:block}
.skill-card h6{font-family:'Inter',sans-serif;font-weight:600;margin:0;color:#fff;letter-spacing:.04em;font-size:.78rem;line-height:1.1}
@media(max-width:576px){.skill-card{max-width:120px}.skill-card i{font-size:1.7rem}.skill-card h6{font-size:.7rem}}

/* Services — horizontal scroll */
.services-pin{position:relative;overflow:hidden}
.services-track{display:flex;gap:2rem;padding:1rem 5vw;will-change:transform}
.service-card{flex:0 0 320px;padding:2.4rem 1.6rem;text-align:center;display:flex;flex-direction:column;border-radius:24px;position:relative}
.service-card::before{content:'';position:absolute;inset:0;border-radius:24px;padding:2px;background:conic-gradient(from 0deg,var(--cyan),var(--blue),var(--cyan));-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;animation:rotateBorder 6s linear infinite;opacity:.6}
@keyframes rotateBorder{to{transform:rotate(360deg)}}
.service-icon{font-size:3rem;margin-bottom:1.2rem;display:inline-block}
.service-card h5{font-family:'Bebas Neue',sans-serif;font-size:1.8rem;letter-spacing:.04em;margin-bottom:.6rem;color:#fff}
.service-card p.desc{color:#a9b8d0;font-size:.95rem;margin-bottom:1rem;font-family:'Inter',sans-serif}
.service-card p.cta{color:#7e8fa8;font-size:.85rem;font-style:italic;margin-bottom:1.4rem;flex-grow:1}
@media(max-width:768px){.service-card{flex:0 0 260px;padding:1.8rem 1.2rem}}

/* Projects */
.project-card{padding:2rem 1.6rem;height:100%;display:flex;flex-direction:column;background:linear-gradient(rgba(10,15,30,.7),rgba(10,15,30,.7)) padding-box,var(--grad-cyan) border-box;border:2px solid transparent;transform-style:preserve-3d}
.project-card .p-icon{font-size:2.8rem;color:var(--cyan);margin-bottom:1rem;text-shadow:0 0 18px rgba(0,255,229,.5)}
.project-card h5{font-family:'Bebas Neue',sans-serif;font-size:1.8rem;letter-spacing:.03em;color:#fff;margin-bottom:.5rem}
.project-card .p-desc{color:#a9b8d0;font-size:.95rem;margin-bottom:1rem}
.tech-badges{display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:1.2rem}
.tech-badges span{background:rgba(0,255,229,.12);border:1px solid rgba(0,255,229,.3);color:var(--cyan);padding:.25rem .7rem;border-radius:50px;font-size:.72rem;font-weight:500;text-transform:uppercase;letter-spacing:.06em;font-family:'Inter',sans-serif}
.project-card .btn-outline-cyan{margin-top:auto;align-self:flex-start;padding:.55rem 1.2rem;font-size:.78rem}

/* HUD overlay on projects */
#projects::before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(255,34,0,.05) 1px,transparent 1px);background-size:100% 4px;pointer-events:none;z-index:1;animation:scanlineMove 8s linear infinite}
@keyframes scanlineMove{from{background-position:0 0}to{background-position:0 100px}}

/* Modal dark */
.modal-content.modal-dark{background:#0b1224;border:1px solid rgba(0,255,229,.3);color:#fff;border-radius:20px}
.modal-dark .modal-header{border-bottom:1px solid rgba(0,255,229,.15)}
.modal-dark .btn-close{filter:invert(1)}

/* Testimonials */
/* (testimonials section removed) */

/* Contact — aurora */
#contact{overflow:hidden}
.aurora{position:absolute;inset:0;pointer-events:none;z-index:0;opacity:.5;background:
  radial-gradient(ellipse 60% 50% at 20% 30%,rgba(0,255,229,.35),transparent 60%),
  radial-gradient(ellipse 50% 40% at 80% 70%,rgba(0,102,255,.4),transparent 60%),
  radial-gradient(ellipse 70% 50% at 50% 100%,rgba(0,255,229,.2),transparent 60%);
  filter:blur(40px);animation:auroraMove 12s ease-in-out infinite alternate}
@keyframes auroraMove{0%{transform:translate(0,0) scale(1)}100%{transform:translate(-30px,20px) scale(1.1)}}
.contact-wrap{max-width:760px;margin:0 auto;position:relative;z-index:2}
.form-floating{position:relative}
.form-floating>.form-control,.form-floating>textarea{background:rgba(255,255,255,.04);border:1px solid rgba(0,255,229,.2);color:#fff;border-radius:12px;font-family:'Inter',sans-serif}
.form-floating>.form-control:focus,.form-floating>textarea:focus{background:rgba(255,255,255,.06);border-color:var(--cyan);box-shadow:0 0 0 .15rem rgba(0,255,229,.2);color:#fff}
.form-floating>label{color:#8ea0bb;font-family:'Inter',sans-serif}
.form-floating>.form-control:focus~label,.form-floating>.form-control:not(:placeholder-shown)~label{color:var(--cyan)}
.invalid-feedback{color:#ff8aa0}
#submitBtn{position:relative;overflow:hidden;border-radius:50px}
#submitBtn:not(:disabled){animation:pulseGlow 2.2s ease-in-out infinite}
@keyframes pulseGlow{0%,100%{box-shadow:0 4px 20px rgba(0,102,255,.4)}50%{box-shadow:0 4px 30px rgba(0,255,229,.85),0 0 40px rgba(0,255,229,.4)}}

/* Particle burst */
.burst{position:fixed;inset:0;pointer-events:none;z-index:10000;display:none}
.burst.show{display:block}
.burst span{position:absolute;width:8px;height:8px;border-radius:50%;background:var(--cyan);box-shadow:0 0 12px var(--cyan)}

/* Popup */
.popup-overlay{position:fixed;inset:0;background:rgba(0,0,0,.78);backdrop-filter:blur(8px);display:none;align-items:center;justify-content:center;z-index:9999;padding:1rem}
.popup-overlay.show{display:flex}
.popup-box{background:#0b1224;border:1px solid rgba(0,255,229,.3);border-radius:24px;padding:2.5rem 2rem;text-align:center;max-width:420px;width:100%;color:#fff}
.check-circle{width:90px;height:90px;border-radius:50%;background:var(--grad-cyan);display:flex;align-items:center;justify-content:center;margin:0 auto 1.5rem;font-size:2.5rem;color:#001;box-shadow:var(--glow-cyan)}

/* Scroll-to-top */
.scroll-top{position:fixed;bottom:24px;right:24px;width:50px;height:50px;border-radius:50%;background:var(--grad-cyan);color:#001;border:none;display:flex;align-items:center;justify-content:center;font-size:1.1rem;box-shadow:0 6px 20px rgba(0,255,229,.5);cursor:pointer;opacity:0;visibility:hidden;transform:translateY(20px);transition:all .3s ease;z-index:1000;font-weight:700}
.scroll-top.show{opacity:1;visibility:visible;transform:translateY(0)}
.scroll-top:hover{transform:translateY(-3px) scale(1.05)}

/* Footer */
footer{padding:60px 0 30px;border-top:1px solid rgba(0,255,229,.1);position:relative;background:#040610;color:#fff}
footer::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:var(--grad-cyan)}
.social-icons a{display:inline-flex;width:44px;height:44px;border-radius:50%;align-items:center;justify-content:center;background:rgba(255,255,255,.05);margin:0 6px;transition:all .3s ease;color:#fff}
.social-icons a:hover{background:var(--grad-cyan);transform:scale(1.2) translateY(-3px);box-shadow:var(--glow-cyan);color:#001}
.footer-links a{color:#9fb0c9;margin:0 .7rem;font-size:.85rem;transition:color .3s;display:inline-block;line-height:2;text-transform:uppercase;letter-spacing:.1em;font-family:'Inter',sans-serif}
.footer-links a:hover{color:var(--cyan)}
.spinner-border-sm{width:1rem;height:1rem;border-width:.18em}

@media(max-width:768px){.contact-wrap{padding:1.25rem!important}.footer-links a{margin:0 .5rem}}
@media(max-width:375px){.container{padding-left:1rem;padding-right:1rem}}

/* ============ PROFILE FLIP CARD ============ */
.profile-card-3d{perspective:1500px;width:240px;height:240px;margin:0 auto}
@media(max-width:576px){.profile-card-3d{width:180px;height:180px}}
.profile-card-inner{width:100%;height:100%;position:relative;transform-style:preserve-3d;will-change:transform}
.profile-card-inner .profile-img{width:100%;height:100%}

/* ============ 3D LAPTOP SECTION ============ */
#laptop-section{min-height:100vh;position:relative;overflow:hidden;background:radial-gradient(ellipse at center,#0b1a2e 0%,#050913 60%,#000 100%);padding:80px 0}
#laptop-canvas{position:absolute;inset:0;z-index:1;cursor:grab}
#laptop-canvas:active{cursor:grabbing}
.laptop-heading{position:relative;z-index:3;text-align:center;color:#EAF4FF;font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,5vw,4rem);letter-spacing:.04em;padding-top:1rem;text-shadow:0 0 30px rgba(80,180,255,.4)}
.laptop-sub{position:relative;z-index:3;text-align:center;color:#7fb3d9;font-family:'Inter',sans-serif;font-size:1rem;margin-bottom:1rem;letter-spacing:.08em}
.code-tag{position:absolute;font-family:'JetBrains Mono',monospace;font-size:1rem;color:rgba(120,200,255,.7);text-shadow:0 0 12px rgba(80,180,255,.6);pointer-events:none;font-weight:600}
@media(max-width:768px){#laptop-section{min-height:80vh}.code-tag{font-size:.8rem}}
.code-tag{position:absolute;font-family:'Courier New',monospace;font-weight:700;color:#A0522D;text-shadow:0 0 12px rgba(201,168,76,.7);font-size:1.1rem;pointer-events:none;z-index:2;opacity:.85}
@media(max-width:768px){#laptop-section{min-height:70vh}#laptop-canvas{height:55vh;top:auto;bottom:0}.code-tag{font-size:.8rem}}

/* ============ 3D CUBE TRANSITION ============ */
.cube-stage{perspective:1200px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:200px;height:200px;z-index:5;will-change:transform}
.cube-3d{position:relative;width:100%;height:100%;transform-style:preserve-3d;will-change:transform}
.cube-3d .face{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',sans-serif;font-size:2rem;letter-spacing:.1em;border:2px solid rgba(255,255,255,.15);box-shadow:inset 0 0 50px rgba(0,0,0,.3)}
.cube-3d .f-front{background:linear-gradient(135deg,#F5F0E8,#EDE8DC);color:#1A1A1A;transform:translateZ(100px)}
.cube-3d .f-back{background:linear-gradient(135deg,#0A0A0A,#1A0000);color:#FF6600;transform:rotateY(180deg) translateZ(100px)}
.cube-3d .f-right{background:linear-gradient(135deg,#C9A84C,#A0522D);color:#fff;transform:rotateY(90deg) translateZ(100px)}
.cube-3d .f-left{background:linear-gradient(135deg,#8B0000,#3D0000);color:#fff;transform:rotateY(-90deg) translateZ(100px)}
.cube-3d .f-top{background:linear-gradient(135deg,#EDE8DC,#C9A84C);color:#1A1A1A;transform:rotateX(90deg) translateZ(100px)}
.cube-3d .f-bottom{background:linear-gradient(135deg,#3D0000,#0A0A0A);color:#FF2200;transform:rotateX(-90deg) translateZ(100px)}

/* ============ SECTION INDICATOR DOTS ============ */
.section-dots{position:fixed;right:18px;top:50%;transform:translateY(-50%);z-index:1040;display:flex;flex-direction:column;gap:14px;padding:10px 6px}
.section-dots a{width:10px;height:10px;border-radius:50%;background:rgba(120,120,120,.5);display:block;transition:all .35s ease;position:relative}
.section-dots a.dot-light{background:rgba(160,82,45,.45)}
.section-dots a.active{background:#FF2200;box-shadow:0 0 14px #FF2200,0 0 28px rgba(255,34,0,.5);transform:scale(1.6)}
.section-dots a.active.dot-light{background:#A0522D;box-shadow:0 0 14px #C9A84C,0 0 28px rgba(201,168,76,.5)}
.section-dots a::after{content:attr(data-label);position:absolute;right:22px;top:50%;transform:translateY(-50%);font-family:'Inter',sans-serif;font-size:.7rem;text-transform:uppercase;letter-spacing:.15em;color:#fff;background:rgba(0,0,0,.7);padding:3px 8px;border-radius:4px;opacity:0;pointer-events:none;white-space:nowrap;transition:opacity .25s}
.section-dots a:hover::after{opacity:1}
@media(max-width:576px){.section-dots{right:8px;gap:10px}.section-dots a{width:8px;height:8px}}

/* ============ PROJECT CARDS — auto height, full content ============ */
.project-card{height:auto!important;min-height:0!important;overflow:visible!important}
.project-card .tech-badges{flex-wrap:wrap}
.project-card:hover{transform:translateY(-15px);box-shadow:0 25px 60px rgba(255,34,0,.45)}

/* ============ CONTACT FORM — SVG border draw on focus ============ */
.form-floating{position:relative}
.form-floating .focus-line{position:absolute;left:8px;right:8px;bottom:2px;height:2px;background:linear-gradient(90deg,#FF2200,#FF6600);transform:scaleX(0);transform-origin:left center;transition:transform .5s cubic-bezier(.4,0,.2,1);pointer-events:none;border-radius:2px;box-shadow:0 0 8px rgba(255,34,0,.6)}
.form-floating:focus-within .focus-line{transform:scaleX(1)}

/* Services mobile: stack & disable horizontal pin */
@media(max-width:768px){.services-track{flex-direction:column;transform:none!important;padding:1rem}.service-card{flex:0 0 auto;width:100%;max-width:420px;margin:0 auto}}

/* Skill ball sizing */
.skill-card{min-height:140px}
@media(max-width:480px){.skill-card{max-width:110px;min-height:110px;padding:.8rem .4rem}.skill-card i{font-size:1.6rem}.skill-card h6{font-size:.62rem}}
`;

// EmailJS credentials
const EMAILJS_PUBLIC_KEY = "_G982YW0HScWtP8S6";
const EMAILJS_SERVICE_ID = "service_z8dmrf7";
const EMAILJS_TEMPLATE_ID = "template_o4twtzn";

const PROJECTS = [
  { icon: "fas fa-globe", title: "Business Portfolio Website", desc: "A modern animated portfolio site for a freelance professional", tech: ["HTML", "CSS", "JavaScript", "Bootstrap 5"], detail: "Designed and developed a fully responsive portfolio website with GSAP animations, glassmorphism UI, and EmailJS contact form integration." },
  { icon: "fas fa-boxes-stacked", title: "Inventory Management System", desc: "A complete stock & inventory tracking web application", tech: ["Laravel", "PHP", "MySQL", "Bootstrap"], detail: "Built a full-stack inventory management system with role-based access, product CRUD, stock alerts, reporting dashboard, and PDF invoice generation." },
  { icon: "fas fa-cart-shopping", title: "eCommerce Store", desc: "Online store with cart, checkout, and payment gateway", tech: ["PHP", "CodeIgniter 3", "MySQL", "Razorpay"], detail: "Developed a multi-vendor eCommerce platform with product catalog, shopping cart, order tracking, Razorpay payment integration, and admin panel." },
  { icon: "fas fa-folder-tree", title: "Custom CRM System", desc: "Client relationship manager with lead tracking & follow-ups", tech: ["Laravel", "MySQL", "REST API", "Bootstrap"], detail: "Created a CRM solution with lead management, follow-up reminders, client communication logs, task assignments, and analytics dashboard." },
  { icon: "fas fa-utensils", title: "Restaurant Booking App", desc: "Table reservation system with real-time availability & SMS alerts", tech: ["Laravel", "Vue.js", "MySQL", "Twilio"], detail: "Built an end-to-end restaurant reservation platform with live table availability, customer SMS confirmations, waitlist management, and an owner analytics dashboard." },
  { icon: "fas fa-graduation-cap", title: "Learning Management System", desc: "Online course platform with video lessons, quizzes & certificates", tech: ["Laravel", "MySQL", "FFmpeg", "Stripe"], detail: "Created a complete LMS with instructor uploads, secure video streaming, auto-graded quizzes, progress tracking, Stripe checkout, and PDF certificate generation." },
  { icon: "fas fa-hospital", title: "Clinic Appointment System", desc: "Doctor–patient appointment booking with calendar sync", tech: ["PHP", "MySQL", "Google Calendar API"], detail: "Delivered a clinic management portal with doctor schedules, patient records, online appointment booking, Google Calendar sync, and automated email reminders." },
  { icon: "fas fa-truck-fast", title: "Logistics Tracking Portal", desc: "Real-time shipment tracking with driver & admin dashboards", tech: ["Laravel", "MySQL", "Leaflet.js", "REST API"], detail: "Engineered a logistics platform with live GPS tracking on maps, route optimization, role-based driver/admin dashboards, and delivery proof uploads." },
];




const TYPING_ROLES = ["Full Stack Developer", "Laravel Expert", "Web App Builder", "Problem Solver"];
const HERO_NAME = "SAHIL ANSARI";

function Index() {
  // Client-only render: skips heavy SSR work (Three.js/GSAP scenes never run on server)
  // and prevents any window/document-touching effect from triggering SSR 500s.
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const [loading, setLoading] = useState(true);
  const [showTop, setShowTop] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [typed, setTyped] = useState("");
  const nameRef = useRef<HTMLHeadingElement | null>(null);


  // Preloader
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(t);
  }, []);

  // Typing effect (cream-zone amber accent)
  useEffect(() => {
    let roleIdx = 0, charIdx = 0, deleting = false;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const current = TYPING_ROLES[roleIdx];
      if (!deleting) {
        charIdx++;
        setTyped(current.slice(0, charIdx));
        if (charIdx === current.length) { deleting = true; timer = setTimeout(tick, 1400); return; }
      } else {
        charIdx--;
        setTyped(current.slice(0, charIdx));
        if (charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % TYPING_ROLES.length; }
      }
      timer = setTimeout(tick, deleting ? 50 : 90);
    };
    timer = setTimeout(tick, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Scroll handlers (navbar mode + active link + scroll top)
  useEffect(() => {
    const nav = document.getElementById("mainNav");
    const sections = ["home", "about", "skills", "services", "projects", "contact"];
    const onScroll = () => {
      const y = window.scrollY;
      setShowTop(y > 300);
      const aboutEl = document.getElementById("about");
      const aboutBottom = aboutEl ? aboutEl.getBoundingClientRect().bottom : Infinity;
      if (nav) {
        nav.classList.toggle("scrolled", y > 50);
        nav.classList.toggle("dark-mode", aboutBottom < 80);
      }
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      document.querySelectorAll("#navMenu .nav-link").forEach((l) => {
        const href = (l as HTMLAnchorElement).getAttribute("href");
        l.classList.toggle("active", href === `#${current}`);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Custom cursor
  useEffect(() => {
    if (window.matchMedia("(hover:none)").matches) return;
    const dot = document.createElement("div"); dot.className = "cursor-dot";
    const ring = document.createElement("div"); ring.className = "cursor-ring";
    document.body.appendChild(dot); document.body.appendChild(ring);
    let mx = 0, my = 0, rx = 0, ry = 0;
    const move = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`; };
    const loop = () => { rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18; ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`; requestAnimationFrame(loop); };
    window.addEventListener("mousemove", move);
    loop();
    const hoverables = document.querySelectorAll("a, button, .skill-card, .service-card, .project-card, .hero-title");
    const onEnter = () => ring.classList.add("hovering");
    const onLeave = () => ring.classList.remove("hovering");
    hoverables.forEach((el) => { el.addEventListener("mouseenter", onEnter); el.addEventListener("mouseleave", onLeave); });
    return () => {
      window.removeEventListener("mousemove", move);
      dot.remove(); ring.remove();
      hoverables.forEach((el) => { el.removeEventListener("mouseenter", onEnter); el.removeEventListener("mouseleave", onLeave); });
    };
  }, [loading]);

  // Hero parallax (mouse on grid)
  useEffect(() => {
    const grid = document.querySelector(".hero-grid") as HTMLElement | null;
    if (!grid) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      grid.style.transform = `translate(${x}px,${y}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Gold dust + gold binary 0/1 — hero
  useEffect(() => {
    const wrap = document.getElementById("goldDust");
    if (!wrap) return;
    wrap.innerHTML = "";
    // soft gold dust dots (small count for perf)
    for (let i = 0; i < 18; i++) {
      const d = document.createElement("div");
      d.className = "gold-dust";
      d.style.left = Math.random() * 100 + "%";
      d.style.animationDuration = 10 + Math.random() * 12 + "s";
      d.style.animationDelay = -Math.random() * 12 + "s";
      const s = 2 + Math.random() * 3;
      d.style.width = s + "px"; d.style.height = s + "px";
      wrap.appendChild(d);
    }
    // floating gold binary digits (Matrix-style but gold + slow)
    for (let i = 0; i < 22; i++) {
      const b = document.createElement("div");
      b.className = "binary-gold";
      b.textContent = Math.random() > 0.5 ? "1" : "0";
      b.style.left = Math.random() * 100 + "%";
      b.style.fontSize = (12 + Math.random() * 18) + "px";
      b.style.animationDuration = (10 + Math.random() * 14) + "s";
      b.style.animationDelay = -Math.random() * 14 + "s";
      b.style.opacity = String(0.3 + Math.random() * 0.5);
      wrap.appendChild(b);
    }
  }, []);

  // Dark zone: red embers + red binary rain + ghost code snippets
  useEffect(() => {
    const wrap = document.getElementById("starfield");
    if (!wrap) return;
    wrap.innerHTML = "";
    // ember dots
    for (let i = 0; i < 45; i++) {
      const s = document.createElement("div");
      s.className = "star";
      s.style.left = Math.random() * 100 + "%";
      s.style.top = Math.random() * 100 + "%";
      s.style.animationDuration = 2 + Math.random() * 4 + "s";
      s.style.animationDelay = -Math.random() * 4 + "s";
      const sz = 1 + Math.random() * 2;
      s.style.width = sz + "px"; s.style.height = sz + "px";
      wrap.appendChild(s);
    }
    // red binary rain — right side, fast Matrix
    for (let i = 0; i < 28; i++) {
      const b = document.createElement("div");
      b.className = "binary-red";
      b.textContent = Math.random() > 0.5 ? "1" : "0";
      // bias toward right side for that "code rain on right" feel
      b.style.left = (40 + Math.random() * 60) + "%";
      b.style.fontSize = (11 + Math.random() * 14) + "px";
      b.style.animationDuration = (3 + Math.random() * 5) + "s";
      b.style.animationDelay = -Math.random() * 6 + "s";
      wrap.appendChild(b);
    }
    // ghost code snippets — flash + fade
    const SNIPS = ["function init(){}", "SELECT * FROM users", "git commit -m 'fix'", "const dev = true;", "npm run build", "Route::get('/')", "</div>", "use App\\Models", "{ user_id: 42 }", "DROP TABLE old;"];
    for (let i = 0; i < 6; i++) {
      const g = document.createElement("div");
      g.className = "ghost-code";
      g.textContent = SNIPS[Math.floor(Math.random() * SNIPS.length)];
      g.style.left = (5 + Math.random() * 85) + "%";
      g.style.top = (10 + Math.random() * 75) + "%";
      g.style.animationDelay = -Math.random() * 6 + "s";
      g.style.fontSize = (12 + Math.random() * 6) + "px";
      wrap.appendChild(g);
    }
  }, []);

  // About bokeh
  useEffect(() => {
    const wrap = document.getElementById("aboutBokeh");
    if (!wrap) return;
    wrap.innerHTML = "";
    for (let i = 0; i < 6; i++) {
      const b = document.createElement("div");
      b.className = "about-bokeh";
      const s = 200 + Math.random() * 200;
      b.style.width = s + "px"; b.style.height = s + "px";
      b.style.left = Math.random() * 100 + "%";
      b.style.top = Math.random() * 100 + "%";
      b.style.animationDelay = -Math.random() * 18 + "s";
      wrap.appendChild(b);
    }
  }, []);

  // ============ SECTION INDICATOR DOTS — active state + light/dark theming ============
  useEffect(() => {
    const dots = document.querySelectorAll<HTMLAnchorElement>("#sectionDots a");
    if (!dots.length) return;
    const update = () => {
      const ids = Array.from(dots).map(d => d.dataset.target!);
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 200) current = id;
      }
      // detect if current section is in light zone
      const lightZones = ["home", "about", "laptop-section"];
      const isLight = lightZones.includes(current);
      dots.forEach(d => {
        d.classList.toggle("active", d.dataset.target === current);
        d.classList.toggle("dot-light", isLight);
      });
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  // ============ ABOUT mouse parallax on profile ============
  useEffect(() => {
    const wrap = document.getElementById("profileWrap");
    const section = document.getElementById("about");
    if (!wrap || !section) return;
    const card = wrap.querySelector(".profile-card-3d") as HTMLElement | null;
    const onMove = (e: MouseEvent) => {
      const r = section.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      if (card) card.style.transform = `translate(${x}px,${y}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // ============ CONTACT FORM — inject focus underline divs ============
  useEffect(() => {
    if (loading) return;
    const wraps = document.querySelectorAll("#contactForm .form-floating");
    wraps.forEach((w) => {
      if (w.querySelector(".focus-line")) return;
      const ln = document.createElement("div");
      ln.className = "focus-line";
      w.appendChild(ln);
    });
  }, [loading]);

  // ============ 3D LAPTOP SCENE — Three.js ============
  useEffect(() => {
    if (loading) return;
    const w = window as any;
    const mount = document.getElementById("laptop-canvas");
    const tagWrap = document.getElementById("codeTagsWrap");
    if (!mount) return;
    let cleanup = () => {};

    const init = () => {
      if (!w.THREE) { setTimeout(init, 300); return; }
      const THREE = w.THREE;
      const isMobile = window.innerWidth < 768;
      const W = mount.clientWidth || window.innerWidth;
      const H = mount.clientHeight || (isMobile ? window.innerHeight * 0.55 : window.innerHeight);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
      camera.position.set(0, 1.5, 8);
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(W, H);
      mount.innerHTML = ""; mount.appendChild(renderer.domElement);

      // Lights
      scene.add(new THREE.AmbientLight(0xffffff, 0.55));
      const gold = new THREE.PointLight(0xC9A84C, 2.4, 30);
      gold.position.set(3, 5, 4); scene.add(gold);
      const warm = new THREE.PointLight(0xA0522D, 1.2, 25);
      warm.position.set(-4, 2, 3); scene.add(warm);

      // Laptop group
      const laptop = new THREE.Group();
      const baseMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, metalness: 0.85, roughness: 0.25 });
      const base = new THREE.Mesh(new THREE.BoxGeometry(3, 0.15, 2), baseMat);
      laptop.add(base);

      // Keyboard keys (grid of small dark boxes)
      const keyMat = new THREE.MeshStandardMaterial({ color: 0x0a0a0a, metalness: 0.6, roughness: 0.5 });
      for (let kx = -1.2; kx <= 1.2; kx += 0.22) {
        for (let kz = -0.7; kz <= 0.6; kz += 0.22) {
          const key = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.04, 0.18), keyMat);
          key.position.set(kx, 0.1, kz); laptop.add(key);
        }
      }

      // Lid (pivoted)
      const lidPivot = new THREE.Group();
      lidPivot.position.set(0, 0.075, -1);
      const lid = new THREE.Mesh(new THREE.BoxGeometry(3, 2, 0.1), baseMat);
      lid.position.set(0, 1, 0); lidPivot.add(lid);

      // Animated screen canvas texture (scrolling green code)
      const cnv = document.createElement("canvas"); cnv.width = 512; cnv.height = 320;
      const ctx = cnv.getContext("2d")!;
      const tex = new THREE.CanvasTexture(cnv);
      const screen = new THREE.Mesh(
        new THREE.PlaneGeometry(2.8, 1.85),
        new THREE.MeshBasicMaterial({ map: tex })
      );
      screen.position.set(0, 1, 0.051); lidPivot.add(screen);

      lidPivot.rotation.x = -Math.PI / 180 * 110; // open 110°
      laptop.add(lidPivot);

      laptop.position.y = 0.5;
      scene.add(laptop);

      // Screen content drawer
      const SNIPS = ["const dev = new Sahil();", "git push origin main", "function build(){ return ; }", "SELECT * FROM skills", "// shipping it ", "<App />", "npm run deploy", "Route::get('/')", "while(coding){ coffee++; }", "export default Magic;"];
      let scrollY = 0;
      const drawScreen = () => {
        ctx.fillStyle = "#0a1a0a"; ctx.fillRect(0,0,512,320);
        ctx.font = "bold 18px 'Courier New', monospace";
        ctx.fillStyle = "#39FF6A";
        ctx.shadowColor = "#39FF6A"; ctx.shadowBlur = 6;
        for (let i = 0; i < 16; i++) {
          const y = ((i * 22) + scrollY) % 340 - 18;
          const txt = SNIPS[(i + Math.floor(scrollY/22)) % SNIPS.length];
          ctx.fillText(txt, 16, y);
        }
        // binary edge
        ctx.fillStyle = "rgba(57,255,106,.5)";
        for (let i = 0; i < 18; i++) {
          ctx.fillText(Math.random() > 0.5 ? "1" : "0", 480, (i * 18 + scrollY/2) % 320);
        }
        tex.needsUpdate = true;
      };

      // Mouse 360° rotation
      let targetRX = 0, targetRY = 0;
      const onMove = (e: MouseEvent) => {
        const r = mount.getBoundingClientRect();
        if (e.clientY < r.top || e.clientY > r.bottom) return;
        targetRY = (e.clientX / window.innerWidth - 0.5) * Math.PI * 0.6;
        targetRX = -(e.clientY / window.innerHeight - 0.5) * Math.PI * 0.4;
      };
      window.addEventListener("mousemove", onMove);

      // Resize
      const onResize = () => {
        const NW = mount.clientWidth || window.innerWidth;
        const NH = mount.clientHeight || (window.innerWidth < 768 ? window.innerHeight * 0.55 : window.innerHeight);
        camera.aspect = NW / NH; camera.updateProjectionMatrix();
        renderer.setSize(NW, NH);
      };
      window.addEventListener("resize", onResize);

      // GSAP scroll zoom + dispersal
      if (w.gsap && w.ScrollTrigger) {
        w.gsap.timeline({
          scrollTrigger: { trigger: "#laptop-section", start: "top bottom", end: "bottom top", scrub: 1.5 },
        })
          .fromTo(camera.position, { z: 12 }, { z: 4, ease: "none" })
          .to(laptop.scale, { x: 2.2, y: 2.2, z: 2.2, duration: 0.3 })
          .to(laptop.position, { y: 2, duration: 0.3 }, "<");
      }

      // Animation loop
      let raf = 0;
      const animate = () => {
        scrollY += 0.6; drawScreen();
        laptop.rotation.y += (targetRY + 0.003 - laptop.rotation.y) * 0.06;
        laptop.rotation.x += (targetRX - laptop.rotation.x) * 0.06;
        renderer.render(scene, camera);
        raf = requestAnimationFrame(animate);
      };
      animate();

      cleanup = () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("resize", onResize);
        renderer.dispose();
        if (mount) mount.innerHTML = "";
      };
    };
    init();

    // Floating code tags around laptop (DOM-based for simplicity)
    if (tagWrap) {
      tagWrap.innerHTML = "";
      const TAGS = ["</>", "{ }", "=>", "//", "null", "true", "<App/>", "()=>", "[]", "&&"];
      TAGS.forEach((t, i) => {
        const el = document.createElement("div");
        el.className = "code-tag"; el.textContent = t;
        const angle = (i / TAGS.length) * Math.PI * 2;
        const r = 38;
        el.style.left = `calc(50% + ${Math.cos(angle) * r}vmin)`;
        el.style.top = `calc(50% + ${Math.sin(angle) * (r * 0.5)}vmin)`;
        tagWrap.appendChild(el);
        if ((window as any).gsap) {
          (window as any).gsap.to(el, {
            rotation: 360, duration: 18 + i, repeat: -1, ease: "none",
          });
          (window as any).gsap.to(el, {
            y: "+=20", yoyo: true, repeat: -1, duration: 3 + (i % 3), ease: "sine.inOut",
          });
        }
      });
    }

    return () => cleanup();
  }, [loading]);



  // Hero name hover scatter — PERSISTENT (scatter on enter, snap back on leave)
  useEffect(() => {
    if (loading) return;
    const el = nameRef.current;
    if (!el) return;
    const letters = Array.from(el.querySelectorAll<HTMLElement>(".letter:not(.space)"));
    const w = window as any;
    const onEnter = () => {
      if (!w.gsap) return;
      el.classList.add("glitching");
      w.gsap.killTweensOf(letters);
      letters.forEach((l) => {
        w.gsap.to(l, {
          x: (Math.random() - 0.5) * 300,
          y: (Math.random() - 0.5) * 200,
          rotation: (Math.random() - 0.5) * 90,
          scale: 0.6 + Math.random() * 0.9,
          color: "#C9A84C",
          duration: 0.45,
          ease: "power3.out",
          overwrite: "auto",
        });
      });
    };
    const onLeave = () => {
      el.classList.remove("glitching");
      if (!w.gsap) return;
      w.gsap.killTweensOf(letters);
      w.gsap.to(letters, {
        x: 0, y: 0, rotation: 0, scale: 1, color: "#1A1A1A",
        duration: 0.7, ease: "elastic.out(1,0.55)", stagger: 0.015, overwrite: "auto",
      });
    };
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [loading]);

  // Main libraries: GSAP timelines, ScrollTrigger, EmailJS, form, counters, tilt
  useEffect(() => {
    const init = () => {
      const w = window as any;
      if (w.emailjs) w.emailjs.init(EMAILJS_PUBLIC_KEY);

      if (w.gsap) {
        const gsap = w.gsap;
        if (w.ScrollTrigger) gsap.registerPlugin(w.ScrollTrigger);

        // === Cinematic intro ===
        const tl = gsap.timeline();
        tl.from("#mainNav", { y: -60, opacity: 0, duration: 0.8, ease: "power3.out" })
          .from(".hero-grid", { scale: 1.5, opacity: 0, duration: 1.1, ease: "power3.out" }, "-=0.4")
          .from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
          .from(".hero-title .letter", {
            y: -120, opacity: 0, rotationX: -90, filter: "blur(20px)",
            duration: 0.7, ease: "power4.out", stagger: 0.05,
          }, "-=0.3")
          .from(".typing-wrap", { y: 20, opacity: 0, duration: 0.6 }, "-=0.2")
          .from(".hero p.lead", { y: 20, opacity: 0, duration: 0.6 }, "-=0.3")
          .from(".hero-cta > *", { y: 20, opacity: 0, duration: 0.5, stagger: 0.12 }, "-=0.3");

        if (w.ScrollTrigger) {
          // Section title reveals
          document.querySelectorAll(".section-title").forEach((el) => {
            gsap.from(el, { y: 50, opacity: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%" } });
          });

          // About word-by-word
          gsap.to(".about-word", {
            opacity: 1, ease: "none", stagger: 0.05,
            scrollTrigger: { trigger: "#about .about-text", start: "top 80%", end: "bottom 60%", scrub: true },
          });

          // Profile flip
          gsap.from(".profile-img", { rotationY: 180, opacity: 0, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: ".profile-wrap", start: "top 80%" } });

          // === Color collapse transition: ink pour + shockwave ===
          const transTL = gsap.timeline({
            scrollTrigger: { trigger: ".transition-zone", start: "top bottom", end: "bottom top", scrub: 1 },
          });
          transTL.fromTo(".ink-pour", { yPercent: -100 }, { yPercent: 0, ease: "power2.inOut" })
                 .to(".transition-stars", { opacity: 1, ease: "power2.in" }, "-=0.3");

          // Shockwave at mid-transition
          gsap.fromTo(".shockwave",
            { scale: 0, opacity: 0 },
            { scale: 60, opacity: 1, duration: 1.2, ease: "power3.out",
              scrollTrigger: { trigger: ".transition-zone", start: "center center", toggleActions: "play none none reverse" },
              onComplete: function () { (this.targets()[0] as HTMLElement).style.opacity = "0"; } });

          // Skills — zig-zag explosion + magnetic snap back, reverses on scroll up
          const skillCards = gsap.utils.toArray(".skill-card") as HTMLElement[];
          skillCards.forEach((card: HTMLElement, i: number) => {
            const angle = (i / skillCards.length) * Math.PI * 2;
            const zig = i % 2 === 0 ? 1 : -1;
            gsap.fromTo(card,
              {
                x: Math.cos(angle) * 500 + zig * 120,
                y: Math.sin(angle) * 320,
                rotationY: 720,
                rotationZ: zig * 180,
                scale: 0,
                opacity: 0,
              },
              {
                x: 0, y: 0, rotationY: 0, rotationZ: 0, scale: 1, opacity: 1,
                duration: 1, ease: "elastic.out(1, 0.55)", delay: i * 0.05,
                scrollTrigger: { trigger: "#skills", start: "top 75%", end: "bottom 30%", toggleActions: "play reverse play reverse" },
              }
            );
          });

          // Heading letters fly in from random edges (split skill heading)
          const skillH = document.querySelector("#skills .section-title");
          if (skillH && !skillH.querySelector(".sl")) {
            const txt = skillH.textContent || "";
            skillH.innerHTML = txt.split("").map(c => `<span class="sl" style="display:inline-block">${c === " " ? "&nbsp;" : c}</span>`).join("");
            gsap.from("#skills .sl", {
              x: () => gsap.utils.random(-window.innerWidth, window.innerWidth),
              y: () => gsap.utils.random(-window.innerHeight / 2, window.innerHeight / 2),
              rotation: () => gsap.utils.random(-180, 180),
              opacity: 0, stagger: 0.04, duration: 0.8, ease: "power4.out",
              scrollTrigger: { trigger: "#skills", start: "top 80%" },
            });
          }

          // 3D Cube transition timeline
          gsap.set("#transitionCube", { scale: 0, opacity: 0 });
          gsap.timeline({
            scrollTrigger: { trigger: "#transition-zone", start: "top bottom", end: "bottom top", scrub: 1.2 },
          })
            .to("#transitionCube", { scale: 1, opacity: 1, duration: 0.2 })
            .to("#transitionCube .cube-3d", { rotateX: 360, rotateY: 540, duration: 1, ease: "none" }, "<")
            .to("#transitionCube", { scale: 25, duration: 0.5, ease: "power2.in" }, "-=0.4")
            .to("#transitionCube", { scale: 0, opacity: 0, duration: 0.2 }, "-=0.05");

          // Profile bidirectional flip — plays forward on enter, reverses on leave
          gsap.fromTo(".profile-card-inner",
            { rotateY: 0 },
            {
              rotateY: 360, duration: 1.2, ease: "power2.inOut",
              scrollTrigger: {
                trigger: ".about-section", start: "top 70%", end: "top 20%",
                toggleActions: "play reverse play reverse",
              },
            }
          );

          // Services horizontal scroll
          const track = document.querySelector(".services-track") as HTMLElement | null;
          if (track) {
            const distance = () => track.scrollWidth - window.innerWidth + 80;
            gsap.to(track, {
              x: () => -distance(),
              ease: "none",
              scrollTrigger: {
                trigger: "#services",
                start: "top top",
                end: () => "+=" + distance(),
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
              },
            });
          }

          // Project cards reveal — glitch dissolve (with safety so cards never stay invisible)
          gsap.fromTo(".project-card",
            { y: 60, opacity: 0, filter: "blur(15px)" },
            {
              y: 0, opacity: 1, filter: "blur(0px)",
              duration: 0.9, stagger: 0.12, ease: "power3.out",
              scrollTrigger: { trigger: "#projects", start: "top 85%", toggleActions: "play none none none" },
            }
          );
          // Failsafe: ensure cards are visible after 4s no matter what
          setTimeout(() => {
            document.querySelectorAll<HTMLElement>(".project-card").forEach((c) => {
              c.style.opacity = "1"; c.style.filter = "none"; c.style.transform = "none";
            });
          }, 4000);

          // Curtain wipe for major sections (no testimonials)
          ["about", "skills", "projects", "contact"].forEach((id) => {
            const sec = document.getElementById(id);
            if (!sec) return;
            const curtain = document.createElement("div");
            curtain.style.cssText = "position:absolute;inset:0;background:" + (id === "about" ? "#E5DFD0" : "#060810") + ";z-index:5;pointer-events:none;transform-origin:left center";
            sec.style.position = "relative"; sec.appendChild(curtain);
            gsap.to(curtain, {
              scaleX: 0, duration: 0.9, ease: "power3.inOut",
              scrollTrigger: { trigger: sec, start: "top 80%", toggleActions: "play none none none" },
              onComplete: () => curtain.remove(),
            });
          });
        }
      }

      // VanillaTilt on project cards
      if (w.VanillaTilt) {
        w.VanillaTilt.init(document.querySelectorAll(".project-card"), { max: 12, speed: 400, glare: true, "max-glare": 0.25 });
      }
    };
    const t = setTimeout(init, 700);

    // Auto-close mobile menu on link click
    const navLinks = document.querySelectorAll("#navMenu .nav-link, #navMenu .btn-cyan, #navMenu .btn-gold");
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

    // Counters
    const counters = document.querySelectorAll<HTMLElement>(".stat-num-cream");
    const animateCounter = (el: HTMLElement) => {
      const target = +(el.dataset.target || "0");
      const suffix = el.dataset.suffix || "";
      const w = window as any;
      if (w.gsap) {
        const obj = { v: 0 };
        w.gsap.to(obj, { v: target, duration: 1.8, ease: "power2.out", onUpdate: () => { el.textContent = Math.floor(obj.v).toString() + suffix; } });
      } else { el.textContent = target + suffix; }
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { animateCounter(e.target as HTMLElement); io.unobserve(e.target); } });
    }, { threshold: 0.15, rootMargin: "0px 0px -10% 0px" });
    counters.forEach((c) => io.observe(c));
    // Safety: if still 0 after 3s (e.g. IO never fired because already in view), force animate
    setTimeout(() => {
      counters.forEach((c) => { if (c.textContent === "0") animateCounter(c); });
    }, 3000);

    // Contact form
    const form = document.getElementById("contactForm") as HTMLFormElement | null;
    const btn = document.getElementById("submitBtn") as HTMLButtonElement | null;
    const btnText = document.getElementById("submitText");
    const btnSpin = document.getElementById("submitSpin");
    const popup = document.getElementById("popup");
    const errAlert = document.getElementById("errAlert");
    const burst = document.getElementById("burst");

    const fireBurst = () => {
      if (!burst) return;
      burst.innerHTML = "";
      burst.classList.add("show");
      const w = window as any;
      const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
      for (let i = 0; i < 60; i++) {
        const s = document.createElement("span");
        s.style.left = cx + "px"; s.style.top = cy + "px";
        burst.appendChild(s);
        if (w.gsap) {
          const ang = Math.random() * Math.PI * 2;
          const dist = 200 + Math.random() * 300;
          w.gsap.to(s, {
            x: Math.cos(ang) * dist, y: Math.sin(ang) * dist,
            opacity: 0, scale: 0.2, duration: 1.2 + Math.random() * 0.5, ease: "power3.out",
          });
        }
      }
      setTimeout(() => burst.classList.remove("show"), 1800);
    };

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
        fireBurst();
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
      navLinks.forEach((l) => l.removeEventListener("click", closeMenu));
      form?.removeEventListener("submit", handler);
      closeBtn?.removeEventListener("click", close);
      io.disconnect();
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const activeP = activeProject !== null ? PROJECTS[activeProject] : null;

  // Split about paragraph into words for scroll-reveal
  const aboutWords = "Hi, I'm Sahil Ansari — a passionate Full Stack Developer based in Bengaluru, India. I was born and raised in Birgunj, Nepal. I studied till 10th grade at Angel International Secondary School and completed my 12th at Birgunj Public College. I then moved to Bengaluru to chase my dreams in the IT field. I completed my BCA in 2022 and my MCA in 2025. I have 5+ years of hands-on experience in building web applications and I'm always excited to take on new challenges.".split(/\s+/);

  // SSR shell — lightweight placeholder; full UI hydrates on client
  if (!mounted) {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <div className="preloader"><div className="spin" /></div>
      </>
    );
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* Preloader */}
      <div className={`preloader${loading ? "" : " hide"}`}><div className="spin" /></div>


      {/* Navbar */}
      <nav id="mainNav" className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand brand-logo" href="#home">SAHIL.</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="toggler-icon"><span></span><span></span><span></span></span>
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
              <li className="nav-item ms-lg-3 mt-2 mt-lg-0"><a className="btn btn-gold" href="#contact">Hire Me</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ============ HERO — cream cinematic ============ */}
      <header id="home" className="hero">
        <div className="hero-grid"></div>
        <div className="hero-particles" id="goldDust"></div>
        <div className="container">
          <p className="hero-eyebrow">Portfolio · Full Stack Developer</p>
          <h1 ref={nameRef} className="hero-title">
            {HERO_NAME.split("").map((ch, i) => (
              <span key={i} className={`letter${ch === " " ? " space" : ""}`}>{ch === " " ? "\u00A0" : ch}</span>
            ))}
          </h1>
          <div className="typing-wrap"><span>{typed}</span><span className="typing-cursor"></span></div>
          <p className="lead">I build fast, scalable, and beautifully crafted web applications — from static sites to powerful CRM systems.</p>
          <div className="hero-cta d-flex flex-wrap justify-content-center gap-2">
            <a href="#projects" className="btn btn-gold"><i className="fas fa-briefcase me-2"></i>View My Work</a>
            <a href="#contact" className="btn btn-outline-dark-cream"><i className="fas fa-paper-plane me-2"></i>Contact Me</a>
            <a href="/resume.pdf" download className="btn btn-outline-dark-cream"><i className="fas fa-file-arrow-down me-2"></i>Download Resume</a>
          </div>
        </div>
        <a href="#about" className="scroll-arrow" aria-label="Scroll down"><i className="fas fa-chevron-down"></i></a>
      </header>

      {/* ============ ABOUT — cream zone ============ */}
      <section id="about" className="about-zone about-section">
        <div id="aboutBokeh" style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <p className="section-eyebrow" style={{ color: "var(--amber)" }}>01 — About</p>
          <h2 className="section-title">About <span className="accent">Me</span></h2>
          <div className="profile-wrap" id="profileWrap">
            <div className="profile-card-3d">
              <div className="profile-card-inner">
                <img src="/profile.jpg" alt="Sahil Ansari" className="profile-img" />
              </div>
            </div>
          </div>
          <p className="about-text">
            {aboutWords.map((w, i) => (<span key={i} className="about-word">{w}</span>))}
          </p>
          <div className="row g-4 mt-4">
            {[
              { n: 10, s: "+", l: "Projects Done" },
              { n: 20, s: "+", l: "Happy Clients" },
              { n: 5, s: "+", l: "Years Experience" },
            ].map((st, i) => (
              <div className="col-md-4" key={i}>
                <div className="stat-cream">
                  <div className="stat-num-cream" data-target={st.n} data-suffix={st.s}>0</div>
                  <div className="stat-label-cream">{st.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 3D LAPTOP SCENE — between About and Skills ============ */}
      <section id="laptop-section">
        <div id="laptop-canvas"></div>
        <div id="codeTagsWrap" style={{position:"absolute",inset:0,zIndex:2,pointerEvents:"none"}}></div>
        <div className="container">
          <h2 className="laptop-heading">Crafted in <span style={{color:"#A0522D"}}>Code</span></h2>
          <p className="laptop-sub">Move your mouse · scroll to zoom in</p>
        </div>
      </section>

      {/* ============ TRANSITION ZONE — 3D rotating cube wipe ============ */}
      <div id="transition-zone" className="transition-zone">
        <div className="transition-stars"></div>
        <div className="ink-pour"></div>
        <div className="cube-stage" id="transitionCube">
          <div className="cube-3d">
            <div className="face f-front">CREAM</div>
            <div className="face f-back">FIRE</div>
            <div className="face f-right">GOLD</div>
            <div className="face f-left">CRIMSON</div>
            <div className="face f-top">LIGHT</div>
            <div className="face f-bottom">DARK</div>
          </div>
        </div>
        <div className="shockwave"></div>
      </div>

      {/* ============ SKILLS — dark zone ============ */}
      <section id="skills" className="dark-zone">
        <div id="starfield" className="starfield"></div>
        <div className="hex-overlay"></div>
        <div className="container">
          <p className="section-eyebrow">02 — Tech</p>
          <h2 className="section-title">My <span className="accent">Tech Stack</span></h2>
          <p className="section-sub">Technologies I work with every day.</p>
          <div className="row g-3 g-md-4">
            {[
              { i: "devicon-laravel-plain colored", t: "Laravel" },
              { i: "devicon-php-plain colored", t: "PHP" },
              { i: "devicon-codeigniter-plain colored", t: "CodeIgniter" },
              { i: "devicon-html5-plain colored", t: "HTML5" },
              { i: "devicon-css3-plain colored", t: "CSS3" },
              { i: "devicon-javascript-plain colored", t: "JavaScript" },
              { i: "devicon-python-plain colored", t: "Python" },
              { i: "devicon-java-plain colored", t: "Java" },
              { i: "devicon-spring-plain colored", t: "Spring Boot" },
              { i: "devicon-mysql-plain colored", t: "MySQL" },
              { i: "devicon-postgresql-plain colored", t: "PostgreSQL" },
              { i: "devicon-bootstrap-plain colored", t: "Bootstrap" },
              { i: "devicon-git-plain colored", t: "Git" },
            ].map((s, i) => (
              <div className="col-4 col-sm-3 col-md-3 col-lg-2" key={i}>
                <div className="skill-card" data-skill={s.t} title={s.t}>
                  <div className="skill-inner">
                    <i className={s.i} style={{fontSize:"2.4rem"}}></i>
                    <h6>{s.t}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES — horizontal scroll ============ */}
      <section id="services" className="dark-zone services-pin">
        <div className="container-fluid px-0">
          <div className="container">
            <p className="section-eyebrow">03 — Services</p>
            <h2 className="section-title">What I <span className="accent">Build</span></h2>
            <p className="section-sub">From simple landing pages to complete business systems — scroll to explore.</p>
          </div>
          <div className="services-track">
            {[
              { e: "🌐", t: "Static Websites", d: "Clean, fast, and beautiful static sites." },
              { e: "⚙️", t: "Dynamic Websites", d: "Powerful data-driven web applications." },
              { e: "🛒", t: "eCommerce Websites", d: "Full online store with payment integration." },
              { e: "🗂️", t: "CRM Systems", d: "Custom CRM solutions for your business." },
            ].map((s, i) => (
              <div className="glass-dark service-card" key={i}>
                <span className="service-icon">{s.e}</span>
                <h5>{s.t}</h5>
                <p className="desc">{s.d}</p>
                <p className="cta">Interested? Feel free to reach out — I'd love to build something great for you!</p>
                <a href="#contact" className="btn btn-cyan mt-auto"><i className="fas fa-envelope me-2"></i>Contact Me</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROJECTS — 3D tilt cards ============ */}
      <section id="projects" className="dark-zone">
        <div className="container">
          <p className="section-eyebrow">04 — Work</p>
          <h2 className="section-title">Projects I've <span className="accent">Built</span></h2>
          <p className="section-sub">A snapshot of real-world systems I've designed and shipped.</p>
          <div className="row g-4">
            {PROJECTS.map((p, i) => (
              <div className="col-md-6" key={i}>
                <div className="glass-dark project-card">
                  <i className={`p-icon ${p.icon}`}></i>
                  <h5>{p.title}</h5>
                  <p className="p-desc">{p.desc}</p>
                  <div className="tech-badges">
                    {p.tech.map((t) => <span key={t}>{t}</span>)}
                  </div>
                  <button type="button" className="btn btn-outline-cyan" onClick={() => setActiveProject(i)}>
                    <i className="fas fa-circle-info me-2"></i>View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* (Testimonials section removed) */}

      {/* ============ CONTACT — aurora ============ */}
      <section id="contact" className="dark-zone">
        <div className="aurora"></div>
        <div className="container">
          <p className="section-eyebrow text-center">06 — Connect</p>
          <h2 className="section-title text-center">Let's Build <span className="accent">Something Together</span></h2>
          <p className="section-sub text-center mx-auto">Whether you need a static site, dynamic web app, eCommerce store, or CRM — I'm just a message away.</p>
          <div className="contact-wrap glass-dark p-4 p-md-5">
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
                  <button type="submit" id="submitBtn" className="btn btn-cyan px-5 py-3">
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
          <h3 className="brand-logo mb-2" style={{ color: "#fff" }}>SAHIL.</h3>
          <div className="footer-links mb-3">
            <a href="#home">Home</a><a href="#about">About</a><a href="#skills">Skills</a>
            <a href="#services">Services</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
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

      {/* Section indicator dots */}
      <nav className="section-dots" id="sectionDots" aria-label="Section navigation">
        {[
          { id: "home", label: "Home" },
          { id: "about", label: "About" },
          { id: "laptop-section", label: "Code" },
          { id: "skills", label: "Skills" },
          { id: "services", label: "Services" },
          { id: "projects", label: "Projects" },
          { id: "contact", label: "Contact" },
        ].map((s) => (
          <a key={s.id} href={`#${s.id}`} data-target={s.id} data-label={s.label} aria-label={s.label}></a>
        ))}
      </nav>

      {/* Scroll-to-top */}
      <button className={`scroll-top${showTop ? " show" : ""}`} onClick={scrollToTop} aria-label="Scroll to top">
        <i className="fas fa-arrow-up"></i>
      </button>

      {/* Project Modal */}
      {activeP && (
        <div className="modal fade show" style={{ display: "block", background: "rgba(0,0,0,.75)" }} tabIndex={-1} role="dialog" onClick={() => setActiveProject(null)}>
          <div className="modal-dialog modal-dialog-centered animate__animated animate__zoomIn" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content modal-dark">
              <div className="modal-header">
                <h5 className="modal-title"><i className={`${activeP.icon} me-2`} style={{ color: "var(--cyan)" }}></i>{activeP.title}</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={() => setActiveProject(null)}></button>
              </div>
              <div className="modal-body">
                <p style={{ color: "#c4d0e3", lineHeight: 1.7 }}>{activeP.detail}</p>
                <div className="tech-badges mt-3">
                  {activeP.tech.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
              <div className="modal-footer" style={{ borderTop: "1px solid rgba(0,255,229,.15)" }}>
                <button type="button" className="btn btn-outline-cyan" onClick={() => setActiveProject(null)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Particle burst container */}
      <div id="burst" className="burst"></div>

      {/* Success popup */}
      <div id="popup" className="popup-overlay">
        <div className="popup-box animate__animated animate__zoomIn">
          <div className="check-circle"><i className="fas fa-check"></i></div>
          <h4 className="mb-2 fw-bold">Message Sent Successfully!</h4>
          <p className="text-secondary">Thanks for reaching out. I'll get back to you soon.</p>
          <button id="popupClose" className="btn btn-cyan mt-2 px-4">Awesome!</button>
        </div>
      </div>
    </>
  );
}

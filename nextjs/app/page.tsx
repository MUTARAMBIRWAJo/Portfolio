export const metadata = {
  title: 'Mutarambirwa Joseph — Software & Hardware Engineer',
  description:
    'Portfolio of Mutarambirwa Joseph — Software & Hardware Engineer, Network Systems Engineer & Full-Stack Developer based in Kigali, Rwanda.',
};

const content = `
<!-- NAV -->
<nav>
  <a href="#hero" class="nav-logo">MJ.</a>
  <ul class="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#education">Education</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <a href="mailto:mutarambirwaj1@gmail.com" class="nav-cta">Hire Me</a>
</nav>

<!-- HERO -->
<section id="hero">
  <div class="hero-text">
    <div class="hero-badge">Available for opportunities</div>
    <h1 class="hero-name">Mutarambirwa<br><span>Joseph</span></h1>
    <p class="hero-title" id="typed-title"></p>
    <p class="hero-desc">Computer Engineering graduate from the University of Rwanda — building production-grade web platforms, AI-powered mobile apps, and enterprise network infrastructures. Cisco CCNA I–III certified.</p>
    <div class="hero-actions">
      <a href="#projects" class="btn-primary">View Projects</a>
      <a href="#contact" class="btn-ghost">Get In Touch</a>
    </div>
    <div class="hero-stats">
      <div><div class="stat-num">8+</div><div class="stat-label">GitHub Repos</div></div>
      <div><div class="stat-num">3</div><div class="stat-label">Live Apps</div></div>
      <div><div class="stat-num">4</div><div class="stat-label">Certifications</div></div>
      <div><div class="stat-num">3+</div><div class="stat-label">Years Coding</div></div>
    </div>
  </div>

  <div class="hero-visual">
    <div class="photo-frame">
      <img id="hero-photo" src="https://via.placeholder.com/310x370.png?text=Joseph" alt="Mutarambirwa Joseph — Software & Hardware Engineer" />
    </div>
    <div class="hero-tag tag-cisco"><span class="tag-dot"></span> Cisco CCNA I · II · III</div>
    <div class="hero-tag tag-stack"><span class="tag-dot"></span> Laravel · Flutter · TypeScript</div>
  </div>

  <div class="scroll-hint">
    <div class="scroll-line"></div>
    <span>Scroll</span>
  </div>
</section>

<!-- ABOUT -->
<section id="about">
  <div class="section-inner">
    <div class="section-label">Who I am</div>
    <h2 class="section-title">Bridging Software,<br>Hardware &amp; Networks</h2>
    <div class="about-grid reveal">
      <div class="about-text">
        <p>I'm a <strong>Computer Engineering student</strong> at the University of Rwanda (graduating May 2026), specializing at the intersection of software development, hardware systems, and network engineering. I don't just write code — I build complete, deployed solutions.</p>
        <p>From designing <strong>enterprise LAN/WAN topologies</strong> in Cisco Packet Tracer to shipping production TypeScript apps on Vercel, I operate across the full technology stack. My flagship project, <strong>RideConnect</strong>, spans three repositories — a Flutter mobile app, a Laravel Filament backend, and a Python AI engine for intelligent routing.</p>
        <p>I'm equally comfortable configuring VLANs and OSPF routing as I am implementing RESTful APIs or diagnosing hardware faults. That rare combination of <strong>breadth and depth</strong> is what sets me apart as a full-spectrum engineer.</p>
      </div>
      <div class="about-facts">
        <div class="fact-row"><div class="fact-icon">📍</div><div><div class="fact-key">Location</div><div class="fact-val">Kigali, Rwanda</div></div></div>
        <div class="fact-row"><div class="fact-icon">🎓</div><div><div class="fact-key">Education</div><div class="fact-val">B.Eng Computer Engineering — University of Rwanda (2022–2026)</div></div></div>
        <div class="fact-row"><div class="fact-icon">🌐</div><div><div class="fact-key">Live Projects</div><div class="fact-val">tuganire.site · travel-comapny.vercel.app · job-house-production.vercel.app</div></div></div>
        <div class="fact-row"><div class="fact-icon">💼</div><div><div class="fact-key">Seeking</div><div class="fact-val">Junior Software / Network / Full-Stack Developer roles</div></div></div>
        <div class="fact-row"><div class="fact-icon">🗣️</div><div><div class="fact-key">Languages</div><div class="fact-val">Kinyarwanda (Native) · English (B2+) · French (B1)</div></div></div>
        <div class="fact-row"><div class="fact-icon">📧</div><div><div class="fact-key">Email</div><div class="fact-val">mutarambirwaj1@gmail.com</div></div></div>
      </div>
    </div>
  </div>
</section>

<!-- SKILLS -->
<section id="skills">
  <div class="section-inner">
    <div class="section-label">What I work with</div>
    <h2 class="section-title">Technical Skills</h2>
    <p class="section-sub">A broad but deep toolkit spanning networking infrastructure, full-stack development, mobile engineering, and hardware systems.</p>
    <div class="skills-grid">
      <div class="skill-card reveal">
        <div class="skill-card-icon">🌐</div>
        <div class="skill-card-title">Networking &amp; Infrastructure</div>
        <div class="skill-tags">
          <span class="skill-tag">CCNA I·II·III</span><span class="skill-tag">LAN/WAN</span><span class="skill-tag">VLANs</span><span class="skill-tag">OSPF</span><span class="skill-tag">EIGRP</span><span class="skill-tag">STP/VTP</span><span class="skill-tag">Subnetting</span><span class="skill-tag">NAT</span><span class="skill-tag">ACL</span><span class="skill-tag">DHCP</span><span class="skill-tag">Packet Tracer</span>
        </div>
      </div>
      <div class="skill-card reveal reveal-delay-1">
        <div class="skill-card-icon">💻</div>
        <div class="skill-card-title">Programming Languages</div>
        <div class="skill-tags">
          <span class="skill-tag">PHP</span><span class="skill-tag">TypeScript</span><span class="skill-tag">JavaScript</span><span class="skill-tag">Python</span><span class="skill-tag">Dart</span><span class="skill-tag">Java</span><span class="skill-tag">C/C++</span><span class="skill-tag">HTML5</span><span class="skill-tag">CSS3</span><span class="skill-tag">Visual Basic</span>
        </div>
      </div>
      <div class="skill-card reveal reveal-delay-2">
        <div class="skill-card-icon">⚙️</div>
        <div class="skill-card-title">Frameworks &amp; Databases</div>
        <div class="skill-tags">
          <span class="skill-tag">Laravel</span><span class="skill-tag">Next.js</span><span class="skill-tag">React</span><span class="skill-tag">Flutter</span><span class="skill-tag">Filament</span><span class="skill-tag">MySQL</span><span class="skill-tag">PostgreSQL</span><span class="skill-tag">REST API</span><span class="skill-tag">MVC</span><span class="skill-tag">JWT Auth</span>
        </div>
      </div>
      <div class="skill-card reveal">
        <div class="skill-card-icon">🔧</div>
        <div class="skill-card-title">Hardware &amp; Systems</div>
        <div class="skill-tags">
          <span class="skill-tag">PC Assembly</span><span class="skill-tag">Hardware Diagnostics</span><span class="skill-tag">Linux Admin</span><span class="skill-tag">Windows Server</span><span class="skill-tag">OS Install</span><span class="skill-tag">IoT</span><span class="skill-tag">Embedded</span><span class="skill-tag">Circuit Design</span>
        </div>
      </div>
      <div class="skill-card reveal reveal-delay-1">
        <div class="skill-card-icon">🛠️</div>
        <div class="skill-card-title">Dev Tools &amp; DevOps</div>
        <div class="skill-tags">
          <span class="skill-tag">Git</span><span class="skill-tag">GitHub</span><span class="skill-tag">VS Code</span><span class="skill-tag">IntelliJ</span><span class="skill-tag">Docker</span><span class="skill-tag">Vercel</span><span class="skill-tag">cPanel</span><span class="skill-tag">XAMPP</span><span class="skill-tag">Postman</span>
        </div>
      </div>
      <div class="skill-card reveal reveal-delay-2">
        <div class="skill-card-icon">☁️</div>
        <div class="skill-card-title">Web &amp; Deployment</div>
        <div class="skill-tags">
          <span class="skill-tag">DNS Config</span><span class="skill-tag">SSL/HTTPS</span><span class="skill-tag">Web Hosting</span><span class="skill-tag">Vercel Deploy</span><span class="skill-tag">cPanel</span><span class="skill-tag">Linux Server</span><span class="skill-tag">Domain Setup</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- PROJECTS -->
<section id="projects">
  <div class="section-inner">
    <div class="section-label">What I've built</div>
    <h2 class="section-title">Featured Projects</h2>
    <p class="section-sub">Production-deployed applications, AI-powered systems, and real-world engineering solutions from my GitHub portfolio.</p>
    <div class="projects-grid">

      <div class="project-card featured reveal">
        <div class="project-header">
          <div class="project-icon">🚗</div>
          <div class="project-links">
            <a href="https://github.com/MUTARAMBIRWAJo/RideConnect-Backend-" target="_blank" class="proj-link">⬡ Backend</a>
            <a href="https://github.com/MUTARAMBIRWAJo/RideConnect-Mob-App" target="_blank" class="proj-link">📱 Mobile</a>
            <a href="https://github.com/MUTARAMBIRWAJo/RideConnect-ai" target="_blank" class="proj-link">🤖 AI</a>
            <a href="https://github.com/MUTARAMBIRWAJo/RideConnect" target="_blank" class="proj-link">🌐 Web</a>
          </div>
        </div>
        <div class="project-name">RideConnect — AI-Powered Ride-Hailing Platform</div>
        <div class="project-desc">Full-stack ride-hailing ecosystem spanning 4 repositories. A Flutter cross-platform mobile app for riders &amp; drivers, a Laravel Filament admin backend for managing trips, payments and users, a Python AI engine for intelligent driver-rider matching and route optimization, and a web dashboard.</div>
        <div class="project-stack">
          <span class="stack-tag">PHP</span><span class="stack-tag">Laravel</span><span class="stack-tag">Filament</span><span class="stack-tag">Flutter</span><span class="stack-tag">Dart</span><span class="stack-tag">Python</span><span class="stack-tag">REST API</span><span class="stack-tag">JWT</span><span class="stack-tag">MySQL</span>
        </div>
      </div>

      <div class="project-card reveal reveal-delay-1">
        <div class="project-header">
          <div class="project-icon">📰</div>
          <div class="project-links">
            <a href="https://tuganire.vercel.app" target="_blank" class="proj-link">↗ Live</a>
            <a href="https://github.com/MUTARAMBIRWAJo/Tuganire-news" target="_blank" class="proj-link">⬡ Code</a>
          </div>
        </div>
        <div class="project-name">Tuganire — News &amp; Media Platform</div>
        <div class="live-badge">tuganire.vercel.app · tuganire.site</div>
        <div class="project-desc">Bilingual news and digital media platform — "Tuganire Today &amp; Tomorrow". Dynamic articles, categorized feeds, PHP/Laravel CMS backend and TypeScript/Next.js frontend deployed on Vercel.</div>
        <div class="project-stack">
          <span class="stack-tag">TypeScript</span><span class="stack-tag">Next.js</span><span class="stack-tag">PHP</span><span class="stack-tag">Laravel</span><span class="stack-tag">MySQL</span><span class="stack-tag">Vercel</span>
        </div>
      </div>

      <div class="project-card reveal">
        <div class="project-header">
          <div class="project-icon">🌍</div>
          <div class="project-links">
            <a href="https://travel-comapny.vercel.app" target="_blank" class="proj-link">↗ Live</a>
            <a href="https://github.com/MUTARAMBIRWAJo/Travel_Comapny" target="_blank" class="proj-link">⬡ Code</a>
          </div>
        </div>
        <div class="project-name">Travel Company Rwanda</div>
        <div class="live-badge">travel-comapny.vercel.app</div>
        <div class="project-desc">Production tourism website for a Rwandan travel company. Responsive multi-page site featuring tour packages, destination galleries, and booking inquiry flows.</div>
        <div class="project-stack">
          <span class="stack-tag">TypeScript</span><span class="stack-tag">Next.js</span><span class="stack-tag">Vercel</span>
        </div>
      </div>

      <div class="project-card reveal reveal-delay-1">
        <div class="project-header">
          <div class="project-icon">🎵</div>
          <div class="project-links">
            <a href="https://job-house-production.vercel.app" target="_blank" class="proj-link">↗ Live</a>
            <a href="https://github.com/MUTARAMBIRWAJo/Job-house-production" target="_blank" class="proj-link">⬡ Code</a>
          </div>
        </div>
        <div class="project-name">Job House Production</div>
        <div class="live-badge">job-house-production.vercel.app</div>
        <div class="project-desc">Gospel media platform for streaming and publishing religious content. Artist profiles, media listings, and event management with a modern TypeScript frontend.</div>
        <div class="project-stack">
          <span class="stack-tag">TypeScript</span><span class="stack-tag">Next.js</span><span class="stack-tag">Vercel</span>
        </div>
      </div>

      <div class="project-card reveal reveal-delay-2">
        <div class="project-header">
          <div class="project-icon">🌱</div>
          <div class="project-links">
            <a href="https://github.com/MUTARAMBIRWAJo/project_CropCare" target="_blank" class="proj-link">⬡ Code</a>
          </div>
        </div>
        <div class="project-name">CropCare — AgriTech System</div>
        <div class="project-desc">Agricultural disease detection app helping Rwandan farmers identify crop illnesses through image-based diagnosis. Includes treatment recommendations and a normalized MySQL disease database.</div>
        <div class="project-stack">
          <span class="stack-tag">PHP</span><span class="stack-tag">Laravel</span><span class="stack-tag">MySQL</span><span class="stack-tag">HTML/CSS</span>
        </div>
      </div>

      <div class="project-card reveal">
        <div class="project-header">
          <div class="project-icon">📚</div>
          <div class="project-links">
            <a href="https://github.com/MUTARAMBIRWAJo/smart-library-system" target="_blank" class="proj-link">⬡ Code</a>
          </div>
        </div>
        <div class="project-name">Smart Library System</div>
        <div class="project-desc">Python-based library management system automating cataloguing, member management, loan tracking, fine calculation, and multi-branch inventory control.</div>
        <div class="project-stack">
          <span class="stack-tag">Python</span><span class="stack-tag">Database</span><span class="stack-tag">CRUD</span>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- EXPERIENCE -->
<section id="experience">
  <div class="section-inner">
    <div class="section-label">My journey</div>
    <h2 class="section-title">Professional Experience</h2>
    <div class="timeline reveal">
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">March 2024 — Present</div>
        <div class="timeline-role">Accountant (Technology-Focused)</div>
        <div class="timeline-company">Irondo · Katabaro Cell, Kigali</div>
        <ul class="timeline-desc">
          <li>Maintained digital financial records using computer-based accounting systems with 100% data accuracy</li>
          <li>Designed database structures and automated reporting workflows to improve operational efficiency</li>
          <li>Provided technology solutions to support administrative processes and audit readiness</li>
        </ul>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">Oct 2021 — Jan 2022</div>
        <div class="timeline-role">Program Assistant</div>
        <div class="timeline-company">Ejo Heza Long-Term Savings Program · Kimisagara Sector</div>
        <ul class="timeline-desc">
          <li>Entered and managed subscriber data in government digital systems with strict accuracy standards</li>
          <li>Guided citizens through digital enrollment processes and provided technical assistance</li>
          <li>Ensured data security, confidentiality, and integrity across all digital records</li>
        </ul>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">2019</div>
        <div class="timeline-role">Data Entry &amp; Data Manager</div>
        <div class="timeline-company">Katabaro Cell Administration · Rwanda</div>
        <ul class="timeline-desc">
          <li>Managed administrative data using computer systems, maintaining organized digital records</li>
          <li>Created digital filing systems to support local government administrative workflows</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- EDUCATION -->
<section id="education">
  <div class="section-inner">
    <div class="section-label">Academic background</div>
    <h2 class="section-title">Education &amp; Certifications</h2>
    <div class="edu-grid reveal">
      <div class="edu-card">
        <div class="edu-year">2022 — May 2026 (Expected)</div>
        <div class="edu-degree">Bachelor of Computer Engineering</div>
        <div class="edu-school">University of Rwanda · Kigali</div>
        <div class="skill-tags">
          <span class="skill-tag">Networking</span><span class="skill-tag">Software Engineering</span><span class="skill-tag">Embedded Systems</span><span class="skill-tag">Databases</span><span class="skill-tag">OS</span><span class="skill-tag">Digital Electronics</span><span class="skill-tag">Microprocessors</span>
        </div>
      </div>
      <div class="edu-card">
        <div class="edu-year">2018 — 2021</div>
        <div class="edu-degree">Advanced Level — Mathematics, Economics &amp; CS</div>
        <div class="edu-school">Ecole Secondaire de Rukozo</div>
        <div class="skill-tags">
          <span class="skill-tag">Mathematics</span><span class="skill-tag">Economics</span><span class="skill-tag">Computer Science</span>
        </div>
      </div>
    </div>
    <div class="section-label" style="margin-bottom:1.4rem;">Certifications</div>
    <div class="cert-grid reveal">
      <div class="cert-card"><div class="cert-icon">🏆</div><div class="cert-name">CCNA I</div><div class="cert-org">Cisco · Introduction to Networks</div></div>
      <div class="cert-card"><div class="cert-icon">🏆</div><div class="cert-name">CCNA II</div><div class="cert-org">Cisco · Switching &amp; Routing</div></div>
      <div class="cert-card"><div class="cert-icon">🏆</div><div class="cert-name">CCNA III</div><div class="cert-org">Cisco · Enterprise Networking</div></div>
      <div class="cert-card"><div class="cert-icon">🎖️</div><div class="cert-name">IT Essentials</div><div class="cert-org">Cisco · Hardware &amp; Software</div></div>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact">
  <div class="section-inner">
    <div class="section-label">Let's connect</div>
    <h2 class="section-title">Get In Touch</h2>
    <div class="contact-wrapper reveal">
      <div class="contact-info">
        <a href="mailto:mutarambirwaj1@gmail.com" class="contact-item"><div class="contact-item-icon">✉️</div><div><div class="contact-item-label">Email</div><div class="contact-item-val">mutarambirwaj1@gmail.com</div></div></a>
        <a href="tel:+250780126094" class="contact-item"><div class="contact-item-icon">📞</div><div><div class="contact-item-label">Phone</div><div class="contact-item-val">+250 780 126 094</div></div></a>
        <a href="https://github.com/MUTARAMBIRWAJo" target="_blank" class="contact-item"><div class="contact-item-icon">🐙</div><div><div class="contact-item-label">GitHub</div><div class="contact-item-val">github.com/MUTARAMBIRWAJo</div></div></a>
        <div class="contact-item"><div class="contact-item-icon">📍</div><div><div class="contact-item-label">Location</div><div class="contact-item-val">Kigali, Rwanda</div></div></div>
        <div class="lang-pills">
          <span class="lang-pill native">🇷🇼 Kinyarwanda — Native</span>
          <span class="lang-pill proficient">🇬🇧 English — B2+</span>
          <span class="lang-pill intermediate">🇫🇷 French — B1</span>
        </div>
      </div>
      <div class="contact-cta">
        <div class="contact-cta-title">Open to<br><span style="color:var(--teal)">New Roles</span></div>
        <div class="contact-cta-text">I'm actively seeking junior roles in software engineering, network engineering, or IT infrastructure. Whether you have a project, internship, or full-time position — let's talk.</div>
        <a href="mailto:mutarambirwaj1@gmail.com" class="btn-primary">Send Email →</a>
      </div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-left">MJ. — Mutarambirwa Joseph</div>
  <div class="footer-center">Built with HTML · CSS · JS · • Ready to deploy · © 2026</div>
  <div class="footer-socials">
    <a href="https://github.com/MUTARAMBIRWAJo" target="_blank">GitHub</a>
    <a href="mailto:mutarambirwaj1@gmail.com">Email</a>
    <a href="tel:+250780126094">Phone</a>
  </div>
</footer>
`;

export default function Home() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

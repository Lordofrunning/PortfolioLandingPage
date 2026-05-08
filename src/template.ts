export const template = `
  <div class="fixed-header">
    <h1>My Portfolio</h1>
    <nav class="header-nav">
      <a href="#" class="nav-icon" id="nav-placeholder" title="Coming Soon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/><text x="12" y="16" text-anchor="middle" font-size="10">?</text></svg>
      </a>
      <a href="https://github.com/Lordofrunning" target="_blank" rel="noopener noreferrer" class="nav-icon" title="GitHub">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      </a>
      <button class="theme-toggle" id="theme-toggle-nav" aria-label="Toggle light/dark mode">
        <span class="theme-toggle-icon"></span>
      </button>
      <button class="nav-icon profile-btn" id="profile-btn" title="About Me">
        <span class="profile-btn-text">Me</span>
      </button>
    </nav>
  </div>

  <!-- Profile Modal -->
  <div id="profile-modal" class="modal-overlay" hidden>
    <div class="profile-modal-content">
      <button class="modal-close" aria-label="Close">&times;</button>
      <img src="/PictureOfMeCropped.JPG" alt="Profile Picture" class="profile-pic" />
      <h2>About Me</h2>
      <p>Heyo! im Tyler. ive been coding since 2019, i started learning c# with Unity Game dev. i really enjoyed the coding aspect, and branched into other languages. im currently a sophmore in colledge, sutdying computer science.</p>
    </div>
    <div class="profile-modal-buttons">
      <button class="modal-btn modal-btn-primary">More About Me</button>
      <button class="modal-btn modal-btn-close">Close</button>
    </div>
  </div>

  <!-- Language Icon Modal -->
  <div id="lang-modal" class="modal-overlay" hidden>
    <div class="lang-modal-content">
      <button class="modal-close" aria-label="Close">&times;</button>
      <div class="lang-icon-display">
        <img id="lang-modal-icon" src="" alt="" />
      </div>
      <div class="lang-modal-main">
        <h2 id="lang-modal-title"></h2>
        <p id="lang-modal-description" class="lang-modal-description"></p>
      </div>
      <div class="lang-modal-bars">
        <div id="lang-experience-blocks-container" class="lang-experience-blocks-container"></div>
        <span id="lang-experience-years" class="lang-experience-years"></span>
      </div>
    </div>
  </div>

  <div class="top-banner">
    <h1>My Portfolio</h1>
    <button class="theme-toggle" id="theme-toggle-banner" aria-label="Toggle light/dark mode">
      <span class="theme-toggle-icon"></span>
    </button>
  </div>
  <header class="site-header"></header>

  <!-- Info Cards -->
  <section class="info-cards">
    <article class="info-card profile-card">
      <div class="info-card-body">
        <div class="avatar-container">
          <button class="avatar-btn" id="avatar-btn" title="About Me">
            <img src="/PictureOfMeCropped.JPG" alt="Profile" class="info-card-avatar" />
          </button>
          <a href="https://github.com/Lordofrunning" target="_blank" rel="noopener noreferrer" class="avatar-github-link" title="GitHub">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </div>
        <div class="info-card-content">
          <h3 class="info-card-name">Tyler</h3>
          <p class="info-card-location">🌍📍Utah USA🦅</p>
          <p class="info-card-extra">Student/Developer</p>
        </div>
        <div class="skill-icons">
          <div class="skill-item">
            <img src="/icons/react.svg" alt="React" data-lang="react" />
            <span>React</span>
          </div>
          <div class="skill-item">
            <img src="/icons/javascript.svg" alt="JavaScript" data-lang="javascript" />
            <span>JS</span>
          </div>
          <div class="skill-item">
            <img src="/icons/html5.svg" alt="HTML" data-lang="html" />
            <span>HTML</span>
          </div>
          <div class="skill-item">
            <img src="/icons/css.svg" alt="CSS" data-lang="css" />
            <span>CSS</span>
          </div>
          <div class="skill-item">
            <img src="/icons/python.svg" alt="Python" data-lang="python" />
            <span>Python</span>
          </div>
          <div class="skill-item">
            <img src="/icons/expo.svg" alt="Expo" data-lang="expo" />
            <span>Expo</span>
          </div>
          <div class="skill-item">
            <img src="/icons/mysql.svg" alt="SQL" data-lang="sql" />
            <span>SQL</span>
          </div>
          <div class="skill-item">
            <img src="/icons/csharpGrey.svg" alt="C#" data-lang="csharp" />
            <span>C#</span>
          </div>
          <div class="skill-item">
            <img src="/icons/cplusplus.svg" alt="C++" data-lang="cpp" />
            <span>C++</span>
          </div>
        </div>
      </div>
    </article>
  </section>

  <div class="roles-container">
    <h1 class="role-title role-software">Software Designer</h1>
    <h1 class="role-title role-ai">Information Technology</h1>
    <h1 class="role-title role-gamedev">Game Development</h1>
  </div>

  <!-- Software / Websites / Apps -->
  <div class="projects-dropdown-container">
    <button class="projects-dropdown-toggle" id="projects-toggle">
      <span class="projects-title">Software/Websites/Apps</span>
      <svg class="dropdown-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
    <div class="projects-dropdown-content" id="projects-content">
      <section id="projects" class="projects"></section>
    </div>
  </div>

  <!-- IT / Cyber Security -->
  <div class="projects-dropdown-container">
    <button class="projects-dropdown-toggle" id="itsecurity-toggle">
      <span class="projects-title">IT/Cyber Security</span>
      <svg class="dropdown-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
    <div class="projects-dropdown-content" id="itsecurity-content">
      <section id="itsecurity" class="itsecurity-section">
        <div class="itsecurity-columns">
          <div class="itsecurity-column itsecurity-left">
            <h3>IT Certifications</h3>
            <div class="cert-row">
              <p class="cert-item">CompTIA A+</p>
              <div id="chart-aplus"></div>
            </div>
            <div class="cert-row">
              <p class="cert-item">CompTIA Network+</p>
              <div id="chart-networkplus"></div>
            </div>
          </div>
          <div class="itsecurity-column itsecurity-center">
            <h3>Course Work</h3>
            <hr class="course-divider">
            <button class="course-dropdown-toggle" id="cybr2300-toggle">
              <span class="course-title">CYBR 2300</span>
              <svg class="dropdown-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
            <p class="course-description" id="cybr2300-content" hidden>Introductory course covering core computer networking and cybersecurity concepts, including protocols (TCP/IP, HTTP, UDP, TLS), packet transmission, and internet infrastructure. Emphasizes network standards, Ethernet/Wi-Fi systems, and foundational security topics like attacks and defense strategies.</p>
            <h3>Labs</h3>
          </div>
          <div class="itsecurity-column itsecurity-right">
            <h3>Experience</h3>
            <p>working on it.....</p>
          </div>
        </div>
      </section>
    </div>
  </div>

  <!-- Game Development -->
  <div class="projects-dropdown-container">
    <button class="projects-dropdown-toggle" id="gamedev-toggle">
      <span class="projects-title">Game Development</span>
      <svg class="dropdown-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
    <div class="projects-dropdown-content" id="gamedev-content">
      <section id="gamedev" class="gamedev-section">
        <p style="text-align: center; color: var(--text-mid); padding: 2rem; font-size: 1.1rem;">In Progress</p>
      </section>
    </div>
  </div>

  <!-- Education -->
  <div class="projects-dropdown-container">
    <button class="projects-dropdown-toggle" id="education-toggle">
      <span class="projects-title">Education</span>
      <svg class="dropdown-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
    <div class="projects-dropdown-content" id="education-content">
      <section id="education" class="education-section">
        <article class="education-card">
          <div class="education-media">
            <img src="/Images/EducationImage/Weber-State-Wildcats-logo.png" alt="Weber State University" loading="lazy" />
          </div>
          <div class="education-body">
            <h3>Weber State University</h3>
            <p class="education-meta">Computer Science, Sophomore</p>
            <p>
              Continuing to grow in software engineering fundamentals while applying coursework concepts to real portfolio and mobile app projects.
            </p>
            <ul class="education-points">
              <li>Focus areas: data structures, algorithms, and software design</li>
              <li>Applying classroom concepts in Javascript, SQL, Python, and C++ projects</li>
            </ul>
          </div>
        </article>
      </section>
    </div>
  </div>

  <!-- Lightbox -->
  <div id="lightbox" class="lightbox" hidden>
    <button class="lightbox-close" aria-label="Close">&times;</button>
    <button class="lightbox-arrow lightbox-prev" aria-label="Previous">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
    </button>
    <img class="lightbox-img" src="" alt="" />
    <button class="lightbox-arrow lightbox-next" aria-label="Next">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
    </button>
    <div class="lightbox-counter"></div>
  </div>
`

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("#sidebar .nav-link");
  const mainCard = document.getElementById("main-card");

  const sections = {
    safety: `
  <h2>Cyber Safety Tips</h2>
  <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
    <div class="col">
      <div class="card tip-card h-100">
        <div class="card-body">
          <h5 class="card-title">Use Strong Passwords</h5>
          <p class="card-text">Create unique, complex passwords and avoid using the same one for multiple accounts.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card tip-card h-100">
        <div class="card-body">
          <h5 class="card-title">Enable Two-Factor Authentication</h5>
          <p class="card-text">Add an extra layer of protection to your accounts with 2FA wherever possible.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card tip-card h-100">
        <div class="card-body">
          <h5 class="card-title">Avoid Phishing Scams</h5>
          <p class="card-text">Never click suspicious links or share personal details via email or messages.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card tip-card h-100">
        <div class="card-body">
          <h5 class="card-title">Update Regularly</h5>
          <p class="card-text">Keep your software, apps, and devices updated to patch security vulnerabilities.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card tip-card h-100">
        <div class="card-body">
          <h5 class="card-title">Use Secure Wi-Fi</h5>
          <p class="card-text">Avoid public Wi-Fi for sensitive transactions. Use VPNs for secure connections.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card tip-card h-100">
        <div class="card-body">
          <h5 class="card-title">Backup Your Data</h5>
          <p class="card-text">Regularly back up important data to prevent loss from attacks or hardware failure.</p>
        </div>
      </div>
    </div>
  </div>
`,
    awareness: `
      <h2>Cyber Awareness</h2>
      <p>Cyber awareness is the practice of understanding and recognizing online threats to protect personal and organizational data. It empowers individuals to make smart decisions when using technology, helping prevent attacks like phishing, malware, and identity theft. By adopting secure habits—such as using strong passwords, enabling multi-factor authentication, and staying alert to suspicious activity—we can all contribute to a safer digital environment.</p>
    `,
    digest: `
      <h2>Daily Digest</h2>
      <div class="row row-cols-1 row-cols-md-2 g-4 mt-3">
        <div class="col">
          <div class="card tip-card h-100">
            <div class="card-body">
              <h5 class="card-title">🚨 Scam of the Day: Fake Delivery</h5>
              <p class="card-text">“Your package is waiting!” – If you didn’t order anything, the only thing waiting is a cyber trap. Don’t click unknown links.</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card tip-card h-100">
            <div class="card-body">
              <h5 class="card-title">🔐 Password Pizza Rule</h5>
              <p class="card-text">A strong password = lots of toppings: symbols, numbers, uppercase & lowercase letters. Thin (short) = weak!</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card tip-card h-100">
            <div class="card-body">
              <h5 class="card-title">🧠 Think Before You Click</h5>
              <p class="card-text">If a message feels urgent or emotional, pause. Hackers use emotions to trick you.</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card tip-card h-100">
            <div class="card-body">
              <h5 class="card-title">📱 Update Reminder</h5>
              <p class="card-text">Outdated apps = unlocked doors. Updates fix holes before hackers find them!</p>
            </div>
          </div>
        </div>
      </div>
    `,
    manual: `
      <h2>Citizen Manual</h2>
      <p class="mb-3">Follow this simple flow to stay safe online:</p>

      <div class="container">
        <div class="card mb-3 p-3">
          <h5>🟦 Step 1: Identify the Source</h5>
          <p>Is the message from a trusted person or organization?</p>
          <p><strong>If YES →</strong> Go to Step 2</p>
          <p><strong>If NO →</strong> Treat it as suspicious.</p>
        </div>

        <div class="text-center mb-2"><h2>⬇️</h2></div>

        <div class="card mb-3 p-3">
          <h5>🟩 Step 2: Check for Red Flags</h5>
          <ul>
            <li>Spelling mistakes</li>
            <li>Strange links</li>
            <li>Too good to be true offers</li>
            <li>Urgent messages</li>
          </ul>
          <p><strong>If ANY appear → STOP & delete.</strong></p>
        </div>

        <div class="text-center mb-2"><h2>⬇️</h2></div>

        <div class="card mb-3 p-3">
          <h5>🟧 Step 3: Verify</h5>
          <p>Contact the sender using an official number or website.</p>
        </div>

        <div class="text-center mb-2"><h2>⬇️</h2></div>

        <div class="card mb-3 p-3">
          <h5>🟥 Step 4: Take Action</h5>
          <ul>
            <li>Report suspicious messages</li>
            <li>Block unknown senders</li>
            <li>Change compromised passwords</li>
            <li>Enable 2FA</li>
          </ul>
        </div>

        <div class="text-center mb-2"><h2>⬇️</h2></div>

        <div class="card mb-3 p-3 bg-light">
          <h5>🏁 Final Step: Stay Updated</h5>
          <p>Awareness is your strongest defense. Check cyber alerts regularly!</p>
        </div>
      </div>
    `,
    quiz: `
      <h2>Cyber Safety Quiz</h2>
      <div class="quiz-container">
        <div id="quiz-box"></div>
      </div>
    `,
    videos: `
      <h2>Cyber Awareness Videos</h2>
      <div class="video-grid">
        <div class="video-item">
          <iframe src="https://www.youtube.com/embed/2s9vZL2F0s0" title="Cyber Safety Tips" allowfullscreen></iframe>
        </div>
        <div class="video-item">
          <iframe src="https://www.youtube.com/embed/yE4xSUSYyew" title="Phishing Awareness" allowfullscreen></iframe>
        </div>
      </div>
    `
  };

  // default content on load
  mainCard.innerHTML = sections.safety;

  // Sidebar navigation handler
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      const section = link.getAttribute("data-section");
      mainCard.innerHTML = sections[section];

      if (section === "quiz") startQuiz();
    });
  });

  // ======================
  // 🧠 IMPROVED QUIZ LOGIC
  // ======================
  function startQuiz() {
    const quizData = [
      {
        question: "You receive an email from your bank asking you to verify your account by clicking a link. What should you do?",
        options: [
          "Click the link and log in immediately to avoid account lockout",
          "Call your bank using the number on their official website to confirm",
          "Reply to the email asking for more details",
          "Forward the email to your colleagues to warn them"
        ],
        correct: 1
      },
      {
        question: "Which password is the MOST secure?",
        options: [
          "BlueSky2023",
          "T!m#b3r@91$!z",
          "JohnDoe1995",
          "Password#1"
        ],
        correct: 1
      },
      {
        question: "You connect to a free airport Wi-Fi that doesn’t ask for a password. What’s the safest approach?",
        options: [
          "Use it only for browsing social media",
          "Avoid logging into any account and use a VPN",
          "It’s fine as long as the airport is reputable",
          "Send important emails quickly before leaving"
        ],
        correct: 1
      },
      {
        question: "Which of these actions BEST protects against ransomware attacks?",
        options: [
          "Opening attachments from known senders without checking",
          "Installing antivirus but skipping updates",
          "Regularly backing up your files to offline or cloud storage",
          "Ignoring suspicious pop-ups"
        ],
        correct: 2
      },
      {
        question: "What’s a sign that a website might NOT be secure?",
        options: [
          "It uses HTTPS in the address bar",
          "It asks for payment details on an HTTP page",
          "It displays a lock icon in the browser bar",
          "It loads slowly"
        ],
        correct: 1
      },
      {
        question: "An employee gets an email from the CEO asking for an urgent money transfer. What’s this likely to be?",
        options: [
          "Social engineering or business email compromise",
          "Normal corporate procedure",
          "An internal system test",
          "Spam from a marketing campaign"
        ],
        correct: 0
      },
      {
        question: "What’s the BEST way to securely dispose of an old hard drive?",
        options: [
          "Format it once and throw it away",
          "Delete all files manually",
          "Physically destroy or use certified data wiping tools",
          "Give it to a friend"
        ],
        correct: 2
      },
      {
        question: "Which of the following is the SAFEST method to store your passwords?",
        options: [
          "In a text file on your desktop",
          "In a secure password manager with encryption",
          "Writing them in a notebook near your desk",
          "Saving them in your browser’s autocomplete"
        ],
        correct: 1
      },
      {
        question: "What should you do before downloading software from the internet?",
        options: [
          "Check the publisher and verify authenticity",
          "Download it from any site that looks professional",
          "Disable antivirus to speed up installation",
          "Skip license agreements to save time"
        ],
        correct: 0
      },
      {
        question: "What’s the FIRST thing to do if you suspect your device has been hacked?",
        options: [
          "Ignore it until you’re sure",
          "Disconnect it from the internet and report to IT/security",
          "Install random antivirus apps immediately",
          "Restart your computer and continue working"
        ],
        correct: 1
      }
    ];

    const quizBox = document.getElementById("quiz-box");
    let current = 0;
    let score = 0;

    function loadQuestion() {
      if (current >= quizData.length) {
        quizBox.innerHTML = `
          <div class="quiz-result">
            <p>You scored <strong>${score}</strong> out of <strong>${quizData.length}</strong> 🧠</p>
            <p>${
              score >= 8
                ? "Excellent! You're cyber smart! 🔐"
                : score >= 5
                ? "Good job! But you can learn a bit more. 💡"
                : "Keep practicing — cyber safety takes awareness! ⚠️"
            }</p>
            <button class="btn btn-outline-light mt-3" id="restart-quiz">Restart Quiz</button>
          </div>
        `;
        document.getElementById("restart-quiz").addEventListener("click", () => {
          current = 0;
          score = 0;
          loadQuestion();
        });
        return;
      }

      const q = quizData[current];
      quizBox.innerHTML = `
        <div class="quiz-question">${current + 1}. ${q.question}</div>
        <div class="quiz-options">
          ${q.options
            .map((opt, i) => `<button data-index="${i}">${opt}</button>`)
            .join("")}
        </div>
      `;

      document.querySelectorAll(".quiz-options button").forEach(btn => {
        btn.addEventListener("click", () => {
          const selected = parseInt(btn.getAttribute("data-index"));
          if (selected === q.correct) {
            score++;
            btn.style.background = "rgba(0,255,0,0.3)";
          } else {
            btn.style.background = "rgba(255,0,0,0.3)";
          }

          setTimeout(() => {
            current++;
            loadQuestion();
          }, 900);
        });
      });
    }

    loadQuestion();
  }
});

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
          <p class="card-text">
            Create long, unique passwords with a mix of letters, numbers, and symbols. 
            Never reuse the same password on banking, social media, and email accounts.
          </p>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card tip-card h-100">
        <div class="card-body">
          <h5 class="card-title">Enable Two-Factor Authentication</h5>
          <p class="card-text">
            Turn on 2FA for email, social media, and banking apps so even if someone 
            knows your password, they still cannot log in without the OTP or approval.
          </p>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card tip-card h-100">
        <div class="card-body">
          <h5 class="card-title">Avoid Phishing Scams</h5>
          <p class="card-text">
            Do not trust links asking for OTP, ATM PIN, or card details. 
            Check the sender, spelling of the website, and when in doubt, type the 
            official website address yourself instead of clicking links.
          </p>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card tip-card h-100">
        <div class="card-body">
          <h5 class="card-title">Update Regularly</h5>
          <p class="card-text">
            Keep your phone, laptop, browsers, and apps updated. 
            Updates fix security bugs that attackers try to abuse.
          </p>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card tip-card h-100">
        <div class="card-body">
          <h5 class="card-title">Use Secure Wi-Fi</h5>
          <p class="card-text">
            Avoid using public Wi-Fi for UPI, banking, or passwords. 
            If you must use it, connect through a trusted VPN and log out after use.
          </p>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card tip-card h-100">
        <div class="card-body">
          <h5 class="card-title">Backup Your Data</h5>
          <p class="card-text">
            Take regular backups of important documents, photos, and school work to 
            cloud storage or an external drive so you don’t lose everything after 
            a hack, virus, or device damage.
          </p>
        </div>
      </div>
    </div>
  </div>
`,
    awareness: `
      <h2>Cyber Awareness</h2>
      <p>
        Cyber awareness means understanding how to use technology <strong>smartly and safely</strong>. 
        It is not only for IT experts – every student, parent, teacher, and citizen needs it.
      </p>
      <p>
        We share photos, homework, payments, and personal details online every day. 
        At the same time, cyber criminals try to steal passwords, spread fake news, 
        hack accounts, and cheat people with online frauds. Cyber awareness helps us 
        recognise these dangers <strong>before</strong> they harm us.
      </p>

      <h4 class="mt-4">What Does Being Cyber Aware Mean?</h4>
      <ul>
        <li>Thinking twice before clicking on links or downloading unknown files.</li>
        <li>Protecting personal information like phone number, address, Aadhaar, and card details.</li>
        <li>Using strong passwords and two-factor authentication on important accounts.</li>
        <li>Identifying scams such as phishing emails, fake customer care, and UPI frauds.</li>
        <li>Behaving responsibly online – no cyberbullying, trolling, or sharing others’ private data.</li>
      </ul>

      <h4 class="mt-4">Why Is Cyber Awareness Important?</h4>
      <ul>
        <li>🛡️ Protects your <strong>money</strong> and <strong>digital identity</strong>.</li>
        <li>😊 Keeps your <strong>online reputation</strong> clean and respectful.</li>
        <li>👨‍👩‍👧 Helps your family and friends stay safe in the digital world.</li>
        <li>🇮🇳 Supports a safer, more responsible <strong>Digital India</strong>.</li>
      </ul>

      <p class="mt-3">
        Cyber awareness is not a one-time lesson; it is a <strong>daily habit</strong>. 
        When we stay updated, follow safe practices, and guide others, we all contribute to a 
        safer digital environment for our school, community, and country.
      </p>
    `,
    digest: `
      <h2>Daily Digest</h2>
      <div class="row row-cols-1 row-cols-md-2 g-4 mt-3">
        <div class="col">
          <div class="card tip-card h-100">
            <div class="card-body">
              <h5 class="card-title">🚨 Scam of the Day: Fake Delivery</h5>
              <p class="card-text">
                “Your package is waiting!” – If you didn’t order anything, the only thing 
                waiting is a cyber trap. Don’t click unknown links or share personal details.
              </p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card tip-card h-100">
            <div class="card-body">
              <h5 class="card-title">🔐 Password Pizza Rule</h5>
              <p class="card-text">
                A strong password = lots of toppings: symbols, numbers, uppercase & lowercase letters. 
                Thin (short) = weak! Make it long and loaded.
              </p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card tip-card h-100">
            <div class="card-body">
              <h5 class="card-title">🧠 Think Before You Click</h5>
              <p class="card-text">
                If a message feels urgent, emotional, or “too good to be true”, pause. 
                Hackers use fear and excitement to trick you into clicking quickly.
              </p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card tip-card h-100">
            <div class="card-body">
              <h5 class="card-title">🛡️ Term of the Day: VPN</h5>
              <p class="card-text">
                A Virtual Private Network (VPN) encrypts your internet traffic. 
                Use it on public Wi-Fi to keep your browsing and passwords private and secure.
              </p>
            </div>
          </div>
        </div>
      </div>
    `,
    manual: `
      <h2>Citizen Manual</h2>
      <p class="mb-3">
        Follow this simple flow to stay safe online and know what to do if something goes wrong.
      </p>

      <div class="container">
        <div class="card mb-3 p-3">
          <h5>1️⃣ Identify the Source</h5>
          <p>Is the message, call, or link from a trusted person or official organisation?</p>
          <p><strong>If YES →</strong> Go to Step 2.</p>
          <p><strong>If NO / Not sure →</strong> Treat it as suspicious.</p>
        </div>

        <div class="text-center mb-2"><h2>⬇️</h2></div>

        <div class="card mb-3 p-3">
          <h5>2️⃣ Check for Red Flags</h5>
          <ul>
            <li>Spelling mistakes or strange language.</li>
            <li>Unknown or shortened links.</li>
            <li>Too good to be true offers (lottery, prizes, cashback, etc.).</li>
            <li>Urgent messages: “last chance”, “your account will be blocked”.</li>
          </ul>
          <p><strong>If ANY appear → STOP, don’t click, don’t share details.</strong></p>
        </div>

        <div class="text-center mb-2"><h2>⬇️</h2></div>

        <div class="card mb-3 p-3">
          <h5>3️⃣ Verify Through a Safe Channel</h5>
          <p>
            Contact the organisation or person using an official number, website, or in person. 
            Never use the phone number or link given in the suspicious message.
          </p>
        </div>

        <div class="text-center mb-2"><h2>⬇️</h2></div>

        <div class="card mb-3 p-3">
          <h5>4️⃣ Take Action</h5>
          <ul>
            <li>Report suspicious messages and accounts on apps or to authorities.</li>
            <li>Block unknown or abusive senders.</li>
            <li>Change compromised passwords immediately.</li>
            <li>Enable 2FA on important accounts.</li>
          </ul>
        </div>

        <div class="text-center mb-2"><h2>⬇️</h2></div>

        <div class="card mb-3 p-3 bg-light">
          <h5>🏁 If You Become a Victim</h5>
          <p>
            Don’t panic. Take screenshots, keep evidence, and report:
          </p>
          <ul>
            <li>📞 National Cybercrime Helpline (India): <strong>1930</strong></li>
            <li>🌐 Online portal: <strong>cybercrime.gov.in</strong></li>
            <li>👨‍🏫 Inform a parent, teacher, or trusted adult immediately.</li>
          </ul>
          <p>Awareness + quick reporting can save money, accounts, and reputations.</p>
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
      <iframe 
        src="https://www.youtube.com/embed/shQEXpUwaIY"
        title="Cyber Safety Tips"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
    </div>
    <div class="video-item">
      <iframe 
        src="https://www.youtube.com/embed/VEQd-jmVs44"
        title="Phishing Awareness"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
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

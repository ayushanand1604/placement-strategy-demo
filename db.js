const mysql = require('mysql2/promise');
const crypto = require('crypto');
require('dotenv').config();
// Helper to hash passwords using built-in crypto module
function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}
// Database configuration loaded from environment variables
const dbConfig = {
  host: process.env.DB_HOST || '127.0.0.1',
  port: parseInt(process.env.DB_PORT || '3306'),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'careerforge',
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined
};
let pool;
async function getPool() {
  if (!pool) {
    pool = mysql.createPool({
      ...dbConfig,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
  }
  return pool;
}

// Initialize database (creates database, tables, and seeds mock data)
async function initDB() {
  let connection;
  try {
    if (process.env.NODE_ENV !== 'production') {
      // 1. First connect without selecting a database, to create it if it doesn't exist (Local only)
      connection = await mysql.createConnection({
        host: dbConfig.host,
        port: dbConfig.port,
        user: dbConfig.user,
        password: dbConfig.password
      });

      console.log('Connected to MySQL server for initialization...');
      await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.database}\`;`);
      console.log(`Database "${dbConfig.database}" verified/created.`);
      await connection.end();
    }

    // 2. Obtain connection pool for the created database
    const dbPool = await getPool();

    // 3. Create tables
    console.log('Creating database tables if they do not exist...');
    
    // Users table
    await dbPool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Jobs table
    await dbPool.query(`
      CREATE TABLE IF NOT EXISTS jobs (
        id VARCHAR(50) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        company VARCHAR(255) NOT NULL,
        location VARCHAR(255) NOT NULL,
        type VARCHAR(50) NOT NULL,
        experience VARCHAR(50) NOT NULL,
        salary VARCHAR(100) NOT NULL,
        posted VARCHAR(50) NOT NULL,
        logoInitials VARCHAR(10) NOT NULL,
        color VARCHAR(50) NOT NULL,
        description TEXT NOT NULL,
        requirements JSON NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Companies table
    await dbPool.query(`
      CREATE TABLE IF NOT EXISTS companies (
        id VARCHAR(50) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        logoInitials VARCHAR(10) NOT NULL,
        themeColor VARCHAR(50) NOT NULL,
        examPattern JSON NOT NULL,
        syllabus JSON NOT NULL,
        eligibility JSON NOT NULL,
        hiringTimeline JSON NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // DSA problems table
    await dbPool.query(`
      CREATE TABLE IF NOT EXISTS dsa_problems (
        id VARCHAR(50) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        difficulty VARCHAR(50) NOT NULL,
        topic VARCHAR(100) NOT NULL,
        link VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Job Applications table
    await dbPool.query(`
      CREATE TABLE IF NOT EXISTS applications (
        id INT AUTO_INCREMENT PRIMARY KEY,
        job_id VARCHAR(50) NOT NULL,
        user_email VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        github VARCHAR(255) NOT NULL,
        resume_name VARCHAR(255) NOT NULL,
        cover_letter TEXT NOT NULL,
        applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // DSA Solved problems tracking
    await dbPool.query(`
      CREATE TABLE IF NOT EXISTS dsa_solved (
        user_email VARCHAR(255) NOT NULL,
        problem_id VARCHAR(50) NOT NULL,
        solved_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (user_email, problem_id)
      );
    `);

    // DSA Notes tracking
    await dbPool.query(`
      CREATE TABLE IF NOT EXISTS dsa_notes (
        user_email VARCHAR(255) NOT NULL,
        problem_id VARCHAR(50) NOT NULL,
        notes TEXT NOT NULL,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (user_email, problem_id)
      );
    `);

    // Quiz scores tracking
    await dbPool.query(`
      CREATE TABLE IF NOT EXISTS quiz_scores (
        user_email VARCHAR(255) NOT NULL,
        quiz_id VARCHAR(50) NOT NULL,
        choice INT NOT NULL,
        is_correct BOOLEAN NOT NULL,
        solved_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (user_email, quiz_id)
      );
    `);

    // HR Answers
    await dbPool.query(`
      CREATE TABLE IF NOT EXISTS hr_answers (
        user_email VARCHAR(255) NOT NULL,
        question_id VARCHAR(50) NOT NULL,
        answer TEXT NOT NULL,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (user_email, question_id)
      );
    `);

    // Activity Logs
    await dbPool.query(`
      CREATE TABLE IF NOT EXISTS activity_logs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_email VARCHAR(255) NOT NULL,
        msg TEXT NOT NULL,
        time VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log('Tables initialized successfully.');

    // 4. Seed database if tables are empty
    await seedData(dbPool);

  } catch (err) {
    console.error('=== DATABASE CONNECTION FAILED ===');
    console.error(`Host: ${dbConfig.host}:${dbConfig.port}  User: ${dbConfig.user}  DB: ${dbConfig.database}`);
    console.error('Make sure MySQL is running and your .env credentials are correct.');
    console.error('Error detail:', err.message);
    throw err;
  }
}

async function seedData(dbPool) {
  // A. Seed Default User
  const [users] = await dbPool.query('SELECT * FROM users LIMIT 1');
  if (users.length === 0) {
    await dbPool.query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      ['Ayush Anand', 'ayush@example.com', 'password123']
    );
    console.log('Seeded default user (ayush@example.com / password123).');
  }

  // B. Seed Jobs
  const [jobs] = await dbPool.query('SELECT * FROM jobs LIMIT 1');
  if (jobs.length === 0) {
    const defaultJobs = [
      {
        id: "job-1",
        title: "Software Development Engineer - I (SDE-1)",
        company: "Amazon",
        location: "Bangalore",
        type: "Full-time",
        experience: "Entry-Level",
        salary: "₹18LPA - ₹24LPA",
        posted: "1 day ago",
        logoInitials: "AM",
        color: "#ff9900",
        description: "Amazon is looking for a software developer to join the Catalog Systems team. You will be responsible for designing and implementing high-throughput systems that process billions of product updates daily. You'll work closely with senior engineers to build secure, scalable solutions using Java, AWS, and distributed databases.",
        requirements: ["Bachelor's in Computer Science or related fields", "Solid understanding of Object-Oriented programming", "Basic familiarity with Data Structures & Algorithms", "Strong problem-solving and communication skills"]
      },
      {
        id: "job-2",
        title: "Associate Software Engineer",
        company: "Google",
        location: "Hyderabad",
        type: "Full-time",
        experience: "Entry-Level",
        salary: "₹22LPA - ₹30LPA",
        posted: "3 days ago",
        logoInitials: "GO",
        color: "#4285f4",
        description: "Google's software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information. We are looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design, and artificial intelligence.",
        requirements: ["Proficiency in C++, Java, or Python", "Strong foundation in CS fundamentals: algorithms, complexity, networks", "Experience with Unix/Linux environments", "Excellent team collaboration skills"]
      },
      {
        id: "job-3",
        title: "Frontend Developer Intern",
        company: "Meta",
        location: "Remote",
        type: "Internship",
        experience: "Entry-Level",
        salary: "₹80,000 / month",
        posted: "2 days ago",
        logoInitials: "ME",
        color: "#0668e1",
        description: "Meta is looking for a Frontend Engineering Intern to join our product teams. In this role, you will help build interfaces that support social networking, virtual reality products, and advertising dashboards. You will work with React, JavaScript, HTML, and CSS to deliver pixel-perfect designs.",
        requirements: ["Strong hands-on experience with modern JavaScript & React", "Good understanding of HTML5, CSS3, and responsive design", "Familiarity with Git and package managers like npm", "A portfolio of side projects demonstrating UI development skills"]
      },
      {
        id: "job-4",
        title: "Software Engineer (Backend)",
        company: "Microsoft",
        location: "Noida",
        type: "Full-time",
        experience: "Mid-Level",
        salary: "₹20LPA - ₹26LPA",
        posted: "5 days ago",
        logoInitials: "MS",
        color: "#f25022",
        description: "Microsoft Cloud Infrastructure team is looking for a Backend Engineer to build systems that power Microsoft Azure. You will participate in architecture reviews, code development, testing, and deployment of APIs, microservices, and databases in a cloud native environment.",
        requirements: ["3+ years of experience with C#, Java, or Go", "Experience designing RESTful APIs and working with SQL/NoSQL databases", "Understanding of microservices architecture and Kubernetes", "Prior experience with Azure, AWS, or GCP is a plus"]
      },
      {
        id: "job-5",
        title: "Systems Engineer (C++ / Rust)",
        company: "Netflix",
        location: "Remote",
        type: "Full-time",
        experience: "Senior-Level",
        salary: "₹45LPA - ₹55LPA",
        posted: "1 week ago",
        logoInitials: "NE",
        color: "#e50914",
        description: "Netflix Video Streaming platform team is looking for a Systems Engineer to optimize our encoding and delivery pipeline. You will design, build, and optimize high-performance software modules that run on edge servers globally, minimizing bandwidth and latency for 200M+ active viewers.",
        requirements: ["5+ years of systems programming in C++ or Rust", "Deep understanding of multi-threading, concurrency, and memory management", "Familiarity with video compression standards (AV1, HEVC, H.264) is highly preferred", "BS/MS/PhD in Computer Science or Electrical Engineering"]
      },
      {
        id: "job-6",
        title: "Systems Engineer Trainee",
        company: "TCS",
        location: "Pune",
        type: "Full-time",
        experience: "Entry-Level",
        salary: "₹3.6LPA - ₹7LPA",
        posted: "4 days ago",
        logoInitials: "TC",
        color: "#1e3a8a",
        description: "Tata Consultancy Services (TCS) is hiring entry-level engineers for its Digital and Ninja profiles. Candidates will undergo foundational training in software engineering, databases, and business communication before being assigned to enterprise projects across banking, retail, and healthcare domains.",
        requirements: ["B.E. / B.Tech / M.E. / M.Tech / MCA / M.Sc graduates", "Knowledge of basic coding (Python, Java, or C)", "Familiarity with database concepts (SQL)", "No active backlogs at the time of joining"]
      }
    ];

    for (const job of defaultJobs) {
      await dbPool.query(
        'INSERT INTO jobs (id, title, company, location, type, experience, salary, posted, logoInitials, color, description, requirements) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [job.id, job.title, job.company, job.location, job.type, job.experience, job.salary, job.posted, job.logoInitials, job.color, job.description, JSON.stringify(job.requirements)]
      );
    }
    console.log('Seeded default jobs.');
  }

  // C. Seed Companies
  const [companies] = await dbPool.query('SELECT * FROM companies LIMIT 1');
  if (companies.length === 0) {
    const defaultCompanies = [
      {
        id: "comp-amazon",
        name: "Amazon",
        logoInitials: "A",
        themeColor: "#ff9900",
        examPattern: {
          duration: "120 Minutes",
          sections: "Online Assessment: 2 Coding Problems (Medium-Hard) + 15 Work Style Assessment Questions.",
          difficulty: "Medium to Hard",
          package: "₹18LPA - ₹32LPA"
        },
        syllabus: [
          "Data Structures: Trees, Graphs, HashMaps, Heap",
          "Algorithms: Dynamic Programming, Greedy, BFS/DFS, Binary Search",
          "System Design basics (OOD principles, solid design)",
          "Behavioral / Leadership Principles (Crucial for Amazon)"
        ],
        eligibility: {
          cgpa: "6.5 CGPA or 65% graduation marks",
          backlogs: "No active backlogs",
          degree: "B.E. / B.Tech / M.E. / M.Tech / MCA / M.Sc"
        },
        hiringTimeline: [
          { round: "Round 1: Online Assessment (OA)", desc: "2 coding questions on DSA (usually Arrays, DP, or Graphs) + Work Style simulation." },
          { round: "Round 2: Technical Interview 1", desc: "Deep dive into DSA, project architecture, and AWS concepts. Includes Amazon Leadership Principles." },
          { round: "Round 3: Technical Interview 2 + Bar Raiser", desc: "Advanced system design or DSA, followed by heavy emphasis on Leadership Principles and culture fit." }
        ]
      },
      {
        id: "comp-google",
        name: "Google",
        logoInitials: "G",
        themeColor: "#4285f4",
        examPattern: {
          duration: "90 Minutes",
          sections: "Google Online Challenge: 2 Coding Questions (Graphs, Trees, or Advanced DP).",
          difficulty: "Hard",
          package: "₹24LPA - ₹42LPA"
        },
        syllabus: [
          "Advanced DSA: Segment Trees, Trie, Graph traversals (Dijkstra, Tarjan's, TopSort)",
          "Dynamic Programming (Multidimensional, Digit DP)",
          "Mathematics, Number Theory & Combinatorics",
          "Googleyness & Leadership attributes"
        ],
        eligibility: {
          cgpa: "7.0 CGPA or 70% graduation marks",
          backlogs: "No active backlogs",
          degree: "B.Tech / M.Tech / MS / PhD in CS or related quantitative fields"
        },
        hiringTimeline: [
          { round: "Round 1: Online Coding Challenge", desc: "2 tough algorithmic problems, graded automatically by strict test cases." },
          { round: "Round 2: Technical Screen", desc: "45-minute phone interview testing basic problem solving, clean code, and time complexity." },
          { round: "Round 3: Onsite Rounds (3-4 rounds)", desc: "Back-to-back technical rounds covering recursion, graph theory, trees, and system design, plus one Googleyness round." }
        ]
      },
      {
        id: "comp-microsoft",
        name: "Microsoft",
        logoInitials: "M",
        themeColor: "#f25022",
        examPattern: {
          duration: "100 Minutes",
          sections: "Codility Test: 3 Coding questions (Arrays, Strings, HashMaps, simple trees).",
          difficulty: "Medium",
          package: "₹20LPA - ₹36LPA"
        },
        syllabus: [
          "Standard DSA: Strings, Linked Lists, Stacks, Queues, Binary Trees",
          "System Design: High availability, Caching, Databases",
          "Low Level Design (LLD): OOP, Design Patterns",
          "Behavioral / Collaboration questions"
        ],
        eligibility: {
          cgpa: "7.0 CGPA",
          backlogs: "No active backlogs",
          degree: "B.E. / B.Tech / M.E. / M.Tech / MCA / MS"
        },
        hiringTimeline: [
          { round: "Round 1: Codility Coding Round", desc: "3 coding questions focusing on optimal solutions and clean implementations." },
          { round: "Round 2: Technical Interview 1 (DSA + LLD)", desc: "Design a class system (e.g. Parking Lot) and solve a linked list/tree question." },
          { round: "Round 3: Technical Interview 2 (System Design)", desc: "Build a scalable backend API, discuss caching, CDNs, and database partitioning." },
          { round: "Round 4: As Appropriate / AA Round", desc: "Interviews with Engineering Managers discussing career goals, team dynamics, and soft skills." }
        ]
      },
      {
        id: "comp-tcs",
        name: "TCS",
        logoInitials: "T",
        themeColor: "#0056b3",
        examPattern: {
          duration: "180 Minutes",
          sections: "TCS NQT: Cognitive Aptitude (60m) + Technical MCQs (30m) + Coding (45m).",
          difficulty: "Easy to Medium",
          package: "₹3.3LPA (Ninja) - ₹7.2LPA (Digital)"
        },
        syllabus: [
          "Quantitative Aptitude, Logical Reasoning, Verbal Ability",
          "Programming Logic MCQs (C, C++, Java fundamentals, OS)",
          "Coding: Basic string manipulation, array calculations, loops",
          "General HR and email writing etiquette"
        ],
        eligibility: {
          cgpa: "6.0 CGPA or 60% throughout 10th, 12th, and Graduation",
          backlogs: "Max 1 active backlog allowed at time of test",
          degree: "B.E. / B.Tech / M.E. / M.Tech / MCA / M.Sc"
        },
        hiringTimeline: [
          { round: "Round 1: TCS National Qualifier Test (NQT)", desc: "Mass national level aptitude + coding exam." },
          { round: "Round 2: Technical Interview", desc: "Review of projects, final year seminars, basic coding questions (e.g., Fibonacci, Palindrome), and SQL queries." },
          { round: "Round 3: MR & HR Interview", desc: "Managerial situational questions followed by verification of documents and salary structure discussions." }
        ]
      },
      {
        id: "comp-meta",
        name: "Meta",
        logoInitials: "ME",
        themeColor: "#0668e1",
        examPattern: {
          duration: "90 Minutes",
          sections: "Online Assessment: 2 Coding Problems on Binary Trees or Dynamic Programming.",
          difficulty: "Hard",
          package: "₹28LPA - ₹40LPA"
        },
        syllabus: [
          "Advanced Tree and Graph Traversals",
          "Recursion and Memoization (DP)",
          "System Design (Scalability, Feed Ranking)",
          "Behavioral (STAR Method, Core Values)"
        ],
        eligibility: {
          cgpa: "7.0 CGPA",
          backlogs: "No active backlogs",
          degree: "B.Tech / M.Tech / MS in CS or related fields"
        },
        hiringTimeline: [
          { round: "Round 1: Online Coding Challenge", desc: "2 algorithmic coding questions." },
          { round: "Round 2: Systems Design / Architecture", desc: "Build backend for scaling timeline or news feeds." },
          { round: "Round 3: Coding & Behavioral Fit", desc: "Focuses on rapid problem solving and Meta cultural alignment." }
        ]
      },
      {
        id: "comp-apple",
        name: "Apple",
        logoInitials: "AP",
        themeColor: "#555555",
        examPattern: {
          duration: "100 Minutes",
          sections: "Online Assessment: 3 Coding Questions (1 Easy, 2 Medium) + Hardware/System Questions.",
          difficulty: "Medium to Hard",
          package: "₹24LPA - ₹38LPA"
        },
        syllabus: [
          "Low Level C/C++ Systems programming",
          "Memory management, Pointers, Concurrency",
          "Algorithm complexity and Graph search",
          "Hardware/Software Co-design concepts"
        ],
        eligibility: {
          cgpa: "7.5 CGPA",
          backlogs: "No active backlogs",
          degree: "B.E. / B.Tech / M.Tech in CS/EE/ECE"
        },
        hiringTimeline: [
          { round: "Round 1: Online Assessment", desc: "Focuses on general CS fundamentals and low level architecture." },
          { round: "Round 2: Technical Interview 1", desc: "Deep dive on concurrency, multi-threading, and systems optimization." },
          { round: "Round 3: Executive Behavioral Fit", desc: "Integrity, team collaboration, and design aesthetics." }
        ]
      },
      {
        id: "comp-netflix",
        name: "Netflix",
        logoInitials: "NX",
        themeColor: "#e50914",
        examPattern: {
          duration: "120 Minutes",
          sections: "Technical Phone Screening + System Architecture and Scale Test.",
          difficulty: "Hard",
          package: "₹32LPA - ₹45LPA"
        },
        syllabus: [
          "High-throughput distributed systems",
          "Concurrency, networks, HTTP streaming standards",
          "Systems Design: Caching, CDNs, Rate Limiters",
          "Netflix Culture Deck Alignment"
        ],
        eligibility: {
          cgpa: "7.5 CGPA",
          backlogs: "No active backlogs",
          degree: "B.Tech / M.Tech / MS / PhD in CS or related quantitative fields"
        },
        hiringTimeline: [
          { round: "Round 1: Initial Technical Screening", desc: "Deep systems programming questions (Go/Rust/Java/C++)." },
          { round: "Round 2: System Architecture & Scalability", desc: "Designing global media delivery pipelines." },
          { round: "Round 3: Panel Culture Fit Interview", desc: "Heavy focus on Netflix core values (Freedom & Responsibility)." }
        ]
      },
      {
        id: "comp-adobe",
        name: "Adobe",
        logoInitials: "AD",
        themeColor: "#ff0000",
        examPattern: {
          duration: "120 Minutes",
          sections: "Adobe Co.T.S. Challenge: 2 Coding Problems + 20 Technical MCQs.",
          difficulty: "Medium to Hard",
          package: "₹20LPA - ₹32LPA"
        },
        syllabus: [
          "Data Structures: String manipulation, Trees, Tries",
          "Operating Systems, OOPs, Computer Networks",
          "Algorithms: Greedy, Divide and Conquer",
          "Analytics and Math reasoning"
        ],
        eligibility: {
          cgpa: "7.0 CGPA",
          backlogs: "No active backlogs",
          degree: "B.Tech / M.Tech / MCA"
        },
        hiringTimeline: [
          { round: "Round 1: Adobe Online Challenge", desc: "Coding and analytical MCQs." },
          { round: "Round 2: Technical Interview (DSA + OS)", desc: "In-depth review of memory layout, OS paging, and complex DSA trees." },
          { round: "Round 3: Director Interview", desc: "Behavioral fit, product perspective, and system architecture." }
        ]
      },
      {
        id: "comp-salesforce",
        name: "Salesforce",
        logoInitials: "SF",
        themeColor: "#00a1e0",
        examPattern: {
          duration: "90 Minutes",
          sections: "HackerRank Assessment: 3 Coding Questions (2 Medium, 1 Hard).",
          difficulty: "Medium to Hard",
          package: "₹18LPA - ₹28LPA"
        },
        syllabus: [
          "Data Structures: Arrays, HashMaps, Heap, Graphs",
          "Cloud Computing, Multi-tenant Architecture basics",
          "Object-Oriented Programming & Design Patterns",
          "APIs & Web Services"
        ],
        eligibility: {
          cgpa: "7.0 CGPA",
          backlogs: "No active backlogs",
          degree: "B.E. / B.Tech / MCA"
        },
        hiringTimeline: [
          { round: "Round 1: Coding Assessment", desc: "General algorithms and data structure optimizations." },
          { round: "Round 2: Technical Interview 1", desc: "Discussing OOP, API designing, and database schemas." },
          { round: "Round 3: Managerial Round", desc: "Work culture alignment, situational problem solving, and cloud-native architecture." }
        ]
      },
      {
        id: "comp-uber",
        name: "Uber",
        logoInitials: "UB",
        themeColor: "#000000",
        examPattern: {
          duration: "120 Minutes",
          sections: "Online Coding Test: 3-4 Algorithmic questions focusing on graph optimization.",
          difficulty: "Hard",
          package: "₹24LPA - ₹38LPA"
        },
        syllabus: [
          "Advanced Graph Theory (Dijkstra, A* Search, Minimum Spanning Trees)",
          "Dynamic Programming & Segment Trees",
          "Low Level Design (Concurrency, Ride Dispatching)",
          "System Design (Geospatial Indexing, H3, Quadtrees)"
        ],
        eligibility: {
          cgpa: "7.5 CGPA",
          backlogs: "No active backlogs",
          degree: "B.Tech / M.Tech / MS in CS or related fields"
        },
        hiringTimeline: [
          { round: "Round 1: Online Coding Test", desc: "Hard algorithmic questions focusing on geospatial optimizations." },
          { round: "Round 2: Technical Interview (LLD & Concurrency)", desc: "Build class diagrams for ride-hailing services, handling high concurrency." },
          { round: "Round 3: System Design & Scaling", desc: "Discuss spatial database partitioning, CDNs, and load balancing." }
        ]
      },
      {
        id: "comp-airbnb",
        name: "Airbnb",
        logoInitials: "AB",
        themeColor: "#ff5a5f",
        examPattern: {
          duration: "90 Minutes",
          sections: "HackerRank Coding Challenge: 2-3 Algorithms.",
          difficulty: "Medium to Hard",
          package: "₹26LPA - ₹36LPA"
        },
        syllabus: [
          "Searching & Sorting, Dynamic Programming",
          "System Design: Booking engines, search indexing, reservation systems",
          "Web performance & frontend caching architectures",
          "Airbnb Core Values (Belonging, Entrepreneurship)"
        ],
        eligibility: {
          cgpa: "7.0 CGPA",
          backlogs: "No active backlogs",
          degree: "B.Tech / M.Tech / MS"
        },
        hiringTimeline: [
          { round: "Round 1: Online Coding Test", desc: "Algorithms focusing on string parsing and matching constraints." },
          { round: "Round 2: Architectural Design", desc: "Design a booking workflow that scales to millions of active listings." },
          { round: "Round 3: Core Values Interview", desc: "Deep discussion on customer empathy, hospitality, and engineering ownership." }
        ]
      },
      {
        id: "comp-twitter",
        name: "Twitter / X",
        logoInitials: "X",
        themeColor: "#1da1f2",
        examPattern: {
          duration: "90 Minutes",
          sections: "Online Technical Test: 2-3 Coding Problems (Graphs, Strings).",
          difficulty: "Medium to Hard",
          package: "₹20LPA - ₹32LPA"
        },
        syllabus: [
          "Scalable Data Feeds, Graph Databases, Message Queues",
          "Advanced DSA: Tries, DFS/BFS, Cache optimization",
          "Distributed System Design: Designing highly-concurrent APIs",
          "System monitoring and reliability engineering"
        ],
        eligibility: {
          cgpa: "7.0 CGPA",
          backlogs: "No active backlogs",
          degree: "B.Tech / M.Tech"
        },
        hiringTimeline: [
          { round: "Round 1: Technical Coding Screen", desc: "Optimizing string operations and basic graphs under high load." },
          { round: "Round 2: System Architecture", desc: "Design a real-time message broadcasting platform." },
          { round: "Round 3: Team Lead Discussion", desc: "Discuss agility, rapid deployment, and reliability metrics." }
        ]
      },
      {
        id: "comp-stripe",
        name: "Stripe",
        logoInitials: "ST",
        themeColor: "#635bff",
        examPattern: {
          duration: "120 Minutes",
          sections: "Practical Coding Challenge: Implement an API endpoint or parses transactions.",
          difficulty: "Hard",
          package: "₹28LPA - ₹42LPA"
        },
        syllabus: [
          "Production-level clean coding and unit testing",
          "API design principles (REST, Idempotency, Versioning)",
          "System Design (Distributed Transactions, Eventual Consistency)",
          "Security, encryption, and banking integration protocols"
        ],
        eligibility: {
          cgpa: "7.0 CGPA",
          backlogs: "No active backlogs",
          degree: "B.Tech / M.Tech / MS"
        },
        hiringTimeline: [
          { round: "Round 1: Practical Coding Test", desc: "Build a mini API server or transaction log parser (compiles and passes tests)." },
          { round: "Round 2: API Design & Collaboration", desc: "Design a mock Stripe-like webhook or routing API with clean code standards." },
          { round: "Round 3: Distributed Systems Design", desc: "Ensure exactly-once processing of payments across high-latency clusters." }
        ]
      },
      {
        id: "comp-coinbase",
        name: "Coinbase",
        logoInitials: "CB",
        themeColor: "#1652f0",
        examPattern: {
          duration: "90 Minutes",
          sections: "Coding Assessment: 2 Algorithmic Questions (DP, Trees).",
          difficulty: "Medium to Hard",
          package: "₹22LPA - ₹34LPA"
        },
        syllabus: [
          "Distributed ledgers & Cryptographic protocols",
          "DSA: Heap, HashMaps, Segment Trees",
          "High-frequency trading algorithms & Order-book data structures",
          "Secure API development & Auth tokens"
        ],
        eligibility: {
          cgpa: "7.0 CGPA",
          backlogs: "No active backlogs",
          degree: "B.Tech / M.Tech / MS"
        },
        hiringTimeline: [
          { round: "Round 1: Coding Challenge", desc: "Algorithms to evaluate execution speed and optimal data representations." },
          { round: "Round 2: Trading Engine Architecture", desc: "Build a concurrent order book processing system with lockless structures." },
          { round: "Round 3: Security & Cryptography", desc: "Discuss threat modeling, blockchain ledger scaling, and API security." }
        ]
      },
      {
        id: "comp-nvidia",
        name: "Nvidia",
        logoInitials: "NV",
        themeColor: "#76b900",
        examPattern: {
          duration: "120 Minutes",
          sections: "Technical Test: 15 MCQs (C++ compiler, assembly) + 2 Coding Problems.",
          difficulty: "Medium to Hard",
          package: "₹25LPA - ₹36LPA"
        },
        syllabus: [
          "Low level Memory Architectures (GPU threads, CUDA, SIMD)",
          "Advanced C++ (Templates, smart pointers, memory barriers)",
          "Mathematics: Linear Algebra, Vector calculation",
          "AI training pipeline optimization"
        ],
        eligibility: {
          cgpa: "7.5 CGPA",
          backlogs: "No active backlogs",
          degree: "B.Tech / M.Tech in CS/EE/ECE"
        },
        hiringTimeline: [
          { round: "Round 1: Online Technical Assessment", desc: "Heavy focus on operating systems, memory management, and microarchitecture." },
          { round: "Round 2: GPU Programming Screen", desc: "Writing CUDA-like loops or compiling raw memory buffers." },
          { round: "Round 3: Compiler/Math Review", desc: "Linear algebra, matrix multipliers, and neural net scaling concepts." }
        ]
      },
      {
        id: "comp-bytedance",
        name: "ByteDance",
        logoInitials: "BD",
        themeColor: "#25f4ee",
        examPattern: {
          duration: "120 Minutes",
          sections: "Online Assessment: 4 Coding questions (Medium to Hard).",
          difficulty: "Hard",
          package: "₹24LPA - ₹38LPA"
        },
        syllabus: [
          "Advanced Dynamic Programming, Graphs",
          "System Design: CDN cache invalidation, Recommendation feeds",
          "NoSQL, key-value stores, distributed storage nodes",
          "High-performance network sockets & concurrency models"
        ],
        eligibility: {
          cgpa: "7.0 CGPA",
          backlogs: "No active backlogs",
          degree: "B.Tech / M.Tech / MS"
        },
        hiringTimeline: [
          { round: "Round 1: Coding Test", desc: "4 algorithmic problems (heavy on graph algorithms and matrix DP)." },
          { round: "Round 2: Technical Interview 1", desc: "Design a distributed queue or caching layer for video recommendation feeds." },
          { round: "Round 3: Technical Interview 2 + Culture Fit", desc: "Advanced coding + behavioral questions on work ethics under pressure." }
        ]
      },
      {
        id: "comp-atlassian",
        name: "Atlassian",
        logoInitials: "AT",
        themeColor: "#0052cc",
        examPattern: {
          duration: "90 Minutes",
          sections: "Online Test: 3 Coding questions (Arrays, Math, Strings).",
          difficulty: "Medium",
          package: "₹20LPA - ₹30LPA"
        },
        syllabus: [
          "Standard DSA: Stack, Queue, Trie, Priority Queue",
          "RESTful Web architecture & client-server communication",
          "System Design: Real-time collaborative document editing (CRDTs)",
          "Values Assessment: Open company, no bullshit"
        ],
        eligibility: {
          cgpa: "7.0 CGPA",
          backlogs: "No active backlogs",
          degree: "B.E. / B.Tech / MCA / MS"
        },
        hiringTimeline: [
          { round: "Round 1: HackerRank Assessment", desc: "3 coding questions on arrays, queues, and basic graphs." },
          { round: "Round 2: System Design / Collaboration", desc: "Build a collaborative editing server API, handling offline sync." },
          { round: "Round 3: Atlassian Values & Culture", desc: "Deep dive into teamwork, cross-functional communication, and transparency." }
        ]
      },
      {
        id: "comp-intel",
        name: "Intel",
        logoInitials: "IT",
        themeColor: "#0071c5",
        examPattern: {
          duration: "90 Minutes",
          sections: "Online MCQ Test: 30 Questions (C++ basics, digital electronics, microprocessor systems).",
          difficulty: "Easy to Medium",
          package: "₹15LPA - ₹25LPA"
        },
        syllabus: [
          "C/C++ programming, Pointer arithmetic",
          "Computer Architecture: Cache mapping, Pipelining, Instruction sets",
          "Operating Systems: Process scheduling, Virtual memory",
          "Digital Electronics: Logic gates, FSMs"
        ],
        eligibility: {
          cgpa: "6.5 CGPA",
          backlogs: "No active backlogs",
          degree: "B.E. / B.Tech / M.Tech in CS/EE/ECE"
        },
        hiringTimeline: [
          { round: "Round 1: Online Technical MCQ Test", desc: "Covers assembly, digital logic, and basic C code." },
          { round: "Round 2: Technical Interview 1", desc: "Deep dive into cache layouts, OS virtual paging, and interrupt handlers." },
          { round: "Round 3: HR Interview", desc: "Verification of documentation, academic projects, and job locations." }
        ]
      },
      {
        id: "comp-qualcomm",
        name: "Qualcomm",
        logoInitials: "QC",
        themeColor: "#3253dc",
        examPattern: {
          duration: "100 Minutes",
          sections: "HackerRank: 20 MCQs on C/C++ & OS + 2 Coding Problems.",
          difficulty: "Medium",
          package: "₹16LPA - ₹26LPA"
        },
        syllabus: [
          "Embedded systems programming, C/C++ structures",
          "Operating Systems: Real-time OS (RTOS), Mutex vs Semaphore",
          "Computer Networks: Socket programming, TCP/IP, OSI layers",
          "Microprocessor architecture"
        ],
        eligibility: {
          cgpa: "7.0 CGPA",
          backlogs: "No active backlogs",
          degree: "B.Tech / M.Tech in ECE/EE/CS"
        },
        hiringTimeline: [
          { round: "Round 1: Online Test", desc: "Multiple choice questions on C++ and operating system scheduling, plus coding." },
          { round: "Round 2: Technical Interview (Systems)", desc: "Build a socket communication thread in C/C++, focusing on synchronization." },
          { round: "Round 3: Managerial and HR Round", desc: "Review of engineering accomplishments, project challenges, and fit." }
        ]
      },
      {
        id: "comp-oracle",
        name: "Oracle",
        logoInitials: "OR",
        themeColor: "#f02020",
        examPattern: {
          duration: "120 Minutes",
          sections: "Oracle Student Challenge: 3 Coding Questions (2 Medium, 1 Hard) + Database MCQs.",
          difficulty: "Medium to Hard",
          package: "₹16LPA - ₹28LPA"
        },
        syllabus: [
          "Relational Databases: SQL queries, normalization, indexing",
          "Algorithms: Trees, Graphs, Sorting",
          "Operating Systems: Concurrency, Thread pooling",
          "Object-Oriented Programming (Java)"
        ],
        eligibility: {
          cgpa: "7.0 CGPA",
          backlogs: "No active backlogs",
          degree: "B.Tech / M.Tech / MCA / MS"
        },
        hiringTimeline: [
          { round: "Round 1: Student OA Challenge", desc: "Algorithms and SQL queries." },
          { round: "Round 2: Technical Interview (Java & Database)", desc: "Deep dive into JVM compilation, thread pools, SQL join optimization, and transactions." },
          { round: "Round 3: Senior Director Round", desc: "System scalability, transactional consistency, and career goals." }
        ]
      },
      {
        id: "comp-cisco",
        name: "Cisco",
        logoInitials: "CS",
        themeColor: "#049fd9",
        examPattern: {
          duration: "90 Minutes",
          sections: "Cisco Online Test: 15 Computer Networks MCQs + 2 Coding Questions.",
          difficulty: "Medium",
          package: "₹15LPA - ₹25LPA"
        },
        syllabus: [
          "Computer Networks: Routing protocols (OSPF, BGP), Subnetting, IPv6",
          "Operating Systems: Socket APIs, IPC mechanisms",
          "DSA: Stack, Queue, Graphs (Shortest Path)",
          "Basic hardware networking components (Routers, Switches)"
        ],
        eligibility: {
          cgpa: "7.0 CGPA",
          backlogs: "No active backlogs",
          degree: "B.Tech / M.Tech"
        },
        hiringTimeline: [
          { round: "Round 1: Cisco Online Challenge", desc: "Networks focus + 2 coding questions on queues and shortest paths." },
          { round: "Round 2: Technical Interview (Networking)", desc: "Simulate a traceroute workflow, explain subnetting, and write clean socket code." },
          { round: "Round 3: Managerial & Fit Round", desc: "Ethical scenarios, team dynamics, and interest in network engineering." }
        ]
      },
      {
        id: "comp-sap",
        name: "SAP",
        logoInitials: "SP",
        themeColor: "#008fd3",
        examPattern: {
          duration: "90 Minutes",
          sections: "SAP Coding Test: 2 Coding Problems + 10 Analytical MCQs.",
          difficulty: "Easy to Medium",
          package: "₹14LPA - ₹24LPA"
        },
        syllabus: [
          "Enterprise Data Schemas, Object Oriented Design",
          "Data Structures: Arrays, Strings, HashMaps",
          "SQL & Database triggers/procedures",
          "Software engineering lifecycle & testing"
        ],
        eligibility: {
          cgpa: "6.5 CGPA",
          backlogs: "No active backlogs",
          degree: "B.Tech / M.Tech / MCA"
        },
        hiringTimeline: [
          { round: "Round 1: Online Assessment", desc: "Programming questions + logic puzzles." },
          { round: "Round 2: Technical Interview (OOP & SQL)", desc: "Design a simple database schema, write queries, and discuss clean OOP code." },
          { round: "Round 3: HR & Management Round", desc: "Review of internships, document checklist, and compensation." }
        ]
      },
      {
        id: "comp-shopify",
        name: "Shopify",
        logoInitials: "SH",
        themeColor: "#96bf48",
        examPattern: {
          duration: "90 Minutes",
          sections: "Interactive API Programming Test (implementing a cart/order parser).",
          difficulty: "Medium",
          package: "₹20LPA - ₹30LPA"
        },
        syllabus: [
          "API architecture: REST & GraphQL",
          "E-commerce platform scaling, Database isolation",
          "Web application security & payment parsing",
          "Production clean code guidelines"
        ],
        eligibility: {
          cgpa: "7.0 CGPA",
          backlogs: "No active backlogs",
          degree: "B.Tech / M.Tech / MS"
        },
        hiringTimeline: [
          { round: "Round 1: Life Story Interview", desc: "Non-technical discussion about your engineering background and interests." },
          { round: "Round 2: Technical Design Challenge", desc: "Implement or review an order parsing module with tests." },
          { round: "Round 3: Scaling & Architecture", desc: "Discuss distributed caching, load balancing, and handling traffic spikes." }
        ]
      },
      {
        id: "comp-spotify",
        name: "Spotify",
        logoInitials: "SY",
        themeColor: "#1db954",
        examPattern: {
          duration: "90 Minutes",
          sections: "Spotify Coding Challenge: 2-3 Algorithms (Recursion, Lists).",
          difficulty: "Medium to Hard",
          package: "₹22LPA - ₹32LPA"
        },
        syllabus: [
          "Audio data streaming, WebSockets, CDNs",
          "DSA: Heap, Graphs, Trees, Strings",
          "System Design: Playlist sharing, offline caching",
          "Spotify Agile Squad structure alignment"
        ],
        eligibility: {
          cgpa: "7.0 CGPA",
          backlogs: "No active backlogs",
          degree: "B.Tech / M.Tech / MS"
        },
        hiringTimeline: [
          { round: "Round 1: Online Coding challenge", desc: "Algorithmic problems evaluating code complexity and modular design." },
          { round: "Round 2: Technical & System Design", desc: "Design a real-time song streaming delivery backend system." },
          { round: "Round 3: Squad Integration & Fit", desc: "Evaluate collaboration skills, agile mindset, and passion for audio technology." }
        ]
      }
    ];

    for (const comp of defaultCompanies) {
      await dbPool.query(
        'INSERT INTO companies (id, name, logoInitials, themeColor, examPattern, syllabus, eligibility, hiringTimeline) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [comp.id, comp.name, comp.logoInitials, comp.themeColor, JSON.stringify(comp.examPattern), JSON.stringify(comp.syllabus), JSON.stringify(comp.eligibility), JSON.stringify(comp.hiringTimeline)]
      );
    }
    console.log('Seeded default companies.');
  }

  // D. Seed DSA Problems
  const [dsaProblems] = await dbPool.query('SELECT * FROM dsa_problems LIMIT 1');
  if (dsaProblems.length === 0) {
    const defaultDsa = [
      { id: "dsa-1", title: "Two Sum", difficulty: "Easy", topic: "Arrays", link: "https://leetcode.com/problems/two-sum/", desc: "Find two numbers in an array that add up to a specific target." },
      { id: "dsa-2", title: "Maximum Subarray (Kadane's)", difficulty: "Medium", topic: "Arrays", link: "https://leetcode.com/problems/maximum-subarray/", desc: "Find the contiguous subarray with the largest sum." },
      { id: "dsa-3", title: "3Sum", difficulty: "Medium", topic: "Arrays", link: "https://leetcode.com/problems/3sum/", desc: "Find all unique triplets in the array that sum to zero." },
      { id: "dsa-4", title: "Merge Intervals", difficulty: "Medium", topic: "Arrays", link: "https://leetcode.com/problems/merge-intervals/", desc: "Merge all overlapping intervals." },
      { id: "dsa-5", title: "Reverse a String", difficulty: "Easy", topic: "Strings", link: "https://leetcode.com/problems/reverse-string/", desc: "Reverse an array of characters in-place." },
      { id: "dsa-6", title: "Longest Substring Without Repeating Characters", difficulty: "Medium", topic: "Strings", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", desc: "Find the length of the longest substring without repeating characters." },
      { id: "dsa-7", title: "Group Anagrams", difficulty: "Medium", topic: "Strings", link: "https://leetcode.com/problems/group-anagrams/", desc: "Group an array of strings together if they are anagrams." },
      { id: "dsa-8", title: "Reverse a Linked List", difficulty: "Easy", topic: "Linked Lists", link: "https://leetcode.com/problems/reverse-linked-list/", desc: "Reverse a singly linked list iteratively and recursively." },
      { id: "dsa-9", title: "Detect Cycle in a Linked List", difficulty: "Easy", topic: "Linked Lists", link: "https://leetcode.com/problems/linked-list-cycle/", desc: "Check if a linked list contains a cycle using Floyd's Tortoise and Hare algorithm." },
      { id: "dsa-10", title: "Middle of the Linked List", difficulty: "Easy", topic: "Linked Lists", link: "https://leetcode.com/problems/middle-of-the-linked-list/", desc: "Find the middle node of a singly linked list." },
      { id: "dsa-11", title: "Valid Parentheses", difficulty: "Easy", topic: "Stacks & Queues", link: "https://leetcode.com/problems/valid-parentheses/", desc: "Determine if the input string containing brackets is valid." },
      { id: "dsa-12", title: "Implement Stack using Queues", difficulty: "Easy", topic: "Stacks & Queues", link: "https://leetcode.com/problems/implement-stack-using-queues/", desc: "Implement LIFO stack operations using only FIFO queues." },
      { id: "dsa-13", title: "Maximum Depth of Binary Tree", difficulty: "Easy", topic: "Trees", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", desc: "Find the height of a binary tree." },
      { id: "dsa-14", title: "Inorder Traversal", difficulty: "Easy", topic: "Trees", link: "https://leetcode.com/problems/binary-tree-inorder-traversal/", desc: "Return the inorder traversal of a binary tree's nodes." },
      { id: "dsa-15", title: "Binary Tree Level Order Traversal", difficulty: "Medium", topic: "Trees", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/", desc: "Return the level order traversal of a binary tree's nodes." },
      { id: "dsa-16", title: "Number of Islands", difficulty: "Medium", topic: "Graphs", link: "https://leetcode.com/problems/number-of-islands/", desc: "Count the number of 2D grid islands surrounded by water." },
      { id: "dsa-17", title: "Clone Graph", difficulty: "Medium", topic: "Graphs", link: "https://leetcode.com/problems/clone-graph/", desc: "Return a deep copy of a connected undirected graph." },
      { id: "dsa-18", title: "Fibonacci Number", difficulty: "Easy", topic: "Dynamic Programming", link: "https://leetcode.com/problems/fibonacci-number/", desc: "Compute the N-th Fibonacci number using DP." },
      { id: "dsa-19", title: "Coin Change", difficulty: "Medium", topic: "Dynamic Programming", link: "https://leetcode.com/problems/coin-change/", desc: "Compute the fewest number of coins needed to make up a target amount." },
      { id: "dsa-20", title: "Longest Common Subsequence", difficulty: "Medium", topic: "Dynamic Programming", link: "https://leetcode.com/problems/longest-common-subsequence/", desc: "Find the length of the longest common subsequence of two strings." }
    ];

    for (const dsa of defaultDsa) {
      await dbPool.query(
        'INSERT INTO dsa_problems (id, title, difficulty, topic, link, description) VALUES (?, ?, ?, ?, ?, ?)',
        [dsa.id, dsa.title, dsa.difficulty, dsa.topic, dsa.link, dsa.desc]
      );
    }
    console.log('Seeded default DSA problems.');
  }
}

module.exports = {
  getPool,
  initDB,
  hashPassword
};
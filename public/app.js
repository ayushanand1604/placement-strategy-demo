// CareerForge Application Controller

// ==========================================
// 1. MOCK DATABASES
// ==========================================

let MOCK_JOBS = [
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

let MOCK_PREP = {
  aptitude: {
    notes: [
      {
        title: "Quantitative Aptitude: Speed, Time & Distance",
        content: `
          <p>Speed, Time, and Distance is one of the most frequently tested topics in competitive and placement exams. The core formula that connects all three variables is:</p>
          <pre><code>Distance = Speed × Time</code></pre>
          <h4>Key Conversions:</h4>
          <ul>
            <li>To convert km/hr to m/s: Multiply by <code>5/18</code> (e.g., 90 km/hr = 90 × 5/18 = 25 m/s)</li>
            <li>To convert m/s to km/hr: Multiply by <code>18/5</code></li>
          </ul>
          <h4>Average Speed Formulas:</h4>
          <ul>
            <li>If a body travels equal distances at speed <strong>x</strong> and speed <strong>y</strong>, the average speed is: 
              <br><code>Average Speed = 2xy / (x + y)</code>
            </li>
            <li>If the distances traveled are unequal, use the general definition:
              <br><code>Average Speed = Total Distance / Total Time</code>
            </li>
          </ul>
          <h4>Relative Speed Concept:</h4>
          <ul>
            <li><strong>Same Direction:</strong> If two bodies move in the same direction at speeds <em>u</em> and <em>v</em> (where u > v), their relative speed is <code>u - v</code>.</li>
            <li><strong>Opposite Direction:</strong> If they move in opposite directions, relative speed is <code>u + v</code>.</li>
          </ul>
        `
      },
      {
        title: "Logical Reasoning: Syllogisms & Venn Diagrams",
        content: `
          <p>Syllogisms test your deductive reasoning. You are given Statements (assumed to be 100% true) and Conclusions, and you must determine which conclusions logically follow.</p>
          <h4>Types of Statements:</h4>
          <ol>
            <li><strong>Universal Positive (All A are B):</strong> Represented as circles where A is entirely inside B.</li>
            <li><strong>Universal Negative (No A are B):</strong> Separate, non-overlapping circles A and B.</li>
            <li><strong>Particular Positive (Some A are B):</strong> Intersecting circles A and B.</li>
            <li><strong>Particular Negative (Some A are not B):</strong> A has a region that cannot touch B.</li>
          </ol>
          <h4>Tips to Solve:</h4>
          <ul>
            <li>Draw a <strong>minimal overlapping Venn Diagram</strong> to represent the statements.</li>
            <li>A conclusion is valid ONLY if it holds true in <em>all possible Venn diagram scenarios</em>.</li>
            <li>Look out for "Either-Or" cases (usually happens when one conclusion is positive, one is negative, and they share the same subject-predicate).</li>
          </ul>
        `
      }
    ],
    quizzes: [
      {
        id: "apt-q1",
        type: "mcq",
        question: "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
        options: [
          "120 meters",
          "150 meters",
          "324 meters",
          "180 meters"
        ],
        correctIndex: 1,
        explanation: "First, convert speed from km/hr to m/s: 60 km/hr = 60 × (5/18) = 50/3 m/s. The distance covered to cross a pole is equal to the length of the train. Distance = Speed × Time = (50/3) × 9 = 50 × 3 = 150 meters. Therefore, the length of the train is 150m."
      },
      {
        id: "apt-q2",
        type: "mcq",
        question: "If 15 men can complete a project in 6 days, how many days will it take 10 men to complete the same work?",
        options: [
          "4 days",
          "8 days",
          "9 days",
          "12 days"
        ],
        correctIndex: 2,
        explanation: "Apply the Work-Rate-Time formula: Men × Days = Constant Work. Here, 15 × 6 = 90 man-days. If 10 men are working, then: 10 × Days = 90 => Days = 9 days."
      }
    ]
  },
  dsa: {
    notes: [
      {
        title: "Asymptotic Analysis (Big O Notation)",
        content: `
          <p>Big O notation is used to describe the execution time or space complexity of an algorithm relative to the size of its input (N).</p>
          <h4>Common Time Complexities:</h4>
          <ul>
            <li><strong>O(1) - Constant Time:</strong> Executing code that doesn't depend on input size. (e.g., getting an item by index from an array).</li>
            <li><strong>O(log N) - Logarithmic Time:</strong> Size of problem decreases by half in each step. (e.g., Binary Search).</li>
            <li><strong>O(N) - Linear Time:</strong> Accessing every element in an array once. (e.g., Linear Search).</li>
            <li><strong>O(N log N) - Loglinear:</strong> Divides problems recursively and merges. (e.g., Merge Sort, Quick Sort avg case).</li>
            <li><strong>O(N²) - Quadratic Time:</strong> Nested loops. (e.g., Bubble Sort, Insertion Sort).</li>
            <li><strong>O(2^N) - Exponential Time:</strong> Recursive calculations for combinations. (e.g., Naive Fibonacci).</li>
          </ul>
          <h4>Space Complexity:</h4>
          <p>Measures the amount of extra memory used by the algorithm. Remember that standard parameters passed by reference do not count toward space complexity, but local allocations and recursive stack space do.</p>
        `
      },
      {
        title: "Tree Traversals (DFS vs BFS)",
        content: `
          <p>Trees are non-linear data structures. Traversing a tree means visiting all its nodes in a specific order.</p>
          <h4>Depth First Search (DFS):</h4>
          <p>Explores as deep as possible along each branch before backtracking. Utilizes a Stack (implicit via recursion or explicit).</p>
          <ul>
            <li><strong>Inorder (Left, Root, Right):</strong> Produces sorted elements for a Binary Search Tree (BST).</li>
            <li><strong>Preorder (Root, Left, Right):</strong> Useful for creating copy of a tree.</li>
            <li><strong>Postorder (Left, Right, Root):</strong> Used in deletion or bottom-up evaluations.</li>
          </ul>
          <h4>Breadth First Search (BFS) / Level Order:</h4>
          <p>Explores all nodes at the current depth before moving to nodes at the next level. Utilizes a <strong>Queue</strong>. Time complexity for both is O(N) where N is number of nodes.</p>
        `
      }
    ],
    quizzes: [
      {
        id: "dsa-q1",
        type: "mcq",
        question: "Which of the following data structures operates on a Last In First Out (LIFO) basis?",
        options: [
          "Queue",
          "Linked List",
          "Stack",
          "Heap"
        ],
        correctIndex: 2,
        explanation: "A Stack is a LIFO (Last In First Out) structure because the last element pushed onto it is the first one to be popped off. Queues are FIFO (First In First Out)."
      },
      {
        id: "dsa-q2",
        type: "code",
        question: "Implement a function <code>reverseString(str)</code> that takes a string as input and returns it reversed. Check your output in the compiler console below.",
        startingCode: `function reverseString(str) {
  // Write your code here
  return str.split("").reverse().join("");
}`,
        language: "javascript",
        testCases: [
          { input: "hello", expected: "olleh" },
          { input: "world", expected: "dlrow" }
        ]
      }
    ]
  },
  technical: {
    notes: [
      {
        title: "Database Management: ACID Properties",
        content: `
          <p>In databases, a transaction is a unit of work. To maintain data integrity, every DBMS transaction must follow ACID properties:</p>
          <ul>
            <li><strong>Atomicity:</strong> "All or Nothing". If any part of the transaction fails, the entire transaction is rolled back.</li>
            <li><strong>Consistency:</strong> The database must move from one valid state to another, preserving integrity constraints.</li>
            <li><strong>Isolation:</strong> Concurrent transactions run independently of each other. Changes remain invisible to other users until committed.</li>
            <li><strong>Durability:</strong> Once committed, the changes are permanent and survive any system crashes or power losses.</li>
          </ul>
          <h4>SQL Joins Reference:</h4>
          <p>INNER JOIN returns matching rows. LEFT JOIN returns all rows from left table and matching from right. OUTER JOIN returns all rows if there is a match in either table.</p>
        `
      },
      {
        title: "Operating Systems: Deadlocks & Prevention",
        content: `
          <p>A deadlock occurs when a set of processes are blocked because each process is holding a resource and waiting for another resource held by another process in the same set.</p>
          <h4>Four Necessary Conditions for Deadlock (Coffman Conditions):</h4>
          <ol>
            <li><strong>Mutual Exclusion:</strong> At least one resource must be held in a non-shareable mode.</li>
            <li><strong>Hold and Wait:</strong> A process must be holding a resource while waiting for another.</li>
            <li><strong>No Preemption:</strong> Resources cannot be forcibly taken from a process.</li>
            <li><strong>Circular Wait:</strong> A closed chain of processes exists where each process waits for a resource held by the next.</li>
          </ol>
          <h4>Handling Deadlocks:</h4>
          <ul>
            <li><strong>Avoidance:</strong> Bankers Algorithm (checks if allocating resources leaves the system in a 'safe state').</li>
            <li><strong>Prevention:</strong> Break one of the 4 Coffman conditions.</li>
            <li><strong>Detection and Recovery:</strong> Let deadlocks happen, detect them via Resource Allocation Graphs, and recover by aborting processes or preempting resources.</li>
          </ul>
        `
      }
    ],
    quizzes: [
      {
        id: "tech-q1",
        type: "mcq",
        question: "Which SQL join returns all records from the left table, and the matched records from the right table?",
        options: [
          "Right Outer Join",
          "Full Outer Join",
          "Inner Join",
          "Left Outer Join"
        ],
        correctIndex: 3,
        explanation: "A LEFT OUTER JOIN (or LEFT JOIN) returns all records from the left table (table1), along with matching records from the right table (table2). If there is no match, the result is NULL on the right side."
      },
      {
        id: "tech-q2",
        type: "mcq",
        question: "Which of the following is NOT one of the four Coffman conditions required for a deadlock to occur?",
        options: [
          "Mutual Exclusion",
          "Resource Preemption",
          "Hold and Wait",
          "Circular Wait"
        ],
        correctIndex: 1,
        explanation: "The condition is actually 'No Preemption'. If 'Resource Preemption' (allowing resources to be taken back forcibly) is active, deadlocks cannot occur. Therefore, Resource Preemption prevents deadlocks rather than causing them."
      }
    ]
  },
  hr: {
    notes: [
      {
        title: "Answering Behavioral Questions: The STAR Method",
        content: `
          <p>The STAR method is a structured technique to answer behavioral interview questions (e.g., "Tell me about a time you resolved a conflict").</p>
          <h4>STAR Components:</h4>
          <ul>
            <li><strong>Situation (S):</strong> Set the scene. Describe the challenge or context (who, where, when) in 2-3 sentences.</li>
            <li><strong>Task (T):</strong> Explain your responsibility or target. What goal did you need to achieve?</li>
            <li><strong>Action (A):</strong> Describe the specific steps <strong>you</strong> took. Focus on your contribution, skills, and decision-making (not just what the team did).</li>
            <li><strong>Result (R):</strong> Share the outcome. What happened? Quantify results if possible (e.g., "reduced latency by 15%", "saved 20 hours of manual work").</li>
          </ul>
        `
      },
      {
        title: "HR Classic: 'Tell Me About Yourself'",
        content: `
          <p>This is almost always the opening question of an interview. The best way to answer is using the <strong>Present-Past-Future</strong> structure:</p>
          <ul>
            <li><strong>Present (30%):</strong> Mention your current role/degree, a recent achievement, and your primary skillset.</li>
            <li><strong>Past (50%):</strong> Highlight 1-2 relevant projects, internships, or academic accomplishments that prove your engineering capability.</li>
            <li><strong>Future (20%):</strong> Explain why you are excited about this specific company and role, and how it aligns with your career trajectory.</li>
          </ul>
          <p>Keep your answer between 90 to 120 seconds. Avoid reading your resume word-for-word.</p>
        `
      }
    ],
    quizzes: [
      {
        id: "hr-q1",
        type: "sandbox",
        question: "Draft your elevator pitch for the question: 'Tell me about yourself'. Use the Present-Past-Future structure. Click Save Response to store this answer for your review.",
        placeholder: "Start drafting here...\n\nPresent: Currently I am...\nPast: Previously, I worked on...\nFuture: I am looking forward to this role because..."
      }
    ]
  }
};

let MOCK_COMPANIES = [
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

let MOCK_DSA_SHEET = [
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

// ==========================================
// 2. STATE MANAGER
// ==========================================

const state = {
  isLoggedIn: localStorage.getItem("cf_is_logged_in") === "true",
  userName: localStorage.getItem("cf_user_name") || "",
  userEmail: localStorage.getItem("cf_user_email") || "",
  activeTab: "landing",
  activePrepSubtab: "aptitude",
  selectedJobId: "job-1",
  selectedCompanyId: "comp-amazon",
  appliedJobIds: JSON.parse(localStorage.getItem("cf_applied_jobs")) || [],
  customJobs: JSON.parse(localStorage.getItem("cf_custom_jobs")) || [],
  solvedDsaProblemIds: new Set(JSON.parse(localStorage.getItem("cf_solved_dsa")) || []),
  dsaProblemNotes: JSON.parse(localStorage.getItem("cf_dsa_notes")) || {},
  quizScores: JSON.parse(localStorage.getItem("cf_quiz_scores")) || {},
  hrAnswers: JSON.parse(localStorage.getItem("cf_hr_answers")) || {},
  activityLog: JSON.parse(localStorage.getItem("cf_activities")) || [
    { time: new Date().toLocaleTimeString(), msg: "Welcome to CareerForge. Let's start preparing!" }
  ]
};

// API Base Configuration
const API_BASE = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.protocol === 'file:') ? 'http://localhost:3000' : window.location.origin;

async function parseJsonResponse(res) {
  let text;
  try {
    text = await res.text();
  } catch (err) {
    return null;
  }
  if (!text || !text.trim()) return null;
  try {
    return JSON.parse(text);
  } catch (err) {
    console.warn(`Non-JSON response from server: ${text.slice(0, 120)}`);
    return null;
  }
}

// State Synchronization from Backend Database
async function syncState(onlyUser = false) {
  try {
    const promises = [];
    
    if (!onlyUser) {
      promises.push(
        fetch(`${API_BASE}/api/jobs`).then(r => r.ok ? r.json().catch(() => null) : null),
        fetch(`${API_BASE}/api/companies`).then(r => r.ok ? r.json().catch(() => null) : null),
        fetch(`${API_BASE}/api/dsa`).then(r => r.ok ? r.json().catch(() => null) : null),
        fetch(`${API_BASE}/api/prep`).then(r => r.ok ? r.json().catch(() => null) : null)
      );
    } else {
      promises.push(Promise.resolve(null), Promise.resolve(null), Promise.resolve(null), Promise.resolve(null));
    }

    if (state.isLoggedIn) {
      promises.push(fetch(`${API_BASE}/api/sync?email=${encodeURIComponent(state.userEmail)}`).then(r => r.ok ? r.json().catch(() => null) : null));
    }

    const [jobs, comps, dsa, prep, syncData] = await Promise.all(promises);

    if (jobs) MOCK_JOBS = jobs;
    if (comps) MOCK_COMPANIES = comps;
    if (dsa) MOCK_DSA_SHEET = dsa;
    if (prep && typeof prep === 'object' && Object.values(prep).some(v => v && Array.isArray(v.notes) && Array.isArray(v.quizzes))) {
      MOCK_PREP = prep;
    }

    if (state.isLoggedIn && syncData) {
      state.appliedJobIds = syncData.appliedJobIds || [];
      state.customJobs = syncData.customJobs || [];
      state.solvedDsaProblemIds = new Set(syncData.solvedDsaProblemIds || []);
      state.dsaProblemNotes = syncData.dsaProblemNotes || {};
      state.quizScores = syncData.quizScores || {};
      state.hrAnswers = syncData.hrAnswers || {};
      state.activityLog = syncData.activityLog || [];
    }
  } catch (err) {
    console.error("State synchronization failed:", err);
  }
}

// State Helper Functions
function saveState(key, val) {
  if (key === "cf_solved_dsa") {
    localStorage.setItem(key, JSON.stringify(Array.from(val)));
  } else {
    localStorage.setItem(key, JSON.stringify(val));
  }
}

async function addActivity(msg) {
  const time = new Date().toLocaleTimeString();
  state.activityLog.unshift({ time, msg });
  if (state.activityLog.length > 8) state.activityLog.pop(); // keep last 8
  saveState("cf_activities", state.activityLog);

  // Sync to database
  if (state.isLoggedIn) {
    try {
      await fetch(`${API_BASE}/api/activities`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userEmail: state.userEmail, msg })
      });
    } catch (err) {
      console.error("Failed to sync activity to server:", err);
    }
  }

  renderDashboard(); // Update activity log widget
}

// Toast Notification Engine
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  let icon = "fa-info-circle";
  if (type === "success") icon = "fa-check-circle";
  if (type === "warning") icon = "fa-exclamation-triangle";
  if (type === "danger") icon = "fa-times-circle";
  
  toast.innerHTML = `
    <i class="fa-solid ${icon}"></i>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = "slideInRight 0.3s reverse forwards";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ==========================================
// 3. PAGE ROUTING & NAVIGATION
// ==========================================

function initNavigation() {
  const sidebarLinks = document.querySelectorAll(".sidebar-nav-link");
  sidebarLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.getAttribute("data-target");
      switchTab(target);
    });
  });

  // Landing page navigation links
  const landingNavLinks = document.querySelectorAll(".landing-nav-link");
  landingNavLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.getAttribute("data-target");
      switchTab(target);
    });
  });

  // Landing feature card clicks
  const featureCards = document.querySelectorAll(".landing-feature-card");
  featureCards.forEach(card => {
    card.addEventListener("click", () => {
      const target = card.getAttribute("data-target");
      switchTab(target);
    });
  });

  // Landing Hero buttons
  const ctaExplore = document.getElementById("landing-cta-explore");
  if (ctaExplore) {
    ctaExplore.addEventListener("click", () => switchTab("dashboard"));
  }
  const ctaDsa = document.getElementById("landing-cta-dsa");
  if (ctaDsa) {
    ctaDsa.addEventListener("click", () => switchTab("dsa"));
  }

  // Mobile menu drawer
  const mobileToggle = document.getElementById("mobile-toggle");
  const sidebar = document.getElementById("sidebar");
  mobileToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

  // Close sidebar clicking outside on mobile
  document.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      if (!sidebar.contains(e.target) && !mobileToggle.contains(e.target) && sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
      }
    }
  });

  // Dashboard shortcuts
  document.getElementById("dash-go-dsa").addEventListener("click", () => switchTab("dsa"));
  document.getElementById("quick-dsa-btn").addEventListener("click", () => switchTab("dsa"));
  document.getElementById("dash-go-jobs").addEventListener("click", () => switchTab("jobs"));
  
  // Prep arena subtabs switching
  const prepSubtabBtns = document.querySelectorAll(".prep-tab-btn[data-subtab]");
  prepSubtabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      prepSubtabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.activePrepSubtab = btn.getAttribute("data-subtab");
      renderPrepArena();
    });
  });

  // Modal Closures
  const closeBtns = document.querySelectorAll("[data-close]");
  closeBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const modalId = btn.getAttribute("data-close");
      hideModal(modalId);
    });
  });
}

function switchTab(tabId) {
  state.activeTab = tabId;
  
  // Toggle landing-mode body class
  if (tabId === 'landing') {
    document.body.classList.add('landing-mode');
  } else {
    document.body.classList.remove('landing-mode');
  }
  
  // Update sidebar highlighting
  const sidebarLinks = document.querySelectorAll(".sidebar-nav-link");
  sidebarLinks.forEach(link => {
    if (link.getAttribute("data-target") === tabId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Highlight landing header nav links too
  const landingLinks = document.querySelectorAll(".landing-nav-link");
  landingLinks.forEach(link => {
    if (link.getAttribute("data-target") === tabId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Switch page visibility
  const sections = document.querySelectorAll(".page-section");
  sections.forEach(sec => {
    if (sec.getAttribute("id") === `section-${tabId}`) {
      sec.classList.add("active");
    } else {
      sec.classList.remove("active");
    }
  });

  // Trigger page-specific re-renders
  if (tabId === "dashboard") renderDashboard();
  if (tabId === "jobs") renderJobs();
  if (tabId === "prep") renderPrepArena();
  if (tabId === "companies") renderCompanies();
  if (tabId === "dsa") renderDsaSheet();

  // Scroll to top
  document.querySelector(".main-wrapper").scrollTop = 0;
  
  // Close sidebar on mobile after navigation
  const sidebar = document.getElementById("sidebar");
  if (sidebar) sidebar.classList.remove("open");
}

function showModal(modalId) {
  const overlay = document.getElementById(`modal-${modalId}`);
  if (overlay) overlay.classList.add("active");
}

function hideModal(modalId) {
  const overlay = document.getElementById(`modal-${modalId}`);
  if (overlay) overlay.classList.remove("active");
}

// ==========================================
// 4. MODULE: DASHBOARD RENDERER
// ==========================================

function renderDashboard() {
  const totalDsa = MOCK_DSA_SHEET.length;
  const solvedDsa = state.solvedDsaProblemIds.size;
  const dsaPct = totalDsa > 0 ? Math.round((solvedDsa / totalDsa) * 100) : 0;
  
  // Update core counters
  document.getElementById("dash-dsa-count").textContent = `${solvedDsa} / ${totalDsa}`;
  document.getElementById("dash-dsa-pct").textContent = `${dsaPct}%`;
  document.getElementById("dash-app-count").textContent = state.appliedJobIds.length;
  
  const allJobs = [...MOCK_JOBS, ...state.customJobs];
  document.getElementById("dash-job-count").textContent = allJobs.length;
  
  // Quiz score calc
  const solvedQuizzes = Object.keys(state.quizScores).length;
  const correctQuizzes = Object.values(state.quizScores).filter(v => v === "correct").length;
  document.getElementById("dash-score-val").textContent = `${correctQuizzes} / ${solvedQuizzes}`;
  
  // Progress bar filling
  document.getElementById("dash-progress-text").textContent = `${dsaPct}%`;
  document.getElementById("dash-progress-fill").style.width = `${dsaPct}%`;
  
  // DSA Recommended next problem
  const recommendedBox = document.getElementById("dash-recommended-problem");
  const nextUnsolved = MOCK_DSA_SHEET.find(p => !state.solvedDsaProblemIds.has(p.id));
  if (nextUnsolved) {
    let diffClass = "primary";
    if (nextUnsolved.difficulty === "Medium") diffClass = "warning";
    if (nextUnsolved.difficulty === "Hard") diffClass = "danger";
    
    recommendedBox.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <span class="badge badge-primary">Next Problem</span>
        <span class="badge badge-${diffClass}">${nextUnsolved.difficulty}</span>
      </div>
      <h4 style="font-size:0.95rem; margin-bottom:4px; font-weight:700;">${nextUnsolved.title}</h4>
      <p style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:12px;">Topic: ${nextUnsolved.topic} — ${nextUnsolved.desc}</p>
      <button class="btn btn-primary btn-sm" onclick="switchTab('dsa')">Solve Problem</button>
    `;
  } else {
    recommendedBox.innerHTML = `
      <div style="text-align:center; padding:8px; color:var(--success);">
        <i class="fa-solid fa-circle-check" style="font-size:1.5rem; margin-bottom:6px;"></i>
        <p style="font-size:0.85rem; font-weight:700;">Congratulations! You solved all problems in the DSA sheet!</p>
      </div>
    `;
  }
  
  // Render featured jobs (latest 3)
  const featuredJobsContainer = document.getElementById("dash-featured-jobs");
  featuredJobsContainer.innerHTML = "";
  const displayJobs = allJobs.slice(0, 3);
  displayJobs.forEach(job => {
    const isApplied = state.appliedJobIds.includes(job.id);
    const div = document.createElement("div");
    div.style = "display:flex; justify-content:space-between; align-items:center; padding:12px; border:1px solid var(--border); border-radius:var(--radius-sm); background:rgba(255,255,255,0.015);";
    div.innerHTML = `
      <div style="display:flex; gap:12px; align-items:center;">
        <div style="width:36px; height:36px; background-color:${job.color || '#4338ca'}; border-radius:6px; display:flex; align-items:center; justify-content:center; color:white; font-weight:800; font-size:0.95rem;">${job.logoInitials}</div>
        <div>
          <h5 style="font-size:0.875rem; font-weight:700;">${job.title}</h5>
          <p style="font-size:0.775rem; color:var(--text-secondary);">${job.company} • ${job.location}</p>
        </div>
      </div>
      <button class="btn btn-secondary btn-sm" onclick="viewJobOnPortal('${job.id}')">${isApplied ? 'Applied' : 'Details'}</button>
    `;
    featuredJobsContainer.appendChild(div);
  });
  
  // Render hiring drivers list
  const hiringContainer = document.getElementById("dash-company-list");
  hiringContainer.innerHTML = "";
  MOCK_COMPANIES.forEach(comp => {
    const item = document.createElement("div");
    item.style = "display:flex; align-items:center; gap:12px; cursor:pointer;";
    item.onclick = () => {
      state.selectedCompanyId = comp.id;
      switchTab("companies");
    };
    item.innerHTML = `
      <div style="width:34px; height:34px; border-radius:8px; background-color:${comp.themeColor}; display:flex; align-items:center; justify-content:center; color:white; font-weight:bold; font-size:0.9rem;">${comp.logoInitials}</div>
      <div style="flex:1;">
        <div style="display:flex; justify-content:space-between;">
          <span style="font-size:0.85rem; font-weight:700;">${comp.name} Drive</span>
          <span style="font-size:0.75rem; color:var(--success); font-weight:600;">Active</span>
        </div>
        <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--text-muted);">
          <span>Package: ${comp.examPattern.package}</span>
          <span>CGPA: ${comp.eligibility.cgpa.split(' ')[0]}</span>
        </div>
      </div>
    `;
    hiringContainer.appendChild(item);
  });
  
  // Render activity log
  const logContainer = document.getElementById("dash-activity-list");
  logContainer.innerHTML = "";
  state.activityLog.forEach(act => {
    const item = document.createElement("div");
    item.style = "padding-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.04); line-height: 1.4;";
    item.innerHTML = `
      <span style="color:var(--text-muted); font-size:0.7rem; display:block; margin-bottom:2px;">[${act.time}]</span>
      <span>${act.msg}</span>
    `;
    logContainer.appendChild(item);
  });
}

function viewJobOnPortal(jobId) {
  state.selectedJobId = jobId;
  switchTab("jobs");
}

// ==========================================
// 5. MODULE: JOB PORTAL RENDERER
// ==========================================

function renderJobs() {
  const container = document.getElementById("job-list-container");
  container.innerHTML = "";
  
  const searchVal = document.getElementById("job-search").value.toLowerCase();
  const filterType = document.getElementById("filter-type").value;
  const filterLoc = document.getElementById("filter-location").value;
  const filterExp = document.getElementById("filter-experience").value;
  
  const allJobs = [...MOCK_JOBS, ...state.customJobs];
  
  // Filter Logic
  const filtered = allJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchVal) || 
                          job.company.toLowerCase().includes(searchVal) || 
                          job.description.toLowerCase().includes(searchVal) ||
                          job.requirements.some(r => r.toLowerCase().includes(searchVal));
    const matchesType = !filterType || job.type === filterType;
    const matchesLoc = !filterLoc || job.location.includes(filterLoc) || (filterLoc === "Remote" && job.location === "Remote");
    const matchesExp = !filterExp || job.experience === filterExp;
    
    return matchesSearch && matchesType && matchesLoc && matchesExp;
  });
  
  if (filtered.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding:40px; color:var(--text-muted);">No job listings match your search filters.</div>`;
    document.getElementById("job-details-view").innerHTML = `
      <div style="text-align:center; padding:40px; color:var(--text-muted);">Select a job role from the list to view specifications.</div>
    `;
    return;
  }
  
  // If the active job is not in the filtered list, default to first filtered
  if (!filtered.some(j => j.id === state.selectedJobId)) {
    state.selectedJobId = filtered[0].id;
  }
  
  filtered.forEach(job => {
    const isActive = job.id === state.selectedJobId;
    const isApplied = state.appliedJobIds.includes(job.id);
    const card = document.createElement("div");
    card.className = `job-card ${isActive ? 'active' : ''}`;
    card.addEventListener("click", () => {
      state.selectedJobId = job.id;
      // Re-render cards list to highlight current
      document.querySelectorAll(".job-card").forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      renderJobDetails(job);
    });
    
    card.innerHTML = `
      <div class="job-card-top">
        <div class="job-logo-title">
          <div class="job-company-logo" style="background-color: ${job.color || '#4f46e5'}; color:white;">${job.logoInitials}</div>
          <div>
            <h4 class="job-title">${job.title}</h4>
            <div class="job-company">${job.company}</div>
          </div>
        </div>
        ${isApplied ? '<span class="badge badge-success">Applied</span>' : ''}
      </div>
      <div class="job-meta-list">
        <div class="job-meta-item"><i class="fa-solid fa-location-dot"></i> <span>${job.location}</span></div>
        <div class="job-meta-item"><i class="fa-solid fa-clock"></i> <span>${job.type}</span></div>
        <div class="job-meta-item"><i class="fa-solid fa-briefcase"></i> <span>${job.experience}</span></div>
      </div>
      <div class="job-card-bottom">
        <span class="job-salary">${job.salary}</span>
        <span style="font-size:0.75rem; color:var(--text-muted);">${job.posted}</span>
      </div>
    `;
    container.appendChild(card);
  });
  
  // Render active details
  const activeJob = allJobs.find(j => j.id === state.selectedJobId);
  if (activeJob) {
    renderJobDetails(activeJob);
  }
}

function renderJobDetails(job) {
  const pane = document.getElementById("job-details-view");
  const isApplied = state.appliedJobIds.includes(job.id);
  
  let requirementsLi = "";
  job.requirements.forEach(r => {
    requirementsLi += `<li>${r}</li>`;
  });
  
  pane.innerHTML = `
    <div class="job-details-header">
      <div class="job-details-main-info">
        <div class="job-company-logo" style="background-color: ${job.color || '#4f46e5'}; color:white; width:54px; height:54px; font-size:1.5rem;">${job.logoInitials}</div>
        <div>
          <h2 class="job-details-title">${job.title}</h2>
          <div style="font-weight:600; color:var(--primary); font-size:1rem; margin-top:2px;">${job.company}</div>
        </div>
      </div>
      
      <div style="display:flex; flex-wrap:wrap; gap:16px; margin: 16px 0; font-size:0.85rem; color:var(--text-secondary);">
        <div><i class="fa-solid fa-location-dot" style="margin-right:6px; color:var(--text-muted);"></i>${job.location}</div>
        <div><i class="fa-solid fa-clock" style="margin-right:6px; color:var(--text-muted);"></i>${job.type}</div>
        <div><i class="fa-solid fa-graduation-cap" style="margin-right:6px; color:var(--text-muted);"></i>${job.experience}</div>
        <div><i class="fa-solid fa-sack-dollar" style="margin-right:6px; color:var(--success);"></i><strong style="color:var(--text-primary);">${job.salary}</strong></div>
      </div>
      
      <div class="job-details-actions">
        ${isApplied ? `
          <button class="btn btn-success" style="width:100%;" disabled>
            <i class="fa-solid fa-circle-check"></i> Application Submitted
          </button>
        ` : `
          <button class="btn btn-primary" style="width:100%;" id="btn-apply-trigger">
            <i class="fa-solid fa-paper-plane"></i> Apply for this role
          </button>
        `}
      </div>
    </div>
    
    <div class="job-details-body">
      <h4>Job Specifications</h4>
      <p>${job.description}</p>
      
      <h4>Role Requirements & Skills</h4>
      <ul>
        ${requirementsLi}
      </ul>
      
      <h4>Candidate Experience Range</h4>
      <p>Ideal candidates will have experience matching: <strong>${job.experience}</strong> requirements. Compensation scales competitively with background experience.</p>
    </div>
  `;
  
  // Wire up apply button
  if (!isApplied) {
    document.getElementById("btn-apply-trigger").addEventListener("click", () => {
      document.getElementById("apply-job-id").value = job.id;
      document.getElementById("apply-modal-title").textContent = `Apply for ${job.title} at ${job.company}`;
      showModal("apply-job");
    });
  }
}

// ==========================================
// 6. MODULE: PREP ARENA RENDERER
// ==========================================

function renderPrepArena() {
  let currentSub = state.activePrepSubtab;
  let data = MOCK_PREP[currentSub];

  if (!data || !Array.isArray(data.notes) || !Array.isArray(data.quizzes)) {
    const fallbackSub = Object.keys(MOCK_PREP).find((key) => {
      const prepData = MOCK_PREP[key];
      return prepData && Array.isArray(prepData.notes) && Array.isArray(prepData.quizzes);
    });

    if (!fallbackSub) {
      console.error("Prep arena data is unavailable or malformed:", MOCK_PREP);
      return;
    }

    state.activePrepSubtab = fallbackSub;
    currentSub = fallbackSub;
    data = MOCK_PREP[fallbackSub];
    document.querySelectorAll(".prep-tab-btn[data-subtab]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-subtab") === fallbackSub);
    });
  }
  
  // Render Accordion Notes (Left Side)
  const accordionContainer = document.getElementById("prep-notes-accordion");
  accordionContainer.innerHTML = "";
  
  data.notes.forEach((note, index) => {
    const card = document.createElement("div");
    card.className = `prep-topic-card ${index === 0 ? 'open' : ''}`;
    
    const header = document.createElement("div");
    header.className = "prep-topic-header";
    header.innerHTML = `
      <span>${note.title}</span>
      <i class="fa-solid fa-chevron-down"></i>
    `;
    header.addEventListener("click", () => {
      const isOpen = card.classList.contains("open");
      document.querySelectorAll(".prep-topic-card").forEach(c => c.classList.remove("open"));
      if (!isOpen) card.classList.add("open");
    });
    
    const content = document.createElement("div");
    content.className = "prep-topic-content";
    content.innerHTML = note.content;
    
    card.appendChild(header);
    card.appendChild(content);
    accordionContainer.appendChild(card);
  });
  
  // Render Practice Card (Right Side)
  const practiceContainer = document.getElementById("quiz-card-container");
  practiceContainer.innerHTML = "";
  
  if (data.quizzes && data.quizzes.length > 0) {
    // Find the first unsolved or default to first question
    let activeQuizIndex = data.quizzes.findIndex(q => !state.quizScores[q.id]);
    if (activeQuizIndex === -1) activeQuizIndex = 0; // if all solved, repeat first
    
    const quiz = data.quizzes[activeQuizIndex];
    
    if (quiz.type === "mcq") {
      const isSolved = !!state.quizScores[quiz.id];
      const selectedIndex = state.quizScores[quiz.id + "_choice"];
      
      let optionsLi = "";
      quiz.options.forEach((opt, idx) => {
        let optClass = "";
        if (isSolved) {
          if (idx === quiz.correctIndex) optClass = "correct";
          else if (idx === selectedIndex) optClass = "incorrect";
        } else if (selectedIndex === idx) {
          optClass = "selected";
        }
        
        optionsLi += `
          <div class="quiz-option ${optClass}" data-index="${idx}">
            <div class="quiz-option-indicator"></div>
            <span>${opt}</span>
          </div>
        `;
      });
      
      practiceContainer.innerHTML = `
        <div class="practice-question-header">
          <span class="badge badge-primary">${currentSub.toUpperCase()} Practice MCQ</span>
          <span style="font-size:0.75rem; color:var(--text-muted);">${isSolved ? 'Completed' : 'Pending'}</span>
        </div>
        <div class="question-text">${quiz.question}</div>
        <div class="quiz-options-list">
          ${optionsLi}
        </div>
        <div class="quiz-action-bar">
          <div>
            ${isSolved ? `<span style="color: ${selectedIndex === quiz.correctIndex ? 'var(--success)' : 'var(--danger)'}; font-weight:700; font-size:0.85rem;"><i class="fa-solid ${selectedIndex === quiz.correctIndex ? 'fa-check' : 'fa-times'}"></i> Answer Evaluated</span>` : ''}
          </div>
          <button class="btn btn-primary btn-sm" id="btn-submit-answer" ${isSolved ? 'disabled' : ''}>Verify Answer</button>
        </div>
        ${isSolved ? `
          <div class="quiz-explanation">
            <strong>Explanatory Walkthrough:</strong> ${quiz.explanation}
          </div>
        ` : ''}
      `;
      
      // Wire MCQ click events
      if (!isSolved) {
        const optionCards = practiceContainer.querySelectorAll(".quiz-option");
        optionCards.forEach(card => {
          card.addEventListener("click", () => {
            optionCards.forEach(c => c.classList.remove("selected"));
            card.classList.add("selected");
            state.quizScores[quiz.id + "_choice"] = parseInt(card.getAttribute("data-index"));
          });
        });
        
        document.getElementById("btn-submit-answer").addEventListener("click", async () => {
          const userChoiceIdx = state.quizScores[quiz.id + "_choice"];
          if (userChoiceIdx === undefined) {
            showToast("Please select an answer choice first!", "warning");
            return;
          }
          
          const isCorrect = userChoiceIdx === quiz.correctIndex;
          state.quizScores[quiz.id] = isCorrect ? "correct" : "incorrect";
          saveState("cf_quiz_scores", state.quizScores);

          // Sync score to database
          if (state.isLoggedIn) {
            try {
              await fetch(`${API_BASE}/api/quizzes/score`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userEmail: state.userEmail, quizId: quiz.id, choice: userChoiceIdx, isCorrect })
              });
            } catch (err) {
              console.error("Failed to sync quiz score:", err);
            }
          }
          
          if (isCorrect) {
            showToast("Excellent! Correct Answer.", "success");
            addActivity(`Solved ${currentSub.toUpperCase()} MCQ quiz correctly!`);
          } else {
            showToast("Incorrect Answer. Review the explanation.", "danger");
            addActivity(`Attempted ${currentSub.toUpperCase()} MCQ quiz.`);
          }
          
          renderPrepArena();
          renderDashboard();
        });
      }
      
    } else if (quiz.type === "code") {
      const isSolved = !!state.quizScores[quiz.id];
      const savedCode = localStorage.getItem(`cf_code_${quiz.id}`) || quiz.startingCode;
      
      practiceContainer.innerHTML = `
        <div class="practice-question-header">
          <span class="badge badge-primary">Interactive Code Compiler</span>
          <span style="font-size:0.75rem; color:var(--text-muted);">Language: JavaScript</span>
        </div>
        <div class="question-text">${quiz.question}</div>
        
        <div class="code-runner-container">
          <div class="code-editor-header">
            <span class="code-editor-title">index.js</span>
            <div style="display:flex; gap:8px;">
              <button class="btn btn-secondary btn-sm" id="btn-reset-code" style="padding:4px 8px; font-size:0.75rem;"><i class="fa-solid fa-rotate-left"></i> Reset</button>
            </div>
          </div>
          <textarea class="code-editor-textarea" id="code-editor" spellcheck="false">${savedCode}</textarea>
          
          <div class="code-editor-console">
            <div class="code-console-title">Execution Console Output</div>
            <div class="code-console-output" id="console-output">Ready to execute tests. Click 'Compile & Run' code to evaluate.</div>
          </div>
        </div>
        
        <div class="quiz-action-bar" style="margin-top:12px;">
          <div>
            ${isSolved ? '<span style="color:var(--success); font-weight:700; font-size:0.85rem;"><i class="fa-solid fa-circle-check"></i> Code Verified</span>' : ''}
          </div>
          <button class="btn btn-primary" id="btn-run-code"><i class="fa-solid fa-play"></i> Compile & Run</button>
        </div>
      `;
      
      // Cache text edits
      const txt = document.getElementById("code-editor");
      txt.addEventListener("input", () => {
        localStorage.setItem(`cf_code_${quiz.id}`, txt.value);
      });
      
      document.getElementById("btn-reset-code").addEventListener("click", () => {
        txt.value = quiz.startingCode;
        localStorage.removeItem(`cf_code_${quiz.id}`);
        document.getElementById("console-output").textContent = "Console reset. Ready to run.";
      });
      
      document.getElementById("btn-run-code").addEventListener("click", () => {
        const code = txt.value;
        const consoleNode = document.getElementById("console-output");
        consoleNode.innerHTML = "<span style='color:var(--text-muted);'>Compiling and running test cases...</span>";
        
        setTimeout(() => {
          try {
            // Simulated evaluation in safe scope
            // Create a function object out of user string
            const wrapper = new Function(`
              ${code}
              return reverseString;
            `);
            
            const userFn = wrapper();
            let allPassed = true;
            let consoleLines = [];
            
            quiz.testCases.forEach((tc, index) => {
              const res = userFn(tc.input);
              const passed = res === tc.expected;
              if (!passed) allPassed = false;
              
              consoleLines.push(`[Test Case ${index + 1}] Input: "${tc.input}" | Expected: "${tc.expected}" | Returned: "${res}" -> ${passed ? '<span style="color:var(--success);">PASSED</span>' : '<span style="color:var(--danger);">FAILED</span>'}`);
            });
            
            if (allPassed) {
              consoleNode.innerHTML = consoleLines.join("\n") + `\n\n<span style="color:var(--success); font-weight:bold;">All test cases successfully verified! (100% correct)</span>`;
              if (!state.quizScores[quiz.id]) {
                state.quizScores[quiz.id] = "correct";
                saveState("cf_quiz_scores", state.quizScores);

                // Sync code compilation verification to database
                if (state.isLoggedIn) {
                  try {
                    fetch(`${API_BASE}/api/quizzes/score`, {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        userEmail: state.userEmail,
                        quizId: quiz.id,
                        choice: 0,
                        isCorrect: true,
                      }),
                    })
                      .then((res) => res.json())
                      .then((data) => {
                        console.log("Score synced", data);
                      })
                      .catch((err) => {
                        console.error("Fetch failed:", err);
                      });
                  } catch (err) {
                    console.error("Failed to sync code quiz score:", err);
                  }
                }
                addActivity("Compiled and verified DSA code reversal practice question successfully!");
                renderDashboard();
                // Brief delay re-render to update checkbox/marks
                setTimeout(() => renderPrepArena(), 1500);
              }
              showToast("Tests passed! Code output verified.", "success");
            } else {
              consoleNode.innerHTML = consoleLines.join("\n") + `\n\n<span style="color:var(--danger); font-weight:bold;">Some test cases returned incorrect values. Debug your logic!</span>`;
              showToast("Compilation error: Test cases failed.", "warning");
            }
          } catch (err) {
            consoleNode.innerHTML = `<span style="color:var(--danger); font-weight:bold;">Syntax/Runtime Error: ${err.message}</span>\n\nEnsure your function matches standard parameters.`;
            showToast("JavaScript Execution Error", "danger");
          }
        }, 1000);
      });
      
    } else if (quiz.type === "sandbox") {
      const savedAns = state.hrAnswers[quiz.id] || "";
      practiceContainer.innerHTML = `
        <div class="practice-question-header">
          <span class="badge badge-primary">HR Sandbox Builder</span>
          <span style="font-size:0.75rem; color:var(--text-muted);">Behavioral Pitch</span>
        </div>
        <div class="question-text" style="font-size:0.95rem; margin-bottom:12px;">${quiz.question}</div>
        
        <div class="hr-sandbox">
          <label class="form-label" style="font-size:0.7rem;">Your Saved Draft Pitch</label>
          <textarea id="hr-draft-textarea" class="form-textarea" style="min-height:160px; font-size:0.875rem; background-color:rgba(0,0,0,0.25);" placeholder="${quiz.placeholder}">${savedAns}</textarea>
          
          <div class="hr-sandbox-output" id="sandbox-preview" style="display: ${savedAns ? 'block' : 'none'};">
            <strong>Active Saved Review Pitch:</strong><br>
            <p style="white-space:pre-wrap; margin-top:8px; line-height:1.5;">${savedAns}</p>
          </div>
        </div>
        
        <div class="quiz-action-bar" style="margin-top:12px;">
          <div>
            ${savedAns ? '<span style="color:var(--success); font-weight:700; font-size:0.85rem;"><i class="fa-solid fa-circle-check"></i> Pitch Saved</span>' : ''}
          </div>
          <button class="btn btn-primary" id="btn-save-hr-pitch"><i class="fa-solid fa-save"></i> Save Response</button>
        </div>
      `;
      
      document.getElementById("btn-save-hr-pitch").addEventListener("click", async () => {
        const text = document.getElementById("hr-draft-textarea").value;
        if (!text.trim()) {
          showToast("Draft cannot be completely empty!", "warning");
          return;
        }
        
        state.hrAnswers[quiz.id] = text;
        saveState("cf_hr_answers", state.hrAnswers);
        
        // Mark score status
        state.quizScores[quiz.id] = "correct";
        saveState("cf_quiz_scores", state.quizScores);

        // Sync HR answer to database
        if (state.isLoggedIn) {
          try {
            await fetch(`${API_BASE}/api/hr`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ userEmail: state.userEmail, questionId: quiz.id, answer: text })
            });
            await fetch(`${API_BASE}/api/quizzes/score`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ userEmail: state.userEmail, quizId: quiz.id, choice: 0, isCorrect: true })
            });
          } catch (err) {
            console.error("Failed to sync HR answer:", err);
          }
        }
        
        addActivity("Created and saved customized HR response draft pitch.");
        showToast("HR response template successfully logged!", "success");
        renderDashboard();
        renderPrepArena();
      });
    }
  }
}

// ==========================================
// 7. MODULE: COMPANY HUB RENDERER
// ==========================================

function renderCompanies() {
  const grid = document.getElementById("companies-select-grid");
  grid.innerHTML = "";
  
  MOCK_COMPANIES.forEach(comp => {
    const isActive = comp.id === state.selectedCompanyId;
    const card = document.createElement("div");
    card.className = `company-card ${isActive ? 'active' : ''}`;
    
    card.innerHTML = `
      <div class="company-card-logo" style="background-color: ${comp.themeColor};">${comp.logoInitials}</div>
      <div class="company-card-name">${comp.name}</div>
      <span class="badge badge-primary btn-sm">Review Process</span>
    `;
    
    card.addEventListener("click", () => {
      state.selectedCompanyId = comp.id;
      document.querySelectorAll(".company-card").forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      renderCompanyDetails(comp);
    });
    
    grid.appendChild(card);
  });
  
  // Render details for active company
  const activeComp = MOCK_COMPANIES.find(c => c.id === state.selectedCompanyId);
  if (activeComp) {
    renderCompanyDetails(activeComp);
  }
}

function renderCompanyDetails(comp) {
  const panel = document.getElementById("company-detail-card");
  panel.style.display = "block";
  
  let syllabusLi = "";
  comp.syllabus.forEach(item => {
    syllabusLi += `<li style="font-size:0.875rem; color:var(--text-secondary); margin-bottom:6px;"><i class="fa-solid fa-caret-right" style="color:var(--primary); margin-right:8px;"></i> ${item}</li>`;
  });
  
  let timelineHtml = "";
  comp.hiringTimeline.forEach(step => {
    timelineHtml += `
      <div class="timeline-round">
        <div class="timeline-round-title">${step.round}</div>
        <div class="timeline-round-desc">${step.desc}</div>
      </div>
    `;
  });
  
  panel.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border); padding-bottom:16px; margin-bottom:20px;">
      <div style="display:flex; gap:16px; align-items:center;">
        <div style="width:54px; height:54px; border-radius:12px; background-color:${comp.themeColor}; display:flex; align-items:center; justify-content:center; color:white; font-size:1.8rem; font-weight:800;">${comp.logoInitials}</div>
        <div>
          <h2 style="font-size:1.35rem; font-weight:800;">${comp.name} Placement Blueprint</h2>
          <p style="font-size:0.85rem; color:var(--text-secondary);">Average Salary Range: <strong>${comp.examPattern.package}</strong></p>
        </div>
      </div>
      <button class="btn btn-primary" onclick="viewJobsForCompany('${comp.name}')">View Openings</button>
    </div>
    
    <div class="company-info-row" style="margin-bottom: 24px;">
      <div class="company-info-stat">
        <i class="fa-solid fa-clock"></i>
        <div class="company-info-stat-content">
          <h5>Test Duration</h5>
          <p>${comp.examPattern.duration}</p>
        </div>
      </div>
      <div class="company-info-stat">
        <i class="fa-solid fa-gauge-high"></i>
        <div class="company-info-stat-content">
          <h5>Difficulty Level</h5>
          <p>${comp.examPattern.difficulty}</p>
        </div>
      </div>
      <div class="company-info-stat">
        <i class="fa-solid fa-graduation-cap"></i>
        <div class="company-info-stat-content">
          <h5>CGPA Cutoff</h5>
          <p>${comp.eligibility.cgpa}</p>
        </div>
      </div>
      <div class="company-info-stat">
        <i class="fa-solid fa-ban"></i>
        <div class="company-info-stat-content">
          <h5>Allowed Backlogs</h5>
          <p>${comp.eligibility.backlogs}</p>
        </div>
      </div>
    </div>
    
    <div class="prep-grid">
      <div>
        <h3 class="card-title" style="margin-bottom:12px;"><i class="fa-solid fa-list-check"></i> Recruitment rounds Timeline</h3>
        <div class="company-rounds-timeline">
          ${timelineHtml}
        </div>
      </div>
      
      <div>
        <h3 class="card-title" style="margin-bottom:12px;"><i class="fa-solid fa-book"></i> Focus Syllabus & Topics</h3>
        <ul style="list-style:none; padding:0; margin-top:12px;">
          ${syllabusLi}
        </ul>
        
        <div class="glass-card" style="margin-top:24px; padding:16px; border-color: rgba(99,102,241,0.15); background-color: rgba(99,102,241,0.02);">
          <h4 style="font-size:0.875rem; font-weight:700; color:var(--primary); margin-bottom:6px;"><i class="fa-solid fa-lightbulb"></i> Strategic Placement Tip</h4>
          <p style="font-size:0.8rem; color:var(--text-secondary); line-height:1.5;">Ensure you cross-verify your projects with system design fundamentals. Large tech companies look for optimal algorithmic scaling O(N) over sub-optimal nested loops O(N²).</p>
        </div>
      </div>
    </div>
  `;
}

function viewJobsForCompany(compName) {
  document.getElementById("job-search").value = compName;
  switchTab("jobs");
}

// ==========================================
// 8. MODULE: DSA SHEET RENDERER
// ==========================================

let activeDsaFilter = "All";

function renderDsaSheet() {
  const overallCountNode = document.getElementById("dsa-overall-ratio");
  const overallBarFill = document.getElementById("dsa-overall-bar");
  const circleText = document.getElementById("dsa-circle-text");
  const circleStroke = document.getElementById("dsa-circle-stroke");
  
  const totalProblems = MOCK_DSA_SHEET.length;
  const solvedCount = state.solvedDsaProblemIds.size;
  const percentage = totalProblems > 0 ? Math.round((solvedCount / totalProblems) * 100) : 0;
  
  // Update progress widgets
  overallCountNode.textContent = `${solvedCount} / ${totalProblems} Problems (${percentage}%)`;
  overallBarFill.style.width = `${percentage}%;`;
  overallBarFill.setAttribute("style", `width: ${percentage}%;`);
  circleText.textContent = `${percentage}%`;
  
  // Calculate SVG circular stroke dashboard offset
  // circumference is 2 * pi * r = 2 * 3.14159 * 32 = ~201
  const circumference = 2 * Math.PI * 32;
  const offset = circumference - (percentage / 100) * circumference;
  circleStroke.style.strokeDasharray = `${circumference}`;
  circleStroke.style.strokeDashoffset = `${offset}`;
  
  // Render Filters (array of categories)
  const categories = ["All", ...new Set(MOCK_DSA_SHEET.map(p => p.topic))];
  const filterPillsContainer = document.getElementById("dsa-topic-filters");
  filterPillsContainer.innerHTML = "";
  
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = `dsa-topic-btn ${cat === activeDsaFilter ? 'active' : ''}`;
    btn.textContent = cat;
    btn.addEventListener("click", () => {
      activeDsaFilter = cat;
      renderDsaSheet();
    });
    filterPillsContainer.appendChild(btn);
  });
  
  // Filter problems
  const filteredProblems = MOCK_DSA_SHEET.filter(p => {
    return activeDsaFilter === "All" || p.topic === activeDsaFilter;
  });
  
  // Populate problem list table
  const tbody = document.getElementById("dsa-problem-rows");
  tbody.innerHTML = "";
  
  if (filteredProblems.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:30px; color:var(--text-muted);">No problems found in this category.</td></tr>`;
    return;
  }
  
  filteredProblems.forEach(prob => {
    const isSolved = state.solvedDsaProblemIds.has(prob.id);
    const row = document.createElement("tr");
    row.className = isSolved ? "solved" : "";
    
    let diffBadge = "";
    if (prob.difficulty === "Easy") diffBadge = "badge-success";
    if (prob.difficulty === "Medium") diffBadge = "badge-warning";
    if (prob.difficulty === "Hard") diffBadge = "badge-danger";
    
    row.innerHTML = `
      <td>
        <div class="dsa-checkbox ${isSolved ? 'checked' : ''}" data-id="${prob.id}"></div>
      </td>
      <td>
        <div class="dsa-prob-title">
          <a href="${prob.link}" target="_blank" style="color:inherit; text-decoration:none; display:flex; align-items:center; gap:8px;">
            <span>${prob.title}</span>
            <i class="fa-solid fa-external-link" style="font-size:0.75rem; color:var(--text-muted);"></i>
          </a>
        </div>
        <div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">${prob.desc}</div>
      </td>
      <td>
        <span class="badge ${diffBadge}">${prob.difficulty}</span>
      </td>
      <td>
        <span class="dsa-prob-topic">${prob.topic}</span>
      </td>
      <td>
        <div style="display:flex; justify-content:center; gap:8px;">
          <a class="btn btn-secondary btn-sm" href="${prob.link}" target="_blank" style="padding:6px 10px;">
            <i class="fa-solid fa-play"></i> Solve
          </a>
          <button class="btn btn-outline btn-sm btn-note-trigger" data-id="${prob.id}" style="padding:6px 10px;">
            <i class="fa-solid fa-note-sticky"></i> Note
          </button>
        </div>
      </td>
    `;
    
    // Wire completion checkbox
    row.querySelector(".dsa-checkbox").addEventListener("click", () => {
      toggleDsaProblem(prob.id);
    });
    
    // Wire notes modal open
    row.querySelector(".btn-note-trigger").addEventListener("click", () => {
      openDsaNotesModal(prob.id, prob.title);
    });
    
    tbody.appendChild(row);
  });
}

async function toggleDsaProblem(probId) {
  const prob = MOCK_DSA_SHEET.find(p => p.id === probId);
  if (!prob) return;
  
  const wasSolved = state.solvedDsaProblemIds.has(probId);
  const newSolvedState = !wasSolved;

  if (wasSolved) {
    state.solvedDsaProblemIds.delete(probId);
    addActivity(`Marked DSA problem "${prob.title}" as incomplete.`);
    showToast(`Incomplete: ${prob.title}`, "info");
  } else {
    state.solvedDsaProblemIds.add(probId);
    addActivity(`Completed DSA problem "${prob.title}"!`);
    showToast(`Solved: ${prob.title}`, "success");
  }
  
  saveState("cf_solved_dsa", state.solvedDsaProblemIds);

  // Sync DSA solved state to database
  if (state.isLoggedIn) {
    try {
      await fetch(`${API_BASE}/api/dsa/solve`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userEmail: state.userEmail, problemId: probId, solved: newSolvedState })
      });
    } catch (err) {
      console.error("Failed to sync DSA solved state:", err);
    }
  }

  renderDsaSheet();
  renderDashboard();
}

function openDsaNotesModal(probId, probTitle) {
  document.getElementById("dsa-notes-prob-id").value = probId;
  document.getElementById("dsa-notes-title").textContent = `Revision Notes for "${probTitle}"`;
  
  const savedNote = state.dsaProblemNotes[probId] || "";
  document.getElementById("dsa-notes-textarea").value = savedNote;
  showModal("dsa-notes");
}

// ==========================================
// 9. EVENT WIRE-UPS & FORM SUBMISSIONS
// ==========================================

function initFormHandlers() {
  // Global search input handling
  const globalSearch = document.getElementById("global-search");
  globalSearch.addEventListener("input", (e) => {
    const val = e.target.value.toLowerCase();
    
    // Routing based search integration
    if (state.activeTab === "jobs") {
      document.getElementById("job-search").value = val;
      renderJobs();
    } else if (state.activeTab === "dsa") {
      // Find the topic or match title
      const foundTopic = MOCK_DSA_SHEET.some(p => p.topic.toLowerCase().includes(val));
      if (foundTopic) {
        // change active pill filter
        const match = MOCK_DSA_SHEET.find(p => p.topic.toLowerCase().includes(val));
        activeDsaFilter = match.topic;
      }
      renderDsaSheet();
    } else if (state.activeTab === "companies") {
      const matchComp = MOCK_COMPANIES.find(c => c.name.toLowerCase().includes(val));
      if (matchComp) {
        state.selectedCompanyId = matchComp.id;
        renderCompanies();
      }
    }
  });

  // Filter triggers on Job Portal
  document.getElementById("job-search").addEventListener("input", renderJobs);
  document.getElementById("filter-type").addEventListener("change", renderJobs);
  document.getElementById("filter-location").addEventListener("change", renderJobs);
  document.getElementById("filter-experience").addEventListener("change", renderJobs);

  // Job Submission Trigger Modal Open
  document.getElementById("btn-post-job-trigger").addEventListener("click", () => {
    showModal("post-job");
  });

  // Form: Apply for Job
  document.getElementById("form-apply-job").addEventListener("submit", async (e) => {
    e.preventDefault();
    const jobId = document.getElementById("apply-job-id").value;
    const name = document.getElementById("apply-name").value;
    const email = document.getElementById("apply-email").value;
    const github = document.getElementById("apply-github").value;
    const coverLetter = document.getElementById("apply-cover").value;
    
    // Simulate resume upload
    const resumeFile = document.getElementById("apply-resume").files[0];
    const resumeName = resumeFile ? resumeFile.name : "resume_submission.pdf";

    const allJobs = [...MOCK_JOBS, ...state.customJobs];
    const job = allJobs.find(j => j.id === jobId);
    
    if (!job) return;
    
    // Process application state
    state.appliedJobIds.push(jobId);
    saveState("cf_applied_jobs", state.appliedJobIds);

    // Sync application to database
    if (state.isLoggedIn) {
      try {
        await fetch(`${API_BASE}/api/jobs/apply`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ jobId, userEmail: state.userEmail, name, email, github, resumeName, coverLetter })
        });
      } catch (err) {
        console.error("Failed to sync application to server:", err);
      }
    }
    
    addActivity(`Successfully applied to ${job.title} position at ${job.company}.`);
    showToast(`Application submitted to ${job.company}!`, "success");
    
    hideModal("apply-job");
    renderJobs();
    renderDashboard();
    
    // Reset form fields
    document.getElementById("apply-cover").value = "";
    document.getElementById("apply-resume").value = "";
  });

  // Form: Publish New Job
  document.getElementById("form-post-job").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const title = document.getElementById("post-title").value;
    const company = document.getElementById("post-company").value;
    const type = document.getElementById("post-type").value;
    const exp = document.getElementById("post-exp").value;
    const loc = document.getElementById("post-loc").value;
    const sal = document.getElementById("post-sal").value;
    const desc = document.getElementById("post-desc").value;
    const reqsInput = document.getElementById("post-reqs").value;
    
    const requirements = reqsInput.split(",").map(r => r.trim()).filter(r => r.length > 0);
    
    let newJob = {
      title,
      company,
      location: loc,
      type,
      experience: exp,
      salary: sal,
      description: desc,
      requirements
    };

    // Sync new job to database
    if (state.isLoggedIn) {
      try {
        const res = await fetch(`${API_BASE}/api/jobs`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newJob)
        });
        if (res.ok) {
          newJob = await res.json();
        } else {
          showToast("Failed to post job to database", "danger");
          return;
        }
      } catch (err) {
        console.error("Failed to post job:", err);
        showToast("Network error publishing job", "danger");
        return;
      }
    } else {
      newJob.id = `custom-job-${Date.now()}`;
      newJob.posted = "Just now";
      newJob.logoInitials = company.slice(0, 2).toUpperCase();
      newJob.color = "#" + Math.floor(Math.random()*16777215).toString(16);
    }
    
    state.customJobs.unshift(newJob);
    saveState("cf_custom_jobs", state.customJobs);
    
    addActivity(`Published a new job opening: ${title} at ${company}.`);
    showToast(`Successfully published ${title} opening!`, "success");
    
    hideModal("post-job");
    
    // Reset forms
    document.getElementById("form-post-job").reset();
    
    state.selectedJobId = newJob.id;
    renderJobs();
    renderDashboard();
  });

  // Form: Save DSA Problem Notes
  document.getElementById("form-dsa-notes").addEventListener("submit", async (e) => {
    e.preventDefault();
    const probId = document.getElementById("dsa-notes-prob-id").value;
    const noteText = document.getElementById("dsa-notes-textarea").value;
    
    state.dsaProblemNotes[probId] = noteText;
    saveState("cf_dsa_notes", state.dsaProblemNotes);

    // Sync notes to database
    if (state.isLoggedIn) {
      try {
        await fetch(`${API_BASE}/api/dsa/notes`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userEmail: state.userEmail, problemId: probId, notes: noteText })
        });
      } catch (err) {
        console.error("Failed to sync DSA notes:", err);
      }
    }
    
    const prob = MOCK_DSA_SHEET.find(p => p.id === probId);
    const title = prob ? prob.title : "DSA Problem";
    
    addActivity(`Updated study revision notes for "${title}".`);
    showToast(`Saved notes for ${title}`, "success");
    
    hideModal("dsa-notes");
  });
}

// ==========================================
// 10. INITIALIZATION
// ==========================================

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const themeToggle = document.getElementById("theme-toggle");
  const landingThemeToggle = document.getElementById("landing-theme-toggle");
  
  const updateToggle = (el) => {
    if (!el) return;
    if (theme === "light") {
      el.innerHTML = '<i class="fa-solid fa-moon"></i>';
      el.title = "Toggle Dark Theme";
    } else {
      el.innerHTML = '<i class="fa-solid fa-sun"></i>';
      el.title = "Toggle Light Theme";
    }
  };
  
  updateToggle(themeToggle);
  updateToggle(landingThemeToggle);
}

function applyAuth() {
  const loginOverlay = document.getElementById("login-overlay");
  const authContainer = document.getElementById("header-auth-container");
  
  // Update landing page signin/dashboard button
  const landingSignin = document.getElementById("landing-signin-btn");
  if (landingSignin) {
    if (state.isLoggedIn) {
      landingSignin.textContent = "Dashboard";
      landingSignin.onclick = () => switchTab("dashboard");
    } else {
      landingSignin.textContent = "Sign In";
      landingSignin.onclick = () => {
        if (loginOverlay) loginOverlay.classList.add("active");
      };
    }
  }

  if (state.isLoggedIn) {
    if (loginOverlay) loginOverlay.classList.remove("active");
    
    // Update user info elements in the DOM
    const sidebarName = document.getElementById("sidebar-name");
    const sidebarAvatar = document.getElementById("sidebar-avatar");
    const initials = state.userName.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
    
    if (sidebarName) sidebarName.textContent = state.userName;
    if (sidebarAvatar) {
      sidebarAvatar.textContent = initials || "CF";
    }
    
    // Update welcome message on Dashboard
    const welcomeHeader = document.getElementById("dashboard-greeting");
    if (welcomeHeader) {
      welcomeHeader.textContent = `Welcome back, ${state.userName.split(" ")[0]}!`;
    }
    
    // Update header actions sign out
    if (authContainer) {
      authContainer.innerHTML = `
        <div class="btn btn-secondary btn-sm" id="header-user-badge" style="gap: 8px; padding: 4px 8px 4px 4px; border-radius: 20px; font-size: 0.8rem; background-color: rgba(255, 255, 255, 0.03); display: flex; align-items: center; border: 1px solid var(--border);">
          <div style="width: 26px; height: 26px; border-radius: 50%; background: linear-gradient(135deg, var(--secondary), var(--info)); color: white; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.75rem;">${initials || 'CF'}</div>
          <span style="font-weight: 600;">${state.userName.split(" ")[0]}</span>
          <i class="fa-solid fa-right-from-bracket" id="header-logout-ico" title="Sign Out" style="margin-left: 6px; cursor: pointer; color: var(--danger); font-size: 0.85rem; padding: 2px;"></i>
        </div>
      `;
      
      // Wire event listener
      const logoutIco = document.getElementById("header-logout-ico");
      if (logoutIco) {
        logoutIco.addEventListener("click", (e) => {
          e.stopPropagation();
          state.isLoggedIn = false;
          localStorage.setItem("cf_is_logged_in", "false");
          localStorage.removeItem("cf_user_name");
          localStorage.removeItem("cf_user_email");
          state.userName = "";
          state.userEmail = "";
          showToast("Signed out successfully", "info");
          addActivity("Logged out of the session.");
          applyAuth();
        });
      }
    }
  } else {
    if (loginOverlay && state.activeTab !== "landing") loginOverlay.classList.add("active");
    
    // Update header actions sign in
    if (authContainer) {
      authContainer.innerHTML = `
        <button class="btn btn-primary btn-sm" id="header-login-btn" style="background: linear-gradient(135deg, var(--primary), var(--secondary)); border: none; box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2); font-size: 0.8rem; font-weight: 700; border-radius: 8px; cursor: pointer;">
          <i class="fa-solid fa-right-to-bracket"></i> Sign In
        </button>
      `;
      
      // Wire event listener
      const loginBtn = document.getElementById("header-login-btn");
      if (loginBtn) {
        loginBtn.addEventListener("click", () => {
          if (loginOverlay) loginOverlay.classList.add("active");
        });
      }
    }
  }
}

function initAuthHandlers() {
  const tabLogin = document.getElementById("tab-login");
  const tabSignup = document.getElementById("tab-signup");
  const groupName = document.getElementById("group-name");
  const formLogin = document.getElementById("form-login");
  const btnLoginSubmit = document.getElementById("btn-login-submit");
  const loginSubtitle = document.getElementById("login-subtitle");
  const demoNotice = document.getElementById("login-demo-notice");
  const btnLogout = document.getElementById("btn-logout");
  
  let currentAuthMode = "login"; // "login" or "signup"
  
  if (tabLogin && tabSignup) {
    tabLogin.addEventListener("click", () => {
      currentAuthMode = "login";
      tabLogin.classList.add("active");
      tabSignup.classList.remove("active");
      if (groupName) groupName.style.display = "none";
      if (loginSubtitle) loginSubtitle.textContent = "Sign in to access your jobs and preparation hub.";
      if (demoNotice) demoNotice.style.display = "block";
      if (btnLoginSubmit) btnLoginSubmit.textContent = "Sign In";
      document.getElementById("login-name").removeAttribute("required");
    });
    
    tabSignup.addEventListener("click", () => {
      currentAuthMode = "signup";
      tabSignup.classList.add("active");
      tabLogin.classList.remove("active");
      if (groupName) groupName.style.display = "block";
      if (loginSubtitle) loginSubtitle.textContent = "Create an account to track your study sheets.";
      if (demoNotice) demoNotice.style.display = "none";
      if (btnLoginSubmit) btnLoginSubmit.textContent = "Create Account";
      document.getElementById("login-name").setAttribute("required", "required");
    });
  }
  
  if (formLogin) {
    formLogin.addEventListener("submit", async (e) => {
      e.preventDefault();
      
      const email = document.getElementById("login-email").value;
      const pass = document.getElementById("login-pass").value;
      
      if (currentAuthMode === "login") {
        try {
          const res = await fetch(`${API_BASE}/api/auth/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(pass)}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
          });
          // Read body ONCE — a Response body can only be consumed one time
          const user = await parseJsonResponse(res);
          if (!res.ok) {
            showToast(user?.error || "Login failed. Check your credentials.", "danger");
            return;
          }
          if (!user || !user.name) {
            showToast("Server returned an unexpected response. Is MySQL running?", "danger");
            return;
          }
          state.userName = user.name;
          state.userEmail = user.email;
        } catch (err) {
          console.error("Login network error:", err);
          showToast("Cannot reach server. Make sure it is running on port 3000.", "danger");
          return;
        }
        state.isLoggedIn = true;
        
        localStorage.setItem("cf_is_logged_in", "true");
        localStorage.setItem("cf_user_name", state.userName);
        localStorage.setItem("cf_user_email", state.userEmail);

        // Fetch state from database (only user specific data)
        await syncState(true);
        
        showToast(`Signed in successfully as ${state.userName}`, "success");
        addActivity(`Logged in as ${state.userName} (${state.userEmail}).`);
        
        applyAuth();
        renderDashboard();
      } else {
        const name = document.getElementById("login-name").value;
        if (!name.trim()) {
          showToast("Please enter your name", "warning");
          return;
        }

        try {
          const res = await fetch(`${API_BASE}/api/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password: pass })
          });
          if (!res.ok) {
            const data = await parseJsonResponse(res);
            showToast(data?.error || "Signup failed", "danger");
            return;
          }
        } catch (err) {
          console.error("Signup network error:", err);
          showToast("Network error registering account", "danger");
          return;
        }
        
        state.userName = name;
        state.userEmail = email;
        state.isLoggedIn = true;
        
        localStorage.setItem("cf_is_logged_in", "true");
        localStorage.setItem("cf_user_name", state.userName);
        localStorage.setItem("cf_user_email", state.userEmail);

        // Fetch state from database (will be empty)
        await syncState(true);
        
        showToast(`Account created successfully! Welcome, ${state.userName}`, "success");
        addActivity(`Registered new account: ${state.userName} (${state.userEmail}).`);
        
        applyAuth();
        renderDashboard();
      }
    });
  }
  
  if (btnLogout) {
    btnLogout.addEventListener("click", () => {
      state.isLoggedIn = false;
      localStorage.setItem("cf_is_logged_in", "false");
      localStorage.removeItem("cf_user_name");
      localStorage.removeItem("cf_user_email");
      state.userName = "";
      state.userEmail = "";
      
      // Reset user-specific state to empty
      state.appliedJobIds = [];
      state.solvedDsaProblemIds = new Set();
      state.dsaProblemNotes = {};
      state.quizScores = {};
      state.hrAnswers = {};
      state.activityLog = [{ time: new Date().toLocaleTimeString(), msg: "Welcome to CareerForge. Let's start preparing!" }];

      showToast("Signed out successfully", "info");
      
      applyAuth();
      renderDashboard();
      renderPrepArena();
      renderDsaSheet();
      renderJobs();
    });
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  // Sync Theme
  const currentTheme = localStorage.getItem("cf_theme") || "dark";
  applyTheme(currentTheme);
  
  // Sync states with server
  await syncState();
  
  const themeToggle = document.getElementById("theme-toggle");
  const landingThemeToggle = document.getElementById("landing-theme-toggle");
  
  const handleThemeChange = () => {
    const activeTheme = document.documentElement.getAttribute("data-theme") || "dark";
    const newTheme = activeTheme === "dark" ? "light" : "dark";
    localStorage.setItem("cf_theme", newTheme);
    applyTheme(newTheme);
    showToast(`Switched to ${newTheme} mode`, "info");
    addActivity(`Switched app theme to ${newTheme} mode.`);
  };

  if (themeToggle) {
    themeToggle.addEventListener("click", handleThemeChange);
  }
  if (landingThemeToggle) {
    landingThemeToggle.addEventListener("click", handleThemeChange);
  }

  // Initialize Auth
  initAuthHandlers();
  applyAuth();

  initNavigation();
  initFormHandlers();
  
  // Render active default states
  renderDashboard();
  renderJobs();
  renderPrepArena();
  renderCompanies();
  renderDsaSheet();
  
  // Switch to default starting tab (Landing page)
  switchTab(state.activeTab);
  
  if (state.isLoggedIn) {
    showToast(`Welcome back, ${state.userName.split(" ")[0]}! Dashboard synchronized.`, "info");
  }
});
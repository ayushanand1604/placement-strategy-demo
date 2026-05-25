const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS and JSON body parsing
app.use(cors());
app.use(express.json());

// Serve static frontend files from current directory
app.use(express.static(__dirname));

// Mock Prep Arena constant (Static content served via API to lighten frontend)
const MOCK_PREP = {
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

// ----------------------------------------
// 1. API: AUTHENTICATION ROUTES
// ----------------------------------------

app.post('/api/auth/register', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email, and password are required' });
  }

  try {
    const dbPool = await db.getPool();

    await dbPool.query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password]
    );

    res.status(201).json({ name, email });
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ error: 'Email address already registered' });
    }
    console.error(err);
    res.status(500).json({ error: 'Failed to create account' });
  }
});

app.get('/api/auth/login', async (req, res) => {
  const { email, password } = req.query;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const dbPool = await db.getPool();

    const [rows] = await dbPool.query(
      'SELECT name, email FROM users WHERE email = ? AND password = ?',
      [email, password]
    );

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Login process failed' });
  }
});

// ----------------------------------------
// 2. API: JOBS AND APPLICATIONS ROUTES
// ----------------------------------------

app.get('/api/jobs', async (req, res) => {
  try {
    const dbPool = await db.getPool();
    const [rows] = await dbPool.query('SELECT * FROM jobs ORDER BY created_at DESC');
    
    // Parse requirements JSON back into arrays
    const formattedJobs = rows.map(job => ({
      ...job,
      requirements: typeof job.requirements === 'string' ? JSON.parse(job.requirements) : job.requirements
    }));

    res.json(formattedJobs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to load jobs' });
  }
});

app.post('/api/jobs', async (req, res) => {
  const { title, company, location, type, experience, salary, description, requirements } = req.body;
  if (!title || !company || !location || !type || !experience || !salary || !description || !requirements) {
    return res.status(400).json({ error: 'All fields are required to post a job' });
  }

  try {
    const dbPool = await db.getPool();
    const id = `job-${Date.now()}`;
    const logoInitials = company.substring(0, 2).toUpperCase();
    
    // Select a semi-random color matching the design styling
    const colors = ['#ff9900', '#4285f4', '#0668e1', '#f25022', '#e50914', '#1e3a8a', '#76b900', '#635bff'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const posted = 'Just now';

    await dbPool.query(
      'INSERT INTO jobs (id, title, company, location, type, experience, salary, posted, logoInitials, color, description, requirements) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [id, title, company, location, type, experience, salary, posted, logoInitials, color, description, JSON.stringify(requirements)]
    );

    res.status(201).json({ id, title, company, location, type, experience, salary, posted, logoInitials, color, description, requirements });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create job posting' });
  }
});

app.post('/api/jobs/apply', async (req, res) => {
  const { jobId, userEmail, name, email, github, resumeName, coverLetter } = req.body;
  if (!jobId || !userEmail || !name || !email || !github || !resumeName || !coverLetter) {
    return res.status(400).json({ error: 'All application details are required' });
  }

  try {
    const dbPool = await db.getPool();
    await dbPool.query(
      'INSERT INTO applications (job_id, user_email, name, email, github, resume_name, cover_letter) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [jobId, userEmail, name, email, github, resumeName, coverLetter]
    );

    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to record application' });
  }
});

// ----------------------------------------
// 3. API: COMPANY INFORMATION
// ----------------------------------------

app.get('/api/companies', async (req, res) => {
  try {
    const dbPool = await db.getPool();
    const [rows] = await dbPool.query('SELECT * FROM companies');

    const formattedCompanies = rows.map(comp => ({
      id: comp.id,
      name: comp.name,
      logoInitials: comp.logoInitials,
      themeColor: comp.themeColor,
      examPattern: typeof comp.examPattern === 'string' ? JSON.parse(comp.examPattern) : comp.examPattern,
      syllabus: typeof comp.syllabus === 'string' ? JSON.parse(comp.syllabus) : comp.syllabus,
      eligibility: typeof comp.eligibility === 'string' ? JSON.parse(comp.eligibility) : comp.eligibility,
      hiringTimeline: typeof comp.hiringTimeline === 'string' ? JSON.parse(comp.hiringTimeline) : comp.hiringTimeline
    }));

    res.json(formattedCompanies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch companies' });
  }
});

// ----------------------------------------
// 4. API: PREP ARENA AND DSA SHEETS
// ----------------------------------------

app.get('/api/prep', (req, res) => {
  res.json(MOCK_PREP);
});

app.get('/api/dsa', async (req, res) => {
  try {
    const dbPool = await db.getPool();
    const [rows] = await dbPool.query('SELECT * FROM dsa_problems');
    
    const dsaSheet = rows.map(row => ({
      id: row.id,
      title: row.title,
      difficulty: row.difficulty,
      topic: row.topic,
      link: row.link,
      desc: row.description
    }));

    res.json(dsaSheet);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch DSA problems' });
  }
});

app.post('/api/dsa/solve', async (req, res) => {
  const { userEmail, problemId, solved } = req.body;
  if (!userEmail || !problemId) {
    return res.status(400).json({ error: 'userEmail and problemId are required' });
  }

  try {
    const dbPool = await db.getPool();
    if (solved) {
      await dbPool.query(
        'INSERT IGNORE INTO dsa_solved (user_email, problem_id) VALUES (?, ?)',
        [userEmail, problemId]
      );
    } else {
      await dbPool.query(
        'DELETE FROM dsa_solved WHERE user_email = ? AND problem_id = ?',
        [userEmail, problemId]
      );
    }
    res.json({ success: true, solved });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update solved status' });
  }
});

app.post('/api/dsa/notes', async (req, res) => {
  const { userEmail, problemId, notes } = req.body;
  if (!userEmail || !problemId) {
    return res.status(400).json({ error: 'userEmail and problemId are required' });
  }

  try {
    const dbPool = await db.getPool();
    await dbPool.query(
      'INSERT INTO dsa_notes (user_email, problem_id, notes) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE notes = ?',
      [userEmail, problemId, notes || '', notes || '']
    );
    res.json({ success: true, notes });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save notes' });
  }
});

// ----------------------------------------
// 5. API: QUIZ AND HR TRACKING
// ----------------------------------------

app.post('/api/quizzes/score', async (req, res) => {
  const { userEmail, quizId, choice, isCorrect } = req.body;
  if (!userEmail || !quizId || choice === undefined || isCorrect === undefined) {
    return res.status(400).json({ error: 'userEmail, quizId, choice, and isCorrect are required' });
  }

  try {
    const dbPool = await db.getPool();
    await dbPool.query(
      'INSERT INTO quiz_scores (user_email, quiz_id, choice, is_correct) VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE choice = ?, is_correct = ?',
      [userEmail, quizId, choice, isCorrect, choice, isCorrect]
    );
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to record quiz answer' });
  }
});

app.post('/api/hr', async (req, res) => {
  const { userEmail, questionId, answer } = req.body;
  if (!userEmail || !questionId) {
    return res.status(400).json({ error: 'userEmail and questionId are required' });
  }

  try {
    const dbPool = await db.getPool();
    await dbPool.query(
      'INSERT INTO hr_answers (user_email, question_id, answer) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE answer = ?',
      [userEmail, questionId, answer || '', answer || '']
    );
    res.json({ success: true, answer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save HR response' });
  }
});

// ----------------------------------------
// 6. API: ACTIVITY LOGS
// ----------------------------------------

app.post('/api/activities', async (req, res) => {
  const { userEmail, msg } = req.body;
  if (!userEmail || !msg) {
    return res.status(400).json({ error: 'userEmail and message are required' });
  }

  try {
    const dbPool = await db.getPool();
    const time = new Date().toLocaleTimeString();
    await dbPool.query(
      'INSERT INTO activity_logs (user_email, msg, time) VALUES (?, ?, ?)',
      [userEmail, msg, time]
    );
    res.status(201).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save activity log' });
  }
});

// ----------------------------------------
// 7. API: STATE SYNCHRONIZATION
// ----------------------------------------

app.get('/api/sync', async (req, res) => {
  const { email } = req.query;
  if (!email) {
    return res.status(400).json({ error: 'User email query parameter is required' });
  }

  try {
    const dbPool = await db.getPool();
    
    // Fetch applied job IDs
    const [apps] = await dbPool.query('SELECT job_id FROM applications WHERE user_email = ?', [email]);
    const appliedJobIds = apps.map(app => app.job_id);

    // Fetch solved DSA problem IDs
    const [solvedDsa] = await dbPool.query('SELECT problem_id FROM dsa_solved WHERE user_email = ?', [email]);
    const solvedDsaProblemIds = solvedDsa.map(p => p.problem_id);

    // Fetch DSA notes
    const [dsaNotesRows] = await dbPool.query('SELECT problem_id, notes FROM dsa_notes WHERE user_email = ?', [email]);
    const dsaProblemNotes = {};
    dsaNotesRows.forEach(row => {
      dsaProblemNotes[row.problem_id] = row.notes;
    });

    // Fetch quiz scores
    const [quizRows] = await dbPool.query('SELECT quiz_id, choice, is_correct FROM quiz_scores WHERE user_email = ?', [email]);
    const quizScores = {};
    quizRows.forEach(row => {
      quizScores[row.quiz_id] = row.is_correct;
      quizScores[row.quiz_id + '_choice'] = row.choice;
    });

    // Fetch HR answers
    const [hrRows] = await dbPool.query('SELECT question_id, answer FROM hr_answers WHERE user_email = ?', [email]);
    const hrAnswers = {};
    hrRows.forEach(row => {
      hrAnswers[row.question_id] = row.answer;
    });

    // Fetch activity logs (limit to last 8)
    const [logs] = await dbPool.query('SELECT msg, time FROM activity_logs WHERE user_email = ? ORDER BY id DESC LIMIT 8', [email]);
    
    // Fetch custom jobs created (which would be any job with ID of type timestamp / not standard 'job-X')
    // Or we can just returns all custom jobs. Let's return custom jobs created by the user, but since jobs table holds all jobs, we can identify user custom jobs as any job with ID that doesn't start with "job-1", "job-2", "job-3", "job-4", "job-5", "job-6"
    const [jobsRows] = await dbPool.query("SELECT * FROM jobs WHERE id NOT IN ('job-1', 'job-2', 'job-3', 'job-4', 'job-5', 'job-6')");
    const customJobs = jobsRows.map(job => ({
      ...job,
      requirements: typeof job.requirements === 'string' ? JSON.parse(job.requirements) : job.requirements
    }));

    res.json({
      appliedJobIds,
      solvedDsaProblemIds,
      dsaProblemNotes,
      quizScores,
      hrAnswers,
      activityLog: logs.length > 0 ? logs : [{ time: new Date().toLocaleTimeString(), msg: "Welcome to CareerForge. Let's start preparing!" }],
      customJobs
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to synchronize state' });
  }
});

// Fallback HTML router (serve index.html for all other routes to enable frontend navigation)
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Express server and initialize database tables
async function startServer() {
  try {
    await db.initDB();
    app.listen(PORT, () => {
      console.log(`==================================================`);
      console.log(`CareerForge Server running on http://localhost:${PORT}`);
      console.log(`==================================================`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

startServer();
import { PracticalProject, SideQuest, CsExplorationField, BossBattle } from '../types';

export const PRACTICAL_PROJECTS: PracticalProject[] = [
  {
    id: 'proj-01-calc',
    title: 'CLI Number Analyzer & Matrix Calculator',
    tier: 'MICRO',
    level: 1,
    subjectConnection: 'MTH168',
    timeEstimate: '1–3 Hours',
    description: 'A pure C++ terminal tool that takes matrix dimensions and performs Matrix Addition, Determinant, Transpose, and Scalar Multiplication.',
    skills: ['C++ Basics', '2D Arrays', 'Loops & Functions', 'Input Validation'],
    features: [
      'Interactive menu-driven CLI interface',
      '2x2 and 3x3 determinant calculation with cofactor expansion',
      'Matrix transpose and scalar multiplication'
    ],
    githubRepoTemplate: 'github.com/sangamkunwar/matrix-analyzer-cpp',
    whatYouWillLearn: 'Direct translation of Mathematics II matrix theory into executable C++ algorithms.',
    completed: false
  },
  {
    id: 'proj-02-bank',
    title: 'Bank Account & Transaction Simulator',
    tier: 'MICRO',
    level: 2,
    subjectConnection: 'CSC166',
    timeEstimate: '2–3 Hours',
    description: 'An OOP-driven banking simulation class with encapsulated balances, deposit, withdraw, static transaction count, and copy constructors.',
    skills: ['Encapsulation', 'Constructors', 'Static Members', 'Data Validation'],
    features: [
      'Account class with private accountNumber, holderName, balance',
      'Static variable tracking total bank assets across all accounts',
      'Safe withdrawal checks preventing negative balances'
    ],
    githubRepoTemplate: 'github.com/sangamkunwar/bank-simulator-oop',
    whatYouWillLearn: 'True object-oriented thinking: preventing external data tampering and modeling real-world business entities.',
    completed: false
  },
  {
    id: 'proj-03-student-db',
    title: 'BSc CSIT Student Record Database (Binary Files)',
    tier: 'MINI',
    level: 3,
    subjectConnection: 'CSC166',
    timeEstimate: '1–2 Days',
    description: 'A binary file-based student management system in C++ using `std::fstream`, `read()`, and `write()` to store persistent student marks and compute CGPA.',
    skills: ['Binary File I/O', 'Object Serialization', 'File Pointers (seekg/seekp)', 'CRUD Operations'],
    features: [
      'Create, Read, Update, Delete (CRUD) student records in a persistent binary file',
      'Search student by roll number using stream pointer seekg()',
      'Calculate TU grade and distinction percentage automatically'
    ],
    githubRepoTemplate: 'github.com/sangamkunwar/csit-student-records-cpp',
    whatYouWillLearn: 'Permanent data persistence on disk without third-party databases, mastering TU file-handling board exam requirements.',
    completed: false
  },
  {
    id: 'proj-04-8085-emu',
    title: '8085 Microprocessor Instruction Simulator',
    tier: 'MINI',
    level: 4,
    subjectConnection: 'CSC167',
    timeEstimate: '2–3 Days',
    description: 'A software emulator in C++ simulating 8085 registers (A, B, C, D, E, H, L), flag register, and executing basic instructions like MVI, MOV, ADD, SUB, and JNZ.',
    skills: ['OOP Class Hierarchy', 'Bitwise Operations', 'Computer Architecture', 'Instruction Decoding'],
    features: [
      '8085 CPU class containing 8-bit registers and 16-bit PC/SP',
      'Flag register updater for S, Z, P, and CY after arithmetic',
      'Step-by-step instruction execution with register dump output'
    ],
    githubRepoTemplate: 'github.com/sangamkunwar/8085-cpu-simulator-cpp',
    whatYouWillLearn: 'Deep intimate understanding of microprocessor hardware execution cycles by building one in software.',
    completed: false
  },
  {
    id: 'proj-05-stats-engine',
    title: 'Statistical Distribution & Curve Fitting Engine',
    tier: 'SIDE',
    level: 5,
    subjectConnection: 'STA169',
    timeEstimate: '3–5 Days',
    description: 'A comprehensive C++ mathematical tool that calculates Mean, Variance, Karl Pearson Correlation r, Fits linear regression lines, and computes Standard Normal Z-probabilities.',
    skills: ['C++ OOP', 'Mathematical Modeling', 'Numerical Methods', 'File Reporting'],
    features: [
      'Reads bivariate CSV data and outputs regression line Y = a + bX',
      'Computes Karl Pearson correlation and Spearman rank correlation',
      'Standard Normal distribution Z-table numerical approximation'
    ],
    githubRepoTemplate: 'github.com/sangamkunwar/statistical-engine-cpp',
    whatYouWillLearn: 'Combines Statistics I, Mathematics II, and C++ OOP into a portfolio-grade computational tool.',
    completed: false
  }
];

export const SIDE_QUESTS: SideQuest[] = [
  {
    id: 'sq-01',
    title: 'Side Quest 01: Solve 3 LeetCode/Codeforces Beginner Problems',
    category: 'Coding',
    xpReward: 30,
    description: 'Solve 3 foundational array or string problems in C++ on LeetCode (e.g. Two Sum, Valid Palindrome) completely without AI.',
    completed: false
  },
  {
    id: 'sq-02',
    title: 'Side Quest 02: Build a C++ CLI Utility',
    category: 'Coding',
    xpReward: 35,
    description: 'Build a small command-line tool (e.g., word counter, unit converter, or todo list) that accepts command-line arguments (argc, argv).',
    completed: false
  },
  {
    id: 'sq-03',
    title: 'Side Quest 03: Read One Seminal Computer Science Article',
    category: 'Theory',
    xpReward: 25,
    description: 'Read an influential article such as Dijkstra\'s "Go To Statement Considered Harmful" or Turing\'s computing machine foundations.',
    completed: false
  },
  {
    id: 'sq-04',
    title: 'Side Quest 04: Watch One High-Quality University CS Lecture',
    category: 'Exploration',
    xpReward: 25,
    description: 'Watch one full lecture from MIT 6.006 (Algorithms) or Harvard CS50 on YouTube and write a 5-bullet summary.',
    completed: false
  },
  {
    id: 'sq-05',
    title: 'Side Quest 05: Explain a Concept Without Looking at Notes',
    category: 'Theory',
    xpReward: 30,
    description: 'Use the Feynman technique: Explain the 8085 Demultiplexing circuit or Virtual Base Class out loud in plain English.',
    completed: false
  },
  {
    id: 'sq-06',
    title: 'Side Quest 06: Push an Improvement to GitHub',
    category: 'System',
    xpReward: 30,
    description: 'Create a clean README.md with markdown headings, screenshots, and instructions for your C++ repository on GitHub.',
    completed: false
  },
  {
    id: 'sq-07',
    title: 'Side Quest 07: Learn 5 Essential Linux Terminal Commands',
    category: 'Linux',
    xpReward: 25,
    description: 'Practice `ls -la`, `grep -rnw`, `find`, `chmod +x`, and `htop` inside a Linux terminal or WSL environment.',
    completed: false
  },
  {
    id: 'sq-08',
    title: 'Side Quest 08: Explore Computer Networks Basics',
    category: 'Exploration',
    xpReward: 25,
    description: 'Use the `ping` and `traceroute` command to inspect packets routed from Nepal to a global server (e.g. 8.8.8.8).',
    completed: false
  },
  {
    id: 'sq-09',
    title: 'Side Quest 09: Explore Databases & Relational Schema',
    category: 'Exploration',
    xpReward: 25,
    description: 'Design an Entity-Relationship (ER) diagram for a University CSIT department using 3 connected tables.',
    completed: false
  },
  {
    id: 'sq-10',
    title: 'Side Quest 10: Explore AI/Machine Learning Foundations',
    category: 'Exploration',
    xpReward: 25,
    description: 'Understand how Linear Regression from Statistics I and Matrix Multiplication from Math II form the basis of neural network training.',
    completed: false
  },
  {
    id: 'sq-11',
    title: 'Side Quest 11: Explore Cybersecurity & Cryptography',
    category: 'Exploration',
    xpReward: 30,
    description: 'Manually encrypt and decrypt a message using RSA with small primes p=3, q=11, and e=3 using your Discrete Math knowledge.',
    completed: false
  },
  {
    id: 'sq-12',
    title: 'Side Quest 12: Explore Systems Programming with Pointers',
    category: 'System',
    xpReward: 30,
    description: 'Write a C++ program that prints the exact hexadecimal memory addresses of stack vs heap allocated variables.',
    completed: false
  },
  {
    id: 'sq-13',
    title: 'Side Quest 13: Build a Tiny Web Tool',
    category: 'Coding',
    xpReward: 35,
    description: 'Create a simple single-page HTML/JavaScript calculator for TU BSc CSIT GPA calculation.',
    completed: false
  },
  {
    id: 'sq-14',
    title: 'Side Quest 14: Read Official Documentation',
    category: 'Theory',
    xpReward: 30,
    description: 'Read the cppreference.com official documentation for `std::vector` and `std::ifstream` instead of watching a video tutorial.',
    completed: false
  }
];

export const CS_EXPLORATION_MAP: CsExplorationField[] = [
  {
    id: 'exp-dsa',
    name: 'Data Structures & Algorithms (DSA)',
    icon: 'BrainCircuit',
    whatIsIt: 'The study of organizing data efficiently (arrays, trees, graphs) and computational procedures for solving problems with optimal time/space complexity.',
    whyDoesItMatter: 'Forms the backbone of technical software interviews, high-scale engineering, and problem-solving.',
    prerequisites: ['C / C++ Programming', 'Discrete Structures (CSC165)'],
    beginnerProject: 'Implement custom Linked List, Stack, and Queue from scratch in C++.',
    intermediateProject: 'Build a Pathfinding Visualizer implementing Dijkstra and A* search.',
    toolsAndLanguages: ['C++', 'Java', 'Python', 'LeetCode', 'Codeforces'],
    freeResources: [
      { title: 'NeetCode Roadmap', url: 'https://neetcode.io/roadmap' },
      { title: 'MIT 6.006 Introduction to Algorithms', url: 'https://ocw.mit.edu' }
    ],
    careerRoles: ['Software Engineer', 'Algorithmic Trader', 'Systems Architect'],
    connectionToCsitSem2: 'Direct continuation of Discrete Structures (CSC165 Graph Theory) and prerequisite for Semester III Data Structures (CSC211).'
  },
  {
    id: 'exp-backend',
    name: 'Backend Engineering & Distributed Systems',
    icon: 'Cpu',
    whatIsIt: 'Building the server-side logic, APIs, background jobs, caching, and data pipelines that power modern web and mobile applications.',
    whyDoesItMatter: 'Every digital service requires robust backends capable of handling millions of concurrent user requests safely.',
    prerequisites: ['Object-Oriented Programming (CSC166)', 'Basic HTTP/Networking'],
    beginnerProject: 'Build a REST API in Node.js/Express or Go with user authentication.',
    intermediateProject: 'Build a high-performance URL Shortener with Redis caching and PostgreSQL.',
    toolsAndLanguages: ['Go', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    freeResources: [
      { title: 'Roadmap.sh Backend', url: 'https://roadmap.sh/backend' },
      { title: 'Designing Data-Intensive Applications (Book)', url: 'https://dataintensive.net' }
    ],
    careerRoles: ['Backend Engineer', 'API Architect', 'Cloud Platform Developer'],
    connectionToCsitSem2: 'OOP concepts (encapsulation, abstraction) in CSC166 are used to architect enterprise backend microservices.'
  },
  {
    id: 'exp-systems',
    name: 'Systems Programming & Operating Systems',
    icon: 'Cpu',
    whatIsIt: 'Low-level programming interacting directly with computer hardware, memory management, kernel drivers, and system calls.',
    whyDoesItMatter: 'Powers operating systems (Linux, Windows), database storage engines, browsers, and game engines.',
    prerequisites: ['C Programming', 'Microprocessor (CSC167)', 'Computer Architecture'],
    beginnerProject: 'Build a custom Unix shell in C capable of executing commands and piping.',
    intermediateProject: 'Write a toy operating system kernel that boots in QEMU with a custom print driver.',
    toolsAndLanguages: ['C', 'C++', 'Rust', 'x86 Assembly', 'Linux Kernel'],
    freeResources: [
      { title: 'Operating Systems: Three Easy Pieces (OSTEP)', url: 'https://pages.cs.wisc.edu/~remzi/OSTEP/' },
      { title: 'Writing an OS in Rust', url: 'https://os.phil-opp.com/' }
    ],
    careerRoles: ['Systems Programmer', 'Kernel Developer', 'Embedded Firmware Engineer'],
    connectionToCsitSem2: 'Direct extension of Microprocessor (CSC167 registers, memory buses, and interrupts).'
  },
  {
    id: 'exp-aiml',
    name: 'Artificial Intelligence & Machine Learning',
    icon: 'Sparkles',
    whatIsIt: 'Developing mathematical algorithms that learn patterns from empirical data to make predictions, generate text, or recognize objects.',
    whyDoesItMatter: 'The defining technological shift of modern computing, automating cognitive tasks across every industry.',
    prerequisites: ['Mathematics II (MTH168 Linear Algebra)', 'Statistics I (STA169)', 'Python'],
    beginnerProject: 'Implement Linear Regression and Logistic Regression from scratch in Python using NumPy.',
    intermediateProject: 'Train a Convolutional Neural Network (CNN) on handwritten digits using PyTorch.',
    toolsAndLanguages: ['Python', 'PyTorch', 'NumPy', 'Scikit-Learn', 'Jupyter'],
    freeResources: [
      { title: 'Fast.ai Practical Deep Learning', url: 'https://course.fast.ai/' },
      { title: 'Andrew Ng Machine Learning Specialization', url: 'https://deeplearning.ai' }
    ],
    careerRoles: ['Machine Learning Engineer', 'Data Scientist', 'AI Research Scientist'],
    connectionToCsitSem2: 'Linear Algebra (MTH168 matrices, eigenvectors) and Statistics I (STA169 probability, normal distributions) are the exact mathematical foundation of ML.'
  },
  {
    id: 'exp-cybersec',
    name: 'Cybersecurity & Cryptography',
    icon: 'BrainCircuit',
    whatIsIt: 'Protecting computer systems, networks, and data from adversarial attacks, reverse engineering, and unauthorized access.',
    whyDoesItMatter: 'Global infrastructure depends on secure protocols to prevent cyber warfare, data theft, and financial fraud.',
    prerequisites: ['Discrete Structures (CSC165 Number Theory)', 'Networking', 'C Programming'],
    beginnerProject: 'Solve beginner Capture The Flag (CTF) challenges on OverTheWire Bandit.',
    intermediateProject: 'Build a Port Scanner and Network Packet Sniffer in C++ using raw sockets.',
    toolsAndLanguages: ['Linux', 'Wireshark', 'Python', 'C', 'GDB / Ghidra'],
    freeResources: [
      { title: 'OverTheWire Wargames', url: 'https://overthewire.org/wargames/' },
      { title: 'PicoCTF', url: 'https://picoctf.org/' }
    ],
    careerRoles: ['Security Analyst', 'Penetration Tester', 'Security Engineer'],
    connectionToCsitSem2: 'RSA encryption relies entirely on Discrete Structures (CSC165 Extended Euclidean and Modular Arithmetic).'
  },
  {
    id: 'exp-databases',
    name: 'Databases & Data Engineering',
    icon: 'BookOpen',
    whatIsIt: 'The design, optimization, and scaling of relational (SQL) and non-relational (NoSQL) database engines.',
    whyDoesItMatter: 'Data is the most valuable asset of modern enterprises; managing integrity and sub-millisecond query access is vital.',
    prerequisites: ['Discrete Structures (CSC165 Relations & Set Theory)', 'C++ File Handling'],
    beginnerProject: 'Design a normalized database schema with complex SQL queries and views.',
    intermediateProject: 'Build a mini B-Tree storage engine in C++ with read/write disk persistence.',
    toolsAndLanguages: ['PostgreSQL', 'MySQL', 'Redis', 'SQL', 'C++'],
    freeResources: [
      { title: 'CMU 15-445 Database Systems', url: 'https://15445.courses.cs.cmu.edu/' },
      { title: 'Use The Index, Luke!', url: 'https://use-the-index-luke.com/' }
    ],
    careerRoles: ['Database Administrator (DBA)', 'Data Engineer', 'Storage Systems Developer'],
    connectionToCsitSem2: 'Discrete Structures (CSC165 Relations, Cartesian products) directly powers relational database algebra.'
  }
];

export const BOSS_BATTLES: BossBattle[] = [
  {
    week: 1,
    title: 'Boss Battle 1: Foundational Sprint (Day 10)',
    description: 'Solve 20 foundational questions across all 5 subjects under timed test conditions without looking at notes.',
    milestoneTasks: [
      'Solve 4 Discrete Structure questions (Sets, Extended Euclidean)',
      'Write 2 C++ programs from scratch (Classes, Constructors)',
      'Draw the 8085 Demultiplexing circuit and label all pins',
      'Solve 2 RREF Gaussian Elimination systems',
      'Calculate grouped data Mean, Median, and Quartiles'
    ],
    xpReward: 50,
    isUnlocked: true,
    isCompleted: false
  },
  {
    week: 2,
    title: 'Boss Battle 2: OOP & Microprocessor Sprint (Day 17)',
    description: 'Construct a complete C++ Operator Overloading program and solve 8085 Opcode Fetch timing diagrams.',
    milestoneTasks: [
      'Overload binary + operator for Time or Complex class',
      'Draw timing diagram for MVI A, byte with all 7 T-states',
      'Prove a summation identity using Mathematical Induction',
      'Compute LU Factorization for a 3x3 matrix',
      'Solve a factory Bayes Theorem problem'
    ],
    xpReward: 60,
    isUnlocked: false,
    isCompleted: false
  },
  {
    week: 3,
    title: 'Boss Battle 3: Midpoint Mastery & Assembly Sprint (Day 25)',
    description: 'Write an 8085 Assembly bubble sort program and execute the Gram-Schmidt process on paper.',
    milestoneTasks: [
      'Write 8085 assembly program to sort an array in ascending order',
      'Trace Dijkstra algorithm step-by-step with complete distance table',
      'Diagonalize a 2x2 matrix (find eigenvalues and eigenvectors)',
      'Write polymorphic C++ Shape hierarchy with pure virtual area()',
      'Solve Normal Distribution Z-table word problems'
    ],
    xpReward: 75,
    isUnlocked: false,
    isCompleted: false
  },
  {
    week: 4,
    title: 'Boss Battle 4: File Handling & Board Paper Simulation (Day 32)',
    description: 'Solve a complete 3-hour TU 2082 board paper for Discrete Structure and OOP C++ on paper.',
    milestoneTasks: [
      'Solve 2082 Discrete Structures Section A and Section B',
      'Write binary file read/write student program in C++',
      'Draw 8086 BIU/EU internal architecture and explain pipelining',
      'Find basis for Null space and Column space of a 4x5 matrix',
      'Calculate Pearson r and regression line equation'
    ],
    xpReward: 85,
    isUnlocked: false,
    isCompleted: false
  },
  {
    week: 5,
    title: 'Boss Battle 5: Full Mixed-Subject Sprint (Day 39)',
    description: 'Rapid-fire drill: Answer 10 guaranteed TU questions across all 5 subjects under 2 hours.',
    milestoneTasks: [
      'Re-solve every problem logged in your Mistake Notebook',
      'Write all key theorems on blank flashcard sheets',
      'Achieve 100% accuracy on 8085 interrupt priority and vectors',
      'Zero arithmetic errors on Gram-Schmidt orthonormalization'
    ],
    xpReward: 100,
    isUnlocked: false,
    isCompleted: false
  },
  {
    week: 6,
    title: 'FINAL BOSS: Complete Semester II Mock Exam (Days 41–45)',
    description: 'The ultimate culmination: Complete full 3-hour board mock exams for all 5 subjects under official TU examination rules.',
    milestoneTasks: [
      'Complete 3-Hour Discrete Structure Mock Exam (60 Marks)',
      'Complete 3-Hour OOP in C++ Mock Exam (60 Marks)',
      'Complete 3-Hour Microprocessor Mock Exam (60 Marks)',
      'Complete 3-Hour Mathematics II Mock Exam (80 Marks)',
      'Complete 3-Hour Statistics I Mock Exam (60 Marks)'
    ],
    xpReward: 250,
    isUnlocked: false,
    isCompleted: false
  }
];

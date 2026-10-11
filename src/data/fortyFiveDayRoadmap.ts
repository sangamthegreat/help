import { FortyFiveDayPlan } from '../types';

export const INITIAL_45_DAY_ROADMAP: FortyFiveDayPlan[] = [
  // ==========================================
  // PHASE 1: DAYS 1 - 10 | FOUNDATION + SYLLABUS MAPPING
  // ==========================================
  {
    day: 1,
    phase: 1,
    phaseName: 'Phase 1: Foundation + Syllabus Mapping',
    phaseGoal: 'Establish non-negotiable study habits, map out all 5 subjects, master Discrete Sets & C++ Class syntax.',
    theme: 'Arc Ignition // Sets, Subsets & C++ OOP Mental Model',
    targetHours: { minimum: 2.5, normal: 5.0, high: 7.0 },
    dailyChallenge: 'Write out your 45-Day Winter Arc commitment contract. Code your very first C++ class with private variables and public getters/setters without using AI.',
    quote: 'The secret of getting ahead is getting started. Do not wait for motivation; build the discipline architecture first.',
    completed: false,
    spacedRevisionDue: ['R0: Review Sets & C++ Class memory layout before sleep'],
    sideQuest: 'Learn 3 essential Linux commands for CS students: ls -la, grep -rnw, and chmod +x.',
    codingHabit: {
      task: 'Create a C++ Student class with roll, name, and 3 subject marks. Calculate total and grade using member functions.',
      difficulty: 'Beginner',
      durationMinutes: 45
    },
    subjects: [
      {
        subjectCode: 'CSC165',
        unit: 1,
        topic: 'Sets, Subsets, Power sets & Set Operations',
        theory: {
          topicTitle: 'Sets, Subsets and Cardinality in Computer Science',
          whatIsIt: 'A set is an unordered collection of distinct objects. A power set P(A) is the set of all subsets of A with cardinality 2^n.',
          whyDoesItExist: 'Provides the formal mathematical language for database relational algebra, type theory, and boolean logic.',
          howDoesItWork: 'Set operations (Union ∪, Intersection ∩, Difference -, Complement A\') follow boolean truth-value laws.',
          whereIsItUsedInCS: 'SQL JOIN operations (cartesian product, intersection), bitmasking in algorithms, and formal language theory.',
          keyDefinitions: [
            'Power Set: Set of all subsets, |P(A)| = 2^|A|',
            'Cartesian Product: A × B = {(a,b) | a ∈ A ∧ b ∈ B}'
          ],
          importantFormulasOrDiagrams: [
            '|A ∪ B| = |A| + |B| - |A ∩ B|',
            'Bit string representation: Universal set U mapped to 0/1 bits in byte arrays'
          ],
          commonMistakes: [
            'Counting duplicate elements in a set.',
            'Forgetting that the empty set ∅ is a subset of every set.'
          ],
          simpleExample: 'If A = {1, 2}, P(A) = {∅, {1}, {2}, {1, 2}} with 2^2 = 4 elements.',
          csApplicationExample: 'In competitive programming, representing {0, 2, 3} as binary integer (1<<0 | 1<<2 | 1<<3) = 1101_2 = 13 for O(1) set operations.'
        },
        activeRecall: {
          definitionQuestions: ['Define a power set and state its cardinality formula for an n-element set.'],
          explainQuestions: ['How is a set represented inside computer memory using a bit string?'],
          whyQuestions: ['Why does the power set of an empty set have 1 element?'],
          differenceQuestions: ['Differentiate between subset (⊆) and proper subset (⊂).'],
          numericalOrCodeQuestions: ['Find the Cartesian product A × B when A = {x, y} and B = {1, 2, 3}.']
        },
        practiceQuestions: {
          level1Easy: 'Define subset and power set with examples.',
          level2Medium: 'Let A = {1, 2, 3, 4} and B = {3, 4, 5, 6}. Find A ∪ B, A ∩ B, A - B, and B - A.',
          level3Exam: 'TU 2081: Show that for any two finite sets A and B, |A ∪ B| = |A| + |B| - |A ∩ B|.',
          level4Challenge: 'Write an algorithm to generate all 2^n subsets of an n-element array using bitwise shift operations.'
        },
        tuPyqTarget: 'TU 2080 Set theory representation past question',
        codingTask: 'Implement Set Union and Intersection using standard C++ arrays.'
      },
      {
        subjectCode: 'CSC166',
        unit: 1,
        topic: 'OOP Paradigm vs POP & C++ Basics',
        theory: {
          topicTitle: 'Object-Oriented Programming vs Procedure-Oriented Programming',
          whatIsIt: 'OOP organizes software design around data (objects) rather than functions and logic. POP executes step-by-step procedural subroutines.',
          whyDoesItExist: 'POP suffers from global data vulnerability and poor scalability in large software systems. OOP ties data directly to the functions that operate on it.',
          howDoesItWork: 'Combines Encapsulation, Abstraction, Inheritance, and Polymorphism through user-defined types (classes).',
          whereIsItUsedInCS: 'Game development (Unreal Engine C++), operating system window managers, and large-scale backend architectures.',
          keyDefinitions: [
            'Class: A blueprint/user-defined data type describing attributes and behaviors.',
            'Object: An instance of a class occupying physical memory.'
          ],
          importantFormulasOrDiagrams: [
            'Memory layout: Object contains member variables; member functions are shared in code segment.',
            'Access specifiers: private (within class only), public (accessible anywhere), protected (derived classes).'
          ],
          commonMistakes: [
            'Forgetting the semicolon `;` at the end of class definition.',
            'Declaring data members public when learning OOP.'
          ],
          simpleExample: 'class Car { private: int speed; public: void setSpeed(int s) { speed = s; } };',
          csApplicationExample: 'In a game engine, creating a Player class holding health and transform coordinates, preventing external scripts from corrupting health.'
        },
        activeRecall: {
          definitionQuestions: ['Define encapsulation and data abstraction in your own words.'],
          explainQuestions: ['Explain the role of the Scope Resolution Operator (::) in C++.'],
          whyQuestions: ['Why does C++ have reference variables (&) while C only has pointers?'],
          differenceQuestions: ['State 4 core differences between POP (e.g. C) and OOP (e.g. C++).'],
          numericalOrCodeQuestions: ['What is the output of dynamic memory allocation: int* p = new int(25); cout << *p; delete p;?']
        },
        practiceQuestions: {
          level1Easy: 'What are the main features of Object-Oriented Programming?',
          level2Medium: 'Write a C++ program defining a Rectangle class with length and breadth, and member function area().',
          level3Exam: 'TU 2081: Differentiate between POP and OOP with examples. Explain inline functions.',
          level4Challenge: 'Design a dynamic SafeArray class in C++ that allocates an integer array on heap and prevents out-of-bounds indexing.'
        },
        tuPyqTarget: 'TU 2079/2081 POP vs OOP & Inline function past questions',
        codingTask: 'Write a C++ class with private members and test getter/setter validation.'
      }
    ]
  },
  {
    day: 2,
    phase: 1,
    phaseName: 'Phase 1: Foundation + Syllabus Mapping',
    phaseGoal: 'Master Functions & PIE in Discrete; understand 8085 Microprocessor Bus Architecture.',
    theme: 'Discrete Functions & 8085 Microprocessor Bus Demuxing',
    targetHours: { minimum: 2.5, normal: 5.0, high: 7.0 },
    dailyChallenge: 'Draw the 8085 Pin Diagram completely from memory on blank paper, including pin numbers for ALE, AD0-AD7, and IO/M.',
    quote: 'Discipline is choosing between what you want now and what you want most.',
    completed: false,
    spacedRevisionDue: ['R1: Quick 5-min self-quiz on Day 1 Sets & C++ Class syntax'],
    sideQuest: 'Inspect your CPU specifications using terminal tools (lscpu on Linux or CPU-Z on Windows).',
    codingHabit: {
      task: 'Implement function composition (f o g)(x) in C++ using higher-order functions or lambda expressions.',
      difficulty: 'Intermediate',
      durationMinutes: 45
    },
    subjects: [
      {
        subjectCode: 'CSC165',
        unit: 1,
        topic: 'Injective, Surjective & Bijective Functions, Inverse Functions',
        theory: {
          topicTitle: 'Function Classifications & Invertibility',
          whatIsIt: 'A function f: A -> B maps each element of A to exactly one element of B. Injective = 1-1, Surjective = Onto, Bijective = both.',
          whyDoesItExist: 'Defines one-to-one mappings critical for hash tables without collisions, cryptographic ciphers, and lossless data encoding.',
          howDoesItWork: 'To prove f is 1-1: assume f(x1) = f(x2) and prove x1 = x2. To prove onto: for any y in codomain, find x such that f(x) = y.',
          whereIsItUsedInCS: 'Cryptographic hash functions (require collision resistance), compiler symbol tables, and bijective cipher transformations.',
          keyDefinitions: [
            'Injective (1-1): ∀a, b ∈ A, f(a) = f(b) ⇒ a = b',
            'Surjective (Onto): ∀b ∈ B, ∃a ∈ A such that f(a) = b',
            'Bijective: Both injective and surjective; uniquely guarantees inverse f^-1 exists'
          ],
          importantFormulasOrDiagrams: [
            'Floor function ⌊x⌋: greatest integer ≤ x',
            'Ceiling function ⌈x⌉: least integer ≥ x'
          ],
          commonMistakes: [
            'Confusing codomain with range (range is the actual subset of codomain hit by f).',
            'Forgetting to check whether the inverse function formula maps into the declared domain.'
          ],
          simpleExample: 'f(x) = 2x + 3 from R to R is bijective with inverse f^-1(y) = (y-3)/2.',
          csApplicationExample: 'In database systems, primary key mappings to rows are strictly bijective.'
        },
        activeRecall: {
          definitionQuestions: ['Define a bijective function and state the condition for a function to have an inverse.'],
          explainQuestions: ['Why is f(x) = x^2 not injective when defined on Real numbers R?'],
          whyQuestions: ['Why does a ceiling function ⌈N/k⌉ appear in the Generalized Pigeonhole Principle?'],
          differenceQuestions: ['Distinguish between injective and surjective functions with arrow diagrams.'],
          numericalOrCodeQuestions: ['Let f: R -> R, f(x) = 5x - 8. Find f^-1(x).']
        },
        practiceQuestions: {
          level1Easy: 'State the formal definition of one-to-one and onto functions.',
          level2Medium: 'Let f: R -> R be defined by f(x) = 4x - 5. Show that f is invertible and find f^-1(x).',
          level3Exam: 'TU 2081: Define bijective function. Let f: R -> R be defined by f(x) = 3x - 7. Prove f is bijective and find its inverse.',
          level4Challenge: 'Prove that the composition of two bijective functions g o f is also bijective.'
        },
        tuPyqTarget: 'TU 2081 Invertible function past question',
        codingTask: 'Write a C++ program that computes ceiling and floor of floating point values without using math.h.'
      },
      {
        subjectCode: 'CSC167',
        unit: 1,
        topic: 'Microprocessor System Bus & Architecture Organization',
        theory: {
          topicTitle: 'System Buses: Address, Data, and Control',
          whatIsIt: 'A microprocessor is an integrated semiconductor CPU on a single chip. It communicates with memory and I/O devices via the system bus.',
          whyDoesItExist: 'Centralizes control, arithmetic, and instruction decoding, allowing programmable hardware execution.',
          howDoesItWork: 'The address bus selects memory/IO locations; the data bus carries bytes; the control bus synchronizes read/write operations.',
          whereIsItUsedInCS: 'Underlies every computer architecture, microcontroller (Arduino/ESP32), and modern x86/ARM processors.',
          keyDefinitions: [
            'Address Bus: 16-bit unidirectional bus (A0-A15) addressing 2^16 = 64 KB memory space.',
            'Data Bus: 8-bit bidirectional bus (D0-D7) transferring data bytes.',
            'Control Bus: Asynchronous and synchronous pulses (RD\', WR\', ALE, IO/M\').'
          ],
          importantFormulasOrDiagrams: [
            'Total Addressable Memory = 2^(Number of Address Lines) = 2^16 = 65,536 Bytes = 64 KB',
            'Bus diagram: CPU <=== Address ===> Memory/IO (Unidirectional from CPU); CPU <===> Data <===> Memory/IO (Bidirectional)'
          ],
          commonMistakes: [
            'Saying the address bus is bidirectional.',
            'Confusing 8-bit CPU (data bus width) with 16-bit address capability.'
          ],
          simpleExample: 'To read a byte at 2000H, the CPU places 2000H on address lines and pulses MEMR\' low.',
          csApplicationExample: 'Operating system page faults occur when the memory management unit signals that the address on the bus is unmapped.'
        },
        activeRecall: {
          definitionQuestions: ['What is a system bus and what are its three constituent buses?'],
          explainQuestions: ['Why is the address bus unidirectional while the data bus is bidirectional?'],
          whyQuestions: ['Why does an 8085 microprocessor have a memory limit of exactly 64 KB?'],
          differenceQuestions: ['Differentiate between Von Neumann architecture and Harvard architecture.'],
          numericalOrCodeQuestions: ['If a processor has 20 address lines, calculate its maximum memory capacity in Megabytes.']
        },
        practiceQuestions: {
          level1Easy: 'What are the main functions of a microprocessor?',
          level2Medium: 'Explain the roles of address bus, data bus, and control bus in 8085.',
          level3Exam: 'TU 2080: What is a microprocessor? Explain the functions and directional properties of address, data, and control bus in 8085.',
          level4Challenge: 'Explain how tristate buffers enable multiple chips to share a single system data bus without electrical contention.'
        },
        tuPyqTarget: 'TU 2080 Bus architecture short question',
        codingTask: 'Write a C++ program that simulates an 8-bit accumulator register and shows binary flags after an addition.'
      }
    ]
  },
  {
    day: 3,
    phase: 1,
    phaseName: 'Phase 1: Foundation + Syllabus Mapping',
    phaseGoal: 'Linear algebra row reductions in Math II; descriptive data presentation in Stats I.',
    theme: 'Gaussian Elimination (RREF) & Statistics Data Scales',
    targetHours: { minimum: 2.5, normal: 5.0, high: 7.0 },
    dailyChallenge: 'Solve a 3x3 system of linear equations completely to Reduced Row Echelon Form (RREF) on paper with zero arithmetic errors.',
    quote: 'Linear algebra is the foundational grammar of modern computing and artificial intelligence.',
    completed: false,
    spacedRevisionDue: ['R2: Review Day 1 Sets & C++ Class memory representation'],
    sideQuest: 'Explore how 3D rotation matrices work under the hood in video game rendering engines.',
    codingHabit: {
      task: 'Implement a 2D matrix multiplication routine in C++ with row/column dimension validation.',
      difficulty: 'Beginner',
      durationMinutes: 45
    },
    subjects: [
      {
        subjectCode: 'MTH168',
        unit: 1,
        topic: 'Systems of Linear Equations, Row Reduction & Echelon Forms',
        theory: {
          topicTitle: 'Gaussian Elimination and Reduced Row Echelon Form (RREF)',
          whatIsIt: 'A systematic method for solving systems of m linear equations in n variables using elementary row operations on augmented matrices.',
          whyDoesItExist: 'Direct algebraic substitution fails on large systems. Echelon reduction provides an algorithmic, deterministic solution path.',
          howDoesItWork: 'Apply 3 elementary row operations: Row replacement, Row swap, and Non-zero scalar multiplication until each leading 1 has zeros above and below.',
          whereIsItUsedInCS: 'Computer graphics transformations, circuit mesh analysis, PageRank, and training weights in deep learning.',
          keyDefinitions: [
            'Echelon Form: All nonzero rows are above zero rows; each leading entry is to the right of the row above.',
            'RREF: Echelon form where every leading entry is 1, and each leading 1 is the only nonzero entry in its column.'
          ],
          importantFormulasOrDiagrams: [
            'Elementary Row Operations: R_i ↔ R_j, R_i → k R_i, R_i → R_i + c R_j',
            'Existence & Uniqueness Theorem: Consistent iff rightmost column of augmented matrix is not a pivot column (i.e. no [0 ... 0 | b] with b ≠ 0).'
          ],
          commonMistakes: [
            'Minus sign mistakes when performing R2 -> R2 - k*R1.',
            'Declaring an inconsistent system consistent.'
          ],
          simpleExample: 'Matrix [[1, 2, 5], [0, 1, 2]] gives x2 = 2, x1 = 5 - 2(2) = 1.',
          csApplicationExample: 'In 3D game engines, converting camera world space coordinates to viewport coordinates requires solving 4x4 matrix equations.'
        },
        activeRecall: {
          definitionQuestions: ['Define Reduced Row Echelon Form (RREF) and state its two key properties.'],
          explainQuestions: ['How can you determine from an echelon matrix whether a system has unique, infinite, or no solutions?'],
          whyQuestions: ['Why does elementary row operations not change the solution set of a linear system?'],
          differenceQuestions: ['Differentiate between a pivot column and a free variable column.'],
          numericalOrCodeQuestions: ['Row-reduce the matrix [[1, 3, 1], [2, 6, 5]] to echelon form and state the pivot columns.']
        },
        practiceQuestions: {
          level1Easy: 'What are the three elementary row operations on matrices?',
          level2Medium: 'Solve the system: x1 + 2x2 - x3 = 1, 2x1 + x2 + 4x3 = 2, 3x1 + 3x2 + 3x3 = 3.',
          level3Exam: 'TU 2082: Determine whether the system of equations is consistent, and find its general solution in parametric vector form.',
          level4Challenge: 'Write a pseudocode algorithm for Gaussian Elimination with partial pivoting to prevent division by zero.'
        },
        tuPyqTarget: 'TU 2082 Linear systems RREF past question',
        codingTask: 'Write a C++ program to check if a 3x3 matrix is in upper triangular form.'
      },
      {
        subjectCode: 'STA169',
        unit: 1,
        topic: 'Scales of Measurement, Data Types & Graphical Ogives',
        theory: {
          topicTitle: 'Data Classification and Graphical Representation',
          whatIsIt: 'Statistics deals with data collection, analysis, interpretation, and presentation. Data scales classify values into Nominal, Ordinal, Interval, and Ratio.',
          whyDoesItExist: 'Different data types require specific algorithmic processing and valid statistical operations (e.g. you cannot take the average of zip codes).',
          howDoesItWork: 'Continuous data is organized into frequency distributions, visualized through histograms, frequency polygons, and cumulative ogive curves.',
          whereIsItUsedInCS: 'Data science feature engineering, data preprocessing in machine learning pipelines, and analytics telemetry.',
          keyDefinitions: [
            'Nominal: Categorical labels with no order (e.g., blood type, OS brand).',
            'Ordinal: Ordered categories without fixed distance (e.g., satisfaction: low, med, high).',
            'Interval: Ordered with fixed differences, no true zero (e.g., Temperature in °C).',
            'Ratio: Fixed distance with true absolute zero (e.g., CPU execution time, download bytes).'
          ],
          importantFormulasOrDiagrams: [
            'Less-than Ogive: Cumulative frequencies plotted against UPPER class boundaries.',
            'More-than Ogive: Cumulative frequencies plotted against LOWER class boundaries.',
            'Intersection of less-than and more-than ogives projects to the MEDIAN on the X-axis.'
          ],
          commonMistakes: [
            'Plotting cumulative frequency against class midpoints instead of class boundaries in ogives.',
            'Treating ordinal data as interval data.'
          ],
          simpleExample: 'Class intervals 10-20, 20-30 with frequencies 5, 8 gives cumulative frequencies 5, 13 at upper boundaries 20 and 30.',
          csApplicationExample: 'In system performance analysis, 95th percentile latency curves are computed directly from cumulative frequency distributions.'
        },
        activeRecall: {
          definitionQuestions: ['Define the four scales of measurement: Nominal, Ordinal, Interval, and Ratio.'],
          explainQuestions: ['How can the median and quartiles (Q1, Q3) be determined graphically using ogive curves?'],
          whyQuestions: ['Why is CPU execution time considered a ratio scale rather than an interval scale?'],
          differenceQuestions: ['Differentiate between primary data and secondary data with CSIT research examples.'],
          numericalOrCodeQuestions: ['Given class 20-30 with frequency 12, what is its class mark (midpoint) and true boundary?']
        },
        practiceQuestions: {
          level1Easy: 'Define primary and secondary data with examples.',
          level2Medium: 'Construct a frequency table and calculate less-than cumulative frequencies for student test scores.',
          level3Exam: 'TU 2080: Differentiate between primary and secondary data. Explain how median and quartiles are determined graphically using ogive curves.',
          level4Challenge: 'Given an ogive dataset, write a mathematical interpolation formula to find the exact median coordinate algebraically.'
        },
        tuPyqTarget: 'TU 2080 Ogive curve & median derivation question',
        codingTask: 'Write a C++ program that reads 10 integers and outputs a textual ASCII histogram.'
      }
    ]
  },
  {
    day: 4,
    phase: 1,
    phaseName: 'Phase 1: Foundation + Syllabus Mapping',
    phaseGoal: 'Constructors, Destructors in OOP; 8085 Pin Demultiplexing in Microprocessor.',
    theme: 'C++ Constructors/Destructors & 8085 Bus Demultiplexing',
    targetHours: { minimum: 2.5, normal: 5.0, high: 7.0 },
    dailyChallenge: 'Write a C++ class demonstrating Default, Parameterized, and Copy constructors with dynamic memory (new/delete) and print destructor cleanup.',
    quote: 'The master has failed more times than the beginner has even tried.',
    completed: false,
    spacedRevisionDue: ['R1: Active recall on Math II RREF steps & Stats measurement scales'],
    sideQuest: 'Learn how C++ RAII (Resource Acquisition Is Initialization) prevents memory leaks in production codebases.',
    codingHabit: {
      task: 'Implement a custom DynamicString class in C++ with constructor, copy constructor, and destructor.',
      difficulty: 'Intermediate',
      durationMinutes: 50
    },
    subjects: [
      {
        subjectCode: 'CSC166',
        unit: 2,
        topic: 'Constructors (Default, Parameterized, Copy), Destructors & this Pointer',
        theory: {
          topicTitle: 'C++ Object Lifecycle: Constructors and Destructors',
          whatIsIt: 'A constructor is a special member function with the same name as the class, invoked automatically when an object is instantiated. Destructor cleans up when object goes out of scope.',
          whyDoesItExist: 'Guarantees that objects always initialize into valid states and prevents resource/memory leaks upon destruction.',
          howDoesItWork: 'Constructors have no return type. Copy constructor signature is `ClassName(const ClassName &obj)` to prevent infinite pass-by-value recursion.',
          whereIsItUsedInCS: 'Database connection pools, file stream handles (std::fstream), and smart pointers (std::unique_ptr).',
          keyDefinitions: [
            'Default Constructor: Takes no parameters or has all default arguments.',
            'Parameterized Constructor: Initializes instance attributes with passed arguments.',
            'Copy Constructor: Initializes a new object by copying an existing object of the same class.',
            'Destructor (~ClassName): Takes no arguments, cannot be overloaded, frees heap memory.'
          ],
          importantFormulasOrDiagrams: [
            'Shallow Copy vs Deep Copy: Shallow copy duplicates pointer addresses (double-free crash); Deep copy allocates separate new heap memory and copies data.',
            '`this` Pointer: An implicit pointer passed to all non-static member functions pointing to the calling object.'
          ],
          commonMistakes: [
            'Declaring copy constructor as ClassName(ClassName obj) without the reference `&` (causes compilation error).',
            'Failing to delete dynamic memory allocated with new inside destructor.'
          ],
          simpleExample: 'class Box { int* p; public: Box(int v) { p = new int(v); } ~Box() { delete p; } };',
          csApplicationExample: 'In operating system kernels, mutex lock guards acquire locks in constructors and release them automatically in destructors.'
        },
        activeRecall: {
          definitionQuestions: ['What is a constructor and how does it differ from a normal member function?'],
          explainQuestions: ['Why must a copy constructor accept its parameter by reference?'],
          whyQuestions: ['Why can a destructor neither be overloaded nor take parameters?'],
          differenceQuestions: ['Differentiate between shallow copy and deep copy with heap memory diagrams.'],
          numericalOrCodeQuestions: ['In what order are constructors and destructors executed when an object is declared inside a local block?']
        },
        practiceQuestions: {
          level1Easy: 'Define default and parameterized constructors in C++.',
          level2Medium: 'Write a C++ class Time with hours and minutes, with default constructor (0,0) and parameterized constructor.',
          level3Exam: 'TU 2082: What is a copy constructor? Explain its importance with a C++ program demonstrating deep copy for dynamic memory.',
          level4Challenge: 'Implement the Rule of Three in C++ (Copy Constructor, Copy Assignment Operator, Destructor) for a custom dynamic array.'
        },
        tuPyqTarget: 'TU 2082 Copy constructor & deep copy past question',
        codingTask: 'Write a C++ class with dynamic char* pointer demonstrating deep copy.'
      },
      {
        subjectCode: 'CSC167',
        unit: 2,
        topic: '8085 Pin Diagram, Signal Descriptions & Bus Demultiplexing',
        theory: {
          topicTitle: '8085 Pin Configuration & AD0-AD7 Demultiplexing Circuit',
          whatIsIt: 'The 8085 is a 40-pin DIP microprocessor. Pins AD0-AD7 are time-multiplexed to carry lower-order address during T1 and data during T2-T4.',
          whyDoesItExist: 'Pins are physically expensive on silicon packages. Multiplexing 8 pins reduces the package pin count from 48 to 40.',
          howDoesItWork: 'The ALE (Address Latch Enable) signal pulses high during T1 state. It triggers latch 74LS373 to hold lower address A0-A7 for the rest of the cycle.',
          whereIsItUsedInCS: 'Multiplexed memory bus interfaces in microcontrollers and FPGA memory controllers.',
          keyDefinitions: [
            'ALE (Pin 30): High pulse during T1 indicates AD0-AD7 carries address.',
            'IO/M\' (Pin 34): High indicates I/O operation; Low indicates Memory operation.',
            'RD\' (Pin 32) & WR\' (Pin 31): Active-low read and write control strobes.'
          ],
          importantFormulasOrDiagrams: [
            'Demultiplexing Schematic: 8085 AD0-AD7 ---> D0-D7 of 74LS373 latch; ALE ---> G (Enable) of latch; Q0-Q7 provides A0-A7.',
            'Control Signal Generation: IO/M\', RD\', WR\' fed into 3-to-8 decoder 74LS138 to generate MEMR\', MEMW\', IOR\', IOW\'.'
          ],
          commonMistakes: [
            'Connecting the latch enable to clock instead of ALE.',
            'Forgetting that control signals MEMR\' and MEMW\' are active-low.'
          ],
          simpleExample: 'When 8085 executes an instruction at 2050H, AD0-AD7 outputs 50H during T1, which is latched by 74LS373 while A15-A8 holds 20H.',
          csApplicationExample: 'Hardware address decoders map specific physical peripheral chips into the CPU\'s unified memory space.'
        },
        activeRecall: {
          definitionQuestions: ['What is the role of ALE in the 8085 microprocessor?'],
          explainQuestions: ['Explain how the lower-order address bus and data bus are demultiplexed in 8085 with a circuit diagram.'],
          whyQuestions: ['Why did Intel engineers multiplex AD0-AD7 instead of using separate pins?'],
          differenceQuestions: ['Differentiate between memory-mapped I/O and peripheral-mapped (standard) I/O.'],
          numericalOrCodeQuestions: ['State the logical status of IO/M\', S1, and S0 during an Opcode Fetch machine cycle.']
        },
        practiceQuestions: {
          level1Easy: 'List the main functional pin groups of the 8085 microprocessor.',
          level2Medium: 'Explain the function of HOLD, HLDA, READY, and RESET IN pins.',
          level3Exam: 'TU 2082: Draw the functional pin diagram of 8085. Explain how address and data buses are demultiplexed using ALE and latch 74LS373 with a circuit diagram.',
          level4Challenge: 'Design a logic circuit using 74LS138 3-to-8 decoder to generate MEMR\', MEMW\', IOR\', and IOW\' from 8085 status lines.'
        },
        tuPyqTarget: 'TU 2082 Demultiplexing circuit guaranteed question',
        codingTask: 'Write a C++ function that simulates the 8085 bus: takes 16-bit address and outputs high byte A15-A8 and low byte AD0-AD7.'
      }
    ]
  },
  {
    day: 5,
    phase: 1,
    phaseName: 'Phase 1: Foundation + Syllabus Mapping',
    phaseGoal: 'Discrete Number Theory (GCD/Euclidean) and Statistics Central Tendency & Partition Values.',
    theme: 'Extended Euclidean Algorithm & Statistics Partition Values',
    targetHours: { minimum: 2.5, normal: 5.0, high: 7.0 },
    dailyChallenge: 'Execute the Extended Euclidean Algorithm on paper for gcd(428, 164) and write Bézout identity s*a + t*b = gcd.',
    quote: 'Small disciplines repeated with consistency every day lead to great achievements gained slowly over time.',
    completed: false,
    spacedRevisionDue: ['R3: Spaced review of Day 1 Discrete Sets & C++ Class syntax'],
    sideQuest: 'Read an article on how the RSA public key cryptosystem uses the Extended Euclidean Algorithm to calculate private keys.',
    codingHabit: {
      task: 'Implement the Extended Euclidean Algorithm in C++ returning gcd, s, and t.',
      difficulty: 'Intermediate',
      durationMinutes: 45
    },
    subjects: [
      {
        subjectCode: 'CSC165',
        unit: 2,
        topic: 'Primes, GCD, Euclidean Algorithm & Extended Euclidean Algorithm',
        theory: {
          topicTitle: 'Number Theory: Division Algorithm & Extended Euclidean Algorithm',
          whatIsIt: 'The Division Algorithm states that for integers a and b (b>0), there exist unique integers q and r such that a = bq + r with 0 ≤ r < b. The Extended Euclidean Algorithm finds gcd(a, b) and express it as s*a + t*b.',
          whyDoesItExist: 'Enables computation of modular multiplicative inverses, which is the foundational mathematical step in RSA encryption.',
          howDoesItWork: 'Repeatedly apply division algorithm until remainder is 0. Then back-substitute remainders from bottom to top to express gcd as a linear combination of original numbers.',
          whereIsItUsedInCS: 'Public-key cryptography (RSA key generation), hashing, and computer arithmetic with large integers.',
          keyDefinitions: [
            'GCD (Greatest Common Divisor): Largest positive integer dividing both a and b.',
            'Bézout\'s Theorem: If a and b are integers, then ∃ s, t ∈ Z such that gcd(a, b) = s*a + t*b.'
          ],
          importantFormulasOrDiagrams: [
            'Euclid: gcd(a, b) = gcd(b, a mod b)',
            'Linear Combination: gcd(a, b) = s*a + t*b where s and t are Bézout coefficients'
          ],
          commonMistakes: [
            'Making sign errors when expanding brackets during back-substitution.',
            'Stopping division before reaching remainder 0.'
          ],
          simpleExample: 'gcd(252, 198): 252 = 1*198 + 54; 198 = 3*54 + 36; 54 = 1*36 + 18; 36 = 2*18 + 0. gcd = 18.',
          csApplicationExample: 'To find the decryption exponent d in RSA, we solve e*d ≡ 1 (mod φ(n)) using the Extended Euclidean Algorithm.'
        },
        activeRecall: {
          definitionQuestions: ['State the Division Algorithm and Bézout\'s Identity.'],
          explainQuestions: ['How does the Extended Euclidean Algorithm differ from the basic Euclidean Algorithm?'],
          whyQuestions: ['Why is the modular multiplicative inverse guaranteed to exist only when gcd(a, m) = 1?'],
          differenceQuestions: ['Differentiate between prime numbers and composite numbers in computational complexity.'],
          numericalOrCodeQuestions: ['Find gcd(84, 30) using Euclidean algorithm in 3 steps.']
        },
        practiceQuestions: {
          level1Easy: 'State the Division Algorithm for integers.',
          level2Medium: 'Use Euclidean Algorithm to find gcd(414, 662).',
          level3Exam: 'TU 2082: Using Extended Euclidean Algorithm, find gcd(428, 164) and express it as a linear combination of 428 and 164.',
          level4Challenge: 'Write a recursive C++ function that calculates modular inverse of a modulo m using Extended Euclidean Algorithm.'
        },
        tuPyqTarget: 'TU 2082 Extended Euclidean Algorithm past question',
        codingTask: 'Code the Extended Euclidean Algorithm in C++ and test with TU past question numbers.'
      },
      {
        subjectCode: 'STA169',
        unit: 2,
        topic: 'Measures of Central Tendency & Partition Values (Mean, Median, Mode, Quartiles)',
        theory: {
          topicTitle: 'Central Tendency & Partition Values for Grouped Data',
          whatIsIt: 'Central tendency identifies a single summary representative value for a data distribution: Mean (arithmetic center), Median (positional 50% split), and Mode (peak frequency).',
          whyDoesItExist: 'Raw datasets with thousands of observations cannot be evaluated without representative center metrics.',
          howDoesItWork: 'For grouped data: Median = L + [(N/2 - cf) / f] * h; Quartiles Q1 (N/4) and Q3 (3N/4) partition data into four equal quarters.',
          whereIsItUsedInCS: 'Summary statistics in data profiling, box plot outlier detection, and performance benchmarking.',
          keyDefinitions: [
            'Arithmetic Mean: x̄ = ∑(f*x) / N',
            'Median: Positional value dividing data into two equal halves.',
            'Quartiles: Q1 (25th percentile), Q2 (Median 50th percentile), Q3 (75th percentile).'
          ],
          importantFormulasOrDiagrams: [
            'Median Formula: L + [ (N/2 - c.f.) / f ] × h',
            'Q1 Formula: L + [ (N/4 - c.f.) / f ] × h; Q3 Formula: L + [ (3N/4 - c.f.) / f ] × h',
            'Empirical Relationship for moderately skewed distributions: Mode = 3 Median - 2 Mean'
          ],
          commonMistakes: [
            'Using the cumulative frequency of the median class instead of the PRECEDING class (c.f.).',
            'Confusing class interval width (h) with frequency.'
          ],
          simpleExample: 'In dataset {2, 4, 7, 8, 9}, Mean = 6, Median = 7.',
          csApplicationExample: 'Web latency metrics always report Median (p50) and 99th percentile (p99) instead of Mean because Mean is distorted by outlier network timeouts.'
        },
        activeRecall: {
          definitionQuestions: ['Define Arithmetic Mean, Median, and Mode.'],
          explainQuestions: ['Why is the Median preferred over the Arithmetic Mean when data contains extreme outlier values?'],
          whyQuestions: ['What does the interquartile range (IQR = Q3 - Q1) represent in outlier detection?'],
          differenceQuestions: ['State two mathematical properties of Arithmetic Mean.'],
          numericalOrCodeQuestions: ['If Mean = 30 and Median = 28, estimate the Mode using the empirical formula.']
        },
        practiceQuestions: {
          level1Easy: 'State the formulas for Q1, Q2, and Q3 for continuous grouped data.',
          level2Medium: 'Compute Mean and Median for continuous frequency distribution of examination marks.',
          level3Exam: 'TU 2081: Calculate Q1, Median, and Q3 from given grouped distribution and interpret the results.',
          level4Challenge: 'Prove algebraically that the sum of deviations of observations from their arithmetic mean is always zero: ∑(x_i - x̄) = 0.'
        },
        tuPyqTarget: 'TU 2081 Grouped data partition values calculation',
        codingTask: 'Write a C++ program to compute Mean and Median from a dynamic vector of numbers.'
      }
    ]
  },
  {
    day: 6,
    phase: 1,
    phaseName: 'Phase 1: Foundation + Syllabus Mapping',
    phaseGoal: 'Vectors, Spanning sets, and Matrix equation Ax=b in Math II; 8085 Flags & Registers.',
    theme: 'Vector Span, Ax = b & 8085 Flag Register Format',
    targetHours: { minimum: 2.5, normal: 5.0, high: 7.0 },
    dailyChallenge: 'Memorize the exact 8085 flag register bit layout [S, Z, X, AC, X, P, X, CY] and trace all 5 flags after adding 78H and 99H.',
    quote: 'Focus is a muscle. The more you eliminate digital distractions, the sharper your mind becomes.',
    completed: false,
    spacedRevisionDue: ['R2: Active recall on C++ Copy Constructor & 8085 Bus Demultiplexing'],
    sideQuest: 'Learn how x86 and ARM processors maintain status flags (Zero, Carry, Overflow) inside modern hardware.',
    codingHabit: {
      task: 'Write a C++ program that emulates an 8-bit ALU: performs ADD and SUB and sets Sign, Zero, Carry, and Parity flags.',
      difficulty: 'Intermediate',
      durationMinutes: 50
    },
    subjects: [
      {
        subjectCode: 'MTH168',
        unit: 1,
        topic: 'Vector Equations, Span, and Matrix Equation Ax = b',
        theory: {
          topicTitle: 'Vector Equations, Linear Combinations & Span',
          whatIsIt: 'A vector equation x1*v1 + x2*v2 + ... + xp*vp = b asks if b can be generated as a linear combination of vectors {v1, ..., vp}. Span{v1, ..., vp} is the set of all such linear combinations.',
          whyDoesItExist: 'Geometric foundation of vector spaces: determines reachable subspace dimensions and solution feasibility of linear transformations.',
          howDoesItWork: 'The matrix equation Ax = b has a solution if and only if b is in the subspace spanned by the columns of A.',
          whereIsItUsedInCS: 'Word embeddings in Natural Language Processing (vectors in 300-dimensional semantic space), recommendation systems, and color spaces.',
          keyDefinitions: [
            'Linear Combination: c1*v1 + c2*v2 + ... + cp*vp with scalars c_i.',
            'Span{v1, ..., vp}: Collection of all linear combinations of v1, ..., vp.',
            'Matrix-Vector Product: Ax = x1*a1 + x2*a2 + ... + xn*an (linear combination of columns of A).'
          ],
          importantFormulasOrDiagrams: [
            'Theorem: Ax = b has a solution for every b in R^m iff the columns of A span R^m (iff A has a pivot in every row).',
            'Geometric Span: Span of 1 vector is a line through origin; Span of 2 non-collinear vectors is a plane through origin.'
          ],
          commonMistakes: [
            'Confusing "pivot in every row" (spans R^m, onto) with "pivot in every column" (linearly independent, 1-1).',
            'Misinterpreting a row [0 0 0 | 5] as having infinite solutions instead of being inconsistent.'
          ],
          simpleExample: 'Span{[1, 0]^T, [0, 1]^T} spans the entire 2D Cartesian plane R^2.',
          csApplicationExample: 'In large language models, word embeddings are vectors whose linear combinations form contextual sentence vectors.'
        },
        activeRecall: {
          definitionQuestions: ['Define linear combination and span of a set of vectors.'],
          explainQuestions: ['What is the relationship between the matrix equation Ax = b and the vector equation x1 a1 + ... + xn an = b?'],
          whyQuestions: ['Why does having a pivot position in every row of matrix A guarantee that Ax = b is consistent for every vector b?'],
          differenceQuestions: ['Differentiate between homogeneous system Ax = 0 and non-homogeneous system Ax = b.'],
          numericalOrCodeQuestions: ['Is vector b = [3, 5]^T in the span of v1 = [1, 2]^T and v2 = [0, 1]^T?']
        },
        practiceQuestions: {
          level1Easy: 'Define Span{v1, v2} geometrically in R3.',
          level2Medium: 'Determine if vector b = [-2, 5, 7]^T is a linear combination of a1 = [1, 0, 1]^T, a2 = [-2, 3, -2]^T, and a3 = [-6, 7, 5]^T.',
          level3Exam: 'TU 2081: Determine if the columns of matrix A span R4, and describe the solution set of Ax = 0 in parametric vector form.',
          level4Challenge: 'Prove that Span{v1, v2} is a subspace of R^n containing the zero vector.'
        },
        tuPyqTarget: 'TU 2081 Vector span & matrix equation Ax=b past question',
        codingTask: 'Write a C++ program that determines if 2 vectors in 2D space are collinear.'
      },
      {
        subjectCode: 'CSC167',
        unit: 2,
        topic: '8085 Internal Architecture: ALU, Registers (A, B, C, D, E, H, L, SP, PC) & Flag Register',
        theory: {
          topicTitle: '8085 Registers & Flag Status Byte',
          whatIsIt: '8085 internal register organization contains one 8-bit Accumulator (A), six 8-bit general registers (B, C, D, E, H, L) combinable as 16-bit pairs (BC, DE, HL), 16-bit Program Counter (PC), 16-bit Stack Pointer (SP), and Flag register.',
          whyDoesItExist: 'Registers provide ultra-fast temporary storage inside the CPU, eliminating slow external memory bus access cycles during arithmetic execution.',
          howDoesItWork: 'After every arithmetic or logical instruction executed by the ALU, flip-flops inside the flag register are automatically set (1) or reset (0).',
          whereIsItUsedInCS: 'Conditional branching in compilers (translating `if(x == 0)` to `JZ label`).',
          keyDefinitions: [
            'Sign Flag (S): Set if D7 of result is 1 (negative number in 2\'s complement).',
            'Zero Flag (Z): Set if ALU result is exactly zero (essential for loop counters).',
            'Auxiliary Carry (AC): Set if carry from bit D3 to D4 occurs (used in BCD arithmetic with DAA).',
            'Parity Flag (P): Set if result contains an EVEN number of 1s.',
            'Carry Flag (CY): Set if arithmetic operation generates an overflow carry or borrow.'
          ],
          importantFormulasOrDiagrams: [
            'Flag Byte Format: [ S | Z | X | AC | X | P | X | CY ] (Bits 5, 3, 1 are unused "don\'t care" X)',
            'Program Counter (PC): Holds memory address of NEXT instruction to be fetched; auto-increments after fetch.'
          ],
          commonMistakes: [
            'Thinking Zero Flag is 1 when result is non-zero (Z=1 when result IS zero!).',
            'Confusing HL register pair (used as default memory pointer M) with PC.'
          ],
          simpleExample: 'After SUB A with itself, result = 00H => Z=1, S=0, P=1, CY=0.',
          csApplicationExample: 'In operating system task switching, saving CPU registers and flags to memory preserves process state.'
        },
        activeRecall: {
          definitionQuestions: ['Draw the bit format of the 8085 Flag Register and name all 5 active flags.'],
          explainQuestions: ['What is the significance of the Program Counter (PC) and Stack Pointer (SP)?'],
          whyQuestions: ['Why is the HL register pair uniquely important in 8085 assembly programming?'],
          differenceQuestions: ['Differentiate between Carry Flag (CY) and Auxiliary Carry Flag (AC).'],
          numericalOrCodeQuestions: ['If Accumulator has 05H and we execute DCR A, what are the values of Z and CY flags?']
        },
        practiceQuestions: {
          level1Easy: 'List the general-purpose register pairs in 8085.',
          level2Medium: 'Explain the function of Accumulator, Temporary register, and Instruction register in 8085.',
          level3Exam: 'TU 2080: Explain the flag register format of 8085 with bit diagrams. Trace the flags after adding 95H and A8H.',
          level4Challenge: 'Show how the DAA (Decimal Adjust Accumulator) instruction uses Auxiliary Carry (AC) and Carry (CY) flags to convert binary addition to BCD.'
        },
        tuPyqTarget: 'TU 2080 8085 Flag register format past question',
        codingTask: 'Write a C++ program that reads an 8-bit result byte and prints the exact 8085 flag register byte in hexadecimal.'
      }
    ]
  },
  {
    day: 7,
    phase: 1,
    phaseName: 'Phase 1: Foundation + Syllabus Mapping',
    phaseGoal: 'Modular arithmetic & Chinese Remainder Theorem in Discrete; Static members & Friend functions in C++.',
    theme: 'Chinese Remainder Theorem & C++ Friend Functions',
    targetHours: { minimum: 2.5, normal: 5.0, high: 7.0 },
    dailyChallenge: 'Solve a system of 3 simultaneous modular congruences using CRT and code a C++ friend function that adds private data of two classes.',
    quote: 'You do not rise to the level of your goals. You fall to the level of your systems.',
    completed: false,
    spacedRevisionDue: ['R1: Self-test on 8085 Flag byte format and Vector Span'],
    sideQuest: 'Learn how friend functions in C++ allow operator<< overloading to access private class members without public getters.',
    codingHabit: {
      task: 'Write a C++ program with two classes: Celsius and Fahrenheit. Implement a friend function to compare which temperature is hotter.',
      difficulty: 'Intermediate',
      durationMinutes: 45
    },
    subjects: [
      {
        subjectCode: 'CSC165',
        unit: 2,
        topic: 'Modular Arithmetic, Linear Congruences & Chinese Remainder Theorem (CRT)',
        theory: {
          topicTitle: 'Chinese Remainder Theorem (CRT) Algorithmic Solver',
          whatIsIt: 'The Chinese Remainder Theorem states that if m1, m2, ..., mn are pairwise coprime positive integers, then the system of simultaneous congruences x ≡ a_i (mod m_i) has a unique solution modulo M = ∏ m_i.',
          whyDoesItExist: 'Allows arithmetic operations on very large integers to be carried out in parallel as independent operations on smaller remainders.',
          howDoesItWork: '1. Compute M = m1*m2*...*mk. 2. For each i, compute M_i = M/m_i. 3. Find modular inverse y_i such that M_i * y_i ≡ 1 (mod m_i). 4. x = (∑ a_i * M_i * y_i) mod M.',
          whereIsItUsedInCS: 'Fast computation in cryptography (RSA decryption acceleration), multi-precision big-integer arithmetic, and secret sharing schemes.',
          keyDefinitions: [
            'Pairwise Coprime: gcd(m_i, m_j) = 1 for all i ≠ j.',
            'Linear Congruence: ax ≡ b (mod m) has a solution iff gcd(a, m) divides b.'
          ],
          importantFormulasOrDiagrams: [
            'CRT Formula: x ≡ ∑_{i=1}^k (a_i * M_i * y_i) (mod M)',
            'where M = ∏ m_i, M_i = M / m_i, and M_i * y_i ≡ 1 (mod m_i)'
          ],
          commonMistakes: [
            'Applying CRT when moduli are NOT pairwise coprime (e.g. mod 4 and mod 6 share factor 2).',
            'Forgetting to take the final sum modulo M.'
          ],
          simpleExample: 'x ≡ 1 (mod 2), x ≡ 2 (mod 3). M = 6. M1 = 3, M2 = 2. Inverses: 3y1 ≡ 1 mod 2 => y1=1; 2y2 ≡ 1 mod 3 => y2=2. x = (1*3*1 + 2*2*2) mod 6 = 11 mod 6 = 5.',
          csApplicationExample: 'In hardware cryptographic chips, CRT splits a 2048-bit RSA modular exponentiation into two 1024-bit operations, yielding a 4x speedup.'
        },
        activeRecall: {
          definitionQuestions: ['State the Chinese Remainder Theorem and its mandatory condition on moduli.'],
          explainQuestions: ['Explain the step-by-step algorithm to solve a system of 3 linear congruences using CRT.'],
          whyQuestions: ['Why does CRT provide massive speedup in multi-precision arithmetic on 64-bit processors?'],
          differenceQuestions: ['Differentiate between linear congruence and standard algebraic linear equation.'],
          numericalOrCodeQuestions: ['Find the modular inverse of 7 modulo 11.']
        },
        practiceQuestions: {
          level1Easy: 'State the condition for ax ≡ b (mod m) to have an integer solution.',
          level2Medium: 'Solve the linear congruence 5x ≡ 3 (mod 11).',
          level3Exam: 'TU 2082: Solve the system of congruences using Chinese Remainder Theorem: x ≡ 2 (mod 3), x ≡ 3 (mod 5), x ≡ 1 (mod 7).',
          level4Challenge: 'Implement an automated CRT solver in C++ that takes arrays of remainders and pairwise coprime moduli.'
        },
        tuPyqTarget: 'TU 2082 CRT system of 3 congruences past question',
        codingTask: 'Write a C++ program to solve a system of 3 simultaneous congruences using CRT.'
      },
      {
        subjectCode: 'CSC166',
        unit: 2,
        topic: 'Static Data Members, Static Member Functions, Friend Functions & Friend Classes',
        theory: {
          topicTitle: 'Static Members & Friend Access Mechanism',
          whatIsIt: 'A static data member is shared by all objects of the class; only one copy exists in memory. A friend function is a non-member function granted private/protected access.',
          whyDoesItExist: 'Static members maintain class-wide state (like active object counters). Friend functions allow symmetric binary operations (like stream overloading <<) without making internal data public.',
          howDoesItWork: 'Static member must be defined outside the class in global scope: `int ClassName::count = 0;`. Friend functions are declared inside the class with the `friend` keyword.',
          whereIsItUsedInCS: 'Singleton design patterns, object instance tracking, and operator overloading libraries (boost, std::complex).',
          keyDefinitions: [
            'Static Data Member: Belongs to the class type itself, allocated in static memory.',
            'Static Member Function: Can only access static data members; has NO `this` pointer.',
            'Friend Function: External function with access to private members of declaring class.'
          ],
          importantFormulasOrDiagrams: [
            'Static variable: Exists even if ZERO objects of the class are instantiated.',
            'Friendship is NOT mutual and NOT inherited (if A is friend of B, B is not automatically friend of A).'
          ],
          commonMistakes: [
            'Trying to use the `this` pointer inside a static member function.',
            'Forgetting the mandatory global definition of static data members outside the class body.'
          ],
          simpleExample: 'class Item { static int count; public: Item() { count++; } static int getCount() { return count; } }; int Item::count = 0;',
          csApplicationExample: 'In database connection managers, a static getInstance() method enforces a single shared connection pool across all threads.'
        },
        activeRecall: {
          definitionQuestions: ['What is a static data member and where must it be defined?'],
          explainQuestions: ['Why can a static member function NOT access non-static member variables?'],
          whyQuestions: ['Why does friendship break strict encapsulation safely in object-oriented programming?'],
          differenceQuestions: ['Differentiate between a static member function and a normal member function.'],
          numericalOrCodeQuestions: ['What will be the output when three objects of a class with static counter are instantiated and one goes out of scope?']
        },
        practiceQuestions: {
          level1Easy: 'Explain the purpose of static data members in C++.',
          level2Medium: 'Write a program to count total number of active objects created for a class using a static variable.',
          level3Exam: 'TU 2082: What is a friend function? Write a C++ program to add private data of two different classes using a friend function.',
          level4Challenge: 'Design a class where only a designated FriendFactory class is allowed to instantiate objects (private constructors with friend factory).'
        },
        tuPyqTarget: 'TU 2082 Friend function program past question',
        codingTask: 'Write a C++ program that uses a friend function to compute average of private marks from two classes.'
      }
    ]
  },
  {
    day: 8,
    phase: 1,
    phaseName: 'Phase 1: Foundation + Syllabus Mapping',
    phaseGoal: 'Linear Independence in Math II; Dispersion & Coefficient of Variation in Stats I.',
    theme: 'Linear Independence & Statistics Dispersion / C.V.',
    targetHours: { minimum: 2.5, normal: 5.0, high: 7.0 },
    dailyChallenge: 'Solve a full Brand Comparison numerical problem calculating Mean, Standard Deviation, and Coefficient of Variation (C.V.) to evaluate consistency.',
    quote: 'The pain of discipline is far less than the pain of regret.',
    completed: false,
    spacedRevisionDue: ['R2: Active recall on Extended Euclidean Algorithm and CRT steps'],
    sideQuest: 'Learn how the Coefficient of Variation is used in finance (Sharpe ratio) to measure risk per unit of return.',
    codingHabit: {
      task: 'Write a C++ program that reads a sample of numbers, computes Mean, Variance, Standard Deviation, and C.V.',
      difficulty: 'Beginner',
      durationMinutes: 45
    },
    subjects: [
      {
        subjectCode: 'MTH168',
        unit: 1,
        topic: 'Linear Independence of Vector Sets & Characterizations',
        theory: {
          topicTitle: 'Linear Independence and Dependence in Vector Sets',
          whatIsIt: 'A set of vectors {v1, ..., vp} is linearly independent if the vector equation c1*v1 + ... + cp*vp = 0 has ONLY the trivial solution c1 = ... = cp = 0.',
          whyDoesItExist: 'Identifies non-redundant coordinate axes: eliminates wasted dimensions and provides minimal spanning sets (bases).',
          howDoesItWork: 'Form matrix A = [v1 ... vp]. Row-reduce to echelon form. If every column is a pivot column (no free variables), the vectors are linearly independent.',
          whereIsItUsedInCS: 'Dimensionality reduction in machine learning (eliminating multicollinear features in regression), compression bases (wavelets, DCT).',
          keyDefinitions: [
            'Linearly Dependent: ∃ scalars c_i not all zero such that ∑ c_i * v_i = 0.',
            'Theorem: A set {v1, ..., vp} of two or more vectors is linearly dependent iff at least one vector is a linear combination of the others.',
            'Theorem: If a set contains more vectors than entries in each vector (p > n in R^n), it is ALWAYS linearly dependent.'
          ],
          importantFormulasOrDiagrams: [
            'Matrix Condition: Columns of A are linearly independent iff Ax = 0 has only the trivial solution (zero null space).',
            'Zero Vector Rule: Any set containing the zero vector 0 is automatically linearly dependent.'
          ],
          commonMistakes: [
            'Thinking a set of 4 vectors in R^3 can be linearly independent (impossible, since 4 > 3).',
            'Forgetting that linear dependence only requires ONE vector to be a combination of the others, not all.'
          ],
          simpleExample: 'Vectors [1, 2]^T and [2, 4]^T are dependent because [2, 4]^T = 2 * [1, 2]^T.',
          csApplicationExample: 'In data science, if one feature is a linear combination of others (e.g., TotalPrice = Price + Tax), it creates a singular matrix in linear regression.'
        },
        activeRecall: {
          definitionQuestions: ['Define linear independence and linear dependence of a set of vectors.'],
          explainQuestions: ['How does row reduction to echelon form reveal whether a set of vectors is linearly independent?'],
          whyQuestions: ['Why is any set of vectors that contains the zero vector automatically linearly dependent?'],
          differenceQuestions: ['State the difference between linear independence and orthogonal vectors.'],
          numericalOrCodeQuestions: ['Are vectors [1, 0, 0]^T, [0, 1, 0]^T, and [1, 1, 0]^T linearly independent in R3?']
        },
        practiceQuestions: {
          level1Easy: 'State the definition of linearly independent vectors.',
          level2Medium: 'Determine if the vectors v1 = [1, 2, -3]^T, v2 = [-4, -8, 12]^T, and v3 = [1, 0, 2]^T are linearly independent in R3.',
          level3Exam: 'TU 2082: Determine if the vectors v1 = [1, 2, 3]^T, v2 = [4, 5, 6]^T, and v3 = [2, 1, 0]^T are linearly independent in R3.',
          level4Challenge: 'Prove that if {v1, v2, v3} is linearly independent, then {v1, v1+v2, v1+v2+v3} is also linearly independent.'
        },
        tuPyqTarget: 'TU 2082 Linear independence past question',
        codingTask: 'Write a C++ program that checks if two 3D vectors are scalar multiples of each other.'
      },
      {
        subjectCode: 'STA169',
        unit: 2,
        topic: 'Measures of Dispersion (SD, Variance) & Coefficient of Variation (C.V.)',
        theory: {
          topicTitle: 'Measures of Dispersion, Standard Deviation & Coefficient of Variation',
          whatIsIt: 'Measures of dispersion quantify the spread, scatter, or variability of data around the central value. Standard Deviation (σ) is the root-mean-square deviation from the mean.',
          whyDoesItExist: 'Two distributions can have the exact same mean but drastically different risk or consistency (e.g. one stable, one highly erratic).',
          howDoesItWork: 'Variance σ^2 = ∑(x - x̄)^2 / N. Standard Deviation σ = √Variance. Coefficient of Variation C.V. = (σ / x̄) * 100%.',
          whereIsItUsedInCS: 'Network jitter latency measurement, financial algorithm risk metrics, and anomaly thresholding in intrusion detection systems.',
          keyDefinitions: [
            'Variance: Average of squared deviations from the mean.',
            'Standard Deviation: Positive square root of variance, measured in original units.',
            'Coefficient of Variation (C.V.): Unitless percentage ratio of SD to Mean used to compare variability between different groups.'
          ],
          importantFormulasOrDiagrams: [
            'Continuous SD: σ = √[ (∑ f*d^2 / N) - (∑ f*d / N)^2 ] × h',
            'Coefficient of Variation: C.V. = (σ / x̄) × 100%',
            'Consistency Rule: Group with LOWER C.V. is MORE consistent, MORE stable, and LESS variable!'
          ],
          commonMistakes: [
            'Declaring the group with higher C.V. as more consistent (Huge TU exam trap: LOWER C.V. = MORE consistent!).',
            'Forgetting to multiply C.V. by 100%.'
          ],
          simpleExample: 'Factory A: Mean=100, SD=5 => CV=5%. Factory B: Mean=50, SD=5 => CV=10%. Factory A is twice as consistent.',
          csApplicationExample: 'Server response times with lower C.V. provide predictable Quality of Service (QoS) guarantees.'
        },
        activeRecall: {
          definitionQuestions: ['Define Standard Deviation and Coefficient of Variation (C.V.).'],
          explainQuestions: ['Why is Coefficient of Variation preferred over Standard Deviation when comparing two different distributions?'],
          whyQuestions: ['Why is the group with the smaller C.V. considered more consistent in performance?'],
          differenceQuestions: ['Differentiate between absolute measures of dispersion and relative measures of dispersion.'],
          numericalOrCodeQuestions: ['If Mean = 50 and Variance = 25, calculate the Coefficient of Variation.']
        },
        practiceQuestions: {
          level1Easy: 'State the formula for Coefficient of Variation.',
          level2Medium: 'Compute the Standard Deviation of the numbers: 6, 8, 10, 12, 14.',
          level3Exam: 'TU 2082: Two brands of electric bulbs A and B were tested for their lifespan. Brand A has mean 1500 hrs, SD 120 hrs. Brand B has mean 1400 hrs, SD 98 hrs. Which brand shows greater consistency?',
          level4Challenge: 'Derive the formula for Combined Standard Deviation of two series with sample sizes n1, n2, means x̄1, x̄2, and standard deviations σ1, σ2.'
        },
        tuPyqTarget: 'TU 2082 Coefficient of Variation bulb consistency past question',
        codingTask: 'Write a C++ program comparing the consistency of two student groups using C.V.'
      }
    ]
  },
  {
    day: 9,
    phase: 1,
    phaseName: 'Phase 1: Foundation + Syllabus Mapping',
    phaseGoal: 'Logic & Proofs in Discrete; 8085 Control Signal Generation logic.',
    theme: 'Proof by Contradiction (√2) & 8085 Control Signal Decoding',
    targetHours: { minimum: 2.5, normal: 5.0, high: 7.0 },
    dailyChallenge: 'Write formal mathematical proofs for "√2 is irrational" and "If n^2 is even, then n is even" using proof by contradiction without looking at notes.',
    quote: 'Clarity comes from engagement, not speculation. Put pen to paper and trace every step.',
    completed: false,
    spacedRevisionDue: ['R1: Active recall on Linear Independence and C.V. consistency rule'],
    sideQuest: 'Learn how automated theorem provers like Z3 or Coq verify software code correctness using propositional logic.',
    codingHabit: {
      task: 'Write a C++ program that generates and prints the truth table for any compound proposition (p ∧ q) → (r ∨ ¬p).',
      difficulty: 'Intermediate',
      durationMinutes: 45
    },
    subjects: [
      {
        subjectCode: 'CSC165',
        unit: 3,
        topic: 'Propositional Logic, Truth Tables, Rules of Inference & Methods of Proof',
        theory: {
          topicTitle: 'Propositional Logic & Proof by Contradiction',
          whatIsIt: 'Propositional logic deals with declarative statements that are either True or False. Proof methods include Direct proof (p ⇒ q), Contrapositive (¬q ⇒ ¬p), and Contradiction (assume ¬p and derive a contradiction).',
          whyDoesItExist: 'Forms the strict deductive reasoning backbone for program verification, circuit synthesis, and algorithmic proof of correctness.',
          howDoesItWork: 'Proof by Contradiction: To prove statement P, assume ¬P is True. Use valid logical deductions until an impossible contradiction (R ∧ ¬R) is reached, forcing P to be True.',
          whereIsItUsedInCS: 'Static code analysis tools, SAT solvers in chip verification, and cryptographic protocol proofs.',
          keyDefinitions: [
            'Tautology: A compound proposition that is always True for all truth assignments.',
            'Contradiction: A proposition that is always False.',
            'Modus Ponens: ((p → q) ∧ p) ⇒ q',
            'Modus Tollens: ((p → q) ∧ ¬q) ⇒ ¬p'
          ],
          importantFormulasOrDiagrams: [
            'De Morgan\'s Laws: ¬(p ∧ q) ≡ ¬p ∨ ¬q; ¬(p ∨ q) ≡ ¬p ∧ ¬q',
            'Implication Equivalence: p → q ≡ ¬p ∨ q',
            'Contrapositive Equivalence: p → q ≡ ¬q → ¬p'
          ],
          commonMistakes: [
            'Assuming the conclusion when trying to write a direct proof (circular reasoning).',
            'Confusing contradiction (deriving impossible absurdity) with contrapositive.'
          ],
          simpleExample: 'To prove √2 is irrational: assume √2 is rational (a/b with lowest terms). Show 2b^2 = a^2 => both a and b are even, contradicting gcd(a,b)=1.',
          csApplicationExample: 'In compiler logic, dead-code elimination uses propositional equivalence to prune unreachable if-else branches.'
        },
        activeRecall: {
          definitionQuestions: ['Define tautology, contradiction, and contingency.'],
          explainQuestions: ['Explain the difference between direct proof, proof by contrapositive, and proof by contradiction.'],
          whyQuestions: ['Why is the contrapositive of an implication logically equivalent to the original implication, while the converse is not?'],
          differenceQuestions: ['State De Morgan\'s laws for propositional logic.'],
          numericalOrCodeQuestions: ['Write the truth table for the XOR proposition (p ⊕ q).']
        },
        practiceQuestions: {
          level1Easy: 'State Modus Ponens and Modus Tollens rules of inference.',
          level2Medium: 'Construct a truth table to show that (p → q) ∧ (q → r) → (p → r) is a tautology.',
          level3Exam: 'TU 2081: Prove by contradiction that √2 is an irrational number.',
          level4Challenge: 'Prove that there are infinitely many prime numbers using Euclid\'s proof by contradiction.'
        },
        tuPyqTarget: 'TU 2081 Prove √2 is irrational past question',
        codingTask: 'Write a C++ program to evaluate if a boolean formula is a tautology by checking all 2^n variable truth combinations.'
      },
      {
        subjectCode: 'CSC167',
        unit: 2,
        topic: 'Generation of Control Signals (MEMR, MEMW, IOR, IOW) with Decoder & Logic Gates',
        theory: {
          topicTitle: 'Control Signal Generation in 8085 Systems',
          whatIsIt: 'The 8085 does not have dedicated memory/IO read/write pins. Instead, it provides IO/M\', RD\', and WR\'. External logic gates decode these into MEMR\', MEMW\', IOR\', and IOW\'.',
          whyDoesItExist: 'Prevents external memory chips from reacting to I/O instructions (like IN/OUT) and prevents I/O ports from reacting to memory reads.',
          howDoesItWork: 'Using an active-low 3-to-8 decoder (74LS138) or four 2-input NAND/NOR gates to combine IO/M\' with RD\' and WR\'.',
          whereIsItUsedInCS: 'Bus arbitration and address decoding in custom embedded motherboard designs.',
          keyDefinitions: [
            'MEMR\' (Memory Read): Active low when IO/M\' = 0 and RD\' = 0.',
            'MEMW\' (Memory Write): Active low when IO/M\' = 0 and WR\' = 0.',
            'IOR\' (I/O Read): Active low when IO/M\' = 1 and RD\' = 0.',
            'IOW\' (I/O Write): Active low when IO/M\' = 1 and WR\' = 0.'
          ],
          importantFormulasOrDiagrams: [
            'Truth Table for 8085 Control Signals:\nIO/M\'=0, RD\'=0 => MEMR\'=0\nIO/M\'=0, WR\'=0 => MEMW\'=0\nIO/M\'=1, RD\'=0 => IOR\'=0\nIO/M\'=1, WR\'=0 => IOW\'=0',
            'Circuit Diagram: IO/M\' inverted and ORed with RD\' produces MEMR\'.'
          ],
          commonMistakes: [
            'Confusing active-high with active-low inputs on 74LS138 decoder.',
            'Asserting MEMR\' and MEMW\' simultaneously (bus short-circuit).'
          ],
          simpleExample: 'When executing LDA 2000H, the CPU drives IO/M\'=0, RD\'=0, triggering MEMR\' low to activate RAM output enable (OE\').',
          csApplicationExample: 'In operating systems, protected memory hardware triggers segmentation faults when write strobes occur on read-only pages.'
        },
        activeRecall: {
          definitionQuestions: ['What are the four primary control signals required by memory and I/O devices in an 8085 system?'],
          explainQuestions: ['How are MEMR\', MEMW\', IOR\', and IOW\' generated from IO/M\', RD\', and WR\'?'],
          whyQuestions: ['Why did Intel combine IO and Memory control onto a shared IO/M\' pin rather than separate dedicated pins?'],
          differenceQuestions: ['Differentiate between machine cycle status lines S0, S1 and control signals RD\', WR\'.'],
          numericalOrCodeQuestions: ['What are the states of IO/M\', RD\', and WR\' during the execution of the instruction OUT 05H?']
        },
        practiceQuestions: {
          level1Easy: 'Draw the truth table for 8085 control signal generation.',
          level2Medium: 'Design a control signal generator circuit for 8085 using basic logic gates (NAND and Inverters).',
          level3Exam: 'TU 2080: Explain the generation of control signals MEMR\', MEMW\', IOR\', and IOW\' using 74LS138 3-to-8 decoder with neat circuit diagrams.',
          level4Challenge: 'Show how to interface a 2KB EPROM (2716) and 2KB RAM (6116) to 8085 using the generated control signals.'
        },
        tuPyqTarget: 'TU 2080 Control signal generation circuit past question',
        codingTask: 'Write a C++ simulation function that takes IO/M, RD, WR as boolean inputs and returns which control line is active.'
      }
    ]
  },
  {
    day: 10,
    phase: 1,
    phaseName: 'Phase 1: Foundation + Syllabus Mapping',
    phaseGoal: 'Phase 1 Audit & Consolidation: Complete Week 1 Boss Battle and review weak spots.',
    theme: 'Phase 1 Audit // First 10-Day Consolidation & Milestone Sprint',
    targetHours: { minimum: 3.0, normal: 6.0, high: 8.0 },
    dailyChallenge: 'WEEK 1 BOSS BATTLE: Complete the 20-Question Foundational Sprint across all 5 subjects under timed test conditions.',
    quote: 'Phase 1 Complete. Foundations are locked. You are building unshakeable competence.',
    completed: false,
    spacedRevisionDue: ['R4: Comprehensive 14-day spaced review of Sets, OOP Classes, 8085 Bus, RREF, and Data Scales'],
    sideQuest: 'Set up your GitHub profile, create a repository named "csit-winter-arc-os", and push your first C++ code commits.',
    codingHabit: {
      task: 'Combine Week 1 C++ topics: Build a CLI Student Record program using classes, constructors, and static student counter.',
      difficulty: 'Intermediate',
      durationMinutes: 60
    },
    subjects: [
      {
        subjectCode: 'CSC165',
        unit: 1,
        topic: 'Phase 1 Discrete Review: Sets, Extended Euclidean, Logic Proofs & Invertible Functions',
        theory: {
          topicTitle: 'Phase 1 Discrete Structure Consolidation',
          whatIsIt: 'Comprehensive review of Units 1, 2, and 3: Power sets, Inclusion-Exclusion, Bézout identity, CRT, Truth tables, and Proof by Contradiction.',
          whyDoesItExist: 'Connects algebraic discrete structures into a unified theoretical framework before entering induction and graph theory in Phase 2.',
          howDoesItWork: 'Review error logs from Days 1, 2, 5, 7, and 9. Solve representative problems without looking at solutions.',
          whereIsItUsedInCS: 'Core algorithmic reasoning across computer science.',
          keyDefinitions: [
            'Bézout Identity: gcd(a,b) = s*a + t*b',
            'PIE: |A ∪ B ∪ C| = ∑|A| - ∑|A ∩ B| + |A ∩ B ∩ C|'
          ],
          importantFormulasOrDiagrams: ['Complete summary formula chart for Units 1, 2, 3'],
          commonMistakes: ['Skipping verification of arithmetic steps in Extended Euclidean.'],
          simpleExample: 'Testing all Phase 1 problem types in 45 minutes.',
          csApplicationExample: 'Synthesizing discrete mathematical logic for writing bug-free algorithmic programs.'
        },
        activeRecall: {
          definitionQuestions: ['Recite the definition of bijective function, power set, and tautology without notes.'],
          explainQuestions: ['Explain the proof structure of contradiction vs contrapositive.'],
          whyQuestions: ['Why is the Extended Euclidean algorithm essential for public-key encryption?'],
          differenceQuestions: ['Differentiate between a relation and a function.'],
          numericalOrCodeQuestions: ['Find gcd(300, 126) and write as linear combination.']
        },
        practiceQuestions: {
          level1Easy: 'State Principle of Inclusion-Exclusion for 3 sets.',
          level2Medium: 'Solve: x ≡ 1 mod 3, x ≡ 2 mod 5, x ≡ 3 mod 7.',
          level3Exam: 'TU 2082: Full Section A mock questions for Units 1, 2, 3.',
          level4Challenge: 'Prove that if a and b are coprime integers, then gcd(a+b, a-b) is either 1 or 2.'
        },
        tuPyqTarget: 'TU 2079/2082 Discrete full Section A past paper simulation',
        codingTask: 'Write a C++ program that benchmarks the speed of Euclidean algorithm vs naive division for large numbers.'
      },
      {
        subjectCode: 'CSC166',
        unit: 2,
        topic: 'Phase 1 OOP Review: Class Design, Memory Layout, Constructors, Static & Friend',
        theory: {
          topicTitle: 'Phase 1 OOP Architecture Review',
          whatIsIt: 'Full review of C++ object lifecycle: default/parameterized/copy constructors, deep copy, destructors, static variables, and friend functions.',
          whyDoesItExist: 'Solidifies encapsulation principles before introducing Operator Overloading and Inheritance in Phase 2.',
          howDoesItWork: 'Analyze your own code written across Days 1, 4, and 7. Check for memory leaks and proper const-correctness.',
          whereIsItUsedInCS: 'Production C++ software engineering.',
          keyDefinitions: [
            'Deep Copy: Allocates new dynamic memory.',
            'Friend Function: Non-member function with private access.'
          ],
          importantFormulasOrDiagrams: ['Object memory layout diagram and constructor/destructor execution order'],
          commonMistakes: ['Omitting destructor cleanup for heap pointers.'],
          simpleExample: 'Creating an array of 5 Student objects and verifying static count.',
          csApplicationExample: 'Building a clean class API for a data structures library.'
        },
        activeRecall: {
          definitionQuestions: ['What is the exact signature of a C++ copy constructor?'],
          explainQuestions: ['Explain why static member functions cannot access the `this` pointer.'],
          whyQuestions: ['Why must destructors be declared when dynamic memory is allocated in constructors?'],
          differenceQuestions: ['Differentiate between passing by value and passing by const reference in C++.'],
          numericalOrCodeQuestions: ['Write a 10-line class demonstrating static count increment in constructor.']
        },
        practiceQuestions: {
          level1Easy: 'What are access specifiers in C++?',
          level2Medium: 'Write a program to demonstrate deep copy using a dynamic integer pointer inside a class.',
          level3Exam: 'TU 2082: Write a complete C++ program demonstrating static data members and friend function.',
          level4Challenge: 'Design a self-managing String class with reference counting.'
        },
        tuPyqTarget: 'TU 2080/2082 OOP Class design past paper questions',
        codingTask: 'Write a C++ student record manager with static count and clean constructor lifecycle.'
      }
    ]
  }
];

// Helper to generate Days 11 to 45 plans dynamically or programmatically
export function getComplete45DayRoadmap(): FortyFiveDayPlan[] {
  const completeRoadmap: FortyFiveDayPlan[] = [...INITIAL_45_DAY_ROADMAP];

  // ==========================================
  // PHASE 2: DAYS 11 - 25 | COMPLETE MAJOR SYLLABUS + QUESTION PRACTICE
  // ==========================================
  const phase2Themes = [
    { day: 11, theme: 'Binary Operator Overloading (Complex & String) & 8085 Timing Diagrams', s1: 'CSC166' as const, u1: 3, s2: 'CSC167' as const, u2: 3, goal: 'Master operator+ and Opcode Fetch timing' },
    { day: 12, theme: 'Mathematical Induction (Summations & Inequalities) & Matrix Inverses (IMT)', s1: 'CSC165' as const, u1: 4, s2: 'MTH168' as const, u2: 2, goal: 'Lock in 8 marks induction proof' },
    { day: 13, theme: 'Stream Overloading (<< & >>) & 8085 Memory Read/Write Waveforms', s1: 'CSC166' as const, u1: 3, s2: 'CSC167' as const, u2: 3, goal: 'Stream operators & MVI timing diagrams' },
    { day: 14, theme: 'Moments, Skewness, Kurtosis & LU Matrix Factorization', s1: 'STA169' as const, u1: 3, s2: 'MTH168' as const, u2: 2, goal: 'Central moments & LU decomposition' },
    { day: 15, theme: 'Inheritance Types & Virtual Base Class (Diamond Problem Solution)', s1: 'CSC166' as const, u1: 4, s2: 'CSC167' as const, u2: 4, goal: 'Virtual base class & 8085 addressing modes' },
    { day: 16, theme: 'Counting, Pigeonhole Principle & 8085 Assembly Code (Largest in Array)', s1: 'CSC165' as const, u1: 5, s2: 'CSC167' as const, u2: 4, goal: 'PHP proofs & 8085 array traversal code' },
    { day: 17, theme: 'Probability, Conditional Probability & Bayes\' Theorem Derivation', s1: 'STA169' as const, u1: 4, s2: 'MTH168' as const, u2: 3, goal: 'Bayes factory numericals & Cramer\'s rule' },
    { day: 18, theme: 'Virtual Functions, Pure Virtual Functions & 8085 Stack/Subroutines', s1: 'CSC166' as const, u1: 5, s2: 'CSC167' as const, u2: 4, goal: 'Runtime polymorphism & CALL/RET' },
    { day: 19, theme: 'Equivalence Relations, Posets, Hasse Diagrams & Vector Subspaces', s1: 'CSC165' as const, u1: 6, s2: 'MTH168' as const, u2: 4, goal: 'Hasse diagrams & Subspace criteria' },
    { day: 20, theme: 'Phase 2 Midpoint Milestone: OOP Mastery & 8085 Assembly Bubble Sort', s1: 'CSC166' as const, u1: 5, s2: 'CSC167' as const, u2: 4, goal: 'Day 20 Milestone: Timed past question drill' },
    { day: 21, theme: 'Null Space, Column Space, Rank-Nullity Theorem & 8085 Interrupts', s1: 'MTH168' as const, u1: 4, s2: 'CSC167' as const, u2: 5, goal: 'Rank + Nullity = n & TRAP/RST 7.5-5.5' },
    { day: 22, theme: 'Continuous Random Variables, PDF, Expectation & C++ Templates', s1: 'STA169' as const, u1: 5, s2: 'CSC166' as const, u2: 6, goal: 'E(X), Var(X) & Generic Stack template' },
    { day: 23, theme: 'Graph Theory, Handshaking Theorem, Euler Circuits & Memory Interfacing', s1: 'CSC165' as const, u1: 6, s2: 'CSC167' as const, u2: 5, goal: 'Euler graphs & 74LS138 memory interface' },
    { day: 24, theme: 'Eigenvalues, Eigenvectors & Diagonalization (A = P D P^-1)', s1: 'MTH168' as const, u1: 5, s2: 'CSC166' as const, u2: 6, goal: 'Eigenvalues & C++ Exception handling' },
    { day: 25, theme: 'Binomial & Poisson Distributions & 8255A Programmable Peripheral Interface', s1: 'STA169' as const, u1: 6, s2: 'CSC167' as const, u2: 6, goal: 'Binomial/Poisson & 8255 control word' }
  ];

  phase2Themes.forEach(p => {
    completeRoadmap.push({
      day: p.day,
      phase: 2,
      phaseName: 'Phase 2: Complete Major Syllabus + Question Practice',
      phaseGoal: 'Cover the heavyweight core units across all 5 subjects with intensive past year question solving.',
      theme: p.theme,
      targetHours: { minimum: 3.0, normal: 5.5, high: 7.5 },
      dailyChallenge: `Solve 4 TU past paper questions for ${p.s1} and ${p.s2} under exam conditions.`,
      quote: 'Consistency is the engine of mastery. The syllabus will bow before your daily work.',
      completed: false,
      spacedRevisionDue: [`R2: Spaced review of Day ${p.day - 3} topics`, `R3: Spaced review of Day ${p.day - 7} topics`],
      sideQuest: `Side Quest: Solve 1 LeetCode beginner problem or read documentation on ${p.s1}.`,
      codingHabit: {
        task: `Write a clean C++ program implementing the ${p.s1} topic of the day independently without AI.`,
        difficulty: 'OOP',
        durationMinutes: 45
      },
      subjects: [
        {
          subjectCode: p.s1,
          unit: p.u1,
          topic: `${p.s1} Unit ${p.u1} Core Theory and Numerical Exercises`,
          theory: {
            topicTitle: `${p.s1} Unit ${p.u1} Deep Dive`,
            whatIsIt: `Comprehensive study of ${p.s1} Unit ${p.u1} syllabus requirements.`,
            whyDoesItExist: 'Core component of BSc CSIT Semester II curriculum tested heavily in Section A and B.',
            howDoesItWork: 'Review definitions, theorems, derivation steps, and apply to past paper questions.',
            whereIsItUsedInCS: 'Fundamental principles applied directly in Computer Science software and systems.',
            keyDefinitions: ['Review primary definitions for this unit.'],
            importantFormulasOrDiagrams: ['Standard TU examination formulas for Unit ' + p.u1],
            commonMistakes: ['Skipping verification steps and misreading question sub-parts.'],
            simpleExample: 'Walkthrough of standard TU model problem.',
            csApplicationExample: 'Real-world software or hardware application.'
          },
          activeRecall: {
            definitionQuestions: [`State key definitions for ${p.s1} Unit ${p.u1}.`],
            explainQuestions: [`Explain the core concept of ${p.s1} Unit ${p.u1}.`],
            whyQuestions: [`Why is this concept necessary in computational systems?`],
            differenceQuestions: [`Compare and contrast main approaches in Unit ${p.u1}.`],
            numericalOrCodeQuestions: [`Solve a representative TU examination numerical for ${p.s1}.`]
          },
          practiceQuestions: {
            level1Easy: `Define the primary terms in ${p.s1} Unit ${p.u1}.`,
            level2Medium: `Solve a standard textbook problem for ${p.s1} Unit ${p.u1}.`,
            level3Exam: `TU Past Question: Solve the 8-mark board question for ${p.s1} Unit ${p.u1}.`,
            level4Challenge: `Solve an unfamiliar challenge problem combining multiple concepts in ${p.s1}.`
          },
          tuPyqTarget: `TU 2082/2081 ${p.s1} Unit ${p.u1} past questions`,
          codingTask: `Code a C++ demonstration program for ${p.s1}.`
        },
        {
          subjectCode: p.s2,
          unit: p.u2,
          topic: `${p.s2} Unit ${p.u2} Core Theory and Practice`,
          theory: {
            topicTitle: `${p.s2} Unit ${p.u2} Deep Dive`,
            whatIsIt: `Comprehensive study of ${p.s2} Unit ${p.u2} syllabus requirements.`,
            whyDoesItExist: 'Essential for passing Section A and Section B in TU board exams.',
            howDoesItWork: 'Apply step-by-step algorithms and derivation proofs.',
            whereIsItUsedInCS: 'Underpins real hardware and algorithmic systems.',
            keyDefinitions: ['Key definitions and notations for Unit ' + p.u2],
            importantFormulasOrDiagrams: ['Standard TU diagrams or formulas for Unit ' + p.u2],
            commonMistakes: ['Algebraic errors and omitting units.'],
            simpleExample: 'Step-by-step solved problem.',
            csApplicationExample: 'Hardware/software architecture integration.'
          },
          activeRecall: {
            definitionQuestions: [`Define the core terms in ${p.s2} Unit ${p.u2}.`],
            explainQuestions: [`Explain how this concept functions in ${p.s2}.`],
            whyQuestions: [`Why does this mechanism exist?`],
            differenceQuestions: [`Differentiate related components in Unit ${p.u2}.`],
            numericalOrCodeQuestions: [`Solve an exam numerical or write assembly snippet.`]
          },
          practiceQuestions: {
            level1Easy: `Basic question for ${p.s2} Unit ${p.u2}.`,
            level2Medium: `Standard TU difficulty question for ${p.s2} Unit ${p.u2}.`,
            level3Exam: `TU Board exam past question for ${p.s2} Unit ${p.u2}.`,
            level4Challenge: `Advanced analytical question for ${p.s2} Unit ${p.u2}.`
          },
          tuPyqTarget: `TU 2082/2081 ${p.s2} Unit ${p.u2} past questions`,
          codingTask: `Practice implementation or dry-run assembly trace.`
        }
      ]
    });
  });

  // ==========================================
  // PHASE 3: DAYS 26 - 35 | ADVANCED PRACTICE + PAST QUESTIONS
  // ==========================================
  const phase3Themes = [
    { day: 26, theme: 'Dijkstra Shortest Path, Kruskal MST & C++ Binary File Handling', s1: 'CSC165' as const, u1: 6, s2: 'CSC166' as const, u2: 7 },
    { day: 27, theme: 'Normal Distribution (Standard Normal Z-Table Masterclass) & 8259A PIC', s1: 'STA169' as const, u1: 6, s2: 'CSC167' as const, u2: 6 },
    { day: 28, theme: 'Gram-Schmidt Orthonormalization & Binary Trees Traversal', s1: 'MTH168' as const, u1: 6, s2: 'CSC165' as const, u2: 6 },
    { day: 29, theme: '8086 Architecture (BIU, EU, Queue, Physical Address) & File Pointers', s1: 'CSC167' as const, u1: 7, s2: 'CSC166' as const, u2: 7 },
    { day: 30, theme: 'Karl Pearson Correlation, Linear Regression Lines & Least Squares SVD', s1: 'STA169' as const, u1: 7, s2: 'MTH168' as const, u2: 6 },
    { day: 31, theme: 'Discrete Structure Full TU 2082 Paper Simulation (3-Hour Timed Sprint)', s1: 'CSC165' as const, u1: 1, s2: 'CSC165' as const, u2: 6 },
    { day: 32, theme: 'OOP C++ Full TU 2082 Paper Simulation (Writing Code On Paper First)', s1: 'CSC166' as const, u1: 1, s2: 'CSC166' as const, u2: 7 },
    { day: 33, theme: 'Microprocessor Full TU 2082 Paper Simulation (Timing Diagrams & Programs)', s1: 'CSC167' as const, u1: 1, s2: 'CSC167' as const, u2: 7 },
    { day: 34, theme: 'Mathematics II Full TU 2082 Paper Simulation (RREF, LU, Gram-Schmidt)', s1: 'MTH168' as const, u1: 1, s2: 'MTH168' as const, u2: 6 },
    { day: 35, theme: 'Statistics I Full TU 2082 Paper Simulation (Normal, Bayes, Regression)', s1: 'STA169' as const, u1: 1, s2: 'STA169' as const, u2: 7 }
  ];

  phase3Themes.forEach(p => {
    completeRoadmap.push({
      day: p.day,
      phase: 3,
      phaseName: 'Phase 3: Advanced Practice + Past Questions',
      phaseGoal: 'Crush past board papers under real exam pressure and master guaranteed high-yield question patterns.',
      theme: p.theme,
      targetHours: { minimum: 3.0, normal: 6.0, high: 8.0 },
      dailyChallenge: `Complete full 3-hour timed past paper sprint for ${p.s1}. Score your paper using official TU rubrics.`,
      quote: 'Pressure is a privilege. It means you are in a position to achieve something exceptional.',
      completed: false,
      spacedRevisionDue: [`R3: Spaced revision of Phase 2 core topics`, `R4: Review mistake notebook entries`],
      sideQuest: 'Contribute a small documentation fix or code sample to your GitHub project repository.',
      codingHabit: {
        task: `Write a complete C++ mini-project module or solve an algorithm challenge connected to ${p.s1}.`,
        difficulty: 'Algorithm',
        durationMinutes: 45
      },
      subjects: [
        {
          subjectCode: p.s1,
          unit: p.u1,
          topic: `${p.s1} Full Past Paper Analysis & High-Yield Drill`,
          theory: {
            topicTitle: `${p.s1} Board Exam Mastery`,
            whatIsIt: 'Full paper analysis of recent 5-year TU board examination papers (2078-2082).',
            whyDoesItExist: 'TU board exams draw from consistent underlying conceptual patterns.',
            howDoesItWork: 'Timed solving, strict marking against solutions, logging every error into Mistake Tracker.',
            whereIsItUsedInCS: 'Academic excellence and problem-solving speed under pressure.',
            keyDefinitions: ['Review all high-frequency definitions.'],
            importantFormulasOrDiagrams: ['All key diagrams and identities.'],
            commonMistakes: ['Rushing through Section A and running out of time on Section B.'],
            simpleExample: 'Timed solving strategy.',
            csApplicationExample: 'Technical coding interview and exam performance.'
          },
          activeRecall: {
            definitionQuestions: [`Recall 5 guaranteed definitions in ${p.s1}.`],
            explainQuestions: [`Explain the top 3 long-answer topics in ${p.s1}.`],
            whyQuestions: [`Why do certain derivation steps carry partial marks in TU marking?`],
            differenceQuestions: [`Compare all related concepts in this paper.`],
            numericalOrCodeQuestions: [`Solve a 10-mark long question under 20 minutes.`]
          },
          practiceQuestions: {
            level1Easy: '5-mark theory short question.',
            level2Medium: '6-mark standard problem.',
            level3Exam: '8-mark guaranteed TU board question.',
            level4Challenge: '10-mark comprehensive long problem.'
          },
          tuPyqTarget: `TU 2082 Complete Board Paper for ${p.s1}`,
          codingTask: 'Write all code solutions on paper first, then compile to verify.'
        },
        {
          subjectCode: p.s2,
          unit: p.u2,
          topic: `${p.s2} Support Revision & Question Drill`,
          theory: {
            topicTitle: `${p.s2} Review`,
            whatIsIt: 'Targeted drill of high-yield questions for ' + p.s2,
            whyDoesItExist: 'Maintains cross-subject memory retention.',
            howDoesItWork: 'Active recall and rapid formula verification.',
            whereIsItUsedInCS: 'Foundation of computer science.',
            keyDefinitions: ['Key formulas'],
            importantFormulasOrDiagrams: ['Key diagrams'],
            commonMistakes: ['Formula confusion'],
            simpleExample: 'Quick problem',
            csApplicationExample: 'Systems'
          },
          activeRecall: {
            definitionQuestions: ['Recall key formula.'],
            explainQuestions: ['Explain derivation step.'],
            whyQuestions: ['Why this step?'],
            differenceQuestions: ['Difference between two forms.'],
            numericalOrCodeQuestions: ['Rapid numerical.']
          },
          practiceQuestions: {
            level1Easy: 'Easy question.',
            level2Medium: 'Medium question.',
            level3Exam: 'TU Exam question.',
            level4Challenge: 'Challenge question.'
          },
          tuPyqTarget: `TU 2081 ${p.s2} Past paper question`,
          codingTask: 'Complete daily programming habit.'
        }
      ]
    });
  });

  // ==========================================
  // PHASE 4: DAYS 36 - 40 | FULL REVISION + WEAK-TOPIC REPAIR
  // ==========================================
  const phase4Themes = [
    { day: 36, theme: 'Mistake Notebook Repair: Discrete Structures & OOP C++ Weak Spots', s1: 'CSC165' as const, u1: 3, s2: 'CSC166' as const, u2: 3 },
    { day: 37, theme: 'Mistake Notebook Repair: Microprocessor & Mathematics II Weak Spots', s1: 'CSC167' as const, u1: 3, s2: 'MTH168' as const, u2: 5 },
    { day: 38, theme: 'Mistake Notebook Repair: Statistics I & High-Yield Formula Lockdown', s1: 'STA169' as const, u1: 6, s2: 'STA169' as const, u2: 4 },
    { day: 39, theme: 'Speed Drill: Writing Top 10 Guaranteed TU Questions Across All 5 Subjects', s1: 'CSC165' as const, u1: 6, s2: 'CSC167' as const, u2: 2 },
    { day: 40, theme: 'Formula Memorization Lockdown & Diagram Perfection Sprint', s1: 'MTH168' as const, u1: 6, s2: 'CSC166' as const, u2: 4 }
  ];

  phase4Themes.forEach(p => {
    completeRoadmap.push({
      day: p.day,
      phase: 4,
      phaseName: 'Phase 4: Full Revision + Weak-Topic Repair',
      phaseGoal: 'Review Mistake Log codes A-K, eliminate lingering conceptual gaps, and lock down every formula and diagram.',
      theme: p.theme,
      targetHours: { minimum: 2.5, normal: 5.0, high: 7.0 },
      dailyChallenge: 'Review your Mistake Tracker. Re-solve every single problem you got wrong earlier without looking at the solution.',
      quote: 'Champions don\'t become champions in the ring; they are merely recognized there.',
      completed: false,
      spacedRevisionDue: [`R4: Spaced revision of all logged mistakes`, `R5: Pre-exam comprehensive formula scan`],
      sideQuest: 'Explain a difficult concept (like Virtual Base Class or Gram-Schmidt) to a classmate or out loud without notes.',
      codingHabit: {
        task: 'Light coding: Review C++ syntax rules, dynamic memory cleanups, and file stream error flags.',
        difficulty: 'OOP',
        durationMinutes: 30
      },
      subjects: [
        {
          subjectCode: p.s1,
          unit: p.u1,
          topic: `${p.s1} Weak Topic Repair & Mistake Log Review`,
          theory: {
            topicTitle: `${p.s1} Flaw Elimination`,
            whatIsIt: 'Re-solving problems classified under Mistake Codes A to K.',
            whyDoesItExist: 'Fixing your own specific weaknesses produces the highest possible score increase in the final 10 days.',
            howDoesItWork: 'Isolate root cause (concept, formula, careless, syntax) and verify mastery.',
            whereIsItUsedInCS: 'Debugging and post-mortem analysis in engineering.',
            keyDefinitions: ['Formulas where you previously made errors.'],
            importantFormulasOrDiagrams: ['Precision diagrams.'],
            commonMistakes: ['Repeating previous careless calculation errors.'],
            simpleExample: 'Corrected step-by-step solution.',
            csApplicationExample: 'Root cause analysis in software quality assurance.'
          },
          activeRecall: {
            definitionQuestions: ['What mistake did you previously make on this topic?'],
            explainQuestions: ['Explain the correct conceptual method now.'],
            whyQuestions: ['Why was your original approach flawed?'],
            differenceQuestions: ['What is the correct mathematical identity?'],
            numericalOrCodeQuestions: ['Re-solve the exact problem from scratch in 10 minutes.']
          },
          practiceQuestions: {
            level1Easy: 'Review definition question.',
            level2Medium: 'Re-solve medium question.',
            level3Exam: 'TU Past question with previous error.',
            level4Challenge: 'Variation of the past question.'
          },
          tuPyqTarget: `Re-solve TU past questions from Mistake Notebook for ${p.s1}`,
          codingTask: 'Verify error fix in code.'
        },
        {
          subjectCode: p.s2,
          unit: p.u2,
          topic: `${p.s2} Precision Drill`,
          theory: {
            topicTitle: `${p.s2} Precision Review`,
            whatIsIt: 'Diagram and derivation speed verification.',
            whyDoesItExist: 'Guarantees full marks in TU theory questions.',
            howDoesItWork: 'Timed pen-and-paper writing.',
            whereIsItUsedInCS: 'Hardware and systems.',
            keyDefinitions: ['Key terms'],
            importantFormulasOrDiagrams: ['Waveforms and schematics'],
            commonMistakes: ['Ruler-less messy diagrams'],
            simpleExample: 'Clean schematic',
            csApplicationExample: 'System documentation'
          },
          activeRecall: {
            definitionQuestions: ['Define key pin/term.'],
            explainQuestions: ['Explain architecture block.'],
            whyQuestions: ['Why this flag?'],
            differenceQuestions: ['Compare modes.'],
            numericalOrCodeQuestions: ['Draw timing diagram in 5 minutes.']
          },
          practiceQuestions: {
            level1Easy: 'Basic question.',
            level2Medium: 'Medium question.',
            level3Exam: 'TU Exam question.',
            level4Challenge: 'Challenge question.'
          },
          tuPyqTarget: `TU 2082 ${p.s2} Diagram questions`,
          codingTask: 'Practice speed sketch.'
        }
      ]
    });
  });

  // ==========================================
  // PHASE 5: DAYS 41 - 45 | MOCK EXAMS + FINAL REVISION
  // ==========================================
  const phase5Themes = [
    { day: 41, theme: 'FINAL BOSS MOCK 1: Discrete Structure (CSC165) Full 3-Hour Simulation', s1: 'CSC165' as const, u1: 1, s2: 'CSC165' as const, u2: 6 },
    { day: 42, theme: 'FINAL BOSS MOCK 2: Object-Oriented Programming (CSC166) Full 3-Hour Simulation', s1: 'CSC166' as const, u1: 1, s2: 'CSC166' as const, u2: 7 },
    { day: 43, theme: 'FINAL BOSS MOCK 3: Microprocessor (CSC167) Full 3-Hour Simulation', s1: 'CSC167' as const, u1: 1, s2: 'CSC167' as const, u2: 7 },
    { day: 44, theme: 'FINAL BOSS MOCK 4: Mathematics II (MTH168) Full 3-Hour Simulation (80 Marks)', s1: 'MTH168' as const, u1: 1, s2: 'MTH168' as const, u2: 6 },
    { day: 45, theme: 'FINAL BOSS MOCK 5: Statistics I (STA169) & Final Winter Arc Victory Ceremony', s1: 'STA169' as const, u1: 1, s2: 'STA169' as const, u2: 7 }
  ];

  phase5Themes.forEach(p => {
    completeRoadmap.push({
      day: p.day,
      phase: 5,
      phaseName: 'Phase 5: Mock Exams + Final Revision',
      phaseGoal: 'Execute full 3-hour TU board mock examinations under strict exam conditions, align sleep, and lock in top distinction readiness.',
      theme: p.theme,
      targetHours: { minimum: 3.0, normal: 5.0, high: 6.0 },
      dailyChallenge: `FINAL BOSS BATTLE: Sit for a complete 3-hour timed board mock exam for ${p.s1} without looking at any notes or AI.`,
      quote: 'You conquered the 45-day Winter Arc. The syllabus is finished. Walk into the TU exam hall with the calm confidence of a master.',
      completed: false,
      spacedRevisionDue: ['R5: Final Pre-Exam Summary Sheet Scan'],
      sideQuest: 'Organize your physical exam stationery, admit card, calculator, pens, and sleep early by 10:00 PM.',
      codingHabit: {
        task: 'Light 15-minute mental review of C++ OOP syntax and memory rules. Rest your eyes.',
        difficulty: 'Beginner',
        durationMinutes: 15
      },
      subjects: [
        {
          subjectCode: p.s1,
          unit: p.u1,
          topic: `${p.s1} Final Full-Length TU Board Mock Examination`,
          theory: {
            topicTitle: `${p.s1} Board Exam Simulation`,
            whatIsIt: 'Full 60/80-mark TU IOST mock examination paper covering all units proportionally.',
            whyDoesItExist: 'Tests mental endurance, handwriting speed, and time allocation under 3-hour exam pressure.',
            howDoesItWork: 'Section A (20-40 marks) in first 60 mins; Section B (40 marks) in next 90 mins; final 30 mins for review.',
            whereIsItUsedInCS: 'High-stakes academic and professional performance.',
            keyDefinitions: ['Complete mental syllabus map.'],
            importantFormulasOrDiagrams: ['All key formulas.'],
            commonMistakes: ['Spending 45 minutes on one question.'],
            simpleExample: 'Optimal 3-hour time management.',
            csApplicationExample: 'Engineering execution under strict deadlines.'
          },
          activeRecall: {
            definitionQuestions: ['Full mental syllabus scan.'],
            explainQuestions: ['Answer all Section A long questions.'],
            whyQuestions: ['Verify every calculation step.'],
            differenceQuestions: ['Clear comparison tables.'],
            numericalOrCodeQuestions: ['Complete paper solve under 180 minutes.']
          },
          practiceQuestions: {
            level1Easy: 'Section B question 1.',
            level2Medium: 'Section B question 2.',
            level3Exam: 'Section A question 1.',
            level4Challenge: 'Section A question 2.'
          },
          tuPyqTarget: `Complete TU 2082 Mock Exam for ${p.s1}`,
          codingTask: 'Review handwritten code clarity.'
        },
        {
          subjectCode: p.s2,
          unit: p.u2,
          topic: `${p.s2} Final Mental Check & Rest Protocol`,
          theory: {
            topicTitle: `${p.s2} Readiness`,
            whatIsIt: 'Final formula card review and mental calm.',
            whyDoesItExist: 'Cognitive rest before exam day is as critical as preparation.',
            howDoesItWork: 'Review 2-page cheat sheet.',
            whereIsItUsedInCS: 'Mindset.',
            keyDefinitions: ['Master cheat sheet.'],
            importantFormulasOrDiagrams: ['Final formula scan.'],
            commonMistakes: ['Cramming late at night and losing sleep.'],
            simpleExample: 'Sleeping 8 hours.',
            csApplicationExample: 'Peak mental performance.'
          },
          activeRecall: {
            definitionQuestions: ['Rapid mental check.'],
            explainQuestions: ['Confident recall.'],
            whyQuestions: ['Clear reasoning.'],
            differenceQuestions: ['Sharp differentiation.'],
            numericalOrCodeQuestions: ['Ready for distinction!']
          },
          practiceQuestions: {
            level1Easy: 'Formula recall.',
            level2Medium: 'Theorem verification.',
            level3Exam: 'TU Examination ready.',
            level4Challenge: 'Distinction level.'
          },
          tuPyqTarget: 'Full exam readiness',
          codingTask: 'Pack your exam kit and rest.'
        }
      ]
    });
  });

  return completeRoadmap;
}

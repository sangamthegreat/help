import { SubjectData } from '../types';

export const CSIT_SUBJECTS: SubjectData[] = [
  {
    code: 'CSC165',
    legacyCode: 'CSC160',
    name: 'Discrete Structure',
    alias: 'Discrete Math',
    credits: 3,
    fullMarks: 100,
    passMarks: 40,
    theoryMarks: 60,
    practicalMarks: 20,
    internalMarks: 20,
    description: 'Core theoretical foundation for computer science: propositional logic, proof methods, sets, induction, recurrence relations, graph theory, trees, and Boolean algebra.',
    color: '#3b82f6',
    badgeBg: 'bg-blue-500/10 border-blue-500/30',
    badgeText: 'text-blue-400',
    icon: 'BrainCircuit',
    hamroCsitUrl: 'https://hamrocsit.com/semester/second/discrete-structures',
    easyCsitUrl: 'https://easycsit.com/semester/2/discrete-structures',
    recommendedBooks: [
      'Kenneth H. Rosen - Discrete Mathematics and Its Applications (7th/8th Edition)',
      'Bernard Kolman, Robert Busby - Discrete Mathematical Structures (6th Edition)'
    ],
    dependencyTree: {
      prerequisite: 'C Programming (CSC110) & Basic High School Set Theory',
      coreRoleInCS: 'Essential mathematical underpinning for Algorithms, Compiler Design, Database Relational Algebra, and Cryptography.',
      nextInSemester3: 'Data Structures and Algorithms (CSC211)'
    },
    examStrategy: [
      'Mathematical Induction & Strong Induction: Guaranteed 6–8 marks every single TU board sitting.',
      'Dijkstra\'s Shortest Path & Kruskal\'s MST: High scoring if matrix tables and edge sets are drawn neatly.',
      'Extended Euclidean Algorithm & Chinese Remainder Theorem: Direct algorithmic numericals with fixed calculation steps.',
      'Proof by Contradiction (e.g., √2 is irrational): Standard 5-mark proof pattern.'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'Basic Discrete Structures & Functions',
        hours: 7,
        weightageMarks: 10,
        topics: [
          'Sets, Subsets, Power sets, Cartesian products and Set operations',
          'Venn diagrams and Principle of Inclusion-Exclusion (PIE) for 2 and 3 sets',
          'Computer representation of sets (Bit string representation)',
          'Functions: Injective (One-to-one), Surjective (Onto), and Bijective functions',
          'Inverse functions, Composite functions, Ceiling and Floor functions',
          'Fuzzy sets: Membership functions (μ) and Fuzzy set operations (Union, Intersection, Complement)',
          'Sequences and Summations: Arithmetic, Geometric progressions and Double summations'
        ],
        keyFormulasOrConcepts: [
          '|A ∪ B ∪ C| = |A| + |B| + |C| - |A ∩ B| - |B ∩ C| - |A ∩ C| + |A ∩ B ∩ C|',
          'Fuzzy Intersection: μ_{A ∩ B}(x) = min(μ_A(x), μ_B(x))',
          'Fuzzy Union: μ_{A ∪ B}(x) = max(μ_A(x), μ_B(x))'
        ],
        csApplications: [
          'Relational database joins (Cartesian product and set intersection)',
          'Bitmasking in competitive programming (Bit string set representation)',
          'Fuzzy logic controllers in embedded systems and robotics'
        ],
        commonMistakes: [
          'Confusing injective (requires f(a)=f(b) => a=b) with surjective (requires codomain = range).',
          'Forgetting the 3-set overlap term (+|A ∩ B ∩ C|) in the Inclusion-Exclusion formula.'
        ],
        importantPYQs: [
          {
            id: 'csc165-u1-1',
            subjectCode: 'CSC165',
            unit: 1,
            topic: 'Functions & Invertibility',
            year: '2081 TU',
            question: 'Define bijective function. Let f: R -> R be defined by f(x) = 3x - 7. Prove that f is bijective and determine its inverse f^-1(x).',
            marks: 6,
            difficulty: 2,
            questionType: 'Proof',
            classification: 'CORE_SYLLABUS',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/discrete-structures',
            solutionHint: 'Prove 1-1 by setting f(x1)=f(x2) => 3x1-7=3x2-7 => x1=x2. Prove onto: for any y in R, x=(y+7)/3 in R. Inverse is f^-1(x)=(x+7)/3.'
          },
          {
            id: 'csc165-u1-2',
            subjectCode: 'CSC165',
            unit: 1,
            topic: 'Principle of Inclusion-Exclusion',
            year: '2080 TU',
            question: 'State Principle of Inclusion-Exclusion for three sets. In a class of 120 CSIT students, 65 study C++, 45 study Java, 42 study Python, 20 study C++ and Java, 25 study C++ and Python, 15 study Java and Python, and 8 study all three. How many study none?',
            marks: 6,
            difficulty: 3,
            questionType: 'Numerical',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'EasyCSIT',
            sourceUrl: 'https://easycsit.com',
            solutionHint: '|A ∪ B ∪ C| = 65+45+42 - (20+25+15) + 8 = 152 - 60 + 8 = 100. Students taking none = 120 - 100 = 20.'
          }
        ]
      },
      {
        unitNumber: 2,
        title: 'Integers, Modular Arithmetic & Matrices',
        hours: 6,
        weightageMarks: 10,
        topics: [
          'Division algorithm, Prime numbers and Greatest Common Divisor (GCD)',
          'Euclidean Algorithm and Extended Euclidean Algorithm (Bézout identity: s*a + t*b = gcd)',
          'Linear Congruences and Modular Inverses',
          'Chinese Remainder Theorem (CRT) with algorithmic solution',
          'Boolean Matrices: Join (∨), Meet (∧), and Boolean Product (⊙)'
        ],
        keyFormulasOrConcepts: [
          'Extended Euclidean: gcd(a, b) = s*a + t*b',
          'CRT: x ≡ ∑ (a_i * M_i * y_i) (mod M) where M = ∏ m_i, M_i = M/m_i, and M_i * y_i ≡ 1 (mod m_i)',
          'Boolean Product: C = A ⊙ B where c_ij = ⋁_{k=1}^n (a_ik ∧ b_kj)'
        ],
        csApplications: [
          'RSA Public-Key Cryptography (Modular inverse & Extended Euclidean Algorithm)',
          'Hash tables & checksums (Modulo arithmetic)',
          'Transitive closure in graph databases (Boolean matrix multiplication)'
        ],
        commonMistakes: [
          'Making sign errors during back-substitution in the Extended Euclidean Algorithm.',
          'Forgetting that moduli in Chinese Remainder Theorem MUST be pairwise coprime.'
        ],
        importantPYQs: [
          {
            id: 'csc165-u2-1',
            subjectCode: 'CSC165',
            unit: 2,
            topic: 'Extended Euclidean Algorithm',
            year: '2082 TU',
            question: 'Using Extended Euclidean Algorithm, find gcd(428, 164) and express it as a linear combination of 428 and 164.',
            marks: 8,
            difficulty: 3,
            questionType: 'Numerical',
            classification: 'CORE_SYLLABUS',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/discrete-structures',
            solutionHint: '428 = 2*164 + 100; 164 = 1*100 + 64; 100 = 1*64 + 36; 64 = 1*36 + 28; 36 = 1*28 + 8; 28 = 3*8 + 4; 8 = 2*4 + 0. gcd = 4. Back substitute to find s and t.'
          },
          {
            id: 'csc165-u2-2',
            subjectCode: 'CSC165',
            unit: 2,
            topic: 'Chinese Remainder Theorem',
            year: '2079 TU',
            question: 'Solve the system of congruences using Chinese Remainder Theorem: x ≡ 2 (mod 3), x ≡ 3 (mod 5), x ≡ 2 (mod 7).',
            marks: 6,
            difficulty: 3,
            questionType: 'Numerical',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'EasyCSIT',
            sourceUrl: 'https://easycsit.com',
            solutionHint: 'm1=3, m2=5, m3=7. M=105. M1=35, M2=21, M3=15. Modular inverses: 35y1≡1(mod 3)=>2y1≡1=>y1=2. 21y2≡1(mod 5)=>y2=1. 15y3≡1(mod 7)=>y3=1. x=(2*35*2 + 3*21*1 + 2*15*1) mod 105 = (140+63+30) mod 105 = 233 mod 105 = 23.'
          }
        ]
      },
      {
        unitNumber: 3,
        title: 'Logic and Proof Methods',
        hours: 6,
        weightageMarks: 10,
        topics: [
          'Propositions, Truth tables, Compound propositions, Logical equivalences',
          'Tautologies, Contradictions, Contingencies, De Morgan\'s Laws',
          'Predicates and Quantifiers (Universal ∀ and Existential ∃)',
          'Rules of Inference (Modus Ponens, Modus Tollens, Hypothetical Syllogism, Resolution)',
          'Methods of Proof: Direct proof, Proof by Contradiction, Proof by Contrapositive'
        ],
        keyFormulasOrConcepts: [
          'Contrapositive of p → q is ¬q → ¬p (Equivalence)',
          'Modus Ponens: ((p → q) ∧ p) ⇒ q',
          'Negation of Quantifiers: ¬(∀x P(x)) ≡ ∃x ¬P(x)'
        ],
        csApplications: [
          'Boolean satisfiability (SAT solvers) in formal verification',
          'Automated theorem proving in artificial intelligence (Resolution refutation)',
          'Compiler branch optimization'
        ],
        commonMistakes: [
          'Confusing contrapositive (¬q → ¬p) with converse (q → p) or inverse (¬p → ¬q).',
          'Negating ∀x P(x) as ∀x ¬P(x) instead of ∃x ¬P(x).'
        ],
        importantPYQs: [
          {
            id: 'csc165-u3-1',
            subjectCode: 'CSC165',
            unit: 3,
            topic: 'Methods of Proof',
            year: '2081 TU',
            question: 'Prove by contradiction that √2 is an irrational number.',
            marks: 6,
            difficulty: 2,
            questionType: 'Proof',
            classification: 'CORE_SYLLABUS',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/discrete-structures',
            solutionHint: 'Assume √2 = a/b where a,b are integers with gcd(a,b)=1. 2 = a^2/b^2 => a^2 = 2b^2 (a is even, a=2k). 4k^2 = 2b^2 => b^2 = 2k^2 (b is even). Contradiction to gcd(a,b)=1.'
          }
        ]
      },
      {
        unitNumber: 4,
        title: 'Induction and Recursion',
        hours: 5,
        weightageMarks: 8,
        topics: [
          'Principle of Mathematical Induction (Base step & Inductive step)',
          'Strong Induction and the Well-Ordering Property',
          'Recursive definitions of functions, sets, and algorithms',
          'Structural induction'
        ],
        keyFormulasOrConcepts: [
          'Mathematical Induction: [P(1) ∧ (∀k (P(k) → P(k+1)))] ⇒ ∀n P(n)',
          'Strong Induction: [P(1) ∧ (∀k (P(1) ∧ ... ∧ P(k) → P(k+1)))] ⇒ ∀n P(n)'
        ],
        csApplications: [
          'Proving correctness of recursive algorithms (e.g., MergeSort, Binary Search)',
          'Loop invariants in software verification',
          'Recursive descent parsers in compilers'
        ],
        commonMistakes: [
          'Assuming P(k+1) is true instead of assuming P(k) and PROVING P(k+1).',
          'Skipping base step verification.'
        ],
        importantPYQs: [
          {
            id: 'csc165-u4-1',
            subjectCode: 'CSC165',
            unit: 4,
            topic: 'Mathematical Induction',
            year: '2082 TU',
            question: 'Prove by mathematical induction that 1^2 + 2^2 + 3^2 + ... + n^2 = [n(n+1)(2n+1)] / 6 for all integers n ≥ 1.',
            marks: 6,
            difficulty: 3,
            questionType: 'Derivation',
            classification: 'CORE_SYLLABUS',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/discrete-structures',
            solutionHint: 'Base n=1: 1^2 = 1*2*3/6 = 1. Assume true for n=k. For n=k+1: Add (k+1)^2 to k(k+1)(2k+1)/6. Factor (k+1)/6 [2k^2+k + 6k+6] = (k+1)(k+2)(2k+3)/6.'
          }
        ]
      },
      {
        unitNumber: 5,
        title: 'Counting and Discrete Probability',
        hours: 8,
        weightageMarks: 10,
        topics: [
          'Basic counting techniques: Sum Rule and Product Rule',
          'The Pigeonhole Principle & Generalized Pigeonhole Principle (⌈N/k⌉)',
          'Permutations and Combinations, Binomial Coefficients & Pascal\'s Identity',
          'Discrete Probability, Conditional Probability, Independence, Bayes\' Theorem'
        ],
        keyFormulasOrConcepts: [
          'Generalized PHP: If N objects are placed into k boxes, at least one box contains ⌈N/k⌉ objects',
          'Binomial Theorem: (x + y)^n = ∑_{k=0}^n C(n, k) x^{n-k} y^k',
          'Bayes: P(A|B) = [P(B|A) * P(A)] / P(B)'
        ],
        csApplications: [
          'Collision bounds in Hash tables (Birthday paradox & PHP)',
          'Complexity analysis of brute force algorithms',
          'Naive Bayes classifiers in Machine Learning'
        ],
        commonMistakes: [
          'Not correctly identifying what represents pigeons vs pigeonholes in word problems.',
          'Confusing permutations (order matters) with combinations (order does not matter).'
        ],
        importantPYQs: [
          {
            id: 'csc165-u5-1',
            subjectCode: 'CSC165',
            unit: 5,
            topic: 'Pigeonhole Principle',
            year: '2080 TU',
            question: 'State Pigeonhole Principle. Show that among any 51 positive integers chosen from 1 to 100, there must be two whose sum is 101.',
            marks: 5,
            difficulty: 3,
            questionType: 'Conceptual',
            classification: 'CORE_SYLLABUS',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/discrete-structures',
            solutionHint: 'Construct 50 sets of pairs that sum to 101: {1, 100}, {2, 99}, ..., {50, 51}. By PHP, choosing 51 numbers into 50 pigeonholes forces at least 2 numbers from the same pair.'
          }
        ]
      },
      {
        unitNumber: 6,
        title: 'Relations, Graphs & Trees',
        hours: 13,
        weightageMarks: 12,
        topics: [
          'Relations and properties: Reflexive, Symmetric, Antisymmetric, Transitive',
          'Equivalence Relations & Partial Orderings (Posets, Hasse Diagrams)',
          'Graph models, Types of Graphs, Adjacency Matrix & List, Graph Isomorphism',
          'Euler Paths & Circuits (Eulerian theorem), Hamiltonian Paths & Cycles',
          'Shortest path: Dijkstra\'s Algorithm with table trace',
          'Trees: Properties, Tree traversals (Preorder, Inorder, Postorder)',
          'Minimum Spanning Trees: Kruskal\'s Algorithm and Prim\'s Algorithm'
        ],
        keyFormulasOrConcepts: [
          'Handshaking theorem: ∑_{v ∈ V} deg(v) = 2 |E|',
          'Euler circuit exists in connected graph iff every vertex has EVEN degree'
        ],
        csApplications: [
          'Network routing protocols (OSPF uses Dijkstra)',
          'Minimum cost cable layout (Kruskal/Prim MST)',
          'Abstract Syntax Trees (AST) in compilers'
        ],
        commonMistakes: [
          'Failing to show the distance update table clearly when tracing Dijkstra\'s algorithm.',
          'Confusing Euler circuit (visits every EDGE once) with Hamiltonian cycle (visits every VERTEX once).'
        ],
        importantPYQs: [
          {
            id: 'csc165-u6-1',
            subjectCode: 'CSC165',
            unit: 6,
            topic: 'Dijkstra Algorithm',
            year: '2081 TU',
            question: 'Apply Dijkstra\'s algorithm to find the shortest path from vertex A to all other vertices in a given 6-vertex weighted graph. Show the step-by-step distance table.',
            marks: 8,
            difficulty: 3,
            questionType: 'Numerical',
            classification: 'CORE_SYLLABUS',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/discrete-structures',
            solutionHint: 'Initialize dist[A]=0, all others=∞. Repeatedly select unvisited vertex with min distance, mark visited, and relax neighboring edges: dist[v] = min(dist[v], dist[u] + w(u,v)).'
          }
        ]
      }
    ]
  },
  {
    code: 'CSC166',
    legacyCode: 'CSC161',
    name: 'Object-Oriented Programming',
    alias: 'OOP (C++)',
    credits: 3,
    fullMarks: 100,
    passMarks: 40,
    theoryMarks: 60,
    practicalMarks: 20,
    internalMarks: 20,
    description: 'Object-oriented software development using modern C++: encapsulation, classes and objects, constructors/destructors, operator overloading, inheritance hierarchies, runtime polymorphism with virtual tables, templates, and binary file streams.',
    color: '#10b981',
    badgeBg: 'bg-emerald-500/10 border-emerald-500/30',
    badgeText: 'text-emerald-400',
    icon: 'Code2',
    hamroCsitUrl: 'https://hamrocsit.com/semester/second/object-oriented-programming',
    easyCsitUrl: 'https://easycsit.com/semester/2/object-oriented-programming',
    recommendedBooks: [
      'Robert Lafore - Object-Oriented Programming in C++ (4th Edition)',
      'Bjarne Stroustrup - The C++ Programming Language'
    ],
    dependencyTree: {
      prerequisite: 'C Programming (CSC110) syntax, functions, and pointers',
      coreRoleInCS: 'Foundation for modern software engineering, Design Patterns, Game Engines, and GUI frameworks.',
      nextInSemester3: 'Data Structures and Algorithms (CSC211) & Software Engineering'
    },
    examStrategy: [
      'Write complete, runnable C++ code on paper (headers, class definition, main function, and return 0).',
      'Operator Overloading is guaranteed 8 marks in almost every sitting (Complex, Time, or String addition).',
      'Diamond Problem (Virtual Base Class) & Pure Virtual Function programs appear consistently.',
      'Binary file handling with read() and write() reinterpret_cast carries 8 marks.'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'Introduction to OOP & C++ Basics',
        hours: 5,
        weightageMarks: 6,
        topics: [
          'Procedural programming vs Object-Oriented programming paradigm',
          'Features of OOP: Objects, Classes, Abstraction, Encapsulation, Inheritance, Polymorphism',
          'C++ dynamic memory: new and delete operators',
          'Reference variables and Reference as return value',
          'Inline functions, Default arguments, Function overloading and Scope Resolution Operator (::)'
        ],
        keyFormulasOrConcepts: [
          'int* ptr = new int[n]; ... delete[] ptr;',
          'Inline functions replace call with function body at compile time to save overhead'
        ],
        csApplications: [
          'Manual memory management in game engines (Unreal Engine)',
          'API design using function overloading'
        ],
        commonMistakes: [
          'Forgetting delete[] when freeing dynamic arrays allocated with new[].',
          'Returning reference to local stack variable from a function (dangling reference).'
        ],
        importantPYQs: [
          {
            id: 'csc166-u1-1',
            subjectCode: 'CSC166',
            unit: 1,
            topic: 'OOP Concepts',
            year: '2081 TU',
            question: 'Differentiate between Procedure-Oriented Programming (POP) and Object-Oriented Programming (OOP). What are inline functions and when should they be used?',
            marks: 6,
            difficulty: 1,
            questionType: 'Compare/Differentiate',
            classification: 'CORE_SYLLABUS',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/object-oriented-programming',
            solutionHint: 'POP emphasizes functions and algorithms; OOP emphasizes data and real-world modeling. Inline functions eliminate function call overhead for small, non-recursive functions.'
          }
        ]
      },
      {
        unitNumber: 2,
        title: 'Classes and Objects',
        hours: 6,
        weightageMarks: 8,
        topics: [
          'Class definition, Access specifiers: private, public, protected',
          'Constructors: Default, Parameterized, and Copy Constructor',
          'Destructors and object lifecycle management',
          'this pointer and chaining member functions',
          'Static data members and Static member functions',
          'Friend functions and Friend classes (safe encapsulation break)'
        ],
        keyFormulasOrConcepts: [
          'Copy constructor signature: ClassName(const ClassName &obj);',
          'Static members belong to the class type itself, accessed via ClassName::member'
        ],
        csApplications: [
          'Factory patterns and singleton patterns using static methods',
          'Resource Acquisition Is Initialization (RAII) idiom in C++'
        ],
        commonMistakes: [
          'Passing object by value in copy constructor: ClassName(ClassName obj) causes infinite recursive constructor call.',
          'Accessing non-static data members from inside static member functions.'
        ],
        importantPYQs: [
          {
            id: 'csc166-u2-1',
            subjectCode: 'CSC166',
            unit: 2,
            topic: 'Copy Constructor & Deep Copy',
            year: '2082 TU',
            question: 'What is a copy constructor? Explain why a copy constructor must take its argument by reference with const. Write a C++ program demonstrating deep copy for dynamic memory.',
            marks: 8,
            difficulty: 3,
            questionType: 'Programming',
            classification: 'CORE_SYLLABUS',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/object-oriented-programming',
            solutionHint: 'If passed by value, passing the argument would invoke the copy constructor recursively, resulting in infinite compilation error. Deep copy allocates new heap memory.'
          }
        ]
      },
      {
        unitNumber: 3,
        title: 'Operator Overloading & Type Conversion',
        hours: 7,
        weightageMarks: 10,
        topics: [
          'Concept of operator overloading and syntax rules',
          'Overloading unary operators (++ prefix and postfix)',
          'Overloading binary operators (+, -, ==, +=) using member and friend functions',
          'Overloading stream insertion (<<) and extraction (>>) operators',
          'Data type conversions: Basic to User-defined, User-defined to Basic, and User-defined to another User-defined class'
        ],
        keyFormulasOrConcepts: [
          'Stream overloading: friend ostream& operator<<(ostream &out, const Complex &c);',
          'Type casting operator: operator float() const;'
        ],
        csApplications: [
          'Mathematical matrix and vector libraries (Eigen, GLM)',
          'Custom BigInt classes in cryptographic software'
        ],
        commonMistakes: [
          'Attempting to overload non-overloadable operators: `.` , `.*` , `::` , `?:` , `sizeof`.',
          'Forgetting to return reference to ostream in operator<< to allow cascading.'
        ],
        importantPYQs: [
          {
            id: 'csc166-u3-1',
            subjectCode: 'CSC166',
            unit: 3,
            topic: 'Binary Operator Overloading',
            year: '2081 TU',
            question: 'Write a C++ program to overload binary + operator to add two Time objects (hours, minutes, seconds). Ensure seconds and minutes do not exceed 59.',
            marks: 8,
            difficulty: 3,
            questionType: 'Programming',
            classification: 'CORE_SYLLABUS',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/object-oriented-programming',
            solutionHint: 'Time operator+(const Time &t) { Time temp; temp.s = s + t.s; temp.m = m + t.m + temp.s/60; temp.s %= 60; temp.h = h + t.h + temp.m/60; temp.m %= 60; return temp; }'
          }
        ]
      },
      {
        unitNumber: 4,
        title: 'Inheritance Hierarchies & Diamond Ambiguity',
        hours: 6,
        weightageMarks: 8,
        topics: [
          'Concept of Reusability and Inheritance',
          'Types of inheritance: Single, Multiple, Multilevel, Hierarchical, and Hybrid',
          'Visibility modes: private, protected, and public derivation effects',
          'Order of invocation of constructors and destructors in derived classes',
          'Multipath inheritance and Virtual Base Class (Resolving diamond problem)'
        ],
        keyFormulasOrConcepts: [
          'Virtual base class syntax: class B : virtual public A, class C : virtual public A',
          'Execution order: Base constructor first, Derived constructor next; Derived destructor first, Base destructor last'
        ],
        csApplications: [
          'UI Component component hierarchies (Widget -> Window -> Dialog)',
          'Game entity component frameworks'
        ],
        commonMistakes: [
          'Omitting the `virtual` keyword when inheriting top base class in diamond inheritance.',
          'Not calling base class parameterized constructor in derived constructor initialization list.'
        ],
        importantPYQs: [
          {
            id: 'csc166-u4-1',
            subjectCode: 'CSC166',
            unit: 4,
            topic: 'Virtual Base Class',
            year: '2080 TU',
            question: 'What is multipath inheritance? Explain ambiguity in hybrid inheritance and how Virtual Base Class resolves it with diagram and code.',
            marks: 8,
            difficulty: 3,
            questionType: 'Programming',
            classification: 'CORE_SYLLABUS',
            frequency: 'Frequently Observed',
            source: 'EasyCSIT',
            sourceUrl: 'https://easycsit.com',
            solutionHint: 'Class D inherits B and C, both inheriting A. Without virtual base class, D contains two separate copies of A. Declaring virtual public A ensures only one shared copy exists in D.'
          }
        ]
      },
      {
        unitNumber: 5,
        title: 'Virtual Functions, Polymorphism & Abstract Classes',
        hours: 6,
        weightageMarks: 8,
        topics: [
          'Compile-time (Early/Static) binding vs Run-time (Late/Dynamic) binding',
          'Pointers to base class and derived class objects',
          'Virtual functions and VTABLE/VPTR mechanism',
          'Pure virtual functions and Abstract base classes',
          'Virtual destructors and memory leak prevention'
        ],
        keyFormulasOrConcepts: [
          'Pure virtual function: virtual void render() = 0;',
          'Virtual destructor: virtual ~Base() { } prevents partial object deletion'
        ],
        csApplications: [
          'Plugin architectures and device driver abstraction layers',
          'Rendering engines with polymorphic Shape/Entity interfaces'
        ],
        commonMistakes: [
          'Attempting to instantiate an abstract class: Shape s; fails if Shape has pure virtual methods.',
          'Deleting derived object via base pointer without declaring base destructor `virtual`.'
        ],
        importantPYQs: [
          {
            id: 'csc166-u5-1',
            subjectCode: 'CSC166',
            unit: 5,
            topic: 'Pure Virtual Functions & Polymorphism',
            year: '2081 TU',
            question: 'What is runtime polymorphism? What are pure virtual functions and abstract classes? Write a program showing dynamic binding with Shape, Circle, and Rectangle.',
            marks: 8,
            difficulty: 3,
            questionType: 'Programming',
            classification: 'CORE_SYLLABUS',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/object-oriented-programming',
            solutionHint: 'Base class Shape has pure virtual area()=0. Circle and Rectangle override area(). An array of Shape* base pointers invokes corresponding derived area() at runtime.'
          }
        ]
      },
      {
        unitNumber: 6,
        title: 'Templates and Exception Handling',
        hours: 5,
        weightageMarks: 6,
        topics: [
          'Function templates with multiple parameters',
          'Class templates and generic data structures',
          'Basics of Standard Template Library (STL): Vector, List, Map',
          'Exception handling model: try, throw, and catch blocks',
          'Multiple catch blocks, Catch-all handler (...), and Rethrowing exceptions'
        ],
        keyFormulasOrConcepts: [
          'template <typename T> class Stack { T arr[100]; int top; public: void push(T val); T pop(); };',
          'throw runtime_error("Invalid division by zero");'
        ],
        csApplications: [
          'Reusable data structure libraries (C++ STL vector, map, stack)',
          'Robust error recovery in mission-critical software systems'
        ],
        commonMistakes: [
          'Placing the catch-all `catch(...)` block before specific catch blocks.',
          'Writing template class member function definitions without repeating `template <class T>`.'
        ],
        importantPYQs: [
          {
            id: 'csc166-u6-1',
            subjectCode: 'CSC166',
            unit: 6,
            topic: 'Class Templates',
            year: '2080 TU',
            question: 'Write a class template for a generic Stack data structure with push() and pop() member functions. Demonstrate it with integer and float types.',
            marks: 6,
            difficulty: 3,
            questionType: 'Programming',
            classification: 'CORE_SYLLABUS',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/object-oriented-programming',
            solutionHint: 'Define template <class T> class Stack with array T data[50] and int top. In main(), create Stack<int> s1; Stack<float> s2;'
          }
        ]
      },
      {
        unitNumber: 7,
        title: 'Streams and File Handling',
        hours: 6,
        weightageMarks: 8,
        topics: [
          'C++ I/O stream class hierarchy: ios, istream, ostream, fstream, ifstream, ofstream',
          'File opening modes: ios::in, ios::out, ios::app, ios::binary',
          'Formatted vs Unformatted I/O operations (get, put, getline, write, read)',
          'Reading and Writing class objects to binary files using read() and write()',
          'File pointers: seekg(), seekp(), tellg(), tellp() and File error checking (eof, fail, bad)'
        ],
        keyFormulasOrConcepts: [
          'file.write(reinterpret_cast<char*>(&obj), sizeof(obj));',
          'file.read(reinterpret_cast<char*>(&obj), sizeof(obj));'
        ],
        csApplications: [
          'Desktop database persistence and serialization',
          'Game state save/load binary storage'
        ],
        commonMistakes: [
          'Writing objects with std::string or raw pointers directly using write() (causes shallow pointer dump).',
          'Not opening in `ios::binary` mode when reading/writing structs.'
        ],
        importantPYQs: [
          {
            id: 'csc166-u7-1',
            subjectCode: 'CSC166',
            unit: 7,
            topic: 'Binary File Handling',
            year: '2082 TU',
            question: 'Write a complete C++ program to store student records (roll, name, marks) into a binary file "students.dat" and display all records from the file.',
            marks: 8,
            difficulty: 3,
            questionType: 'Programming',
            classification: 'CORE_SYLLABUS',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/object-oriented-programming',
            solutionHint: 'Define Student class. Open ofstream with ios::binary | ios::out. Call file.write(reinterpret_cast<char*>(&s), sizeof(s)). Open ifstream with ios::binary | ios::in. Loop with file.read().'
          }
        ]
      }
    ]
  },
  {
    code: 'CSC167',
    legacyCode: 'CSC162',
    name: 'Microprocessor',
    alias: 'Microprocessor & Assembly',
    credits: 3,
    fullMarks: 100,
    passMarks: 40,
    theoryMarks: 60,
    practicalMarks: 20,
    internalMarks: 20,
    description: 'Internal architecture and assembly programming of Intel 8085 and 8086 microprocessors: bus demultiplexing, machine cycles, timing diagrams, interrupts, memory and I/O interfacing, and peripheral chips (8255 PPI, 8259 PIC).',
    color: '#f59e0b',
    badgeBg: 'bg-amber-500/10 border-amber-500/30',
    badgeText: 'text-amber-400',
    icon: 'Cpu',
    hamroCsitUrl: 'https://hamrocsit.com/semester/second/microprocessor',
    easyCsitUrl: 'https://easycsit.com/semester/2/microprocessor',
    recommendedBooks: [
      'Ramesh S. Gaonkar - Microprocessor Architecture, Programming, and Applications with the 8085 (5th/6th Edition)',
      'Douglas V. Hall - Microprocessors and Interfacing: Programming and Hardware'
    ],
    dependencyTree: {
      prerequisite: 'Digital Logic (CSC111) gates, latches, multiplexers, and decoders',
      coreRoleInCS: 'Bridges software logic with hardware execution: instruction pipelines, memory hierarchy, and low-level OS drivers.',
      nextInSemester3: 'Computer Architecture (CSC214)'
    },
    examStrategy: [
      'Timing Diagrams: Draw CLK, A15-A8, AD7-AD0, ALE, RD, WR, and IO/M with clean ruler lines.',
      '8085 Assembly Code: Finding max/min, bubble sort, block transfer, or BCD conversion carries 8 marks.',
      'Interrupt Structure of 8085: TRAP, RST 7.5, 6.5, 5.5, INTR and SIM/RIM registers format.',
      '8086 Architecture: Segment registers (CS, DS, SS, ES), Physical Address = (Segment * 16) + Offset, and BIU/EU diagram.'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'Introduction to Microprocessor & Architecture',
        hours: 5,
        weightageMarks: 6,
        topics: [
          'Evolution and components of Microprocessor: ALU, Register array, Control unit',
          'System bus: Address bus, Data bus, Control bus and directional characteristics',
          'Von Neumann vs Harvard architecture',
          'Microprocessor-based system organization (CPU, Memory, I/O ports)'
        ],
        keyFormulasOrConcepts: [
          '8085 has 16 address lines => 2^{16} = 64 KB memory addressability',
          'Data bus has 8 lines (8-bit microprocessor, 1 byte at a time)'
        ],
        csApplications: [
          'Embedded firmware engineering in IoT devices',
          'Kernel bootstrap code in operating systems'
        ],
        commonMistakes: [
          'Claiming address bus is bidirectional (it is strictly UNIDIRECTIONAL from CPU to memory/IO).',
          'Confusing clock cycle with machine cycle.'
        ],
        importantPYQs: [
          {
            id: 'csc167-u1-1',
            subjectCode: 'CSC167',
            unit: 1,
            topic: 'System Bus Architecture',
            year: '2080 TU',
            question: 'What is a microprocessor? Explain the functions and directional properties of address bus, data bus, and control bus in an 8085 microprocessor system.',
            marks: 5,
            difficulty: 1,
            questionType: 'Explain',
            classification: 'CORE_SYLLABUS',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/microprocessor',
            solutionHint: 'Address bus carries 16-bit memory addresses (unidirectional from CPU). Data bus transfers 8-bit data bidirectionally. Control bus transmits synchronization control pulses (RD, WR, IO/M).'
          }
        ]
      },
      {
        unitNumber: 2,
        title: '8085 Microprocessor Internal Architecture',
        hours: 7,
        weightageMarks: 10,
        topics: [
          '8085 internal block diagram: Registers (A, B, C, D, E, H, L, SP, PC), Flags (S, Z, AC, P, CY)',
          'Pin diagram and signal descriptions of 8085 (40 pins)',
          'Demultiplexing Address/Data bus (AD0-AD7) using 74LS373 transparent latch and ALE signal',
          'Generation of control signals: MEMR, MEMW, IOR, IOW using IO/M, RD, WR and 74LS138 decoder'
        ],
        keyFormulasOrConcepts: [
          'ALE = 1 latches the lower order address A0-A7 into latch 74LS373',
          'Flag byte: [S, Z, X, AC, X, P, X, CY]'
        ],
        csApplications: [
          'Motherboard bus design and memory controller interfacing',
          'CPU status register handling in OS thread scheduling'
        ],
        commonMistakes: [
          'Drawing latch enable connected to RD instead of ALE.',
          'Missing the active-low inversion bars on control signals MEMR\', MEMW\', IOR\', IOW\'.'
        ],
        importantPYQs: [
          {
            id: 'csc167-u2-1',
            subjectCode: 'CSC167',
            unit: 2,
            topic: 'Bus Demultiplexing',
            year: '2082 TU',
            question: 'Draw the functional pin diagram of 8085. Explain how address and data buses (AD0-AD7) are demultiplexed using ALE and latch 74LS373 with a neat circuit schematic.',
            marks: 8,
            difficulty: 3,
            questionType: 'Diagram',
            classification: 'CORE_SYLLABUS',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/microprocessor',
            solutionHint: 'Connect AD0-AD7 from 8085 to D0-D7 inputs of latch 74LS373. Connect ALE of 8085 to Enable (G) of latch. Output Q0-Q7 provides dedicated A0-A7 during T1 state.'
          }
        ]
      },
      {
        unitNumber: 3,
        title: 'Instruction Cycle & Timing Diagrams',
        hours: 6,
        weightageMarks: 8,
        topics: [
          'Instruction cycle, Machine cycle, and T-states',
          'Fetch and Execute operations, Opcode fetch cycle (4 T-states)',
          'Memory Read and Memory Write machine cycles (3 T-states each)',
          'I/O Read and I/O Write machine cycles',
          'Timing diagrams for instructions: MOV A, B; MVI A, 32H; LXI H, 2050H; MOV M, A'
        ],
        keyFormulasOrConcepts: [
          'Opcode fetch: 4 T-states (IO/M=0, S1=1, S0=1)',
          'Memory read: 3 T-states (IO/M=0, S1=1, S0=0)'
        ],
        csApplications: [
          'Instruction cycle timing in real-time embedded systems',
          'Logic analyzer debugging for memory bus latency'
        ],
        commonMistakes: [
          'Forgetting that MVI A, data takes TWO machine cycles (Opcode Fetch 4T + Memory Read 3T = 7T states).',
          'Drawing ALE active for the entire machine cycle instead of just T1.'
        ],
        importantPYQs: [
          {
            id: 'csc167-u3-1',
            subjectCode: 'CSC167',
            unit: 3,
            topic: 'Timing Diagrams',
            year: '2081 TU',
            question: 'Define machine cycle and T-state. Draw the detailed timing diagram for the instruction MVI A, 45H showing CLK, A15-A8, AD7-AD0, ALE, IO/M, RD, and WR signals.',
            marks: 8,
            difficulty: 3,
            questionType: 'Diagram',
            classification: 'CORE_SYLLABUS',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/microprocessor',
            solutionHint: 'Total 2 machine cycles: Opcode Fetch (4 T-states: T1, T2, T3, T4) + Memory Read (3 T-states: T1, T2, T3). Show ALE pulsing in T1 of each cycle.'
          }
        ]
      },
      {
        unitNumber: 4,
        title: '8085 Assembly Language Programming',
        hours: 9,
        weightageMarks: 12,
        topics: [
          'Addressing modes: Immediate, Direct, Register, Register Indirect, Implied',
          'Instruction classification: Data transfer, Arithmetic, Logical, Branching, Machine control',
          'Stack operations (PUSH, POP) and Subroutines (CALL, RET)',
          'Assembly programs: Finding max/min in array, Bubble sort, BCD to Binary conversion, Memory block transfer'
        ],
        keyFormulasOrConcepts: [
          'Register Indirect: MOV A, M uses HL register pair as memory pointer',
          'Conditional branch: JZ, JNZ, JC, JNC, JPO, JPE'
        ],
        csApplications: [
          'Direct hardware drivers and OS bootloader routines',
          'Performance-critical SIMD algorithms and cryptography kernels'
        ],
        commonMistakes: [
          'Forgetting HLT at the end of the program.',
          'Using INX H to point to the next byte but forgetting to decrement counter with DCR C.'
        ],
        importantPYQs: [
          {
            id: 'csc167-u4-1',
            subjectCode: 'CSC167',
            unit: 4,
            topic: '8085 Assembly Program',
            year: '2082 TU',
            question: 'Write an 8085 assembly language program to find the largest number among 10 bytes of data stored starting from memory location 3000H. Store the largest number at 3050H.',
            marks: 8,
            difficulty: 3,
            questionType: 'Assembly',
            classification: 'CORE_SYLLABUS',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/microprocessor',
            solutionHint: 'LXI H, 3000H; MVI C, 09H; MOV A, M; LOOP: INX H; CMP M; JNC SKIP; MOV A, M; SKIP: DCR C; JNZ LOOP; STA 3050H; HLT.'
          }
        ]
      },
      {
        unitNumber: 5,
        title: 'Memory Interfacing & Interrupts',
        hours: 6,
        weightageMarks: 8,
        topics: [
          'Memory address decoding (Absolute/Full vs Partial/Linear decoding)',
          'Interfacing RAM (e.g. 6116) and ROM (e.g. 2716) with 8085 using 74LS138 decoder',
          'Interrupt structure of 8085: Hardware vs Software interrupts',
          'Vectored interrupts: TRAP (4.5), RST 7.5, RST 6.5, RST 5.5, INTR',
          'Interrupt masking, SIM and RIM instruction formats and usages'
        ],
        keyFormulasOrConcepts: [
          'Vector locations: TRAP=0024H, RST 7.5=003CH, RST 6.5=0034H, RST 5.5=002CH',
          'Vector address formula: Interrupt Number × 8'
        ],
        csApplications: [
          'Interrupt Service Routines (ISR) in operating systems',
          'Hardware keyboard and timer interrupt handlers'
        ],
        commonMistakes: [
          'Forgetting that TRAP is non-maskable and triggered by both edge and level.',
          'Misinterpreting SIM/RIM bit positions for masks and serial I/O.'
        ],
        importantPYQs: [
          {
            id: 'csc167-u5-1',
            subjectCode: 'CSC167',
            unit: 5,
            topic: 'Interrupt Structure',
            year: '2081 TU',
            question: 'Explain the interrupt structure of 8085 microprocessor with priority and vector addresses. Explain SIM and RIM instructions with their bit formats.',
            marks: 8,
            difficulty: 3,
            questionType: 'Explain',
            classification: 'CORE_SYLLABUS',
            frequency: 'Frequently Observed',
            source: 'EasyCSIT',
            sourceUrl: 'https://easycsit.com',
            solutionHint: 'Priority order: TRAP > RST 7.5 > RST 6.5 > RST 5.5 > INTR. TRAP has vector address 0024H. SIM masks/unmasks RST 7.5-5.5; RIM reads pending interrupts.'
          }
        ]
      },
      {
        unitNumber: 6,
        title: 'Input/Output Interfaces (8255 & 8259)',
        hours: 6,
        weightageMarks: 8,
        topics: [
          'Programmable Peripheral Interface 8255A: Architecture, Modes (Mode 0, 1, 2, BSR mode)',
          '8255 Control word format for I/O and BSR mode',
          'Programmable Interrupt Controller 8259A: Block diagram, Cascading and Priority modes',
          'Direct Memory Access (DMA) and 8237/8257 controller fundamentals'
        ],
        keyFormulasOrConcepts: [
          '8255 Control word bit D7 = 1 for I/O mode, D7 = 0 for BSR mode'
        ],
        csApplications: [
          'Parallel port communication and stepper motor control',
          'Zero-copy disk-to-memory DMA transfers in high-speed storage'
        ],
        commonMistakes: [
          'Confusing Mode 0 (Basic I/O) with Mode 1 (Strobed I/O).',
          'Incorrect bit mapping in 8255 control word calculation.'
        ],
        importantPYQs: [
          {
            id: 'csc167-u6-1',
            subjectCode: 'CSC167',
            unit: 6,
            topic: '8255 PPI',
            year: '2080 TU',
            question: 'Draw the block diagram of 8255A PPI. Construct a control word to configure Port A as input, Port B as output, and Port C upper as output in Mode 0.',
            marks: 8,
            difficulty: 3,
            questionType: 'Numerical',
            classification: 'CORE_SYLLABUS',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/microprocessor',
            solutionHint: 'Control word: D7=1(I/O), D6-D5=00(Port A Mode 0), D4=1(Port A Input), D3=0(Port C upper output), D2=0(Port B Mode 0), D1=0(Port B Output), D0=0(Port C lower output). Word = 90H.'
          }
        ]
      },
      {
        unitNumber: 7,
        title: '8086 Microprocessor & Advanced Architecture',
        hours: 6,
        weightageMarks: 8,
        topics: [
          '8086 internal architecture: Bus Interface Unit (BIU) and Execution Unit (EU)',
          'Instruction prefetch queue (6 bytes) and pipelining concept in 8086',
          'Memory segmentation: CS, DS, SS, ES and Physical Address calculation',
          '8086 addressing modes and register organization',
          'Comparison: 8085 vs 8086; Real mode vs Protected mode in 80286/80386'
        ],
        keyFormulasOrConcepts: [
          'Physical Address = (Segment Register × 10H) + Offset Register',
          '8086 has 20-bit address bus => 1 MB memory addressable space'
        ],
        csApplications: [
          'x86 segmented memory model in early operating systems (MS-DOS)',
          'Pipelined CPU architecture in modern multicore x86 processors'
        ],
        commonMistakes: [
          'Multiplying segment register by 16 in decimal without converting to hexadecimal offset.',
          'Mixing up registers belonging to BIU (CS, DS, SS, ES, IP) with EU (AX, BX, CX, DX, SP, BP, SI, DI).'
        ],
        importantPYQs: [
          {
            id: 'csc167-u7-1',
            subjectCode: 'CSC167',
            unit: 7,
            topic: '8086 Architecture & Pipelining',
            year: '2082 TU',
            question: 'Explain the internal architecture of 8086 microprocessor with a neat block diagram showing BIU and EU. How does instruction pipelining occur in 8086?',
            marks: 8,
            difficulty: 3,
            questionType: 'Explain',
            classification: 'CORE_SYLLABUS',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/microprocessor',
            solutionHint: 'BIU prefetches up to 6 instruction bytes into queue while EU is executing previous instruction. This overlaps fetch and execute cycles, implementing pipelining.'
          },
          {
            id: 'csc167-u7-2',
            subjectCode: 'CSC167',
            unit: 7,
            topic: '8086 Physical Address',
            year: '2081 TU',
            question: 'If CS = 348AH and IP = 4214H, compute the physical address of the instruction in 8086 memory.',
            marks: 3,
            difficulty: 2,
            questionType: 'Numerical',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'EasyCSIT',
            sourceUrl: 'https://easycsit.com',
            solutionHint: 'Physical Address = CS * 16 + IP = 348A0H + 4214H = 38AB4H.'
          }
        ]
      }
    ]
  },
  {
    code: 'MTH168',
    legacyCode: 'MTH163',
    name: 'Mathematics II',
    alias: 'Linear Algebra',
    credits: 3,
    fullMarks: 100,
    passMarks: 40,
    theoryMarks: 80,
    practicalMarks: 0,
    internalMarks: 20,
    description: 'Linear algebra theory and computational methods: systems of linear equations, row reductions, matrix factorizations (LU), vector spaces, null/column spaces, eigenvalues/eigenvectors, diagonalization, orthogonality, Gram-Schmidt process, and Singular Value Decomposition (SVD).',
    color: '#8b5cf6',
    badgeBg: 'bg-purple-500/10 border-purple-500/30',
    badgeText: 'text-purple-400',
    icon: 'Sigma',
    hamroCsitUrl: 'https://hamrocsit.com/semester/second/mathematics-ii',
    easyCsitUrl: 'https://easycsit.com/semester/2/mathematics-ii',
    recommendedBooks: [
      'David C. Lay - Linear Algebra and Its Applications (4th/5th Edition)',
      'Gilbert Strang - Introduction to Linear Algebra'
    ],
    dependencyTree: {
      prerequisite: 'Mathematics I (MTH112) calculus & elementary matrix algebra',
      coreRoleInCS: 'Direct mathematical language of Computer Graphics (3D transformations), Machine Learning, Principal Component Analysis, and Quantum Computing.',
      nextInSemester3: 'Numerical Methods & Computer Graphics'
    },
    examStrategy: [
      'Theory marks are 80 (highest pure theory weight in Semester II) — no practical marks buffer.',
      'Gram-Schmidt Process & Diagonalization (A = PDP^-1): Practice calculation steps with zero fraction arithmetic errors.',
      'Rank-Nullity Theorem verification with RREF null space extraction.',
      'LU Factorization via elementary row operations.'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'Linear Equations in Linear Algebra',
        hours: 8,
        weightageMarks: 14,
        topics: [
          'Systems of linear equations, Row reduction and Echelon forms',
          'Vector equations, Linear combinations, and Span',
          'The matrix equation Ax = b: Existence and uniqueness of solutions',
          'Solution sets of linear systems: Homogeneous and nonhomogeneous systems',
          'Linear Independence of vector sets',
          'Introduction to Linear Transformations and standard matrices'
        ],
        keyFormulasOrConcepts: [
          'Vectors are linearly independent if c1*v1 + ... + cp*vp = 0 only has trivial solution',
          'Every linear transformation T: R^n -> R^m has standard matrix A = [T(e1) ... T(en)]'
        ],
        csApplications: [
          'Ray tracing and 3D geometric transformations in game development',
          'Traffic flow network balancing and electrical mesh analysis'
        ],
        commonMistakes: [
          'Making arithmetic sign errors during forward Gaussian elimination.',
          'Concluding that a system has infinitely many solutions without checking row consistency (e.g. 0 = 1).'
        ],
        importantPYQs: [
          {
            id: 'mth168-u1-1',
            subjectCode: 'MTH168',
            unit: 1,
            topic: 'Linear Independence',
            year: '2082 TU',
            question: 'Determine if the vectors v1 = [1, 2, 3]^T, v2 = [4, 5, 6]^T, and v3 = [2, 1, 0]^T are linearly independent in R3.',
            marks: 6,
            difficulty: 2,
            questionType: 'Numerical',
            classification: 'CORE_SYLLABUS',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/mathematics-ii',
            solutionHint: 'Form matrix A=[v1 v2 v3] and row-reduce to echelon form. If every column has a pivot position, the vectors are linearly independent.'
          }
        ]
      },
      {
        unitNumber: 2,
        title: 'Matrix Algebra & Factorizations',
        hours: 7,
        weightageMarks: 12,
        topics: [
          'Matrix operations, Transpose and Inverses',
          'The Invertible Matrix Theorem (IMT)',
          'Partitioned matrices and block matrix multiplication',
          'Matrix factorizations: LU Factorization (A = L * U)'
        ],
        keyFormulasOrConcepts: [
          '(AB)^-1 = B^-1 A^-1, (AB)^T = B^T A^T',
          'LU Factorization: L is unit lower triangular, U is echelon upper triangular'
        ],
        csApplications: [
          'Fast linear system solving in physics simulation engines',
          'Block matrix operations in GPU CUDA tensor cores'
        ],
        commonMistakes: [
          'Multiplying (AB)^-1 as A^-1 B^-1 instead of reversing order to B^-1 A^-1.',
          'Forgetting that row interchange during LU factorization requires PLU factorization.'
        ],
        importantPYQs: [
          {
            id: 'mth168-u2-1',
            subjectCode: 'MTH168',
            unit: 2,
            topic: 'LU Factorization',
            year: '2081 TU',
            question: 'Find the LU factorization of matrix A = [[2, 4, -2], [4, 9, -3], [-2, -1, 7]].',
            marks: 8,
            difficulty: 3,
            questionType: 'Numerical',
            classification: 'CORE_SYLLABUS',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/mathematics-ii',
            solutionHint: 'Row reduce A to upper triangular U using elementary row operations without row swaps. Place multipliers used for row elimination into lower unit triangular matrix L.'
          }
        ]
      },
      {
        unitNumber: 3,
        title: 'Determinants',
        hours: 4,
        weightageMarks: 8,
        topics: [
          'Introduction to determinants, Cofactor expansion',
          'Properties of determinants (row operations, det(AB) = det(A)det(B))',
          'Cramer\'s Rule for solving Ax = b',
          'Area, volume and linear transformations'
        ],
        keyFormulasOrConcepts: [
          'Cramer\'s Rule: x_i = det(A_i(b)) / det(A)',
          'det(c A) = c^n det(A) for n × n matrix'
        ],
        csApplications: [
          'Polygon orientation and collision detection in computational geometry',
          'Volume scaling factor in 3D computer graphics'
        ],
        commonMistakes: [
          'Forgetting to multiply determinant by (-1) whenever two rows are swapped.',
          'Using Cramer\'s rule when det(A) = 0.'
        ],
        importantPYQs: [
          {
            id: 'mth168-u3-1',
            subjectCode: 'MTH168',
            unit: 3,
            topic: 'Cramer\'s Rule',
            year: '2080 TU',
            question: 'Solve the system of equations using Cramer\'s rule: 2x1 + x2 + x3 = 7, -3x1 - x2 + 2x3 = -8, -2x1 + 2x2 + x3 = -3.',
            marks: 6,
            difficulty: 2,
            questionType: 'Numerical',
            classification: 'CORE_SYLLABUS',
            frequency: 'Frequently Observed',
            source: 'EasyCSIT',
            sourceUrl: 'https://easycsit.com',
            solutionHint: 'Calculate det(A). Replace column 1 with b to find det(A1), column 2 for det(A2), column 3 for det(A3). x_i = det(A_i)/det(A).'
          }
        ]
      },
      {
        unitNumber: 4,
        title: 'Vector Spaces, Subspaces, Basis & Dimension',
        hours: 9,
        weightageMarks: 16,
        topics: [
          'Vector spaces and Subspaces (Subspace criteria: zero vector, closure under addition and scalar multiplication)',
          'Null spaces Nul(A), Column spaces Col(A), and Linear transformations',
          'Linearly independent sets and Bases',
          'Coordinate systems and change of basis',
          'The Dimension of a vector space and the Rank Theorem: Rank(A) + Nullity(A) = n'
        ],
        keyFormulasOrConcepts: [
          'Rank Theorem: rank(A) + dim(Nul(A)) = number of columns of A',
          'Basis for Col(A) = pivot columns of original matrix A'
        ],
        csApplications: [
          'Feature space dimensionality reduction in machine learning',
          'Color space basis transformations (RGB to YUV/CMYK)'
        ],
        commonMistakes: [
          'Using columns from the reduced row echelon form (RREF) as the basis for Col(A) instead of original columns of A.',
          'Not writing the general solution of Ax = 0 in parametric vector form to extract Nul(A) basis.'
        ],
        importantPYQs: [
          {
            id: 'mth168-u4-1',
            subjectCode: 'MTH168',
            unit: 4,
            topic: 'Rank-Nullity Theorem',
            year: '2082 TU',
            question: 'Find a basis for the null space and column space of matrix A = [[1, 3, 3, 2], [2, 6, 9, 7], [-1, -3, 3, 4]]. Verify the Rank-Nullity Theorem.',
            marks: 8,
            difficulty: 3,
            questionType: 'Numerical',
            classification: 'CORE_SYLLABUS',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/mathematics-ii',
            solutionHint: 'Reduce A to RREF. Pivot columns give basis for Col(A). Solve Ax=0 with free variables to get basis vectors for Nul(A). Verify rank + nullity = 4.'
          }
        ]
      },
      {
        unitNumber: 5,
        title: 'Eigenvalues and Eigenvectors',
        hours: 8,
        weightageMarks: 16,
        topics: [
          'Eigenvectors and eigenvalues definition: Ax = λx',
          'The characteristic equation: det(A - λI) = 0',
          'Diagonalization theorem: A = P D P^-1',
          'Eigenvectors and linear transformations',
          'Complex eigenvalues and algebraic vs geometric multiplicity'
        ],
        keyFormulasOrConcepts: [
          'A is diagonalizable iff A has n linearly independent eigenvectors',
          'D is diagonal matrix of eigenvalues; P columns are corresponding eigenvectors'
        ],
        csApplications: [
          'Google PageRank algorithm (Markov chain stationary eigenvector)',
          'Eigenfaces in facial recognition systems'
        ],
        commonMistakes: [
          'Factoring the characteristic polynomial incorrectly.',
          'Not arranging eigenvectors in P in the exact corresponding order of eigenvalues in D.'
        ],
        importantPYQs: [
          {
            id: 'mth168-u5-1',
            subjectCode: 'MTH168',
            unit: 5,
            topic: 'Diagonalization',
            year: '2081 TU',
            question: 'Find the eigenvalues and corresponding eigenvectors of matrix A = [[1, 3], [3, 1]]. Diagonalize A if possible by finding P and D.',
            marks: 8,
            difficulty: 3,
            questionType: 'Numerical',
            classification: 'CORE_SYLLABUS',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/mathematics-ii',
            solutionHint: 'det(A - λI) = (1-λ)^2 - 9 = 0 => λ = 4, -2. For λ=4: v1=[1, 1]^T. For λ=-2: v2=[-1, 1]^T. P=[v1 v2], D=diag(4, -2).'
          }
        ]
      },
      {
        unitNumber: 6,
        title: 'Orthogonality, Gram-Schmidt & SVD',
        hours: 9,
        weightageMarks: 14,
        topics: [
          'Inner product, length (norm), and orthogonality',
          'Orthogonal sets and Orthogonal projections: proj_W(y)',
          'The Gram-Schmidt Process for producing orthonormal basis',
          'Least-Squares Problems: Normal equations A^T A x = A^T b',
          'Symmetric matrices and Orthogonal Diagonalization',
          'Singular Value Decomposition (SVD): A = U Σ V^T overview'
        ],
        keyFormulasOrConcepts: [
          'Gram-Schmidt: v2 = x2 - ((x2·v1)/(v1·v1)) * v1',
          'Normal equations: A^T A x = A^T b'
        ],
        csApplications: [
          'Image compression and recommender systems (SVD)',
          'Linear regression and machine learning curve fitting (Least squares)'
        ],
        commonMistakes: [
          'Dividing by zero or getting fractions wrong in Gram-Schmidt projection calculations.',
          'Forgetting to normalize vectors (v / ||v||) when asked for an ORTHONORMAL basis.'
        ],
        importantPYQs: [
          {
            id: 'mth168-u6-1',
            subjectCode: 'MTH168',
            unit: 6,
            topic: 'Gram-Schmidt Process',
            year: '2082 TU',
            question: 'Apply the Gram-Schmidt process to produce an orthogonal basis for the subspace spanned by x1 = [1, -1, 0, 1]^T and x2 = [1, 0, 0, -1]^T.',
            marks: 8,
            difficulty: 3,
            questionType: 'Numerical',
            classification: 'CORE_SYLLABUS',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/mathematics-ii',
            solutionHint: 'v1 = x1. v2 = x2 - ((x2·v1)/(v1·v1)) * v1. x2·v1 = 1(1) + 0(-1) + 0(0) + (-1)(1) = 0. Since x2·v1 = 0, v2 = x2 directly!'
          }
        ]
      }
    ]
  },
  {
    code: 'STA169',
    legacyCode: 'STA164',
    name: 'Statistics I',
    alias: 'Probability & Statistics',
    credits: 3,
    fullMarks: 100,
    passMarks: 40,
    theoryMarks: 60,
    practicalMarks: 20,
    internalMarks: 20,
    description: 'Statistical methods and probability theory for data science: descriptive statistics, dispersion, moments and skewness, axiomatic probability, Bayes theorem, random variables, theoretical distributions (Binomial, Poisson, Normal), and bivariate correlation/linear regression.',
    color: '#ec4899',
    badgeBg: 'bg-pink-500/10 border-pink-500/30',
    badgeText: 'text-pink-400',
    icon: 'BarChart3',
    hamroCsitUrl: 'https://hamrocsit.com/semester/second/statistics-i',
    easyCsitUrl: 'https://easycsit.com/semester/2/statistics-i',
    recommendedBooks: [
      'S.C. Gupta, V.K. Kapoor - Fundamentals of Mathematical Statistics',
      'Mukund Raj Sharma - Comprehensive Statistics'
    ],
    dependencyTree: {
      prerequisite: 'High school algebra & basic probability',
      coreRoleInCS: 'Pillar of Data Science, Machine Learning, A/B Testing, Network Packet Arrival modeling, and Risk Analytics.',
      nextInSemester3: 'Statistics II & Artificial Intelligence'
    },
    examStrategy: [
      'Normal Distribution word problems using standard normal Z-table are guaranteed 8 marks.',
      'Bayes\' Theorem conditional probability is guaranteed 6–8 marks.',
      'Coefficient of Variation (C.V.) comparison between two sets of data.',
      'Linear regression lines of Y on X and Pearson\'s correlation r calculation.'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'Introduction & Data Presentation',
        hours: 4,
        weightageMarks: 5,
        topics: [
          'Nature and scope of statistics, Scales of measurement (Nominal, Ordinal, Interval, Ratio)',
          'Primary vs Secondary data collection techniques',
          'Classification, Tabulation, Frequency distributions',
          'Diagrammatic & Graphical presentation: Histogram, Frequency Polygon, Ogives (Less than & More than)'
        ],
        keyFormulasOrConcepts: [
          'Intersection of less-than and more-than ogives gives the Median on X-axis'
        ],
        csApplications: [
          'Data cleaning and exploratory data analysis (EDA) pipelines',
          'Data visualization dashboards in business intelligence'
        ],
        commonMistakes: [
          'Plotting cumulative frequency against lower limit instead of upper limit in less-than ogive.'
        ],
        importantPYQs: [
          {
            id: 'sta169-u1-1',
            subjectCode: 'STA169',
            unit: 1,
            topic: 'Data Scales & Ogives',
            year: '2080 TU',
            question: 'Differentiate between primary and secondary data. Explain how median and quartiles are determined graphically using ogive curves.',
            marks: 5,
            difficulty: 1,
            questionType: 'Explain',
            classification: 'CORE_SYLLABUS',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/statistics-i',
            solutionHint: 'Primary data is collected first-hand; secondary data is from published sources. The X-coordinate of intersection of less-than and more-than ogives gives the median.'
          }
        ]
      },
      {
        unitNumber: 2,
        title: 'Measures of Central Tendency & Dispersion',
        hours: 8,
        weightageMarks: 12,
        topics: [
          'Arithmetic Mean, Median, Mode, Geometric Mean, Harmonic Mean and properties',
          'Partition values: Quartiles, Deciles, Percentiles',
          'Measures of dispersion: Range, Quartile Deviation, Mean Deviation',
          'Standard Deviation (SD) and Variance for grouped and ungrouped data',
          'Coefficient of Variation (C.V.) for comparing consistency of two groups',
          'Combined Mean and Combined Standard Deviation'
        ],
        keyFormulasOrConcepts: [
          'C.V. = (σ / x̄) * 100% (Lower C.V. => Higher consistency)',
          'Combined Variance: σ_12^2 = [n1(σ1^2 + d1^2) + n2(σ2^2 + d2^2)] / (n1 + n2)'
        ],
        csApplications: [
          'Benchmarking algorithm execution time variability',
          'Outlier detection and feature scaling in data mining'
        ],
        commonMistakes: [
          'Declaring the group with higher C.V. as more consistent (LOWER C.V. means more consistent!).',
          'Using incorrect class midpoints when working with grouped data.'
        ],
        importantPYQs: [
          {
            id: 'sta169-u2-1',
            subjectCode: 'STA169',
            unit: 2,
            topic: 'Coefficient of Variation',
            year: '2082 TU',
            question: 'Two brands of electric bulbs A and B were tested for their lifespan. Brand A has mean 1500 hrs, SD 120 hrs. Brand B has mean 1400 hrs, SD 98 hrs. Which brand shows greater consistency?',
            marks: 8,
            difficulty: 2,
            questionType: 'Numerical',
            classification: 'CORE_SYLLABUS',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/statistics-i',
            solutionHint: 'CV_A = (120/1500)*100 = 8.0%. CV_B = (98/1400)*100 = 7.0%. Since CV_B < CV_A, Brand B has greater consistency in performance.'
          }
        ]
      },
      {
        unitNumber: 3,
        title: 'Moments, Skewness and Kurtosis',
        hours: 5,
        weightageMarks: 7,
        topics: [
          'Raw moments about origin or arbitrary value and Central moments about mean',
          'Relationship between raw and central moments (μ2, μ3, μ4 in terms of raw moments)',
          'Measures of Skewness: Karl Pearson\'s coefficient Sk_p, Bowley\'s quartile coefficient',
          'Kurtosis: Leptokurtic, Mesokurtic, Platykurtic measures using β2 and γ2'
        ],
        keyFormulasOrConcepts: [
          'μ2 = m2\' - (m1\')^2, μ3 = m3\' - 3 m2\' m1\' + 2 (m1\')^3',
          'β2 = μ4 / (μ2)^2 (If β2=3: normal mesokurtic, >3: leptokurtic, <3: platykurtic)'
        ],
        csApplications: [
          'Anomaly and intrusion detection in network traffic distributions',
          'Quant finance return distribution modeling'
        ],
        commonMistakes: [
          'Confusing raw moments (about origin) with central moments (about mean).',
          'Negative variance result caused by wrong signs in moment transformations.'
        ],
        importantPYQs: [
          {
            id: 'sta169-u3-1',
            subjectCode: 'STA169',
            unit: 3,
            topic: 'Moments & Kurtosis',
            year: '2081 TU',
            question: 'The first four moments of a distribution about the arbitrary value 4 are -1.5, 17, -30, and 108. Find central moments and calculate the measure of skewness and kurtosis.',
            marks: 6,
            difficulty: 3,
            questionType: 'Numerical',
            classification: 'CORE_SYLLABUS',
            frequency: 'Frequently Observed',
            source: 'EasyCSIT',
            sourceUrl: 'https://easycsit.com',
            solutionHint: 'μ1=0. μ2 = 17 - (-1.5)^2 = 14.75. Convert μ3 and μ4 using standard formulas. Calculate β1 and β2 to interpret distribution shape.'
          }
        ]
      },
      {
        unitNumber: 4,
        title: 'Probability & Bayes Theorem',
        hours: 7,
        weightageMarks: 10,
        topics: [
          'Sample space, Events, Mutually exclusive and Exhaustive events',
          'Classical, Empirical and Axiomatic definitions of probability',
          'Addition theorem for mutually exclusive and non-mutually exclusive events',
          'Conditional probability P(A|B) and Multiplication theorem',
          'Independent events and Pairwise independence',
          'Bayes\' Theorem and real-world Bayesian reasoning'
        ],
        keyFormulasOrConcepts: [
          'P(A ∪ B) = P(A) + P(B) - P(A ∩ B)',
          'Bayes: P(B_i | A) = [P(B_i) * P(A | B_i)] / ∑ [P(B_j) * P(A | B_j)]'
        ],
        csApplications: [
          'Spam filtering algorithms (Naive Bayes classification)',
          'Medical diagnostic probability AI systems'
        ],
        commonMistakes: [
          'Confusing P(A|B) with P(B|A).',
          'Failing to sum all partition probabilities in the Bayes denominator.'
        ],
        importantPYQs: [
          {
            id: 'sta169-u4-1',
            subjectCode: 'STA169',
            unit: 4,
            topic: 'Bayes Theorem',
            year: '2082 TU',
            question: 'In a factory, machines A, B, and C produce 25%, 35%, and 40% of bolts. 5%, 4%, and 2% are defective. A bolt drawn is defective. Find the probability it was manufactured by machine B.',
            marks: 6,
            difficulty: 3,
            questionType: 'Numerical',
            classification: 'CORE_SYLLABUS',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/statistics-i',
            solutionHint: 'P(B|D) = [0.35 * 0.04] / [0.25*0.05 + 0.35*0.04 + 0.40*0.02] = 0.014 / (0.0125 + 0.014 + 0.008) = 0.014 / 0.0345 = 0.4058.'
          }
        ]
      },
      {
        unitNumber: 5,
        title: 'Random Variables & Expectation',
        hours: 6,
        weightageMarks: 8,
        topics: [
          'Concept of random variable: Discrete vs Continuous',
          'Probability Mass Function (pmf) and Probability Density Function (pdf)',
          'Cumulative Distribution Function (cdf) and properties',
          'Mathematical Expectation E(X), E(X^2) and Variance Var(X) = E(X^2) - [E(X)]^2',
          'Properties of Expectation: E(aX + b) = a E(X) + b; Var(aX + b) = a^2 Var(X)'
        ],
        keyFormulasOrConcepts: [
          'E(X) = ∑ x p(x) for discrete; ∫ x f(x) dx for continuous',
          'Var(X) = E(X^2) - [E(X)]^2'
        ],
        csApplications: [
          'Average-case algorithmic complexity calculations (QuickSort expected comparisons)',
          'Simulation modeling in Monte Carlo methods'
        ],
        commonMistakes: [
          'Writing Var(aX + b) = a Var(X) instead of a^2 Var(X).',
          'Forgetting that total integral of a pdf over its domain must equal 1.'
        ],
        importantPYQs: [
          {
            id: 'sta169-u5-1',
            subjectCode: 'STA169',
            unit: 5,
            topic: 'Continuous PDF & Expectation',
            year: '2081 TU',
            question: 'A continuous random variable X has pdf f(x) = k x^2 (1 - x) for 0 ≤ x ≤ 1 and 0 elsewhere. Find the constant k, E(X), and Var(X).',
            marks: 6,
            difficulty: 3,
            questionType: 'Numerical',
            classification: 'CORE_SYLLABUS',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/statistics-i',
            solutionHint: 'Integrate f(x) from 0 to 1 = k [1/3 - 1/4] = k/12 = 1 => k = 12. E(X) = ∫ 12 x^3 (1-x) dx = 12 [1/4 - 1/5] = 3/5 = 0.6.'
          }
        ]
      },
      {
        unitNumber: 6,
        title: 'Theoretical Probability Distributions',
        hours: 9,
        weightageMarks: 13,
        topics: [
          'Binomial Distribution: Conditions, pmf P(X=x) = nCx p^x q^(n-x), Mean = np, Variance = npq',
          'Poisson Distribution: Conditions, pmf P(X=x) = (e^-λ λ^x)/x!, Mean = Variance = λ',
          'Poisson approximation to Binomial distribution',
          'Normal Distribution: Properties of Gaussian curve, Standard normal variate Z = (X - μ) / σ',
          'Area under standard normal curve and practical problem solving using Z-table'
        ],
        keyFormulasOrConcepts: [
          'Z = (X - μ) / σ',
          'Total area under Gaussian curve is 1, symmetric about Z = 0'
        ],
        csApplications: [
          'Network packet arrival rates (Poisson process)',
          'Bit error rate modeling in telecommunications (Binomial distribution)',
          'Measurement noise filtering in computer vision (Gaussian blur)'
        ],
        commonMistakes: [
          'Subtracting Z-table values backwards when finding area between two positive Z values.',
          'Using Normal distribution when sample size is small without knowing variance.'
        ],
        importantPYQs: [
          {
            id: 'sta169-u6-1',
            subjectCode: 'STA169',
            unit: 6,
            topic: 'Normal Distribution',
            year: '2082 TU',
            question: 'The monthly income of 10,000 employees is normally distributed with mean Rs. 25,000 and standard deviation Rs. 4,000. Find: (i) Number of employees with income > Rs. 30,000, (ii) Number of employees with income between Rs. 20,000 and Rs. 28,000.',
            marks: 8,
            difficulty: 3,
            questionType: 'Numerical',
            classification: 'CORE_SYLLABUS',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/statistics-i',
            solutionHint: 'Z1 = (30000 - 25000)/4000 = 1.25. Area to right of 1.25 = 0.5 - 0.3944 = 0.1056. Multiply by 10,000 = 1,056 employees. For 20000 to 28000: Z = -1.25 to +0.75, area = 0.3944 + 0.2734 = 0.6678 => 6,678 employees.'
          }
        ]
      },
      {
        unitNumber: 7,
        title: 'Correlation and Linear Regression',
        hours: 6,
        weightageMarks: 10,
        topics: [
          'Bivariate distribution and Scatter diagram',
          'Karl Pearson\'s coefficient of correlation (r) and properties (-1 ≤ r ≤ +1)',
          'Spearman\'s rank correlation coefficient (with and without tied ranks)',
          'Linear Regression lines: Regression equation of Y on X and X on Y',
          'Regression coefficients (b_yx and b_xy) and relationship with correlation r = ±√(b_yx * b_xy)',
          'Angle between two regression lines and standard error of estimate'
        ],
        keyFormulasOrConcepts: [
          'r = Cov(X, Y) / (σ_x * σ_y)',
          'b_yx = r * (σ_y / σ_x), Y - ȳ = b_yx (X - x̄)'
        ],
        csApplications: [
          'Simple linear regression predictors in machine learning models',
          'Feature correlation matrices for preventing multicollinearity'
        ],
        commonMistakes: [
          'Mixing up regression line of Y on X with regression line of X on Y.',
          'Obtaining a correlation value outside the range [-1, +1].'
        ],
        importantPYQs: [
          {
            id: 'sta169-u7-1',
            subjectCode: 'STA169',
            unit: 7,
            topic: 'Correlation & Regression',
            year: '2081 TU',
            question: 'From given bivariate data of study hours (X) and exam marks (Y), calculate Karl Pearson\'s coefficient of correlation and obtain the regression equation of Y on X. Estimate marks when study hours = 7.',
            marks: 8,
            difficulty: 3,
            questionType: 'Numerical',
            classification: 'CORE_SYLLABUS',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/statistics-i',
            solutionHint: 'Construct calculation table for ∑X, ∑Y, ∑X^2, ∑Y^2, ∑XY. Use formula for r and slope b_yx. Substitute X=7 in Y - ȳ = b_yx(X - x̄).'
          }
        ]
      }
    ]
  }
];

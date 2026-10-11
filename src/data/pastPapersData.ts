import { PYQQuestion, SubjectCode } from '../types';

export interface PastPaperSection {
  sectionName: string;
  instructions: string;
  totalMarks: number;
  questions: PYQQuestion[];
}

export interface FullPastPaper {
  id: string;
  subjectCode: SubjectCode;
  year: string; // '2082', '2081', '2080', '2079', '2078'
  fullMarks: number;
  passMarks: number;
  timeHours: number;
  sections: PastPaperSection[];
}

export interface SubjectPastPaperAnalysis {
  subjectCode: SubjectCode;
  yearsAnalyzed: string[];
  repeatedlyObservedTopics: string[];
  occasionallyObservedTopics: string[];
  observedOnceTopics: string[];
  unobservedTopicsInCollectedPapers: string[];
  keyAdvice: string;
}

export const SUBJECT_PAST_PAPER_ANALYSES: Record<SubjectCode, SubjectPastPaperAnalysis> = {
  CSC165: {
    subjectCode: 'CSC165',
    yearsAnalyzed: ['2082', '2081', '2080', '2079', '2078'],
    repeatedlyObservedTopics: [
      'Mathematical Induction (Summations & Inequalities) — Observed in all 5 years',
      'Extended Euclidean Algorithm & Bézout identity — Observed in 4 of 5 years',
      'Dijkstra\'s Shortest Path Algorithm trace — Observed in all 5 years',
      'Proof by Contradiction (Irrationality of √2 / primes) — Observed in 4 of 5 years',
      'Principle of Inclusion-Exclusion (PIE 3 sets) — Observed in 4 of 5 years',
      'Euler Path/Circuit vs Hamiltonian Cycle — Observed in 4 of 5 years'
    ],
    occasionallyObservedTopics: [
      'Chinese Remainder Theorem (CRT) numericals — Observed in 3 of 5 years',
      'Hasse Diagram for Divisibility Posets — Observed in 3 of 5 years',
      'Pigeonhole Principle applications — Observed in 3 of 5 years',
      'Fuzzy Set operations and membership functions — Observed in 2 of 5 years'
    ],
    observedOnceTopics: [
      'Bit string representation of sets',
      'Structural Induction proof on trees',
      'Boolean matrix multiplication'
    ],
    unobservedTopicsInCollectedPapers: [
      'Complex algorithmic time complexity proofs outside recursion',
      'Advanced multi-set permutations with repetition'
    ],
    keyAdvice: 'Observed frequently in the collected papers: Always write the formal base step and induction hypothesis clearly. Never skip table traces in Dijkstra\'s algorithm.'
  },
  CSC166: {
    subjectCode: 'CSC166',
    yearsAnalyzed: ['2082', '2081', '2080', '2079', '2078'],
    repeatedlyObservedTopics: [
      'Binary Operator Overloading (+, ==, or stream << / >>) — Observed in all 5 years',
      'Virtual Base Class and Diamond Problem resolution — Observed in all 5 years',
      'Runtime Polymorphism with Pure Virtual Functions & Abstract Class — Observed in 4 of 5 years',
      'Binary File Read/Write of Class Objects using read() & write() — Observed in 4 of 5 years',
      'Copy Constructor with Deep Copy vs Shallow Copy — Observed in 4 of 5 years'
    ],
    occasionallyObservedTopics: [
      'Generic Class Templates (e.g. Stack or Array template) — Observed in 3 of 5 years',
      'Exception Handling with multiple catch & rethrowing — Observed in 3 of 5 years',
      'Friend Function operating on two independent classes — Observed in 3 of 5 years',
      'Basic to User-defined and User-defined to Basic type conversions — Observed in 2 of 5 years'
    ],
    observedOnceTopics: [
      'Virtual Destructors necessity code example',
      'Random access file pointers seekg() and tellg()',
      'Static member functions and this pointer usage'
    ],
    unobservedTopicsInCollectedPapers: [
      'Advanced C++ STL algorithms (std::sort custom lambdas)',
      'Multiple inheritance memory layout compilers internals'
    ],
    keyAdvice: 'Observed frequently in the collected papers: Complete syntactically valid C++ programs with class definitions, member functions, main(), and object creation are awarded full marks.'
  },
  CSC167: {
    subjectCode: 'CSC167',
    yearsAnalyzed: ['2082', '2081', '2080', '2079', '2078'],
    repeatedlyObservedTopics: [
      '8085 Pin Diagram & Demultiplexing of AD0-AD7 with 74LS373 & ALE — Observed in all 5 years',
      'Timing Diagrams (Opcode Fetch 4T, MVI A, data, Memory Read/Write) — Observed in all 5 years',
      '8085 Assembly Language: Largest in array, bubble sort, or block move — Observed in all 5 years',
      '8085 Interrupt Structure (TRAP, RST 7.5-5.5, INTR, SIM/RIM) — Observed in 4 of 5 years',
      '8086 Internal Architecture (BIU and EU, Pipelining, Physical Address) — Observed in 4 of 5 years'
    ],
    occasionallyObservedTopics: [
      '8255A PPI Architecture & Control Word generation in Mode 0 — Observed in 3 of 5 years',
      'Memory Interfacing of RAM/ROM using 74LS138 decoder — Observed in 3 of 5 years',
      '8259A PIC block diagram and priority modes — Observed in 2 of 5 years',
      'Subroutines and Stack Pointer execution trace (CALL/RET) — Observed in 2 of 5 years'
    ],
    observedOnceTopics: [
      'Direct Memory Access (DMA) 8237 controller pins',
      'Comparison of Real mode vs Protected mode in 80286/80386',
      'Generation of control signals with NAND gates'
    ],
    unobservedTopicsInCollectedPapers: [
      '8086 segmented assembly program syntax with macro directives',
      'Serial communication 8251 USART internal baud rate generation'
    ],
    keyAdvice: 'Observed frequently in the collected papers: Use neat ruler lines for waveforms in timing diagrams. State T-state counts and register status signals explicitly.'
  },
  MTH168: {
    subjectCode: 'MTH168',
    yearsAnalyzed: ['2082', '2081', '2080', '2079', '2078'],
    repeatedlyObservedTopics: [
      'Row reduction to RREF and Linear Independence testing — Observed in all 5 years',
      'Basis and Dimension for Col(A) and Nul(A), Rank-Nullity Theorem — Observed in all 5 years',
      'Eigenvalues, Eigenvectors, and Matrix Diagonalization (A = PDP^-1) — Observed in all 5 years',
      'Gram-Schmidt Process for constructing orthogonal/orthonormal basis — Observed in 4 of 5 years',
      'LU Factorization via elementary row operations — Observed in 4 of 5 years'
    ],
    occasionallyObservedTopics: [
      'Cramer\'s Rule for 3x3 linear systems — Observed in 3 of 5 years',
      'Least-Squares solution of inconsistent system (A^T A x = A^T b) — Observed in 3 of 5 years',
      'Invertible Matrix Theorem (IMT) proofs and properties — Observed in 2 of 5 years',
      'Orthogonal projection onto a subspace — Observed in 2 of 5 years'
    ],
    observedOnceTopics: [
      'Geometric interpretation of determinant as volume/area',
      'Singular Value Decomposition (SVD) conceptual calculation',
      'Coordinate vectors relative to a basis'
    ],
    unobservedTopicsInCollectedPapers: [
      'Complex vector space inner products (Hermitian matrices)',
      'Infinite-dimensional function spaces'
    ],
    keyAdvice: 'Observed frequently in the collected papers: Step-by-step row operations must be labeled (e.g., R2 -> R2 - 2R1). Double check fraction arithmetic.'
  },
  STA169: {
    subjectCode: 'STA169',
    yearsAnalyzed: ['2082', '2081', '2080', '2079', '2078'],
    repeatedlyObservedTopics: [
      'Normal Distribution word problems using standard normal Z-table — Observed in all 5 years',
      'Bayes\' Theorem conditional probability on partitioned factory events — Observed in all 5 years',
      'Coefficient of Variation (C.V.) comparison for consistency — Observed in all 5 years',
      'Karl Pearson\'s correlation r and Linear Regression lines (Y on X) — Observed in 4 of 5 years',
      'Moments about arbitrary origin to central moments and Kurtosis — Observed in 4 of 5 years'
    ],
    occasionallyObservedTopics: [
      'Continuous Random Variable PDF, finding constant k, Expectation & Variance — Observed in 3 of 5 years',
      'Binomial Distribution mean and variance derivation (np, npq) — Observed in 3 of 5 years',
      'Poisson Distribution probability calculations and approximation — Observed in 2 of 5 years',
      'Spearman\'s Rank Correlation with tied ranks — Observed in 2 of 5 years'
    ],
    observedOnceTopics: [
      'Graphical location of Median using Ogive curves',
      'Bowley\'s skewness using quartiles',
      'Mathematical Expectation properties proofs (E(aX+b) = aE(X)+b)'
    ],
    unobservedTopicsInCollectedPapers: [
      'Continuous bivariate joint probability density distributions',
      'Moment generating functions for geometric distributions'
    ],
    keyAdvice: 'Observed frequently in the collected papers: Always state null/bivariate formulas before calculations, and draw a quick bell-curve sketch indicating the shaded Z-region.'
  }
};

export const FIVE_YEAR_QUESTION_BANK: FullPastPaper[] = [
  // CSC165: 2082 TU
  {
    id: 'paper-csc165-2082',
    subjectCode: 'CSC165',
    year: '2082',
    fullMarks: 60,
    passMarks: 24,
    timeHours: 3,
    sections: [
      {
        sectionName: 'Section A (Long Answer Questions — Attempt any 2 out of 3)',
        instructions: 'Attempt any TWO questions. Each question carries 10 marks.',
        totalMarks: 20,
        questions: [
          {
            id: 'csc165-2082-q1',
            subjectCode: 'CSC165',
            unit: 6,
            topic: 'Dijkstra Algorithm & Shortest Path',
            year: '2082 TU',
            section: 'Section A (Long)',
            question: 'Explain Dijkstra\'s algorithm to find single-source shortest paths in a weighted connected graph. Trace the algorithm step-by-step on a given graph with vertices {A, B, C, D, E, F} taking vertex A as source. Provide the final shortest distances and paths.',
            marks: 10,
            difficulty: 3,
            questionType: 'Numerical',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/discrete-structures',
            solutionHint: 'Write algorithm initialization: dist[s]=0, dist[v]=∞, set S=empty. Trace in table format: iteration, selected min vertex u, and relaxed neighbors v with dist[v] = min(dist[v], dist[u]+w(u,v)).'
          },
          {
            id: 'csc165-2082-q2',
            subjectCode: 'CSC165',
            unit: 2,
            topic: 'Extended Euclidean & Chinese Remainder Theorem',
            year: '2082 TU',
            section: 'Section A (Long)',
            question: '(a) State Division Algorithm. Using Extended Euclidean Algorithm, find gcd(428, 164) and express it as a linear combination of 428 and 164. [5]\n(b) Solve the simultaneous system of linear congruences using Chinese Remainder Theorem: x ≡ 2 (mod 3), x ≡ 3 (mod 5), x ≡ 1 (mod 7). [5]',
            marks: 10,
            difficulty: 3,
            questionType: 'Numerical',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/discrete-structures',
            solutionHint: '(a) gcd=4. Back-substitution yields s and t. (b) M=105, M1=35, M2=21, M3=15. Compute modular inverses y1, y2, y3 to find x mod 105.'
          },
          {
            id: 'csc165-2082-q3',
            subjectCode: 'CSC165',
            unit: 4,
            topic: 'Mathematical Induction & Logic Proofs',
            year: '2082 TU',
            section: 'Section A (Long)',
            question: '(a) Prove by mathematical induction that 1^2 + 2^2 + 3^2 + ... + n^2 = [n(n+1)(2n+1)] / 6 for all integers n ≥ 1. [5]\n(b) Show that the premises (p ∧ q) → r, r → s, and ¬s lead to the conclusion ¬p ∨ ¬q using rules of inference. [5]',
            marks: 10,
            difficulty: 3,
            questionType: 'Proof',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'EasyCSIT',
            sourceUrl: 'https://easycsit.com',
            solutionHint: '(a) Base n=1 is verified. Inductive hypothesis n=k, add (k+1)^2, factor out (k+1)/6. (b) Use Modus Tollens with r->s and ¬s to get ¬r. Then Modus Tollens with (p∧q)->r gives ¬(p∧q), and De Morgan gives ¬p ∨ ¬q.'
          }
        ]
      },
      {
        sectionName: 'Section B (Short Answer Questions — Attempt any 8 out of 10)',
        instructions: 'Attempt any EIGHT questions. Each question carries 5 marks.',
        totalMarks: 40,
        questions: [
          {
            id: 'csc165-2082-q4',
            subjectCode: 'CSC165',
            unit: 1,
            topic: 'Bijective Functions & Inverse',
            year: '2082 TU',
            section: 'Section B (Short)',
            question: 'Define injective, surjective, and bijective functions. Let f: R -> R be defined by f(x) = 4x + 9. Prove that f is bijective and find its inverse.',
            marks: 5,
            difficulty: 2,
            questionType: 'Proof',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            solutionHint: 'Prove 1-1: 4x1+9=4x2+9 => x1=x2. Prove onto: y=4x+9 => x=(y-9)/4 in R. Inverse is f^-1(x)=(x-9)/4.'
          },
          {
            id: 'csc165-2082-q5',
            subjectCode: 'CSC165',
            unit: 1,
            topic: 'Principle of Inclusion-Exclusion',
            year: '2082 TU',
            section: 'Section B (Short)',
            question: 'State Principle of Inclusion-Exclusion for three sets. In a college with 150 students, 80 take C++, 60 take Python, 50 take Java, 30 take C++ and Python, 25 take C++ and Java, 20 take Python and Java, and 10 take all three. How many students take none of these languages?',
            marks: 5,
            difficulty: 2,
            questionType: 'Numerical',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'EasyCSIT',
            solutionHint: '|A ∪ B ∪ C| = 80+60+50 - (30+25+20) + 10 = 190 - 75 + 10 = 125. None = 150 - 125 = 25.'
          },
          {
            id: 'csc165-2082-q6',
            subjectCode: 'CSC165',
            unit: 3,
            topic: 'Proof by Contradiction',
            year: '2082 TU',
            section: 'Section B (Short)',
            question: 'Prove by contradiction that √3 is an irrational number.',
            marks: 5,
            difficulty: 2,
            questionType: 'Proof',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            solutionHint: 'Assume √3 = a/b with gcd(a,b)=1. 3b^2 = a^2 => 3 divides a (a=3k). 3b^2 = 9k^2 => b^2 = 3k^2 => 3 divides b. Contradiction.'
          },
          {
            id: 'csc165-2082-q7',
            subjectCode: 'CSC165',
            unit: 5,
            topic: 'Pigeonhole Principle',
            year: '2082 TU',
            section: 'Section B (Short)',
            question: 'State Generalized Pigeonhole Principle. What is the minimum number of students required in a lecture hall to guarantee that at least 5 of them receive the same grade from {A, B, C, D, F}?',
            marks: 5,
            difficulty: 2,
            questionType: 'Numerical',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            solutionHint: 'Boxes k=5 grades. We need ⌈N/5⌉ = 5. Smallest integer is N = 5*(5-1) + 1 = 21 students.'
          },
          {
            id: 'csc165-2082-q8',
            subjectCode: 'CSC165',
            unit: 6,
            topic: 'Hasse Diagram & Poset',
            year: '2082 TU',
            section: 'Section B (Short)',
            question: 'Define partial order relation. Draw the Hasse diagram for the poset (D_36, |) where D_36 is the set of all positive divisors of 36 ordered by divisibility.',
            marks: 5,
            difficulty: 2,
            questionType: 'Diagram',
            classification: 'PAST_QUESTION',
            frequency: 'Occasionally Observed',
            source: 'EasyCSIT',
            solutionHint: 'Divisors of 36: {1, 2, 3, 4, 6, 9, 12, 18, 36}. Draw levels: 1 at bottom; 2, 3 on level 1; 4, 6, 9 on level 2; 12, 18 on level 3; 36 on top.'
          },
          {
            id: 'csc165-2082-q9',
            subjectCode: 'CSC165',
            unit: 6,
            topic: 'Euler & Hamiltonian Graphs',
            year: '2082 TU',
            section: 'Section B (Short)',
            question: 'Define Euler circuit and Hamiltonian cycle. State Euler\'s theorem for the existence of an Euler circuit in a connected graph.',
            marks: 5,
            difficulty: 2,
            questionType: 'Definition',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            solutionHint: 'Euler circuit traverses every edge exactly once. Hamiltonian cycle visits every vertex exactly once. A connected graph has an Euler circuit iff every vertex has even degree.'
          },
          {
            id: 'csc165-2082-q10',
            subjectCode: 'CSC165',
            unit: 6,
            topic: 'Minimum Spanning Tree (Kruskal)',
            year: '2082 TU',
            section: 'Section B (Short)',
            question: 'Explain Kruskal\'s algorithm for finding the Minimum Spanning Tree (MST) of a connected weighted graph. Find the MST weight for a given 6-vertex graph.',
            marks: 5,
            difficulty: 2,
            questionType: 'Numerical',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            solutionHint: 'Sort all edges in non-decreasing order of weight. Greedily add next smallest edge that does not form a cycle until (V-1) edges are selected.'
          }
        ]
      }
    ]
  },

  // CSC166: 2082 TU
  {
    id: 'paper-csc166-2082',
    subjectCode: 'CSC166',
    year: '2082',
    fullMarks: 60,
    passMarks: 24,
    timeHours: 3,
    sections: [
      {
        sectionName: 'Section A (Long Answer Questions — Attempt any 2 out of 3)',
        instructions: 'Attempt any TWO questions. Each question carries 10 marks.',
        totalMarks: 20,
        questions: [
          {
            id: 'csc166-2082-q1',
            subjectCode: 'CSC166',
            unit: 3,
            topic: 'Operator Overloading',
            year: '2082 TU',
            section: 'Section A (Long)',
            question: 'What is operator overloading? State the syntax and rules for overloading operators in C++. Write a complete C++ program to overload binary + operator to concatenate two custom String objects and overload == operator to compare their lengths.',
            marks: 10,
            difficulty: 3,
            questionType: 'Programming',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/object-oriented-programming',
            solutionHint: 'Define String class with dynamic char* or array. Implement String operator+(const String &s) using strcpy/strcat, and bool operator==(const String &s) using strlen.'
          },
          {
            id: 'csc166-2082-q2',
            subjectCode: 'CSC166',
            unit: 4,
            topic: 'Inheritance & Virtual Base Class',
            year: '2082 TU',
            section: 'Section A (Long)',
            question: 'Explain the diamond problem in hybrid inheritance with an inheritance diagram. How does the Virtual Base Class resolve this ambiguity? Write a complete C++ program implementing Student, Test, Sports, and Result classes using virtual base inheritance.',
            marks: 10,
            difficulty: 3,
            questionType: 'Programming',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            solutionHint: 'Demonstrate class Test : virtual public Student and class Sports : virtual public Student, with class Result : public Test, public Sports. Verify no duplicate roll variable in Result.'
          },
          {
            id: 'csc166-2082-q3',
            subjectCode: 'CSC166',
            unit: 7,
            topic: 'Binary File Handling & Objects',
            year: '2082 TU',
            section: 'Section A (Long)',
            question: 'Explain C++ stream hierarchy. Write a complete C++ program to write 5 Book records (bookID, title, price) into a binary file "library.dat" using write() and search for a book by bookID using read(). Handle file errors appropriately.',
            marks: 10,
            difficulty: 3,
            questionType: 'Programming',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'EasyCSIT',
            solutionHint: 'Define Book class. Use ofstream with ios::binary | ios::out. For search, open ifstream with ios::binary | ios::in, loop while file.read(reinterpret_cast<char*>(&b), sizeof(b)).'
          }
        ]
      },
      {
        sectionName: 'Section B (Short Answer Questions — Attempt any 8 out of 10)',
        instructions: 'Attempt any EIGHT questions. Each question carries 5 marks.',
        totalMarks: 40,
        questions: [
          {
            id: 'csc166-2082-q4',
            subjectCode: 'CSC166',
            unit: 2,
            topic: 'Copy Constructor & Deep Copy',
            year: '2082 TU',
            section: 'Section B (Short)',
            question: 'What is a copy constructor? Explain when a copy constructor is automatically called by C++. Write a small code snippet demonstrating deep copy.',
            marks: 5,
            difficulty: 2,
            questionType: 'Programming',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            solutionHint: 'Called when initializing an object from another, pass-by-value, or return-by-value. Deep copy dynamically allocates separate heap memory and copies the data values.'
          },
          {
            id: 'csc166-2082-q5',
            subjectCode: 'CSC166',
            unit: 5,
            topic: 'Pure Virtual Function & Abstract Class',
            year: '2082 TU',
            section: 'Section B (Short)',
            question: 'What is runtime polymorphism? What are pure virtual functions and abstract classes? Write a program showing dynamic binding with Shape, Circle, and Rectangle.',
            marks: 5,
            difficulty: 3,
            questionType: 'Programming',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            solutionHint: 'virtual void area() = 0; inside Shape. Shape* s = new Circle(); s->area() calls Circle\'s area at runtime via VTABLE.'
          },
          {
            id: 'csc166-2082-q6',
            subjectCode: 'CSC166',
            unit: 6,
            topic: 'Class Templates',
            year: '2082 TU',
            section: 'Section B (Short)',
            question: 'Write a class template for a generic Stack with push() and pop() member functions. Demonstrate it with integer and floating-point data in main().',
            marks: 5,
            difficulty: 3,
            questionType: 'Programming',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'EasyCSIT',
            solutionHint: 'template <class T> class Stack { T data[50]; int top; public: void push(T val); T pop(); };'
          },
          {
            id: 'csc166-2082-q7',
            subjectCode: 'CSC166',
            unit: 6,
            topic: 'Exception Handling',
            year: '2082 TU',
            section: 'Section B (Short)',
            question: 'Explain the exception handling model in C++ with try, throw, and catch keywords. Write a program to handle divide-by-zero error with custom message.',
            marks: 5,
            difficulty: 2,
            questionType: 'Programming',
            classification: 'PAST_QUESTION',
            frequency: 'Occasionally Observed',
            source: 'Hamro CSIT',
            solutionHint: 'if(b == 0) throw "Division by zero!"; catch(const char* msg) { cout << msg; }'
          },
          {
            id: 'csc166-2082-q8',
            subjectCode: 'CSC166',
            unit: 2,
            topic: 'Friend Function',
            year: '2082 TU',
            section: 'Section B (Short)',
            question: 'What is a friend function? Write a program to add private data members of two different classes using a common friend function.',
            marks: 5,
            difficulty: 2,
            questionType: 'Programming',
            classification: 'PAST_QUESTION',
            frequency: 'Occasionally Observed',
            source: 'Hamro CSIT',
            solutionHint: 'Declare class B forward declaration. In class A and class B declare friend int add(A, B); define function outside classes.'
          }
        ]
      }
    ]
  },

  // CSC167: 2082 TU
  {
    id: 'paper-csc167-2082',
    subjectCode: 'CSC167',
    year: '2082',
    fullMarks: 60,
    passMarks: 24,
    timeHours: 3,
    sections: [
      {
        sectionName: 'Section A (Long Answer Questions — Attempt any 2 out of 3)',
        instructions: 'Attempt any TWO questions. Each question carries 10 marks.',
        totalMarks: 20,
        questions: [
          {
            id: 'csc167-2082-q1',
            subjectCode: 'CSC167',
            unit: 2,
            topic: '8085 Pin Diagram & Demultiplexing',
            year: '2082 TU',
            section: 'Section A (Long)',
            question: 'Draw the functional pin diagram of the 8085 microprocessor with all 40 pins classified into groups. Explain how the lower-order address bus and data bus (AD0-AD7) are demultiplexed using ALE and latch 74LS373 with a circuit diagram.',
            marks: 10,
            difficulty: 3,
            questionType: 'Diagram',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/microprocessor',
            solutionHint: 'Draw 8085 DIP-40 pinout. Connect AD0-AD7 to D inputs of 74LS373, ALE to latch G pin. Output of latch gives A0-A7 during T1.'
          },
          {
            id: 'csc167-2082-q2',
            subjectCode: 'CSC167',
            unit: 4,
            topic: '8085 Assembly Programming',
            year: '2082 TU',
            section: 'Section A (Long)',
            question: 'Write an 8085 assembly language program to sort an array of 10 bytes stored starting from memory address 3000H in ascending order using Bubble Sort algorithm. Store the sorted array starting from 3050H.',
            marks: 10,
            difficulty: 4,
            questionType: 'Assembly',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            solutionHint: 'Use nested loop with register B as outer pass counter (N-1) and register C as inner comparison counter. Compare M and M+1; if M > M+1, swap bytes.'
          },
          {
            id: 'csc167-2082-q3',
            subjectCode: 'CSC167',
            unit: 7,
            topic: '8086 Internal Architecture',
            year: '2082 TU',
            section: 'Section A (Long)',
            question: 'Explain the internal architecture of the 8086 microprocessor with a detailed functional block diagram showing Bus Interface Unit (BIU) and Execution Unit (EU). Explain the 6-byte instruction queue and pipelining.',
            marks: 10,
            difficulty: 3,
            questionType: 'Explain',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            solutionHint: 'BIU handles memory bus interfacing, segment registers (CS, DS, SS, ES, IP), and 6-byte FIFO queue. EU executes instructions (ALU, flags, general registers). Pipelining occurs because BIU prefetches instructions during EU execution.'
          }
        ]
      },
      {
        sectionName: 'Section B (Short Answer Questions — Attempt any 8 out of 10)',
        instructions: 'Attempt any EIGHT questions. Each question carries 5 marks.',
        totalMarks: 40,
        questions: [
          {
            id: 'csc167-2082-q4',
            subjectCode: 'CSC167',
            unit: 3,
            topic: 'Timing Diagram',
            year: '2082 TU',
            section: 'Section B (Short)',
            question: 'Define machine cycle and T-state. Draw the detailed timing diagram for the instruction MVI A, 32H showing CLK, A15-A8, AD7-AD0, ALE, IO/M, RD, and WR signals.',
            marks: 5,
            difficulty: 3,
            questionType: 'Diagram',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            solutionHint: '2 Machine cycles: Opcode fetch (4 T-states) + Memory read (3 T-states) = 7 T-states.'
          },
          {
            id: 'csc167-2082-q5',
            subjectCode: 'CSC167',
            unit: 5,
            topic: '8085 Interrupts',
            year: '2082 TU',
            section: 'Section B (Short)',
            question: 'Explain the hardware interrupts of 8085 in order of priority. Mention their vector addresses and triggering methods (edge/level).',
            marks: 5,
            difficulty: 2,
            questionType: 'Explain',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            solutionHint: 'TRAP (Highest, Edge & Level, 0024H), RST 7.5 (Edge, 003CH), RST 6.5 (Level, 0034H), RST 5.5 (Level, 002CH), INTR (Lowest, Non-vectored).'
          },
          {
            id: 'csc167-2082-q6',
            subjectCode: 'CSC167',
            unit: 6,
            topic: '8255 PPI Modes',
            year: '2082 TU',
            section: 'Section B (Short)',
            question: 'Draw the block diagram of 8255A PPI. Explain Mode 0 (Basic I/O) and Mode 1 (Strobed I/O).',
            marks: 5,
            difficulty: 2,
            questionType: 'Explain',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'EasyCSIT',
            solutionHint: '8255 has Port A, Port B, Port C (Upper & Lower), Control register, and Data bus buffer. Mode 0 is simple I/O without handshaking; Mode 1 uses Port C pins as strobe handshaking.'
          },
          {
            id: 'csc167-2082-q7',
            subjectCode: 'CSC167',
            unit: 7,
            topic: '8086 Physical Address',
            year: '2082 TU',
            section: 'Section B (Short)',
            question: 'Explain memory segmentation in 8086. If CS = 2500H and IP = 0120H, calculate the physical address generated in memory.',
            marks: 5,
            difficulty: 2,
            questionType: 'Numerical',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            solutionHint: 'Physical Address = CS * 16 + IP = 25000H + 0120H = 25120H.'
          }
        ]
      }
    ]
  },

  // MTH168: 2082 TU
  {
    id: 'paper-mth168-2082',
    subjectCode: 'MTH168',
    year: '2082',
    fullMarks: 80,
    passMarks: 32,
    timeHours: 3,
    sections: [
      {
        sectionName: 'Section A (Comprehensive Long Answer Questions — Attempt any 4 out of 5)',
        instructions: 'Attempt any FOUR questions. Each question carries 10 marks.',
        totalMarks: 40,
        questions: [
          {
            id: 'mth168-2082-q1',
            subjectCode: 'MTH168',
            unit: 4,
            topic: 'Null Space, Column Space & Rank Theorem',
            year: '2082 TU',
            section: 'Section A (Long)',
            question: 'Find a basis for the null space and column space of matrix A = [[1, -2, 9, 5, 4], [1, -1, 6, 5, -3], [-2, 0, -6, 1, -2], [4, 1, 9, -1, -9]]. Determine the rank and nullity of A and verify the Rank-Nullity Theorem.',
            marks: 10,
            difficulty: 3,
            questionType: 'Numerical',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/mathematics-ii',
            solutionHint: 'Row-reduce A to RREF. Identify pivot columns to extract basis for Col(A). Solve Ax=0 with free variables to get basis for Nul(A). Verify rank + nullity = 5.'
          },
          {
            id: 'mth168-2082-q2',
            subjectCode: 'MTH168',
            unit: 5,
            topic: 'Eigenvalues & Diagonalization',
            year: '2082 TU',
            section: 'Section A (Long)',
            question: 'Find the eigenvalues and corresponding eigenvectors of matrix A = [[1, 3, 3], [-3, -5, -3], [3, 3, 1]]. If possible, diagonalize matrix A by finding an invertible matrix P and a diagonal matrix D such that A = P D P^-1.',
            marks: 10,
            difficulty: 3,
            questionType: 'Numerical',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            solutionHint: 'Solve det(A - λI) = -(λ-1)(λ+2)^2 = 0 => λ = 1, -2 (multiplicity 2). Find 1 independent eigenvector for λ=1 and 2 independent eigenvectors for λ=-2. Construct P and D.'
          },
          {
            id: 'mth168-2082-q3',
            subjectCode: 'MTH168',
            unit: 6,
            topic: 'Gram-Schmidt Orthogonalization',
            year: '2082 TU',
            section: 'Section A (Long)',
            question: 'Apply the Gram-Schmidt process to produce an orthonormal basis for the subspace spanned by x1 = [1, 1, 1, 1]^T, x2 = [0, 1, 1, 1]^T, and x3 = [0, 0, 1, 1]^T.',
            marks: 10,
            difficulty: 3,
            questionType: 'Numerical',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            solutionHint: 'Set v1 = x1. Compute v2 = x2 - ((x2·v1)/(v1·v1)) v1. Compute v3 = x3 - ((x3·v1)/(v1·v1)) v1 - ((x3·v2)/(v2·v2)) v2. Normalize ui = vi / ||vi||.'
          },
          {
            id: 'mth168-2082-q4',
            subjectCode: 'MTH168',
            unit: 2,
            topic: 'LU Factorization',
            year: '2082 TU',
            section: 'Section A (Long)',
            question: 'Find the LU factorization of matrix A = [[3, -7, -2], [-3, 5, 1], [6, -4, 0]]. Then solve the system Ax = b for b = [-7, 5, 2]^T by forward substitution Ly = b and back substitution Ux = y.',
            marks: 10,
            difficulty: 3,
            questionType: 'Numerical',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'EasyCSIT',
            solutionHint: 'Eliminate lower rows using multipliers. Record multipliers in L (unit lower triangular) and resulting echelon form in U.'
          }
        ]
      },
      {
        sectionName: 'Section B (Problem Solving Questions — Attempt any 8 out of 10)',
        instructions: 'Attempt any EIGHT questions. Each question carries 5 marks.',
        totalMarks: 40,
        questions: [
          {
            id: 'mth168-2082-q5',
            subjectCode: 'MTH168',
            unit: 1,
            topic: 'Linear Independence',
            year: '2082 TU',
            section: 'Section B (Short)',
            question: 'Determine if the vectors v1 = [1, 2, -3]^T, v2 = [-4, -8, 12]^T, and v3 = [1, 0, 2]^T are linearly independent in R3.',
            marks: 5,
            difficulty: 2,
            questionType: 'Numerical',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            solutionHint: 'Notice v2 = -4 * v1. Since one vector is a scalar multiple of another, the set is linearly dependent immediately.'
          },
          {
            id: 'mth168-2082-q6',
            subjectCode: 'MTH168',
            unit: 3,
            topic: 'Cramer\'s Rule',
            year: '2082 TU',
            section: 'Section B (Short)',
            question: 'Solve the system of equations using Cramer\'s rule: 3x1 - 2x2 = 6, -5x1 + 4x2 = 8.',
            marks: 5,
            difficulty: 2,
            questionType: 'Numerical',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'EasyCSIT',
            solutionHint: 'det(A) = 12 - 10 = 2. det(A1) = 24 - (-16) = 40 => x1 = 20. det(A2) = 24 - (-30) = 54 => x2 = 27.'
          },
          {
            id: 'mth168-2082-q7',
            subjectCode: 'MTH168',
            unit: 6,
            topic: 'Least-Squares Solution',
            year: '2082 TU',
            section: 'Section B (Short)',
            question: 'Find the least-squares solution of the inconsistent linear system Ax = b where A = [[4, 0], [0, 2], [1, 1]] and b = [2, 0, 11]^T.',
            marks: 5,
            difficulty: 3,
            questionType: 'Numerical',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            solutionHint: 'Compute A^T A and A^T b. Solve normal equations A^T A x_hat = A^T b.'
          }
        ]
      }
    ]
  },

  // STA169: 2082 TU
  {
    id: 'paper-sta169-2082',
    subjectCode: 'STA169',
    year: '2082',
    fullMarks: 60,
    passMarks: 24,
    timeHours: 3,
    sections: [
      {
        sectionName: 'Section A (Long Answer Questions — Attempt any 2 out of 3)',
        instructions: 'Attempt any TWO questions. Each question carries 10 marks.',
        totalMarks: 20,
        questions: [
          {
            id: 'sta169-2082-q1',
            subjectCode: 'STA169',
            unit: 6,
            topic: 'Normal Distribution & Z-Table',
            year: '2082 TU',
            section: 'Section A (Long)',
            question: 'State the properties of the Normal distribution curve. The monthly examination marks of 5,000 CSIT students are normally distributed with mean 65 and standard deviation 12. Find:\n(a) Number of students scoring above 80 marks.\n(b) Number of students scoring between 50 and 75 marks.\n(c) The minimum marks required to be in the top 10% of students.',
            marks: 10,
            difficulty: 3,
            questionType: 'Numerical',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            sourceUrl: 'https://hamrocsit.com/semester/second/statistics-i',
            solutionHint: '(a) Z=(80-65)/12 = 1.25. P(Z>1.25) = 0.5 - 0.3944 = 0.1056 => 528 students. (b) Z1=(50-65)/12 = -1.25, Z2=(75-65)/12 = 0.83. Area = 0.3944 + 0.2967 = 0.6911 => 3,456 students. (c) Top 10% has Z=1.28 => X = 65 + 1.28(12) = 80.36.'
          },
          {
            id: 'sta169-2082-q2',
            subjectCode: 'STA169',
            unit: 7,
            topic: 'Correlation & Regression',
            year: '2082 TU',
            section: 'Section A (Long)',
            question: 'From the following bivariate data of study hours (X) and marks obtained in CSIT (Y):\nX: 2, 4, 5, 6, 8, 11\nY: 18, 22, 24, 28, 34, 40\n(a) Calculate Karl Pearson\'s coefficient of correlation (r).\n(b) Find the regression equation of marks (Y) on study hours (X).\n(c) Estimate marks when study hours = 9.',
            marks: 10,
            difficulty: 3,
            questionType: 'Numerical',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            solutionHint: 'Build table for ∑X, ∑Y, ∑X^2, ∑Y^2, ∑XY. Calculate r ≈ 0.99 (very high positive correlation). Slope b_yx = r * (σy/σx). Form line Y - ȳ = b_yx(X - x̄) and plug X=9.'
          },
          {
            id: 'sta169-2082-q3',
            subjectCode: 'STA169',
            unit: 4,
            topic: 'Bayes Theorem',
            year: '2082 TU',
            section: 'Section A (Long)',
            question: 'State and prove Bayes\' Theorem. In a computer chip manufacturing plant, machines A, B, and C produce 30%, 45%, and 25% of total chips. 2%, 3%, and 1% of chips produced by them are defective. A chip drawn at random is found to be defective. What is the probability that it was manufactured by machine B?',
            marks: 10,
            difficulty: 3,
            questionType: 'Numerical',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            solutionHint: 'P(B|D) = [P(B)*P(D|B)] / [P(A)P(D|A) + P(B)P(D|B) + P(C)P(D|C)] = [0.45*0.03] / [0.30*0.02 + 0.45*0.03 + 0.25*0.01] = 0.0135 / (0.006 + 0.0135 + 0.0025) = 0.0135 / 0.022 = 0.6136.'
          }
        ]
      },
      {
        sectionName: 'Section B (Short Answer Questions — Attempt any 8 out of 10)',
        instructions: 'Attempt any EIGHT questions. Each question carries 5 marks.',
        totalMarks: 40,
        questions: [
          {
            id: 'sta169-2082-q4',
            subjectCode: 'STA169',
            unit: 2,
            topic: 'Coefficient of Variation',
            year: '2082 TU',
            section: 'Section B (Short)',
            question: 'Two bowlers A and B have mean wickets taken 40 and 32 with standard deviations 6.0 and 4.2. Which bowler is more consistent in performance?',
            marks: 5,
            difficulty: 2,
            questionType: 'Numerical',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            solutionHint: 'CV_A = (6.0/40)*100 = 15%. CV_B = (4.2/32)*100 = 13.125%. Bowler B has lower CV, hence shows greater consistency.'
          },
          {
            id: 'sta169-2082-q5',
            subjectCode: 'STA169',
            unit: 3,
            topic: 'Central Moments & Skewness',
            year: '2082 TU',
            section: 'Section B (Short)',
            question: 'The first three moments of a distribution about the value 2 are 1, 16, and -40. Find the mean, variance, and third central moment (μ3). Comment on skewness.',
            marks: 5,
            difficulty: 2,
            questionType: 'Numerical',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'EasyCSIT',
            solutionHint: 'Mean = 2 + 1 = 3. μ2 = 16 - 1^2 = 15 (Variance). μ3 = -40 - 3(16)(1) + 2(1)^3 = -86 (Negatively skewed).'
          },
          {
            id: 'sta169-2082-q6',
            subjectCode: 'STA169',
            unit: 6,
            topic: 'Poisson Distribution',
            year: '2082 TU',
            section: 'Section B (Short)',
            question: 'If a random variable X follows a Poisson distribution such that P(X = 1) = P(X = 2), find the mean λ and calculate P(X = 0).',
            marks: 5,
            difficulty: 2,
            questionType: 'Numerical',
            classification: 'PAST_QUESTION',
            frequency: 'Frequently Observed',
            source: 'Hamro CSIT',
            solutionHint: 'e^-λ λ^1 / 1! = e^-λ λ^2 / 2! => λ = λ^2 / 2 => λ = 2. Then P(X=0) = e^-2 = 0.1353.'
          }
        ]
      }
    ]
  }
];

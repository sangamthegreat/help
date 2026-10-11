import { UserNote } from '../types';

export const INITIAL_NOTES: UserNote[] = [
  {
    id: 'note-winter-arc-manifesto',
    title: '❄️ Winter Arc Rules & CSIT Lock-In Protocol',
    subjectCode: 'GENERAL',
    tags: ['Mindset', 'Discipline', 'WinterArc'],
    createdAt: '2026-10-04T00:00:00.000Z',
    updatedAt: '2026-10-04T00:00:00.000Z',
    isPinned: true,
    content: `# WINTER ARC: 40-DAY BSc CSIT LOCK-IN PROTOCOL

### Non-Negotiable Daily Rules:
1. **5:30 AM Wake Up**: Immediate cold water splash. Do not touch Instagram, TikTok, or YouTube shorts for the first hour.
2. **Deep Work Block 1 (Morning 90m)**: Heavy theory and derivations (Discrete proofs, Linear Algebra row reductions, Microprocessor timing diagrams).
3. **Deep Work Block 2 (Evening 90m)**: Coding & Numerical practice (C++ OOP implementations, 8085 assembly instructions, Statistics calculation tables).
4. **Physical Training**: 45 mins workout or run. Sharp mind needs a resilient body.
5. **3L Hydration**: Keep a 1L water bottle beside your study desk.
6. **TU Past Papers Rule**: Every single day, solve at least 3 TU past year questions (PYQs) from Hamro CSIT or Easy CSIT on paper.
7. **Evening Audit**: Mark today's checkboxes on this Notion tracker before 10:30 PM.

> "40 days of uncompromising discipline will set you apart from 99% of your peers. Lock in."`
  },
  {
    id: 'note-csc167-8085-cheatsheet',
    title: '⚡ 8085 Microprocessor High-Yield Exam Formulas & Pinout',
    subjectCode: 'CSC167',
    tags: ['Microprocessor', '8085', 'CheatSheet'],
    createdAt: '2026-10-04T00:00:00.000Z',
    updatedAt: '2026-10-04T00:00:00.000Z',
    isPinned: true,
    content: `# 8085 Microprocessor Exam Quick Sheet

### Key Specifications:
- **Data Bus**: 8-bit bidirectional (AD0 - AD7)
- **Address Bus**: 16-bit (A8 - A15 unidirectional, AD0 - AD7 multiplexed)
- **Memory Capacity**: $2^{16} = 64\\text{ KB}$
- **Operating Frequency**: 3.07 MHz (Crystal is 6.14 MHz, divided by 2 internally)

### Demultiplexing Formula:
- **ALE (Address Latch Enable)**: When high (1), AD0-AD7 carries lower 8 bits of memory address ($A_0 - A_7$).
- Connected to latch **74LS373** G (enable) pin to capture lower address bits.

### Control Signals Truth Table:
| IO/M' | S1 | S0 | Operation | Active Control Signal |
|:---:|:---:|:---:|:---|:---:|
| 0 | 1 | 1 | Opcode Fetch | MEMR' (Low) |
| 0 | 1 | 0 | Memory Read | MEMR' (Low) |
| 0 | 0 | 1 | Memory Write | MEMW' (Low) |
| 1 | 1 | 0 | I/O Read | IOR' (Low) |
| 1 | 0 | 1 | I/O Write | IOW' (Low) |

### Interrupt Vector Locations:
- **TRAP** (Non-maskable, highest): $4.5 \\times 8 = 36 = 0024\\text{H}$
- **RST 7.5**: $7.5 \\times 8 = 60 = 003C\\text{H}$
- **RST 6.5**: $6.5 \\times 8 = 52 = 0034\\text{H}$
- **RST 5.5**: $5.5 \\times 8 = 44 = 002C\\text{H}$
- **INTR**: Non-vectored (Vector supplied externally)`
  },
  {
    id: 'note-csc166-virtual-diamond',
    title: '💻 C++ OOP Diamond Problem & Virtual Base Class Template',
    subjectCode: 'CSC166',
    tags: ['OOP', 'C++', 'Inheritance'],
    createdAt: '2026-10-04T00:00:00.000Z',
    updatedAt: '2026-10-04T00:00:00.000Z',
    isPinned: false,
    content: `# C++ Diamond Problem & Virtual Base Class

\`\`\`cpp
#include <iostream>
using namespace std;

// Base class
class Student {
protected:
    int roll;
public:
    void getRoll(int r) { roll = r; }
    void putRoll() { cout << "Roll: " << roll << endl; }
};

// Virtual inheritance avoids duplicate copies in Result
class Test : virtual public Student {
protected:
    float part1, part2;
public:
    void getMarks(float m1, float m2) { part1 = m1; part2 = m2; }
    void putMarks() { cout << "Marks: " << part1 << ", " << part2 << endl; }
};

class Sports : virtual public Student {
protected:
    float score;
public:
    void getScore(float s) { score = s; }
    void putScore() { cout << "Sports Score: " << score << endl; }
};

class Result : public Test, public Sports {
    float total;
public:
    void display() {
        total = part1 + part2 + score;
        putRoll(); // No ambiguity!
        putMarks();
        putScore();
        cout << "Total Score: " << total << endl;
    }
};

int main() {
    Result r;
    r.getRoll(101);
    r.getMarks(85.5, 90.0);
    r.getScore(8.5);
    r.display();
    return 0;
}
\`\`\``
  },
  {
    id: 'note-mth168-gram-schmidt',
    title: '📐 Math II Gram-Schmidt & Diagonalization Algorithms',
    subjectCode: 'MTH168',
    tags: ['Math', 'LinearAlgebra', 'Algorithms'],
    createdAt: '2026-10-04T00:00:00.000Z',
    updatedAt: '2026-10-04T00:00:00.000Z',
    isPinned: false,
    content: `# Gram-Schmidt Process (Guaranteed 8 Marks in TU)

Given basis $\\{x_1, x_2, x_3\\}$ for subspace $W$:

1. Set:
   $$v_1 = x_1$$

2. Next orthogonal vector:
   $$v_2 = x_2 - \\frac{x_2 \\cdot v_1}{v_1 \\cdot v_1} v_1$$

3. Third orthogonal vector:
   $$v_3 = x_3 - \\frac{x_3 \\cdot v_1}{v_1 \\cdot v_1} v_1 - \\frac{x_3 \\cdot v_2}{v_2 \\cdot v_2} v_2$$

4. Normalize for Orthonormal Basis:
   $$u_i = \\frac{v_i}{\\|v_i\\|}$$

### Diagonalization Recipe:
1. Find characteristic equation: $\\det(A - \\lambda I) = 0$.
2. Solve for eigenvalues $\\lambda_1, \\lambda_2, \\dots, \\lambda_n$.
3. For each $\\lambda$, find null space basis: $(A - \\lambda I)x = 0$.
4. Check if total independent eigenvectors equals $n$.
5. Construct $P = [v_1 \\, v_2 \\dots v_n]$ and diagonal $D = \\text{diag}(\\lambda_1, \\dots, \\lambda_n)$.
6. Verify $A = P D P^{-1}$.`
  },
  {
    id: 'note-sta169-normal-dist',
    title: '📊 Statistics I Normal Curve & Bayes Theorem Formulas',
    subjectCode: 'STA169',
    tags: ['Statistics', 'Formulas', 'Bayes'],
    createdAt: '2026-10-04T00:00:00.000Z',
    updatedAt: '2026-10-04T00:00:00.000Z',
    isPinned: false,
    content: `# Statistics I Golden Formulas

### 1. Standard Normal Transformation:
$$Z = \\frac{X - \\mu}{\\sigma}$$
- $\\mu$ is the mean, $\\sigma$ is the standard deviation.
- Total area under standard normal curve $= 1$.
- Area from $-\\infty$ to $0$ is $0.5$, Area from $0$ to $+\\infty$ is $0.5$.

### 2. Bayes' Theorem:
$$P(B_i | A) = \\frac{P(B_i) \\cdot P(A | B_i)}{\\sum_{j=1}^k P(B_j) \\cdot P(A | B_j)}$$

### 3. Binomial Distribution:
$$P(X = x) = \\binom{n}{x} p^x q^{n-x}$$
- $\\text{Mean} = n p$
- $\\text{Variance} = n p q$
- $\\text{Standard Deviation} = \\sqrt{n p q}$

### 4. Poisson Distribution:
$$P(X = x) = \\frac{e^{-\\lambda} \\lambda^x}{x!}$$
- $\\text{Mean} = \\text{Variance} = \\lambda$`
  }
];

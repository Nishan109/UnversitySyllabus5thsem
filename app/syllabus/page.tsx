"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Fragment, useEffect, useState } from "react"

type Course = {
  code: string
  name: string
  L: number | "-"
  T: number | "-"
  P: number | "-"
  int: number
  ext: number
  total: number
  credits: number
  kind: "theory" | "lab" | "training" | "elective"
}

const courses: Course[] = [
  {
    code: "BCSES1-501",
    name: "Compiler Design",
    L: 3,
    T: 1,
    P: 0,
    int: 40,
    ext: 60,
    total: 100,
    credits: 4,
    kind: "theory",
  },
  {
    code: "BCSES1-502",
    name: "Database Management System",
    L: 3,
    T: 0,
    P: 0,
    int: 40,
    ext: 60,
    total: 100,
    credits: 3,
    kind: "theory",
  },
  {
    code: "BCSES1-503",
    name: "Formal Language and Automata Theory",
    L: 3,
    T: 0,
    P: 0,
    int: 40,
    ext: 60,
    total: 100,
    credits: 3,
    kind: "theory",
  },
  {
    code: "BCSES1-504",
    name: "Design & Analysis of Algorithms",
    L: 3,
    T: 1,
    P: 0,
    int: 40,
    ext: 60,
    total: 100,
    credits: 4,
    kind: "theory",
  },
  {
    code: "BCSES1-505",
    name: "Database Management System Laboratory",
    L: 0,
    T: 0,
    P: 4,
    int: 60,
    ext: 40,
    total: 100,
    credits: 2,
    kind: "lab",
  },
  {
    code: "BCSES1-506",
    name: "Design & Analysis of Algorithms Laboratory",
    L: 0,
    T: 0,
    P: 2,
    int: 60,
    ext: 40,
    total: 100,
    credits: 1,
    kind: "lab",
  },
  {
    code: "BCSES1-507",
    name: "Industrial Training-II*",
    L: "-",
    T: "-",
    P: "-",
    int: 60,
    ext: 40,
    total: 100,
    credits: 4,
    kind: "training",
  },
  {
    code: "DE-I",
    name: "Departmental Elective-I",
    L: 3,
    T: 0,
    P: 0,
    int: 40,
    ext: 60,
    total: 100,
    credits: 3,
    kind: "elective",
  },
  {
    code: "BHSCM0-015",
    name: "Finance & Accounting",
    L: 3,
    T: 0,
    P: 0,
    int: 40,
    ext: 60,
    total: 100,
    credits: 3,
    kind: "theory",
  },
]

const electiveOptions = [
  { code: "BCSED1-511", name: "Computer Graphics" },
  { code: "BCSED1-512", name: "Graph Theory" },
  { code: "BCSED1-513", name: "Web Technologies" },
  { code: "BCSED1-514", name: "Java Programming" },
]

function sum<T extends keyof Course>(k: T) {
  return courses.reduce((acc, c) => (typeof c[k] === "number" ? acc + (c[k] as number) : acc), 0)
}

function CompilerDesignDetails() {
  return (
    <div className="space-y-6 md:space-y-8 text-sm leading-relaxed">
      <section id="cd-overview" className="scroll-mt-24">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="text-xs font-medium text-muted-foreground">Subject</h3>
            <p className="font-medium">Compiler Design</p>
            <p className="text-xs text-muted-foreground">BCSES1-501</p>
          </div>
          <div>
            <h3 className="text-xs font-medium text-muted-foreground">L-T-P-C</h3>
            <p className="font-medium">3-1-0-4</p>
          </div>
          <div>
            <h3 className="text-xs font-medium text-muted-foreground">Duration</h3>
            <p className="font-medium">60 Hours</p>
          </div>
          <div>
            <h3 className="text-xs font-medium text-muted-foreground">Semester</h3>
            <p className="font-medium">5th</p>
          </div>
        </div>
      </section>

      <section id="cd-objective" className="scroll-mt-24">
        <h3 className="mb-2 text-base font-semibold tracking-tight">Course Objective</h3>
        <p className="text-pretty">
          This course helps students understand the complete compilation process, including the working of top-down and
          bottom-up parsers. It deepens understanding of compilation phases and target code generation for a machine.
        </p>
      </section>

      <section id="cd-outcomes" className="scroll-mt-24">
        <h3 className="mb-2 text-base font-semibold tracking-tight">Course Outcomes</h3>
        <ul className="list-outside list-disc space-y-2 pl-5">
          <li>For a given grammar specification, develop the lexical analyser.</li>
          <li>For a given parser specification, design top-down and bottom-up parsers.</li>
          <li>Use syntax-directed translation schemes to develop intermediate code.</li>
          <li>Apply algorithms to generate code for a target machine.</li>
        </ul>
      </section>

      <Separator />

      <section id="cd-contents" className="space-y-5 scroll-mt-24">
        <h3 className="text-base font-semibold tracking-tight">Course Contents</h3>

        <div>
          <h4 className="font-medium">Unit I (10 Hrs)</h4>
          <ul className="list-outside list-disc space-y-2 pl-5">
            <li>Introduction: Phases of compilation and overview.</li>
            <li>
              Lexical Analysis (scanner): Regular languages, finite automata, regular expressions, from regular
              expressions to finite automata, scanner generator (LEX).
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium">Unit II (20 Hrs)</h4>
          <ul className="list-outside list-disc space-y-2 pl-5">
            <li>
              Syntax Analysis (Parser): Context-free languages and grammars, push-down automata, LL(1) grammars and
              top-down parsing, operator grammars, LR(0), SLR(1), LR(1), LALR(1) grammars and bottom-up parsing,
              ambiguity and LR parsing, LALR(1) parser generator (YACC).
            </li>
            <li>
              Semantic Analysis: Attribute grammars, syntax-directed definitions, evaluation and flow of attributes in a
              syntax tree.
            </li>
            <li>Symbol Table: Structure, symbol attributes, and management.</li>
            <li>
              Run-time environment: Procedure activation, parameter passing, value return, memory allocation, and scope.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium">Unit III (15 Hrs)</h4>
          <ul className="list-outside list-disc space-y-2 pl-5">
            <li>
              Intermediate Code Generation: Translation of different language features; different types of intermediate
              forms.
            </li>
            <li>
              Code Improvement (Optimization): Control-flow, data-flow dependence; local, global, and loop optimization;
              peephole optimization, etc.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium">Unit IV (15 Hrs)</h4>
          <ul className="list-outside list-disc space-y-2 pl-5">
            <li>
              Target Code Generation: Architecture-dependent code improvement, instruction scheduling, target machine,
              register allocation, issues in code generation, and a simple code generation algorithm.
            </li>
          </ul>
        </div>
      </section>

      <Separator />

      <section id="cd-books" className="scroll-mt-24">
        <h3 className="mb-2 text-base font-semibold tracking-tight">Recommended Books</h3>
        <ol className="list-outside list-decimal space-y-2 pl-5">
          <li>
            Aho, Sethi, Ullman, and (Softe) “Compilers: Principles, Techniques and Tools”, 2nd Ed., Addison-Wesley,
            2006.
          </li>
          <li>Fischer and LeBlanc, “Crafting a Compiler”, Benjamin Cummings, 2009.</li>
          <li>Fischer and LeBlanc, “Crafting a Compiler in C”, Benjamin Cummings, 1991.</li>
          <li>Holub, “Compiler Design in C”, Prentice-Hall Inc., 1993.</li>
          <li>“Modern Compiler Implementation in C: Basic Design”, Cambridge Press, 2004.</li>
          <li>“Modern Compiler Implementation in Java: Basic Design”, 2nd Ed., Cambridge Press, 2002.</li>
          <li>Fraser and Hanson, additional compiler implementation references.</li>
        </ol>
      </section>
    </div>
  )
}

function DbmsDetails() {
  return (
    <div className="space-y-6 md:space-y-8 text-sm leading-relaxed">
      <section id="dbms-overview" className="scroll-mt-24">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="text-xs font-medium text-muted-foreground">Subject</h3>
            <p className="font-medium">Database Management System</p>
            <p className="text-xs text-muted-foreground">BCSES1-502</p>
          </div>
          <div>
            <h3 className="text-xs font-medium text-muted-foreground">L-T-P-C</h3>
            <p className="font-medium">3-0-0-3</p>
          </div>
          <div>
            <h3 className="text-xs font-medium text-muted-foreground">Duration</h3>
            <p className="font-medium">45 Hours</p>
          </div>
          <div>
            <h3 className="text-xs font-medium text-muted-foreground">Semester</h3>
            <p className="font-medium">5th</p>
          </div>
        </div>
      </section>

      <section id="dbms-objective" className="scroll-mt-24">
        <h3 className="mb-2 text-base font-semibold tracking-tight">Course Objective</h3>
        <p className="text-pretty">
          This course helps students understand the concepts used in database management systems. Students will create
          databases using DDL and DML, learn to implement database security, and get exposure to advanced topics.
        </p>
      </section>

      <section id="dbms-outcomes" className="scroll-mt-24">
        <h3 className="mb-2 text-base font-semibold tracking-tight">Course Outcomes</h3>
        <ul className="list-outside list-disc space-y-2 pl-5">
          <li>Learn different DBMS languages, data models, and normalization.</li>
          <li>
            For a given specification, construct SQL queries for open source and commercial DBMS – MySQL, Oracle, DB2.
          </li>
          <li>Understand query processing and transaction processing systems.</li>
          <li>Implement database security and recovery techniques.</li>
        </ul>
      </section>

      <Separator />

      <section id="dbms-contents" className="space-y-5 scroll-mt-24">
        <h3 className="text-base font-semibold tracking-tight">Course Contents</h3>

        <div>
          <h4 className="font-medium">Unit I (11 Hrs)</h4>
          <ul className="list-outside list-disc space-y-2 pl-5">
            <li>
              Database system architecture: introduction, Data Abstraction, Data Independence, DDL (Data Definition
              Language), DML (Data Manipulation Language).
            </li>
            <li>Data models: ER model, network, relational and object-oriented data models; integrity constraints.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium">Unit II (11 Hrs)</h4>
          <ul className="list-outside list-disc space-y-2 pl-5">
            <li>
              Relational query languages: relational algebra, tuple and domain relational calculus, SQL3; DDL/DML
              constructs; introduction to MySQL, Oracle, DB2, SQL Server.
            </li>
            <li>
              Relational database design: domains and dependencies, normal forms, dependency preservation, lossless
              design.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium">Unit III (12 Hrs)</h4>
          <ul className="list-outside list-disc space-y-2 pl-5">
            <li>
              Query processing and optimization: evaluating relational algebra expressions, query equivalence, join
              strategies, optimization algorithms.
            </li>
            <li>
              Transaction processing: concurrency control, ACID, serializability, locking and timestamp schedulers,
              multi-version and optimistic concurrency control.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium">Unit IV (11 Hrs)</h4>
          <ul className="list-outside list-disc space-y-2 pl-5">
            <li>Database recovery: log-based recovery, shadow-page recovery.</li>
            <li>
              Database security: authentication, authorization and access control; DAC, MAC and RBAC models; intro to
              SQL injection.
            </li>
            <li>Advanced topics: introduction to object-oriented and distributed databases.</li>
          </ul>
        </div>
      </section>

      <Separator />

      <section id="dbms-books" className="scroll-mt-24">
        <h3 className="mb-2 text-base font-semibold tracking-tight">Recommended Books</h3>
        <ol className="list-outside list-decimal space-y-2 pl-5">
          <li>Silberschatz, Korth, Sudarshan, “Database System Concepts”, 6th Ed., McGraw-Hill.</li>
          <li>J. D. Ullman, “Principles of Database and Knowledge-Base Systems”, Vol. 1, Computer Science Press.</li>
          <li>Elmasri, Navathe, “Fundamentals of Database Systems”, 5th Ed., Pearson Education.</li>
          <li>Abiteboul, Hull, Vianu, “Foundations of Databases”, Addison-Wesley.</li>
        </ol>
      </section>
    </div>
  )
}

function FormalLanguageDetails() {
  return (
    <div className="space-y-6 md:space-y-8 text-sm leading-relaxed">
      <section id="fl-overview" className="scroll-mt-24">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="text-xs font-medium text-muted-foreground">Subject</h3>
            <p className="font-medium">Formal Language and Automata Theory</p>
            <p className="text-xs text-muted-foreground">BCSES1-503</p>
          </div>
          <div>
            <h3 className="text-xs font-medium text-muted-foreground">L-T-P-C</h3>
            <p className="font-medium">3-0-0-3</p>
          </div>
          <div>
            <h3 className="text-xs font-medium text-muted-foreground">Duration</h3>
            <p className="font-medium">45 Hours</p>
          </div>
          <div>
            <h3 className="text-xs font-medium text-muted-foreground">Semester</h3>
            <p className="font-medium">5th</p>
          </div>
        </div>
      </section>

      <section id="fl-objective" className="scroll-mt-24">
        <h3 className="mb-2 text-base font-semibold tracking-tight">Course Objective</h3>
        <ol className="list-outside list-decimal space-y-2 pl-5">
          <li>Develop a formal notation for strings, languages and machines.</li>
          <li>Design finite automata to accept a set of strings of a language.</li>
          <li>Identify the hierarchy of formal languages, grammars and machines.</li>
        </ol>
      </section>

      <section id="fl-outcomes" className="scroll-mt-24">
        <h3 className="mb-2 text-base font-semibold tracking-tight">Course Outcomes</h3>
        <ol className="list-outside list-decimal space-y-2 pl-5">
          <li>Design finite automata to accept a set of strings of a language.</li>
          <li>Design context free grammars to generate strings of context free language.</li>
          <li>Design Turing machine for accepting context sensitive languages.</li>
          <li>To learn Rice's theorem.</li>
        </ol>
      </section>

      <Separator />

      <section id="fl-contents" className="space-y-5 scroll-mt-24">
        <h3 className="text-base font-semibold tracking-tight">Course Contents</h3>

        <div>
          <h4 className="font-medium">Unit I (11 Hrs)</h4>
          <ul className="list-outside list-disc space-y-2 pl-5">
            <li>
              <strong>Introduction:</strong> Alphabet, languages and grammars, productions and derivation, Chomsky hierarchy of languages.
            </li>
            <li>
              <strong>Regular languages and finite automata:</strong> Regular expressions and languages, deterministic finite automata (DFA) and equivalence with regular expressions, nondeterministic finite automata (NFA) and equivalence with DFA, regular grammars and equivalence with finite automata, properties of regular languages, pumping lemma for regular languages, minimization of finite automata.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium">Unit II (12 Hrs)</h4>
          <ul className="list-outside list-disc space-y-2 pl-5">
            <li>
              <strong>Context-free languages and pushdown automata:</strong> Context-free grammars (CFG) and languages (CFL), Chomsky and Greibach normal forms, nondeterministic pushdown automata (PDA) and equivalence with CFG, parse trees, ambiguity in CFG, pumping lemma for context-free languages, deterministic pushdown automata, closure properties of CFLs.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium">Unit III (12 Hrs)</h4>
          <ul className="list-outside list-disc space-y-2 pl-5">
            <li>
              <strong>Context sensitive languages:</strong> Context-sensitive grammars (CSG) and languages, linear bounded automata and equivalence with CSG.
            </li>
            <li>
              <strong>Turing machines:</strong> The basic model for Turing machines (TM), Turing-recognizable (recursively enumerable) and Turing-decidable (recursive) languages and their closure properties, variants of Turing machines, nondeterministic TMs and equivalence with deterministic TMs, unrestricted grammars and equivalence with Turing machines, TMs as enumerators.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium">Unit IV (10 Hrs)</h4>
          <ul className="list-outside list-disc space-y-2 pl-5">
            <li>
              <strong>Undecidability:</strong> Church-Turing thesis, universal Turing machine, the universal and diagonalization languages, reduction between languages and Rice's theorem, undecidable problems about languages.
            </li>
          </ul>
        </div>
      </section>

      <Separator />

      <section id="fl-books" className="scroll-mt-24">
        <h3 className="mb-2 text-base font-semibold tracking-tight">Recommended Books</h3>
        <ol className="list-outside list-decimal space-y-2 pl-5">
          <li>
            John E. Hopcroft, Rajeev Motwani and Jeffrey D. Ullman, "Introduction to Automata Theory, Languages, and Computation", Pearson Education Asia.
          </li>
          <li>
            Harry R. Lewis and Christos H. Papadimitriou, "Elements of the Theory of Computation", Pearson Education Asia.
          </li>
          <li>
            Dexter C. Kozen, "Automata and Computability", Undergraduate Texts in Computer Science, Springer.
          </li>
          <li>
            Michael Sipser, "Introduction to the Theory of Computation", PWS Publishing.
          </li>
          <li>
            John Martin, "Introduction to Languages and The Theory of Computation", Tata McGraw Hill.
          </li>
        </ol>
      </section>
    </div>
  )
}

function AlgorithmsDetails() {
  return (
    <div className="space-y-6 md:space-y-8 text-sm leading-relaxed">
      <section id="algo-overview" className="scroll-mt-24">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="text-xs font-medium text-muted-foreground">Subject</h3>
            <p className="font-medium">Design & Analysis of Algorithms</p>
            <p className="text-xs text-muted-foreground">BCSES1-504</p>
          </div>
          <div>
            <h3 className="text-xs font-medium text-muted-foreground">L-T-P-C</h3>
            <p className="font-medium">3-1-0-4</p>
          </div>
          <div>
            <h3 className="text-xs font-medium text-muted-foreground">Duration</h3>
            <p className="font-medium">60 Hours</p>
          </div>
          <div>
            <h3 className="text-xs font-medium text-muted-foreground">Semester</h3>
            <p className="font-medium">5th</p>
          </div>
        </div>
      </section>

      <section id="algo-objective" className="scroll-mt-24">
        <h3 className="mb-2 text-base font-semibold tracking-tight">Course Objective</h3>
        <ol className="list-outside list-decimal space-y-2 pl-5">
          <li>Analyze the asymptotic performance of algorithms.</li>
          <li>Write rigorous correctness proofs for algorithms.</li>
          <li>Demonstrate a familiarity with major algorithms and data structures.</li>
          <li>Apply important algorithmic design paradigms and methods of analysis.</li>
          <li>Synthesize efficient algorithms in common engineering design situations.</li>
        </ol>
      </section>

      <section id="algo-outcomes" className="scroll-mt-24">
        <h3 className="mb-2 text-base font-semibold tracking-tight">Course Outcomes</h3>
        <ol className="list-outside list-decimal space-y-2 pl-5">
          <li>For a given algorithms analyze worst-case running times of algorithms based on asymptotic analysis.</li>
          <li>Describe the algorithmic strategies.</li>
          <li>Describe the different graph and tree traversal algorithms.</li>
          <li>Describe the tractable and intractable problems.</li>
        </ol>
      </section>

      <Separator />

      <section id="algo-contents" className="space-y-5 scroll-mt-24">
        <h3 className="text-base font-semibold tracking-tight">Course Contents</h3>

        <div>
          <h4 className="font-medium">Unit I (15 Hrs)</h4>
          <ul className="list-outside list-disc space-y-2 pl-5">
            <li>
              <strong>Introduction:</strong> Characteristics of algorithm.
            </li>
            <li>
              <strong>Analysis of algorithm:</strong> Asymptotic analysis of complexity bounds – best, average and worst-case behaviour; Performance measurements of Algorithm, Time and space trade-offs, Analysis of recursive algorithms through recurrence relations: Substitution method, Recursion tree method and Masters' theorem.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium">Unit II (15 Hrs)</h4>
          <ul className="list-outside list-disc space-y-2 pl-5">
            <li>
              <strong>Fundamental Algorithmic Strategies:</strong> Brute-Force, Greedy, Dynamic Programming, Branch and Bound and Backtracking methodologies for the design of algorithms; Illustrations of these techniques for Problem Solving, Bin Packing, Knap Sack TSP.
            </li>
            <li>
              <strong>Heuristics:</strong> Characteristics and their application domains.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium">Unit III (15 Hrs)</h4>
          <ul className="list-outside list-disc space-y-2 pl-5">
            <li>
              <strong>Graph and Tree Algorithms:</strong> Traversal algorithms: Depth First Search (DFS) and Breadth First Search (BFS); Shortest path algorithms, Transitive closure, Minimum Spanning Tree, Topological sorting, Network Flow Algorithm.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium">Unit IV (15 Hrs)</h4>
          <ul className="list-outside list-disc space-y-2 pl-5">
            <li>
              <strong>Tractable and Intractable Problems:</strong> Computability of Algorithms, Computability classes – P, NP, NP-complete and NP-hard. Cook's theorem, Standard NP-complete problems, and Reduction techniques.
            </li>
            <li>
              <strong>Recent Advancements:</strong> Introduction to recent advancements in design and analysis of algorithms.
            </li>
          </ul>
        </div>
      </section>

      <Separator />

      <section id="algo-books" className="scroll-mt-24">
        <h3 className="mb-2 text-base font-semibold tracking-tight">Recommended Books</h3>
        <ol className="list-outside list-decimal space-y-2 pl-5">
          <li>
            Thomas H Cormen, Charles E Lieserson, Ronald L Rivest and Clifford Stein, "Introduction to Algorithms", 4th Edition, MIT Press/McGraw-Hill.
          </li>
          <li>
            E. Horowitz et al., "Fundamentals of Algorithms".
          </li>
          <li>
            Jon Kleinberg and Éva Tardos, "Algorithm Design", 1st Edition, Pearson.
          </li>
          <li>
            Michael T Goodrich and Roberto Tamassia, "Algorithm Design: Foundations, Analysis, and Internet Examples", Second Edition, Wiley.
          </li>
          <li>
            Udi Manber, "Algorithms—A Creative Approach", 3rd Edition, Addison-Wesley, Reading, MA.
          </li>
        </ol>
      </section>
    </div>
  )
}

function DbmsLabDetails() {
  return (
    <div className="space-y-6 md:space-y-8 text-sm leading-relaxed">
      <section id="dbmslab-overview" className="scroll-mt-24">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="text-xs font-medium text-muted-foreground">Subject</h3>
            <p className="font-medium">Database Management System Laboratory</p>
            <p className="text-xs text-muted-foreground">BCSES1-505</p>
          </div>
          <div>
            <h3 className="text-xs font-medium text-muted-foreground">L-T-P-C</h3>
            <p className="font-medium">0-0-4-2</p>
          </div>
          <div>
            <h3 className="text-xs font-medium text-muted-foreground">Type</h3>
            <p className="font-medium">Laboratory</p>
          </div>
          <div>
            <h3 className="text-xs font-medium text-muted-foreground">Semester</h3>
            <p className="font-medium">5th</p>
          </div>
        </div>
      </section>

      <section id="dbmslab-objective" className="scroll-mt-24">
        <h3 className="mb-2 text-base font-semibold tracking-tight">Course Objective</h3>
        <p>To learn the implementation of SQL queries to perform DBMS operations.</p>
      </section>

      <section id="dbmslab-outcomes" className="scroll-mt-24">
        <h3 className="mb-2 text-base font-semibold tracking-tight">Course Outcomes</h3>
        <ol className="list-outside list-decimal space-y-2 pl-5">
          <li>To understand basic DDL, DML, DCL commands.</li>
          <li>To understand the SQL queries using SQL operators and implement the database constraints.</li>
          <li>To understand the concept of relational algebra and SQL functions.</li>
          <li>To implement sub queries and transaction processing.</li>
        </ol>
      </section>

      <Separator />

      <section id="dbmslab-practicals" className="scroll-mt-24">
        <h3 className="mb-2 text-base font-semibold tracking-tight">Practicals</h3>
        <ol className="list-outside list-decimal space-y-3 pl-5">
          <li>Write the queries for Data Definition Language (DDL) in RDBMS.</li>
          <li>Write the queries for Data Manipulation Language (DML) in RDBMS.</li>
          <li>Write the queries for Data Control Language (DCL) in RDBMS.</li>
          <li>Write SQL queries using logical operators.</li>
          <li>Write SQL queries using SQL operators.</li>
          <li>Write SQL query using character, number, date and group functions.</li>
          <li>Write SQL queries for relational algebra.</li>
          <li>Write SQL queries for extracting data from more than one table.</li>
          <li>Write SQL queries for sub queries, nested queries.</li>
          <li>Concepts for ROLL BACK, COMMIT & CHECK POINTS.</li>
          <li>Case studies on normalization.</li>
        </ol>
      </section>
    </div>
  )
}

function AlgorithmsLabDetails() {
  return (
    <div className="space-y-6 md:space-y-8 text-sm leading-relaxed">
      <section id="algolab-overview" className="space-y-3">
        <h2 className="text-lg md:text-xl font-semibold text-foreground border-b border-border pb-2">
          Course Overview
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 text-sm">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subject Code:</span>
              <span className="font-medium">BCSES1-506</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Credits:</span>
              <span className="font-medium">1</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Contact Hours:</span>
              <span className="font-medium">L-T-P: 0-0-2</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Evaluation:</span>
              <span className="font-medium">Internal 60 + External 40 = 100</span>
            </div>
          </div>
        </div>
      </section>

      <section id="algolab-objective" className="space-y-3">
        <h2 className="text-lg md:text-xl font-semibold text-foreground border-b border-border pb-2">
          Course Objectives
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>To get a first-hand experience of implementing well-known algorithms in a high-level language.</li>
          <li>To be able to compare the practical performance of different algorithms for the same problem.</li>
        </ol>
      </section>

      <section id="algolab-outcomes" className="space-y-3">
        <h2 className="text-lg md:text-xl font-semibold text-foreground border-b border-border pb-2">
          Course Outcomes
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>To perform different operations on integers.</li>
          <li>To sort number of elements of an array using different sorting techniques.</li>
          <li>To implement dynamic programming for various problems.</li>
          <li>To implement various Graph Techniques.</li>
        </ol>
      </section>

      <section id="algolab-practicals" className="space-y-3">
        <h2 className="text-lg md:text-xl font-semibold text-foreground border-b border-border pb-2">
          Practical Exercises
        </h2>
        <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
          <li><strong>Mathematical Operations:</strong> Code and analyse to compute the greatest common divisor (GCD) of two numbers.</li>
          <li><strong>Array Operations:</strong> Code and analyse to find the median element in an array of integers.</li>
          <li><strong>Majority Element:</strong> Code and analyse to find the majority element in an array of integers.</li>
          <li><strong>Heap Sort:</strong> Code and analyse to sort an array of integers using Heap sort.</li>
          <li><strong>Merge Sort:</strong> Code and analyse to sort an array of integers using Merge sort.</li>
          <li><strong>Quick Sort:</strong> Code and analyse to sort an array of integers using Quick sort.</li>
          <li><strong>Dynamic Programming - Knapsack:</strong> Code and analyse Knapsack problem using dynamic programming.</li>
          <li><strong>Single Source Shortest Path:</strong> Code and analyse to find the shortest path for single source shortest path using dynamic programming.</li>
          <li><strong>All Pair Shortest Path:</strong> Code and analyse to find the shortest path for All pair shortest path using dynamic programming.</li>
          <li><strong>Depth-First Search (DFS):</strong> Code and analyse to do a depth-first search (DFS) on an undirected graph. Implementing an application of DFS such as to find the topological sort of a directed acyclic graph.</li>
          <li><strong>Breadth-First Search (BFS):</strong> Code and analyse to do a breadth-first search (BFS) on an undirected graph. Implementing an application of BFS such as:
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>To find connected components of an undirected graph, OR</li>
              <li>To check whether a given graph is bipartite.</li>
            </ul>
          </li>
          <li><strong>Minimum Spanning Tree:</strong> Code and analyse to find the minimum spanning tree in a weighted, undirected graph.</li>
          <li><strong>String Matching - KMP:</strong> Code and analyse to find all occurrences of a pattern P in a given string S using KMP Method.</li>
          <li><strong>Computational Geometry:</strong> Code and analyse to compute the convex hull of a set of points in the plane.</li>
        </ol>
      </section>
    </div>
  )
}

function FinanceAccountingDetails() {
  return (
    <div className="space-y-6 md:space-y-8 text-sm leading-relaxed">
      <section id="finance-overview" className="space-y-3">
        <h2 className="text-lg md:text-xl font-semibold text-foreground border-b border-border pb-2">
          Course Overview
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 text-sm">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subject Code:</span>
              <span className="font-medium">BHSCM0-015</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Credits:</span>
              <span className="font-medium">3</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Duration:</span>
              <span className="font-medium">45 Hours</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Contact Hours:</span>
              <span className="font-medium">L-T-P: 3-0-0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Evaluation:</span>
              <span className="font-medium">Internal 40 + External 60 = 100</span>
            </div>
          </div>
        </div>
      </section>

      <section id="finance-objective" className="space-y-3">
        <h2 className="text-lg md:text-xl font-semibold text-foreground border-b border-border pb-2">
          Course Objectives
        </h2>
        <p className="text-muted-foreground mb-3">The main aim of this course is:</p>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>To provide an in-depth view of the process in financial management of the firm.</li>
          <li>To develop knowledge on the allocation, management and funding of financial resources.</li>
          <li>To improving students' understanding of the time value of money concept and the role of a financial manager in the current competitive business scenario.</li>
          <li>To enhancing student's ability in dealing short-term and long term dealing with day-to-day working capital decision and raising finance.</li>
        </ol>
      </section>

      <section id="finance-outcomes" className="space-y-3">
        <h2 className="text-lg md:text-xl font-semibold text-foreground border-b border-border pb-2">
          Course Outcomes
        </h2>
        <p className="text-muted-foreground mb-3">After completing this course the students should be able to:</p>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>Explain the concept of fundamental financial concepts, especially time value of money.</li>
          <li>Apply capital budgeting projects using traditional methods.</li>
          <li>Analyze the main ways of raising capital and their respective advantages and disadvantages in different circumstances.</li>
          <li>Integrate the concept and apply the financial concepts to calculate ratios and do the capital budgeting.</li>
        </ol>
      </section>

      <section id="finance-contents" className="space-y-4">
        <h2 className="text-lg md:text-xl font-semibold text-foreground border-b border-border pb-2">
          Course Contents
        </h2>

        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-foreground mb-2">Unit-I (12 Hours)</h3>
            <h4 className="font-medium text-foreground mb-2">Introduction to Accounting</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
              <li>Meaning, Objectives, Basic Accounting Terms</li>
              <li><strong>Accounting Principles:</strong> Meaning and Nature, Accounting Concepts, Bases of Accounting</li>
              <li>Nature of Accounts, Origin of Transactions Source Documents and Vouchers</li>
              <li>Accounting Equations Rules of Debit and Credit</li>
              <li><strong>Recording of Transactions:</strong> Book of Original Entry-Journal, Ledger Posting from Journal and Ledger Balancing, Subsidiary Books</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold text-foreground mb-2">Unit-II (11 Hours)</h3>
            <h4 className="font-medium text-foreground mb-2">Financial Management & Capital Structure</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
              <li>Nature, Scope and Objectives of Financial Management</li>
              <li>Profit Maximization Vs Wealth Maximization, Financial Planning</li>
              <li>Forms of Business Organization, Role of Financial Manager</li>
              <li><strong>Capital Structure:</strong> Introduction, Factors Affecting Capital Structure, Liquidity Ratios</li>
              <li><strong>Capital Structure Theories:</strong> Net Income Approach, Net Operating Income Approach, Traditional Approach, Modigliani-Miller Model (MM)</li>
            </ul>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="font-semibold text-foreground mb-2">Unit-III (11 Hours)</h3>
            <h4 className="font-medium text-foreground mb-2">Working Capital & Capital Budgeting</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
              <li><strong>Working Capital Decision:</strong> Meaning, Nature and Scope of Working Capital</li>
              <li>Component of Working Capital – Factors affecting Working Capital, Working Capital Strategies</li>
              <li><strong>Capital Budgeting Techniques:</strong> Discounted and Non-Discounted Methods (Pay Back, ARR, NPV, IRR, Benefit Cost Ratio)</li>
              <li>Long Term and Short Term Sources of Funds</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-semibold text-foreground mb-2">Unit-IV (11 Hours)</h3>
            <h4 className="font-medium text-foreground mb-2">Sources of Funds</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
              <li><strong>Long Term Sources of Funds:</strong> Equity share, Preference shares, Debentures, Bonds, Warrants, Venture capital and Ploughing back of profits</li>
              <li><strong>Short Term Sources of Funds:</strong> Commercial Paper, Certificate of Deposit, Treasury Bills</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="finance-books" className="space-y-3">
        <h2 className="text-lg md:text-xl font-semibold text-foreground border-b border-border pb-2">
          Recommended Books
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>Brigham, 'Financial Management: Text & Cases', Cengage Learning.</li>
          <li>Brealy & Myres, 'Principles of Corporate Finance', Tata McGraw Hill.</li>
          <li>Ambrish Gupta, 'Financial Accounting for Management', 2nd Edn., Pearson Education.</li>
          <li>I.M. Pandey, 'Financial Management', Vikas Publishers.</li>
          <li>S.P. Jain and K.L. Narang, 'Principles of Accounting', Kalyani Publishers, New Delhi, 2004.</li>
        </ol>
      </section>
    </div>
  )
}

function WebTechnologiesDetails() {
  return (
    <div className="space-y-6 md:space-y-8 text-sm leading-relaxed">
      <section id="webtech-overview" className="space-y-3">
        <h2 className="text-lg md:text-xl font-semibold text-foreground border-b border-border pb-2">
          Course Overview
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 text-sm">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subject Code:</span>
              <span className="font-medium">BCSED1-513</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Credits:</span>
              <span className="font-medium">3</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Duration:</span>
              <span className="font-medium">45 Hours</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Contact Hours:</span>
              <span className="font-medium">L-T-P: 3-0-0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Course Type:</span>
              <span className="font-medium">Departmental Elective</span>
            </div>
          </div>
        </div>
      </section>

      <section id="webtech-objective" className="space-y-3">
        <h2 className="text-lg md:text-xl font-semibold text-foreground border-b border-border pb-2">
          Course Objectives
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>Designing the HTML pages along with style sheets.</li>
          <li>Familiar with client and server side scripting.</li>
          <li>Able to develop a web application.</li>
          <li>Students will gain the skills and project-based experience needed for entry into web application and development careers.</li>
        </ol>
      </section>

      <section id="webtech-outcomes" className="space-y-3">
        <h2 className="text-lg md:text-xl font-semibold text-foreground border-b border-border pb-2">
          Course Outcomes
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>To understand the HTML and Style Sheets.</li>
          <li>To have knowledge of client side scripting using JavaScript.</li>
          <li>To understand the basics and object oriented concepts of PHP.</li>
          <li>To access database using PHP programming.</li>
        </ol>
      </section>

      <section id="webtech-contents" className="space-y-4">
        <h2 className="text-lg md:text-xl font-semibold text-foreground border-b border-border pb-2">
          Course Contents
        </h2>

        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-foreground mb-2">Unit-I: HTML & CSS (12 Hours)</h3>
            <div className="space-y-2">
              <div>
                <h4 className="font-medium text-foreground mb-1">HTML Fundamentals</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                  <li>Introduction, History of HTML</li>
                  <li>Structure of HTML Document: Text Basics</li>
                  <li>Structure of HTML Document: Images and Multimedia</li>
                  <li>Links and webs, Document Layout</li>
                  <li>Creating Forms, Frames and Tables</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">Cascading Style Sheets (CSS)</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                  <li>Need for CSS, introduction to CSS, basic syntax and structure</li>
                  <li>Using CSS, background images, colors and properties</li>
                  <li>Manipulating texts, using fonts, borders and boxes</li>
                  <li>Margins, padding lists, positioning using CSS</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold text-foreground mb-2">Unit-II: JavaScript (9 Hours)</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
              <li>What is JavaScript, Client side scripting</li>
              <li>Data types, variables, operators</li>
              <li>Conditional statements, loops and repetition</li>
              <li>Array object, date object, string object</li>
              <li>Document object model - Event handling</li>
            </ul>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="font-semibold text-foreground mb-2">Unit-III: PHP Fundamentals & OOP (12 Hours)</h3>
            <div className="space-y-2">
              <div>
                <h4 className="font-medium text-foreground mb-1">PHP Basics</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                  <li>Introduction to PHP, Writing PHP</li>
                  <li>Control Structures: if-else, switch, ? operator</li>
                  <li>Loops: while, do-while, for, for each</li>
                  <li>Flow control: break, continue, goto, exit</li>
                  <li>Arrays, functions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">Object-Oriented PHP</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                  <li>Introduction – Declaring a class – Objects</li>
                  <li>Constructor – Destructor</li>
                  <li>Public, private, protected access modifiers</li>
                  <li>Static properties and methods – Inheritance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-semibold text-foreground mb-2">Unit-IV: Advanced PHP & Database Integration (12 Hours)</h3>
            <div className="space-y-2">
              <div>
                <h4 className="font-medium text-foreground mb-1">Web Forms & Session Management</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                  <li>Working with data, form elements</li>
                  <li>GET, POST, Request methods</li>
                  <li>Cookies, Sessions and Access Control</li>
                  <li>PHP and HTTP Authentication – sessions</li>
                  <li>Using Auth_HTTP to Authenticate</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">MySQL Database Integration</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                  <li>Working MySQL with PHP - database connectivity</li>
                  <li>Usage of MySQL commands in PHP</li>
                  <li>Processing result sets of queries - handling errors</li>
                  <li>Debugging and diagnostic functions</li>
                  <li>Validating user input through Database layer and Application layer</li>
                  <li>Formatting query output</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="webtech-books" className="space-y-3">
        <h2 className="text-lg md:text-xl font-semibold text-foreground border-b border-border pb-2">
          Recommended Books
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>PHP: The Complete Reference, "Steven Holzner", Tata McGraw Hill.</li>
          <li>Programming PHP, "Kevin Tetroi", O' Reilly.</li>
          <li>Robin Nixon, Learning PHP, MySQL, and JavaScript, Shroff/O'Reilly.</li>
          <li>Vikram Vaswani, "PHP and MySQL", Tata McGraw-Hill, 2005.</li>
          <li>Marty Hall, Larry Brown, 'Core Servlets and Java Server Pages Vol. 1: Core Technologies', 2nd Edn., Pearson, 2003.</li>
          <li>Dietel, Niet, 'Internet and World Wide Web – How to Program', 5th Edn., PHI/Pearson Education, 2011.</li>
          <li>Wang, 'An Introduction to web Design and Programming', 1st Edn., Cengage COURSE, 2003.</li>
          <li>Thomas A Powell, The Complete Reference HTML & CSS, 5th Edition, Tata McGraw Hill.</li>
          <li>Laura Lemay, Rafe Colburn, Jennifer Kyrnin, 'Mastering HTML, CSS & Javascript Web Publishing', Sams Teach Yourself.</li>
          <li>Sebesta, 'Programming World Wide Web', 4th Edn., Pearson, 2008.</li>
        </ol>
      </section>
    </div>
  )
}

function JavaProgrammingDetails() {
  return (
    <div className="space-y-6 md:space-y-8 text-sm leading-relaxed">
      <section id="java-overview" className="space-y-3">
        <h2 className="text-lg md:text-xl font-semibold text-foreground border-b border-border pb-2">
          Course Overview
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 text-sm">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subject Code:</span>
              <span className="font-medium">BCSED1-514</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Credits:</span>
              <span className="font-medium">3</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Duration:</span>
              <span className="font-medium">45 Hours</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Contact Hours:</span>
              <span className="font-medium">L-T-P: 3-0-0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Course Type:</span>
              <span className="font-medium">Departmental Elective</span>
            </div>
          </div>
        </div>
      </section>

      <section id="java-objective" className="space-y-3">
        <h2 className="text-lg md:text-xl font-semibold text-foreground border-b border-border pb-2">
          Course Objectives
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>To learn the basic and advanced concepts of Java Programming language.</li>
          <li>To experience the working environment required for programming in Java language and enhances their programming skills.</li>
        </ol>
      </section>

      <section id="java-outcomes" className="space-y-3">
        <h2 className="text-lg md:text-xl font-semibold text-foreground border-b border-border pb-2">
          Course Outcomes
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>To learn the basics of Java and to understand the implementation of Classes and Inheritance with respect to Java.</li>
          <li>To describe the concept of handling of exceptions and multithreading.</li>
          <li>To understand how to implement I/O, Applets and Graphics in Java.</li>
          <li>To comprehend the advanced topics of Java Programming.</li>
        </ol>
      </section>

      <section id="java-contents" className="space-y-4">
        <h2 className="text-lg md:text-xl font-semibold text-foreground border-b border-border pb-2">
          Course Contents
        </h2>
        
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-foreground mb-2">Unit-I: Java Fundamentals & OOP (12 Hours)</h3>
            <div className="space-y-2">
              <div>
                <h4 className="font-medium text-foreground mb-1">Introduction to Java</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                  <li>Features of Java, difference between Java and C++</li>
                  <li>JVM, Bytecode, data types, variables, arrays</li>
                  <li>Type Conversion and Casting</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">Classes and Inheritance</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                  <li>Class Fundamentals, methods, constructors</li>
                  <li>Garbage collection, this keyword</li>
                  <li>Overloading constructors, Nested and Inner classes</li>
                  <li>Basics and types of inheritance, Method Overriding</li>
                  <li>Abstract Classes, final keyword, packages and interfaces</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold text-foreground mb-2">Unit-II: Exception Handling & Multithreading (12 Hours)</h3>
            <div className="space-y-2">
              <div>
                <h4 className="font-medium text-foreground mb-1">Exception Handling</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                  <li>Basics, Exception Types, uncaught exceptions</li>
                  <li>try and catch, throwing exceptions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">Introduction to Multithreading</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                  <li>Java thread model, thread priorities</li>
                  <li>Synchronization, interthread communication</li>
                  <li>Creating, suspending, resuming threads</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="font-semibold text-foreground mb-2">Unit-III: I/O, Applets & Graphics (12 Hours)</h3>
            <div className="space-y-2">
              <div>
                <h4 className="font-medium text-foreground mb-1">Input/Output Operations</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                  <li>Input/Output basics</li>
                  <li>Reading and writing files</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">Applets and Graphics</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                  <li>Applet basics, Applet class</li>
                  <li>Applet initialization and termination</li>
                  <li>Event handling, keyboard and mouse events</li>
                  <li>AWT class, Layout managers, panels, canvases</li>
                  <li>Frame windows, drawing lines, rectangles, ellipses</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-semibold text-foreground mb-2">Unit-IV: Advanced Java Concepts (9 Hours)</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
              <li><strong>JDBC Connectivity:</strong> Database integration with Java</li>
              <li><strong>Introduction to Java Beans:</strong> Component-based development</li>
              <li><strong>Java Swings:</strong> Advanced GUI development</li>
              <li><strong>Java Server Pages:</strong> Web application development</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="java-books" className="space-y-3">
        <h2 className="text-lg md:text-xl font-semibold text-foreground border-b border-border pb-2">
          Recommended Books
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>Patrick Naughton & Herbert Schildt, 'The Complete Reference Java 2', 5th Edn., Tata McGraw Hill, 2002.</li>
          <li>Balagurusamy, 'Programming in JAVA', BPB Publications, 2006.</li>
          <li>Deitel and Deitel, 'Java: How to Program', 10th Edn., Pearson Education, 2014.</li>
        </ol>
      </section>
    </div>
  )
}

export default function SyllabusPage() {
  const [cdOpen, setCdOpen] = useState(false)
  const [dbmsOpen, setDbmsOpen] = useState(false)
  const [flOpen, setFlOpen] = useState(false)
  const [algoOpen, setAlgoOpen] = useState(false)
  const [dbmsLabOpen, setDbmsLabOpen] = useState(false)
  const [algoLabOpen, setAlgoLabOpen] = useState(false)
  const [financeOpen, setFinanceOpen] = useState(false)
  const [webTechOpen, setWebTechOpen] = useState(false)
  const [javaOpen, setJavaOpen] = useState(false)

  useEffect(() => {
    const anyOpen = cdOpen || dbmsOpen || flOpen || algoOpen || dbmsLabOpen || algoLabOpen || financeOpen || webTechOpen || javaOpen
    if (!anyOpen) return
    const prevBodyOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prevBodyOverflow
    }
  }, [cdOpen, dbmsOpen, flOpen, algoOpen, dbmsLabOpen, algoLabOpen, financeOpen, webTechOpen, javaOpen])

  const totals = {
    courses: courses.length,
    theory: courses.filter((c) => c.kind === "theory").length,
    labs: courses.filter((c) => c.kind === "lab").length,
    int: sum("int"),
    ext: sum("ext"),
    total: sum("total"),
    credits: sum("credits"),
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-8 sm:py-12 overflow-x-hidden bg-gradient-to-br from-slate-50/50 via-white to-blue-50/30 dark:from-slate-950/50 dark:via-slate-900 dark:to-blue-950/30 min-h-screen">
      <header className="mb-8 relative">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
                5th Semester Syllabus
              </h1>
            </div>
            <p className="text-base text-muted-foreground max-w-2xl">
              Professional, comprehensive overview of courses, contact hours, evaluation criteria, and credit distribution for the current academic term.
            </p>
          </div>
          <div className="flex items-center gap-3 self-start sm:self-center">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1">
              Academic Year 2025
            </Badge>
            <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1">
              Undergraduate
            </Badge>
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-4">
        <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/50 dark:to-indigo-900/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-blue-700 dark:text-blue-300">Total Courses</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            <div className="text-3xl font-bold text-blue-900 dark:text-blue-100">{totals.courses}</div>
            <div className="text-xs text-blue-600 dark:text-blue-400">
              {totals.theory} theory • {totals.labs} lab
            </div>
          </CardContent>
          <div className="absolute top-2 right-2 h-8 w-8 rounded-full bg-blue-200/50 dark:bg-blue-800/50 flex items-center justify-center">
            <svg className="h-4 w-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        </Card>

        <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/50 dark:to-emerald-900/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-green-700 dark:text-green-300">Internal Marks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-900 dark:text-green-100">{totals.int}</div>
          </CardContent>
          <div className="absolute top-2 right-2 h-8 w-8 rounded-full bg-green-200/50 dark:bg-green-800/50 flex items-center justify-center">
            <svg className="h-4 w-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </Card>

        <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-950/50 dark:to-amber-900/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-orange-700 dark:text-orange-300">External Marks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-900 dark:text-orange-100">{totals.ext}</div>
          </CardContent>
          <div className="absolute top-2 right-2 h-8 w-8 rounded-full bg-orange-200/50 dark:bg-orange-800/50 flex items-center justify-center">
            <svg className="h-4 w-4 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </div>
        </Card>

        <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-950/50 dark:to-violet-900/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-purple-700 dark:text-purple-300">Total Credits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-900 dark:text-purple-100">{totals.credits}</div>
          </CardContent>
          <div className="absolute top-2 right-2 h-8 w-8 rounded-full bg-purple-200/50 dark:bg-purple-800/50 flex items-center justify-center">
            <svg className="h-4 w-4 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
        </Card>
      </section>

      <div className="my-8 relative">
        <Separator className="bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-background px-4">
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </div>
        </div>
      </div>

      <section aria-labelledby="courses-table">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1">
            <h2 id="courses-table" className="text-xl font-bold tracking-tight flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              Course Breakdown
            </h2>
            <p className="text-sm text-muted-foreground">Detailed overview of all courses with contact hours and evaluation</p>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1">
              Total {totals.total} marks
            </Badge>
            <Badge variant="outline" className="border-purple-200 text-purple-700 dark:border-purple-700 dark:text-purple-300 px-3 py-1">
              {totals.credits} credits
            </Badge>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block">
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
            <CardContent className="p-0">
              <Table>
                <TableCaption className="sr-only">List of courses with contact hours, marks, and credits</TableCaption>
                <TableHeader className="sticky top-0 z-10 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/50">
                  <TableRow className="border-b-2 border-slate-200 dark:border-slate-700">
                    <TableHead className="w-32 font-semibold text-slate-700 dark:text-slate-300">Code</TableHead>
                    <TableHead className="font-semibold text-slate-700 dark:text-slate-300">Course Name</TableHead>
                    <TableHead className="text-center w-12 font-semibold text-slate-700 dark:text-slate-300">L</TableHead>
                    <TableHead className="text-center w-12 font-semibold text-slate-700 dark:text-slate-300">T</TableHead>
                    <TableHead className="text-center w-12 font-semibold text-slate-700 dark:text-slate-300">P</TableHead>
                    <TableHead className="text-center w-16 font-semibold text-slate-700 dark:text-slate-300">Int.</TableHead>
                    <TableHead className="text-center w-16 font-semibold text-slate-700 dark:text-slate-300">Ext.</TableHead>
                    <TableHead className="text-center w-16 font-semibold text-slate-700 dark:text-slate-300">Total</TableHead>
                    <TableHead className="text-center w-20 font-semibold text-slate-700 dark:text-slate-300">Credits</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {courses.map((c) => (
                    <Fragment key={c.code}>
                      <TableRow key={c.code} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors border-b border-slate-100 dark:border-slate-800">
                        <TableCell className="font-medium">
                          <span className="font-mono text-sm bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-700 dark:text-slate-300">{c.code}</span>
                        </TableCell>
                        <TableCell className="whitespace-normal break-words text-pretty min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="flex-1 min-w-0">{c.name}</span>
                            {c.kind === "lab" && <Badge variant="outline">Lab</Badge>}
                            {c.kind === "training" && (
                              <Badge variant="secondary" className="whitespace-nowrap">
                                Training
                              </Badge>
                            )}
                            {c.code === "BCSES1-501" && (
                              <Dialog open={cdOpen} onOpenChange={setCdOpen} modal>
                                <DialogTrigger asChild>
                                  <Button size="sm" variant="outline" className="ml-2 whitespace-nowrap bg-transparent">
                                    View details
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[75vw] max-w-4xl max-h-[90vh] flex flex-col p-0 gap-0">
                                  <DialogHeader className="flex-shrink-0 sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 sm:px-6 py-4">
                                    <DialogTitle className="text-lg md:text-xl font-semibold tracking-tight text-center sm:text-left">
                                      Compiler Design (BCSES1-501)
                                    </DialogTitle>
                                    <nav aria-label="Quick links" className="mt-3 -mb-1">
                                      <ul className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm flex-wrap">
                                        <li>
                                          <a
                                            href="#cd-overview"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40"
                                          >
                                            Overview
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#cd-objective"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40"
                                          >
                                            Objective
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#cd-outcomes"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40"
                                          >
                                            Outcomes
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#cd-contents"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40"
                                          >
                                            Contents
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#cd-books"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40"
                                          >
                                            Books
                                          </a>
                                        </li>
                                      </ul>
                                    </nav>
                                  </DialogHeader>
                                  <div className="flex-1 overflow-y-auto modal-scroll smooth-scroll touch-scroll">
                                    <div className="p-4 sm:p-6 md:p-8 max-w-none">
                                      <CompilerDesignDetails />
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            )}
                            {c.code === "BCSES1-502" && (
                              <Dialog open={dbmsOpen} onOpenChange={setDbmsOpen} modal>
                                <DialogTrigger asChild>
                                  <Button size="sm" variant="outline" className="ml-2 whitespace-nowrap bg-transparent">
                                    View details
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[75vw] max-w-4xl max-h-[90vh] flex flex-col p-0 gap-0">
                                  <DialogHeader className="flex-shrink-0 sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 sm:px-6 py-4">
                                    <DialogTitle className="text-lg md:text-xl font-semibold tracking-tight text-center sm:text-left">
                                      Database Management System (BCSES1-502)
                                    </DialogTitle>
                                    <nav aria-label="Quick links" className="mt-3 -mb-1">
                                      <ul className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm flex-wrap">
                                        <li>
                                          <a
                                            href="#dbms-overview"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40"
                                          >
                                            Overview
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#dbms-objective"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40"
                                          >
                                            Objective
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#dbms-outcomes"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40"
                                          >
                                            Outcomes
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#dbms-contents"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40"
                                          >
                                            Contents
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#dbms-books"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40"
                                          >
                                            Books
                                          </a>
                                        </li>
                                      </ul>
                                    </nav>
                                  </DialogHeader>
                                  <div className="flex-1 overflow-y-auto modal-scroll smooth-scroll touch-scroll">
                                    <div className="p-4 sm:p-6 md:p-8 max-w-none">
                                      <DbmsDetails />
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            )}
                            {c.code === "BCSES1-503" && (
                              <Dialog open={flOpen} onOpenChange={setFlOpen} modal>
                                <DialogTrigger asChild>
                                  <Button size="sm" variant="outline" className="ml-2 whitespace-nowrap bg-transparent">
                                    View details
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[75vw] max-w-4xl max-h-[90vh] flex flex-col p-0 gap-0">
                                  <DialogHeader className="flex-shrink-0 sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 sm:px-6 py-4">
                                    <DialogTitle className="text-lg md:text-xl font-semibold tracking-tight text-center sm:text-left">
                                      Formal Language and Automata Theory (BCSES1-503)
                                    </DialogTitle>
                                    <nav aria-label="Quick links" className="mt-3 -mb-1">
                                      <ul className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm flex-wrap">
                                        <li>
                                          <a
                                            href="#fl-overview"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40"
                                          >
                                            Overview
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#fl-objective"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40"
                                          >
                                            Objective
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#fl-outcomes"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40"
                                          >
                                            Outcomes
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#fl-contents"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40"
                                          >
                                            Contents
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#fl-books"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40"
                                          >
                                            Books
                                          </a>
                                        </li>
                                      </ul>
                                    </nav>
                                  </DialogHeader>
                                  <div className="flex-1 overflow-y-auto modal-scroll smooth-scroll touch-scroll">
                                    <div className="p-4 sm:p-6 md:p-8 max-w-none">
                                      <FormalLanguageDetails />
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            )}
                            {c.code === "BCSES1-504" && (
                              <Dialog open={algoOpen} onOpenChange={setAlgoOpen} modal>
                                <DialogTrigger asChild>
                                  <Button size="sm" variant="outline" className="ml-2 whitespace-nowrap bg-transparent">
                                    View details
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[75vw] max-w-4xl max-h-[90vh] flex flex-col p-0 gap-0">
                                  <DialogHeader className="flex-shrink-0 sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 sm:px-6 py-4">
                                    <DialogTitle className="text-lg md:text-xl font-semibold tracking-tight text-center sm:text-left">
                                      Design & Analysis of Algorithms (BCSES1-504)
                                    </DialogTitle>
                                    <nav aria-label="Quick links" className="mt-3 -mb-1">
                                      <ul className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm flex-wrap">
                                        <li>
                                          <a
                                            href="#algo-overview"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                                          >
                                            Overview
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#algo-objective"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                                          >
                                            Objective
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#algo-outcomes"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                                          >
                                            Outcomes
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#algo-contents"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                                          >
                                            Contents
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#algo-books"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                                          >
                                            Books
                                          </a>
                                        </li>
                                      </ul>
                                    </nav>
                                  </DialogHeader>
                                  <div className="flex-1 overflow-y-auto modal-scroll smooth-scroll touch-scroll">
                                    <div className="p-4 sm:p-6 md:p-8 max-w-none">
                                      <AlgorithmsDetails />
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            )}
                            {c.code === "BCSES1-505" && (
                              <Dialog open={dbmsLabOpen} onOpenChange={setDbmsLabOpen} modal>
                                <DialogTrigger asChild>
                                  <Button size="sm" variant="outline" className="ml-2 whitespace-nowrap bg-transparent">
                                    View details
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[75vw] max-w-4xl max-h-[90vh] flex flex-col p-0 gap-0">
                                  <DialogHeader className="flex-shrink-0 sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 sm:px-6 py-4">
                                    <DialogTitle className="text-lg md:text-xl font-semibold tracking-tight text-center sm:text-left">
                                      Database Management System Laboratory (BCSES1-505)
                                    </DialogTitle>
                                    <nav aria-label="Quick links" className="mt-3 -mb-1">
                                      <ul className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm flex-wrap">
                                        <li>
                                          <a
                                            href="#dbmslab-overview"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                                          >
                                            Overview
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#dbmslab-objective"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                                          >
                                            Objective
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#dbmslab-outcomes"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                                          >
                                            Outcomes
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#dbmslab-practicals"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                                          >
                                            Practicals
                                          </a>
                                        </li>
                                      </ul>
                                    </nav>
                                  </DialogHeader>
                                  <div className="flex-1 overflow-y-auto modal-scroll smooth-scroll touch-scroll">
                                    <div className="p-4 sm:p-6 md:p-8 max-w-none">
                                      <DbmsLabDetails />
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            )}
                            {c.code === "BCSES1-506" && (
                              <Dialog open={algoLabOpen} onOpenChange={setAlgoLabOpen} modal>
                                <DialogTrigger asChild>
                                  <Button size="sm" variant="outline" className="ml-2 whitespace-nowrap bg-transparent">
                                    View details
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[75vw] max-w-4xl max-h-[90vh] flex flex-col p-0 gap-0">
                                  <DialogHeader className="flex-shrink-0 sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 sm:px-6 py-4">
                                    <DialogTitle className="text-lg md:text-xl font-semibold tracking-tight text-center sm:text-left">
                                      Design & Analysis of Algorithms Laboratory (BCSES1-506)
                                    </DialogTitle>
                                    <nav aria-label="Quick links" className="mt-3 -mb-1">
                                      <ul className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm flex-wrap">
                                        <li>
                                          <a
                                            href="#algolab-overview"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                                          >
                                            Overview
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#algolab-objective"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                                          >
                                            Objective
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#algolab-outcomes"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                                          >
                                            Outcomes
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#algolab-practicals"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                                          >
                                            Practicals
                                          </a>
                                        </li>
                                      </ul>
                                    </nav>
                                  </DialogHeader>
                                  <div className="flex-1 overflow-y-auto modal-scroll smooth-scroll touch-scroll">
                                    <div className="p-4 sm:p-6 md:p-8 max-w-none">
                                      <AlgorithmsLabDetails />
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            )}
                            {c.code === "BHSCM0-015" && (
                              <Dialog open={financeOpen} onOpenChange={setFinanceOpen} modal>
                                <DialogTrigger asChild>
                                  <Button size="sm" variant="outline" className="ml-2 whitespace-nowrap bg-transparent">
                                    View details
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[75vw] max-w-4xl max-h-[90vh] flex flex-col p-0 gap-0">
                                  <DialogHeader className="flex-shrink-0 sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 sm:px-6 py-4">
                                    <DialogTitle className="text-lg md:text-xl font-semibold tracking-tight text-center sm:text-left">
                                      Finance & Accounting (BHSCM0-015)
                                    </DialogTitle>
                                    <nav aria-label="Quick links" className="mt-3 -mb-1">
                                      <ul className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm flex-wrap">
                                        <li>
                                          <a
                                            href="#finance-overview"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                                          >
                                            Overview
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#finance-objective"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                                          >
                                            Objective
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#finance-outcomes"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                                          >
                                            Outcomes
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#finance-contents"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                                          >
                                            Contents
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#finance-books"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                                          >
                                            Books
                                          </a>
                                        </li>
                                      </ul>
                                    </nav>
                                  </DialogHeader>
                                  <div className="flex-1 overflow-y-auto modal-scroll smooth-scroll touch-scroll">
                                    <div className="p-4 sm:p-6 md:p-8 max-w-none">
                                      <FinanceAccountingDetails />
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="text-center text-sm">{c.L}</TableCell>
                        <TableCell className="text-center text-sm">{c.T}</TableCell>
                        <TableCell className="text-center text-sm">{c.P}</TableCell>
                        <TableCell className="text-center text-sm">{c.int}</TableCell>
                        <TableCell className="text-center text-sm">{c.ext}</TableCell>
                        <TableCell className="text-center text-sm">{c.total}</TableCell>
                        <TableCell className="text-center text-sm font-medium">{c.credits}</TableCell>
                      </TableRow>


                    </Fragment>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {courses.map((c) => (
            <Card key={c.code} className="overflow-hidden border-0 shadow-md bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50">
              <CardContent className="p-5">
                <div className="space-y-3">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="font-mono text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-1 rounded mb-2 inline-block">
                        {c.code}
                      </div>
                      <h3 className="font-medium text-sm leading-tight break-words">
                        {c.name}
                      </h3>
                    </div>
                    <div className="flex flex-col items-end gap-2 flex-shrink-0">
                      {c.kind === "lab" && <Badge variant="outline" className="text-xs">Lab</Badge>}
                      {c.kind === "training" && (
                        <Badge variant="secondary" className="text-xs">
                          Training
                        </Badge>
                      )}
                      {(c.code === "BCSES1-501" || c.code === "BCSES1-502" || c.code === "BCSES1-503" || c.code === "BCSES1-504" || c.code === "BCSES1-505" || c.code === "BCSES1-506" || c.code === "BHSCM0-015") && (
                        <Dialog
                          open={c.code === "BCSES1-501" ? cdOpen : c.code === "BCSES1-502" ? dbmsOpen : c.code === "BCSES1-503" ? flOpen : c.code === "BCSES1-504" ? algoOpen : c.code === "BCSES1-505" ? dbmsLabOpen : c.code === "BCSES1-506" ? algoLabOpen : financeOpen}
                          onOpenChange={c.code === "BCSES1-501" ? setCdOpen : c.code === "BCSES1-502" ? setDbmsOpen : c.code === "BCSES1-503" ? setFlOpen : c.code === "BCSES1-504" ? setAlgoOpen : c.code === "BCSES1-505" ? setDbmsLabOpen : c.code === "BCSES1-506" ? setAlgoLabOpen : setFinanceOpen}
                          modal
                        >
                          <DialogTrigger asChild>
                            <Button size="sm" variant="outline" className="text-xs h-7">
                              Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[75vw] max-w-4xl max-h-[90vh] flex flex-col p-0 gap-0">
                            <DialogHeader className="flex-shrink-0 sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 sm:px-6 py-4">
                              <DialogTitle className="text-lg md:text-xl font-semibold tracking-tight text-center sm:text-left">
                                {c.name} ({c.code})
                              </DialogTitle>
                              <nav aria-label="Quick links" className="mt-3 -mb-1">
                                <ul className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm flex-wrap">
                                  <li>
                                    <a
                                      href={`#${c.code === "BCSES1-501" ? "cd" : c.code === "BCSES1-502" ? "dbms" : c.code === "BCSES1-503" ? "fl" : c.code === "BCSES1-504" ? "algo" : c.code === "BCSES1-505" ? "dbmslab" : c.code === "BCSES1-506" ? "algolab" : "finance"}-overview`}
                                      className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                                    >
                                      Overview
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href={`#${c.code === "BCSES1-501" ? "cd" : c.code === "BCSES1-502" ? "dbms" : c.code === "BCSES1-503" ? "fl" : c.code === "BCSES1-504" ? "algo" : c.code === "BCSES1-505" ? "dbmslab" : c.code === "BCSES1-506" ? "algolab" : "finance"}-objective`}
                                      className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                                    >
                                      Objective
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href={`#${c.code === "BCSES1-501" ? "cd" : c.code === "BCSES1-502" ? "dbms" : c.code === "BCSES1-503" ? "fl" : c.code === "BCSES1-504" ? "algo" : c.code === "BCSES1-505" ? "dbmslab" : c.code === "BCSES1-506" ? "algolab" : "finance"}-outcomes`}
                                      className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                                    >
                                      Outcomes
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href={`#${c.code === "BCSES1-501" ? "cd" : c.code === "BCSES1-502" ? "dbms" : c.code === "BCSES1-503" ? "fl" : c.code === "BCSES1-504" ? "algo" : c.code === "BCSES1-505" ? "dbmslab" : c.code === "BCSES1-506" ? "algolab" : "finance"}-${(c.code === "BCSES1-505" || c.code === "BCSES1-506") ? "practicals" : "contents"}`}
                                      className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                                    >
                                      {(c.code === "BCSES1-505" || c.code === "BCSES1-506") ? "Practicals" : "Contents"}
                                    </a>
                                  </li>
                                  {(c.code !== "BCSES1-505" && c.code !== "BCSES1-506") && (
                                    <li>
                                      <a
                                        href={`#${c.code === "BCSES1-501" ? "cd" : c.code === "BCSES1-502" ? "dbms" : c.code === "BCSES1-503" ? "fl" : c.code === "BCSES1-504" ? "algo" : "finance"}-books`}
                                        className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                                      >
                                        Books
                                      </a>
                                    </li>
                                  )}
                                </ul>
                              </nav>
                            </DialogHeader>
                            <div className="flex-1 overflow-y-auto modal-scroll smooth-scroll touch-scroll">
                              <div className="p-4 sm:p-6 md:p-8 max-w-none">
                                {c.code === "BCSES1-501" && <CompilerDesignDetails />}
                                {c.code === "BCSES1-502" && <DbmsDetails />}
                                {c.code === "BCSES1-503" && <FormalLanguageDetails />}
                                {c.code === "BCSES1-504" && <AlgorithmsDetails />}
                                {c.code === "BCSES1-505" && <DbmsLabDetails />}
                                {c.code === "BCSES1-506" && <AlgorithmsLabDetails />}
                                {c.code === "BHSCM0-015" && <FinanceAccountingDetails />}
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      )}
                    </div>
                  </div>

                  {/* Course Details Grid */}
                  <div className="grid grid-cols-3 gap-3 text-xs">
                    <div className="text-center p-2 bg-muted/30 rounded">
                      <div className="text-muted-foreground mb-1">L-T-P</div>
                      <div className="font-medium">{c.L}-{c.T}-{c.P}</div>
                    </div>
                    <div className="text-center p-2 bg-muted/30 rounded">
                      <div className="text-muted-foreground mb-1">Marks</div>
                      <div className="font-medium">{c.int}+{c.ext}</div>
                    </div>
                    <div className="text-center p-2 bg-primary/10 rounded">
                      <div className="text-muted-foreground mb-1">Credits</div>
                      <div className="font-medium text-primary">{c.credits}</div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="flex justify-between items-center text-xs text-muted-foreground pt-1 border-t">
                    <span>Total: {c.total} marks</span>
                    <span>Internal: {c.int} | External: {c.ext}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section >

      <section className="mt-8" aria-labelledby="elective-options">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-950/20 dark:to-orange-950/20">
          <CardContent className="p-6">
            <Accordion type="single" collapsible>
              <AccordionItem value="de-i" className="border-0">
                <AccordionTrigger id="elective-options" className="text-lg font-semibold hover:no-underline flex items-center gap-2">
                  <div className="h-6 w-6 rounded bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                    <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                  Departmental Elective-I Options
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    {electiveOptions.map((e) => (
                      <Card key={e.code} className="border-0 shadow-sm bg-white/60 dark:bg-slate-800/60 hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                          <CardTitle className="flex items-center justify-between gap-3 text-sm">
                            <div className="flex items-center gap-3">
                              <span className="font-mono text-xs bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 px-2 py-1 rounded">{e.code}</span>
                              <span className="text-slate-700 dark:text-slate-300">{e.name}</span>
                            </div>
                            {e.code === "BCSED1-513" && (
                              <Dialog open={webTechOpen} onOpenChange={setWebTechOpen} modal>
                                <DialogTrigger asChild>
                                  <Button size="sm" variant="outline" className="text-xs h-7 bg-transparent">
                                    Details
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[75vw] max-w-4xl max-h-[90vh] flex flex-col p-0 gap-0">
                                  <DialogHeader className="flex-shrink-0 sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 sm:px-6 py-4">
                                    <DialogTitle className="text-lg md:text-xl font-semibold tracking-tight text-center sm:text-left">
                                      Web Technologies (BCSED1-513)
                                    </DialogTitle>
                                    <nav aria-label="Quick links" className="mt-3 -mb-1">
                                      <ul className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm flex-wrap">
                                        <li>
                                          <a
                                            href="#webtech-overview"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                                          >
                                            Overview
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#webtech-objective"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                                          >
                                            Objective
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#webtech-outcomes"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                                          >
                                            Outcomes
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#webtech-contents"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                                          >
                                            Contents
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#webtech-books"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                                          >
                                            Books
                                          </a>
                                        </li>
                                      </ul>
                                    </nav>
                                  </DialogHeader>
                                  <div className="flex-1 overflow-y-auto modal-scroll smooth-scroll touch-scroll">
                                    <div className="p-4 sm:p-6 md:p-8 max-w-none">
                                      <WebTechnologiesDetails />
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            )}
                            {e.code === "BCSED1-514" && (
                              <Dialog open={javaOpen} onOpenChange={setJavaOpen} modal>
                                <DialogTrigger asChild>
                                  <Button size="sm" variant="outline" className="text-xs h-7 bg-transparent">
                                    Details
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[75vw] max-w-4xl max-h-[90vh] flex flex-col p-0 gap-0">
                                  <DialogHeader className="flex-shrink-0 sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 sm:px-6 py-4">
                                    <DialogTitle className="text-lg md:text-xl font-semibold tracking-tight text-center sm:text-left">
                                      Java Programming (BCSED1-514)
                                    </DialogTitle>
                                    <nav aria-label="Quick links" className="mt-3 -mb-1">
                                      <ul className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm flex-wrap">
                                        <li>
                                          <a
                                            href="#java-overview"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                                          >
                                            Overview
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#java-objective"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                                          >
                                            Objective
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#java-outcomes"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                                          >
                                            Outcomes
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#java-contents"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                                          >
                                            Contents
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#java-books"
                                            className="rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                                          >
                                            Books
                                          </a>
                                        </li>
                                      </ul>
                                    </nav>
                                  </DialogHeader>
                                  <div className="flex-1 overflow-y-auto modal-scroll smooth-scroll touch-scroll">
                                    <div className="p-4 sm:p-6 md:p-8 max-w-none">
                                      <JavaProgrammingDetails />
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            )}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-slate-600 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-700/50 rounded-md p-3 mx-4 mb-4">
                          <div className="flex items-center justify-between">
                            <span>L-T-P-C: <strong>3-0-0</strong></span>
                            <span>Credits: <strong className="text-amber-600 dark:text-amber-400">3</strong></span>
                          </div>
                          <div className="mt-2 text-xs">
                            Internal: <strong>40</strong> • External: <strong>60</strong> • Total: <strong>100</strong>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}

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

export default function SyllabusPage() {
  const [cdOpen, setCdOpen] = useState(false)
  const [dbmsOpen, setDbmsOpen] = useState(false)

  useEffect(() => {
    const anyOpen = cdOpen || dbmsOpen
    if (!anyOpen) return
    const prevBodyOverflow = document.body.style.overflow
    const prevHtmlOverflowY = document.documentElement.style.overflowY
    document.body.style.overflow = "hidden"
    document.documentElement.style.overflowY = "hidden"
    return () => {
      document.body.style.overflow = prevBodyOverflow
      document.documentElement.style.overflowY = prevHtmlOverflowY
    }
  }, [cdOpen, dbmsOpen])

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
    <main className="mx-auto w-full max-w-5xl px-4 py-8 overflow-x-hidden">
      <header className="mb-6 flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-pretty text-2xl font-semibold tracking-tight">5th Semester Syllabus</h1>
          <p className="text-sm text-muted-foreground">
            Professional, minimal overview of courses, contact hours, evaluation, and credits.
          </p>
        </div>
        <Badge className="bg-primary text-primary-foreground" aria-label="Academic term">
          2025 • UG
        </Badge>
      </header>

      <section className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">Courses</CardTitle>
          </CardHeader>
          <CardContent className="flex items-baseline gap-2">
            <span className="text-2xl font-semibold">{totals.courses}</span>
            <span className="text-xs text-muted-foreground">
              {totals.theory} theory • {totals.labs} lab
            </span>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">Internal Marks</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">{totals.int}</CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">External Marks</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">{totals.ext}</CardContent>
        </Card>

        <Card className="border-muted">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">Credits</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold text-primary">{totals.credits}</CardContent>
        </Card>
      </section>

      <Separator className="my-6" />

      <section aria-labelledby="courses-table">
        <div className="mb-3 flex items-center justify-between">
          <h2 id="courses-table" className="text-lg font-semibold tracking-tight">
            Course Breakdown
          </h2>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">Total {totals.total} marks</Badge>
            <Badge variant="outline" className="border-muted text-foreground">
              {totals.credits} credits
            </Badge>
          </div>
        </div>

        <Card>
          <CardContent className="p-0">
            <Table className="table-fixed w-full">
              <TableCaption className="sr-only">List of courses with contact hours, marks, and credits</TableCaption>
              <TableHeader className="sticky top-0 z-10 bg-background">
                <TableRow>
                  <TableHead className="w-24 sm:w-32 md:w-40">Code</TableHead>
                  <TableHead>Course Name</TableHead>
                  <TableHead className="hidden text-center md:table-cell">L</TableHead>
                  <TableHead className="hidden text-center md:table-cell">T</TableHead>
                  <TableHead className="hidden text-center md:table-cell">P</TableHead>
                  <TableHead className="hidden text-center md:table-cell">Int.</TableHead>
                  <TableHead className="hidden text-center md:table-cell">Ext.</TableHead>
                  <TableHead className="hidden text-center md:table-cell">Total</TableHead>
                  <TableHead className="hidden text-center md:table-cell">Credits</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {courses.map((c) => (
                  <Fragment key={c.code}>
                    <TableRow key={c.code}>
                      <TableCell className="font-medium">
                        <span className="font-mono text-sm">{c.code}</span>
                      </TableCell>
                      <TableCell className="whitespace-normal break-words text-pretty">
                        <div className="flex items-center justify-between gap-2">
                          <span>{c.name}</span>
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
                              <DialogContent className="w-[calc(100vw-1rem)] sm:w-[90vw] max-w-[100vw] md:max-w-3xl lg:max-w-4xl max-h-[85vh] md:max-h-[80vh] overflow-y-auto overscroll-contain overflow-x-hidden p-0 rounded-none sm:rounded-lg">
                                <DialogHeader className="sticky top-0 z-10 border-b bg-background/95 pe-12 px-5 sm:px-6 md:px-8 backdrop-blur supports-[backdrop-filter]:bg-background/60 overflow-x-hidden">
                                  <DialogTitle className="text-pretty text-base md:text-lg font-semibold tracking-tight text-center md:text-left">
                                    Compiler Design (BCSES1-501)
                                  </DialogTitle>
                                  <nav aria-label="Quick links" className="mt-2 -mb-2 no-scrollbar">
                                    <ul className="flex items-center justify-center md:justify-start gap-x-3 gap-y-1 text-xs md:text-sm flex-wrap">
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
                                <div className="p-5 sm:p-6 md:p-8 mx-auto max-w-prose md:max-w-3xl w-full overflow-x-hidden">
                                  <CompilerDesignDetails />
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
                              <DialogContent className="w-[calc(100vw-1rem)] sm:w-[90vw] max-w-[100vw] md:max-w-3xl lg:max-w-4xl max-h-[85vh] md:max-h-[80vh] overflow-y-auto overscroll-contain overflow-x-hidden p-0 rounded-none sm:rounded-lg">
                                <DialogHeader className="sticky top-0 z-10 border-b bg-background/95 pe-12 px-5 sm:px-6 md:px-8 backdrop-blur supports-[backdrop-filter]:bg-background/60 overflow-x-hidden">
                                  <DialogTitle className="text-pretty text-base md:text-lg font-semibold tracking-tight text-center md:text-left">
                                    Database Management System (BCSES1-502)
                                  </DialogTitle>
                                  <nav aria-label="Quick links" className="mt-2 -mb-2 no-scrollbar">
                                    <ul className="flex items-center justify-center md:justify-start gap-x-3 gap-y-1 text-xs md:text-sm flex-wrap">
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
                                <div className="p-5 sm:p-6 md:p-8 mx-auto max-w-prose md:max-w-3xl w-full overflow-x-hidden">
                                  <DbmsDetails />
                                </div>
                              </DialogContent>
                            </Dialog>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="hidden text-center md:table-cell">{c.L}</TableCell>
                      <TableCell className="hidden text-center md:table-cell">{c.T}</TableCell>
                      <TableCell className="hidden text-center md:table-cell">{c.P}</TableCell>
                      <TableCell className="hidden text-center md:table-cell">{c.int}</TableCell>
                      <TableCell className="hidden text-center md:table-cell">{c.ext}</TableCell>
                      <TableCell className="hidden text-center md:table-cell">{c.total}</TableCell>
                      <TableCell className="hidden text-center md:table-cell">{c.credits}</TableCell>
                    </TableRow>

                    <TableRow className="md:hidden">
                      <TableCell colSpan={2}>
                        <div className="grid gap-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <Badge variant="outline" className="px-2 py-0.5">
                              L {String(c.L)}
                            </Badge>
                            <Badge variant="outline" className="px-2 py-0.5">
                              T {String(c.T)}
                            </Badge>
                            <Badge variant="outline" className="px-2 py-0.5">
                              P {String(c.P)}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap items-center gap-2 text-xs">
                            <Badge variant="secondary" className="px-2 py-0.5">
                              Int {c.int}
                            </Badge>
                            <Badge variant="secondary" className="px-2 py-0.5">
                              Ext {c.ext}
                            </Badge>
                            <Badge variant="secondary" className="px-2 py-0.5">
                              Total {c.total}
                            </Badge>
                            <Badge variant="outline" className="px-2 py-0.5">
                              Credits {c.credits}
                            </Badge>
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  </Fragment>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      <section className="mt-6" aria-labelledby="elective-options">
        <Accordion type="single" collapsible>
          <AccordionItem value="de-i">
            <AccordionTrigger id="elective-options" className="text-base font-medium">
              Departmental Elective-I options
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-3 md:grid-cols-2">
                {electiveOptions.map((e) => (
                  <Card key={e.code}>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-sm">
                        <span className="font-mono text-xs text-muted-foreground">{e.code}</span>
                        <span>{e.name}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      L-T-P-C: 3-0-0 • Int 40 • Ext 60 • Total 100 • Credits 3
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  )
}

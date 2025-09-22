// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// interface NavLink {
//   label: string;
//   target: string;
// }

// interface SkillCategory {
//   title: string;
//   skills: string[];
// }

// interface ExperienceItem {
//   company: string;
//   role: string;
//   period: string;
//   summary: string;
//   highlights: string[];
// }

// interface ProjectItem {
//   name: string;
//   description: string;
//   tags: string[];
//   liveUrl?: string;
//   sourceUrl?: string;
// }

// interface SocialLink {
//   label: string;
//   url: string;
// }

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   readonly name = 'Abhishek Singh';
//   readonly tagline = 'Full Stack  Engineer crafting resilient Angular experiences.';
//   readonly about = `I specialise in building design-driven, accessible web applications with Angular.
// I love pairing thoughtful interaction design with clean, well-tested code and mentoring teams to deliver at scale.`;
//   readonly aboutParagraphs = this.about.split('\n');

//   readonly availability = 'Open to full-time and contract roles from Q2 2025 onwards';
//   readonly location = 'Bengaluru, India';
//   readonly email = 'hello@abhi.dev';

//   readonly navLinks: NavLink[] = [
//     { label: 'About', target: '#about' },
//     { label: 'Skills', target: '#skills' },
//     { label: 'Experience', target: '#experience' },
//     { label: 'Projects', target: '#projects' },
//     { label: 'Contact', target: '#contact' }
//   ];

//   readonly focusAreas = [
//     'Designing component libraries that scale across products.',
//     'Bringing ideas to life with robust Angular architecture.',
//     'Championing accessibility, performance, and testing from day one.'
//   ];

//   readonly skillCategories: SkillCategory[] = [
//     {
//       title: 'Core Frontend',
//       skills: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Zoneless change detection']
//     },
//     {
//       title: 'UI & Design',
//       skills: ['Component driven architecture', 'SCSS & Tailwind CSS', 'Design systems', 'Accessibility (WCAG 2.2)']
//     },
//     {
//       title: 'Tooling & Quality',
//       skills: ['Node.js', 'Nx & Monorepos', 'Jest & Testing Library', 'Playwright', 'CI/CD automation']
//     }
//   ];

//   readonly experiences: ExperienceItem[] = [
//     {
//       company: 'BrightLabs',
//       role: 'Senior Frontend Engineer',
//       period: '2022 - Present',
//       summary: 'Led the migration of a multi-tenant analytics platform to Angular standalone APIs while introducing performance-first best practices.',
//       highlights: [
//         'Reduced initial bundle size by 38% with route-level code-splitting and signal-driven state.',
//         'Built a reusable component library consumed across three product lines.',
//         'Mentored six engineers on TypeScript, testing, and accessibility guidelines.'
//       ]
//     },
//     {
//       company: 'Nebula Tech',
//       role: 'Frontend Engineer',
//       period: '2019 - 2022',
//       summary: 'Shipped data-heavy dashboards and workflow tooling for enterprise customers in the fintech space.',
//       highlights: [
//         'Designed and implemented a custom charting layer on top of D3 and RxJS.',
//         'Introduced automated visual regression coverage that caught regressions before release.',
//         'Collaborated closely with designers to improve UX research loops and design handoffs.'
//       ]
//     }
//   ];

//   readonly projects: ProjectItem[] = [
//     {
//       name: 'Pulseboard',
//       description: 'Real-time product health dashboard powered by Angular signals and WebSockets.',
//       tags: ['Angular', 'Signals', 'WebSockets', 'Nx'],
//       liveUrl: 'https://pulseboard.app',
//       sourceUrl: 'https://github.com/abhicode/pulseboard'
//     },
//     {
//       name: 'FolioKit',
//       description: 'Starter kit that helps developers launch a polished portfolio in minutes.',
//       tags: ['Angular', 'Tailwind', 'Framer Motion'],
//       sourceUrl: 'https://github.com/abhicode/foliokit'
//     },
//     {
//       name: 'TraceLab',
//       description: 'Open-source suite of schematic generators to speed up Angular development workflows.',
//       tags: ['Schematics', 'Node.js', 'Tooling'],
//       sourceUrl: 'https://github.com/abhicode/tracelab'
//     }
//   ];

//   readonly socials: SocialLink[] = [
//     { label: 'GitHub', url: 'https://github.com/abhicode' },
//     { label: 'LinkedIn', url: 'https://linkedin.com/in/abhisharma' },
//     { label: 'X (Twitter)', url: 'https://x.com/abhi_codes' }
//   ];

//   readonly currentYear = new Date().getFullYear();
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavLink {
  label: string;
  target: string;
}

interface SkillCategory {
  title: string;
  skills: string[];
}

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
}

interface ProjectItem {
  name: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
}

interface SocialLink {
  label: string;
  url: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // ===== Hero / About =====
  readonly name = 'Abhishek Singh';
  readonly tagline = 'Full-Stack Engineer • Node.js, Angular, Python • Data & Real-time Systems';
  readonly about = `Full-stack engineer with experience building real-time and data-driven apps.
Optimized EV Charging Management backends, shipped secure, scalable web apps, and delivered data workflows with Python/PySpark.
Comfortable across API design, performance tuning, and production-grade deployments.`;
  readonly aboutParagraphs = this.about.split('\n');

  readonly availability = 'Open to full-time and contract roles from  2025 onwards';
  readonly location = 'Hyderabad, India';
  readonly email = 'abhisheksinghmuz1999@gmail.com';

  // ===== Nav =====
  readonly navLinks: NavLink[] = [
    { label: 'About', target: '#about' },
    { label: 'Skills', target: '#skills' },
    { label: 'Experience', target: '#experience' },
    { label: 'Projects', target: '#projects' },
    { label: 'Contact', target: '#contact' }
  ];

  // ===== Focus Areas (short value props) =====
  readonly focusAreas = [
    'Performance-first backends & real-time features.',
    'Clean, testable Angular front-ends & component libraries.',
    'Data pipelines & analytics with Python/PySpark.'
  ];

  // ===== Skills (merged & de-duplicated) =====
  readonly skillCategories: SkillCategory[] = [
    {
      title: 'Core Frontend',
      skills: ['Angular (standalone APIs)', 'TypeScript', 'RxJS', 'NgRx', 'SCSS', 'Tailwind CSS']
    },
    {
      title: 'Backend & APIs',
      skills: ['Node.js', 'Express.js', 'Django', 'Flask', 'REST', 'WebSockets', 'JWT/Auth']
    },
    {
      title: 'Data & Analytics',
      skills: ['Python', 'PySpark', 'Pandas', 'NumPy', 'TensorFlow', 'Power BI', 'Tableau']
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB']
    },
    {
      title: 'Tooling & Platform',
      skills: ['Git/GitHub', 'CI/CD', 'Testing (Jest, Playwright)', 'MLflow']
    }
  ];

  // ===== Experience (concise metrics) =====
  readonly experiences: ExperienceItem[] = [
    {
      company: 'Cero Smart Mobility Pvt. Ltd.',
      role: 'Software Developer',
      period: 'Oct 2024 – Present • Hyderabad',
      summary:
        'EV Charging Management platform—backend optimization, secure web apps, and data processing.',
      highlights: [
        'Cut API response time by ~25% and improved throughput by ~15% for CMS backends.',
        'Built EV charging web app; reduced manual station ops by ~30% and improved user satisfaction by ~20%.',
        'Threat Model tool surfaced 15 critical security issues; led fixes with best practices.',
        'Automated invoice emailing via SMTP workflows, improving delivery efficiency by ~50%.',
        'Parallel log analysis with PySpark reduced processing time by ~40%.'
      ]
    },
    {
      company: 'Celebal Technologies',
      role: 'SQL Intern',
      period: 'Mar 2024 – Sep 2024',
      summary:
        'Analytics engineering with SQL/Python; data prep at scale and automation.',
      highlights: [
        'Processed 1M+ records with SQL/Python to drive insights (+~50% faster decision-making).',
        'Automated data cleaning scripts; saved ~5 hrs/week with consistent data quality.'
      ]
    }
  ];

  // ===== Projects (resume + existing; concise) =====
  readonly projects: ProjectItem[] = [
    // From resume
    {
      name: 'Real-Time Tracker',
      description:
        'Node.js + Socket.IO real-time tracker with server-rendered EJS; 10k concurrent events; ~20% lower latency.',
      tags: ['Node.js', 'Socket.IO', 'EJS', 'WebSockets']
    },
    {
      name: 'Voting Application',
      description:
        'Secure voting app with JWT auth, MongoDB & WebSockets; REST APIs; ~99.9% uptime.',
      tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'WebSockets'],
      // liveUrl: 'https://pulseboard.app',
      // sourceUrl: 'https://github.com/abhicode/pulseboard'
    },
    {
      name: 'Email-SMS Spam Classifier',
      description:
        'ML system (Naive Bayes, Logistic Regression) with ~80% precision; MLflow for tracking & faster deployments.',
      tags: ['Python', 'ML', 'TensorFlow', 'MLflow']
    },
    {
      name: 'Gemini Application',
      description:
        'Google Dev API–based app designed for secure input handling; targeted ~99.9% uptime.',
      tags: ['APIs', 'Security', 'Uptime']
    },

    
  ];

  // ===== Socials (left as-is; add real URLs if you want) =====
  readonly socials: SocialLink[] = [
    { label: 'GitHub', url: 'https://github.com/AbhishekSingh805138' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/abhishek-singh-9703421a6/' },
    //{ label: 'X (Twitter)', url: 'https://x.com/abhi_codes' }
  ];

  // ===== Footer =====
  readonly currentYear = new Date().getFullYear();
}

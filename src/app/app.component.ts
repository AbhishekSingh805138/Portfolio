

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

// @Component → tells Angular this is a component.

// selector → defines the HTML tag to use it.

// standalone → makes the component self-contained, no NgModule needed.

// imports → brings in other components, directives, or pipes.

// templateUrl → path to the HTML UI file.

// styleUrls → path(s) to the CSS/SCSS files for styling.

@Component({//t tells Angular that the following class (in this case, AppComponent) is a component.
  selector: 'app-root',// the custom HTML tag that represents this component in templates.
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
  readonly location = 'India';
  readonly email = 'abhisheksinghmuz1999@gmail.com';
  readonly contact = '6203430305';

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

 
readonly projects: ProjectItem[] = [
  // From resume
    {
    name: 'Alerting & Notification Platform',
    description:
      'Node.js/Express + Angular app for alerts, reminders, snoozes, and analytics. Extensible delivery channels.',
    tags: ['Python','Node.js','Angular','TypeScript', 'Express', 'TypeORM', 'PostgreSQL'],
    sourceUrl: 'https://github.com/AbhishekSingh805138/Alerting-Notification-Platform',
  },
   {
    name: 'Product Management App',
    description:
      'Minimal full-stack app with JWT auth, PostgreSQL, and admin-only CRUD. Ships with a vanilla JS frontend.',
    tags: ['Node.js','Angular', 'TypeScript', 'Express', 'TypeORM', 'PostgreSQL', 'JWT', 'VanillaJS'],
      sourceUrl: 'https://github.com/AbhishekSingh805138/Product-Management',
  },
 
  {
    name: 'Voting Application',
    description:
      'Secure app with JWT auth, MongoDB & WebSockets. REST APIs with ~99.9% uptime and real-time vote sync.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'WebSockets'],
     sourceUrl: 'https://github.com/AbhishekSingh805138/Voting_Backend_APP'
  },
    {
    name: 'Real-Time Tracker',
    description:
      'Node.js + Socket.IO tracker handling 10k+ concurrent events with EJS views. Achieved ~20% lower latency.',
    tags: ['Node.js', 'Socket.IO', 'EJS', 'WebSockets','MongoDB'],
    sourceUrl: 'https://github.com/AbhishekSingh805138/Real_Time_Tracker'
  },
  {
    name: 'Email-SMS Spam Classifier',
    description:
      'ML model (Naive Bayes & Logistic Regression) with ~80% precision. Tracked deployments using MLflow.',
    tags: ['Python', 'ML', 'TensorFlow', 'MLflow'],
    sourceUrl: 'https://github.com/AbhishekSingh805138/SMS-SPAM_CLASSIFIER'
  },
  {
    name: 'Gemini Application',
    description:
      'Google Dev API–based tool designed for secure input handling. Built for ~99.9% uptime and reliability.',
    tags: ['APIs', 'Security', 'Uptime'],
    sourceUrl: 'https://github.com/AbhishekSingh805138/Nodejs-_Gemini'
  },

 {
  name: 'BankWeb',
  description:
    'Full-stack banking app with Angular frontend and Java backend. Includes user flows, APIs, and modular design for finance use cases.',
  tags: ['Java', 'Angular', 'TypeScript', 'SCSS', 'Full-Stack'],
   sourceUrl: 'https://github.com/AbhishekSingh805138/FRONTEND_JAVA-PROJECT'
   // liveUrl: 'https://your-bankweb-demo.com',
}

];

  // ===== Socials (left as-is; add real URLs if you want) =====
  readonly socials: SocialLink[] = [
    { label: 'GitHub', url: 'https://github.com/AbhishekSingh805138' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/abhishek-singh-9703421a6/' },
  ];

  // ===== Footer =====
  readonly currentYear = new Date().getFullYear();
}

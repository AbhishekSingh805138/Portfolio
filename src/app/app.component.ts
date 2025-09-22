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
  readonly name = 'Abhi Sharma';
  readonly tagline = 'Frontend engineer crafting resilient Angular experiences.';
  readonly about = `I specialise in building design-driven, accessible web applications with Angular.
I love pairing thoughtful interaction design with clean, well-tested code and mentoring teams to deliver at scale.`;
  readonly aboutParagraphs = this.about.split('\n');

  readonly availability = 'Open to full-time and contract roles from Q2 2025 onwards';
  readonly location = 'Bengaluru, India';
  readonly email = 'hello@abhi.dev';

  readonly navLinks: NavLink[] = [
    { label: 'About', target: '#about' },
    { label: 'Skills', target: '#skills' },
    { label: 'Experience', target: '#experience' },
    { label: 'Projects', target: '#projects' },
    { label: 'Contact', target: '#contact' }
  ];

  readonly focusAreas = [
    'Designing component libraries that scale across products.',
    'Bringing ideas to life with robust Angular architecture.',
    'Championing accessibility, performance, and testing from day one.'
  ];

  readonly skillCategories: SkillCategory[] = [
    {
      title: 'Core Frontend',
      skills: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Zoneless change detection']
    },
    {
      title: 'UI & Design',
      skills: ['Component driven architecture', 'SCSS & Tailwind CSS', 'Design systems', 'Accessibility (WCAG 2.2)']
    },
    {
      title: 'Tooling & Quality',
      skills: ['Node.js', 'Nx & Monorepos', 'Jest & Testing Library', 'Playwright', 'CI/CD automation']
    }
  ];

  readonly experiences: ExperienceItem[] = [
    {
      company: 'BrightLabs',
      role: 'Senior Frontend Engineer',
      period: '2022 - Present',
      summary: 'Led the migration of a multi-tenant analytics platform to Angular standalone APIs while introducing performance-first best practices.',
      highlights: [
        'Reduced initial bundle size by 38% with route-level code-splitting and signal-driven state.',
        'Built a reusable component library consumed across three product lines.',
        'Mentored six engineers on TypeScript, testing, and accessibility guidelines.'
      ]
    },
    {
      company: 'Nebula Tech',
      role: 'Frontend Engineer',
      period: '2019 - 2022',
      summary: 'Shipped data-heavy dashboards and workflow tooling for enterprise customers in the fintech space.',
      highlights: [
        'Designed and implemented a custom charting layer on top of D3 and RxJS.',
        'Introduced automated visual regression coverage that caught regressions before release.',
        'Collaborated closely with designers to improve UX research loops and design handoffs.'
      ]
    }
  ];

  readonly projects: ProjectItem[] = [
    {
      name: 'Pulseboard',
      description: 'Real-time product health dashboard powered by Angular signals and WebSockets.',
      tags: ['Angular', 'Signals', 'WebSockets', 'Nx'],
      liveUrl: 'https://pulseboard.app',
      sourceUrl: 'https://github.com/abhicode/pulseboard'
    },
    {
      name: 'FolioKit',
      description: 'Starter kit that helps developers launch a polished portfolio in minutes.',
      tags: ['Angular', 'Tailwind', 'Framer Motion'],
      sourceUrl: 'https://github.com/abhicode/foliokit'
    },
    {
      name: 'TraceLab',
      description: 'Open-source suite of schematic generators to speed up Angular development workflows.',
      tags: ['Schematics', 'Node.js', 'Tooling'],
      sourceUrl: 'https://github.com/abhicode/tracelab'
    }
  ];

  readonly socials: SocialLink[] = [
    { label: 'GitHub', url: 'https://github.com/abhicode' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/abhisharma' },
    { label: 'X (Twitter)', url: 'https://x.com/abhi_codes' }
  ];

  readonly currentYear = new Date().getFullYear();
}
const modalData = {
  oml: {
    title: 'ONE MINUTE LEFT',
    meta: 'GAME DEV // HTML5 CANVAS // BROWSER PLATFORMER',
    desc: 'A browser-based platformer where the challenge isn\'t finishing — it\'s finishing with exactly one minute remaining on the clock. Built entirely in vanilla JavaScript using the HTML5 Canvas API.',
    details: [
      'Ghost replay system: records every frame of your previous run and renders it as a semi-transparent ghost alongside the current attempt.',
      'Adaptive difficulty: the game tracks your speed and success rate, dynamically adjusting platform gaps and enemy speed.',
      'Secret shortcut mechanic: a hidden path rewards players who explore off the critical route, cutting significant time.',
      'Custom game loop with delta-time for consistent physics across all devices.',
      'Pixel-perfect collision detection and responsive canvas scaling.'
    ],
    tech: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Game Loop', 'Ghost Replay', 'Adaptive AI', 'Delta-Time Physics'],
    status: 'COMPLETE'
  },
  mnmx: {
    title: 'MNMX MEMORY BATTLE',
    meta: 'GAME DEV // PROBABILISTIC AI // BROWSER GAME',
    desc: 'A competitive memory battle game where you face MNMX - an adaptive AI opponent with simulated memory, probabilistic decision-making, and evolving strategy patterns. As difficulties increase, the AI becomes faster, smarter, and more efficient at remembering previously revealed cards, transforming a classic memory game into a tense tactical duel.',
    details: [
      'Adaptive AI system featuring memory retention, accuracy scaling, and strategic card selection behaviors.',
      'Four difficulty levels ranging from casual play to a near-perfect memory AI with aggressive optimization.',
      'Multiple card themes including emoji, symbols, letters, and number modes.',
      'Built-in hint system, combo streak tracking, animated scoreboards, and live turn indicators.',
      'Procedural sound effects generated entirely with the Web Audio API - no external assets used.',
      'Persistent battle history with win/loss tracking, best streaks, and local statistics via localStorage.'
    ],
    tech: ['JavaScript', 'CSS3', 'HTML5', 'Probability', 'AI Agent', 'Local Storage','Web Audio API','Game AI'],
    status: 'COMPLETE'
  },
  portfolio: {
    title: 'PORTFOLIO WEBSITE',
    meta: 'WEB DEV // VANILLA JS // NO FRAMEWORKS',
    desc: 'This very site — built from scratch using zero frameworks, zero libraries, zero build tools. Pure HTML5, CSS3, and vanilla JavaScript, split into clean external files.',
    details: [
      'Custom retro terminal × game dev aesthetic with red/black/amber palette, scanline overlay, and Orbitron typeface.',
      'Scroll-triggered animations using IntersectionObserver — no libraries required.',
      'Modal system with project deep-dives, fully keyboard-navigable (Escape to close).',
      'Client-side form validation with real-time field-level error feedback.',
      'Responsive design for all screen sizes with a mobile hamburger nav.',
      'Animated skill bars that trigger only when scrolled into view.',
      'Fully separated CSS across 8 external files and JS across 4 modules.'
    ],
    tech: ['HTML5', 'CSS3', 'Vanilla JS', 'IntersectionObserver', 'CSS Grid', 'CSS Animations'],
    status: 'LIVE'
  },
  lms: {
    title: 'JAVA LIBRARY MANAGEMENT SYSTEM',
    meta: 'SOFTWARE ENGINEERING // JAVA // OOP DESIGN PATTERNS',
    desc: 'A Java library management system built to demonstrate mastery of five core OOP design patterns in a real-world application context.',
    details: [
      'Singleton pattern: a single library instance manages all global state and prevents duplicate instantiation.',
      'Factory pattern: book and member object creation abstracted behind factory classes for flexibility.',
      'Builder pattern: complex book records constructed via a fluent builder API.',
      'Inheritance: a base Item class extended by Book, Journal, and Magazine subclasses.',
      'Enum pattern: status types, genres, and member roles represented as enums for type safety.',
      'Full UML class diagram produced using PlantUML.',
      'Clean, well-commented Java code with no external dependencies.'
    ],
    tech: ['Java', 'OOP', 'Singleton', 'Factory', 'Builder', 'Inheritance', 'Enum', 'UML', 'PlantUML'],
    status: 'COMPLETE'
  },
  dice: {
    title: 'PYTHON DICE ROLLER',
    meta: 'GAME DEV // PYTHON // CLI APPLICATION',
    desc: 'An interactive dice-rolling game built in Python. Uses the random module to simulate dice rolls and prints ASCII art to represent each face of the die.',
    details: [
      'ASCII art rendering for all six dice faces, displayed directly in the terminal.',
      'Uses Python\'s random module for fair, randomised dice roll simulation.',
      'Interactive CLI loop — roll as many times as you like without restarting.',
      'Clean, readable code with no external dependencies.'
    ],
    tech: ['Python', 'ASCII Art', 'Random Module', 'CLI Application'],
    status: 'COMPLETE'
  },
  snake: {
    title: 'RETRO SNAKE GAME',
    meta: 'GAME DEV // CANVAS API // PORTFOLIO MINIGAME',
    desc: 'A Snake game built as an interactive element of the portfolio site, fully themed to match the retro terminal aesthetic.',
    details: [
      'Rendered on HTML5 Canvas with a pixel grid matching the portfolio\'s red/black/amber visual design.',
      'High score tracked and persisted in localStorage across sessions.',
      'Speed increases progressively as the snake grows in length.',
      'Full keyboard support: arrow keys and WASD.',
      'Game-over screen with score summary and instant restart.'
    ],
    tech: ['JavaScript', 'Canvas API', 'CSS3', 'Local Storage', 'Game Loop'],
    status: 'COMPLETE'
  }
};

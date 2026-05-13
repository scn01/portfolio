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
    desc: 'A competitive memory card game where you go head-to-head against MNMX — an AI opponent with a real probabilistic memory system, tunable retention, and three distinct strategy modes. Built entirely in vanilla JavaScript with no frameworks or external assets.',
    details: [
      'AI memory system: MNMX tracks every card it sees using a retention probability (40%–100% per difficulty), then scores known pairs by confidence and picks optimally on Hard and Impossible — so it genuinely gets smarter the longer the game goes on.',
      'Three AI strategy modes — Dumb (random exploration, no memory bias), Normal (mild preference for unseen cards), and Smart (always targets unseen cards first to maximise information gain, picks the earliest-seen pair for highest confidence).',
      'Four difficulty levels: Easy (4×4, 35% accuracy, 2 hints), Medium (4×5, 60% accuracy, 1 hint), Hard (6×6, 88% accuracy, no hints), and Impossible (8×8, 100% accuracy and retention, no hints).',
      'Four card themes — Emoji, Numbers, Letters, and Symbols — each with a 32-item pool, shuffled fresh every game. Theme and difficulty changes instantly restart the game.',
      'Hint system: flashes a valid unmatched pair with a purple glow animation for 900ms using the same pair-finding logic as the AI, so hints are always solvable.',
      'Combo streak tracking for both player and AI — a toast notification fires at 3+ consecutive matches, with an escalating chiptune fanfare generated entirely via the Web Audio API (no audio files).',
      'Full sound design using Web Audio API oscillators only: soft sine click for flips, two-tone triangle chime for matches, sawtooth thud for mismatches, ascending fanfare for wins, and a descending tone for losses.',
      'Persistent battle history in localStorage: win/loss/draw record, win rate percentage, longest win streak, and best score per difficulty — all shown in a scrollable history panel with colour-coded result rows.'
    ],
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Web Audio API', 'AI Agent', 'Probabilistic Memory', 'LocalStorage', 'ES Modules', 'CSS Grid', 'CSS Animations'],
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

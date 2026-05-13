(function () {
  const canvas = document.getElementById('snake-canvas');
  const ctx    = canvas.getContext('2d');

  const COLS = 20, ROWS = 20;
  const CELL = canvas.width / COLS;

  const scoreEl = document.getElementById('snake-score');
  const bestEl  = document.getElementById('snake-best');
  const levelEl = document.getElementById('snake-level');

  const startScreen = document.getElementById('snake-start');
  const overScreen  = document.getElementById('snake-over');
  const overScore   = document.getElementById('snake-over-score');
  const overBest    = document.getElementById('snake-over-best');

  let snake, dir, nextDir, food, score, level, best, loop, running, paused;

  function init() {
    snake   = [{ x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 }];
    dir     = { x: 1, y: 0 };
    nextDir = { x: 1, y: 0 };
    food    = spawnFood();
    score   = 0;
    level   = 1;
    running = false;
    paused  = false;
    best    = parseInt(localStorage.getItem('snake_best') || '0');
    updateHUD();
    draw();
  }

  function spawnFood() {
    let pos;
    do {
      pos = { x: Math.floor(Math.random() * COLS), y: Math.floor(Math.random() * ROWS) };
    } while (snake.some(s => s.x === pos.x && s.y === pos.y));
    return pos;
  }

  function speed() {
    return Math.max(80, 200 - (level - 1) * 18);
  }

  function startGame() {
    clearInterval(loop);
    init();
    running = true;
    startScreen.classList.remove('visible');
    overScreen.classList.remove('visible');
    loop = setInterval(tick, speed());
  }

  function tick() {
    if (!running || paused) return;

    dir = { ...nextDir };
    const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };

    if (
      head.x < 0 || head.x >= COLS ||
      head.y < 0 || head.y >= ROWS ||
      snake.some(s => s.x === head.x && s.y === head.y)
    ) {
      endGame(); return;
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      score++;
      level = Math.floor(score / 5) + 1;
      food = spawnFood();
      clearInterval(loop);
      loop = setInterval(tick, speed());
    } else {
      snake.pop();
    }

    if (score > best) {
      best = score;
      localStorage.setItem('snake_best', best);
    }

    updateHUD();
    draw();
  }

  function endGame() {
    running = false;
    clearInterval(loop);
    overScore.textContent = 'SCORE: ' + score;
    overBest.textContent  = 'BEST:  ' + best;
    overScreen.classList.add('visible');
  }

  function updateHUD() {
    scoreEl.textContent = 'SCORE: ' + String(score).padStart(3, '0');
    bestEl.textContent  = 'BEST: '  + String(best).padStart(3, '0');
    levelEl.textContent = 'LVL: '   + level;
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Grid
    ctx.strokeStyle = 'rgba(42,42,42,0.5)';
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= COLS; i++) {
      ctx.beginPath(); ctx.moveTo(i * CELL, 0); ctx.lineTo(i * CELL, canvas.height); ctx.stroke();
    }
    for (let j = 0; j <= ROWS; j++) {
      ctx.beginPath(); ctx.moveTo(0, j * CELL); ctx.lineTo(canvas.width, j * CELL); ctx.stroke();
    }

    // Food
    const fx = food.x * CELL, fy = food.y * CELL;
    ctx.fillStyle = '#f5a623';
    ctx.fillRect(fx + 2, fy + 2, CELL - 4, CELL - 4);
    ctx.fillStyle = 'rgba(245,166,35,0.25)';
    ctx.fillRect(fx, fy, CELL, CELL);

    // Snake
    snake.forEach((seg, i) => {
      const sx = seg.x * CELL, sy = seg.y * CELL;
      if (i === 0) {
        ctx.fillStyle = '#e03030';
        ctx.shadowColor = 'rgba(224,48,48,0.7)';
        ctx.shadowBlur  = 8;
      } else {
        const fade = 1 - (i / snake.length) * 0.6;
        ctx.fillStyle = `rgba(160, 24, 24, ${fade})`;
        ctx.shadowBlur = 0;
      }
      ctx.fillRect(sx + 1, sy + 1, CELL - 2, CELL - 2);
    });
    ctx.shadowBlur = 0;
  }

  // Input
  document.addEventListener('keydown', function (e) {
    const map = {
      ArrowUp:    { x: 0, y: -1 }, w: { x: 0, y: -1 },
      ArrowDown:  { x: 0, y:  1 }, s: { x: 0, y:  1 },
      ArrowLeft:  { x: -1, y: 0 }, a: { x: -1, y: 0 },
      ArrowRight: { x:  1, y: 0 }, d: { x:  1, y: 0 },
    };
    const newDir = map[e.key];
    if (newDir && !(newDir.x === -dir.x && newDir.y === -dir.y)) {
      nextDir = newDir;
      if (['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.key)) {
        e.preventDefault();
      }
    }
    if (e.key === 'p' || e.key === 'P') {
      paused = !paused;
    }
  });

  // Swipe support (mobile)
  let touchStart = null;
  canvas.addEventListener('touchstart', e => { touchStart = e.touches[0]; }, { passive: true });
  canvas.addEventListener('touchend', function (e) {
    if (!touchStart) return;
    const dx = e.changedTouches[0].clientX - touchStart.clientX;
    const dy = e.changedTouches[0].clientY - touchStart.clientY;
    if (Math.abs(dx) > Math.abs(dy)) {
      nextDir = dx > 0 ? { x: 1, y: 0 } : { x: -1, y: 0 };
    } else {
      nextDir = dy > 0 ? { x: 0, y: 1 } : { x: 0, y: -1 };
    }
    touchStart = null;
  }, { passive: true });

  // Prevent page scroll while swiping on the canvas during active gameplay
  canvas.addEventListener('touchmove', function (e) {
    if (running && !paused) e.preventDefault();
  }, { passive: false });

  // Button wiring
  document.getElementById('snake-start-btn').addEventListener('click', startGame);
  document.getElementById('snake-restart-btn').addEventListener('click', startGame);
  document.getElementById('snake-pause-btn').addEventListener('click', function () {
    if (!running) return;
    paused = !paused;
    this.textContent = paused ? 'RESUME' : 'PAUSE';
  });

  init();
  startScreen.classList.add('visible');
})();

const canvas = document.getElementById('maze-canvas');
const ctx = canvas.getContext('2d');

const MAPS = [
    [ // NIVEL 1
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        [0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [3, 3, 3, 3, 3, 0, 1, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 1, 0, 3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3, 0, 1, 0, 0, 3, 0, 7, 7, 7, 7, 7, 7, 0, 3, 0, 0, 1, 0, 3, 3, 3, 3, 3],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 3, 0, 3, 3, 3, 3, 3, 3, 0, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [4, 3, 3, 3, 3, 3, 1, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 1, 3, 3, 3, 3, 3, 4],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 3, 0, 3, 3, 3, 3, 3, 3, 0, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [3, 3, 3, 3, 3, 0, 1, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 1, 0, 3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3, 0, 1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 0, 3, 3, 3, 3, 3],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        [0, 2, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 2, 0],
        [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [ // NIVEL 2 - Compacto, difícil e sem portais laterais
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        [0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 3, 3, 3, 3, 3, 3, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 3, 0, 7, 7, 7, 7, 3, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 3, 0, 3, 3, 3, 3, 0, 3, 1, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 0, 0, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 0, 3, 3, 3, 3, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 3, 0, 0, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
        [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
];

class Game {
    constructor() {
        this.sc = 0;
        this.hiSc = localStorage.getItem('pacman-hi-score') || 0;
        this.li = 3;
        this.lv = 1;
        this.pa = true;
        this.pT = 0;
        this.aId = null;
        window.onkeydown = (e) => {
            const k = { 'arrowup': [0, -1], 'arrowdown': [0, 1], 'arrowleft': [-1, 0], 'arrowright': [1, 0], 'w': [0, -1], 's': [0, 1], 'a': [-1, 0], 'd': [1, 0] };
            const d = k[e.key.toLowerCase()];
            if (d) { e.preventDefault(); this.pac.nx = d[0]; this.pac.ny = d[1]; }
        };
        this.reset(true);
    }

    reset(rm = true) {
        if (rm) this.map = JSON.parse(JSON.stringify(MAPS[this.lv - 1] || MAPS[0]));
        let py = (this.lv === 1) ? 370 : 430;
        this.pac = { x: 270, y: py, dx: 0, dy: 0, nx: 0, ny: 0, m: 0, md: 0.08 };

        // Personalidades: 0: Blinky (Chase), 1: Pinky (Ambush), 2: Inky (Patrol), 3: Clyde (Random/Flee)
        this.ghs = [
            { x: 270, y: 230, c: '#f00', dx: 0, dy: 0, rt: 0, id: 'blinky' },
            { x: 270, y: 230, c: '#fcf', dx: 0, dy: 0, rt: 0, id: 'pinky' },
            { x: 250, y: 230, c: '#0ff', dx: 0, dy: 0, rt: 0, id: 'inky' },
            { x: 290, y: 230, c: '#fc5', dx: 0, dy: 0, rt: 0, id: 'clyde' }
        ];
        this.updateUI();
        this.draw();
    }

    start() {
        this.sc = 0;
        this.li = 3;
        this.lv = 1;
        this.updateUI();
        this.begin(true);
    }

    retry() { this.begin(true); }
    nextLevel() { this.lv++; this.begin(true); }

    begin(rm = true) {
        this.reset(rm); this.pa = false;
        document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
        if (this.aId) cancelAnimationFrame(this.aId);
        this.loop();
    }

    updateUI() {
        document.getElementById('sc-val').innerText = this.sc;
        document.getElementById('lv-val').innerText = this.lv;

        // High Score
        if (this.sc > this.hiSc) {
            this.hiSc = this.sc;
            localStorage.setItem('pacman-hi-score', this.hiSc);
        }

        const b = document.getElementById('li-box');
        b.innerHTML = '';
        for (let i = 0; i < this.li; i++) b.innerHTML += '<div class="lives-icon"></div>';
    }

    draw() {
        ctx.fillStyle = '#000'; ctx.fillRect(0, 0, 560, 620);
        if (!this.map) return;
        for (let r = 0; r < this.map.length; r++) for (let c = 0; c < 28; c++) {
            let x = c * 20, y = r * 20, t = this.map[r][c];
            if (t === 0) {
                // Wall rendering with a bit of "Premium" glow
                ctx.fillStyle = '#2121ff';
                ctx.fillRect(x + 2, y + 2, 16, 16);
            }
            else if (t === 1) { ctx.fillStyle = '#ffb8ae'; ctx.beginPath(); ctx.arc(x + 10, y + 10, 2, 0, 7); ctx.fill(); }
            else if (t === 2) {
                // Pulsing power pellet
                let pulse = Math.sin(Date.now() / 200) * 2;
                ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(x + 10, y + 10, 6 + pulse, 0, 7); ctx.fill();
            }
            else if (t === 7) { ctx.strokeStyle = '#ffb8ff'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(x, y + 10); ctx.lineTo(x + 20, y + 10); ctx.stroke(); }
        }

        // Draw High Score on canvas
        ctx.fillStyle = "#fff";
        ctx.font = "10px 'Press Start 2P'";
        ctx.fillText(`HI: ${this.hiSc}`, 440, 15);
    }

    can(o, dx, dy, ig = false) {
        let s = ig ? (this.lv === 1 ? 2 : 2.5) : 2;
        let nx = o.x + dx * s, ny = o.y + dy * s, f = 2;
        let pts = [[ny - f, nx - f], [ny - f, nx + f], [ny + f, nx - f], [ny + f, nx + f]];
        for (let p of pts) {
            let r = Math.floor(p[0] / 20), c = Math.floor(p[1] / 20);
            if (!this.map[r] || this.map[r][c] === 0) return false;
            // Ghost house door
            if (this.map[r][c] === 7 && (!ig || (o.y < 200 && dy > 0))) return false;
        } return true;
    }

    getGhostTarget(g) {
        if (this.pT > 0) { // Run away if frightened
            return { x: 560 - this.pac.x, y: 620 - this.pac.y };
        }

        switch (g.id) {
            case 'blinky': // Straight to Pacman
                return { x: this.pac.x, y: this.pac.y };
            case 'pinky': // 4 tiles ahead
                return { x: this.pac.x + this.pac.dx * 80, y: this.pac.y + this.pac.dy * 80 };
            case 'inky': // Complex logic
                let blinky = this.ghs[0];
                let tx = this.pac.x + this.pac.dx * 40;
                let ty = this.pac.y + this.pac.dy * 40;
                return { x: tx + (tx - blinky.x), y: ty + (ty - blinky.y) };
            case 'clyde': // Close? Random. Far? Chase.
                let dist = Math.hypot(g.x - this.pac.x, g.y - this.pac.y);
                return dist < 160 ? { x: 20, y: 600 } : { x: this.pac.x, y: this.pac.y };
            default:
                return { x: 280, y: 300 };
        }
    }

    loop() {
        if (this.pa) return;
        this.draw();
        let p = this.pac;
        if (this.pT > 0) this.pT--;

        // Pacman mechanics
        if ((p.nx || p.ny) && this.can(p, p.nx, p.ny)) {
            if (p.nx) p.y = Math.floor(p.y / 20) * 20 + 10;
            if (p.ny) p.x = Math.floor(p.x / 20) * 20 + 10;
            p.dx = p.nx; p.dy = p.ny; p.nx = p.ny = 0;
        }
        if (this.can(p, p.dx, p.dy)) {
            p.x += p.dx * 2; p.y += p.dy * 2;
            if (p.x < 0) p.x = 560;
            if (p.x > 560) p.x = 0;

            let r = Math.floor(p.y / 20), c = Math.floor(p.x / 20);
            if (this.map[r] && (this.map[r][c] === 1 || this.map[r][c] === 2)) {
                if (this.map[r][c] === 2) this.pT = 500;
                this.sc += (this.map[r][c] === 1 ? 10 : 50);
                this.map[r][c] = 3;
                this.updateUI();

                if (!this.map.some(row => row.includes(1) || row.includes(2))) {
                    this.pa = true;
                    document.getElementById('vic-sc').innerText = `PONTOS: ${this.sc}`;
                    document.getElementById('victory-screen').classList.remove('hidden');
                    if (this.sc >= 2600 && this.lv === 1) {
                        document.getElementById('btn-next').classList.remove('hidden');
                        document.getElementById('lv-req').classList.add('hidden');
                    } else if (this.lv === 1) {
                        document.getElementById('btn-next').classList.add('hidden');
                        document.getElementById('lv-req').classList.remove('hidden');
                    }
                    return;
                }
            }
        }

        // Draw Pacman
        p.m += p.md; if (p.m > 0.2 || p.m < 0) p.md *= -1;
        let a = (p.dx === 1) ? 0 : (p.dx === -1) ? Math.PI : (p.dy === -1) ? 1.5 * Math.PI : 0.5 * Math.PI;
        ctx.fillStyle = 'yellow'; ctx.beginPath(); ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, 9, a + p.m * Math.PI, a + (2 - p.m) * Math.PI);
        ctx.fill();

        // Ghosts logic
        this.ghs.forEach(g => {
            if (g.rt > 0) {
                g.rt--;
                if (g.rt === 0) { g.x = 270; g.y = 230; g.dx = 0; g.dy = -1; }
                return;
            }

            let s = (this.lv === 1 ? 2 : 2.5);
            if (this.pT > 0) s *= 0.6; // Slightly faster while frightened to be challenging

            // AI Decision at tile centers
            if (Math.abs((g.x - 10) % 20) < s && Math.abs((g.y - 10) % 20) < s) {
                let target = this.getGhostTarget(g);
                let ds = [[0, -1], [0, 1], [-1, 0], [1, 0]].filter(d =>
                    (d[0] != -g.dx || d[1] != -g.dy) && this.can(g, d[0], d[1], true)
                );

                if (g.y > 180 && g.y < 250 && g.x > 220 && g.x < 340) { // Move out of house
                    g.dx = 0; g.dy = -1; g.x = 270;
                } else if (ds.length) {
                    // Pick direction closest to target
                    ds.sort((a, b) => {
                        let d1 = Math.hypot(g.x + a[0] * 20 - target.x, g.y + a[1] * 20 - target.y);
                        let d2 = Math.hypot(g.x + b[0] * 20 - target.x, g.y + b[1] * 20 - target.y);
                        return d1 - d2;
                    });

                    // Add some randomness for certain ghosts or if frightened
                    let d = (this.pT > 0 || g.id === 'clyde' && Math.random() < 0.2)
                        ? ds[Math.floor(Math.random() * ds.length)]
                        : ds[0];

                    g.dx = d[0]; g.dy = d[1];
                    g.x = Math.round((g.x - 10) / 20) * 20 + 10;
                    g.y = Math.round((g.y - 10) / 20) * 20 + 10;
                }
            }

            if (this.can(g, g.dx, g.dy, true)) {
                g.x += g.dx * s; g.y += g.dy * s;
            } else {
                g.dx *= -1; g.dy *= -1;
            }

            if (g.x < 0) g.x = 560; if (g.x > 560) g.x = 0;

            // Render Ghost
            let c = (this.pT > 0 && Math.floor(Date.now() / 200) % 2 == 0) ? '#fff' : (this.pT > 0 ? '#2121ff' : g.c);
            ctx.shadowBlur = 10; ctx.shadowColor = c;
            ctx.fillStyle = c; ctx.beginPath(); ctx.arc(g.x, g.y, 9, Math.PI, 0); ctx.lineTo(g.x + 9, g.y + 10);
            for (let i = 0; i < 3; i++) ctx.arc(g.x + 6 - i * 6, g.y + 10, 3, 0, Math.PI);
            ctx.fill();

            ctx.shadowBlur = 0;
            ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(g.x - 3.5, g.y - 2, 2.5, 0, 7); ctx.arc(g.x + 3.5, g.y - 2, 2.5, 0, 7); ctx.fill();
            ctx.fillStyle = '#000'; ctx.beginPath();
            ctx.arc(g.x - 3.5 + (g.dx * 1.4), g.y - 2 + (g.dy * 1.4), 1.5, 0, 7);
            ctx.arc(g.x + 3.5 + (g.dx * 1.4), g.y - 2 + (g.dy * 1.4), 1.5, 0, 7);
            ctx.fill();

            // Collision
            if (Math.hypot(p.x - g.x, p.y - g.y) < 15) {
                if (this.pT > 0) {
                    this.sc += 200; // Classic ghost points
                    g.rt = 200;
                    g.x = -100; // Temporary hide
                    this.updateUI();
                } else {
                    this.li--;
                    this.updateUI();
                    this.pa = true;
                    if (this.li > 0) setTimeout(() => this.begin(false), 1000);
                    else {
                        document.getElementById('final-sc').innerText = this.sc;
                        document.getElementById('over-screen').classList.remove('hidden');
                    }
                }
            }
        });
        this.aId = requestAnimationFrame(() => this.loop());
    }
}

const game = new Game();

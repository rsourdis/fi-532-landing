/**
 * iOS App Store Screenshot Generator
 * Generates 5 screenshots at 1242×2688 px (414×896 @3x)
 */

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appScreensDir = path.join(__dirname, '../src/assets/app-screens');
const outputDir = path.join(__dirname, '../src/assets/ios-images');

function toBase64(filename) {
  const buf = fs.readFileSync(path.join(appScreensDir, filename));
  return `data:image/png;base64,${buf.toString('base64')}`;
}

const img = {
  home:        toBase64('Home.png'),
  tx:          toBase64('Transactions.png'),
  voice:       toBase64('AI Voice Transcript.png'),
  recurring:   toBase64('Recurring- Subscriptions.png'),
  onboard1:    toBase64('Onboarding step 1.png'),
  onboard4:    toBase64('Onboarding step 4.png'),
};

// ─── Phone Mockup CSS (shared) ───────────────────────────────────────────────
const phoneCss = `
  .phone {
    position: relative;
    background: #0a0a0a;
    border-radius: 46px;
    padding: 13px;
    box-shadow:
      0 60px 120px rgba(0,0,0,0.55),
      0 0 0 1px rgba(255,255,255,0.08),
      inset 0 0 0 1px rgba(255,255,255,0.04);
  }
  .phone-screen {
    width: 100%; height: 100%;
    border-radius: 34px;
    overflow: hidden;
    background: #f5f5f4;
    position: relative;
  }
  .phone-screen img {
    width: 100%; height: 100%;
    object-fit: cover;
    object-position: top;
    display: block;
  }
  .dynamic-island {
    position: absolute;
    top: 17px; left: 50%;
    transform: translateX(-50%);
    width: 88px; height: 24px;
    background: #000;
    border-radius: 20px;
    z-index: 20;
  }
`;

// ─── Fonts (system stack — crisp on macOS Chromium) ──────────────────────────
const gfonts = `<style>
  :root {
    --font-display: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', 'Arial', sans-serif;
    --font-body:    -apple-system, BlinkMacSystemFont, 'SF Pro Text',    'Helvetica Neue', 'Arial', sans-serif;
  }
</style>`;

// ════════════════════════════════════════════════════════════════════════════
// SCREEN 1 — Dark Hero · "The 50/30/20 rule, automated."
// ════════════════════════════════════════════════════════════════════════════
function screen1() {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8">${gfonts}
<style>
* { margin:0; padding:0; box-sizing:border-box; }
html,body { width:414px; height:896px; overflow:hidden; }
body {
  background: #0b111e;
  font-family: var(--font-body);
}
.bg {
  width:414px; height:896px;
  background: linear-gradient(165deg, #0b111e 0%, #0d1e30 50%, #091420 100%);
  position: relative; overflow: hidden;
}
.glow-tl {
  position:absolute; width:320px; height:320px; border-radius:50%;
  background: radial-gradient(circle, rgba(20,184,166,0.18) 0%, transparent 70%);
  top:-80px; left:-60px;
}
.glow-br {
  position:absolute; width:260px; height:260px; border-radius:50%;
  background: radial-gradient(circle, rgba(20,184,166,0.12) 0%, transparent 70%);
  bottom:160px; right:-60px;
}
.content {
  position: relative; z-index:10;
  padding: 52px 28px 0;
}
.badge {
  display: inline-flex; align-items: center; gap: 6px;
  background: rgba(20,184,166,0.12);
  border: 1px solid rgba(20,184,166,0.35);
  border-radius: 20px;
  padding: 6px 14px;
  color: #14b8a6;
  font-size: 11px; font-weight: 700;
  letter-spacing: 1.2px; text-transform: uppercase;
  margin-bottom: 20px;
}
.badge-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: #14b8a6;
}
h1 {
  font-family: var(--font-display);
  font-size: 40px; font-weight: 800;
  color: #ffffff;
  line-height: 1.08;
  margin-bottom: 12px;
}
h1 em {
  font-style: normal;
  color: #14b8a6;
}
.sub {
  font-size: 14px; font-weight: 500;
  color: rgba(255,255,255,0.5);
  line-height: 1.6;
  margin-bottom: 28px;
  max-width: 300px;
}
.rule-row {
  display: flex; gap: 10px;
  margin-bottom: 32px;
}
.rule-card {
  flex: 1;
  border-radius: 18px;
  padding: 14px 8px 12px;
  text-align: center;
  border: 1px solid rgba(255,255,255,0.08);
}
.rule-card.needs  { background: rgba(20,184,166,0.1);  border-color: rgba(20,184,166,0.25); }
.rule-card.wants  { background: rgba(245,158,11,0.1);  border-color: rgba(245,158,11,0.25); }
.rule-card.savings{ background: rgba(52,211,153,0.1);  border-color: rgba(52,211,153,0.25); }
.rule-pct {
  font-family: var(--font-display);
  font-size: 26px; font-weight: 800;
  line-height: 1; margin-bottom: 4px;
}
.needs  .rule-pct { color: #14b8a6; }
.wants  .rule-pct { color: #f59e0b; }
.savings.rule-pct { color: #34d399; }
.savings .rule-pct { color: #34d399; }
.rule-lbl {
  font-size: 11px; font-weight: 600;
  color: rgba(255,255,255,0.45);
  text-transform: uppercase; letter-spacing: 0.8px;
}
.divider {
  width: 100%; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  margin-bottom: 28px;
}
.stats-row {
  display: flex; gap: 20px; margin-bottom: 0;
}
.stat { text-align: center; }
.stat-val {
  font-family: var(--font-display);
  font-size: 22px; font-weight: 800; color: #fff;
}
.stat-lbl {
  font-size: 10px; font-weight: 600;
  color: rgba(255,255,255,0.35);
  text-transform: uppercase; letter-spacing: 1px;
}
${phoneCss}
.phone-wrap {
  position: absolute;
  bottom: -16px; left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}
.phone-wrap .phone {
  width: 238px; height: 516px;
}
</style>
</head><body>
<div class="bg">
  <div class="glow-tl"></div>
  <div class="glow-br"></div>
  <div class="content">
    <h1>The 50/30/20<br>rule, <em>automated.</em></h1>
    <p class="sub">See exactly where your money goes — needs, wants &amp; savings — every single month.</p>
    <div class="rule-row">
      <div class="rule-card needs">
        <div class="rule-pct">50%</div>
        <div class="rule-lbl">Needs</div>
      </div>
      <div class="rule-card wants">
        <div class="rule-pct">30%</div>
        <div class="rule-lbl">Wants</div>
      </div>
      <div class="rule-card savings">
        <div class="rule-pct">20%</div>
        <div class="rule-lbl">Savings</div>
      </div>
    </div>
    <div class="divider"></div>
  </div>
  <div class="phone-wrap">
    <div class="phone">
      <div class="dynamic-island"></div>
      <div class="phone-screen"><img src="${img.home}" alt=""></div>
    </div>
  </div>
</div>
</body></html>`;
}

// ════════════════════════════════════════════════════════════════════════════
// SCREEN 2 — White · "Every transaction, accounted for."
// ════════════════════════════════════════════════════════════════════════════
function screen2() {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8">${gfonts}
<style>
* { margin:0; padding:0; box-sizing:border-box; }
html,body { width:414px; height:896px; overflow:hidden; }
body {
  background: #ffffff;
  font-family: var(--font-body);
}
.bg {
  width:414px; height:896px;
  background: #ffffff;
  position: relative; overflow: hidden;
}
/* Subtle top gradient accent */
.top-accent {
  position: absolute;
  top: 0; left: 0; right: 0; height: 300px;
  background: linear-gradient(180deg, #f0fdfa 0%, transparent 100%);
}
.content {
  position: relative; z-index:10;
  padding: 52px 28px 0;
}
.label {
  font-size: 11px; font-weight: 700;
  color: #14b8a6;
  letter-spacing: 1.8px; text-transform: uppercase;
  margin-bottom: 14px;
  display: flex; align-items: center; gap: 8px;
}
.label::before {
  content: '';
  display: block; width: 24px; height: 2px;
  background: #14b8a6; border-radius: 2px;
}
h1 {
  font-family: var(--font-display);
  font-size: 42px; font-weight: 800;
  color: #1c1917;
  line-height: 1.06;
  margin-bottom: 14px;
}
h1 em {
  font-style: normal;
  color: #14b8a6;
}
.sub {
  font-size: 14px; font-weight: 500;
  color: #78716c;
  line-height: 1.6;
  margin-bottom: 28px;
  max-width: 310px;
}
.feature-list {
  display: flex; flex-direction: column; gap: 10px;
  margin-bottom: 28px;
}
.feature-item {
  display: flex; align-items: center; gap: 10px;
  font-size: 13px; font-weight: 600; color: #292524;
}
.feature-dot {
  width: 22px; height: 22px; border-radius: 50%;
  background: #f0fdfa;
  border: 1.5px solid #14b8a6;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.check {
  width: 10px; height: 7px;
  border-left: 2px solid #14b8a6;
  border-bottom: 2px solid #14b8a6;
  transform: rotate(-45deg) translateY(-1px);
}
${phoneCss}
.phone-wrap {
  position: absolute;
  bottom: -14px; left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}
.phone-wrap .phone {
  width: 248px; height: 538px;
  background: #1a1a1a;
}
/* floating chips */
.chip {
  position: absolute;
  background: white;
  border-radius: 14px;
  padding: 8px 14px;
  font-size: 12px; font-weight: 600;
  color: #1c1917;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  border: 1px solid #f5f5f4;
  white-space: nowrap;
}
.chip.income { bottom: 320px; left: 14px; }
.chip.filter { bottom: 260px; left: 14px; }
.chip.cat    { bottom: 320px; right: 14px; }
.chip-dot {
  display: inline-block;
  width: 8px; height: 8px;
  border-radius: 50%;
  margin-right: 5px;
  vertical-align: middle;
}
</style>
</head><body>
<div class="bg">
  <div class="top-accent"></div>
  <div class="content">
    <div class="label">Money Flow</div>
    <h1>Every transaction,<br><em>accounted for.</em></h1>
    <p class="sub">Log income, expenses &amp; transfers instantly. Filter by date, category, or type.</p>
    <div class="feature-list">
      <div class="feature-item">
        <div class="feature-dot"><div class="check"></div></div>
        Income, expenses &amp; transfers in one place
      </div>
      <div class="feature-item">
        <div class="feature-dot"><div class="check"></div></div>
        Filter by category, date, or type
      </div>
      <div class="feature-item">
        <div class="feature-dot"><div class="check"></div></div>
        Auto-categorized spending
      </div>
    </div>
  </div>
  <div class="phone-wrap">
    <div class="phone">
      <div class="dynamic-island"></div>
      <div class="phone-screen"><img src="${img.tx}" alt=""></div>
    </div>
  </div>
  <!-- floating chips -->
  <div class="chip income"><span class="chip-dot" style="background:#34d399"></span>+€546 Income</div>
  <div class="chip filter">📅 Feb 2026</div>
  <div class="chip cat">🏷 All categories</div>
</div>
</body></html>`;
}

// ════════════════════════════════════════════════════════════════════════════
// SCREEN 3 — Dark warm · "Just say it. Done."
// ════════════════════════════════════════════════════════════════════════════
function screen3() {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8">${gfonts}
<style>
* { margin:0; padding:0; box-sizing:border-box; }
html,body { width:414px; height:896px; overflow:hidden; }
body {
  background: #131310;
  font-family: var(--font-body);
}
.bg {
  width:414px; height:896px;
  background: linear-gradient(160deg, #131310 0%, #1a1a14 40%, #0d1a18 100%);
  position: relative; overflow: hidden;
}
.glow-center {
  position:absolute; width:380px; height:380px; border-radius:50%;
  background: radial-gradient(circle, rgba(20,184,166,0.14) 0%, transparent 65%);
  top:80px; left:50%; transform:translateX(-50%);
}
.content {
  position: relative; z-index:10;
  padding: 52px 28px 0;
  text-align: center;
}
.label {
  font-size: 11px; font-weight: 700;
  color: #14b8a6;
  letter-spacing: 1.8px; text-transform: uppercase;
  margin-bottom: 16px;
}
.mic-container {
  width: 80px; height: 80px; border-radius: 50%;
  background: linear-gradient(135deg, #14b8a6, #0d9488);
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 20px;
  box-shadow: 0 8px 32px rgba(20,184,166,0.4);
  position: relative;
}
.mic-ring {
  position:absolute; width:100px; height:100px; border-radius:50%;
  border: 2px solid rgba(20,184,166,0.3);
  top:50%; left:50%; transform:translate(-50%,-50%);
}
.mic-ring2 {
  position:absolute; width:122px; height:122px; border-radius:50%;
  border: 1.5px solid rgba(20,184,166,0.15);
  top:50%; left:50%; transform:translate(-50%,-50%);
}
.mic-icon {
  font-size: 32px;
  line-height: 1;
}
h1 {
  font-family: var(--font-display);
  font-size: 46px; font-weight: 800;
  color: #ffffff;
  line-height: 1.05;
  margin-bottom: 12px;
}
h1 em {
  font-style: normal;
  color: #14b8a6;
}
.sub {
  font-size: 15px; font-weight: 500;
  color: rgba(255,255,255,0.45);
  line-height: 1.55;
  margin-bottom: 24px;
  max-width: 280px;
  margin-left: auto; margin-right: auto;
}
/* voice transcript bubbles */
.bubbles {
  display: flex; flex-direction: column; gap: 8px;
  align-items: center;
  margin-bottom: 28px;
}
.bubble {
  border-radius: 18px;
  padding: 10px 18px;
  font-size: 13px; font-weight: 600;
  max-width: 280px;
}
.bubble.user {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.8);
}
.bubble.ai {
  background: linear-gradient(135deg, #14b8a6, #0d9488);
  color: white;
  align-self: center;
}
.bubble .tag {
  font-size: 11px;
  opacity: 0.7;
  margin-top: 3px;
}
${phoneCss}
.phone-wrap {
  position: absolute;
  bottom: -18px; left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}
.phone-wrap .phone {
  width: 234px; height: 508px;
  background: #111;
}
</style>
</head><body>
<div class="bg">
  <div class="glow-center"></div>
  <div class="content">
    <div class="label">AI Powered</div>
    <div class="mic-container">
      <div class="mic-ring"></div>
      <div class="mic-ring2"></div>
      <div class="mic-icon">🎙️</div>
    </div>
    <h1>Just say it.<br><em>Done.</em></h1>
    <p class="sub">Log any expense with your voice in seconds — no typing, no tapping.</p>
    <div class="bubbles">
      <div class="bubble user">"Coffee at Blue Bottle, 6 fifty"</div>
      <div class="bubble ai">
        Logged: Coffee · $6.50 ✓
        <div class="tag">Wants · AI Chat</div>
      </div>
    </div>
  </div>
  <div class="phone-wrap">
    <div class="phone">
      <div class="dynamic-island"></div>
      <div class="phone-screen"><img src="${img.voice}" alt=""></div>
    </div>
  </div>
</div>
</body></html>`;
}

// ════════════════════════════════════════════════════════════════════════════
// SCREEN 4 — Warm light · "Never miss a bill again."
// ════════════════════════════════════════════════════════════════════════════
function screen4() {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8">${gfonts}
<style>
* { margin:0; padding:0; box-sizing:border-box; }
html,body { width:414px; height:896px; overflow:hidden; }
body {
  background: #fafaf9;
  font-family: var(--font-body);
}
.bg {
  width:414px; height:896px;
  background: #fafaf9;
  position: relative; overflow: hidden;
}
/* bottom teal gradient */
.bottom-glow {
  position:absolute; bottom:0; left:0; right:0; height:360px;
  background: linear-gradient(0deg, #f0fdfa 0%, transparent 100%);
}
.content {
  position: relative; z-index:10;
  padding: 52px 28px 0;
}
.label {
  font-size: 11px; font-weight: 700;
  color: #14b8a6;
  letter-spacing: 1.8px; text-transform: uppercase;
  margin-bottom: 14px;
  display: flex; align-items: center; gap: 8px;
}
.label::before {
  content: '';
  display: block; width: 20px; height: 2px;
  background: #14b8a6; border-radius: 2px;
}
h1 {
  font-family: var(--font-display);
  font-size: 40px; font-weight: 800;
  color: #1c1917;
  line-height: 1.08;
  margin-bottom: 12px;
}
h1 em {
  font-style: normal;
  color: #14b8a6;
}
.sub {
  font-size: 14px; font-weight: 500;
  color: #78716c;
  line-height: 1.6;
  margin-bottom: 24px;
  max-width: 310px;
}
/* total badge */
.total-badge {
  display: inline-flex; align-items: center; gap: 10px;
  background: white;
  border: 1px solid #e7e5e4;
  border-radius: 16px;
  padding: 12px 18px;
  margin-bottom: 20px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
}
.total-val {
  font-family: var(--font-display);
  font-size: 24px; font-weight: 800; color: #1c1917;
}
.total-lbl {
  font-size: 12px; font-weight: 600; color: #a8a29e;
}
${phoneCss}
.phone-wrap {
  position: absolute;
  bottom: -14px; left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}
.phone-wrap .phone {
  width: 248px; height: 538px;
  background: #1a1a1a;
}
/* floating subscription cards */
.sub-card {
  position: absolute;
  background: white;
  border-radius: 16px;
  padding: 10px 14px;
  display: flex; align-items: center; gap: 10px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  border: 1px solid #f0f0ef;
  white-space: nowrap;
  z-index: 20;
}
.sub-icon {
  width: 32px; height: 32px; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-size: 16px;
}
.sub-name { font-size: 12px; font-weight: 700; color: #1c1917; }
.sub-price { font-size: 12px; font-weight: 600; color: #78716c; margin-top:1px; }
.sub-check {
  margin-left: auto;
  width: 20px; height: 20px; border-radius: 50%;
  background: #f0fdfa; border: 1.5px solid #14b8a6;
  display: flex; align-items: center; justify-content: center;
  font-size: 10px; color: #14b8a6;
}
/* Feature pills at bottom */
.pills {
  position: absolute;
  bottom: 32px; left: 0; right: 0;
  display: flex; justify-content: center; gap: 8px;
  z-index: 20;
}
.pill {
  background: white;
  border: 1px solid #e7e5e4;
  border-radius: 20px;
  padding: 8px 14px;
  font-size: 11px; font-weight: 600; color: #57534e;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
</style>
</head><body>
<div class="bg">
  <div class="bottom-glow"></div>
  <div class="content">
    <div class="label">Bill Planner</div>
    <h1>Never miss<br>a bill <em>again.</em></h1>
    <p class="sub">All recurring payments in one place. Auto-create transactions and track what's due.</p>
    <div class="total-badge">
      <div>
        <div class="total-val">€10.98</div>
        <div class="total-lbl">Total / month</div>
      </div>
    </div>
  </div>
  <!-- floating sub cards -->
  <div class="sub-card" style="bottom:348px; left:10px;">
    <div class="sub-icon" style="background:#fff3e0;">☁️</div>
    <div>
      <div class="sub-name">iCloud</div>
      <div class="sub-price">€4.99 · Monthly</div>
    </div>
    <div class="sub-check">✓</div>
  </div>
  <div class="sub-card" style="bottom:290px; right:10px;">
    <div class="sub-icon" style="background:#fce4ec;">🎵</div>
    <div>
      <div class="sub-name">Oura</div>
      <div class="sub-price">€5.99 · Monthly</div>
    </div>
    <div class="sub-check">✓</div>
  </div>
  <div class="phone-wrap">
    <div class="phone">
      <div class="dynamic-island"></div>
      <div class="phone-screen"><img src="${img.recurring}" alt=""></div>
    </div>
  </div>
  <div class="pills">
    <div class="pill">📅 Track due dates</div>
    <div class="pill">⚡ Auto-create</div>
    <div class="pill">✓ Mark paid</div>
  </div>
</div>
</body></html>`;
}

// ════════════════════════════════════════════════════════════════════════════
// SCREEN 5 — Teal gradient · "Built for real households."
// ════════════════════════════════════════════════════════════════════════════
function screen5() {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8">${gfonts}
<style>
* { margin:0; padding:0; box-sizing:border-box; }
html,body { width:414px; height:896px; overflow:hidden; }
body { font-family: var(--font-body); }
.bg {
  width:414px; height:896px;
  background: linear-gradient(155deg, #134e4a 0%, #0f766e 35%, #0d9488 65%, #14b8a6 100%);
  position: relative; overflow: hidden;
}
.glow-bg {
  position:absolute; width:400px; height:400px; border-radius:50%;
  background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%);
  top:-100px; right:-100px;
}
.content {
  position: relative; z-index:10;
  padding: 52px 28px 0;
  text-align: center;
}
.label {
  font-size: 11px; font-weight: 700;
  color: rgba(255,255,255,0.6);
  letter-spacing: 1.8px; text-transform: uppercase;
  margin-bottom: 16px;
}
h1 {
  font-family: var(--font-display);
  font-size: 40px; font-weight: 800;
  color: #ffffff;
  line-height: 1.08;
  margin-bottom: 12px;
}
.sub {
  font-size: 14px; font-weight: 500;
  color: rgba(255,255,255,0.65);
  line-height: 1.6;
  max-width: 300px;
  margin: 0 auto;
}
/* Two phones side by side — each 183px wide fits two in 414px */
.phones-row {
  position: absolute;
  bottom: 88px;
  left: 0; right: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 14px;
  z-index: 10;
}
/* Self-contained phone styles (no shared phoneCss — avoids wrong border-radius) */
.ph {
  position: relative;
  width: 183px; height: 396px;
  background: #0a0a0a;
  border-radius: 37px;
  padding: 11px;
  flex-shrink: 0;
}
.ph-a {
  transform: rotate(-3deg) translateY(12px);
  box-shadow: -12px 40px 70px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08);
}
.ph-b {
  transform: rotate(3deg) translateY(12px);
  box-shadow:  12px 40px 70px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08);
}
.ph-screen {
  width: 100%; height: 100%;
  border-radius: 27px;
  overflow: hidden;
  background: #f5f5f4;
}
.ph-screen img {
  width: 100%; height: 100%;
  object-fit: cover; object-position: top;
  display: block;
}
.ph-island {
  position: absolute;
  top: 14px; left: 50%;
  transform: translateX(-50%);
  width: 70px; height: 19px;
  background: #000;
  border-radius: 16px;
  z-index: 20;
}
/* bottom feature row */
.feature-row {
  position: absolute;
  bottom: 26px;
  left: 0; right: 0;
  display: flex;
  justify-content: center;
  gap: 20px;
  z-index: 20;
}
.feat { text-align: center; }
.feat-icon { font-size: 18px; margin-bottom: 4px; }
.feat-lbl {
  font-size: 11px; font-weight: 600;
  color: rgba(255,255,255,0.65);
  text-transform: uppercase; letter-spacing: 0.8px;
}
.feat-val {
  font-family: var(--font-display);
  font-size: 20px; font-weight: 800; color: white;
  line-height: 1;
}
.feat-sep {
  width: 1px;
  background: rgba(255,255,255,0.2);
  align-self: stretch;
}
</style>
</head><body>
<div class="bg">
  <div class="glow-bg"></div>
  <div class="content">
    <div class="label">Get Started Free</div>
    <h1>Built for real<br>households.</h1>
    <p class="sub">Set up your 50/30/20 budget, track every dollar, and collaborate with your household — all in one app.</p>
  </div>
  <!-- Two properly-sized phones -->
  <div class="phones-row">
    <div class="ph ph-a">
      <div class="ph-island"></div>
      <div class="ph-screen"><img src="${img.onboard1}" alt=""></div>
    </div>
    <div class="ph ph-b">
      <div class="ph-island"></div>
      <div class="ph-screen"><img src="${img.home}" alt=""></div>
    </div>
  </div>
  <!-- bottom feature stats -->
  <div class="feature-row">
    <div class="feat">
      <div class="feat-icon">🆓</div>
      <div class="feat-val">Free</div>
      <div class="feat-lbl">Forever Plan</div>
    </div>
    <div class="feat-sep"></div>
    <div class="feat">
      <div class="feat-icon">🤖</div>
      <div class="feat-val">AI</div>
      <div class="feat-lbl">Voice Logging</div>
    </div>
    <div class="feat-sep"></div>
    <div class="feat">
      <div class="feat-icon">📊</div>
      <div class="feat-val">50/30/20</div>
      <div class="feat-lbl">Automated</div>
    </div>
  </div>
</div>
</body></html>`;
}

// ─── Generate all screenshots ─────────────────────────────────────────────
async function main() {
  fs.mkdirSync(outputDir, { recursive: true });

  const screens = [
    { name: 'screen-1-hero',         html: screen1() },
    { name: 'screen-2-transactions', html: screen2() },
    { name: 'screen-3-ai-voice',     html: screen3() },
    { name: 'screen-4-recurring',    html: screen4() },
    { name: 'screen-5-overview',     html: screen5() },
  ];

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  // 414 × 896 logical px @ 3× = 1242 × 2688 physical px
  await page.setViewport({ width: 414, height: 896, deviceScaleFactor: 3 });

  for (const screen of screens) {
    console.log(`Rendering ${screen.name}...`);
    await page.setContent(screen.html, { waitUntil: 'load', timeout: 30000 });
    // Small wait for any CSS transitions
    await new Promise(r => setTimeout(r, 400));
    const outPath = path.join(outputDir, `${screen.name}.png`);
    await page.screenshot({ path: outPath, type: 'png', fullPage: false });
    console.log(`  ✓ Saved → ${outPath}`);
  }

  await browser.close();
  console.log('\n✅ All 5 iOS App Store screenshots generated at 1242×2688 px');
}

main().catch(err => { console.error(err); process.exit(1); });

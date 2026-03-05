/**
 * iPad App Store Screenshot Generator
 * Generates 5 screenshots at 2064×2752 px (1032×1376 @2x)
 */

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appScreensDir = path.join(__dirname, '../src/assets/app-screens');
const outputDir = path.join(__dirname, '../src/assets/ios-ipad-screens');

function toBase64(filename) {
  const buf = fs.readFileSync(path.join(appScreensDir, filename));
  return `data:image/png;base64,${buf.toString('base64')}`;
}

const img = {
  home:      toBase64('Home.png'),
  tx:        toBase64('Transactions.png'),
  voice:     toBase64('AI Voice Transcript.png'),
  recurring: toBase64('Recurring- Subscriptions.png'),
  onboard1:  toBase64('Onboarding step 1.png'),
  onboard4:  toBase64('Onboarding step 4.png'),
};

const gfonts = `<style>
  :root {
    --font-display: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', 'Arial', sans-serif;
    --font-body:    -apple-system, BlinkMacSystemFont, 'SF Pro Text',    'Helvetica Neue', 'Arial', sans-serif;
  }
</style>`;

// ─── Shared phone CSS — 400px wide (centered layouts) ─────────────────────
// Scale from 238px iPhone ref: 400/238 = 1.681
const phoneCss = `
  .phone {
    position: relative;
    background: #0a0a0a;
    border-radius: 76px;
    padding: 22px;
    box-shadow:
      0 80px 160px rgba(0,0,0,0.55),
      0 0 0 1px rgba(255,255,255,0.08),
      inset 0 0 0 1px rgba(255,255,255,0.04);
  }
  .phone-screen {
    width: 100%; height: 100%;
    border-radius: 56px;
    overflow: hidden;
    background: #f5f5f4;
    position: relative;
  }
  .phone-screen img {
    width: 100%; height: 100%;
    object-fit: cover; object-position: top;
    display: block;
  }
  .dynamic-island {
    position: absolute;
    top: 28px; left: 50%;
    transform: translateX(-50%);
    width: 148px; height: 40px;
    background: #000;
    border-radius: 30px;
    z-index: 20;
  }
`;

// ════════════════════════════════════════════════════════════════════════════
// SCREEN 1 — Dark Hero · "The 50/30/20 rule, automated."  [centered]
// ════════════════════════════════════════════════════════════════════════════
function screen1() {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8">${gfonts}
<style>
* { margin:0; padding:0; box-sizing:border-box; }
html,body { width:1032px; height:1376px; overflow:hidden; }
body { background: #0b111e; font-family: var(--font-body); }
.bg {
  width:1032px; height:1376px;
  background: linear-gradient(165deg, #0b111e 0%, #0d1e30 50%, #091420 100%);
  position: relative; overflow: hidden;
}
.glow-tl {
  position:absolute; width:560px; height:560px; border-radius:50%;
  background: radial-gradient(circle, rgba(20,184,166,0.18) 0%, transparent 70%);
  top:-140px; left:-100px;
}
.glow-br {
  position:absolute; width:440px; height:440px; border-radius:50%;
  background: radial-gradient(circle, rgba(20,184,166,0.12) 0%, transparent 70%);
  bottom:280px; right:-100px;
}
.content {
  position: relative; z-index:10;
  padding: 72px 80px 0;
  max-width: 900px; margin: 0 auto;
}
h1 {
  font-family: var(--font-display);
  font-size: 64px; font-weight: 800;
  color: #ffffff; line-height: 1.08;
  margin-bottom: 16px;
}
h1 em { font-style: normal; color: #14b8a6; }
.sub {
  font-size: 20px; font-weight: 500;
  color: rgba(255,255,255,0.5);
  line-height: 1.6; margin-bottom: 36px;
  max-width: 680px;
}
.rule-row { display: flex; gap: 16px; margin-bottom: 0; }
.rule-card {
  flex: 1; border-radius: 24px;
  padding: 20px 12px 18px;
  text-align: center;
  border: 1px solid rgba(255,255,255,0.08);
}
.rule-card.needs  { background: rgba(20,184,166,0.1);  border-color: rgba(20,184,166,0.25); }
.rule-card.wants  { background: rgba(245,158,11,0.1);  border-color: rgba(245,158,11,0.25); }
.rule-card.savings{ background: rgba(52,211,153,0.1);  border-color: rgba(52,211,153,0.25); }
.rule-pct {
  font-family: var(--font-display);
  font-size: 36px; font-weight: 800;
  line-height: 1; margin-bottom: 6px;
}
.needs   .rule-pct { color: #14b8a6; }
.wants   .rule-pct { color: #f59e0b; }
.savings .rule-pct { color: #34d399; }
.rule-lbl {
  font-size: 13px; font-weight: 600;
  color: rgba(255,255,255,0.45);
  text-transform: uppercase; letter-spacing: 0.8px;
}
${phoneCss}
.phone-wrap {
  position: absolute;
  bottom: -20px; left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}
.phone-wrap .phone { width: 400px; height: 867px; }
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
        <div class="rule-pct">50%</div><div class="rule-lbl">Needs</div>
      </div>
      <div class="rule-card wants">
        <div class="rule-pct">30%</div><div class="rule-lbl">Wants</div>
      </div>
      <div class="rule-card savings">
        <div class="rule-pct">20%</div><div class="rule-lbl">Savings</div>
      </div>
    </div>
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
// SCREEN 2 — White · "Every transaction, accounted for."  [split: text|phone]
// ════════════════════════════════════════════════════════════════════════════
function screen2() {
  // Phone: 440px wide × 953px tall (scale 440/238=1.849)
  return `<!DOCTYPE html><html><head><meta charset="UTF-8">${gfonts}
<style>
* { margin:0; padding:0; box-sizing:border-box; }
html,body { width:1032px; height:1376px; overflow:hidden; }
body { background:#ffffff; font-family: var(--font-body); }
.bg {
  width:1032px; height:1376px;
  background: #ffffff;
  position: relative; overflow: hidden;
}
.top-accent {
  position:absolute; top:0; left:0; right:0; height:480px;
  background: linear-gradient(180deg, #f0fdfa 0%, transparent 100%);
}
/* left content column */
.content {
  position: relative; z-index:10;
  padding: 100px 0 0 72px;
  width: 520px;
}
.label {
  font-size: 14px; font-weight: 700; color: #14b8a6;
  letter-spacing: 1.8px; text-transform: uppercase;
  margin-bottom: 20px;
  display: flex; align-items: center; gap: 12px;
}
.label::before {
  content:''; display:block; width:32px; height:2px;
  background:#14b8a6; border-radius:2px;
}
h1 {
  font-family: var(--font-display);
  font-size: 60px; font-weight: 800;
  color: #1c1917; line-height: 1.06;
  margin-bottom: 20px;
}
h1 em { font-style: normal; color: #14b8a6; }
.sub {
  font-size: 19px; font-weight: 500;
  color: #78716c; line-height: 1.6;
  margin-bottom: 40px;
}
.feature-list { display: flex; flex-direction: column; gap: 18px; }
.feature-item {
  display: flex; align-items: center; gap: 16px;
  font-size: 18px; font-weight: 600; color: #292524;
}
.feature-dot {
  width: 32px; height: 32px; border-radius: 50%;
  background: #f0fdfa; border: 2px solid #14b8a6;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.check {
  width: 13px; height: 9px;
  border-left: 2.5px solid #14b8a6;
  border-bottom: 2.5px solid #14b8a6;
  transform: rotate(-45deg) translateY(-1px);
}
/* right phone */
.phone-wrap {
  position: absolute;
  right: 46px; bottom: -20px;
  z-index: 10;
}
.phone-r {
  position: relative;
  width: 440px; height: 953px;
  background: #1a1a1a;
  border-radius: 85px; padding: 24px;
  box-shadow: 0 80px 160px rgba(0,0,0,0.22), 0 0 0 1px rgba(0,0,0,0.08);
}
.phone-r .screen {
  width:100%; height:100%; border-radius:63px;
  overflow:hidden; background:#f5f5f4;
}
.phone-r .screen img { width:100%; height:100%; object-fit:cover; object-position:top; display:block; }
.phone-r .di {
  position:absolute; top:31px; left:50%;
  transform:translateX(-50%);
  width:163px; height:44px;
  background:#000; border-radius:34px; z-index:20;
}
/* floating chips */
.chip {
  position:absolute; background:white; border-radius:20px;
  padding:12px 20px; font-size:15px; font-weight:600; color:#1c1917;
  box-shadow:0 4px 24px rgba(0,0,0,0.1); border:1px solid #f5f5f4;
  white-space:nowrap; z-index:20;
}
.chip-dot { display:inline-block; width:10px; height:10px; border-radius:50%; margin-right:7px; vertical-align:middle; }
</style>
</head><body>
<div class="bg">
  <div class="top-accent"></div>
  <div class="content">
    <div class="label">Money Flow</div>
    <h1>Every transaction,<br><em>accounted for.</em></h1>
    <p class="sub">Log income, expenses &amp; transfers instantly.<br>Filter by date, category, or type.</p>
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
    <div class="phone-r">
      <div class="di"></div>
      <div class="screen"><img src="${img.tx}" alt=""></div>
    </div>
  </div>
  <div class="chip" style="bottom:500px; left:20px;"><span class="chip-dot" style="background:#34d399"></span>+€546 Income</div>
  <div class="chip" style="bottom:424px; left:20px;">📅 Feb 2026</div>
</div>
</body></html>`;
}

// ════════════════════════════════════════════════════════════════════════════
// SCREEN 3 — Dark warm · "Just say it. Done."  [centered]
// ════════════════════════════════════════════════════════════════════════════
function screen3() {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8">${gfonts}
<style>
* { margin:0; padding:0; box-sizing:border-box; }
html,body { width:1032px; height:1376px; overflow:hidden; }
body { background: #131310; font-family: var(--font-body); }
.bg {
  width:1032px; height:1376px;
  background: linear-gradient(160deg, #131310 0%, #1a1a14 40%, #0d1a18 100%);
  position: relative; overflow: hidden;
}
.glow-center {
  position:absolute; width:640px; height:640px; border-radius:50%;
  background: radial-gradient(circle, rgba(20,184,166,0.14) 0%, transparent 65%);
  top:60px; left:50%; transform:translateX(-50%);
}
.content {
  position: relative; z-index:10;
  padding: 64px 80px 0;
  text-align: center;
}
.label {
  font-size: 14px; font-weight: 700; color: #14b8a6;
  letter-spacing: 1.8px; text-transform: uppercase;
  margin-bottom: 20px;
}
.mic-container {
  width: 110px; height: 110px; border-radius: 50%;
  background: linear-gradient(135deg, #14b8a6, #0d9488);
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 24px;
  box-shadow: 0 14px 48px rgba(20,184,166,0.4);
  position: relative;
}
.mic-ring {
  position:absolute; width:138px; height:138px; border-radius:50%;
  border: 2px solid rgba(20,184,166,0.3);
  top:50%; left:50%; transform:translate(-50%,-50%);
}
.mic-ring2 {
  position:absolute; width:168px; height:168px; border-radius:50%;
  border: 1.5px solid rgba(20,184,166,0.15);
  top:50%; left:50%; transform:translate(-50%,-50%);
}
.mic-icon { font-size: 44px; line-height: 1; }
h1 {
  font-family: var(--font-display);
  font-size: 72px; font-weight: 800;
  color: #ffffff; line-height: 1.05;
  margin-bottom: 14px;
}
h1 em { font-style: normal; color: #14b8a6; }
.sub {
  font-size: 20px; font-weight: 500;
  color: rgba(255,255,255,0.45); line-height: 1.55;
  margin-bottom: 28px;
  max-width: 520px; margin-left:auto; margin-right:auto;
}
.bubbles { display:flex; flex-direction:column; gap:12px; align-items:center; }
.bubble {
  border-radius: 26px; padding:15px 28px;
  font-size: 17px; font-weight: 600; max-width: 500px;
}
.bubble.user {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.8);
}
.bubble.ai {
  background: linear-gradient(135deg, #14b8a6, #0d9488);
  color: white;
}
.bubble .tag { font-size: 13px; opacity: 0.7; margin-top: 4px; }
${phoneCss}
.phone-wrap {
  position: absolute;
  bottom: -20px; left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}
.phone-wrap .phone { width: 400px; height: 867px; background: #111; }
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
// SCREEN 4 — Warm light · "Never miss a bill again."  [split: text|phone]
// ════════════════════════════════════════════════════════════════════════════
function screen4() {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8">${gfonts}
<style>
* { margin:0; padding:0; box-sizing:border-box; }
html,body { width:1032px; height:1376px; overflow:hidden; }
body { background: #fafaf9; font-family: var(--font-body); }
.bg {
  width:1032px; height:1376px;
  background: #fafaf9;
  position: relative; overflow: hidden;
}
.bottom-glow {
  position:absolute; bottom:0; left:0; right:0; height:560px;
  background: linear-gradient(0deg, #f0fdfa 0%, transparent 100%);
}
/* left content */
.content {
  position: relative; z-index:10;
  padding: 100px 0 0 72px;
  width: 520px;
}
.label {
  font-size: 14px; font-weight: 700; color: #14b8a6;
  letter-spacing: 1.8px; text-transform: uppercase;
  margin-bottom: 20px;
  display: flex; align-items: center; gap: 12px;
}
.label::before {
  content:''; display:block; width:28px; height:2px;
  background:#14b8a6; border-radius:2px;
}
h1 {
  font-family: var(--font-display);
  font-size: 60px; font-weight: 800;
  color: #1c1917; line-height: 1.08;
  margin-bottom: 18px;
}
h1 em { font-style: normal; color: #14b8a6; }
.sub {
  font-size: 19px; font-weight: 500;
  color: #78716c; line-height: 1.6;
  margin-bottom: 32px;
}
.total-badge {
  display: inline-flex; align-items: center;
  background: white; border: 1px solid #e7e5e4;
  border-radius: 20px; padding: 16px 24px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  margin-bottom: 36px;
}
.total-val {
  font-family: var(--font-display);
  font-size: 36px; font-weight: 800; color: #1c1917;
}
.total-lbl { font-size: 15px; font-weight: 600; color: #a8a29e; margin-top: 4px; }
/* feature chips at left bottom */
.feat-chips { display:flex; flex-direction:column; gap:14px; }
.feat-chip {
  display:inline-flex; align-items:center; gap:10px;
  font-size: 16px; font-weight: 600; color: #292524;
}
.feat-chip-dot {
  width:28px; height:28px; border-radius:50%;
  background:#f0fdfa; border:1.5px solid #14b8a6;
  display:flex; align-items:center; justify-content:center;
  font-size:14px; flex-shrink:0;
}
/* right phone */
.phone-wrap {
  position: absolute;
  right: 46px; bottom: -20px;
  z-index: 10;
}
.phone-r {
  position: relative;
  width: 440px; height: 953px;
  background: #1a1a1a;
  border-radius: 85px; padding: 24px;
  box-shadow: 0 80px 160px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.06);
}
.phone-r .screen {
  width:100%; height:100%; border-radius:63px;
  overflow:hidden; background:#f5f5f4;
}
.phone-r .screen img { width:100%; height:100%; object-fit:cover; object-position:top; display:block; }
.phone-r .di {
  position:absolute; top:31px; left:50%;
  transform:translateX(-50%);
  width:163px; height:44px;
  background:#000; border-radius:34px; z-index:20;
}
/* floating sub cards */
.sub-card {
  position:absolute; background:white; border-radius:22px;
  padding:14px 20px; display:flex; align-items:center; gap:14px;
  box-shadow:0 6px 28px rgba(0,0,0,0.1); border:1px solid #f0f0ef;
  white-space:nowrap; z-index:20;
}
.sub-icon { width:44px; height:44px; border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:22px; }
.sub-name { font-size:15px; font-weight:700; color:#1c1917; }
.sub-price { font-size:14px; font-weight:600; color:#78716c; margin-top:2px; }
.sub-check {
  margin-left:auto; width:26px; height:26px; border-radius:50%;
  background:#f0fdfa; border:1.5px solid #14b8a6;
  display:flex; align-items:center; justify-content:center;
  font-size:13px; color:#14b8a6;
}
</style>
</head><body>
<div class="bg">
  <div class="bottom-glow"></div>
  <div class="content">
    <div class="label">Bill Planner</div>
    <h1>Never miss<br>a bill <em>again.</em></h1>
    <p class="sub">All recurring payments in one place.<br>Auto-create transactions and track what's due.</p>
    <div class="total-badge">
      <div>
        <div class="total-val">€10.98</div>
        <div class="total-lbl">Total / month</div>
      </div>
    </div>
    <div class="feat-chips">
      <div class="feat-chip"><div class="feat-chip-dot">📅</div> Track due dates</div>
      <div class="feat-chip"><div class="feat-chip-dot">⚡</div> Auto-create transactions</div>
      <div class="feat-chip"><div class="feat-chip-dot">✓</div> Mark as paid instantly</div>
    </div>
  </div>
  <div class="sub-card" style="bottom:548px; left:18px;">
    <div class="sub-icon" style="background:#fff3e0;">☁️</div>
    <div><div class="sub-name">iCloud</div><div class="sub-price">€4.99 · Monthly</div></div>
    <div class="sub-check">✓</div>
  </div>
  <div class="sub-card" style="bottom:456px; left:18px;">
    <div class="sub-icon" style="background:#fce4ec;">🎵</div>
    <div><div class="sub-name">Oura</div><div class="sub-price">€5.99 · Monthly</div></div>
    <div class="sub-check">✓</div>
  </div>
  <div class="phone-wrap">
    <div class="phone-r">
      <div class="di"></div>
      <div class="screen"><img src="${img.recurring}" alt=""></div>
    </div>
  </div>
</div>
</body></html>`;
}

// ════════════════════════════════════════════════════════════════════════════
// SCREEN 5 — Teal gradient · "Built for real households."  [two phones]
// ════════════════════════════════════════════════════════════════════════════
function screen5() {
  // Two phones 390px each + 24px gap = 804px, centered in 1032px (114px margins)
  // Scale 390/238=1.639 → r:75px  p:21px  screen-r:56px  DI:144×39px  top:28px
  return `<!DOCTYPE html><html><head><meta charset="UTF-8">${gfonts}
<style>
* { margin:0; padding:0; box-sizing:border-box; }
html,body { width:1032px; height:1376px; overflow:hidden; }
body { font-family: var(--font-body); }
.bg {
  width:1032px; height:1376px;
  background: linear-gradient(155deg, #134e4a 0%, #0f766e 35%, #0d9488 65%, #14b8a6 100%);
  position: relative; overflow: hidden;
}
.glow-bg {
  position:absolute; width:640px; height:640px; border-radius:50%;
  background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%);
  top:-160px; right:-160px;
}
.content {
  position: relative; z-index:10;
  padding: 72px 80px 0;
  text-align: center;
  max-width: 860px; margin: 0 auto;
}
.label {
  font-size: 14px; font-weight: 700;
  color: rgba(255,255,255,0.6);
  letter-spacing: 1.8px; text-transform: uppercase;
  margin-bottom: 20px;
}
h1 {
  font-family: var(--font-display);
  font-size: 64px; font-weight: 800;
  color: #ffffff; line-height: 1.08;
  margin-bottom: 16px;
}
.sub {
  font-size: 20px; font-weight: 500;
  color: rgba(255,255,255,0.65); line-height: 1.6;
  max-width: 600px; margin: 0 auto;
}
/* Two phones */
.phones-row {
  position: absolute;
  bottom: -20px; left: 0; right: 0;
  display: flex; justify-content: center;
  align-items: flex-end; gap: 24px;
  z-index: 10;
}
.ph {
  position: relative;
  width: 390px; height: 845px;
  background: #0a0a0a;
  border-radius: 75px; padding: 21px;
  flex-shrink: 0;
}
.ph-a {
  transform: rotate(-2.5deg) translateY(14px);
  box-shadow: -16px 60px 110px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08);
}
.ph-b {
  transform: rotate(2.5deg) translateY(14px);
  box-shadow:  16px 60px 110px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08);
}
.ph-screen {
  width:100%; height:100%; border-radius:56px;
  overflow:hidden; background:#f5f5f4;
}
.ph-screen img { width:100%; height:100%; object-fit:cover; object-position:top; display:block; }
.ph-island {
  position:absolute; top:27px; left:50%;
  transform:translateX(-50%);
  width:144px; height:39px;
  background:#000; border-radius:30px; z-index:20;
}
/* bottom feature row */
.feature-row {
  position: absolute; bottom: 36px;
  left: 0; right: 0;
  display: flex; justify-content: center; gap: 32px; z-index: 20;
}
.feat { text-align: center; }
.feat-icon { font-size: 24px; margin-bottom: 6px; }
.feat-lbl { font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.65); text-transform: uppercase; letter-spacing: 0.8px; }
.feat-val { font-family: var(--font-display); font-size: 26px; font-weight: 800; color: white; line-height: 1; }
.feat-sep { width: 1px; background: rgba(255,255,255,0.2); align-self: stretch; }
</style>
</head><body>
<div class="bg">
  <div class="glow-bg"></div>
  <div class="content">
    <div class="label">Get Started Free</div>
    <h1>Built for real<br>households.</h1>
    <p class="sub">Set up your 50/30/20 budget, track every dollar, and collaborate with your household — all in one app.</p>
  </div>
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

// ─── Generate ─────────────────────────────────────────────────────────────
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
  // 1032 × 1376 logical px @ 2× = 2064 × 2752 physical px
  await page.setViewport({ width: 1032, height: 1376, deviceScaleFactor: 2 });

  for (const screen of screens) {
    console.log(`Rendering ${screen.name}...`);
    await page.setContent(screen.html, { waitUntil: 'load', timeout: 30000 });
    await new Promise(r => setTimeout(r, 400));
    const outPath = path.join(outputDir, `${screen.name}.png`);
    await page.screenshot({ path: outPath, type: 'png', fullPage: false });
    console.log(`  ✓ Saved → ${outPath}`);
  }

  await browser.close();
  console.log('\n✅ All 5 iPad screenshots generated at 2064×2752 px');
}

main().catch(err => { console.error(err); process.exit(1); });

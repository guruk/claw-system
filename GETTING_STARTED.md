# 🦞 Getting Started — From Zero to Your Own AI Agent

*A real guide from someone who did it. Not theory — practice.*

---

## Our Story

**Day 0 (February 2026):** One guy, a MacBook, and a question: *"What if I had an AI that actually knew me and ran my stuff?"*

**Day 1:** Installed [OpenClaw](https://openclaw.ai). Connected WhatsApp. Sent the first message. Got a reply. Felt like magic.

**Day 3:** The agent could read files, search the web, and run commands. But it had no memory. Every conversation started from scratch. Frustrating.

**Day 5:** Created `MEMORY.md`. Wrote down who I am, what I care about, what I'm building. Suddenly the agent *knew* me. Game changer.

**Day 7:** First video generated. A 15-second Grok clip, stitched with ffmpeg, posted to YouTube. Rough. But it worked.

**Day 10:** Newsletter system running. Subscriber management. Email deliverability. All built through WhatsApp conversations with the agent.

**Day 14:** Two iOS apps built and deployed to a physical iPhone. The agent SSHs into a Mac Mini, runs Xcode, installs the app. From a WhatsApp message.

**Day 21:** Three websites live. Videos posting daily to 5 channels. Newsletter going out. Cron jobs running security checks, content generation, social distribution. The system runs itself.

**Day 29 (today):** Open sourced everything. You're reading this.

**Total cost: ~$275/month.** That's Claude Max ($200) + hosting ($30) + voice AI ($20) + AWS ($12) + video API (~$15).

---

## What You'll Need

### Minimum (just get started)
- A computer (Mac, Linux, or Windows with WSL)
- [Node.js](https://nodejs.org) v18+
- An AI API key (Claude, GPT-4, or any provider)
- 30 minutes

### Recommended (full system)
- A Mac (for iOS builds — optional)
- A second machine (Mac Mini, Raspberry Pi, VPS) for always-on operation
- WhatsApp or Telegram for messaging
- API keys: Anthropic (Claude), xAI (Grok for video), OpenAI (Whisper for subtitles)

---

## Step 1: Install OpenClaw

```bash
npm install -g openclaw
openclaw setup
```

Follow the prompts. It'll ask for your AI provider and API key.

**Pro tip:** Claude Max subscription ($200/month) gives you unlimited Claude Sonnet. Best value by far if you're going to use this daily.

---

## Step 2: Connect Messaging

### WhatsApp (recommended for personal use)
```bash
openclaw whatsapp setup
```
Scan the QR code with your phone. That's it.

### Telegram
```bash
openclaw telegram setup
```
Create a bot via [@BotFather](https://t.me/BotFather), paste the token.

### Discord
```bash
openclaw discord setup
```

You can connect multiple channels. The agent appears everywhere.

---

## Step 3: Create Your Workspace

```bash
cd ~/.openclaw/workspace
```

This is your agent's home. Fork this repo as a starting point:

```bash
git clone https://github.com/guruk/claw-system.git ~/.openclaw/workspace
```

Or start fresh and create these files:

### SOUL.md — Who is your agent?
```markdown
# SOUL.md

Be helpful. Be direct. No corporate speak.
Have opinions. Be resourceful before asking.
```

### USER.md — Who are you?
```markdown
# USER.md

- Name: [your name]
- Call me: [nickname]
- Timezone: [your tz]
- Notes: [what matters to you]
```

### AGENTS.md — How should it work?
```markdown
# AGENTS.md

## Every Session
1. Read SOUL.md
2. Read USER.md
3. Read today's memory file

## Safety
- Ask before sending external messages
- Never delete anything without permission
- trash > rm
```

---

## Step 4: Start Talking

```bash
openclaw gateway start
```

Send a message on WhatsApp. Say hi. Tell it about yourself. Ask it to read SOUL.md.

**The first conversation is the most important one.** This is where your agent starts becoming *yours*.

---

## Step 5: Build Memory

After your first conversation:

```
Hey, save what we talked about to memory/2026-03-11.md
```

The agent will write a daily log. Over days and weeks, these logs become its memory. Create `MEMORY.md` for the important stuff — decisions, preferences, lessons learned.

**This is the secret sauce.** An agent with memory is 10x more useful than one without.

---

## Step 6: Add Capabilities

### Video Production
1. Get an [xAI API key](https://console.x.ai) for Grok video generation
2. Install ffmpeg: `brew install ffmpeg` (Mac) or `apt install ffmpeg` (Linux)
3. See `scripts/video_pipeline.sh` for the full workflow

### iOS App Development
1. Need a Mac with Xcode
2. See `scripts/ios_build_deploy.sh`
3. The agent can build and deploy apps via SSH

### Newsletter / Email
1. Set up a simple PHP + SQLite backend (or use any email service)
2. The agent manages subscribers, writes content, handles delivery

### Social Media
1. Get API keys for X/Twitter, YouTube, TikTok
2. See `scripts/social_distribute.js`
3. The agent posts to all channels automatically

---

## Step 7: Set Up Cron Jobs

Make your agent proactive, not just reactive:

```bash
# Check for important emails every morning
openclaw cron add --name "Morning Check" --cron "0 8 * * *" \
  --message "Check for urgent emails and calendar events. Report anything important."

# Daily content generation
openclaw cron add --name "Daily Content" --cron "0 10 * * *" \
  --message "Generate today's content and distribute to channels."
```

---

## Step 8: Add a Second Machine (Optional but Powerful)

We run two agents:
- **MacBook Pro** — main agent (messaging, video, social, newsletters)
- **Mac Mini** — build agent (iOS apps, web servers, heavy processing)

They coordinate via SSH. The main agent sends build commands to the Mini. You can do this with any two machines — even a Raspberry Pi.

---

## Common Mistakes (We Made Them So You Don't Have To)

### ❌ No memory files
Your agent starts fresh every session. Without MEMORY.md and daily logs, it forgets everything. Write things down.

### ❌ Too many cron jobs too fast
Start with 2-3. Add more as you understand what's useful. We have 20+ now but built up over weeks.

### ❌ Not reading SOUL.md
If your agent sounds generic, it's because you haven't told it who to be. SOUL.md is not optional.

### ❌ Sending messages without preview
ALWAYS preview what the agent will send before it goes to real contacts. We learned this the hard way.

### ❌ Storing secrets in workspace files
Use `.env` files. Add them to `.gitignore`. Never commit API keys.

### ❌ Expecting perfection on day 1
The system gets better as your memory files grow. Day 1 is rough. Day 7 is useful. Day 21 is amazing.

---

## Where We Are Now

- 🎬 Daily video production + distribution to 5 channels
- 📱 5 iOS apps built and deployed
- 📰 Newsletter system with subscriber management
- 🌐 3 websites maintained automatically
- 🔐 Automated security audits
- 💰 Finance tracking and reporting
- 🤖 2 coordinating agents across 2 machines
- 📊 20+ daily cron jobs running autonomously
- 🦞 One lobster mascot with a golden crown

**All from WhatsApp messages.**

---

## Where We Want to Be

- 🌍 **Open platform** — anyone can fork this and build their own version
- 🤝 **Community** — share templates, prompts, workflows, and lessons
- 📚 **Library of agents** — pre-built configurations for different use cases (creator, developer, business owner)
- 💡 **Lower the barrier** — if you can send a text message, you can have an AI agent
- 🦞 **Prove that one person + AI can compete with teams of 10**

---

## Resources

- [OpenClaw](https://openclaw.ai) — the platform this runs on
- [OpenClaw Discord](https://discord.com/invite/clawd) — community
- [OpenClaw Docs](https://docs.openclaw.ai) — technical reference
- [This Repo](https://github.com/guruk/claw-system) — fork it, make it yours
- [Claw's Journal](https://lps.world/claw/journal/) — 29 days of video proof

---

## The Philosophy

> "Keep it simple. No overthinking. Look for simpler, more effective solutions."

That's the rule. An AI agent doesn't have to be complicated. It just needs to know who it's helping, remember what happened, and be allowed to act.

Start small. Talk to it. Let it grow.

🦞

---

*Built by K (Christian Albert Mueller) — coding since 1982, still learning every day.*

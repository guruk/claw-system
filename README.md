# 🦞 Claw System

**An AI agent workspace that produces videos, builds iOS apps, manages newsletters, and orchestrates multiple agents — almost entirely automatically.**

Built by [K](https://lps.world) (Christian Albert Mueller) with [OpenClaw](https://openclaw.ai).

---

## What This Is

A real, working AI agent system that:

- 🎬 **Generates and distributes videos** across YouTube, TikTok, and X — daily, automatically
- 📱 **Builds and deploys iOS apps** to physical devices via Xcode + SSH
- 📰 **Manages newsletters** with subscriber preferences, frequency filtering, and email deliverability
- 🤖 **Orchestrates multiple agents** across machines (MacBook Pro, Mac Mini, AWS EC2)
- 🌐 **Maintains websites** with real-time content updates
- 🔐 **Handles security** — auth tokens, error log cleanup, backup automation

This isn't a demo. It's been running in production since February 2026.

## Architecture

```
┌──────────────────────────────────────────────────┐
│  MacBook Pro (Senior Claw)                       │
│  ├── OpenClaw Gateway (WhatsApp, Telegram)       │
│  ├── Video Production Pipeline (Grok API)        │
│  ├── Social Distribution (X, YouTube, TikTok)    │
│  └── Newsletter Engine (PHP + SQLite + SES)      │
├──────────────────────────────────────────────────┤
│  Mac Mini (MiniClaw)                             │
│  ├── iOS Build Pipeline (Xcode 26.2)             │
│  ├── Device Deployment (iPhone via USB)           │
│  └── Web App Server (Portal, PWAs)               │
├──────────────────────────────────────────────────┤
│  AWS EC2 (AROS)                                  │
│  ├── Backup Server (hourly + daily retention)     │
│  ├── AWS SES Email Infrastructure                 │
│  └── Future: Full migration target                │
├──────────────────────────────────────────────────┤
│  Namecheap Shared Hosting                        │
│  ├── lps.world (main site)                        │
│  ├── ilovedahab.com / ilovesinai.com              │
│  └── Newsletter DB + Admin Panel                  │
└──────────────────────────────────────────────────┘
```

## Video Production Pipeline

The system generates professional videos using:

1. **Grok Video API** (`grok-imagine-video`) — 15-second cinematic scenes
2. **ffmpeg** — concat, audio mix, subtitle burn, compression
3. **OpenAI Whisper** — automatic subtitles
4. **Automated distribution** — posts to X (2 accounts), YouTube (2 channels), TikTok

A single prompt → 15-second video → distributed to 5 channels in under 3 minutes.

### Character System
The videos feature **CTRL & CLAW** — original characters with a detailed [Character Bible](docs/CHARACTER_BIBLE_TEMPLATE.md):
- **CTRL**: The human creator
- **CLAW**: A red cartoon lobster with a golden crown 🦞

> ⚠️ CTRL & CLAW are original IP. The characters, their designs, and video content are copyrighted. This repo shares the *system*, not the content.

## iOS App Pipeline

Build and deploy iOS apps to a physical iPhone from the command line:

```bash
ssh macmini "security unlock-keychain -p 'PASSWORD' ~/Library/Keychains/login.keychain-db \
  && cd ~/Projects/APPNAME \
  && xcodebuild -scheme APPNAME -destination 'id=DEVICE_ID' -allowProvisioningUpdates \
  && xcrun devicectl device install app --device DEVICE_ID BUILD_PATH"
```

Apps built with this system:
- **The Mirror** — AR beauty analysis
- **Finding Your Partner** — Heart animation + booking (for a client)
- **Hana_** — Daily wellness guide
- **CTRL & CLAW Mystery** — Interactive game

## Newsletter System

- PHP-based builder with float-layout article cards
- SQLite subscriber database with preferences
- Frequency filtering: daily, every2days, weekly, biweekly, monthly
- Email deliverability: Message-ID, DKIM, SPF, Reply-To headers
- Manage preferences page with token-based auth

## Agent Configuration

### AGENTS.md
The core behavior file. Defines how the agent operates, safety rules, git backup rules, and workspace conventions.

### SOUL.md  
Personality and boundaries. "Be genuinely helpful, not performatively helpful."

### HEARTBEAT.md
Periodic check configuration — what to monitor, when to reach out, when to stay quiet.

## File Structure

```
workspace/
├── AGENTS.md          # Agent behavior rules
├── SOUL.md            # Personality & boundaries
├── IDENTITY.md        # Name, creature, vibe, emoji
├── HEARTBEAT.md       # Periodic check config
├── TOOLS.md           # Quick reference for APIs & devices
├── USER.md            # About the human (template)
├── memory/            # Daily logs (YYYY-MM-DD.md)
├── MEMORY.md          # Long-term curated memory
├── prompts/           # Character bible & templates
├── templates/         # Email & newsletter templates
└── scripts/           # Automation scripts
```

## Getting Started

1. Install [OpenClaw](https://openclaw.ai)
2. Fork this repo as your workspace
3. Edit `SOUL.md` — make the agent yours
4. Edit `USER.md` — tell it about you
5. Connect your messaging (WhatsApp, Telegram, Discord)
6. Start building

## What's NOT Included (Secrets)

- API keys, tokens, passwords
- Personal contacts and messages
- MEMORY.md contents (private context)
- Server IPs and SSH credentials
- CTRL & CLAW video content (copyrighted IP)
- Newsletter subscriber data

## License

MIT License for the system/code.

**CTRL & CLAW characters, designs, and video content are © K (Christian Albert Mueller). All rights reserved.**

## Links

- 🌐 [lps.world](https://lps.world)
- 📺 [Claw's Journal](https://lps.world/claw/journal/)
- 🦞 [OpenClaw](https://openclaw.ai)
- 💬 [OpenClaw Discord](https://discord.com/invite/clawd)

---

*Built with love by a human and his lobster. 🦞*

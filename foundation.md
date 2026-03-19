**✅ Foundation Complete**  
Here is your **solid, production-ready foundation document**.  

Copy the entire content below into your new GitHub repo as **`README.md`** (or create `docs/FOUNDATION-SETUP.md` and link it).  

This document is self-contained, solo-optimized for **free default GitHub Codespaces** (2-core/8 GB/32 GB default machine, 120 core-hours + 15 GB storage/month), and will serve as the single source of truth for every future step.

---

```markdown
# Smart-Home Skill Engine • Foundation Setup v1.0  
**Solo Developer Edition – Free GitHub Codespaces (March 2026)**

### Project Vision
A single private Git repo where:
- Automation skills live (instruction-only Markdown + executable Python tools)
- Existing hardware (Nest, Ring, Hue, Yale, Aqara, etc.) is controlled
- New modular hardware prototypes (ESP32, Raspberry Pi) are defined
- One team (you for now) can work on logic while hardware evolves

Everything stays connected via Home Assistant as the hardware bus + OpenClaw as the AI skill brain.

### Core Architecture (Simple & Lightweight)
```
HA Container ── MQTT ── OpenClaw Skill Engine
      │
      └─ ESPHome (your prototypes)
      └─ Local LLM (llama.cpp or Ollama-light)
```

### Free-Tier Optimized Tech Stack
| Component           | Choice                          | Why (Free-Tier Safe)          | Approx. Resource Use |
|---------------------|---------------------------------|-------------------------------|----------------------|
| Container Runtime   | Docker + docker-compose         | Built-in in Codespaces        | ~3–4 GB disk         |
| Home Assistant      | Official HA Container           | Native support for every device in your 7 MD files | 1.5 GB RAM peak     |
| OpenClaw Skills     | Official OpenClaw image or Python wrapper | Executable skills + your Markdown | <500 MB             |
| Hardware Definition | ESPHome (YAML)                  | Compiles fast on 2-core       | <300 MB             |
| LLM                 | llama.cpp server (tiny 1B model) | Runs locally inside container | 800 MB model        |
| Editor              | VS Code in Codespaces           | Zero local install            | —                   |

**Total expected footprint in free Codespaces**: ~6–8 GB disk, <4 GB RAM peak. Fits comfortably inside default machine.

### Free-Tier Usage Rules (Critical for Solo)
- Always **stop** the codespace when done (Settings → Stop Codespace).
- Never leave it running overnight.
- Use smallest machine possible (default 2-core).
- Delete unused codespaces monthly.
- Monitor usage at https://github.com/settings/billing → Codespaces section.
- Set Spending Limit to $0 in Billing settings.

### Repository Structure (Create Exactly This)
```
smart-home-skill-engine/
├── .devcontainer/              # (optional but recommended)
│   └── devcontainer.json
├── docker-compose.yml
├── homeassistant/
│   ├── configuration.yaml
│   └── blueprints/             # Reusable automations (your skills)
├── openclaw-skills/
│   ├── smart-home-core/        # ← Your 7 MD files go here
│   │   ├── SKILL.md
│   │   ├── tools.py            # Executable version (we build next)
│   │   └── claw.json
│   └── templates/              # Ready for team to copy
├── esphome/
│   └── prototypes/             # Your ESP32 YAMLs
├── docs/
│   ├── FOUNDATION-SETUP.md     # ← This file
│   └── CLAWHUB-REFERENCE.md    # Paste of original 7 MD files
├── scripts/
│   └── start-dev.sh
├── .gitignore
├── LICENSE (MIT)
└── README.md
```

### One-Time Setup (15–25 minutes in Free Codespace)

1. **Create the repo**
   - Go to GitHub → New repository → `smart-home-skill-engine` → Private → Add README → Create

2. **Open in Codespaces**
   - Click Code → Codespaces → Create codespace on main (use default machine)

3. **Run these commands inside the terminal** (copy-paste one block at a time)

```bash
# Update & install basics
sudo apt update && sudo apt install -y git curl docker.io docker-compose

# Create folder structure
mkdir -p homeassistant/blueprints openclaw-skills/smart-home-core esphome/prototypes docs scripts .devcontainer

# Create docker-compose.yml (lightweight version)
cat > docker-compose.yml << 'EOF'
version: '3.8'
services:
  homeassistant:
    image: ghcr.io/home-assistant/home-assistant:stable
    volumes:
      - ./homeassistant:/config
    ports:
      - "8123:8123"
    restart: unless-stopped

  openclaw:
    image: ghcr.io/openclaw/openclaw:latest   # or use python base if image heavy
    volumes:
      - ./openclaw-skills:/skills
    ports:
      - "8080:8080"
    depends_on:
      - homeassistant

  esphome:
    image: esphome/esphome
    volumes:
      - ./esphome:/config
    ports:
      - "6052:6052"
EOF

# Create start script
cat > scripts/start-dev.sh << 'EOF'
#!/bin/bash
docker compose up -d
echo "✅ Stack running!"
echo "HA: http://localhost:8123"
echo "OpenClaw: http://localhost:8080"
echo "ESPHome: http://localhost:6052"
EOF
chmod +x scripts/start-dev.sh

echo "Foundation files created. Next: copy your 7 Markdown files into openclaw-skills/smart-home-core/"
```

4. **Copy your original 7 Markdown files**  
   Paste them into `openclaw-skills/smart-home-core/` (rename the overview one to `SKILL.md`).

5. **Commit & push**
```bash
git add .
git commit -m "Initial foundation setup – solo free Codespaces edition"
git push
```

### First Actions After Setup (Do These Now)
1. Run `./scripts/start-dev.sh`
2. Open http://localhost:8123 → finish HA onboarding (use "Advanced" mode)
3. Paste your Markdown content into `docs/CLAWHUB-REFERENCE.md`
4. Create your first skill stub: `openclaw-skills/smart-home-core/tools.py` (I will generate it in next message if you say “next”)

### Solo Workflow (How You Work Daily)
- Open Codespaces → `./scripts/start-dev.sh`
- Edit skills in `openclaw-skills/` or hardware in `esphome/`
- Test instantly in HA dashboard
- When done: Stop codespace + commit
- Repeat. This pattern scales to a real team later without changes.

---
It slots perfectly after the “Solo Workflow” section.
Markdown### ClawHub Publishing Pipeline (Built-in & One-Command)

**Goal:** Turn any folder inside `openclaw-skills/` into a live, installable skill on https://clawhub.ai in <60 seconds.

#### Why This Works Perfectly
- Our `smart-home-core/` folder = exact ClawHub skill format
- HA + ESPHome parts stay private (only skills get published)
- You stay solo → later teams add more folders → each can be published separately

#### Add This to Your Foundation (Run Once)

```bash
# Inside Codespaces terminal
npm install -g @clawhub/cli   # or use npx clawhub@latest (lighter for free tier)

# Create claw.json metadata (auto-generated)
cat > openclaw-skills/smart-home-core/claw.json << EOF
{
  "ownerId": "$(whoami)-solo",
  "slug": "smart-home-pro",
  "version": "1.0.0",
  "publishedAt": "$(date +%s)"
}
EOF
Publishing Commands (Add These to scripts/publish-to-clawhub.sh later)
Bash# 1. Quick publish the core skill (instruction + executable)
npx clawhub@latest publish ./openclaw-skills/smart-home-core \
  --slug smart-home-pro \
  --name "Smart Home Pro – Local-First + ESPHome" \
  --version 1.0.0 \
  --description "Full automation skill for existing devices + new modular hardware" \
  --changelog "Initial release from GitHub Codespaces foundation"

# 2. Update existing skill (after you improve it)
npx clawhub@latest publish ./openclaw-skills/smart-home-core --update

# 3. Publish a new sub-skill (e.g. renter-only)
npx clawhub@latest publish ./openclaw-skills/renter-automation --slug renter-safe
Security & Best-Practice Checklist (from ClawHub 2026 guidelines)

Never include real credentials or .env
All tools.py must sanitize inputs
Add VirusTotal link after publish (auto-provided)
Homepage field → link to this GitHub repo

Future-Proof Bonus
When you have a real team, each person can publish their own skill from the same repo (different folders).
Later you can also submit a PR to the official openclaw/skills GitHub repo for even more visibility.
This means whatever we build here can instantly become a ClawHub skill — exactly like the original one you started with, but now powerful and executable
**This README is now your single source of truth.**  
Every future instruction I give you will reference sections in this document.

**You are ready.**  


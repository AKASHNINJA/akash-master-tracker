# Akash Master Tracker — PM + Senior Developer agents

This repo is **Akash Master Tracker**: a mobile-first multi-tracker app (vanilla HTML/CSS/JS). Work is driven by two Cursor agent roles plus an optional **autonomous** loop in the sibling folder `../tracker-agents/` (Node + **Google Gemini API**).

## Roles

| Role | Responsibility | Outputs |
|------|----------------|---------|
| **PM Agent** | Prioritize improvements, specs, GitHub; approve batches for push | `docs/backlog/`, `docs/specs/`, Issues, `pm-approve.ps1` |
| **Senior Developer Agent** | Implement to spec, test manually, commit, gated push | `index.html`, `app.js`, `style.css`, PRs, `dev-push.ps1` |

## Cursor (this repo)

- Read **`.cursor/skills/main-project-developers/SKILL.md`** first for defaults.
- Use **two chats** when possible: one with `@pm-agent`, one with `@senior-developer-agent` (see `.cursor/rules/`).

## Autonomous loop (optional)

From `../tracker-agents/`, `npm start` runs **forever** (until you stop it): PM → Dev → (optional PM review) → commit/push. Set **`AUTO_PUSH=1`** in `tracker-agents/.env` to **push every cycle** without waiting for PM “APPROVED”. The plan file is **`docs/specs/current-cycle.md`**.

## PM approval before `git push` (Cursor dev)

```powershell
.\scripts\pm-approve.ps1 -Feature "feature-slug" -Notes "Approved"
.\scripts\dev-push.ps1
```

## GitHub

Repo: [github.com/AKASHNINJA/akash-master-tracker](https://github.com/AKASHNINJA/akash-master-tracker). Link PRs to Issues; use `.github/pull_request_template.md`.

## Tracker architecture reminder

- Trackers live as IIFE modules under `TRACKERS` in `app.js`.
- Storage keys use the **`amt_`** prefix.
- Main files: `index.html`, `app.js`, `style.css`.

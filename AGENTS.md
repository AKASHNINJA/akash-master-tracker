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

From `../tracker-agents/`, `npm start` runs PM → Dev → PM review → commit/push on approval. Those agents persist the current cycle plan to **`docs/specs/current-cycle.md`** so it stays aligned with this document and Cursor work.

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

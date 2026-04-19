---
name: main-project-developers
description: >-
  Primary playbook for the Akash Master Tracker repository (vanilla JS multi-tracker
  app): PM and Senior Developer roles, docs/specs and backlog, GitHub, gated push,
  and alignment with the optional tracker-agents autonomous loop. Use when working
  on this todo/tracker app, master tracker features, or when the user refers to
  Akash Master Tracker as their main Cursor project.
---

# Main project developers — Akash Master Tracker

## First read

1. Repo root **`AGENTS.md`**
2. App **`README.md`** (architecture, `TRACKERS`, `amt_` keys)

## Skill routing

| Task | Open |
|------|------|
| Backlog, specs, GitHub, `pm-approve.ps1` | `.cursor/skills/pm-agent/SKILL.md` |
| Code in `index.html` / `app.js` / `style.css`, `dev-push.ps1` | `.cursor/skills/senior-developer/SKILL.md` |
| Full spec → code → approve → push | `.cursor/skills/pm-dev-orchestration/SKILL.md` |

## Autonomous loop

Sibling repo **`../tracker-agents/`** runs Anthropic API agents that write **`docs/specs/current-cycle.md`**. If that file exists and is recent, treat it as the active plan unless superseded by another spec.

## Gated push

Prefer **`.\scripts\dev-push.ps1`** over raw `git push` unless the user overrides.

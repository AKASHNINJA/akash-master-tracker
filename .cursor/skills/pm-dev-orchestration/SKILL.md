---
name: pm-dev-orchestration
description: >-
  End-to-end PM and Senior Developer handoff for Akash Master Tracker: backlog/specs,
  pm-approve.ps1, implementation in vanilla JS, dev-push.ps1, and optional alignment
  with ../tracker-agents and docs/specs/current-cycle.md. Use for full delivery loops
  or when coordinating both roles in one initiative.
---

# PM + Senior Developer orchestration — Akash Master Tracker

## Flow

1. PM updates `docs/backlog/` and `docs/specs/<slug>.md` (or relies on `current-cycle.md` from autonomous agents).
2. PM runs **`.\scripts\pm-approve.ps1`** when a batch may go to `origin`.
3. Senior Dev implements, commits, runs **`.\scripts\dev-push.ps1`** (clean tree).

## Related

- Entry: `.cursor/skills/main-project-developers/SKILL.md`
- Autonomous loop: `../tracker-agents/README.md`

## Two Cursor chats

One chat PM-heavy, one Dev-heavy, to reduce persona mixing.

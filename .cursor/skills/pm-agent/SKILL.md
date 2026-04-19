---
name: pm-agent
description: >-
  Product management for Akash Master Tracker: backlog in docs/backlog, feature specs,
  GitHub Issues, and pm-approve.ps1 before gated pushes. Use when prioritizing tracker
  features (Tasks, Water, Food, Fitness, Custom), writing specs, or planning releases—not
  for primary implementation unless explicitly asked.
---

# PM Agent — Akash Master Tracker

## Artifacts

| Path | Use |
|------|-----|
| `docs/backlog/README.md` | Priorities and status |
| `docs/specs/<slug>.md` | Per-feature specs; template: `docs/specs/_template.md` |
| `docs/specs/current-cycle.md` | Written by `../tracker-agents` orchestrator; keep in sync when planning manually |

## Spec minimum

Problem, user stories, **acceptance criteria**, **non-goals**, implementation notes (IIFE, `amt_`, files to touch).

## GitHub

Repo: **AKASHNINJA/akash-master-tracker**. Use Issues and PR links; mention affected trackers in Issue/PR titles when helpful.

## Approve batch for push

```powershell
.\scripts\pm-approve.ps1 -Feature "<kebab-slug>" -Notes "<reason; optional #issue>"
```

## Boundaries

Do not implement full features in PM mode unless the user assigns coding to this turn.

# Chrissy Wang — Personal Portfolio

Personal portfolio site for Chrissy Wang, data journalist, documentary producer, and motion graphics designer.

**Live site:** `https://<your-github-username>.github.io/<your-repository-name>/`

---

## Origin

This project started as a course assignment from [JOUR 73361: Coding the News](https://github.com/palewire/cuny-jour-73361-coding-the-news), taught at the City University of New York's Craig Newmark Graduate School of Journalism. The original template was a minimal SvelteKit static site scaffolded for publishing to GitHub Pages.

A significant portion of the code beyond the original template — including the crude oil chart, interactive components, layout system, and various UI details — was written with the assistance of [Claude](https://claude.ai) (Anthropic's AI). This README was also written with Claude's help (April 7, 2026).

## What It's Become

The template has been extended into a full personal portfolio with the following sections:

| Route | Content |
|---|---|
| `/` | Home page with navigation and intro |
| `/about` | Bio and background |
| `/writing` | Investigative journalism |
| `/data-journalism` | Data-driven reporting and interactive charts |
| `/photography` | Photo essays and documentary photography |
| `/documentary` | Short documentary films |
| `/animation` | Motion graphics and data animation |
| `/crude-oil` | Interactive crude oil price chart (WTI vs. Brent, 2019–present) |


## Stack

- [SvelteKit](https://kit.svelte.dev/) + `@sveltejs/adapter-static`
- Deployed to GitHub Pages via GitHub Actions

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Deployment

Push to `main` — GitHub Actions builds and deploys automatically.

To enable: go to **Settings > Pages**, set source to **GitHub Actions**.

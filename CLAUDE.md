# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Personal academic website for Luyang Hu, built on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme. Deployed to GitHub Pages at huluwulu1115.github.io.

## Development Commands

### Local development with Docker (recommended)
```bash
docker compose pull
docker compose up
# Site available at http://localhost:8080
```

### Local development without Docker
```bash
bundle install
pip install jupyter
bundle exec jekyll serve
# Site available at http://localhost:4000
```

### Build for production
```bash
JEKYLL_ENV=production bundle exec jekyll build
# Output goes to _site/
```

### Formatting
```bash
npx prettier . --check        # check formatting
npx prettier . --write         # fix formatting
```

Prettier runs in CI on every push/PR. Uses `@shopify/prettier-plugin-liquid` for Liquid template formatting.

### Pre-commit hooks
Configured in `.pre-commit-config.yaml`: trailing whitespace, end-of-file fixer, YAML check, large file check.

## Architecture

### Jekyll + al-folio Theme

This is a Jekyll static site using Kramdown (GFM) markdown and Liquid templates. The theme provides layouts for academic content: publications, CV, projects, blog posts, and book reviews.

### Key Content Locations

- **`_config.yml`** — Central configuration: site metadata, plugin settings, scholar config, third-party library versions. Most site behavior changes happen here.
- **`_pages/`** — Top-level site pages (about, CV, publications, projects, blog, etc.) as Markdown files with front matter.
- **`_bibliography/papers.bib`** — BibTeX file that auto-generates the publications page via jekyll-scholar. Scholar config highlights papers where author last name is "Hu".
- **`_data/cv.yml`** — CV content (fallback if `assets/json/resume.json` is not configured).
- **`_data/repositories.yml`** — GitHub repos/users displayed on the repositories page.
- **`_news/`**, **`_projects/`**, **`_books/`** — Jekyll collections for news items, project cards, and book reviews.
- **`_posts/`** — Blog posts.

### Templating

- **`_layouts/`** — Page layouts (Liquid templates): `about`, `bib`, `cv`, `distill`, `post`, `page`, etc.
- **`_includes/`** — Reusable template partials (header, footer, scripts, social links, resume components in `_includes/resume/` and `_includes/cv/`).
- **`_sass/`** — SCSS styles. Theme colors are in `_sass/_themes.scss` (edit `--global-theme-color`). Variables in `_sass/_variables.scss`.

### Plugins

- **`_plugins/`** — Custom Ruby plugins for cache-busting, external posts, Google Scholar citations, BibTeX processing, etc.
- Jekyll plugins configured in Gemfile include: jekyll-scholar, jekyll-paginate-v2, jekyll-archives-v2, jekyll-imagemagick (responsive WebP images), jekyll-jupyter-notebook, jekyll-minifier, jekyll-terser.

### Assets

- **`assets/img/`** — Images (auto-converted to responsive WebP by jekyll-imagemagick when enabled; requires ImageMagick on PATH).
- **`assets/json/resume.json`** — JSON Resume standard format, loaded via jekyll-get-json.
- **`assets/pdf/`** — PDF files linked from publications.

### Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys to `gh-pages` branch on push to `main`. Build uses Ruby 3.3.5, Python 3.13, ImageMagick, and runs PurgeCSS to strip unused styles.

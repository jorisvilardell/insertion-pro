# Insertion Pro — Executive Summary

Landing page statique (Executive Summary) servant de restitution de projet
pour le module universitaire d'**Insertion Professionnelle** (2026).

> Gouvernance & Mécaniques de la Contribution Open Source — analyse des
> processus de maintenance du dépôt mature [FerrisKey](https://github.com/ferriskey/ferriskey/).

## 🧱 Stack

- **[Astro](https://astro.build)** — site statique (`output: 'static'`)
- **[Tailwind CSS v4](https://tailwindcss.com)** — design system (thème sombre, accents « Rust »)
- **TypeScript** (strict)
- **GitHub Pages** via GitHub Actions

## 🗂️ Structure

```text
/
├── .github/workflows/deploy.yml   # CI/CD → GitHub Pages
├── public/                        # favicon
├── src/
│   ├── components/                # Badge, Button, Icon, Hero, Context, Card, Deliverables, Footer
│   ├── layouts/Layout.astro       # <head>, polices, import global.css
│   ├── pages/index.astro          # page unique
│   └── styles/global.css          # @theme (couleurs / polices / ombres)
└── astro.config.mjs               # site + base + Tailwind
```

## 🧞 Commandes

| Commande         | Action                                       |
| :--------------- | :------------------------------------------- |
| `pnpm install`   | Installe les dépendances                     |
| `pnpm dev`       | Serveur local sur `localhost:4321`           |
| `pnpm build`     | Build de production dans `./dist/`           |
| `pnpm preview`   | Prévisualise le build local                  |

## 🚀 Déploiement

Push sur `main` → le workflow `deploy.yml` build le site et le publie sur
GitHub Pages : **https://jorisvilardell.github.io/insertion-pro/**

> ⚙️ Activer une fois dans **Settings → Pages → Build and deployment → Source : GitHub Actions**.

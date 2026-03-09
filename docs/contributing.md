# How to Contribute

This page mirrors the main [CONTRIBUTING.md](../CONTRIBUTING.md) in a friendlier format. It is part of the `docs/` folder so you can browse it on the web.

For the full reference guide see [CONTRIBUTING.md](../CONTRIBUTING.md).

---

## The short version

```
Fork  →  Clone  →  Branch  →  Edit  →  Commit  →  Push  →  Pull Request
```

---

## Quick reference

### Fork and clone

```bash
git clone https://github.com/YOUR-USERNAME/AmurotOpenSource.git
cd AmurotOpenSource
git remote add upstream https://github.com/BinaryBhaskar/AmurotOpenSource.git
```

### Create a branch

```bash
git checkout main
git pull upstream main
git checkout -b your-branch-name
```

### Make your changes, then commit

```bash
git add .
git commit -m "feat: add contributor page for your-username"
```

### Push and open a PR

```bash
git push origin your-branch-name
```

Then go to GitHub and click **Compare & pull request**.

---

## Branch naming

| Change type | Pattern | Example |
|------------|---------|---------|
| New page | `add-page-username` | `add-page-bhaskar` |
| Bug fix | `fix-description` | `fix-nav-link-typo` |
| Docs | `docs-description` | `docs-add-rebase-guide` |
| Feature | `feat-description` | `feat-dark-mode` |

---

## Commit message format

```
type: short description in lowercase
```

Types: `feat`, `fix`, `docs`, `style`, `chore`

Examples:

```
feat: add contributor page for bhaskar
fix: correct broken anchor link in index.html
docs: add conflict resolution section to git-basics.md
style: fix button hover color
```

---

## Getting help

Open an issue with the label `question`. Describe what you tried and what error you see.

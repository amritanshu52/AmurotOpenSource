# Contributing to AmurotOpenSource

Welcome! This guide will walk you through everything you need to make your first contribution. Follow each step carefully and you will have a working pull request by the end.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Fork the repository](#step-1-fork-the-repository)
3. [Clone your fork](#step-2-clone-your-fork)
4. [Set up the upstream remote](#step-3-set-up-the-upstream-remote)
5. [Create a branch](#step-4-create-a-branch)
6. [Make your changes](#step-5-make-your-changes)
7. [Commit your changes](#step-6-commit-your-changes)
8. [Push your branch](#step-7-push-your-branch)
9. [Open a pull request](#step-8-open-a-pull-request)
10. [Respond to review](#step-9-respond-to-review)
11. [Commit message guidelines](#commit-message-guidelines)
12. [Code style](#code-style)

---

## Prerequisites

Before you begin, make sure you have the following installed:

- [Git](https://git-scm.com/downloads)
- A code editor such as [VS Code](https://code.visualstudio.com/)
- A [GitHub account](https://github.com/join)

Verify Git is installed:

```bash
git --version
```

---

## Step 1: Fork the repository

A fork is your own copy of the repository on GitHub. You make changes in your fork, then propose those changes back to the original.

1. Go to the repository on GitHub
2. Click the **Fork** button in the top-right corner
3. Select your account as the destination

You now have a copy at `https://github.com/YOUR-USERNAME/AmurotOpenSource`

---

## Step 2: Clone your fork

Cloning downloads the repository to your local machine so you can work on it.

```bash
git clone https://github.com/YOUR-USERNAME/AmurotOpenSource.git
```

Move into the project directory:

```bash
cd AmurotOpenSource
```

---

## Step 3: Set up the upstream remote

The "upstream" remote points to the original repository. This lets you pull in new changes from the original project later.

```bash
git remote add upstream https://github.com/BinaryBhaskar/AmurotOpenSource.git
```

Verify your remotes are set up correctly:

```bash
git remote -v
```

You should see:

```
origin    https://github.com/YOUR-USERNAME/AmurotOpenSource.git (fetch)
origin    https://github.com/YOUR-USERNAME/AmurotOpenSource.git (push)
upstream  https://github.com/BinaryBhaskar/AmurotOpenSource.git (fetch)
upstream  https://github.com/BinaryBhaskar/AmurotOpenSource.git (push)
```

---

## Step 4: Create a branch

Never work directly on `main`. Always create a new branch for each contribution.

First, make sure your `main` is up to date:

```bash
git checkout main
git pull upstream main
```

Then create and switch to a new branch:

```bash
git checkout -b your-branch-name
```

Branch naming conventions:

| Type | Pattern | Example |
|------|---------|---------|
| New contributor page | `add-page-username` | `add-page-bhaskar` |
| Bug fix | `fix-description` | `fix-broken-nav-link` |
| Documentation | `docs-description` | `docs-update-git-basics` |
| New feature | `feat-description` | `feat-dark-mode-toggle` |

---

## Step 5: Make your changes

### Adding your contributor page

Copy the template directory:

```bash
cp -r people/template people/YOUR-USERNAME
```

Open `people/YOUR-USERNAME/index.html` in your editor and replace the placeholder content with your own information.

### Fixing a bug

Browse the [issues list](../../issues) and find one labeled `bug` or `good-first-issue`. Read the issue description, find the file mentioned, and apply the fix.

### Updating documentation

Find the relevant `.md` file in the `docs/` directory and make your improvements.

---

## Step 6: Commit your changes

Stage the files you changed:

```bash
git add people/YOUR-USERNAME/
```

Or stage all changed files:

```bash
git add .
```

Write a commit message:

```bash
git commit -m "feat: add contributor page for YOUR-USERNAME"
```

See [Commit message guidelines](#commit-message-guidelines) below for how to write good commit messages.

---

## Step 7: Push your branch

Push your branch to your fork on GitHub:

```bash
git push origin your-branch-name
```

---

## Step 8: Open a pull request

1. Go to your fork on GitHub: `https://github.com/YOUR-USERNAME/AmurotOpenSource`
2. You will see a banner saying your branch was recently pushed — click **Compare & pull request**
3. Fill out the pull request template
4. Set the base repository to `BinaryBhaskar/AmurotOpenSource` and base branch to `main`
5. Write a clear title and description
6. Click **Create pull request**

---

## Step 9: Respond to review

A maintainer may leave comments or request changes. This is normal and part of the process.

To make changes after review:

```bash
# Edit the files
git add .
git commit -m "fix: address review comments"
git push origin your-branch-name
```

The pull request updates automatically.

---

## Commit message guidelines

We use a simple convention based on [Conventional Commits](https://www.conventionalcommits.org/):

```
type: short description
```

Common types:

| Type | When to use |
|------|------------|
| `feat` | Adding a new feature or your contributor page |
| `fix` | Fixing a bug |
| `docs` | Updating documentation |
| `style` | CSS or formatting changes |
| `chore` | Maintenance tasks |

Examples:

```
feat: add contributor page for bhaskar
fix: correct broken navigation link in index.html
docs: add rebase instructions to git-basics.md
style: fix button hover color in styles.css
```

Rules:

- Use lowercase
- Keep the description under 72 characters
- Write in imperative mood ("add" not "added", "fix" not "fixed")
- Reference issues when applicable: `fix: correct nav link (#12)`

---

## Code style

- HTML: use 2-space indentation
- CSS: one property per line, 2-space indentation
- JavaScript: use `const` and `let`, not `var`
- No trailing whitespace
- One blank line at end of file

---

## Getting help

If you get stuck at any step, open an issue with the `question` label. Include what you tried and what error you are seeing.

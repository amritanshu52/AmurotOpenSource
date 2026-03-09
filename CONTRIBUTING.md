# Contributing to AmurotOpenSource

Welcome! This guide will walk you through everything you need to make your first contribution. Follow each step carefully and you will have a working pull request by the end.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Contributor guidelines](#contributor-guidelines)
3. [AI usage policy](#ai-usage-policy)
4. [Fork the repository](#step-1-fork-the-repository)
5. [Clone your fork](#step-2-clone-your-fork)
6. [Set up the upstream remote](#step-3-set-up-the-upstream-remote)
7. [Create a branch](#step-4-create-a-branch)
8. [Make your changes](#step-5-make-your-changes)
9. [Commit your changes](#step-6-commit-your-changes)
10. [Push your branch](#step-7-push-your-branch)
11. [Open a pull request](#step-8-open-a-pull-request)
12. [Respond to review](#step-9-respond-to-review)
13. [Rebase instead of merge](#rebase-instead-of-merge)
14. [Commit message guidelines](#commit-message-guidelines)
15. [Code style](#code-style)

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

## Contributor Guidelines

These rules apply to all contributions. Read them before opening a pull request.

### One fix per pull request

Each PR must address **exactly one thing** — one bug fix, one new page, one documentation improvement.

Do not bundle multiple fixes into a single PR. If you find three bugs, open three separate branches, three separate PRs.

**Why:** It makes review faster, makes the history easier to read, and means one good fix can be merged even if another is still being discussed.

### Bug fixes: one bug per commit

When fixing a bug, your branch should contain **one commit that fixes one bug**. Do not refactor surrounding code, fix unrelated whitespace, or add extra improvements in the same commit.

**Allowed:**
```
fix: correct typo in hero subtitle (#4)
```

**Not allowed:**
```
fix: correct typo, also fixed nav link and cleaned up CSS
```

### Merge commits are not accepted

This repository uses a **linear history**. Merge commits will be rejected at review.

Before opening a PR, always rebase your branch on top of the latest `main`:

```bash
git fetch upstream
git rebase upstream/main
```

If you are asked to update your branch during review, **rebase — do not merge**:

```bash
git fetch upstream
git rebase upstream/main
git push origin your-branch --force-with-lease
```

See [Rebase instead of merge](#rebase-instead-of-merge) for a full explanation.

### Keep your branch focused

A branch for a bug fix should only touch the file(s) where the bug exists. A branch for your contributor page should only contain files under `people/YOUR-USERNAME/`.

Do not touch `people/template/` in a contributor page PR. Do not modify `styles.css` unless the bug you are fixing lives in that file.

### Be respectful

This is a learning environment. Be patient with other contributors, be constructive in reviews, and assume good intent.

---

## AI Usage Policy

This project has a strict and deliberate policy on AI tool usage.

### What you may use AI for

You may use AI assistants (ChatGPT, Claude, Copilot, etc.) to:

- **Find bugs** — ask an AI to help you spot what might be wrong in a file
- **Understand an error message** — ask what a specific error means
- **Look up documentation** — ask what a CSS property does, what an HTML attribute is for
- **Understand what a line of code does** — ask for an explanation of existing code

### What you may NOT use AI for

You may **not** use AI to:

- **Write your fix** — the corrected code must come from you
- **Write your contributor page** — the bio, content, and structure should be your own work
- **Write commit messages or PR descriptions** on your behalf
- **Write documentation** for this project

### Why

The entire point of this project is that you develop the skill yourself. Using AI to write the solution defeats the purpose of the exercise. A maintainer may ask you to explain your fix in a review — if you cannot, the PR will be closed.

**Think of AI as a magnifying glass, not a pen.** You can use it to look more closely at a problem. You cannot use it to write the answer.

### Suspected violations

If a fix is clearly AI-generated (boilerplate structure, over-explained comments, rewrites of code beyond the scope of the bug), the PR will be closed with a note. There is no shame in it — just reopen it with your own solution.

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

First, make sure your local `main` is up to date with upstream:

```bash
git checkout main
git fetch upstream
git rebase upstream/main
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

Browse the [issues list](https://github.com/BinaryBhaskar/AmurotOpenSource/issues) and find one labeled `bug` or `good-first-issue`. Read the issue description, find the file mentioned, and apply the fix.

**Fix exactly one bug per branch.** One commit, one change, one PR.

### Updating documentation

Find the relevant `.md` file in the `docs/` directory and make your improvements.

---

## Step 6: Commit your changes

Stage only the files relevant to your change:

```bash
git add index.html
```

Avoid `git add .` unless every changed file belongs to this PR.

Write a commit message:

```bash
git commit -m "fix: correct broken navigation link in index.html (#1)"
```

See [Commit message guidelines](#commit-message-guidelines) below.

**Bug fixes must be a single commit.** If you make a mistake and need to amend:

```bash
git add index.html
git commit --amend --no-edit
```

Only amend commits that have **not yet been pushed** to your remote.

---

## Step 7: Push your branch

Before pushing, rebase onto the latest upstream `main` to ensure a clean history:

```bash
git fetch upstream
git rebase upstream/main
```

Then push:

```bash
git push origin your-branch-name
```

If you have already pushed and then rebased, you will need to force push:

```bash
git push origin your-branch-name --force-with-lease
```

Always use `--force-with-lease`, never `--force`. The `--force-with-lease` flag will refuse to push if someone else has pushed to your branch in the meantime, preventing accidental data loss.

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
git add index.html
git commit --amend -m "fix: correct broken navigation link in index.html (#1)"
git push origin your-branch-name --force-with-lease
```

If your branch has fallen behind `main` during review:

```bash
git fetch upstream
git rebase upstream/main
git push origin your-branch-name --force-with-lease
```

**Do not open a merge commit to resolve conflicts.** Always rebase.

---

## Rebase instead of merge

This section explains why we use rebase and what it looks like in practice.

### Why linear history matters

A merge commit looks like this in the log:

```
* abc1234 Merge branch 'fix-nav-link' into main
|\
| * def5678 fix: correct broken nav link
* | ghi9012 feat: add contributor page for naina
|/
* jkl3456 feat: add contributor page for bhaskar
```

A rebased history looks like this:

```
* abc1234 fix: correct broken nav link
* def5678 feat: add contributor page for naina
* ghi9012 feat: add contributor page for bhaskar
```

The second version is easier to read, easier to bisect when hunting for a bug, and easier to revert. This repository always uses the second approach.

### How to rebase before a PR

```bash
git fetch upstream
git rebase upstream/main
```

### How to rebase during review (if main has moved)

```bash
git fetch upstream
git rebase upstream/main
# Resolve any conflicts, then:
git push origin your-branch-name --force-with-lease
```

### How to handle rebase conflicts

When a conflict occurs during rebase, Git pauses and tells you which files conflict. Open each conflicting file and look for conflict markers:

```
<<<<<<< HEAD
the version from main
=======
your version
>>>>>>> your-commit
```

Decide which version is correct (or combine them), remove the markers, save, then:

```bash
git add the-file.html
git rebase --continue
```

To abort the rebase and return to where you started:

```bash
git rebase --abort
```

---

## Commit message guidelines

We use a simple convention based on [Conventional Commits](https://www.conventionalcommits.org/):

```
type: short description (#issue-number)
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
fix: correct broken navigation link in index.html (#1)
docs: add rebase instructions to git-basics.md
style: fix button hover color in styles.css (#14)
```

Rules:

- Use lowercase
- Keep the description under 72 characters
- Write in imperative mood ("add" not "added", "fix" not "fixed")
- Reference the issue number: `fix: correct nav link (#12)`

---

## Code style

- HTML: 2-space indentation
- CSS: one property per line, 2-space indentation
- JavaScript: use `const` and `let`, not `var`
- No trailing whitespace
- One blank line at end of file

These rules are enforced by the linter. Run `npm run lint` locally before pushing to see any warnings.

---

## Getting help

If you get stuck at any step, open an issue with the `question` label. Include what you tried and what error you are seeing.

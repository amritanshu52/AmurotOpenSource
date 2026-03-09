# Git Basics Reference

A practical reference for the Git commands you will use in this project. Bookmark this page.

---

## Core concepts

| Concept | What it means |
|---------|--------------|
| **Repository (repo)** | A folder tracked by Git — contains your project and its full history |
| **Commit** | A saved snapshot of your files at a point in time |
| **Branch** | An independent line of development — like a parallel version of the project |
| **Remote** | A copy of the repository hosted somewhere else (e.g. GitHub) |
| **Fork** | Your own copy of someone else's repository on GitHub |
| **Pull Request (PR)** | A proposal to merge your branch into another branch |
| **Merge** | Combining changes from one branch into another |
| **Rebase** | Replaying your commits on top of another branch (cleaner history than merge) |

---

## Setting up Git

Configure your name and email (once, on any new computer):

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Check your configuration:

```bash
git config --list
```

---

## Starting with a repository

Clone a repository to your local machine:

```bash
git clone https://github.com/USERNAME/REPO.git
```

Initialize a new repository in the current folder:

```bash
git init
```

---

## Working with remotes

View your remote connections:

```bash
git remote -v
```

Add a new remote:

```bash
git remote add upstream https://github.com/ORIGINAL/REPO.git
```

Fetch changes from a remote (does not merge):

```bash
git fetch upstream
```

Pull changes from a remote and merge:

```bash
git pull upstream main
```

Push your branch to your remote:

```bash
git push origin your-branch-name
```

---

## Branches

List all local branches:

```bash
git branch
```

List all branches including remote:

```bash
git branch -a
```

Create and switch to a new branch:

```bash
git checkout -b branch-name
```

Switch to an existing branch:

```bash
git checkout branch-name
```

Delete a branch (after it has been merged):

```bash
git branch -d branch-name
```

---

## Making changes

Check the status of your working directory:

```bash
git status
```

See what has changed (unstaged):

```bash
git diff
```

See what is staged and ready to commit:

```bash
git diff --staged
```

Stage specific files:

```bash
git add filename.html
git add folder/
```

Stage all changed files:

```bash
git add .
```

Unstage a file (keep changes, just remove from staging):

```bash
git restore --staged filename.html
```

Discard changes in a file (cannot be undone):

```bash
git restore filename.html
```

---

## Committing

Commit staged changes:

```bash
git commit -m "type: short description"
```

Amend the most recent commit message (before pushing):

```bash
git commit --amend -m "type: corrected description"
```

View commit history:

```bash
git log
```

View a compact commit history:

```bash
git log --oneline
```

---

## Rebasing

Rebase brings your branch up to date with another branch by replaying your commits on top of it.

First, fetch the latest changes:

```bash
git fetch upstream
```

Then rebase your branch onto main:

```bash
git rebase upstream/main
```

If there are conflicts, Git will pause and tell you which files conflict. Open them, resolve the conflict markers, then:

```bash
git add resolved-file.html
git rebase --continue
```

To abort a rebase in progress:

```bash
git rebase --abort
```

After rebasing, force-push your branch (required because history changed):

```bash
git push origin your-branch-name --force-with-lease
```

---

## Resolving merge conflicts

A conflict looks like this in a file:

```
<<<<<<< HEAD
your version of the line
=======
the incoming version of the line
>>>>>>> upstream/main
```

To resolve:

1. Open the conflicted file in your editor
2. Decide which version to keep (or combine them)
3. Delete the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
4. Save the file
5. Stage it: `git add filename`
6. Continue the merge or rebase

---

## Useful shortcuts

Undo the last commit (keep changes staged):

```bash
git reset --soft HEAD~1
```

Stash uncommitted changes (to work on something else temporarily):

```bash
git stash
```

Restore stashed changes:

```bash
git stash pop
```

See the full history with branches visualized:

```bash
git log --oneline --graph --all
```

---

## Common mistakes and fixes

**Committed to main by accident**

```bash
git checkout -b my-branch       # create a new branch at current state
git checkout main               # go back to main
git reset --hard origin/main    # reset main to match remote
git checkout my-branch          # continue work on the new branch
```

**Pushed the wrong thing**

Do not force-push to `main`. Contact a maintainer.

**Forgot to pull before starting work**

```bash
git fetch upstream
git rebase upstream/main
```

This replays your commits on top of the latest main.

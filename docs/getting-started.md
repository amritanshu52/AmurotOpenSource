# Getting Started with AmurotOpenSource

This guide walks you through your very first contribution step by step. By the end you will have a live contributor page on the website.

---

## What you will need

- A computer with internet access
- A [GitHub account](https://github.com/join) (free)
- [Git installed](https://git-scm.com/downloads) on your computer

To check if Git is installed, open a terminal and run:

```bash
git --version
```

If you see a version number, you are ready. If not, download and install Git first.

---

## Step 1: Fork the repository

Forking creates your own copy of the repository under your GitHub account. You make all your changes there before proposing them back.

1. Open [https://github.com/BinaryBhaskar/AmurotOpenSource](https://github.com/BinaryBhaskar/AmurotOpenSource)
2. Click the **Fork** button in the top-right corner
3. Leave all settings as default and click **Create fork**

You now have a copy at `https://github.com/YOUR-USERNAME/AmurotOpenSource`

---

## Step 2: Clone your fork

Cloning downloads the repository to your local machine.

Open a terminal and run:

```bash
git clone https://github.com/YOUR-USERNAME/AmurotOpenSource.git
```

Then move into the project folder:

```bash
cd AmurotOpenSource
```

---

## Step 3: Set up your upstream remote

This connects your local repository back to the original so you can pull in future changes.

```bash
git remote add upstream https://github.com/BinaryBhaskar/AmurotOpenSource.git
```

Verify it worked:

```bash
git remote -v
```

You should see both `origin` (your fork) and `upstream` (the original).

---

## Step 4: Create a branch

Never work directly on `main`. Create a new branch for your contribution.

```bash
git checkout -b add-page-YOUR-USERNAME
```

Replace `YOUR-USERNAME` with your actual GitHub username.

---

## Step 5: Create your contributor page

Copy the template directory:

```bash
cp -r people/template people/YOUR-USERNAME
```

Open `people/YOUR-USERNAME/index.html` in your code editor.

Replace every placeholder with your own content:

| Placeholder | Replace with |
|------------|-------------|
| `YOUR NAME` | Your real name or display name |
| `@your-username` | Your GitHub username with `@` |
| `Your tagline here` | A short one-line bio |
| The About Me text | A short paragraph about yourself |
| The links | Your actual GitHub, LinkedIn, etc. |
| The projects | Your real or practice projects |
| Creative Corner | Anything you like |

Save the file.

---

## Step 6: Preview your page (optional)

Open the file directly in a browser to see how it looks:

- On Mac: `open people/YOUR-USERNAME/index.html`
- On Windows: `start people/YOUR-USERNAME/index.html`
- Or drag the file into your browser window

---

## Step 7: Stage and commit your changes

Stage your new files:

```bash
git add people/YOUR-USERNAME/
```

Commit with a descriptive message:

```bash
git commit -m "feat: add contributor page for YOUR-USERNAME"
```

---

## Step 8: Push your branch

```bash
git push origin add-page-YOUR-USERNAME
```

---

## Step 9: Open a Pull Request

1. Go to `https://github.com/YOUR-USERNAME/AmurotOpenSource`
2. You will see a banner: **"Your branch was recently pushed"** — click **Compare & pull request**
3. Fill in the PR template that appears
4. Write a short description of what you added
5. Click **Create pull request**

A maintainer will review your PR and either approve it or leave feedback.

---

## Step 10: After your PR is merged

Once merged, your page will be live at:

```
https://binarybhaskar.github.io/AmurotOpenSource/people/YOUR-USERNAME
```

It may take a few minutes for GitHub Pages to build and deploy.

---

## What's next?

- Browse the [Issues list](https://github.com/BinaryBhaskar/AmurotOpenSource/issues)
- Look for issues labeled `bug` or `good-first-issue`
- Read [docs/git-basics.md](git-basics.md) to learn more Git commands
- Help review other contributors' pull requests

# AmurotOpenSource

> A beginner-friendly open source training repository where you learn by doing.

[![Lint](https://github.com/BinaryBhaskar/AmurotOpenSource/actions/workflows/lint.yml/badge.svg)](https://github.com/BinaryBhaskar/AmurotOpenSource/actions/workflows/lint.yml)
[![Pages](https://github.com/BinaryBhaskar/AmurotOpenSource/actions/workflows/pages.yml/badge.svg)](https://github.com/BinaryBhaskar/AmurotOpenSource/actions/workflows/pages.yml)

---

## What is this project?

**AmurotOpenSource** is a practice environment designed to teach the Amurot Team how to contribute to real open source projects using Git and GitHub.

Instead of reading theory, you contribute here — fixing bugs, creating your own page, writing documentation, and collaborating with others through issues and pull requests.

This is a real repository with a real workflow. Everything you do here mirrors what you would do on any professional open source project.

---

## How the training works

The training follows a progression:

| Level | Tasks |
|-------|-------|
| Beginner | Fork the repo, clone it, create your contributor page |
| Intermediate | Fix intentional bugs, improve documentation |
| Advanced | Build new features, review PRs, help others |

Each task is tracked as a GitHub Issue. Issues are labeled so you always know what is appropriate for your level.

---

## Quick Start — Get your contributor page in 5 steps

**1. Fork this repository**

Click the **Fork** button at the top right of this page.

**2. Clone your fork**

```bash
git clone https://github.com/YOUR-USERNAME/AmurotOpenSource.git
cd AmurotOpenSource
```

**3. Create your page**

Copy the template:

```bash
cp -r people/template people/YOUR-USERNAME
```

Edit `people/YOUR-USERNAME/index.html` with your name, bio, and links.

**4. Commit and push**

```bash
git checkout -b add-page-YOUR-USERNAME
git add people/YOUR-USERNAME/
git commit -m "feat: add contributor page for YOUR-USERNAME"
git push origin add-page-YOUR-USERNAME
```

**5. Open a Pull Request**

Go to GitHub and open a pull request from your branch to `main`. Your page will be live at:

```
https://binarybhaskar.github.io/AmurotOpenSource/people/YOUR-USERNAME
```

---

## Learning goals

By contributing to this project you will learn:

- How to fork and clone a repository
- How to create and manage branches
- How to write meaningful commit messages
- How to open and describe a pull request
- How to read and respond to code review
- How to fix bugs in HTML, CSS, and JavaScript
- How to rebase a branch and resolve merge conflicts
- How to read documentation and follow contribution guidelines

---

## Project structure

```
AmurotOpenSource/
├── index.html               # Main homepage (GitHub Pages)
├── styles.css               # Global styles
├── script.js                # JavaScript for the homepage
│
├── people/                  # Contributor pages
│   ├── template/            # Base template — copy this to get started
│   └── bhaskar/             # Example contributor page
│
├── docs/                    # Learning documentation
│   ├── getting-started.md   # Your first contribution walkthrough
│   ├── git-basics.md        # Git commands reference
│   └── contributing.md      # Contribution guide (mirrors CONTRIBUTING.md)
│
├── templates/               # Reusable HTML templates
│   └── profile-template.html
│
├── .github/                 # GitHub configuration
│   ├── ISSUE_TEMPLATE/      # Standardized issue forms
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── workflows/           # GitHub Actions CI/CD
│
├── CONTRIBUTING.md          # How to contribute
├── LICENSE                  # MIT License
└── README.md                # This file
```

---

## How to contribute

Read the full guide in [CONTRIBUTING.md](CONTRIBUTING.md) or the beginner walkthrough in [docs/getting-started.md](docs/getting-started.md).

The short version:

```
Fork → Clone → Branch → Edit → Commit → Push → Pull Request
```

---

## Finding issues to work on

Browse the [Issues tab](https://github.com/BinaryBhaskar/AmurotOpenSource/issues) and look for these labels:

| Label | Meaning |
|-------|---------|
| `good-first-issue` | Perfect for your very first contribution |
| `beginner` | Straightforward tasks with clear instructions |
| `bug` | Something broken that needs fixing |
| `documentation` | Improve or write guides |
| `feature` | Add something new |

---

## Contributors

Contributors who create their pages appear on the [live site](https://binarybhaskar.github.io/AmurotOpenSource).

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## Questions?

Open an [issue](https://github.com/BinaryBhaskar/AmurotOpenSource/issues/new/choose) or start a [discussion](https://github.com/BinaryBhaskar/AmurotOpenSource/discussions). No question is too small.

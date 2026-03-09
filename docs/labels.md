# Label System

This file defines the GitHub issue labels used in this repository.
To apply these labels to a fresh repo, use the [GitHub Labels CLI](https://github.com/nicedoc/github-label-sync)
or create them manually in the repository settings under **Labels**.

---

## Labels

| Label | Color | Description |
|-------|-------|-------------|
| `good-first-issue` | `#7057ff` | Perfect for someone making their first contribution |
| `beginner` | `#0075ca` | Straightforward task with clear steps |
| `intermediate` | `#e4e669` | Requires some understanding of the codebase |
| `advanced` | `#d93f0b` | Complex task — good for experienced contributors |
| `bug` | `#d73a4a` | Something is not working correctly |
| `documentation` | `#0075ca` | Improvements or additions to documentation |
| `feature` | `#a2eeef` | New functionality to add |
| `contributor-page` | `#bfd4f2` | Adding a new contributor page |
| `accessibility` | `#f9a825` | Accessibility improvements (alt text, ARIA, etc.) |
| `learning-task` | `#c2e0c6` | Designed specifically as a learning exercise |
| `needs-triage` | `#cccccc` | Newly opened, not yet reviewed by a maintainer |
| `question` | `#d876e3` | A question about the project or contribution process |
| `wontfix` | `#ffffff` | Acknowledged but will not be addressed |
| `duplicate` | `#cccccc` | Same as an already existing issue |

---

## How to use labels

**When opening issues:**
- Always add `needs-triage` to new bug reports and feature requests
- Add `good-first-issue` only after confirming the issue is well-scoped and documented
- Add `bug` + `beginner` to intentional training bugs with clear fixes
- Add `contributor-page` to all "create my page" issues

**For maintainers:**
- Remove `needs-triage` after reviewing an issue
- Add the appropriate difficulty label after understanding the scope
- Use `learning-task` for issues created specifically to teach something
- Use `duplicate` and close the duplicate — always link to the original

**Stacking labels:**
Labels can be combined. A well-labeled issue might have:

```
bug  +  good-first-issue  +  beginner
```

or:

```
feature  +  intermediate  +  learning-task
```

# Contributing to LearnDock

Thank you for your interest in contributing! LearnDock is community-driven, and we appreciate every contribution.

## Ways to Contribute

1. **Add a playlist** — The most common contribution
2. **Report issues** — Dead links, outdated content, bugs
3. **Improve documentation** — Fix typos, clarify instructions
4. **Suggest features** — Open a discussion first

## Adding a Playlist

### Step 1: Fork the Repository

Click the "Fork" button on GitHub to create your own copy.

### Step 2: Find the Right Category

Navigate to the `data/` directory and open the JSON file for your category:

- `dsa.json` — Data Structures & Algorithms
- `python.json` — Python programming
- `webdev.json` — Web Development
- `ml.json` — Machine Learning
- `system-design.json` — System Design
- `os.json` — Operating Systems
- `dbms.json` — Database Management

### Step 3: Add Your Entry

Add a new object to the `playlists` array:

```json
{
  "title": "Playlist Title",
  "creator": "Channel Name",
  "url": "https://youtube.com/playlist?list=PLxxxxxxx",
  "language": "English",
  "difficulty": "beginner",
  "videoCount": 42,
  "description": "Brief description (max 150 characters)",
  "year": 2024
}
```

**Required fields:**
- `title` — Playlist title
- `creator` — Channel/creator name
- `url` — Full YouTube playlist URL
- `language` — Primary language (English, Hindi, etc.)
- `difficulty` — One of: `beginner`, `intermediate`, `advanced`

**Optional fields:**
- `videoCount` — Number of videos
- `description` — Brief description (max 150 chars)
- `year` — Year created/updated

### Step 4: Submit a Pull Request

1. Commit your changes:
   ```bash
   git add data/{category}.json
   git commit -m "add: [Playlist Title] to [Category]"
   ```

2. Push to your fork:
   ```bash
   git push origin main
   ```

3. Open a Pull Request on GitHub

## Acceptance Criteria

### We Accept:
- ✅ YouTube playlists (public, accessible)
- ✅ Minimum 5 videos
- ✅ Focused on one topic
- ✅ Good audio/video quality
- ✅ Free to access (no paywall)
- ✅ Not already in the list

### We Reject:
- ❌ Unknown/anonymous creators with no track record
- ❌ Outdated content (deprecated technologies)
- ❌ Incomplete or abandoned playlists
- ❌ Poor production quality
- ❌ Promotional/marketing content
- ❌ Duplicates

## Reporting Issues

Use GitHub Issues for:
- Dead/broken links
- Outdated playlists
- Incorrect information
- Bug reports

## Code Contributions

For code changes:

1. Open an issue first to discuss
2. Fork the repo
3. Create a feature branch: `git checkout -b feature/your-feature`
4. Make your changes
5. Test locally: `npm run dev`
6. Submit a PR

## Style Guide

- Keep JSON formatting consistent (2-space indent)
- Description max 150 characters
- Use title case for playlist titles
- Double-check URLs work

## Review Process

- We review PRs within 48 hours
- We may ask for clarifications
- Once approved, we'll merge

## Code of Conduct

Be respectful and constructive. We're all here to help learners.

---

Questions? Open a GitHub Discussion or Issue.

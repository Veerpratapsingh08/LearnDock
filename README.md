# LearnDock 📚

> Community-curated YouTube playlists for learning. Find the right playlist in seconds.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

## What is LearnDock?

LearnDock is an open-source directory of high-quality YouTube playlists for technical and academic subjects like DSA, Python, Web Development, Machine Learning, and more.

**No ads. No algorithms. No fluff.** Just quality learning resources, curated by the community.

🔗 **Live site**: (https://learn-dock.vercel.app/)

## Features

- 🔍 **Fast search** — Find playlists by title, creator, or topic
- 📁 **Organized categories** — DSA, Python, Web Dev, ML, and more
- 🎯 **Difficulty levels** — Beginner, Intermediate, Advanced
- 🌐 **Multi-language** — English, Hindi, and more
- 📱 **Mobile-first** — Works great on all devices
- ⚡ **Fast & minimal** — No bloat, loads in seconds

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Search**: Fuse.js (client-side fuzzy search)
- **Data**: JSON files in `/data`
- **Deployment**: Vercel / Netlify / GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/learndock.git
cd learndock

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This generates a static export in the `out/` directory.

## Project Structure

```
learndock/
├── data/                  # Playlist data (JSON files)
│   ├── dsa.json
│   ├── python.json
│   └── ...
├── src/
│   ├── app/               # Next.js App Router pages
│   ├── components/        # React components
│   ├── lib/               # Utility functions
│   └── types/             # TypeScript types
├── public/                # Static assets
└── package.json
```

## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Quick contribution

1. Fork the repo
2. Add your playlist to `data/{category}.json`
3. Submit a PR

### Playlist format

```json
{
  "title": "Playlist Title",
  "creator": "Channel Name",
  "url": "https://youtube.com/playlist?list=...",
  "language": "English",
  "difficulty": "beginner",
  "videoCount": 42,
  "description": "Brief description",
  "year": 2024
}
```

## License

MIT License — see [LICENSE](LICENSE) for details.

## Acknowledgments

Built by the community, for the community. Special thanks to all contributors who help curate quality learning resources.

---

**Found a great playlist?** [Contribute it!](CONTRIBUTING.md)

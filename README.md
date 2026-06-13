# PTEHub — PTE Academic Study App

A fully browser-based PTE Academic preparation app with AI-powered feedback, vocabulary building, file storage, and direct exam booking links. Built as a single HTML widget using the Anthropic API.

---

## Features

### PTE Practice Tasks
All four PTE Academic skills are covered with real task types:

| Skill | Tasks included |
|-------|---------------|
| Reading | Fill in the blanks, Multiple choice, Re-order paragraphs |
| Writing | Summarise written text, Write essay |
| Speaking | Read aloud, Repeat sentence, Describe image |
| Listening | Summarise spoken text |

### AI-Powered Feedback
Writing and listening tasks are scored in real time using the Anthropic Claude API (`claude-sonnet-4-6`). Feedback includes:
- Estimated PTE score (0–90 scale)
- Specific strengths and areas to improve
- Grammar and vocabulary suggestions

### Word of the Day
- New academic/PTE vocabulary daily
- Pronunciation, definition, example sentence, synonyms, and word forms
- Quick usage quiz to reinforce each word

### Vocabulary Builder
- Spaced-repetition flashcard system (know it / partly / didn't know)
- Three built-in word lists: PTE Core 500, Academic Word List, PTE Collocations
- Saved words tracker with mastery status

### Study Materials Upload
- Drag-and-drop file upload (images, PDFs, screenshots, notes)
- Filter by file type: All / Images / PDFs / Docs
- Click any file to open it in a new tab

### Exam Booking Links
Direct links to official PTE booking and preparation resources:
- [Pearson PTE Academic — book your exam](https://www.pearsonpte.com/pte-academic)
- [Find a test centre](https://pearsonpte.com/test-centers)
- [Official PTE preparation materials](https://www.pearsonpte.com/preparation)
- [E2Language — free PTE practice](https://www.e2language.com/pte)
- [PTEMock.com — full mock exams](https://ptemock.com)
- [PTE Academic official YouTube](https://www.youtube.com/@PTEAcademicOfficial)

---

## Tech stack

| Layer | Detail |
|-------|--------|
| Runtime | Plain HTML + CSS + vanilla JS — no build step |
| AI scoring | Anthropic Claude API (`/v1/messages`, `claude-sonnet-4-6`) |
| Icons | Tabler Icons (outline webfont via CDN) |
| Fonts | Anthropic Sans (CSS variable `--font-sans`) |
| Storage | Browser memory only — files are object URLs, not persisted |

---

## Getting started

### Prerequisites
- An [Anthropic API key](https://console.anthropic.com/) for AI feedback features
- A modern browser (Chrome, Firefox, Safari, Edge)

### Run locally

```bash
git clone https://github.com/your-username/ptehub.git
cd ptehub
```

Open `index.html` directly in your browser — no server required for the core app.

### Enable AI feedback

The app calls the Anthropic API from the browser. To use AI scoring in Writing and Listening:

1. Open `index.html` in a text editor
2. Find the `fetch('https://api.anthropic.com/v1/messages', ...)` calls
3. Add your API key to the request headers:

```js
headers: {
  'Content-Type': 'application/json',
  'x-api-key': 'YOUR_API_KEY_HERE',
  'anthropic-version': '2023-06-01'
}
```

> **Note:** For production use, never expose your API key in client-side code. Route API calls through a backend proxy instead.

---

## Project structure

```
ptehub/
├── index.html        # Main app — all HTML, CSS, and JS in one file
└── README.md
```

---

## Roadmap

- [ ] Persist vocabulary progress in localStorage
- [ ] Timer for timed PTE tasks (Read Aloud: 40 sec, etc.)
- [ ] Audio playback for Listening tasks
- [ ] Speaking task recording + waveform display
- [ ] Dark mode toggle
- [ ] Export study stats as PDF

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

---

## License

MIT

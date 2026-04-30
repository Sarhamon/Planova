# Planova

**Planova** is a Chrome extension that replaces your new tab page with a personal planning dashboard — clock, greeting, to-do list, and a monthly calendar — all stored locally in your browser.

📘 [한국어 문서 보기](./README.ko.md)

## 📁 Project Structure

```plaintext
Planova/
├── Extension/
│   ├── manifest.json     ← Manifest v3
│   ├── index.html        ← New tab page
│   ├── assets/           ← Icons & background images
│   ├── css/              ← Stylesheets per module
│   └── js/               ← script / menu / todo / calendar / userbox / background
├── LICENSE.md
├── README.md             ← English documentation
└── README.ko.md          ← Korean documentation
```

## 🖼️ Images

The background images used in this project are generated using AI.

## 🔧 Features
- Manage to-dos with date assignment
- Monthly calendar with to-do markers and keyword search
- Customizable username and profile image
- Light/dark background that follows the system theme
- Quick links to Gmail / Drive / YouTube
- All data persisted locally via `localStorage`

## 🚀 Getting Started

No build step required — the `Extension/` folder is ready to load.

1. Open `chrome://extensions` in Chrome
2. Enable **Developer mode** (top right)
3. Click **Load unpacked** and select the `Extension/` folder
4. Open a new tab to see the Planova dashboard

## 📦 Tech Stack
- JavaScript (vanilla)
- Chrome Extensions API (Manifest v3)
- HTML / CSS

## 📄 License

This project is licensed under the terms of the [GNU GPL v3.](./LICENSE.md)

You may copy, distribute and modify the software as long as you track changes/dates in source files.
Any derivative works must be distributed under the same license.
Commercial use is allowed, but with the same conditions.

## ✍️ Author
- Lead Developer: Sarhamon (Sangyoon Lee)

- Contributions welcome via Pull Requests!

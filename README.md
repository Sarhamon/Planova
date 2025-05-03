# Planova Project

> 📘 [한국어 문서 보기](./README.ko.md)

**Planova** is a Chrome Extension that replaces your new tab with a sleek productivity dashboard.

---

## ✨ Features

- **📋 To-Do List by Date**  
  Easily add tasks with specific dates. Tasks appear in both the sidebar and calendar view.

- **📅 Custom Calendar Interface**  
  Custom-rendered monthly calendar with year/month selectors and task indicators.

- **🎨 Background Image Support**  
  Uses `modern.png` as the default background. A glitch variant is reserved for future visual transitions.

- **🔧 Modular UI Structure**  
  Components include a user profile box, to-do input bar, calendar overlay, and sidebar.

- **🕒 Live Clock and Greetings**  
  Shows current time and user-specific greeting on the main screen.

---

## 🛠 Installation

1. Download or clone this repository.
2. Open Chrome and navigate to `chrome://extensions`.
3. Enable **Developer Mode** (top right).
4. Click **Load unpacked**.
5. Select the root folder containing `manifest.json`.

---

## 🔐 Google Integration (Coming Soon)

> Google login and Google Calendar sync features are currently under development.

### Planned Capabilities:
- Google OAuth 2.0 login (profile & email)
- Save to-do tasks to Google Calendar
- Synchronize events across devices

> You can already find placeholder OAuth scopes and a Client ID in the `manifest.json`, but actual API features are disabled at this stage.

---

## 📁 Project Structure

- Planova/
- ├── css/
- │ ├── calendar.css
- │ ├── menu.css
- │ ├── style.css
- │ ├── todo.css
- │ └── userbox.css
- ├── js/
- │ ├── calendar.js
- │ ├── menu.js
- │ ├── script.js
- │ ├── todo.js
- │ └── userbox.js
- ├── assets/
- │ ├── modern.png
- │ ├── modern_glitch.png
- │ └── user.png
- ├── manifest.json
- └── index.html

---

## 🧑‍💻 Developer

Created as part of a software project at
**Yeonsung University - Department of Computer Software**
Main Dev : **Sarhamon ( Sangyoon Lee )**

---

##

This project is licensed under the MIT License.  
See [LICENSE.md](./LICENSE.md) for more details.
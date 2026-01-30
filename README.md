📚 README.md
# WPU Movies DB

A small web project that displays movie data from the OMDb API.  
Users can search movies and view the details inside a Bootstrap modal dialog.

---

## 🚀 Features

- Fetch movie list from OMDb API
- Show movie cards using Bootstrap
- Display movie details inside a modal
- Uses jQuery for AJAX requests
- Responsive UI

---

## 🛠️ Technologies Used

- HTML5
- CSS / Bootstrap
- JavaScript (ES6)
- jQuery
- OMDb API
- Visual Studio Code

---

## 📦 Installation

Clone the repository:

```sh
git clone <repository-url>


Navigate into the project folder:

cd <project-folder>


There is no build process or dependencies needed.
Everything runs directly from the browser.

▶️ How to Run

You can open the project using the Live Server extension from Visual Studio Code.

Open the project folder in VS Code

Right click on omdbapi.html (or main file)

Click "Open with Live Server"

Browser will automatically launch

🌐 OMDb API Key

This project uses the public OMDb API:
https://www.omdbapi.com

To use your own key, update the apikey= value inside omdbapi.js.

Example:

url: 'http://www.omdbapi.com/?apikey=YOUR_API_KEY&s=avengers'

📁 Project Structure
/
├─ omdbapi.html
├─ omdbapi.js
└─ /assets ...

🎨 UI Overview

Movie list displayed in cards

"Show Details" button displays modal

Details include:

Title

Year

Genre

Director

Actors

Writer

Plot

📜 License

Free to use and modify for learning purposes.

🙌 Credits

Inspired by Web Programming Unpas (WPU).
Powered by OMDb API.

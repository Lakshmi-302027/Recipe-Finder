# Recipe-Finder
A Recipe finder app that helps users discover, search, and save recipes easily.

## Features

- **Tabbed Interface**: Home (sample + latest recipes), Add/Edit, All Recipes with search.
- **Recipe Management**: Add new recipes with name, ingredients, steps, and optional images; edit/delete existing ones.
- **Local Storage**: Recipes persist across sessions using localStorage.
- **Search Functionality**: Real-time search by recipe name or ingredients.
- **Detail Modal**: Click any recipe card to view full ingredients list and numbered steps.
- **Responsive Design**: Mobile-friendly layout with CSS Grid and Flexbox.
- **Sample Recipes**: Pre-loaded popular recipes (pizza, paneer dishes, desserts) for demonstration.

## Tech Stack

- **Frontend**: HTML5, CSS3 (custom styles, gradients, animations), Vanilla JavaScript (ES6+).
- **Storage**: Browser localStorage for data persistence.
- **Images**: File upload with DataURL conversion; placeholder fallback.

No external frameworks or libraries used – pure vanilla implementation.

## File Structure

```
Recipe-Finder-Book/
├── index.html          # Main application file (all-in-one HTML/CSS/JS)
├── images/             # Recipe images folder
│   ├── Hero.jpg
│   ├── pizza.jpg
│   ├── Panner butter masala.jpg
│   ├── Brownie.jpg
│   ├── butter chicken.jpg
│   ├── manchurian.jpeg
│   ├── panner tikka.jpeg
│   ├── Garlic chicken.jpeg
│   ├── Egg paradise.jpg
│   ├── Grilled cheese.jpg
│   └── Lava cake.jpg
└── README.md           # This file
```

## Setup & Usage

1. Save the provided HTML code as index.html.
2. Create an images/ folder and add the referenced image files (or use placeholders).
3. Open index.html in any modern web browser.
4. No server required – works offline after initial load.

**Demo Flow**:
- Browse sample recipes on Home tab.
- Add your own via Add/Edit tab (fields auto-validate).
- Search and manage in All Recipes tab.
- Click any card to open detailed modal view.

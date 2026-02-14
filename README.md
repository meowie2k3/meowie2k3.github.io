# meowie2k3.github.io

Personal GitHub Pages website with multiple endpoints.

## 🌐 Site Structure

```
meowie2k3.github.io/
├── index.html          # Landing page with navigation
├── style.css           # Main stylesheet
├── main.js            # Main JavaScript
│
├── greetings/         # 💐 Greetings & Cards
│   ├── index.html     # Greetings listing page
│   └── khue-2010/     # Vietnamese Women's Day card
│       ├── index.html
│       ├── styles.css
│       └── script.js
│
├── projects/          # 🚀 Projects
│   └── index.html     # Projects listing (coming soon)
│
├── portfolio/         # 💼 Portfolio
│   └── index.html     # Portfolio showcase (coming soon)
│
└── blog/             # 📝 Blog
    └── index.html     # Blog posts (coming soon)
```

## 🚀 Live URLs

- **Home**: `https://meowie2k3.github.io/`
- **Greetings**: `https://meowie2k3.github.io/greetings/`
- **Projects**: `https://meowie2k3.github.io/projects/`
- **Portfolio**: `https://meowie2k3.github.io/portfolio/`
- **Blog**: `https://meowie2k3.github.io/blog/`

## 📝 Adding New Content

### Adding a New Section

To add a new section (e.g., "Photos"):

1. Create a new directory at root: `photos/`
2. Add an `index.html` inside it
3. **Add section to `sections.json`**:
   ```json
   {
       "name": "photos",
       "icon": "📷",
       "title": "Photos",
       "description": "My photo gallery",
       "color": "primary"
   }
   ```

The navigation card will automatically appear on the home page!

### Adding a New Greeting Card

1. Create a new folder in `greetings/` (e.g., `greetings/birthday-card/`)
2. Add your HTML, CSS, and JS files
3. Update `greetings/index.html` to include a link to your new card

## 🎨 Customization

- Modify `style.css` to change the theme colors and styles
- Edit `main.js` to add interactive features
- Update card icons and descriptions in `index.html`

## 📱 Responsive Design

All pages are fully responsive and work on:
- 💻 Desktop
- 📱 Mobile
- 🖥️ Tablet

## 🔧 Technologies

- HTML5
- CSS3 (with CSS Grid & Flexbox)
- Vanilla JavaScript
- Google Fonts (Inter, Poppins, Dancing Script, Quicksand)

## 📄 License

© 2026 meowie2k3. All rights reserved.

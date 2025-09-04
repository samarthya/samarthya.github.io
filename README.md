# Samarthya.github.io

This is my personal portfolio website built using [Quarto](https://quarto.org/), a next-generation publishing system for data science, technical documentation, and publishing.

## 🛠️ Project Structure

```
samarthya.github.io/
├── _quarto.yml           # Main configuration file
├── index.qmd             # Home page
├── about.qmd             # About page
├── styles.css            # Custom styles
├── assets/              # Static assets directory
│   └── images/          # Images and icons
└── .github/workflows/   # GitHub Actions workflows
    └── quartopublish.yml # Deployment workflow
```

## 🚀 Getting Started

### Prerequisites

- [Quarto](https://quarto.org/docs/get-started/) (latest version)
- Python 3.12 or higher (for any Python-based content)
- VSCode with Quarto extension (recommended)

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/samarthya/samarthya.github.io.git
   cd samarthya.github.io
   ```

2. Create and activate Python virtual environment:
   ```bash
   python3.12 -m venv venv
   source venv/bin/activate  # On Unix/macOS
   # or
   .\venv\Scripts\activate  # On Windows
   ```

3. Preview the site:
   ```bash
   quarto preview
   ```

## 🎨 Customization

### Styling
- Custom styles are defined in `styles.css`
- The site uses the `journal` theme with Font Awesome icons
- Layout and styling can be modified through:
  - `_quarto.yml` for global settings
  - Individual `.qmd` files for page-specific settings

### Adding Content
1. Create new `.qmd` files for new pages
2. Add page references to `_quarto.yml` under the `navbar` section
3. Use Quarto's markdown extensions for rich content:
   - Code blocks with syntax highlighting
   - Math equations
   - Tables
   - Cross-references
   - Citations

## 🔧 Tools & Technologies

- **[Quarto](https://quarto.org/)**: Main publishing system
- **[Python](https://www.python.org/)**: For computational content
- **[Font Awesome](https://fontawesome.com/)**: Icons
- **[GitHub Actions](https://github.com/features/actions)**: CI/CD deployment
- **[GitHub Pages](https://pages.github.com/)**: Hosting

## 📦 Dependencies

- Quarto extensions and features used:
  - HTML format with `journal` theme
  - Table of Contents
  - Custom CSS
  - Font Awesome integration

## 🚀 Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions workflow defined in `.github/workflows/quartopublish.yml`.

The deployment process:
1. Triggers on push to the master branch
2. Sets up Quarto environment
3. Builds the website
4. Publishes to GitHub Pages

## 🔄 How to Extend

### Adding New Pages
1. Create a new `.qmd` file
2. Add YAML frontmatter with title and format
3. Add the page to navigation in `_quarto.yml`

### Custom Components
1. Add custom CSS in `styles.css`
2. Use Quarto's div syntax for custom containers
3. Leverage Bootstrap classes for layout

### Custom JavaScript
1. Create `.js` files in a `scripts/` directory
2. Add to `_quarto.yml` under `format.html.include-in-header`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

- Website: [samarthya.me](https://samarthya.me)
- GitHub: [@samarthya](https://github.com/samarthya)
- LinkedIn: [samarthyasaurabh](https://linkedin.com/in/samarthyasaurabh)

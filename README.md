# Samarthya.github.io

This is my personal portfolio website built using [Quarto](https://quarto.org/), a next-generation publishing system for data science, technical documentation, and publishing.

## 🛠️ Project Structure

```bash
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

## Getting Started

Attempt at redoing my profile page via Quarto! It is good that Boston University started with this. Gave a good idea around how old the previous deployment was!!

### Prerequisites

What I need to get started!

- [Quarto](https://quarto.org/docs/get-started/) (latest version)
- Python 3.12 or higher (for any Python-based content)
- VSCode with Quarto extension (recommended)

### Local Development

Process I followed!

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

## Customization

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

## Tools & Technologies

- **[Quarto](https://quarto.org/)**: Main publishing system
- **[Python](https://www.python.org/)**: For computational content
- **[Font Awesome](https://fontawesome.com/)**: Icons
- **[GitHub Actions](https://github.com/features/actions)**: CI/CD deployment
- **[GitHub Pages](https://pages.github.com/)**: Hosting

## Dependencies

- Quarto extensions and features used:
  - HTML format with `journal` theme
  - Table of Contents
  - Custom CSS
  - Font Awesome integration

## Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions workflow defined in `.github/workflows/publish.yml`.

The deployment process:

1. Triggers on push to the master branch
2. Sets up Quarto environment
3. Builds the website
4. Publishes to GitHub Pages

## Contact

- Website: [samarthya.me](https://samarthya.me)
- GitHub: [@samarthya](https://github.com/samarthya)
- LinkedIn: [samarthyasaurabh](https://linkedin.com/in/samarthyasaurabh)

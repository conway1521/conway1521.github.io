# Alessandro Conway - Personal Website

A Jekyll-based personal website hosted on GitHub Pages.

## Quick Start

### Option 1: Upload via GitHub Web Interface (Easiest)

1. Go to [github.com/new](https://github.com/new)
2. Create a repository named `conway1521.github.io`
   - Make sure it's **Public**
   - Don't initialise with README
3. Click "uploading an existing file"
4. Drag and drop ALL the files from this folder (not the folder itself, the contents)
5. Commit the changes
6. Wait 1-2 minutes, then visit `https://conway1521.github.io`

### Option 2: Using Git (More Control)

```bash
# Clone your new repo
git clone https://github.com/conway1521/conway1521.github.io.git
cd conway1521.github.io

# Copy all files from this folder into the repo
# Then push
git add .
git commit -m "Initial site"
git push
```

## Customisation Checklist

After deploying, you'll want to:

- [ ] Add your headshot to `assets/images/` and update `index.html`
- [ ] Add your email to the mailto: links
- [ ] Add your Google Scholar URL to `_config.yml`
- [ ] Replace logo placeholders with real logos (or remove them)
- [ ] Update any placeholder links (#) with real URLs
- [ ] Add screenshots to project cards

## File Structure

```
├── _config.yml          # Site settings
├── _layouts/
│   └── default.html     # Base template
├── _includes/
│   ├── nav.html         # Navigation
│   └── footer.html      # Footer
├── assets/
│   ├── css/
│   │   └── main.css     # All styles
│   └── images/          # Your images go here
├── index.html           # Home page
├── research.html        # Research page
├── work.html            # Work page
├── applied.html         # Applied page
├── writing.html         # Writing page
└── about.html           # About page
```

## Adding a Custom Domain Later

1. Buy a domain (e.g., `alessandroconway.com`)
2. Create a file called `CNAME` in your repo root containing just:
   ```
   alessandroconway.com
   ```
3. Configure DNS at your registrar to point to GitHub Pages
4. Update `url` in `_config.yml`

## Local Development (Optional)

If you want to preview changes locally:

```bash
# Install Jekyll (one time)
gem install bundler jekyll

# Run local server
bundle exec jekyll serve

# Visit http://localhost:4000
```

## Questions?

The site uses standard Jekyll conventions. GitHub Pages builds it automatically when you push changes.

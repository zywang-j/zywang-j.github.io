# Academic portfolio — placeholder edition

A lightweight, responsive academic portfolio prepared for GitHub Pages. Every name, affiliation, contact detail, date, publication, and accomplishment is a placeholder. No personal information has been added to the website, CV, or metadata. The account name below is used only for repository setup.

## Publish on GitHub Pages

1. Sign in to GitHub and create a repository named **`zywang-j.github.io`** under **`zywang-j`**. Choose **Public** if using GitHub Free. If that repository already exists, review its contents before replacing files.
2. Upload the **contents of this folder** to the repository's root (not this entire enclosing folder). In particular, `index.html` must be at the root. Commit to `main`. Include `.nojekyll` if your upload method supports dotfiles; it disables Jekyll processing, although this plain HTML site also works without it.
3. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then **main** and **/ (root)**. Click **Save**.
4. Visit **https://zywang-j.github.io/** after the deployment completes. GitHub notes that publication can take up to 10 minutes. Check the repository's Actions tab if the site is not yet available.

Official instructions: [GitHub Pages quickstart](https://docs.github.com/en/pages/quickstart).

No framework, build command, package installation, or GitHub Actions workflow is required for this branch-based setup.

## Preview locally

Open `index.html` directly in your browser, or run this command from the folder:

```sh
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Customize when ready

| File | What to edit |
| --- | --- |
| `index.html` | Profile, introduction, research projects, publications, education, skills, awards, and contact details |
| `styles.css` | Portfolio colors, type, spacing, and responsive layout |
| `cv.html` | Academic CV content; keep it consistent with the portfolio |
| `cv.css` | CV screen and print layout |
| `script.js` | Mobile menu and active section navigation |
| `cv.js` | Browser print / save-as-PDF button |

1. Search `index.html` and `cv.html` for `Your Name`, `YN`, and bracketed fields such as `[Institution]`. Replace only what you want to publish.
2. Update both pages' `<title>` and `<meta name="description">` values when adding real content.
3. Remove unused project, publication, award, or experience entries. Do not turn placeholders into unsupported claims.
4. Replace the photo placeholder with an image only if you want a public photo. For example, add `assets/profile.jpg` and replace the `.portrait-placeholder` block with `<img class="portrait-placeholder" src="assets/profile.jpg" alt="Your Name">`; add `object-fit: cover` to its style.
5. Contact and paper fields are text placeholders, so they do not lead to fake destinations. Once ready, replace them with real `<a href="...">` links. For email use `mailto:`; use `https://` for external sites.
6. The **CV template** link opens `cv.html`. Use **Print / save PDF** there to export the CV. In the print dialog, disable browser headers and footers. If you later prefer a PDF download, add `assets/cv.pdf` and update both CV links in `index.html`.
7. Remove the placeholder notice, profile note, CV template note, and placeholder wording only after all remaining content is accurate. Rename the CV links then too.
8. Commit changes to `main`; GitHub Pages redeploys them automatically.

## Features

- Research-focused single-page portfolio with a separate printable CV.
- Responsive mobile navigation, project disclosures, section links, and keyboard focus styles.
- Core content works without JavaScript; navigation remains available if scripts are disabled.
- Local system fonts, no external scripts, no forms, and no tracking.
- Relative asset URLs work on both a user site and a project site.

Only website files should be uploaded to the repository. The separate ZIP is a convenience download; extract it before uploading.

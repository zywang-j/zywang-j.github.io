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
| `index.html` | Short biography, contact links, research interests, news, one sample publication, mentoring, service, and software |
| `styles.css` | Portfolio colors, type, spacing, and responsive layout |
| `cv.html` | Academic CV content; keep it consistent with the portfolio |
| `cv.css` | CV screen and print layout |
| `script.js` | Mobile menu and active section navigation |
| `cv.js` | Browser print / save-as-PDF button |

1. Search `index.html` and `cv.html` for `Your Name`, `YN`, and bracketed fields such as `[Institution]`. Replace only what you want to publish.
2. Update both pages' `<title>` and `<meta name="description">` values when adding real content.
3. Remove unused project, publication, award, or experience entries. Do not turn placeholders into unsupported claims.
4. Replace the photo placeholder with an image only if you want a public photo. For example, add `assets/profile.jpg` and replace the `.portrait-placeholder` block with `<img class="portrait-placeholder" src="assets/profile.jpg" alt="Your Name">`. For publication figures, replace an `.image-placeholder` block with `<img class="publication-image" src="assets/paper.jpg" alt="A description of the research figure">`.
5. Contact and paper fields are text placeholders, so they do not lead to fake destinations. Once ready, replace them with real `<a href="...">` links. For email use `mailto:`; use `https://` for external sites.
6. The **CV** link below the profile photo opens `cv.html`, which retains the detailed education, research experience, awards, and skills fields. Use **Print / save PDF** there to export the CV. In the print dialog, disable browser headers and footers. If you later prefer a PDF download, add `assets/cv.pdf` and update the CV link in `index.html`.
7. The homepage uses short sample prose with bracketed fields, not verified personal facts. Replace or remove every field before publishing real information, then remove the footer's placeholder note and the CV template note. News, mentoring, and software entries are optional; remove unused sections and their navigation links. Keep news newest first and put older entries inside the **Earlier news** disclosure. Duplicate the publication row only when adding another actual paper.
8. Commit changes to `main`; GitHub Pages redeploys them automatically.

## Features

- Compact profile-and-bio introduction followed by full-width academic sections and a separate printable CV.
- Reference-sized typography: 24px name, 20px section headings, and 14–14.4px body copy on desktop, with the original font families and colors.
- One sample publication row, dated news, and concise mentoring and software lists; detailed academic history stays in the CV.
- Responsive mobile navigation, an earlier-news disclosure, section links, and keyboard focus styles.
- Core content works without JavaScript; navigation remains available if scripts are disabled.
- Local system fonts, no external scripts, no forms, and no tracking.
- Relative asset URLs work on both a user site and a project site.

Only website files should be uploaded to the repository. The separate ZIP is a convenience download; extract it before uploading.

## Layout reference

The section organization is inspired by [Zhanpeng He's academic website template](https://github.com/zhanpenghe/personal_web_template), which credits [Shuran Song's website](https://shurans.github.io/). This site's implementation retains its original Georgia heading font, Inter / Segoe UI body font stack, navy and green palette, and dependency-free setup. The reference's fonts, sample identities, images, analytics, and scripts are not included.

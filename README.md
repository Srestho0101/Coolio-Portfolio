# srestho.online

Personal portfolio site for Muntah Mahfuz Srestho — AI & Machine Learning Developer.

Pure HTML/CSS/JS, no build step, no dependencies.

## Files

- `index.html` — page structure & content
- `style.css` — all styling
- `script.js` — terminal boot animation, nav toggle, scroll reveals
- `CNAME` — tells GitHub Pages to serve the site on `srestho.online`

## Deploying with GitHub Pages + your custom domain

1. **Create the repo and push these files**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/Srestho0101/srestho0101.github.io.git
   git push -u origin main
   ```
   Tip: naming the repo `srestho0101.github.io` gives you a working site at that
   URL automatically with zero config. You can use any repo name too — you'll
   just need to enable Pages manually (next step) either way.

2. **Enable GitHub Pages**
   - Go to your repo → **Settings → Pages**
   - Under "Build and deployment", set **Source** to `Deploy from a branch`
   - Branch: `main`, folder: `/ (root)` → **Save**

3. **Point your custom domain at it**
   - Still in **Settings → Pages**, under "Custom domain" enter `srestho.online` and save.
     This writes the `CNAME` file (already included here) and GitHub will attempt
     to verify + issue an HTTPS certificate — this can take a few minutes to a few hours.
   - At your domain registrar (wherever you bought `srestho.online`), add these DNS records:

     **For the apex domain (srestho.online):**
     | Type | Host | Value |
     |------|------|-------|
     | A | @ | 185.199.108.153 |
     | A | @ | 185.199.109.153 |
     | A | @ | 185.199.110.153 |
     | A | @ | 185.199.111.153 |

     **For the www subdomain (optional but recommended):**
     | Type | Host | Value |
     |------|------|-------|
     | CNAME | www | srestho0101.github.io. |

   - Back in GitHub Pages settings, once DNS propagates, check **Enforce HTTPS**.

4. DNS propagation can take anywhere from a few minutes to 24 hours. You can check
   status with `dig srestho.online` or at https://dnschecker.org.

## Local preview

Just open `index.html` in a browser, or run a tiny local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Updating content later

All resume content lives directly in `index.html` — projects are under
`<section id="work">`, skills under `<section id="stack">`. No CMS, no build step:
edit, commit, push, and GitHub Pages redeploys automatically within a minute or two.

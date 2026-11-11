# Photoworld Studio

A photography portfolio website built with React and Vite. The owner can log in at `/admin` and upload or delete photos and videos without touching any code.

## Features

- **Gallery categories:** Album Shoot, Model Shoots, Portraits and Reels.
- **Admin panel (`/admin`):** secure owner login, multi-file upload with progress bars, and delete. New uploads appear on the website immediately, with no redeploy.
- **WhatsApp button:** a floating icon on every public page that opens a WhatsApp chat with a pre-filled message.
- **Footer:** social links and an "Admin Panel" link to `/admin`.

## Tech stack

| Purpose | Service |
|---|---|
| Frontend | React 19, Vite, React Router |
| Login and database | [Supabase](https://supabase.com) (Auth + Postgres with Row Level Security) |
| Photo and video storage | [Cloudinary](https://cloudinary.com) (unsigned upload preset) |
| Hosting | [Netlify](https://www.netlify.com) |

## How it works

1. The owner logs in at `/admin` (Supabase Auth).
2. Files are uploaded from the browser to Cloudinary.
3. The returned file URL is saved in the Supabase `media` table, along with its category.
4. Public gallery pages read the `media` table and show the newest items first.

Anyone can read the gallery, but only the logged-in owner can add or delete rows (enforced by Row Level Security in `supabase/schema.sql`).

## One-time setup

### 1. Supabase (login and database)

1. Create a free project at https://supabase.com.
2. Open **SQL Editor**, paste the contents of `supabase/schema.sql` and run it.
3. Paste the contents of `supabase/seed.sql` and run it **once**. This imports the 48 existing photos and videos so they can be managed from the admin panel. Running it twice creates duplicates.
4. Go to **Authentication → Users → Add user** and create the owner's email and password (keep "Auto confirm user" on).
5. Go to **Authentication → Sign In / Providers** and turn **Allow new users to sign up** off, so only the owner can log in.
6. Go to **Settings → API Keys** and copy:
   - the **Publishable key** (`sb_publishable_...`). This is the value for `VITE_SUPABASE_ANON_KEY`.
   - your **Project ID**, shown in the dashboard URL (`supabase.com/dashboard/project/<PROJECT-ID>`) and under **Settings → General**. Your project URL is `https://<PROJECT-ID>.supabase.co`.

> **Never use the Secret key (`sb_secret_...`) in this project.** It gives full database access and must never be placed in `.env`, in any `VITE_` variable, or in Netlify environment variables used by the frontend. If it is ever exposed, delete or rotate it in **Settings → API Keys**.

### 2. Cloudinary (file storage)

1. In Cloudinary, go to **Settings → Upload → Upload presets → Add upload preset**.
2. Set the name to `photoworld-studio` and **Signing mode** to **Unsigned**, then save.
3. Optionally set an upload folder (for example `photoworld`) so uploads stay in one place.

### 3. Environment variables

Copy `.env.example` to `.env` and fill in the values:

```env
VITE_SUPABASE_URL=https://<PROJECT-ID>.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_xxxxxxxx

VITE_CLOUDINARY_CLOUD_NAME=djxx3xc6p
VITE_CLOUDINARY_UPLOAD_PRESET=photoworld-studio

VITE_WHATSAPP_NUMBER=918002924050
VITE_WHATSAPP_MESSAGE=Hi, I visited Photoworld Studio website. I want to know about your photography services.
```

Notes:
- `VITE_SUPABASE_URL` must be exactly `https://<PROJECT-ID>.supabase.co`, not the dashboard link.
- `VITE_WHATSAPP_NUMBER` includes the country code, with no `+` or spaces.
- Do not wrap values in quotes or put spaces around `=`.
- `.env` is listed in `.gitignore` and must not be committed.
- Vite reads `.env` only when the dev server starts. Restart `npm run dev` after any change.

## Run locally

Requires Node.js 20.19+ or 22.12+ (Vite 8).

```bash
npm install
npm run dev
```

Open the `Local:` URL printed in the terminal (usually `http://localhost:5173`). The admin panel is at `/admin`.

Other scripts:

```bash
npm run build     # production build in dist/
npm run preview   # preview the production build
npm run lint      # run ESLint
```

## Deploy to Netlify

1. Connect the GitHub repository to a Netlify site. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
2. Go to **Site configuration → Environment variables** and add:

   | Key | Value |
   |---|---|
   | `VITE_SUPABASE_URL` | `https://<PROJECT-ID>.supabase.co` |
   | `VITE_SUPABASE_ANON_KEY` | your publishable key |
   | `VITE_CLOUDINARY_CLOUD_NAME` | `djxx3xc6p` |
   | `VITE_CLOUDINARY_UPLOAD_PRESET` | `photoworld-studio` |
   | `VITE_WHATSAPP_NUMBER` | `918002924050` |
   | `NODE_VERSION` | `22` |

3. Go to **Deploys → Trigger deploy → Deploy project without cache**.

Important:
- `VITE_` variables are baked into the site at build time. After adding or changing any of them you must trigger a new deploy.
- `public/_redirects` makes direct links such as `/admin` and `/portrait` work on Netlify.

## Owner guide

1. Open `https://<your-site>/admin` (or use the **Admin Panel** link in the website footer) and log in.
2. Choose a category tab: Album Shoot, Model Shoots, Portraits or Reels.
3. Drag files into the upload box, or click it to choose files. You can select many at once.
4. New items appear first on the website. Use **Delete** under any item to remove it.
5. Limits (Cloudinary free plan): images up to 10 MB, videos up to 100 MB.

## Project structure

```
src/
  admin/            Admin login and panel (Admin.jsx, admin.css)
  components/       Page sections, footer, WhatsApp button, category pages
  lib/
    config.js       Categories, Cloudinary and WhatsApp settings
    supabase.js     Supabase client
    useMedia.js     Hook that loads a category's media
supabase/
  schema.sql        Database table and security policies
  seed.sql          One-time import of the existing media
public/
  _redirects        Netlify single-page-app routing
```

## Adding a new category

1. Add it to `CATEGORIES` in `src/lib/config.js`.
2. Add its slug to the `check (category in (...))` constraint in `supabase/schema.sql`, and update the constraint in the Supabase database (for example by running an `alter table` statement in the SQL Editor).
3. Create a page for it (copy one of the files in `src/components/backImages/`), add a route in `src/App.jsx`, and add a card in `src/components/Portfolio.jsx`.

## Troubleshooting

| Problem | Fix |
|---|---|
| Admin page says "Setup baaki hai", or galleries say the gallery is not set up | The app did not receive `VITE_SUPABASE_URL` or `VITE_SUPABASE_ANON_KEY`. Locally: check `.env` is in the project root (next to `package.json`), the names are exact, then restart `npm run dev` and hard-refresh (`Ctrl + Shift + R`). On Netlify: add the variables, then deploy without cache. |
| Galleries are empty | Run `supabase/schema.sql` and then `supabase/seed.sql`. In Supabase **Table Editor → media** should show 48 rows. |
| Cannot log in | Create the owner under **Authentication → Users** and check the email and password. |
| Upload fails | Check the Cloudinary preset `photoworld-studio` exists and is **Unsigned**, and the file is within the size limit. |
| Direct links like `/admin` show a 404 on Netlify | Make sure `public/_redirects` is deployed. |
| Netlify build fails | Set `NODE_VERSION=22` and read the deploy log. |

## Notes

- Deleting an item removes it from the website but leaves the file in Cloudinary. It can be removed there manually.
- The unsigned Cloudinary preset only allows uploads. A file appears on the website only after the logged-in owner saves it to the database.
- Some admin panel and gallery messages are written in Hinglish. They can be edited in `src/admin/Admin.jsx` and `src/lib/useMedia.js`.

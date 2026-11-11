# Photoworld Studio

A photography portfolio website built with React and Vite. The owner can log in at `/admin` and upload or delete photos and videos without touching any code.

## Features

- Gallery categories: Album Shoot, Model Shoots, Portraits and Reels
- Admin panel with secure login, multi-file upload and delete
- Floating WhatsApp button on every page
- Footer with social links and an Admin Panel link

## Tech stack

- React 19 and Vite
- React Router
- Supabase (login and database)
- Cloudinary (photo and video storage)
- Netlify (hosting)

## Getting started

```bash
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser. The admin panel is at `/admin`.

Other scripts:

```bash
npm run build     # production build
npm run preview   # preview the production build
npm run lint      # run ESLint
```

## Admin panel

1. Open `/admin` (or use the **Admin Panel** link in the footer) and log in.
2. Pick a category.
3. Drag and drop photos or videos, or click to choose files.
4. Use **Delete** to remove an item.

## Project structure

```
src/
  admin/         Admin login and panel
  components/    Page sections, footer, WhatsApp button, category pages
  lib/           Config, Supabase client and data hook
supabase/        Database schema and seed data
public/          Static files and Netlify redirects
```

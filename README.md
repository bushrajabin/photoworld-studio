# Photoworld Studio

React + Vite website. Owner `/admin` page se bina code chhue photos/videos upload ya delete kar sakta hai.

## Ek baar ka setup (developer ke liye)

### 1. Supabase (login + database)
1. https://supabase.com par free project banayein.
2. **SQL Editor** mein `supabase/schema.sql` chalayein.
3. Phir `supabase/seed.sql` **ek baar** chalayein (purani 48 photos/videos admin panel mein aa jayengi).
4. **Authentication -> Users -> Add user**: owner ka email + password banayein ("Auto confirm user" on rakhein).
5. **Authentication -> Sign In / Providers**: "Allow new users to sign up" **OFF** kar dein, taaki sirf owner login kar sake.
6. **Project Settings -> API** se `Project URL` aur `anon public` key copy karein.

### 2. Cloudinary (file storage)
1. Cloudinary -> **Settings -> Upload -> Upload presets -> Add upload preset**.
2. Name: `photoworld-studio`, Signing mode: **Unsigned**. Save.
3. (Optional) Folder `photoworld` set kar dein taaki uploads ek jagah rahein.

### 3. Environment variables
`.env.example` ko `.env` naam se copy karke values bharein. Netlify par yahi variables
**Site settings -> Environment variables** mein daalein, phir redeploy karein.

### 4. Run
```bash
npm install
npm run dev
```

## Owner ke liye
- `https://<site>/admin` kholein, email/password se login karein.
- Upar se category chunein (Album, Model, Portrait, Reels).
- Photos kheench kar chhodein ya click karke chunein. Ek saath kai ho sakti hain.
- Nayi photos website par sabse pehle dikhti hain. Delete button se hata sakte hain.
- Limit: photo 10MB tak, video 100MB tak (Cloudinary free plan).

## WhatsApp button
Har page par neeche-daayein WhatsApp icon hai. Click karne par `VITE_WHATSAPP_NUMBER`
par chat khulti hai, message pehle se likha hua. Number/message `.env` se badal sakte hain.

## Notes
- Delete karne par file website se hat jati hai, par Cloudinary mein rehti hai (wahan se manual delete ho sakti hai).
- Unsigned preset sirf upload allow karta hai; photo website par tabhi dikhti hai jab admin login se database mein save ho.

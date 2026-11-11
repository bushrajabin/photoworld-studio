-- Supabase Dashboard -> SQL Editor mein ise sabse pehle chalayein.

create table if not exists public.media (
  id          uuid primary key default gen_random_uuid(),
  category    text not null check (category in ('album', 'model', 'portrait', 'reels')),
  media_type  text not null default 'image' check (media_type in ('image', 'video')),
  url         text not null,
  created_at  timestamptz not null default now()
);

create index if not exists media_category_created_idx
  on public.media (category, created_at desc);

alter table public.media enable row level security;

-- Website par koi bhi photos dekh sakta hai
drop policy if exists "media public read" on public.media;
create policy "media public read"
  on public.media for select
  using (true);

-- Sirf login kiya hua admin (owner) photo add / delete kar sakta hai
drop policy if exists "media admin insert" on public.media;
create policy "media admin insert"
  on public.media for insert
  to authenticated
  with check (true);

drop policy if exists "media admin delete" on public.media;
create policy "media admin delete"
  on public.media for delete
  to authenticated
  using (true);

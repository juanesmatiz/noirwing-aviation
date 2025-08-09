
-- RLS-enabled aircraft brokerage schema

create table if not exists public.users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  full_name text,
  role text default 'user',
  created_at timestamptz default now()
);

create table if not exists public.aircraft (
  id uuid primary key default gen_random_uuid(),
  make text not null,
  model text not null,
  title text,
  year int,
  serial text,
  tail text,
  category text check (category in ('Jet','Turboprop','Piston')),
  price_usd numeric,
  hours numeric,
  cycles numeric,
  seats int,
  range_nm int,
  engines int,
  engine_program text,
  apu_program text,
  avionics text,
  connectivity text,
  maint text,
  damage_history text,
  location text,
  currency text default 'USD',
  is_published boolean default false,
  created_by uuid references public.users(id) on delete set null,
  created_at timestamptz default now()
);

create table if not exists public.aircraft_photos (
  id uuid primary key default gen_random_uuid(),
  aircraft_id uuid references public.aircraft(id) on delete cascade,
  url text not null,
  position int default 0
);

create table if not exists public.submissions (
  id uuid primary key default gen_random_uuid(),
  owner_name text,
  email text,
  phone text,
  make text,
  model text,
  year int,
  serial text,
  tail text,
  category text,
  price_usd numeric,
  hours numeric,
  cycles numeric,
  seats int,
  range_nm int,
  engines int,
  engine_program text,
  apu_program text,
  avionics text,
  connectivity text,
  maint text,
  damage_history text,
  location text,
  images text,
  status text default 'pending',
  reviewed_by uuid references public.users(id),
  created_at timestamptz default now()
);

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text,
  phone text,
  budget_usd numeric,
  mission text,
  aircraft_ref text,
  source text,
  created_at timestamptz default now()
);

alter table public.aircraft enable row level security;
alter table public.submissions enable row level security;
alter table public.leads enable row level security;

create policy "public can read published aircraft" on public.aircraft
for select using ( is_published );

create policy "owners and admins can insert aircraft" on public.aircraft
for insert with check ( auth.role() = 'authenticated' );

create policy "admins can update aircraft" on public.aircraft
for update using ( exists(select 1 from public.users u where u.id = auth.uid() and u.role = 'admin') );

create policy "anyone can insert submissions" on public.submissions
for insert with check (true);

create policy "admins can read submissions" on public.submissions
for select using ( exists(select 1 from public.users u where u.id = auth.uid() and u.role = 'admin') );

create policy "anyone can insert leads" on public.leads
for insert with check (true);

create policy "admins can read leads" on public.leads
for select using ( exists(select 1 from public.users u where u.id = auth.uid() and u.role = 'admin') );


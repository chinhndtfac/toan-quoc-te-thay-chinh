-- ==============================================================
-- SUPABASE SCHEMA CHO HỆ THỐNG LUYỆN THI TOÁN & TIẾNG VIỆT THẦY CHINH
-- Chạy đoạn script này trong mục SQL Editor trên trang app.supabase.com
-- ==============================================================

-- 1. BẢNG TÀI KHOẢN HỌC SINH & QUẢN TRỊ VIÊN
create table if not exists public.users (
  id uuid default gen_random_uuid() primary key,
  username text unique not null,
  password text not null,
  display_name text not null,
  role text default 'student', -- 'admin' hoặc 'student'
  allowed_grades jsonb default '["all"]'::jsonb,
  allowed_exams jsonb default '["all"]'::jsonb,
  expires_at timestamptz,
  created_at timestamptz default now()
);

-- 2. BẢNG LỊCH SỬ LÀM BÀI (TẬP TRUNG TOÀN HỆ THỐNG)
create table if not exists public.exam_history (
  id uuid default gen_random_uuid() primary key,
  username text not null,
  exam text not null,
  grade int not null,
  round text not null,
  score int not null,
  total int not null,
  correct int not null,
  wrong int not null,
  time_taken int not null,
  answers jsonb,
  details jsonb,
  created_at timestamptz default now()
);

-- 3. BẢNG BẢO LƯU BÀI LÀM DỞ (SESSION)
create table if not exists public.saved_sessions (
  id uuid default gen_random_uuid() primary key,
  username text not null,
  exam text not null,
  grade int not null,
  round text not null,
  time_left int not null,
  answers jsonb,
  current_question int default 0,
  updated_at timestamptz default now(),
  unique (username, exam, grade, round)
);

-- 4. BẬT ROW LEVEL SECURITY (RLS) & POLICY TRUY CẬP CÔNG KHAI
alter table public.users enable row level security;
alter table public.exam_history enable row level security;
alter table public.saved_sessions enable row level security;

-- Policy cho phép đọc/ghi qua Anon Key của ứng dụng web
create policy "Allow all read users" on public.users for select using (true);
create policy "Allow all insert users" on public.users for insert with check (true);
create policy "Allow all update users" on public.users for update using (true);
create policy "Allow all delete users" on public.users for delete using (true);

create policy "Allow all read exam_history" on public.exam_history for select using (true);
create policy "Allow all insert exam_history" on public.exam_history for insert with check (true);

create policy "Allow all read saved_sessions" on public.saved_sessions for select using (true);
create policy "Allow all upsert saved_sessions" on public.saved_sessions for all using (true);

-- 5. NẠP TÀI KHOẢN MẪU BAN ĐẦU
insert into public.users (username, password, display_name, role, allowed_grades, allowed_exams, expires_at)
values 
  ('admin', 'admin123456', 'Thầy Nguyễn Đình Chinh (Admin)', 'admin', '["all"]'::jsonb, '["all"]'::jsonb, '2099-12-31'::timestamptz),
  ('lop1', 'lop1123456', 'Lớp 1', 'student', '["1"]'::jsonb, '["all"]'::jsonb, now() + interval '30 days'),
  ('lop2', 'lop2123456', 'Lớp 2', 'student', '["2"]'::jsonb, '["all"]'::jsonb, now() + interval '30 days'),
  ('lop3', 'lop3123456', 'Lớp 3', 'student', '["3"]'::jsonb, '["all"]'::jsonb, now() + interval '30 days'),
  ('lop4', 'lop4123456', 'Lớp 4', 'student', '["4"]'::jsonb, '["all"]'::jsonb, now() + interval '30 days'),
  ('lop5', 'lop5123456', 'Lớp 5', 'student', '["5"]'::jsonb, '["all"]'::jsonb, now() + interval '30 days')
on conflict (username) do nothing;

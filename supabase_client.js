// SUPABASE CLIENT INTEGRATION FOR THẦY CHINH WEB APP
// Tự động đồng bộ tài khoản học sinh và lịch sử làm bài lên Cloud

const SUPABASE_CONFIG = {
  // Điền Project URL và Anon Key từ Dashboard Supabase của Thầy (Settings -> API)
  url: window.SUPABASE_URL || localStorage.getItem('supabase_url') || '',
  anonKey: window.SUPABASE_ANON_KEY || localStorage.getItem('supabase_anon_key') || ''
};

let supabaseClient = null;

function initSupabase() {
  if (typeof supabase !== 'undefined' && SUPABASE_CONFIG.url && SUPABASE_CONFIG.anonKey) {
    try {
      supabaseClient = supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
      console.log('✅ Supabase connected successfully!');
    } catch(err) {
      console.warn('⚠️ Supabase init error:', err);
    }
  }
}

// 1. Đồng bộ đăng nhập với Supabase
async function supabaseAuthUser(username, password) {
  if (!supabaseClient) return null;
  try {
    const { data, error } = await supabaseClient
      .from('users')
      .select('*')
      .eq('username', username)
      .eq('password', password)
      .single();
    if (error || !data) return null;
    return data;
  } catch(e) {
    console.error('Supabase auth error:', e);
    return null;
  }
}

// 2. Lưu kết quả thi lên Supabase
async function supabaseSaveHistory(record) {
  if (!supabaseClient) return;
  try {
    await supabaseClient.from('exam_history').insert([{
      username: record.username || (state.currentUser ? state.currentUser.username : 'guest'),
      exam: record.exam,
      grade: record.grade,
      round: record.round,
      score: record.score,
      total: record.total,
      correct: record.correct,
      wrong: record.wrong,
      time_taken: record.timeTaken,
      answers: record.answers,
      details: record.details
    }]);
    console.log('✅ Saved exam record to Supabase Cloud');
  } catch(e) {
    console.warn('Could not save to Supabase:', e);
  }
}

// 3. Tải danh sách tài khoản từ Supabase (cho Admin)
async function supabaseLoadUsers() {
  if (!supabaseClient) return null;
  try {
    const { data, error } = await supabaseClient.from('users').select('*');
    if (error) return null;
    return data;
  } catch(e) {
    return null;
  }
}

// 4. Lưu / Cập nhật tài khoản lên Supabase
async function supabaseUpsertUser(user) {
  if (!supabaseClient) return;
  try {
    await supabaseClient.from('users').upsert([user], { onConflict: 'username' });
    console.log('✅ User updated on Supabase');
  } catch(e) {
    console.error('Failed to upsert user on Supabase:', e);
  }
}

// 5. Xóa tài khoản trên Supabase
async function supabaseDeleteUser(username) {
  if (!supabaseClient) return;
  try {
    await supabaseClient.from('users').delete().eq('username', username);
    console.log('✅ User deleted on Supabase');
  } catch(e) {
    console.error('Failed to delete user on Supabase:', e);
  }
}

// Khởi chạy khi script được tải
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    initSupabase();
  });
}

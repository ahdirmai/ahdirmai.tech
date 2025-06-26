// Static blog data
export const blogPosts = [
  // ...existing posts
  // --- Laravel Blog Posts ---
  {
    id: "4",
    title: "Panduan Instalasi Laravel: Langkah Awal Membuat Aplikasi Modern",
    slug: "panduan-instalasi-laravel",
    excerpt:
      "Pelajari cara menginstal Laravel dengan mudah dan cepat, mulai dari persiapan lingkungan hingga menjalankan aplikasi pertama Anda.",
    content: `# 🚀 Panduan Instalasi Laravel

Laravel adalah framework PHP populer yang memudahkan pengembangan aplikasi web modern. Berikut langkah-langkah instalasi Laravel yang estetis dan mudah diikuti.

---

## 1. **Persiapan Lingkungan**

Pastikan Anda sudah menginstal:

- **PHP** (minimal versi 8.1)
- **Composer** (dependency manager PHP)
- **Database** (MySQL/PostgreSQL/SQLite)

---

## 2. **Instalasi Laravel via Composer**

\`\`\`bash
composer create-project laravel/laravel my-laravel-app
\`\`\`

> **Tips:** Ganti \`my-laravel-app\` dengan nama proyek Anda.

---

## 3. **Menjalankan Server Lokal**

Masuk ke folder proyek, lalu jalankan:

\`\`\`bash
cd my-laravel-app
php artisan serve
\`\`\`

Akses aplikasi di [http://localhost:8000](http://localhost:8000)

---

## 4. **Struktur Folder Laravel**

- \`app/\` — Kode aplikasi (Controller, Model, dll)
- \`routes/\` — Definisi routing aplikasi
- \`resources/views/\` — File Blade (template)

---

## 5. **Langkah Selanjutnya**

- Konfigurasi database di \`.env\`
- Jalankan migrasi: \`php artisan migrate\`
- Mulai kembangkan fitur aplikasi Anda!

---

> **Selamat!** Laravel siap digunakan untuk membangun aplikasi web modern Anda. 🌟
`,
    coverImage:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200",
    published: true,
    featured: true,
    views: 320,
    readTime: 5,
    tags: ["Laravel", "Instalasi", "PHP"],
    category: "TECH",
    createdAt: new Date("2024-06-01"),
    publishedAt: new Date("2024-06-01"),
    author: {
      name: "Ridha Fahmi J",
      email: "ridhofahmij225@gmail.com",
      avatar: null,
    },
    comments: [],
  },
  {
    id: "5",
    title: "Laravel Routing: Membuat URL yang Elegan dan Dinamis",
    slug: "laravel-routing-url-elegan",
    excerpt:
      "Pelajari konsep routing di Laravel untuk membuat URL yang rapi, dinamis, dan mudah di-maintain.",
    content: `# 🌐 Laravel Routing: Membuat URL yang Elegan

Routing adalah jantung aplikasi Laravel. Dengan routing, Anda dapat mengatur URL dan menghubungkannya ke controller atau closure.

---

## **Dasar Routing**

Definisikan route di file \`routes/web.php\`:

\`\`\`php
Route::get('/', function () {
    return view('welcome');
});
\`\`\`

---

## **Route dengan Parameter**

\`\`\`php
Route::get('/user/{id}', function ($id) {
    return "User ID: " . $id;
});
\`\`\`

---

## **Route ke Controller**

\`\`\`php
Route::get('/profile', [ProfileController::class, 'show']);
\`\`\`

---

## **Named Route**

\`\`\`php
Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
\`\`\`

---

## **Grouping & Middleware**

\`\`\`php
Route::middleware(['auth'])->group(function () {
    Route::get('/settings', [SettingsController::class, 'index']);
});
\`\`\`

---

> **Tips:** Gunakan named route untuk navigasi yang lebih fleksibel dan maintainable.

---

## **Kesimpulan**

Dengan routing Laravel, Anda bisa membuat aplikasi dengan URL yang bersih, SEO-friendly, dan mudah dikembangkan.  
Selamat bereksperimen! ✨
`,
    coverImage:
      "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200",
    published: true,
    featured: false,
    views: 210,
    readTime: 4,
    tags: ["Laravel", "Routing", "PHP"],
    category: "TECH",
    createdAt: new Date("2024-06-02"),
    publishedAt: new Date("2024-06-02"),
    author: {
      name: "Ridha Fahmi J",
      email: "ridhofahmij225@gmail.com",
      avatar: null,
    },
    comments: [],
  },
  {
    id: "6",
    title: "Eloquent ORM: Cara Mudah Mengelola Database di Laravel",
    slug: "eloquent-orm-laravel",
    excerpt:
      "Kenali Eloquent ORM, fitur powerful Laravel untuk mengelola database dengan sintaks yang elegan dan mudah dipahami.",
    content: `# 🗄️ Eloquent ORM: Mengelola Database dengan Laravel

Eloquent ORM adalah fitur andalan Laravel untuk interaksi database yang efisien dan elegan.

---

## **Apa itu Eloquent?**

Eloquent adalah Object Relational Mapper (ORM) yang menghubungkan tabel database dengan model PHP.

---

## **Membuat Model**

\`\`\`bash
php artisan make:model Post
\`\`\`

---

## **CRUD Sederhana**

### **Create**

\`\`\`php
$post = new Post;
$post->title = 'Judul';
$post->content = 'Isi konten';
$post->save();
\`\`\`

### **Read**

\`\`\`php
$posts = Post::all();
\`\`\`

### **Update**

\`\`\`php
$post = Post::find(1);
$post->title = 'Judul Baru';
$post->save();
\`\`\`

### **Delete**

\`\`\`php
Post::destroy(1);
\`\`\`

---

## **Relasi Antar Model**

\`\`\`php
// Post.php
public function comments() {
    return $this->hasMany(Comment::class);
}
\`\`\`

---

## **Kesimpulan**

Dengan Eloquent, pengelolaan database menjadi lebih mudah, efisien, dan readable.  
Coba gunakan Eloquent untuk setiap kebutuhan database Anda di Laravel! 🚀
`,
    coverImage:
      "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&cs=tinysrgb&w=1200",
    published: true,
    featured: false,
    views: 180,
    readTime: 6,
    tags: ["Laravel", "Eloquent", "Database"],
    category: "TECH",
    createdAt: new Date("2024-06-03"),
    publishedAt: new Date("2024-06-03"),
    author: {
      name: "Ridha Fahmi J",
      email: "ridhofahmij225@gmail.com",
      avatar: null,
    },
    comments: [],
  },
];

// Helper functions for blog data
export const getAllPosts = (published = true) => {
  return published ? blogPosts.filter(post => post.published) : blogPosts;
};

export const getPostBySlug = slug => {
  return blogPosts.find(post => post.slug === slug);
};

export const getFeaturedPosts = (limit = 3) => {
  return blogPosts
    .filter(post => post.published && post.featured)
    .slice(0, limit);
};

export const getPostsByCategory = category => {
  return blogPosts.filter(
    post => post.published && post.category === category.toUpperCase()
  );
};

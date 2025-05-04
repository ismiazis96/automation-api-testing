# 🧪 Automation API Testing – Restful Booker

Project ini dibuat untuk melakukan pengujian otomatis (end-to-end) terhadap [Restful Booker API](https://restful-booker.herokuapp.com/) menggunakan:

- [Mocha](https://mochajs.org/) – Test framework
- [Chai](https://www.chaijs.com/) – Assertion library
- [Supertest](https://github.com/visionmedia/supertest) – HTTP assertions
- [dotenv](https://www.npmjs.com/package/dotenv) – Environment variable support
- [mochawesome](https://github.com/adamgruber/mochawesome) – Reporter HTML

---

## 🧰 Installation

1. Clone repositori atau siapkan folder project:

```bash
git clone <repo-url>
cd automation-api-testing
```

2. Install dependencies:

```bash
npm install mocha chai supertest dotenv mochawesome
```

---

## 📁 Struktur File

Contoh struktur sederhana:

```
automation-api-testing/
├── data/
│   ├── credential.json
│   └── bookingData.json
├── .env
├── booking-e2e.spec.js
├── package.json
└── README.md
```

---

## ⚙️ .env Configuration

Buat file `.env` di root project:

```env
BASE_URL=https://restful-booker.herokuapp.com
```

---

## 🧪 Menjalankan Test Case

### 1. Jalankan Test via Terminal

```bash
npx mocha booking-e2e.spec.js
```

Atau jika sudah ditambahkan script di `package.json`:

```json
"scripts": {
  "test": "mocha booking-e2e.spec.js --reporter mochawesome --exit"
}
```

Maka cukup jalankan:

```bash
npm test
```

---

## 📊 Melihat Report Mochawesome

Setelah `npm test`, otomatis akan dibuat report di direktori `mochawesome-report/`.

Untuk membuka report:

```bash
npx open mochawesome-report/mochawesome.html
```

Atau jika pakai Windows:

```bash
start mochawesome-report/mochawesome.html
```

---

## ✅ Fitur Yang Diuji

- [x] Login dan generate token
- [x] Create booking
- [x] Get booking by ID
- [x] Delete booking

## ✍️ Author

- **Mohamad Ismi Azis**\
  QA Engineer | Automation Enthusiast\
  [GitHub](https://github.com/ismiazis96) | [LinkedIn](https://linkedin.com/in/ismiazis96)

---

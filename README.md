## Travel App
# 🎯 Goal

A scalable multi-vendor travel marketplace built using a modern technology stack.

---

## 🏗️ Architecture Diagram (Text Explanation)


---

## 🔑 Role-Based Flow

### 👤 User
- Browse trips  
- Search & filter  
- Book trips  
- Pay advance / full amount  
- Review & rate trips  

### 🧳 Vendor
- Login  
- Add & manage packages  
- Set availability  
- View bookings  
- Earnings dashboard  

### 🛠 Admin
- Approve vendors  
- Set commission percentage  
- Manage refunds  
- View analytics & reports  

---

## ⚙ Tech Stack (Finalized)

| Layer      | Technology              |
|-----------|--------------------------|
| Frontend  | Next.js (App Router)     |
| Backend   | Node.js + Express        |
| Auth      | JWT + Firebase OTP       |
| Database  | PostgreSQL               |
| Payments  | Razorpay                 |
| Hosting   | AWS / Azure              |
| Storage  | S3 / Blob Storage        |
| DevOps   | Docker + CI/CD           |


# Project Achievements (Completed So Far) | 30-12-2025
---
- Created a clean project workspace with a single repository and separate folders for frontend, backend, docker, and documentation.
- Successfully set up a Next.js application using the App Router, TypeScript, ESLint, and modern configuration best practices.
- Installed and configured Node.js inside WSL (Ubuntu) using NVM, ensuring a proper Linux-based development environment independent of Windows Node.
- Initialized a Node.js + Express backend with essential middleware (cors, dotenv) and a clean entry point structure.
- Implemented a backend health check API (/health) to verify server availability and correctness.
- Verified backend functionality locally using browser and command-line testing. 
- Established environment variable management for frontend and backend using .env files.
- Connected the Next.js frontend to the Node.js backend through a shared API configuration.
- Implemented a frontend API helper layer to consume backend services in a clean, reusable way.
- Displayed real-time backend status on the frontend UI, confirming end-to-end communication. 
- Validated a working full-stack development flow (WSL → Frontend → Backend → API response).
- Followed a phased, production-style setup approach aligned with real-world engineering practices.

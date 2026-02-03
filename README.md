# 🎮 Game Hub – React + TypeScript + Vite

Game Hub is a modern frontend web application for discovering and browsing video games.  
It is built with **React 19**, **TypeScript**, **Vite**, and **Chakra UI**, focusing on performance, clean UI, and scalable architecture.

---

## ✨ Features

- 🎯 Browse and explore video games
- 🔍 Search games by name
- 🧩 Filter by genre and platform
- 📊 Sort games by popularity, rating, and more
- ⭐ Visual rating indicators (emoji-based)
- 🌗 Light / Dark mode support
- ⚡ Fast development with Vite
- 🧱 Skeleton loaders for better UX

---

## 🛠 Tech Stack

### Frontend
- React 19
- TypeScript
- Vite
- Chakra UI v3
- Framer Motion
- Axios
- PNPM

---

## 📁 Project Structure (Overview)

### `src/`
- **assets/** – Images, icons, logos, placeholders  
- **components/** – Reusable UI components (Game cards, grids, filters, navbar, emoji ratings)
- **components/ui/** – Chakra UI helpers (color mode utilities)
- **hooks/** – Custom hooks for games and genres
- **services/** – API client configuration
- **types/** – Shared TypeScript interfaces
- **utils/** – Helper utilities (images, icons)
- **chakra.ts** – Chakra UI theme setup
- **main.tsx** – Application entry point
- **App.tsx** – Root component

---

## 🧠 Architecture Notes

- Data fetching handled via custom hooks
- API logic centralized in the services layer
- Strong type safety using shared types
- Presentational components kept clean and reusable

---

## 🎨 UI & UX

- Chakra UI for accessibility and consistency
- Responsive layout
- Skeleton loaders instead of spinners
- Emoji-based rating indicators
- Neutral placeholder images for missing assets

---

## 🧩 Backend Integration

This frontend is designed to integrate with a backend service responsible for authentication, data persistence, and real-time features.

### Backend Responsibilities

- **Authentication**
  - User login and registration
  - Token-based access control

- **Content APIs**
  - Fetch game-related data
  - Provide metadata (genres, platforms)
  - Support sorting and searching

- **Real-Time Features (Optional)**
  - WebSocket connections for live updates or chat

  ### API Communication

- HTTP requests handled via **Axios**
- Centralized API configuration:
  - `src/services/api-client.ts`
- Easily adaptable to REST or GraphQL backends

### Backend Reference

⚙️ **Backend Repository:**  
https://github.com/mmdreza21/Nestjs_prisma_task_manager


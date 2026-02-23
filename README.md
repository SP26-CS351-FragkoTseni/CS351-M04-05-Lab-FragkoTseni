# M04–M05 Lab DEMO

Simple web app for the lab demo: React, React Router, Tailwind CSS, branded in **Oakland City University** (oak.edu) colors.

## OCU colors

- **Navy**: `#1A3374`
- **Columbia Blue**: `#76AFE3`
- **White**: `#FFFFFF`

## Setup

```bash
npm install
npm run dev
```

## Features

- **Home** (`/`) – landing page
- **API Demo** (`/api-demo`) – single page that performs a **GET-only** request to a public API and displays the result

API used: `https://jsonplaceholder.typicode.com/posts/1` (GET only).

## Stack

- Vite + React 18
- React Router v6
- Tailwind CSS (OCU theme in `tailwind.config.js`)

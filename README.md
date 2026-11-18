# RentUP — Real Estate & Property Discovery Platform

A responsive real estate web application built with **React** and **Vite**, enabling users to browse properties for sale and rent, filter listings by city, property type, and budget, save favorites to a persistent wishlist, and explore detailed property views.

**Live Demo:** [estate-property-gray.vercel.app](https://estate-property-gray.vercel.app)

---

## Screenshots

### Homepage & Hero Section
![RentUP Homepage](./screenshots/home-preview.png)

### Property Search & Filtering
![Property Search Bar](./screenshots/searchbar-preview.png)

### Property Listings Grid
![Property Listings](./screenshots/propertylisting-preview.png)

---

## Key Features
- **Multi-Criteria Property Search:** Filter listings dynamically by city or street keyword, property category, and maximum price.
- **Persistent Wishlist (`My List`):** Save and remove properties with real-time navbar badge updates backed by `localStorage`.
- **Client-Side Routing:** Seamless navigation across Home, About, Services, Properties For Sale, Pricing, Contact, and individual Property Detail pages (`/property/:id`) configured with SPA rewrites on Vercel.
- **Responsive UI:** Adaptive layout across desktop, tablet, and mobile viewports.

## Tech Stack
- **Frontend:** React, React Router DOM, JavaScript (ES6+)
- **Build Tool & Linter:** Vite, Oxlint
- **Styling:** Consolidated modular CSS (`App.css`)
- **Deployment:** Vercel (CI/CD via GitHub `main` branch)

## Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Thrichethra/Estate-Property.git](https://github.com/Thrichethra/Estate-Property.git)
   cd Estate-Property
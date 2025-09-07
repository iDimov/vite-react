# TravelTrucks - Camper Van Rental Platform

A modern web application for browsing and booking camper van rentals, built with React, TypeScript, and Redux Toolkit.

## 🚐 Features

- **Browse Catalog** - Explore a wide selection of camper vans with detailed specifications
- **Advanced Filtering** - Filter by location, vehicle type, and equipment features
- **Favorites System** - Save your favorite campers for later viewing
- **Detailed Views** - View comprehensive information, photos, and reviews for each vehicle
- **Booking System** - Easy booking form with date selection
- **Responsive Design** - Optimized for desktop and mobile devices

## 🛠 Tech Stack

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Full type safety across the application
- **Redux Toolkit** - State management with Redux best practices
- **React Router** - Client-side routing
- **Formik & Yup** - Form handling and validation
- **Axios** - HTTP client for API calls
- **CSS Modules** - Scoped component styling
- **Vite** - Fast build tool and development server

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd vite-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Build the application:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── App/         # Main application component
│   ├── Button/      # Button component
│   ├── FilterPanel/ # Filtering sidebar
│   ├── TrucksList/  # Vehicle list display
│   └── ...
├── pages/           # Page components
│   ├── HomePage/
│   ├── TrucksCatalogPage/
│   ├── TrucksDetailsPage/
│   └── FavouritesPage/
├── redux/           # Redux store and slices
│   ├── filters/     # Filter state management
│   ├── trucks/      # Trucks data management
│   ├── favourites/  # Favorites functionality
│   └── store.ts
├── types/           # TypeScript type definitions
├── constants/       # Application constants
└── config/          # API configuration
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🎨 Features Overview

### Catalog Page
- Grid view of available camper vans
- Real-time filtering by location, type, and features
- Load more pagination
- Add/remove from favorites

### Details Page
- Full vehicle specifications
- Image gallery
- Customer reviews and ratings
- Booking form with date picker
- Features and equipment list

### Favorites Page
- View all saved vehicles
- Quick access to vehicle details
- Persistent storage with Redux Persist

## 🔧 Configuration

The application uses environment variables for configuration. The API base URL is configured in `src/constants/index.ts`.

## 📦 Key Dependencies

- `@reduxjs/toolkit` - Redux state management
- `react-router-dom` - Routing
- `formik` & `yup` - Form handling
- `axios` - HTTP requests
- `react-datepicker` - Date selection
- `redux-persist` - State persistence
- `clsx` - Conditional classNames

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

This project is private and proprietary.

---

Built with ❤️ using React and TypeScript
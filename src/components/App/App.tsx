import { Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import TrucksFeatures from "../TrucksFeatures/TrucksFeatures";
import TrucksReviews from "../TrucksReviews/TrucksReviews";
import Layout from "../Layout/Layout";
import Loader from "../Loader/Loader";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const TrucksCatalogPage = lazy(() => import("../../pages/TrucksCatalogPage/TrucksCatalogPage"));
const TrucksDetailsPage = lazy(() => import("../../pages/TrucksDetailsPage/TrucksDetailsPage"));

function App() {
  return (
    <Suspense fallback={<Loader size="large" fullScreen />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<TrucksCatalogPage />} />

          <Route path="catalog/:id/" element={<TrucksDetailsPage />}>
            <Route index element={<Navigate to="features" replace />} />
            <Route path="features" element={<TrucksFeatures />} />
            <Route path="reviews" element={<TrucksReviews />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      </Suspense>
  );
}

export default App;

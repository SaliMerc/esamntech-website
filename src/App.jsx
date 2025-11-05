import { BrowserRouter, Routes, useLocation } from "react-router-dom";
import { useState, useLayoutEffect } from "react";
import PublicRoutes from "./routes/PublicRoutes";
import { SpinnerOverlay } from "./components/SpinnerOverlay";

function NavigationLoader() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => setLoading(false), 200);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return <SpinnerOverlay show={loading} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <NavigationLoader />
      <Routes>{PublicRoutes}</Routes>
    </BrowserRouter>
  );
}
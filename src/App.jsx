import { BrowserRouter, Routes } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {PublicRoutes}
      </Routes>
    </BrowserRouter>
  );
}
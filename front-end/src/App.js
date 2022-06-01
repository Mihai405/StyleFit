import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import PartnerPage from "./Pages/PartnerPage";
import Partners from "./Pages/Partners";
import Profile from "./Pages/Profile";
import Appointments from "./Pages/Appointments";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />

          <Route path="/partner" element={<PartnerPage />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

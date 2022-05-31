import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import PartnerPage from "./Pages/PartnerPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />

          <Route path="/partner" element={<PartnerPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

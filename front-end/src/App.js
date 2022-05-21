import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import Partners from "./Pages/Partners";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

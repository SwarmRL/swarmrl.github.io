// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import UseCases from "./pages/UseCases";
import Demos from "./pages/Demos";
import Research from "./pages/Research";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/demos" element={<Demos />} />
        <Route path="/research" element={<Research />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

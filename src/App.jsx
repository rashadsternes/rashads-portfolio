import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

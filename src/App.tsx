import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SubmitCode from "./pages/submit-code";
import BadRequest from "./pages/bad-request";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id/submit" element={<SubmitCode />} />
      <Route path="/bad-request" element={<BadRequest />} />
    </Routes>
  );
}

export default App;

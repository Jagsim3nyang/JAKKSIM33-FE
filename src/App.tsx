import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SubmitCode from "./pages/submit-code";
import BadRequest from "./pages/bad-request";
import Login from "./pages/login";
import Layout from "./components/layout";
import Problems from "./pages/problems";
import Records from "./pages/records";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/records" element={<Records />} />
        <Route path="/:id/submit" element={<SubmitCode />} />
      </Route>
      <Route path="/bad-request" element={<BadRequest />} />
    </Routes>
  );
}

export default App;

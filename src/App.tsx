import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SubmitCode from "./pages/problems/submit-code";
import BadRequest from "./pages/bad-request";
import Login from "./pages/login";
import Layout from "./components/layout";
import Problems from "./pages/problems/problems";
import Records from "./pages/records";
import SolveProblem from "./pages/problems/solve-problem";
import Result from "./pages/problems/result";
import Cats from "./pages/cats";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/records" element={<Records />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/problems/submit/:id" element={<SubmitCode />} />
        <Route path="/problems/results/:id" element={<Result />} />
        <Route path="/problems/solve/:id" element={<SolveProblem />} />
      </Route>
      <Route path="/bad-request" element={<BadRequest />} />
    </Routes>
  );
}

export default App;

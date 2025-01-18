import { Link } from "react-router-dom";

function BadRequest() {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-3">
      <h1 className="text-5xl">Bad Request</h1>
      <Link to="/" replace className="text-3xl">
        Back to Home
      </Link>
    </main>
  );
}

export default BadRequest;

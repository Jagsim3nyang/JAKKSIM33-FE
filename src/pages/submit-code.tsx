import { useState } from "react";
import CodeEditor from "@/components/code-editor";

import { Navigate, useParams } from "react-router-dom";
import { LANGUAGE } from "@/constants/code-editor";
import NavBar from "@/components/problems/nav-bar";

function SubmitCode() {
  const [code, setCode] = useState("");

  const { id } = useParams();

  const problemId = parseInt(id as string);

  if (isNaN(problemId)) {
    return <Navigate to="/bad-request" replace />;
  }

  const onSubmit = () => {
    console.log("Code:", code);
  };

  return (
    <main className="py-4" style={{ justifyContent: "space-between" }}>
      <div className="w-full px-12 py-4">
        <NavBar />
      </div>
      <CodeEditor language={LANGUAGE.PYTHON} value={code} onChange={setCode} />
      <button
        className="self-start bg-orange100 text-white py-2 px-3 rounded-lg mx-12 mt-4 hover:bg-orange200"
        onClick={onSubmit}
      >
        제출하기
      </button>
    </main>
  );
}

export default SubmitCode;

import { useState } from "react";
import CodeEditor from "@/components/code-editor";

import { Navigate, useParams } from "react-router-dom";
import { LANGUAGE } from "@/constants/code-editor";

const languages = [
  { name: "Python", value: LANGUAGE.PYTHON },
  { name: "C", value: LANGUAGE.C },
  { name: "C++", value: LANGUAGE.CPP },
  { name: "Java", value: LANGUAGE.JAVA },
  { name: "JavaScript", value: LANGUAGE.JAVASCRIPT },
];

function SubmitCode() {
  const [language, setLanguage] = useState<LANGUAGE>(LANGUAGE.PYTHON);
  const [code, setCode] = useState("");

  const { id } = useParams();

  const problemId = parseInt(id as string);

  if (isNaN(problemId)) {
    return <Navigate to="/bad-request" replace />;
  }

  const onSubmit = () => {
    console.log("LANGUAGE:", language);
    console.log("Code:", code);
  };

  return (
    <div>
      <select value={language} onChange={(e) => setLanguage(e.target.value as LANGUAGE)}>
        {languages.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.name}
          </option>
        ))}
      </select>
      <CodeEditor language={language} value={code} onChange={setCode} />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default SubmitCode;

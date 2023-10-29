import React, { useState } from "react";
import TailwindStyledPage from "./page/TailwindStyledPage.tsx";
import ScssStyledPage from "./page/ScssStyledPage.tsx";
import DefaultPage from "./page/DefaultPage.tsx";

type PageKey = "tailwind" | "scss";

const pages = new Map<PageKey, React.FC>([
  ["tailwind", TailwindStyledPage],
  ["scss", ScssStyledPage],
]);

function App() {
  const [page, setPage] = useState<PageKey | null>(null);

  return (
    <div>
      <h1>Vite + React</h1>
      <nav>
        <button onClick={() => setPage("tailwind")}>Tailwind page</button>
        <button onClick={() => setPage("scss")}>SCSS page</button>
      </nav>
      {React.createElement(
        (page === null ? undefined : pages.get(page)) ?? DefaultPage,
      )}
    </div>
  );
}

export default App;

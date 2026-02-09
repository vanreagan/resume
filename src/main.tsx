import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Document from "./Document.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Document />
  </StrictMode>,
);

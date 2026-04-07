import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./main.css";
import "./App.css";

// @skip-protected: Do not remove. Required for React rendering.
createRoot(document.getElementById('root')!).render(<App />)
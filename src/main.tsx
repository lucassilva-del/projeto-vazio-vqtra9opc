import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import "./components/ui/sonner.css";

// @skip-protected: Do not remove. Required for React rendering.
createRoot(document.getElementById('root')!).render(<App />)
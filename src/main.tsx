
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './fallback.css' // Add fallback CSS

// Add a global error handler
window.addEventListener('error', (event) => {
  console.error('Global error caught:', event.error);
  // Optionally report to a service or show a user-friendly message
});

// Add a promise rejection handler
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

// Create a more resilient root
const rootElement = document.getElementById("root");
if (rootElement) {
  try {
    createRoot(rootElement).render(<App />);
  } catch (error) {
    console.error("Failed to render app:", error);
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center;">
        <h1 style="color: #1e3a8a; margin-bottom: 10px;">Something went wrong</h1>
        <p>We're having trouble loading the application. Please try refreshing the page.</p>
        <button onclick="window.location.reload()" style="
          background-color: #1e3a8a;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          margin-top: 20px;
          cursor: pointer;
        ">Refresh Page</button>
      </div>
    `;
  }
} else {
  console.error("Root element not found");
}

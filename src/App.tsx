
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";

// Create a new QueryClient instance outside the component
const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={
                <ErrorBoundary fallback={<div className="p-4">Error loading Home page</div>}>
                  <Index />
                </ErrorBoundary>
              } />
              <Route path="/projects" element={
                <ErrorBoundary fallback={<div className="p-4">Error loading Projects page</div>}>
                  <Projects />
                </ErrorBoundary>
              } />
              <Route path="/contact" element={
                <ErrorBoundary fallback={<div className="p-4">Error loading Contact page</div>}>
                  <Contact />
                </ErrorBoundary>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ErrorBoundary>
          <WhatsAppButton />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;

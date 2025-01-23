import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";
import MealPlans from "./pages/MealPlans";
import Coaches from "./pages/Coaches";

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/meal-plans" element={<MealPlans />} />
            <Route path="/coaches" element={<Coaches />} />
          </Routes>
        </Layout>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
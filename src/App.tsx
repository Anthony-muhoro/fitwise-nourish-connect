import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ClerkProvider, SignIn, SignUp, useAuth } from "@clerk/clerk-react";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";
import MealPlans from "./pages/MealPlans";
import Coaches from "./pages/Coaches";
import Landing from "./pages/Landing";

const CLERK_PUBLISHABLE_KEY = "pk_test_Z2VuZXJhbC1jb2JyYS04Ny5jbGVyay5hY2NvdW50cy5kZXYk";

const queryClient = new QueryClient();

// Protected Layout component
const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn, isLoaded } = useAuth();
  
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  
  if (!isSignedIn) {
    return <Navigate to="/" />;
  }

  return <Layout>{children}</Layout>;
};

const App = () => (
  <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Landing />} />
            <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
            <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
            
            {/* Protected routes */}
            <Route path="/dashboard" element={
              <ProtectedLayout>
                <Profile />
              </ProtectedLayout>
            } />
            <Route path="/meal-plans" element={
              <ProtectedLayout>
                <MealPlans />
              </ProtectedLayout>
            } />
            <Route path="/coaches" element={
              <ProtectedLayout>
                <Coaches />
              </ProtectedLayout>
            } />
          </Routes>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </ClerkProvider>
);

export default App;
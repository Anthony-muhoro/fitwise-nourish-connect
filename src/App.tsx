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

// Your Clerk Publishable Key
const CLERK_PUBLISHABLE_KEY = "pk_test_Z2VuZXJhbC1jb2JyYS04Ny5jbGVyay5hY2NvdW50cy5kZXYk";

const queryClient = new QueryClient();

// Protected Route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn, isLoaded } = useAuth();
  
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  
  if (!isSignedIn) {
    return <Navigate to="/sign-in" />;
  }

  return <>{children}</>;
};

const App = () => (
  <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Layout>
            <Routes>
              <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
              <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/meal-plans"
                element={
                  <ProtectedRoute>
                    <MealPlans />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/coaches"
                element={
                  <ProtectedRoute>
                    <Coaches />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Layout>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </ClerkProvider>
);

export default App;
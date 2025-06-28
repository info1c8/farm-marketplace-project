import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";
import Farmers from "./pages/Farmers";
import About from "./pages/About";
import HowToBuy from "./pages/HowToBuy";
import Promotions from "./pages/Promotions";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:categorySlug" element={<Catalog />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/farmers" element={<Farmers />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-to-buy" element={<HowToBuy />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacts" element={<Contacts />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
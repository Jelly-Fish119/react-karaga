import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopNavbar from './components/Navbar';
import CreateUser from './pages/CreateUser';
import Login from './components/Login';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CreateProfile from './pages/CreateProfile';
import CreatePromotional from './pages/CreatePromotional';
import ManageArtisanBlogs from './pages/ManageArtisanBlogs';
import ArtisonStory from './pages/ArtisonStory';
import SocialPlugins from './pages/SocialPlugins';
import Certificate from './pages/Certificate';
import CreatePopupBanner from './pages/CreatePopupBanner';
import CreateHomeBanner from './pages/CreateHomeBanner';
import FeaturedNowBannner from './pages/FeaturedNowBannner';
import RecentAddition from './pages/RecentAddition';
import GreatSavings from './pages/GreatSavings';
import SimilarProducts from './pages/SimilarProducts';
import LandingPageAds from './pages/LandingPageAds';
import SetWardrobe from './pages/SetWardrobe';
import MainMenuTitle1 from './pages/MainMenuTitle1';
import MainMenuTitleInner1 from './pages/MainMenuTitleInner1';
import MainMenuTitle2 from './pages/MainMenuTitle2';
import MainSubMenuTitle2 from './pages/MainSubMenuTitle2';
import MainMenuTitileInner2 from './pages/MainMenuTitileInner2';

// Placeholder components for routes
const PlaceholderComponent = ({ title }) => (
  <div className="p-4">
    <h4>{title}</h4>
    <p>This component is under development.</p>
  </div>
);

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        
        {/* Protected Admin Routes */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <div className="app">
                <Sidebar />
                <div className="main-content">
                  <TopNavbar />
                  <Routes>
                    {/* Dashboard */}
                    <Route path="/" element={<PlaceholderComponent title="Dashboard" />} />

                    {/* Admin & User Management */}
                    <Route path="/create-user" element={<CreateUser />} />
                    <Route path="/manage-users" element={<PlaceholderComponent title="Manage Users" />} />
                    <Route path="/user-roles" element={<PlaceholderComponent title="User Roles" />} />

                    {/* Artisan Portfolio */}
                    <Route path="/create-profile" element={<CreateProfile/>} />
                    <Route path="/promotions-testimonial" element={<CreatePromotional/>} />
                    <Route path="/product-catalog" element={<PlaceholderComponent title="Product Catalog" />} />
                    <Route path="/artisan-blogs" element={<ManageArtisanBlogs/>} />
                    <Route path="/artisan-story" element={<ArtisonStory/>} />
                    <Route path="/social-share" element={<SocialPlugins/>} />
                    <Route path="/certifications" element={<Certificate/>} />
                    <Route path="/artisan-dashboard" element={<PlaceholderComponent title="Artisan Dashboard" />} />

                    {/* Banner Management */}
                    <Route path="/popup-banner" element={<CreatePopupBanner/>} />
                    <Route path="/home-banner" element={<CreateHomeBanner/>} />
                    <Route path="/featured-now-banner" element={<FeaturedNowBannner/>} />
                    <Route path="/recent-addition" element={<RecentAddition/>} />
                    <Route path="/great-savings" element={<GreatSavings/>} />
                    <Route path="/similar-products" element={<SimilarProducts/>} />
                    <Route path="/landing-page-ads" element={<LandingPageAds/>} />
                    <Route path="/set-wardrobe" element={<SetWardrobe/>} />

                    {/* Menu Category */}
                    <Route path="/main-menu-title-1" element={<MainMenuTitle1/>} />
                    <Route path="/main-menu-title-inner" element={<MainMenuTitleInner1/>} />
                    <Route path="/main-menu-title-2" element={<MainMenuTitle2/>} />
                    <Route path="/main-sub-menu-title-2" element={<MainSubMenuTitle2/>} />
                    <Route path="/main-menu-title-inner-2" element={<MainMenuTitileInner2/>} />
                    <Route path="/products-category" element={<PlaceholderComponent title="Products & Category" />} />
                    <Route path="/bogo-setup" element={<PlaceholderComponent title="BOGO Setup" />} />

                    {/* Direct Product */}
                    <Route path="/featured-packages" element={<PlaceholderComponent title="Featured Packages" />} />

                    {/* Review Management */}
                    <Route path="/customer-reviews" element={<PlaceholderComponent title="Customer Reviews" />} />
                    <Route path="/manage-reviews" element={<PlaceholderComponent title="Manage Reviews" />} />

                    {/* Discount Coupon */}
                    <Route path="/limited-time-deals" element={<PlaceholderComponent title="Limited Time Deals" />} />
                    <Route path="/purchase-requirements" element={<PlaceholderComponent title="Purchase Requirements" />} />
                    <Route path="/view-discounts" element={<PlaceholderComponent title="View Discounts" />} />

                    {/* Shipping */}
                    <Route path="/shipping-rates" element={<PlaceholderComponent title="Shipping Rates" />} />
                    <Route path="/delivery-areas" element={<PlaceholderComponent title="Delivery Areas" />} />

                    {/* Company Events */}
                    <Route path="/company-events" element={<PlaceholderComponent title="Company Events" />} />

                    {/* Contact & Enquiry */}
                    <Route path="/contact-enquiry" element={<PlaceholderComponent title="Contact Enquiry" />} />
                    <Route path="/product-enquiry" element={<PlaceholderComponent title="Product Enquiry" />} />

                    {/* Web */}
                    <Route path="/about" element={<PlaceholderComponent title="About" />} />
                    <Route path="/management" element={<PlaceholderComponent title="Management" />} />
                    <Route path="/vision-mission" element={<PlaceholderComponent title="Vision & Mission" />} />
                    <Route path="/banking" element={<PlaceholderComponent title="Banking" />} />
                    <Route path="/policies" element={<PlaceholderComponent title="Policies" />} />
                    <Route path="/contact" element={<PlaceholderComponent title="Contact" />} />

                    {/* Footer */}
                    <Route path="/footer" element={<PlaceholderComponent title="Footer" />} />

                    {/* Social Media */}
                    <Route path="/social-media" element={<PlaceholderComponent title="Social Media" />} />

                    {/* Size Chart */}
                    <Route path="/size-chart" element={<PlaceholderComponent title="Size Chart" />} />

                    {/* QR Code */}
                    <Route path="/qr-code" element={<PlaceholderComponent title="QR Code" />} />

                    {/* Quantity Management */}
                    <Route path="/quantity" element={<PlaceholderComponent title="Quantity Management" />} />

                    {/* Color Management */}
                    <Route path="/color" element={<PlaceholderComponent title="Color Management" />} />

                    {/* Track Order */}
                    <Route path="/track-order" element={<PlaceholderComponent title="Track Order" />} />

                    {/* Resources */}
                    <Route path="/resources" element={<PlaceholderComponent title="Resources" />} />

                    {/* Sales Orders */}
                    <Route path="/enquiry-history" element={<PlaceholderComponent title="Enquiry History" />} />
                    <Route path="/cart-history" element={<PlaceholderComponent title="Cart History" />} />
                    <Route path="/bulk-enquiry" element={<PlaceholderComponent title="Bulk Enquiry" />} />
                    <Route path="/order-confirmation" element={<PlaceholderComponent title="Order Confirmation" />} />
                    <Route path="/payment-success" element={<PlaceholderComponent title="Payment Success" />} />
                    <Route path="/payment-error" element={<PlaceholderComponent title="Payment Error" />} />
                    <Route path="/stock-alerts" element={<PlaceholderComponent title="Stock Alerts" />} />
                    <Route path="/traffic-analytics" element={<PlaceholderComponent title="Traffic Analytics" />} />
                    <Route path="/best-selling" element={<PlaceholderComponent title="Best Selling" />} />

                    {/* Refunds */}
                    <Route path="/refunds" element={<PlaceholderComponent title="Refunds" />} />

                    {/* Customer Management */}
                    <Route path="/customer-data" element={<PlaceholderComponent title="Customer Data" />} />
                    <Route path="/user-status" element={<PlaceholderComponent title="User Status" />} />

                    {/* Support */}
                    <Route path="/support-tickets" element={<PlaceholderComponent title="Support Tickets" />} />
                    <Route path="/contact-support" element={<PlaceholderComponent title="Contact Support" />} />

                    {/* Security */}
                    <Route path="/security" element={<PlaceholderComponent title="Security" />} />

                    {/* Analytics */}
                    <Route path="/sales-summary" element={<PlaceholderComponent title="Sales Summary" />} />
                    <Route path="/product-visitors" element={<PlaceholderComponent title="Product Visitors" />} />
                    <Route path="/user-log" element={<PlaceholderComponent title="User Log" />} />
                  </Routes>
                </div>
              </div>
            </ProtectedRoute>
          }
        />

        {/* Root route redirect to admin */}
        <Route path="/" element={<Navigate to="/" replace />} />

        {/* Catch all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

import React, { useState } from 'react';
import { Nav, Collapse } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { 
  BsSpeedometer2, BsPeople, BsCollection, BsMenuButton, BsListNested, 
  BsBox, BsGift, BsPersonPlus, BsStars, BsChatSquareText, BsStar,
  BsChevronDown, BsChevronUp, BsImage, BsFileText, BsTruck, BsNewspaper,
  BsEnvelope, BsFileEarmark, BsLayoutTextWindow, BsFacebook, BsRulers,
  BsQrCode, BsBoxes, BsPalette, BsSearch, BsGraphUp, BsCash, BsPerson,
  BsHeadset, BsShieldLock, BsBarChart, BsBoxArrowRight
} from 'react-icons/bs';
import './Sidebar.css';
import image from '../assets/logo-light.jpg';

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({});
  const navigate = useNavigate();

  const toggleMenu = (menuId) => {
    setOpenMenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId]
    }));
  };

  const handleLogout = () => {
    // Clear authentication token
    localStorage.removeItem('token');
    // Redirect to login page
    navigate('/login');
  };

  return (
    <div className="sidebar bg-dark text-light">
      <div className="border-bottom border-secondary p-3 ">
        <img src={image} alt="Rishikesh Handmade" className="img-fluid rounded-3 " style={{ maxWidth: '200px' }} />
      </div>

      <div className="py-2">
        <div className="text-uppercase small fw-bold text-secondary px-4 py-2">General</div>
        <Nav className="flex-column">
          <Nav.Link as={Link} to="/dashboard" className="px-4 py-3 text-light d-flex align-items-center gap-2">
            <BsSpeedometer2 className="fs-5" /> Dashboard
          </Nav.Link>

          {/* & User Account */}
          <div className="nav-item">
            <Nav.Link 
              onClick={() => toggleMenu('admin')}
              className="px-4 py-3 text-light d-flex align-items-center justify-content-between"
            >
              <div className="d-flex align-items-center gap-2">
                <BsPeople className="fs-5" /> 
                <span>Create/Manage Admin & User</span>
              </div>
              {openMenus.admin ? <BsChevronUp /> : <BsChevronDown />}
            </Nav.Link>
            <Collapse in={openMenus.admin}>
              <div>
                <Nav className="flex-column ms-4 border-start border-secondary">
                  <Nav.Link as={Link} to="/create-user" className="px-4 py-2 text-light text-start">Create User</Nav.Link>
                  <Nav.Link as={Link} to="/manage-users" className="px-4 py-2 text-light text-start">Manage Users</Nav.Link>
                  <Nav.Link as={Link} to="/user-roles" className="px-4 py-2 text-light text-start">User Roles</Nav.Link>
                </Nav>
              </div>
            </Collapse>
          </div>

          {/* Artisan Portfolio */}
          <div className="nav-item">
            <Nav.Link 
              onClick={() => toggleMenu('portfolio')}
              className="px-4 py-3 text-light d-flex align-items-center justify-content-between"
            >
              <div className="d-flex align-items-center gap-2">
                <BsCollection className="fs-5" />
                <span>Create Artisan Portfolio</span>
              </div>
              {openMenus.portfolio ? <BsChevronUp /> : <BsChevronDown />}
            </Nav.Link>
            <Collapse in={openMenus.portfolio}>
              <div>
                <Nav className="flex-column ms-4 border-start border-secondary">
                  <Nav.Link as={Link} to="/create-profile" className="px-4 py-2 text-light text-start">Create Profile</Nav.Link>
                  <Nav.Link as={Link} to="/promotions-testimonial" className="px-4 py-2 text-light text-start">Create Promotions Testimonial/Review</Nav.Link>
                  <Nav.Link as={Link} to="/product-catalog" className="px-4 py-2 text-light text-start">Create Product Catalog</Nav.Link>
                  <Nav.Link as={Link} to="/artisan-blogs" className="px-4 py-2 text-light text-start">Create/Manage Artisan Blogs & Videos</Nav.Link>
                  <Nav.Link as={Link} to="/artisan-story" className="px-4 py-2 text-light text-start">Artisan Story</Nav.Link>
                  <Nav.Link as={Link} to="/social-share" className="px-4 py-2 text-light text-start">Share Plugin For Social Platform</Nav.Link>
                  <Nav.Link as={Link} to="/certifications" className="px-4 py-2 text-light text-start">Certification & Achievements</Nav.Link>
                  <Nav.Link as={Link} to="/artisan-dashboard" className="px-4 py-2 text-light text-start">Artisan Dashboard</Nav.Link>
                </Nav>
              </div>
            </Collapse>
          </div>

          {/* Main Banner */}
          <div className="nav-item">
            <Nav.Link 
              onClick={() => toggleMenu('banner')}
              className="px-4 py-3 text-light d-flex align-items-center justify-content-between"
            >
              <div className="d-flex align-items-center gap-2">
                <BsMenuButton className="fs-5" />
                <span>Manage Create Main Banner</span>
              </div>
              {openMenus.banner ? <BsChevronUp /> : <BsChevronDown />}
            </Nav.Link>
            <Collapse in={openMenus.banner}>
              <div>
                <Nav className="flex-column ms-4 border-start border-secondary">
                  <Nav.Link as={Link} to="/popup-banner" className="px-4 py-2 text-light text-start">Create Popup Banner</Nav.Link>
                  <Nav.Link as={Link} to="/home-banner" className="px-4 py-2 text-light text-start">Create Home Page Banner</Nav.Link>
                  <Nav.Link as={Link} to="/featured-now-banner" className="px-4 py-2 text-light text-start">Create Featured Now Banner</Nav.Link>
                  <Nav.Link as={Link} to="/recent-addition" className="px-4 py-2 text-light text-start">Create Recent Addition Banner</Nav.Link>
                  <Nav.Link as={Link} to="/great-savings" className="px-4 py-2 text-light text-start">Create Great Savings Banner</Nav.Link>
                  <Nav.Link as={Link} to="/similar-products" className="px-4 py-2 text-light text-start">Create Similar Products Banner</Nav.Link>
                  <Nav.Link as={Link} to="/landing-page-ads" className="px-4 py-2 text-light text-start">Create Landing Page Advertisement Section</Nav.Link>
                  <Nav.Link as={Link} to="/set-wardrobe" className="px-4 py-2 text-light text-start">Set Wardrobe</Nav.Link>
                </Nav>
              </div>
            </Collapse>
          </div>

          {/* Menu Category */}
          <div className="nav-item">
            <Nav.Link 
              onClick={() => toggleMenu('menu')}
              className="px-4 py-3 text-light d-flex align-items-center justify-content-between"
            >
              <div className="d-flex align-items-center gap-2">
                <BsListNested className="fs-5" />
                <span>Create Main Menu Category</span>
              </div>
              {openMenus.menu ? <BsChevronUp /> : <BsChevronDown />}
            </Nav.Link>
            <Collapse in={openMenus.menu}>
              <div>
                <Nav className="flex-column ms-4 border-start border-secondary">
                  <Nav.Link as={Link} to="/main-menu-title-1" className="px-4 py-2 text-light text-start">Main Menu Title Style 1</Nav.Link>
                  <Nav.Link as={Link} to="/main-menu-title-inner" className="px-4 py-2 text-light text-start">Main Menu Inner Title Style </Nav.Link>
                  <Nav.Link as={Link} to="/main-menu-title-2" className="px-4 py-2 text-light text-start">Main Menu Title Style 2</Nav.Link>
                  <Nav.Link as={Link} to="/main-sub-menu-title-2" className="px-4 py-2 text-light text-start">Main Sub Menu Title Style 2</Nav.Link>
                  <Nav.Link as={Link} to="/main-menu-title-inner-2" className="px-4 py-2 text-light text-start">Main Menu Inner Title Style 2</Nav.Link>
                  <Nav.Link as={Link} to="/products-category" className="px-4 py-2 text-light text-start">Manage Products & Category</Nav.Link>
                  <Nav.Link as={Link} to="/bogo-setup" className="px-4 py-2 text-light text-start">Buy One Get One (BOGO) - Setup</Nav.Link>
                </Nav>
              </div>
            </Collapse>
          </div>

          {/* Direct Product */}
          <div className="nav-item">
            <Nav.Link 
              onClick={() => toggleMenu('direct-product')}
              className="px-4 py-3 text-light d-flex align-items-center justify-content-between"
            >
              <div className="d-flex align-items-center gap-2">
                <BsBox className="fs-5" />
                <span>Add Direct Product</span>
              </div>
              {openMenus.directProduct ? <BsChevronUp /> : <BsChevronDown />}
            </Nav.Link>
            <Collapse in={openMenus.directProduct}>
              <div>
                <Nav className="flex-column ms-4 border-start border-secondary">
                  <Nav.Link as={Link} to="/featured-packages" className="px-4 py-2 text-light text-start">Manage Artisan Featured Packages</Nav.Link>
                </Nav>
              </div>
            </Collapse>
          </div>

          {/* Review Management */}
          <div className="nav-item">
            <Nav.Link 
              onClick={() => toggleMenu('review')}
              className="px-4 py-3 text-light d-flex align-items-center justify-content-between"
            >
              <div className="d-flex align-items-center gap-2">
                <BsChatSquareText className="fs-5" />
                <span>Review & Feedback Management</span>
              </div>
              {openMenus.review ? <BsChevronUp /> : <BsChevronDown />}
            </Nav.Link>
            <Collapse in={openMenus.review}>
              <div>
                <Nav className="flex-column ms-4 border-start border-secondary">
                  <Nav.Link as={Link} to="/customer-reviews" className="px-4 py-2 text-light text-start">Monitor Customer Reviews</Nav.Link>
                  <Nav.Link as={Link} to="/manage-reviews" className="px-4 py-2 text-light text-start">Reply/Approve/Reject Reviews</Nav.Link>
                </Nav>
              </div>
            </Collapse>
          </div>

          {/* Discount Coupon */}
          <div className="nav-item">
            <Nav.Link 
              onClick={() => toggleMenu('coupon')}
              className="px-4 py-3 text-light d-flex align-items-center justify-content-between"
            >
              <div className="d-flex align-items-center gap-2">
                <BsGift className="fs-5" />
                <span>Create Discount Coupon Code</span>
              </div>
              {openMenus.coupon ? <BsChevronUp /> : <BsChevronDown />}
            </Nav.Link>
            <Collapse in={openMenus.coupon}>
              <div>
                <Nav className="flex-column ms-4 border-start border-secondary">
                  <Nav.Link as={Link} to="/limited-time-deals" className="px-4 py-2 text-light text-start">Limited-Time Deals</Nav.Link>
                  <Nav.Link as={Link} to="/purchase-requirements" className="px-4 py-2 text-light text-start">Minimum Purchase Requirements</Nav.Link>
                  <Nav.Link as={Link} to="/view-discounts" className="px-4 py-2 text-light text-start">View All Discounts</Nav.Link>
                </Nav>
              </div>
            </Collapse>
          </div>

          {/* Shipping */}
          <div className="nav-item">
            <Nav.Link 
              onClick={() => toggleMenu('shipping')}
              className="px-4 py-3 text-light d-flex align-items-center justify-content-between"
            >
              <div className="d-flex align-items-center gap-2">
                <BsTruck className="fs-5" />
                <span>Shipping Key Features</span>
              </div>
              {openMenus.shipping ? <BsChevronUp /> : <BsChevronDown />}
            </Nav.Link>
            <Collapse in={openMenus.shipping}>
              <div>
                <Nav className="flex-column ms-4 border-start border-secondary">
                  <Nav.Link as={Link} to="/shipping-rates" className="px-4 py-2 text-light text-start">Set Shipping Rates</Nav.Link>
                  <Nav.Link as={Link} to="/delivery-areas" className="px-4 py-2 text-light text-start">Manage Delivery Areas</Nav.Link>
                </Nav>
              </div>
            </Collapse>
          </div>

          {/* Company Events */}
          <Nav.Link as={Link} to="/company-events" className="px-4 py-3 text-light d-flex align-items-center gap-2">
            <BsNewspaper className="fs-5" /> Create Company Events News Section
          </Nav.Link>

          {/* Contact & Enquiry */}
          <Nav.Link as={Link} to="/contact-enquiry" className="px-4 py-3 text-light d-flex align-items-center gap-2">
            <BsEnvelope className="fs-5" /> Contact Page Enquiry
          </Nav.Link>

          {/* Product Enquiry */}
          <Nav.Link as={Link} to="/product-enquiry" className="px-4 py-3 text-light d-flex align-items-center gap-2">
            <BsFileText className="fs-5" /> Product Enquiry Log
          </Nav.Link>

          {/* Webpages */}
          <div className="nav-item">
            <Nav.Link 
              onClick={() => toggleMenu('webpages')}
              className="px-4 py-3 text-light d-flex align-items-center justify-content-between"
            >
              <div className="d-flex align-items-center gap-2">
                <BsLayoutTextWindow className="fs-5" />
                <span>Manage Webpages</span>
              </div>
              {openMenus.webpages ? <BsChevronUp /> : <BsChevronDown />}
            </Nav.Link>
            <Collapse in={openMenus.webpages}>
              <div>
                <Nav className="flex-column ms-4 border-start border-secondary">
                  <Nav.Link as={Link} to="/about" className="px-4 py-2 text-light text-start">About</Nav.Link>
                  <Nav.Link as={Link} to="/management" className="px-4 py-2 text-light text-start">Management</Nav.Link>
                  <Nav.Link as={Link} to="/vision-mission" className="px-4 py-2 text-light text-start">Vision Or Mission</Nav.Link>
                  <Nav.Link as={Link} to="/banking" className="px-4 py-2 text-light text-start">Banking With Us</Nav.Link>
                  <Nav.Link as={Link} to="/policies" className="px-4 py-2 text-light text-start">Policy</Nav.Link>
                  <Nav.Link as={Link} to="/contact" className="px-4 py-2 text-light text-start">Contact Us</Nav.Link>
                </Nav>
              </div>
            </Collapse>
          </div>

          {/* Footer */}
          <Nav.Link as={Link} to="/footer" className="px-4 py-3 text-light d-flex align-items-center gap-2">
            <BsLayoutTextWindow className="fs-5" /> Footer Dynamic
          </Nav.Link>

          {/* Social Media */}
          <Nav.Link as={Link} to="/social-media" className="px-4 py-3 text-light d-flex align-items-center gap-2">
            <BsFacebook className="fs-5" /> Create Social Media Plugin Dashboard
          </Nav.Link>

          {/* Size Chart */}
          <Nav.Link as={Link} to="/size-chart" className="px-4 py-3 text-light d-flex align-items-center gap-2">
            <BsRulers className="fs-5" /> Size Chart Management
          </Nav.Link>

          {/* QR Code */}
          <Nav.Link as={Link} to="/qr-code" className="px-4 py-3 text-light d-flex align-items-center gap-2">
            <BsQrCode className="fs-5" /> Product QR Code Generation
          </Nav.Link>

          {/* Quantity Management */}
          <Nav.Link as={Link} to="/quantity" className="px-4 py-3 text-light d-flex align-items-center gap-2">
            <BsBoxes className="fs-5" /> Qty Management
          </Nav.Link>

          {/* Color Management */}
          <Nav.Link as={Link} to="/color" className="px-4 py-3 text-light d-flex align-items-center gap-2">
            <BsPalette className="fs-5" /> Color Management
          </Nav.Link>

          {/* Track Order */}
          <Nav.Link as={Link} to="/track-order" className="px-4 py-3 text-light d-flex align-items-center gap-2">
            <BsSearch className="fs-5" /> Creating Track Order
          </Nav.Link>

          {/* Resources */}
          <Nav.Link as={Link} to="/resources" className="px-4 py-3 text-light d-flex align-items-center gap-2">
            <BsFileText className="fs-5" /> Create Resources
          </Nav.Link>

          {/* Sales Orders */}
          <div className="nav-item">
            <Nav.Link 
              onClick={() => toggleMenu('sales')}
              className="px-4 py-3 text-light d-flex align-items-center justify-content-between"
            >
              <div className="d-flex align-items-center gap-2">
                <BsGraphUp className="fs-5" />
                <span>Tracks and Manages Customer Sales Orders</span>
              </div>
              {openMenus.sales ? <BsChevronUp /> : <BsChevronDown />}
            </Nav.Link>
            <Collapse in={openMenus.sales}>
              <div>
                <Nav className="flex-column ms-4 border-start border-secondary">
                  <Nav.Link as={Link} to="/enquiry-history" className="px-4 py-2 text-light text-start">Enquiry Order History</Nav.Link>
                  <Nav.Link as={Link} to="/cart-history" className="px-4 py-2 text-light text-start">Add To Cart Order History</Nav.Link>
                  <Nav.Link as={Link} to="/bulk-enquiry" className="px-4 py-2 text-light text-start">Bulk Order Enquiry History</Nav.Link>
                  <Nav.Link as={Link} to="/order-confirmation" className="px-4 py-2 text-light text-start">Order Confirmation Page</Nav.Link>
                  <Nav.Link as={Link} to="/payment-success" className="px-4 py-2 text-light text-start">Payment Gateway Success Report</Nav.Link>
                  <Nav.Link as={Link} to="/payment-error" className="px-4 py-2 text-light text-start">Payment Gateway Error Report</Nav.Link>
                  <Nav.Link as={Link} to="/stock-alerts" className="px-4 py-2 text-light text-start">Product Stock Alerts</Nav.Link>
                  <Nav.Link as={Link} to="/traffic-analytics" className="px-4 py-2 text-light text-start">Website Traffic Analytics</Nav.Link>
                  <Nav.Link as={Link} to="/best-selling" className="px-4 py-2 text-light text-start">Track Best-selling Products</Nav.Link>
                </Nav>
              </div>
            </Collapse>
          </div>

          {/* Refunds */}
          <Nav.Link as={Link} to="/refunds" className="px-4 py-3 text-light d-flex align-items-center gap-2">
            <BsCash className="fs-5" /> Manage Refunds & Chargebacks
          </Nav.Link>

          {/* Customer Management */}
          <div className="nav-item">
            <Nav.Link 
              onClick={() => toggleMenu('customer')}
              className="px-4 py-3 text-light d-flex align-items-center justify-content-between"
            >
              <div className="d-flex align-items-center gap-2">
                <BsPerson className="fs-5" />
                <span>Customer Management</span>
              </div>
              {openMenus.customer ? <BsChevronUp /> : <BsChevronDown />}
            </Nav.Link>
            <Collapse in={openMenus.customer}>
              <div>
                <Nav className="flex-column ms-4 border-start border-secondary">
                  <Nav.Link as={Link} to="/customer-data" className="px-4 py-2 text-light text-start">Customer Data Log</Nav.Link>
                  <Nav.Link as={Link} to="/user-status" className="px-4 py-2 text-light text-start">Account Status Management</Nav.Link>
                </Nav>
              </div>
            </Collapse>
          </div>

          {/* Support */}
          <Nav.Link as={Link} to="/support-tickets" className="px-4 py-3 text-light d-flex align-items-center gap-2">
            <BsHeadset className="fs-5" /> Support Tickets
          </Nav.Link>

          {/* Contact Support */}
          <Nav.Link as={Link} to="/contact-support" className="px-4 py-3 text-light d-flex align-items-center gap-2">
            <BsEnvelope className="fs-5" /> Contact Us & Customer Support
          </Nav.Link>

          {/* Security */}
          <Nav.Link as={Link} to="/security" className="px-4 py-3 text-light d-flex align-items-center gap-2">
            <BsShieldLock className="fs-5" /> Security & Data Backup
          </Nav.Link>

          {/* Analytics */}
          <div className="nav-item">
            <Nav.Link 
              onClick={() => toggleMenu('analytics')}
              className="px-4 py-3 text-light d-flex align-items-center justify-content-between"
            >
              <div className="d-flex align-items-center gap-2">
                <BsBarChart className="fs-5" />
                <span>Analytics & Logs</span>
              </div>
              {openMenus.analytics ? <BsChevronUp /> : <BsChevronDown />}
            </Nav.Link>
            <Collapse in={openMenus.analytics}>
              <div>
                <Nav className="flex-column ms-4 border-start border-secondary">
                  <Nav.Link as={Link} to="/sales-summary" className="px-4 py-2 text-light text-start">Sales & Revenue Summary</Nav.Link>
                  <Nav.Link as={Link} to="/product-visitors" className="px-4 py-2 text-light text-start">Product Visitors Log</Nav.Link>
                  <Nav.Link as={Link} to="/user-log" className="px-4 py-2 text-light text-start">User Log</Nav.Link>
                </Nav>
              </div>
            </Collapse>
          </div>

          {/* Logout */}
          <div className="mt-auto">
            <Nav.Link 
              onClick={handleLogout}
              className="px-4 py-3 text-light d-flex align-items-center gap-2 logout-btn"
            >
              <BsBoxArrowRight className="fs-5" /> Log Out
            </Nav.Link>
          </div>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar; 
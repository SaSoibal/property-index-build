import './App.css';
import React, { lazy, Suspense } from "react";
// Route 
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
// Default Thim Components
import Loader from "./Helper/Loader";
import BankDetails from './pages/DefaultPages/BankDetails';
import FacebookChat from "./components/FacebookChat";
import MessengerCustomerChat from 'react-messenger-customer-chat';
const HomePages = lazy(() => import("./pages/DefaultPages/dHome"));
const AddProperty = lazy(() => import("./pages/DefaultPages/AddProperty"));
const Blog = lazy(() => import("./pages/DefaultPages/Blog"));
const BlogDetails = lazy(() => import("./pages/DefaultPages/BlogDetails"));
const AreaGuides = lazy(() => import("./pages/DefaultPages/AreaGuides"));
const AreaGuidesDetails = lazy(() => import("./pages/DefaultPages/AreaGuidesDetails"));
const BuySellGuide = lazy(() => import("./pages/DefaultPages/BuySellGuide"));
const ApartmentsForSale = lazy(() => import("./pages/DefaultPages/ApartmentsForSale"));
const BuyingProperty = lazy(() => import("./pages/DefaultPages/BuyingProperty"));
const LoanCalculator = lazy(() => import("./pages/DefaultPages/LoanCalculator"));
const ProjectNew = lazy(() => import("./pages/DefaultPages/ProjectNew"));
const NewProjectsDetails = lazy(() => import("./pages/DefaultPages/NewProjectsDetails"));
const HomeLoan = lazy(() => import("./pages/DefaultPages/HomeLoan"));
const ViewAllBanks = lazy(() => import("./pages/DefaultPages/ViewAllBanks"));
const InteriorPages = lazy(() => import("./pages/DefaultPages/InteriorPages"));
const InteriorDetailsPages = lazy(() => import("./pages/DefaultPages/InteriorDetailsPages"));
const ApartmentsForSaleDetails = lazy(() => import("./pages/DefaultPages/ApartmentsForSaleDetails"));
const AboutUs = lazy(() => import("./pages/DefaultPages/AboutUs"));
const ContactUs = lazy(() => import("./pages/DefaultPages/ContactUs"));
const Career = lazy(() => import("./pages/DefaultPages/Career"));

function App() {
    return (
        <div className="App">
            <ScrollToTop />
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<HomePages />}></Route>
                    <Route path="/add-property" element={<AddProperty />}></Route>
                    <Route path="/terms-of-service" element={<AddProperty />}></Route>
                    <Route path="/privacy-policy" element={<AddProperty />}></Route>
                    <Route path="/about-us" element={<AboutUs />}></Route>
                    <Route path="/contact-us" element={<ContactUs />}></Route>
                    <Route path="/career" element={<Career />}></Route>
                    <Route path="/blog" element={<Blog />}></Route>
                    <Route path="/blog-details/:slug" element={<BlogDetails />}></Route>
                    <Route path="/area-guides" element={<AreaGuides />}></Route>
                    <Route path="/area-guides-details/:slug" element={<AreaGuidesDetails />}></Route>
                    <Route path="/real-estate-solutions" element={<BuySellGuide />}></Route>
                    <Route path="/real-estate-solutions/:slug" element={<BuyingProperty />}></Route>
                    <Route path="/loan-calculator" element={<LoanCalculator />}></Route>
                    <Route path="/new-projects" element={<ProjectNew />}></Route>
                    <Route path="/projects-details" element={<NewProjectsDetails />}></Route>
                    <Route path="/home-loan" element={<HomeLoan />}></Route>
                    <Route path="/view-all-banks" element={<ViewAllBanks />}></Route>
                    <Route path="/loan-banks/:id" element={<BankDetails />}></Route>
                    <Route path="/interior" element={<InteriorPages />}></Route>
                    <Route path="/interior-details/:slug" element={<InteriorDetailsPages />}></Route>
                    <Route path="/property/:slug" element={<ApartmentsForSale />}></Route>
                    <Route path="/property-details" element={<ApartmentsForSaleDetails />}></Route>
                </Routes>
            </Suspense>

            <MessengerCustomerChat pageId="306739029197887" appId="502523472533777"
            />
        </div>
    );
}

export default App;

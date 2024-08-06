import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Blog from "./routes/Blog";
import SantoriniPage from "./routes/SantoriniPage";
import Destinations from "./routes/Destinations";
import HolidayTypes from "./routes/HolidayTypes";
import ContactUs from "./routes/ContactUs";
import BookNow from "./routes/BookNow";
import Footer from "./components/Footer";
import LogIn from "./routes/LogIn";
import AboutUs from "./routes/AboutUs";
import AntelizHotel from "./routes/AntelizHotel";
import AntelizPrivateVilla from "./routes/AntelizPrivateVilla";
import MountKenyaPage from "./routes/MountKenyaPage";
import MaasaiMaraPage from "./routes/MaasaiMaraPage";
import AmboseliPage from "./routes/AmboseliPage";
import LakeNakuruPage from "./routes/LakeNakuruPage";
import SamburuPage from "./routes/SamburuPage";
import MountKilimanjaroPage from "./routes/MountKilimanjaroPage";
import SerengetiPage from "./routes/SerengetiPage";
import NgorongoroPage from "./routes/NgorongoroPage";
import LakeManyaraPage from "./routes/LakeManyaraPage";

import Samburu from "./routes/Trip destination details/Samburu";
import Amboseli from "./routes/Trip destination details/Amboseli";
import Chogoria from "./routes/Trip destination details/Chogoria";
import HikingChogoria from "./routes/Trip destination details/HikingChogoria";
import LakeNakuru from "./routes/Trip destination details/LakeNakuru";
import MaasaiMara from "./routes/Trip destination details/MaasaiMara";
import NaroMoru from "./routes/Trip destination details/NaroMoru";
import SirimonChogoria from "./routes/Trip destination details/SimironChogoria";
import SirimonFourDay from "./routes/Trip destination details/SirimonFourDay";
import SirimonSixDay from "./routes/Trip destination details/SirimonSixDay";
import Itinerary from "./routes/Itinerary.jsx";
import Admin from "./routes/Admin";
import AdminLayout from "./AdminLayout";
import { TooltipProvider } from "../src/components/ui/tooltip"; // Adjust the import path based on your project structure
import ManageBooking from "./routes/ManageBooking";

function App() {
  const location = useLocation();
  const hideNavbarAndFooter = location.pathname.startsWith('/admin-dashboard');

  // Scroll to the top when the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
     <TooltipProvider>
      {!hideNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/holiday-types" element={<HolidayTypes />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/book-now" element={<BookNow />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/create-booking" element={<Itinerary />} />

        <Route path="/santorini" element={<SantoriniPage />} />
        <Route path="/mount-kenya" element={<MountKenyaPage />} />
        <Route path="/maasai-mara" element={<MaasaiMaraPage />} />
        <Route path="/amboseli" element={<AmboseliPage />} />
        <Route path="/lake-nakuru" element={<LakeNakuruPage />} />
        <Route path="/samburu" element={<SamburuPage />} />
        <Route path="/mount-kilimanjaro" element={<MountKilimanjaroPage />} />
        <Route path="/serengeti" element={<SerengetiPage />} />
        <Route path="/ngorongoro" element={<NgorongoroPage />} />
        <Route path="/lake-manyara" element={<LakeManyaraPage />} />

        {/* Trip destination details */}
        <Route path="/samburu-info" element={<Samburu />} />
        <Route path="/amboseli-info" element={<Amboseli />} />
        <Route path="/chogoria-info" element={<Chogoria />} />
        <Route path="/hiking-chogoria-info" element={<HikingChogoria />} />
        <Route path="/lake-nakuru-info" element={<LakeNakuru />} />
        <Route path="/maasai-mara-info" element={<MaasaiMara />} />
        <Route path="/naro-moru-info" element={<NaroMoru />} />
        <Route path="/sirimon-chogoria-info" element={<SirimonChogoria />} />
        <Route path="/sirimon-four-day-info" element={<SirimonFourDay />} />
        <Route path="/sirimon-six-day-info" element={<SirimonSixDay />} />

        <Route path="/anteliz-suites" element={<AntelizHotel />} />
        <Route
          path="/anteliz-suites/anteliz-private-villa"
          element={<AntelizPrivateVilla />}
        />
        <Route path="/admin-dashboard" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="manage-booking" element={<ManageBooking />} />
        </Route>
      </Routes>
      {!hideNavbarAndFooter && <Footer />}
      </TooltipProvider>
    </div>
  );
}

export default App;

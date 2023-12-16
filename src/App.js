import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Blog from  "./routes/Blog"
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
import SamburuPage from "./routes/SamburuPage"
import MountKilimanjaroPage from "./routes/MountKilimanjaroPage"
import SerengetiPage from "./routes/SerengetiPage"
import NgorongoroPage from "./routes/NgorongoroPage"
import LakeManyaraPage from "./routes/LakeManyaraPage"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/holiday-types" element={<HolidayTypes />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/book-now" element={<BookNow />} />
        <Route path="/log-in" element={<LogIn />} />

        <Route path="/santorini" element={<SantoriniPage />} />
        <Route path="/mount-kenya" element={<MountKenyaPage />} />
        <Route path="/maasai-mara" element={<MaasaiMaraPage />} />
        <Route path="/amboseli" element={<AmboseliPage />} />
        <Route path="/lake-nakuru" element={<LakeNakuruPage />} />
        <Route path="/samburu" element={<SamburuPage />} />
        <Route path="/mount-kilimanjaro" element={<MountKilimanjaroPage/>} />
        <Route path="/serengeti" element={<SerengetiPage/>} />
        <Route path="/ngorongoro" element={<NgorongoroPage/>} />
        <Route path="/lake-manyara" element={<LakeManyaraPage/>} />
        <Route path="/anteliz-suites" element={<AntelizHotel />} />
        <Route
          path="/anteliz-suites/anteliz-private-villa"
          element={<AntelizPrivateVilla />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

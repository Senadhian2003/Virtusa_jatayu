import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Events from "./Components/Explore/events";
import EServices from "./Components/Explore/eServices";
import Media from "./Components/Explore/media";
import Eventdetail from "./Components/Explore/event-detail";
import Profile from "./Components/profile/profile";
import StaffProfile from "./Components/profile/staff-profile";
import Homepage from "./Components/Homepage/homepage";
import Articles from "./Components/Explore/articles";
import ArticleInfo from "./Components/Explore/articleInfo";
import SuggestForm from "./Components/Explore/suggestion";
import OrganizationRegister from "./Components/Homepage/organizationRegister";
import EventDetail from "./Components/Explore/event-detail";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/e_services" element={<EServices />} />
                 
                    <Route path="/explore/media" element={<Media />} />
                    <Route
                        path="/explore/event-detail"
                        element={<Eventdetail />}
                    />
                    <Route path="/profile/profile" element={<Profile />} />
           
                    <Route
                        path="/explore/profile/staffProfile"
                        element={<StaffProfile />}
                    />
                    <Route
                        path="/explore/profile/profile"
                        element={<Profile />}
                    />
                    <Route
                        path="/articles"
                        element={<Articles />}
                    />
                    <Route
                        path="/articles/:articleName"
                        element={<ArticleInfo />}
                    />

                    <Route
                        path="explore/suggest_form"
                        element={<SuggestForm />}
                    />
                    <Route
                        path="/register"
                        element={<OrganizationRegister />}
                    />
                    <Route
                        path="/searchQuery"
                        element={<EventDetail />}
                    />

                </Routes>
            </Router>
        </>
    );
}

export default App;

import { Route, Switch } from "react-router-dom";
import MainNavigattion from "./components/layout/MainNavigation";
import AboutusPage from "./pages/About";
import ConsultingServicesPage from "./pages/ConsultingServices";
import ContactUsPage from "./pages/ContactUs";
import HomePage from "./pages/Home";
import IndustriesServedPage from "./pages/IndustriesServed";
import OurProgressPage from "./pages/OurProgress";

function App() {
  return (
    <div>
      <MainNavigattion />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about-us">
          <AboutusPage />
        </Route>
        <Route path="/consulting-services">
          <ConsultingServicesPage />
        </Route>
        <Route path="industries-served">
          <IndustriesServedPage />
        </Route>
        <Route path="our-progress">
          <OurProgressPage />
        </Route>
        <Route path="contact-us">
          <ContactUsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

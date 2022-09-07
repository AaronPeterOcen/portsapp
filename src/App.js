import { Route, Switch } from "react-router-dom";
import MainNavigattion from "./components/layout/MainNavigation";
import AboutusPage from "./Hero/About";
import ConsultingServicesPage from "./Hero/ConsultingServices";
import ContactUsPage from "./Hero/ContactUs";
import HomePage from "./Hero/Home";
import IndustriesServedPage from "./Hero/IndustriesServed";
import OurProgressPage from "./Hero/OurProgress";

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

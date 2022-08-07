import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //Importing react router dom to facilate routing in the app
import NavbarSection from './components/Navbar'; //Importing Navbar component to be accessed by all the apps
import Footer from './components/Footer'; //Importing Footer component to be accessed by all the apps
import { useRouter } from './utils/routes'; //Importing array of routes

function App() {

  //Assining Array of useRouter to routes
  const routes = useRouter();
  return (
    <div>
      <Router>
        <NavbarSection />
          <Routes>
            {routes &&
              routes.map((r) => (
                <Route exact key={r.path} path={r.path} element={r.element} />
              ))}
          </Routes>u
        <Footer />
      </Router>


    </div>
  );
}

export default App;

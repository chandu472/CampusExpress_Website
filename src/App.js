import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ContactPage from './Components/ContactPage';
import Home from './Components/Home';
import RateCalc from './Components/RateCalc';
import AboutUs from './Components/AboutUs'
import MediaPage from './Components/MediaPage';
import RateCalcPage from './Components/RateCalcPage';
import Pincode from './Components/PinCode'; // Import the Pincode component
import PinCodePage from './Components/PinCodepage';
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Home" component={Home} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/Media" component={MediaPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route path="/careers" component={Careers} />
          <Route path="/rate-calc" component={RateCalcPage} />
          <Route path="/pincode" component={PinCodePage} /> {/* Add the new route for Pincode component */}
        </Switch>
      </Router>
    </div>
  );
}

const Careers = () => <h1>Careers Page</h1>;

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import NavigationBar from './components/Navbar';
import LandingPage from './components/Landingpage';
import AboutUs from './components/Aboutus';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';


function App() {
    return (
        <div className="App">
            <NavigationBar />
            <LandingPage />
            <AboutUs />
            {/* Other components and content */}
        </div>
    );
}

export default App;


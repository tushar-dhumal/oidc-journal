import './App.css';
import { GlobalTheme } from '@carbon/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CommonHeader from './modules/Header/HeaderModule';
import HomeModule from './modules/Home/HomeModule';
import { OktaDetailPage, IBMVerifyDetailPage, WebSphereDetailPage } from './pages/ProviderDetails';

function App() {
  return (
    <GlobalTheme>
      <Router>
        <div className="example">
          <CommonHeader className="header-area" />
          <div className="content-area">
            <Routes>
              <Route path="/" element={<HomeModule />} />
              <Route path="/provider/okta" element={<OktaDetailPage />} />
              <Route path="/provider/ibm-verify" element={<IBMVerifyDetailPage />} />
              <Route path="/provider/websphere" element={<WebSphereDetailPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </GlobalTheme>
  );
}

export default App;
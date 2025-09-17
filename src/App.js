import logo from './logo.svg';
import './App.css';
import { GlobalTheme } from '@carbon/react';
import CommonHeader from './modules/Header/HeaderModule';
import HomeModule from './modules/Home/HomeModule';

function App() {
  return (
   <GlobalTheme>
      <div className="example">
    <CommonHeader className="header-area" />
    <div className="content-area">
      <HomeModule />
    </div>
  </div>
   </GlobalTheme>
  );
}

export default App;

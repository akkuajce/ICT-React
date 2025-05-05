// import logo from './logo.svg';
// import './App.css';
import Login from './component/Login';

import Registration from './component/Registration';

import Header from './component/Header';
import LifeCycle from './component/lifeCycle/lifeCycle';
import Loginform from './component/Loginform/Loginform';
import './component/Loginform/Loginform.css';




function App() {
  return (
    <>
      {/* <Login />
      <Registration />`
      <Header /> */}
      <LifeCycle></LifeCycle>
      <Loginform></Loginform>
    </>
  );
}
export default App;
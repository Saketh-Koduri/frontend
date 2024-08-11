import logo from './logo.svg';
import './App.css';
import { SignIn } from './components/signin';
import { Signup } from './components/signup';
import Events from './events/events';
import { Usestate_ } from './components/usestate&useeffect';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import { ForgotPassword } from './components/forgot_pass';
import ConversionTable from './components/display';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      {/* <Route path="/" element={<Home />} /> */}
{/*  */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/dash" element={<ConversionTable/>}/>
      </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

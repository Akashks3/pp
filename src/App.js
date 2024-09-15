import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForgotPassword from './forgotpassword.js';
import ResetPassword from './resetpassword.js';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ForgotPassword />}/>
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;

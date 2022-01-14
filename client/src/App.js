import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Booking from './pages/Booking';

function App() {
  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/login' exact component={Login} />
      <Route path='/register' exact component={Register} />
      <Route path='/booking' exact component={Booking} />
    </Router>
  );
}

export default App;

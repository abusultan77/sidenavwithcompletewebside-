import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Game from './components/Game/Game';
import Chat from './components/Chat/Chat';
import Myaccountdashboard from './components/Myaccountdashboard/Myaccountdashboard';
import Lockcreate from './components/Myaccountdashboard/Lockcreate';
import Lockdetail from './components/Myaccountdashboard/Lockdetail';
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/game' component={Game} />
          <Route exact path='/chat' component={Chat} />
          <Route exact path='/myaccountdashboard' component={Myaccountdashboard} />
          <Route exact path='/lockcreate' component={Lockcreate} />
          <Route exact path='/Lockdetail' component={Lockdetail} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

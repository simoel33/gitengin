import './App.css';
import Navbar from './components/navbar/Navbar';
import Users from './components/users/Users';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import UserItem from './components/users/UserItem';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="container ">
        <Switch>
          <Route exact  path="/">
            <Users/>
          </Route>
          <Router exact  path="/user/:login">
            <UserItem />
          </Router>
        </Switch>
        

      </div>
      
    </div>
    </Router>
  );
}

export default App;

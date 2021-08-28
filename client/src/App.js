import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';
import Bag from './components/Bag/Bag';
import Header from './components/Header/Header';
import Seasons from './components/Seasons/Seasons';
import Paragraph from './components/Paragraph/Paragraph';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




export default function App() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>

            <Route exact path="/">
              <Header/>
              <Paragraph />
            </Route>

            <Route exact path="/seasons">
              <Seasons />
            </Route>

            <Route exact path="/bag">
            <Bag />
            </Route>

            <Route exact path="/login">
            <Login />
            </Route>

            <Route exact path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </div>
      </Router>
    );
}
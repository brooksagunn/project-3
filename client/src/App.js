import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
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
              <Section />
            </Route>
          </Switch>
        </div>
      </Router>
    );
}
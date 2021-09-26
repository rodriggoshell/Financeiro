import {BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom';
import Home from './components/pages/Home';
import Sobre from './components/pages/Sobre';
import Contatos from './components/pages/Contatos';
import NovosProjetos from './components/pages/NovosProjetos';

import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contatos">Contatos</Link></li>
      </ul>
      <Switch>
        <Container CustomClass="min-height">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sobre">
           <Sobre />
          </Route>
          <Route path="/contatos">
            <Contatos />
          </Route>
          <Route path="/novosprojetos">
           <NovosProjetos />
          </Route>
        </Container>
      </Switch>
      <p>Footer Aqui</p>
    </Router>
  );
}

export default App;

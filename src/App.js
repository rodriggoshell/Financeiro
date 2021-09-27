import {BrowserRouter as Router,Switch, Route,} from 'react-router-dom';
import Home from './components/pages/Home';
import Sobre from './components/pages/Sobre';
import Contatos from './components/pages/Contatos';
import Projetos from './components/pages/Projetos';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Container CustomClass="min-height">
          <Route exact path="/">
            <Home />
          </Route>
          <Router path="/projetos">
            <Projetos />
          </Router>
          <Route path="/sobre">
           <Sobre />
          </Route>
          <Route path="/contatos">
            <Contatos />
          </Route>
        </Container>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

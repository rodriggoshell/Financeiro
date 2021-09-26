import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <ul>
        <li>Home</li>
        <li>Contato</li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sobre">
          <Sobre />
        </Route>
        <Route path="/contatos">
          <Contatos />
        </Route>
        <Route path="newproject">
          <NovosProjetos />
        </Route>
      </Switch>
      <p>Footer Aqui</p>
    </Router>
  );
}

export default App;

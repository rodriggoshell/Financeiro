import {Link} from 'react-router-dom';
import Container from './Container';

import styles from './styles/Navbar.module.css';
import logo from '../../assets/costs_logo.png';

function Navbar() {
        return(
          <header>
              <nav className={styles.navbar}>
                  <Container>
                      <Link to="/">
                          <img src={logo} alt="Logo da moeda" />
                      </Link>
                      <ul className={styles.list}>
                          <li className={styles.item}><Link to="/">Home</Link></li>
                          <li className={styles.item}><Link to="/projetos">Projetos</Link></li>
                          <li className={styles.item}><Link to="/contatos">Contatos</Link></li>
                          <li className={styles.item}><Link to="/sobre">Sobre</Link></li>
                      </ul>
                  </Container>
              </nav>
          </header>
        );
}

export default Navbar;

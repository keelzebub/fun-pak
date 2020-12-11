import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

function Nav() {
  return (
    <nav className={styles.container}>
      <Link to='/' className='nav-link'>
        HOME
      </Link>
      <Link to='/day01' className='nav-link'>
        DAY ONE
      </Link>
      <Link to='/day02' className='nav-link'>
        DAY TWO
      </Link>
      <div>
        EMPH<span className='emphAsis'>A</span>SIS
      </div>
    </nav>
  );
}
export default Nav;
import './styles.css';
import { ReactComponent as Logo} from './logo.svg'

function Navbar() {
    return (
        <nav className="main-navbar">
           
            <Logo className="logo-text"/>
        </nav>
    )
}

export default Navbar;


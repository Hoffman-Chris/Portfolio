import './CustomHeader.scss';
import NavBar from './NavBar/NavBar';
import logo from './logo.png'

const CustomHeader = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt='logo'></img>
            <NavBar></NavBar>
        </div>
    )
}

export default CustomHeader;
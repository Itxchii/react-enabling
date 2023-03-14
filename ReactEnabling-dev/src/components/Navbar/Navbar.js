import './Navbar.css';
//import Navbar from './Navbar2';
import Menu from './Scrolling-Menu';
function Navbar() {
    
    return (
        <div class="topnav">
        <a href="#home"><i class="fa fa-bars" aria-hidden="true"><Menu></Menu></i></a>
        <input type="text" placeholder="Search.."></input>
        <a href="#basket" class="split"><i class="fa fa-shopping-basket" aria-hidden="true"></i></a>
        <a href="#user" class="split"><i class="fa fa-user" aria-hidden="true"></i></a>
        <a href="#cog" class="split"><i class="fa fa-cog" aria-hidden="true"></i></a>
        

      </div>
    )
  }

export default Navbar;
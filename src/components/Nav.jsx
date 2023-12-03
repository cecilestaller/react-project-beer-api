import { NavLink } from "react-router-dom";
import Beer from "./svg/Beer";
import './Nav.scss'

const Nav = () => {
    return (  
        <section>
            <nav>
                <NavLink to='/'>
                    <Beer />
                </NavLink>
            </nav>
        </section>
    );
}
 
export default Nav;
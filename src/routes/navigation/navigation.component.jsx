import {Outlet, Link} from "react-router-dom";
import {Fragment} from "react";
import { ReactComponent as CrnLogo} from "../../assets/crown.svg";

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className="logo-container" to='/'>
                    <CrnLogo className='logo'/>
                   
                </Link>

                <div className='links-container'>
                    <Link className="nav-link" to="/shop">

                        SHOP
                    </Link>
                </div>
                <h1>Navigation Bar</h1>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;
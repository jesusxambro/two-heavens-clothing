import {Outlet} from "react-router-dom";
import {Fragment} from "react";

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <h1>Navigation Bar</h1>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;
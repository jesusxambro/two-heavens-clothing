import { Routes, Route , Outlet} from 'react-router-dom';

import Home from './routes/home/home.component';

const Navigation = () => {
    return (
        <div>
            <div>
                <h1>Navigation Bar</h1>
            </div>
            <Outlet />
        </div>
    )
}
const App = () => {
    return (//wrap stuff in the routes, include path and element as below
        <Routes>
            <Route path='/' element={<Navigation/>}>
                <Route index element={<Home/>}/>;

            </Route>

            
        </Routes>
    )//test
};

export default App;

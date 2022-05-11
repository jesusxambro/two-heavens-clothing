import { Routes, Route} from 'react-router-dom';
import Navigation from "./routes/navigation/navigation.component";
import Home from './routes/home/home.component';


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

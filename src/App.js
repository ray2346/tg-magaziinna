import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./components/hoocks/useTelegram";
import Headers from "./components/Header/Headers";
import {Route, Routes} from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import Form2 from './components/Form2/Form2';

const tg = window.Telegram.WebApp

function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready()
    }, []);

    return (
        <div className="App">
            <Headers/>
            <Routes>
                <Route index element={<ProductList/>}/>
                <Route path={'form'} element={<Form2/>}/>
            </Routes>
        </div>
    );
}

export default App;

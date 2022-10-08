import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./components/hoocks/useTelegram";
import Headers from "./components/Header/Headers";

const tg = window.Telegram.WebApp

function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready()
    }, []);

    return (
        <div className="App">
            <Headers/>
            <button onClick={onToggleButton}>toggle</button>
        </div>
    );
}

export default App;

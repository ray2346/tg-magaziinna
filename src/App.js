
import './App.css';
import {useEffect} from "react";


const tg = window.Telegram.WebApp

function App() {

    useEffect(()=>{
        tg.ready()
    },[]);

    const OnClose = () => {
        tg.close()
    };

    return (
        <div className="App">
            Work
            <button onClick={OnClose}>Закрыть</button>
        </div>
    );
}

export default App;

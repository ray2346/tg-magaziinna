import './App.css';
import {useEffect} from "react";


function App() {
    useEffect(()=>{
        tg.ready()
    },[]);

    return (
        <div className="App">
            Work
            <button onClick={OnClose}>Закрыть</button>
        </div>
    );
}

export default App;

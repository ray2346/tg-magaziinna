import React from 'react';
import Buttons from "../Buttons/Buttons";


const Headers = () => {

    const tg = window.Telegram.WebApp
    const OnClose = () => {
        tg.close()
    };

    return (
        <div className={'header'}>
            <Buttons onClick={OnClose}>Закрыть!</Buttons>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    );
};

export default Headers;
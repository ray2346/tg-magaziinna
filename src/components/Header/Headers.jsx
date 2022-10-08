import React from 'react';
import Buttons from "../Buttons/Buttons";
import {useTelegram} from "../hoocks/useTelegram";


const Headers = () => {

    const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <Buttons onClick={onClose}>Закрыть!</Buttons>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Headers;
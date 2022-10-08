import React, {useEffect, useState} from 'react';
import './Form.css'
import {useTelegram} from "../hoocks/useTelegram";

const Form = () => {
    const [country, setCountry] = useState();
    const [street, setStreet] = useState();
    const [city, setCity] = useState();
    const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить'
        })
    }, [])

    useEffect(() => {
        if (!street || !city || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, city, street])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }
    const onChangeCity = (e) => {
        setCity(e.target.value)
    }
    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div className={'form'}>
            <h3>Введите ваши данные</h3>
            <input className={'input'}
                   type={'text'}
                   placeholder={'Страна'}
                   value={country}
                   onChange={onChangeCountry}
            />
            <input
                className={'input'}
                type={'text'}
                placeholder={'Город'}
                value={street}
                onChange={onChangeStreet}
            />
            <input
                className={'input'}
                type={'text'}
                placeholder={'Улица'}
                value={city}
                onChange={onChangeCity}
            />
            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>Физ. лицо</option>
                <option value={'legal'}>Юр. лицо</option>
            </select>
        </div>

    );
};

export default Form;
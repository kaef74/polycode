import React from 'react';
import { useEffect } from 'react';
import '../../../css/LoginForm.css';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import {useForm} from "@inertiajs/react";
import TextInput from "@/Components/TextInput.jsx";

export default function LoginForm({ onRegisterClick }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        formData: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    const handleRegisterClick = () => {
        onRegisterClick();
    };

    return (
        <div className='login__container' onSubmit={submit}>
            <h2 className='login__title'>Войти в аккаунт</h2>
            <p className='login__text'>
                Добро пожаловать обратно! Пожалуйста, введите свою почту или никнейм и пароль для входа в систему.
            </p>
            <form className='login__form'>
                <>
                    <TextInput
                        id="formData"
                        type="text"
                        name='formData'
                        value={data.formData}
                        onChange={(e) => setData('formData', e.target.value)}
                        className='login__input'
                        placeholder='E-mail или никнейм'
                        autoComplete="username"
                    />
                </>
                <>
                    <TextInput
                        id="password"
                        type="password"
                        name='password'
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        className='login__input'
                        placeholder='Пароль'
                        autoComplete="current-password"
                    />
                </>
                <p className='login__recovery'>Забыли пароль?</p>
                <div className='login__checkbox'>
                    <input type="checkbox" className='checkbox' />
                    Запомнить меня
                </div>
                <div className='login__button--container'>
                    <PrimaryButton
                        className='login__button button'
                    >
                        Авторизоваться
                    </PrimaryButton>
                    <p className='noregistered'>Нет аккаунта? <span className='color-blue to-registration' onClick={handleRegisterClick}>Зарегистрироваться</span></p>
                </div>
            </form>
        </div>
    )
}

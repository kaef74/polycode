import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import '../../../css/RegistrationForm.css';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from "@/Components/InputError.jsx";
import '../../../css/InputError.css';


export default function Register({ handleLoginClick }) {
    const { data, setData, post, errors, reset } = useForm({
        nickname: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
        created_at: '',
    });

    const handleLogin = () => {
        handleLoginClick();
    };

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <>
        <Head title="Вход/Регистрация" />
        <div className='registration'>

            <h2 className='registration__title'>Создать аккаунт</h2>
            <p className='registration__text'>
                Зарегистрируйтесь на нашем сайте, чтобы получить доступ к удобной онлайн записи на прием к нашим опытным
                ветеринарам и персонализированным рекомендациям по уходу за вашим питомцем.
            </p>
            <form className='registration__form' onSubmit={submit}>
                <>
                    <TextInput
                        id="nickname"
                        name='nickname'
                        value={data.nickname}
                        isFocused={true}
                        placeholder='Никнейм'
                        className='registration__input'
                        autoComplete="nickname"
                        onChange={(e) => setData('nickname', e.target.value)}
                        required
                    />
                </>

                <>
                    <TextInput
                        id="first_name"
                        name='first_name'
                        value={data.first_name}
                        placeholder='Имя'
                        className='registration__input'
                        autoComplete="first_name"
                        onChange={(e) => setData('first_name', e.target.value)}
                        required
                    />
                </>
                <>
                    <TextInput
                        id="last_name"
                        name='last_name'
                        value={data.last_name}
                        onChange={(e) => setData('last_name', e.target.value)}
                        className='registration__input'
                        placeholder='Фамилия'
                        autoComplete="last_name"
                        required
                    />

                </>

                <>
                    <TextInput
                        id="email"
                        type="email"
                        name='email'
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        className='registration__input'
                        placeholder='Почта'
                        autoComplete="username"
                        required
                    />
                </>

                <>
                    <TextInput
                        id="password"
                        type="password"
                        name='password'
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        className='registration__input'
                        placeholder='Пароль'
                        autoComplete="new-password"
                        required
                    />
                </>

                <>
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name='password_confirmation'
                        value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        className='registration__input'
                        placeholder='Пароль конфирс'
                        autoComplete="new-password"
                        required
                    />

                </>

                <div className='registration__button-container'>
                    <PrimaryButton
                        className='registration__button button'
                    >
                        Зарегистрироваться
                    </PrimaryButton>
                    <p className='registered'>Уже есть аккаунт? <span className='color-blue to-login'
                                                                      onClick={handleLogin}>Войти</span></p>
                </div>
                <div className='registration__checkbox'>

                    <input type="checkbox" className='checkbox' required/>
                    Даю согласие на <span className='color-blue '>обработку персональных данных</span>
                </div>

                <ul className='registration__errors'>
                    <InputError message={errors.nickname} className="registration__error"/>
                    <InputError message={errors.first_name} className="registration__error"/>
                    <InputError message={errors.nickname} className="registration__error"/>
                    <InputError message={errors.email} className="registration__error"/>
                    <InputError message={errors.password} className="registration__error"/>
                    <InputError message={errors.password_confirmation} className="registration__error"/>
                </ul>
            </form>
        </div>
        </>
    );
}

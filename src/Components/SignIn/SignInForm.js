import React from 'react';
import { FaUser } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm'
import './signInForm.css'

const SignInForm = () => {
    const { handleChange, values, handleSubmit } = useForm();

    return (
        <form className='form-container' onSubmit={handleSubmit}>

            <h1 className='title' dir='rtl' lang='ar'>تسجيل الدخول</h1>

            <div className='input-items'>
                <div className='item'>

                    <div className='label'>
                        <FaUser size={20} />
                        <label> اسم المستخدم</label>
                    </div>

                    <input
                        id='username'
                        name='username'
                        type="text"
                        className='input'
                        placeholder='أدخل اسم المستخدم...'
                        value={values.username}
                        onChange={handleChange}
                    />


                </div>
                <div className='item'>

                    <div className='label'>
                        <FaLock size={20} />
                        <label>كلمة المرور</label>
                    </div>

                    <input
                        id='psw'
                        name='psw'
                        type="password"
                        className='input'
                        placeholder='أدخل كلمة المرور...'
                        value={values.password}
                        onChange={handleChange}
                    />

                </div>
            </div>

            <Link
                to='/Home'
                className='btn-form'
                dir='rtl'
                lang='ar'
            >دخول</Link>

        </form>
    )


}

export default SignInForm
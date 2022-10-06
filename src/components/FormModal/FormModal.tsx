import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaceBookIcon, GoogleIcon, ModalThumb } from '../../assets';

interface FormModalProps {
    openModal: boolean,
    setOpenModal: (active: boolean) => void
}
export default function FormModal({ openModal, setOpenModal }: FormModalProps) {
    const handeCloseModal = () => {
        setOpenModal(false);
    }
    const [email, setEmail] = useState({
        value : '',
        valid : false
    });
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState({
        value : '',
        valid : false
    });
    const [passwordError, setPasswordError] = useState('');

    const handleBlurInput = (type : string) => {
        switch(type){
            case "email" :
                if(email.value == '') {
                    setEmailError('Please type your email');
                    return;
                }else {
                    if (! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
                        setEmailError('Email is not valid');

                    }else {
                        setEmailError('');
                        email.valid = true;
                    }
                }
                break;
            case "password" :
                if(password.value == '') {
                    setPasswordError('Please type your password');
                    return;
                }else {
                    if (! /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password.value)) {
                        setPasswordError('Password must be at least 8 characters and it must contain at least one number or special character');
                    }else {
                        setPasswordError('');
                        password.valid = true;
                    }
                }
                break;
        }
    }
    const handleSubmit = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>)=> {
        e.preventDefault();
        if(email.valid && password.valid) {
            
        }else {
            handleBlurInput('email');
            handleBlurInput('password');
        }
    }
    return (
        <section id="login" className={openModal ? "active" : ""}>
            <div className="inner">
                <div className="thumb">
                    <img src={ModalThumb} alt="modal thumb" />
                </div>
                <form className='login'>
                    <div className="close" onClick={handeCloseModal}></div>
                    <h2>Sign in to Gear</h2>
                    <div className="input_field">
                        <input 
                            type="text" 
                            name="email" 
                            onBlur={()=>handleBlurInput('email')} 
                            onChange={(e)=> {
                                if(e.target.value != '') {
                                    setEmailError('');
                                }
                                setEmail({
                                    ...email,
                                    value : e.target.value,
                                });
                            }} 
                        />
                        <label className={email.value != '' ? "active" : ""}>Email</label>
                        <span>{emailError}</span>
                    </div>
                    <div className="input_field">
                        <input 
                            type="password" 
                            name="password" 
                            onBlur={()=>handleBlurInput('password')} 
                            onChange={(e)=> {
                                if(e.target.value != '') {
                                    setPasswordError('');
                                }
                                setPassword({
                                    ...password,
                                    value : e.target.value,
                                });
                            }} 
                        />
                        <label className={password.value != '' ? "active" : ""}>Password</label>
                        <span>{passwordError}</span>
                    </div>
                    <NavLink to={'#'}>Forgot password</NavLink>
                    <button className='btn md red' onClick={(e)=> handleSubmit(e)}>Sign in</button>
                    <p>Or Sign in with</p>
                    <div className="social">
                        <NavLink to={'#'}>
                            <FaceBookIcon />
                        </NavLink>
                        <NavLink to={'#'}>
                            <GoogleIcon />
                        </NavLink>
                    </div>
                    <p className='no_account'>Don’t have an account ? <NavLink to={'#'}>Sign Up</NavLink></p>
                </form>
                <form className='signup' action="">
                </form>
            </div>
        </section>
    )
}

import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const useForm = () => {
    const [values, setValues] = useState({
        username: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();

        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/')
    }

    return { handleChange, values, handleSubmit };
}

export default useForm
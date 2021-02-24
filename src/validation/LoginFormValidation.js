import {useState, useEffect} from 'react';

const LoginFormValidation = (callback, validate)  => {
    const [values, setValues] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value} = e.target;
        setValues({
            ...values,
            [name]:value
        });
    };
    const handleSumbit = e =>{
        e.preventDefault();
        
        setError(validate(values));
        setIsSubmitting(true);

    };
    useEffect(() => {
        if(Object.keys(error).length === 0 && isSubmitting){
            callback();
        }
    }, [error])
    

    return {handleChange, values, error, handleSumbit};
}

export default LoginFormValidation



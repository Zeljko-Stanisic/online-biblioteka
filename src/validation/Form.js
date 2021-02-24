import React, {useState, useEffect} from 'react'
import LogIn from '../components/LogIn'
import Admin from '../pages/Admin'


const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm () {
        setIsSubmitted(true);
    }
    return (
        <>
            <LogIn/>
            {!isSubmitted ? (<LogIn submitForm={submitForm}/>) : (<Admin/>)}
        </>
    )
    
}

export default Form;
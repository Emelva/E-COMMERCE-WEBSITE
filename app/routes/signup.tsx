import { useState } from "react";
import { useNavigate } from "react-router";

export default function SignUp() {
    return (
        <div>hi</div>
    )
}

// export default function SignUp() {
//     const[user, setUser] = useState({
//         email: '',
//         password: ''
//     });
    
//     const navigate = useNavigate();
//     function handleSubmit(event){
//         event.preventDefault();
//         if(emailIsInvalid){
//             return
//         }
//         else if(passwordIsInvalid){
//             return
//         }
//         else {
//             navigate('/')
//         }
//     }

//     const emailIsInvalid = !user.email.includes('@');
//     const passwordIsInvalid = user.password.length < 8

//     function handleChange(identifier, value){
//         setUser(prevValues => ({
//             ...prevValues,
//             [identifier]: value
//         }))
//     }

//     return (
//     <>
        
//     </>
    
//     )
// }
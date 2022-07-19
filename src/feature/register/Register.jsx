import { LayoutRegister } from "layout/LayoutRegister";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './register.scss';
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
    firstName: yup.string()
            .required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
    retypePassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    date: yup.string().required('Date of Birth is required'),
    phone: yup.number().required('Phone number is required').positive().integer(),
    address: yup.string().required('Address is required'),
}).required();

export default function Register() {
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (data) => {
        console.log('data:', data);
        alert('Register Successful');
        navigate('/');
    }

    return (<LayoutRegister>
        <div className="register-page">
            <p>Register Account</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="First Name" {...register('firstName')} />
                <input type="text" placeholder="Last Name" {...register('lastName')} />
                <div className="errors-message">
                    <div>{errors.firstName?.message}</div>
                    <div>{errors.lastName?.message}</div>
                </div>

                <div className="width-input"><input type="text" placeholder="Email" {...register('email')} /></div>
                <div className="errors-message">{errors.email?.message}</div>

                <input type="password" placeholder="Password" {...register('password')} />
                <input type="password" placeholder="Retype password" {...register('retypePassword')} />
                <div className="errors-message">
                    <div>{errors.password?.message}</div>
                    <div>{errors.retypePassword?.message}</div>
                </div>

                <div className="width-input"><input placeholder="Phone Number" {...register('phone')} /></div>
                <div className="errors-message">{errors.phone?.message}</div>

                <input type="date" {...register('date')} />
                <select {...register("gender")}>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                </select>
                <div className="errors-message">{errors.date?.message}</div>

                <div className="width-input"><input type="text" placeholder="Address" {...register('address')} /></div>
                <div className="errors-message">{errors.address?.message}</div>

                <input className="btn-submit" type="submit" value="Register"  style={{backgroundColor: '#1890ff'}}/>
            </form>
        </div>
    </LayoutRegister>)
}
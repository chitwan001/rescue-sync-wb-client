import React, {useState} from "react";
import makeRequest from "../utils/requestWrap";
import {METHOD, ResponseType} from "../types";
import {AxiosHeaders} from "axios";
import {useAuth} from "../context/auth-context";
import {useNavigate} from "react-router-dom";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const {setUser} = useAuth()
    const navigate = useNavigate();

    const onChangeEmail = (updatedEmail: string) => {
        setEmail(updatedEmail)
    }

    const onChangePassword = (updatedPassword: string) => {
        setPassword(updatedPassword)
    }

    const submitLogin = async (e: any) => {
        e.preventDefault()
        if (email && password) {
            const {response}: {
                response: ResponseType<{
                    message: string, token:string
                }
                >
            } = await makeRequest(METHOD.POST, 'auth/login', {
                email: email,
                password: password
            }, {}, (data) => {
            }, setLoading)

            if(response.success && response.data){
                setUser(response.data.body.token)
                navigate('/dashboard')
            }

        }
    }

    return (
        <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
                    Rescue Sync
                </div>
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Sign in to your account
                        </h1>
                        <form onSubmit={submitLogin} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your
                                    email</label>
                                <input type="email" value={email} onChange={(e) => onChangeEmail(e.target.value)}
                                       name="email" id="email"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                       placeholder="name@company.com" required={true}/>
                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input type="password" value={password}
                                       onChange={(e) => onChangePassword(e.target.value)} name="password" id="password"
                                       placeholder="••••••••"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                       required={true}/>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox"
                                               className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                                               required={true}/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline">Forgot
                                    password?</a>
                            </div>
                            <button type="submit"
                                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign
                                in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
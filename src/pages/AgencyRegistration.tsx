import React, {useState} from "react";
import {states} from "../constants/states";
import makeRequest from "../utils/requestWrap";
import {METHOD, ResponseType} from "../types";

export default function AgencyRegistration() {

    const [agencyName, setAgencyName] = useState('')
    const [agencyEmail, setAgencyEmail] = useState('')
    const [agencyNumber, setAgencyNumber] = useState('')
    const [isAgencyCentral, setIsAgencyCentral] = useState(false);
    const [agencyState, setAgencyState] = useState(states[0]);
    const [loading,setLoading] = useState(false)


    const onChangeName = (updatedName: string) => {
        setAgencyName(updatedName)
    }

    const onChangeEmail = (updatedEmail: string) => {
        setAgencyEmail(updatedEmail)
    }

    const onChangeNumber = (updatedNumber: string) => {
        setAgencyNumber(updatedNumber)
    }

    const onChangeCentral = (updatedCentral: boolean) => {
        setIsAgencyCentral(updatedCentral)
    }

    const onChangeState = (updatedState: string) => {
        setAgencyState(updatedState)
    }

    const submitForm = async (e: any) => {
        e.preventDefault()
        const data = {
            name: agencyName,
            central: isAgencyCentral,
            state: agencyState,
            contactEmail: agencyEmail,
            contactNumber: agencyNumber
        }

        const {response} :{
            response:ResponseType<any>
        } = await makeRequest(METHOD.POST, 'agency/register', data, {}, (data) => {
        }, setLoading)

        console.log(response)

    }

    return (
        <div className={'grid w-screen h-screen'}>
            <section className="bg-white grid">
                <div style={{boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}} className="max-w-2xl rounded-md grid h-fit w-1/2 self-center px-4 py-8 mx-auto lg:py-16">
                    <h1 className="mb-4 text-2xl font-bold text-gray-900">RESCUE SYNC</h1>
                    <h2 className="mb-4 text-lg font-bold text-gray-700">Agency Registration</h2>
                    <form onSubmit={submitForm}>
                        <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                            <div className="sm:col-span-2">
                                <label htmlFor="name"
                                       className="block mb-2 text-sm font-medium text-gray-900">Agency Name</label>
                                <input type="text" name="name" id="name" onChange={(e) => onChangeName(e.target.value)}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                       value={agencyName} placeholder="Agency Name" required={true}/>
                            </div>
                            <div className="w-full">
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                <input type="text" name="email" id="email"
                                       onChange={(e) => onChangeEmail(e.target.value)}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                       value={agencyEmail} placeholder="Your email" required={true}/>
                            </div>
                            <div className="w-full">
                                <label htmlFor="contactNumber"
                                       className="block mb-2 text-sm font-medium text-gray-900">Contact Number</label>
                                <input type="text" name="contactNumber" id="contactNumber"
                                       onChange={(e) => onChangeNumber(e.target.value)}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                       value={agencyNumber} placeholder="Your contact number" required={true}/>
                            </div>
                            <div className={'sm:col-span-2'}>
                                <label htmlFor="state"
                                       className="block mb-2 text-sm font-medium text-gray-900">State</label>
                                <select id="state"
                                        disabled={isAgencyCentral}
                                        onChange={(e) => onChangeState(e.target.value)}
                                        className="bg-gray-50 border disabled:cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                                    {
                                        states.map((state) => (
                                            <option selected={state===agencyState} value={state}>{state}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className={'sm:col-span-2'}>
                                <div className={'grid grid-flow-col w-fit'}>
                                    <input type="checkbox" name="isCentral" id="isCentral"
                                           onChange={(e) => onChangeCentral(e.target.checked)}
                                           className="w-4 h-4 grid place-self-center border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                                    />
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="isCentral" className="text-gray-500 font-bold">Are you a central
                                            agency?</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button type="submit"
                                    className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Register Agency
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}
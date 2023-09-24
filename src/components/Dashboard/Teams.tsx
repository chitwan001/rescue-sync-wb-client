import avatar from "../../assets/images/avatar.jpeg"
import person1 from "../../assets/images/p1.jpeg"
import person2 from "../../assets/images/p2.jpeg"
import person3 from "../../assets/images/p3.jpeg"
import person4 from "../../assets/images/p4.jpeg"
import person6 from "../../assets/images/p6.jpeg"

export default function Teams() {
  return (
<>
{/* // Begin of tables */}
{/* <div className="relative overflow-x-auto shadow-md sm:rounded-lg"> */}
<div>
    <div className="flex items-center justify-between pb-4 bg-white light:bg-gray-900">
       
        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 light:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" placeholder="Search for Teams"/>
        </div>
    </div>
    <table className="w-full text-sm text-left text-gray-500 light:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 light:bg-gray-700 light:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        
                        
                    </div>
                </th>
                <th scope="col" className="px-20 py-3">
                    TEAM NAME
                </th>
                <th scope="col" className="px-20 py-3">
                    TEAM MEMBERS
                </th>
                <th scope="col" className="px-10 py-3">
                    AVAILABILITY
                </th>
                <th scope="col" className="px-10 py-3">
                    ADMIN INCHARGE
                </th>
                <th scope="col" className="px-40 py-3">
                    STATUS
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-50 light:hover:bg-gray-600">
                <td className="w-4 p-4">
                </td>
                <th scope="row" className="flex items-center px-2 py-4 text-gray-900 whitespace:nowrap light:text-white">
                <img className="w-10 h-10 rounded-full" src={person2} alt="Kamla image"/>
                    <div className="pl-3">
                        <div className="text-base font-semibold">Team 1</div>
                        <div className="font-normal text-gray-500">Yathansh Gupta</div>
                    </div>  
                </th>
                <td className="px-10 py-5 whitespace:nowrap">
                    Raghav Sharma <br/>
                    Ishita Verma  <br />
                    Paul Rampal <br />
                </td>
                <td className="px-10 py-4">
                    <div className="flex items-center">
                    <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white"><span className="flex w-2.5 h-2.5 bg-teal-500 rounded-full mr-1.5 flex-shrink-0"></span></span>Online
                    </div>
                </td>
                <td className="px-10 py-4">
                    <a href="#" className="font-medium text-blue-600 light:text-blue-500 hover:underline">Kamla Rani</a>
                </td>
                <td className="px-10 py-4">
                    <div className="flex items-center " >
                    In progress - Saket RPM Apartments
                    </div>
                </td>
            </tr>
            <tr className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-50 light:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        
                        
                    </div>
                </td>
                <th scope="row" className="flex items-center px-2 py-4 font-medium text-gray-900 whitespace-nowrap light:text-white">
                    
                    <img className="w-10 h-10 rounded-full" src={person4} alt="Kamla image"/>
                    <div className="pl-3">
                        <div className="text-base font-semibold">Team 2</div>
                        <div className="font-normal text-gray-500">Antara Qureshi</div>
                    </div>
                </th>
                <td className="px-10 py-4">
                Riyansha Sharma <br/>
                    priyansh Verma  <br />
                    Striver Aditya <br />
                </td>
                <td className="px-10 py-4">
                    <div className="flex items-center">
                    <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white"><span className="flex w-2.5 h-2.5 bg-teal-500 rounded-full mr-1.5 flex-shrink-0"></span></span>Online
                    </div>
                </td>
                <td className="px-10 py-4">
                    <a href="#" className="font-medium text-blue-600 light:text-blue-500 hover:underline">Binnu Singh</a>
                </td>
                <td className="px-10 py-4">
                    <div className="flex items-center " >
                    Finished - Sundar Park
                    </div>
                </td>
            </tr>
            <tr className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-50 light:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        
                        
                    </div>
                </td>
                <th scope="row" className="flex items-center px-2 py-4 font-medium text-gray-900 whitespace-nowrap light:text-white">
                   
                    <img className="w-10 h-10 rounded-full" src={person6} alt="Kamla image"/>
                    <div className="pl-3">
                        <div className="text-base font-semibold">Team 3</div>
                        <div className="font-normal text-gray-500">Tushar Kapoor</div>
                    </div>
                </th>
                <td className="px-10 py-4">
                Abhinav Sinha <br/>
                    Chitwan Bindal  <br />
                    Harh Sharma <br />
                </td>
                <td className="px-10 py-4">
                    <div className="flex items-center">
                    <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white"><span className="flex w-2.5 h-2.5 bg-teal-500 rounded-full mr-1.5 flex-shrink-0"></span></span>Online
                    </div>
                </td>
                <td className="px-10 py-4">
                    <a href="#" className="font-medium text-blue-600 light:text-blue-500 hover:underline">Kumar Shanu</a>
                </td>
                <td className="px-10 py-4">
                    <div className="flex items-center " >
                    Finished - Pheonix Club
                    </div>
                </td>
            </tr>
            <tr className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-50 light:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        
                        
                    </div>
                </td>
                <th scope="row" className="flex items-center px-2 py-4 font-medium text-gray-900 whitespace-nowrap light:text-white">
                <img className="w-10 h-10 rounded-full" src={avatar} alt="Kamla image"/>
                    <div className="pl-3">
                        <div className="text-base font-semibold">Team 4</div>
                        <div className="font-normal text-gray-500">Ambani Bhatt</div>
                    </div>
                </th>
                <td className="px-10 py-4">
                Neeta Garg <br/>
                    Neelam Bajwa  <br />
                    Striver Aditya <br />
                </td>
                <td className="px-10 py-4">
                    <div className="flex items-center">
                    <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white"><span className="flex w-2.5 h-2.5 bg-red-500 rounded-full mr-1.5 flex-shrink-0"></span></span>Offline
                    </div>
                </td>
                <td className="px-10 py-4">
                    <a href="#" className="font-medium text-blue-600 light:text-blue-500 hover:underline">N/A</a>
                </td>
                <td className="px-10 py-4">
                    <div className="flex items-center " >
                    N/A
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    </div>

</>   
  )
}
import avatar from "../../assets/images/avatar.jpeg"
import person1 from "../../assets/images/p1.jpeg"
import person2 from "../../assets/images/p2.jpeg"
import person3 from "../../assets/images/p3.jpeg"
import person4 from "../../assets/images/p4.jpeg"
import person6 from "../../assets/images/p6.jpeg"

export default function Resources() {
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
            <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" placeholder="Search for Equipments"/>
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
                    RESOURCE NAME
                </th>
                <th scope="col" className="px-20 py-3">
                    AVAILABLE
                </th>
                <th scope="col" className="px-10 py-3">
                    USED BY
                </th>
                <th scope="col" className="px-10 py-3">
                    QUANTITY
                </th>
                <th scope="col" className="px-20 py-3">
                    STATUS
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-50 light:hover:bg-gray-600">
                <td className="w-4 p-4">
                </td>
                <th scope="row" className="flex items-center px-0 py-4 text-gray-900 whitespace:nowrap light:text-white">
                    <div className="pl-3">
                        <div className="text-base font-semibold">EXTINGUISHER TRUCK</div>
                    </div>  
                </th>
                <td className="px-20 py-5 whitespace:nowrap">
                    4 Left
                </td>
                <td className="px-5 py-4">
                    <div className="flex items-center">
                    Team 1 <br />
                    Team 4 <br />
                    </div>
                </td>
                <td className="px-10 py-4">
                    1 <br />
                    1
                </td>
                <td className="px-10 py-4">
                    <div className="flex items-center " >
                    <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white"><span className="flex w-2.5 h-2.5 bg-teal-500 rounded-full mr-1.5 flex-shrink-0"></span></span>Available
                    </div>
                </td>
            </tr>
            <tr className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-50 light:hover:bg-gray-600">
                <td className="w-4 p-4">
                </td>
                <th scope="row" className="flex items-center px-0 py-4 text-gray-900 whitespace:nowrap light:text-white">
                    <div className="pl-3">
                        <div className="text-base font-semibold">DELUGE GUN</div>
                    </div>  
                </th>
                <td className="px-20 py-5 whitespace:nowrap">
                    6 Left
                </td>
                <td className="px-5 py-4">
                    <div className="flex items-center">
                    Team 2 <br />
                    Team 4 <br />
                    </div>
                </td>
                <td className="px-10 py-4">
                    3 <br />
                    4
                </td>
                <td className="px-10 py-4">
                    <div className="flex items-center " >
                    <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white"><span className="flex w-2.5 h-2.5 bg-teal-500 rounded-full mr-1.5 flex-shrink-0"></span></span>Available
                    </div>
                </td>
            </tr>
            <tr className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-50 light:hover:bg-gray-600">
                <td className="w-4 p-4">
                </td>
                <th scope="row" className="flex items-center px-0 py-4 text-gray-900 whitespace:nowrap light:text-white">
                    <div className="pl-3">
                        <div className="text-base font-semibold">BOLT CUTTER</div>
                    </div>  
                </th>
                <td className="px-20 py-5 whitespace:nowrap">
                    6 Left
                </td>
                <td className="px-5 py-4">
                    <div className="flex items-center">
                    Team 1 <br />
                    Team 4 <br />
                    </div>
                </td>
                <td className="px-10 py-4">
                    4 <br />
                    6
                </td>
                <td className="px-10 py-4">
                    <div className="flex items-center " >
                    <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white"><span className="flex w-2.5 h-2.5 bg-teal-500 rounded-full mr-1.5 flex-shrink-0"></span></span>Available
                    </div>
                </td>
            </tr>
            <tr className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-50 light:hover:bg-gray-600">
                <td className="w-4 p-4">
                </td>
                <th scope="row" className="flex items-center px-0 py-4 text-gray-900 whitespace:nowrap light:text-white">
                    <div className="pl-3">
                        <div className="text-base font-semibold">DRIP TORCH</div>
                    </div>  
                </th>
                <td className="px-20 py-5 whitespace:nowrap">
                    1 Left
                </td>
                <td className="px-5 py-4">
                    <div className="flex items-center">
                    Team 1 <br />
                    Team 4 <br />
                    </div>
                </td>
                <td className="px-10 py-4">
                    3 <br />
                    5
                </td>
                <td className="px-10 py-4">
                    <div className="flex items-center " >
                    <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white"><span className="flex w-2.5 h-2.5 bg-red-500 rounded-full mr-1.5 flex-shrink-0"></span></span>Critically Low
                    </div>
                </td>
            </tr>
            <tr className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-50 light:hover:bg-gray-600">
                <td className="w-4 p-4">
                </td>
                <th scope="row" className="flex items-center px-0 py-4 text-gray-900 whitespace:nowrap light:text-white">
                    <div className="pl-3">
                        <div className="text-base font-semibold">FLAME ZORB</div>
                    </div>  
                </th>
                <td className="px-20 py-5 whitespace:nowrap">
                    0 Left
                </td>
                <td className="px-5 py-4">
                    <div className="flex items-center">
                    Team 1 <br />
                    Team 4 <br />
                    </div>
                </td>
                <td className="px-10 py-4">
                    2 <br />
                    2
                </td>
                <td className="px-10 py-4">
                    <div className="flex items-center " >
                    <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white"><span className="flex w-2.5 h-2.5 bg-red-500 rounded-full mr-1.5 flex-shrink-0"></span></span>Unavailable!
                    </div>
                </td>
            </tr>
           
        </tbody>
    </table>
    </div>

</>   
  )
}
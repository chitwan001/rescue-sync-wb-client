import "./Dashboard.css"
import close from "../assets/icons/close-icon.svg"
import menu from "../assets/icons/menu-icon.svg"
import search from "../assets/icons/search-icon.svg"
import chevron from "../assets/icons/chevron-down.svg"
import funnel from "../assets/icons/funnel-icon.svg"
import dots from "../assets/icons/dots-icon.svg"
import avatar from "../assets/images/avatar.jpeg"
import person1 from "../assets/images/p1.jpeg"
import person2 from "../assets/images/p2.jpeg"
import person3 from "../assets/images/p3.jpeg"
import person4 from "../assets/images/p4.jpeg"
import person6 from "../assets/images/p6.jpeg"

export default function Dashboard() {
  return (
    <div className="main-wrapper">
      <div className="page-top">
        <div className="container">
          {/* <!-- navbar --> */}
          <div className="navbar">
            <div className="navbar-l">
              <a href="#" className="navbar-brand">RS</a>
              <ul className="nav-list -translate-x-full lg:translate-x-0 transition-default">
                <button className="navbar-hide-btn" type="button">
                  <img src={close} alt="" />
                </button>
                <li className="nav-item">
                  <a href="#" className="nav-link">Map View</a>
                </li>
                <li className="nav-item active">
                  <a href="#" className="nav-link">Dashboard</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Requests</a>
                </li>
                {/* <!-- <li className="nav-item">
                          <a href="#" className="nav-link">Teams</a>
                      </li>
                      <li className="nav-item">
                          <a href="#" className="nav-link">Calendar</a>
                      </li> --> */}
              </ul>
              <div className="navbar-show-btn" >
                <img src={menu} alt="" />
              </div>
            </div>

            <div className="navbar-r">
              <div className="nav-icon-btns">
                <button className="nav-icon-btn">
                  <img src={search} alt="" />
                </button>
                {/* <!-- <button className="nav-icon-btn">
                          <img src="../assets/icons/grid-icon.svg" alt="">
                      </button>
                      <button className="nav-icon-btn">
                          <img src="../assets/icons/plus-icon.svg" alt="">
                      </button>
                      <button className="nav-icon-btn">
                          <img src="../assets/icons/folder-icon.svg" alt="">
                      </button>
                      <button className="nav-icon-btn">
                          <img src="../assets/icons/bell-icon.svg" alt="">
                      </button> --> */}
              </div>

              <button className="nav-profile-btn">
                <div className="profile-btn-img">
                  <img src={avatar} alt="" />
                </div>
                <img src={chevron} alt="" className="profile-btn-icon" />
              </button>
            </div>
          </div>
          {/* <!-- end of navbar --> */}
        </div>
      </div>

      <div className="page-content">
        <div className="container">
          <div className="content-head">
            <h3 className="content-head-title">Fire Department</h3>

          </div>

          <div className="content-tab">
            <div className="content-tab-head">
              <div className="tab-l">
                <ul className="tab-btns">
                  <li className="tab-btn-item active">
                    <button className="tab-btn-link" type="button">Overview</button>
                  </li>
                  <li className="tab-btn-item">
                    <button className="tab-btn-link" type="button">Admins</button>
                  </li>
                  <li className="tab-btn-item">
                    <button className="tab-btn-link" type="button">Teams</button>
                  </li>
                  <li className="tab-btn-item">
                    <button className="tab-btn-link" type="button">Tools/Equipments</button>
                  </li>
                  {/* <!-- <li className="tab-btn-item">
                              <button className="tab-btn-link" type="button">Files</button>
                          </li>
                          <li className="tab-btn-item">
                              <button className="tab-btn-link" type="button">Time</button>
                          </li>
                          <li className="tab-btn-item">
                              <button className="tab-btn-link" type="button">Comments</button>
                          </li> --> */}
                </ul>
              </div>

              <div className="tab-r">
                <button className="tab-r-btn ms-3">
                  <img src={funnel} className="tab-r-btn-icon" alt="" />
                  <span className="tab-r-btn-text">Filters</span>
                </button>
              </div>
            </div>
          </div>
          <div className="content-tab-body">
            {/* <!-- ### tab block 1 ### --> */}
            <div className="tab-body-block">
              <div className="body-item-head">
                <h4 className="body-item-head-title">In Progress</h4>
              </div>
              {/* <!-- tab body list --> */}
              <div className="tab-body-list">
                {/* <!-- tab item --> */}
                <div className="tab-body-item">
                  <div className="item-top">
                    <div className="item-top-title">

                      <p>Saket RPM Apartments</p>

                    </div>
                    <span title = "Click for more info">
                    <button className="item-top-btn">
                     <img src={dots} alt="" />
                    </button></span>
                  </div>
                  <div className="item-body">
                    <p className="item-body-text">
                      No. of Teams Assigned : 2<br />
                      No. of Equipments Used : 4
                    </p>


                    <div className="badge-group">
                      <span className="badge-brown">Level 4</span>
                      <span className="badge-blue">Under Control</span>
                      <span className="badge-green">Team1</span>
                      <span className="badge-green">Team2</span>
                    </div>

                    <div className="item-comments">
                      <div className="item-avatar">
                        <img src={person1} alt="" />
                        <img src={person3} alt="" />
                      </div>
                      <div className="item-comments-text">
                        <p>Rescue Teams</p>
                      </div>
                    </div>

                    <div className="item-progress">
                      <div className="progress-bar-item">
                        <div className="progress-bar">
                          <div className="progress-fill"></div>
                        </div>
                        <span className="progress-val">50%</span>
                      </div>
                      <span className="badge-flash-white">1h 30m</span>
                    </div>
                  </div>
                </div>
                {/* <!-- end of tab item -->
                          */}
              </div>
              {/* <!-- end of tab body list --> */}
            </div>
            {/* <!-- ### end of tab block 1 ### --> */}

            {/* <!-- ### tab block 2 ### --> */}
            <div className="tab-body-block">
              <div className="body-item-head">
                <h4 className="body-item-head-title">Pending</h4>
              </div>
              {/* <!-- tab body list --> */}
              <div className="tab-body-list">
                {/* <!-- tab item --> */}
                <div className="tab-body-item">
                  <div className="item-top">
                    <div className="item-top-title">

                      <p>Alaknanda Mall</p>

                    </div>
                    <span title = "Click for more info">
                    <button className="item-top-btn">
                     <img src={dots} alt="" />
                    </button></span>
                  </div>
                  <div className="item-body">
                    <p className="item-body-text">
                      No. of Teams Required: 2<br />
                      No. of Equipments Used : 3
                    </p>


                    <div className="badge-group">
                      <span className="badge-brown">Level 2</span>
                      <span className="badge-red">Emergency</span>
                      <span className="badge-green">Team1</span>
                      <span className="badge-green">Team2</span>
                    </div>

                    <div className="item-comments">
                      <div className="item-avatar">
                        <img src={person2} alt="" />
                        <img src={person1} alt="" />
                      </div>
                      <div className="item-comments-text">
                        <p>Rescue Teams</p>
                      </div>
                    </div>

                    <div className="item-progress">
                      <div className="progress-bar-item">
                        <div className="progress-bar">
                          <div className="progress-fill"></div>
                        </div>
                        <span className="progress-val">50%</span>
                      </div>
                      <span className="badge-flash-white">1h 30m</span>
                    </div>
                  </div>
                </div>
                {/* <!-- end of tab item --> */}


              </div>
              {/* <!-- end of tab body list --> */}
            </div>
            {/* <!-- ### end of tab block 2 ### --> */}
            {/* 
                  <!-- ### tab block 3 ### --> */}
            <div className="tab-body-block">
              <div className="body-item-head">
                <h4 className="body-item-head-title">Completed</h4>
              </div>
              {/* <!-- tab body list --> */}
              <div className="tab-body-list">
                {/* <!-- tab item --> */}
                <div className="tab-body-item">
                  <div className="item-top">
                    <div className="item-top-title">

                      <p>Sundar Park</p>

                    </div>
                    <span title = "Click for more info">
                    <button className="item-top-btn">
                     <img src={dots} alt="" />
                    </button></span>
                  </div>
                  <div className="item-body">
                    <p className="item-body-text">
                      No. of Teams Assigned : 1<br />
                      No. of Equipments Used : 1
                    </p>


                    <div className="badge-group">
                      <span className="badge-brown">Level 1</span>
                      <span className="badge-blue">Minor Casuality</span>
                      <span className="badge-green">Team3</span>
                      <span className="badge-green">Team4</span>
                    </div>

                    <div className="item-comments">
                      <div className="item-avatar">
                        <img src={avatar} alt="" />
                        <img src={person3} alt="" />
                      </div>
                      <div className="item-comments-text">
                        <p>Rescue Teams</p>
                      </div>
                    </div>

                    <div className="item-progress">
                      <div className="progress-bar-item">
                        <div className="progress-bar">
                          <div className="progress-fill"></div>
                        </div>
                        <span className="progress-val">50%</span>
                      </div>
                      <span className="badge-flash-white">30m</span>
                    </div>
                  </div>
                </div>
                {/* <!-- end of tab item --> */}

              </div>
              {/* <!-- end of tab body list --> */}
            </div>

            {/* <!-- ### end of tab block 3 ### --> */}

            <div className="tab-body-block">
              <div className="body-item-head">
                <h4 className="body-item-head-title">Completed </h4>
              </div>
              {/* <!-- tab body list --> */}
              <div className="tab-body-list">
                {/* <!-- tab item --> */}
                <div className="tab-body-item">
                  <div className="item-top">
                    <div className="item-top-title">

                      <p>Pheonix Club, Alpha 1</p>

                    </div>
                    <span title = "Click for more info">
                    <button className="item-top-btn">
                     <img src={dots} alt="" />
                    </button></span>
                  </div>
                  <div className="item-body">
                    <p className="item-body-text">
                      No. of Teams Required: 2<br />
                      No. of Equipments Used : 3
                    </p>


                    <div className="badge-group">
                      <span className="badge-brown">Level 3</span>
                      <span className="badge-blue">Zero casuality</span>
                      <span className="badge-green">Team1</span>
                      <span className="badge-green">Team2</span>
                    </div>

                    <div className="item-comments">
                      <div className="item-avatar">
                        <img src={person1} alt="" />
                        <img src={person2} alt="" />
                      </div>
                      <div className="item-comments-text">
                        <p>Rescue Teams</p>
                      </div>
                    </div>

                    <div className="item-progress">
                      <div className="progress-bar-item">
                        <div className="progress-bar">
                          <div className="progress-fill"></div>
                        </div>
                        <span className="progress-val">50%</span>
                      </div>
                      <span className="badge-flash-white">1h 30m</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          
          <div>

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div className="flex items-center justify-between pb-4 bg-white light:bg-gray-900">
       
        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 light:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" placeholder="Search for Admins"/>
        </div>
    </div>
    <table className="w-full text-sm text-left text-gray-500 light:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 light:bg-gray-700 light:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 light:focus:ring-blue-600 light:ring-offset-gray-800 light:focus:ring-offset-gray-800 focus:ring-2 light:bg-gray-700 light:border-gray-600"/>
                        
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    ADMIN NAME
                </th>
                <th scope="col" className="px-6 py-3">
                    POSITION
                </th>
                <th scope="col" className="px-6 py-3">
                    AVAILABILITY
                </th>
                <th scope="col" className="px-6 py-3">
                    STATUS
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-50 light:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 light:focus:ring-blue-600 light:ring-offset-gray-800 light:focus:ring-offset-gray-800 focus:ring-2 light:bg-gray-700 light:border-gray-600"/>
                        
                    </div>
                </td>
                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap light:text-white">
                    <img className="w-10 h-10 rounded-full" src={person4} alt="Kamla image"/>
                    <div className="pl-3">
                        <div className="text-base font-semibold">Kamla Rani</div>
                        <div className="font-normal text-gray-500">kamla@yahoo.com</div>
                    </div>  
                </th>
                <td className="px-6 py-4">
                    Chief executive
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center">
                    <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white"><span className="flex w-2.5 h-2.5 bg-teal-500 rounded-full mr-1.5 flex-shrink-0"></span></span>Online
                    </div>
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 light:text-blue-500 hover:underline">Managing Team3 Team4</a>
                </td>
            </tr>
            <tr className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-50 light:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 light:focus:ring-blue-600 light:ring-offset-gray-800 light:focus:ring-offset-gray-800 focus:ring-2 light:bg-gray-700 light:border-gray-600"/>
                        
                    </div>
                </td>
                <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap light:text-white">
                    <img className="w-10 h-10 rounded-full" src={avatar} alt="Jese image"/>
                    <div className="pl-3">
                        <div className="text-base font-semibold">Binnu Singh</div>
                        <div className="font-normal text-gray-500">binnu@gmail.com</div>
                    </div>
                </th>
                <td className="px-6 py-4">
                    Regional Manager
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center">
                    <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white"><span className="flex w-2.5 h-2.5 bg-teal-500 rounded-full mr-1.5 flex-shrink-0"></span></span>Online
                    </div>
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 light:text-blue-500 hover:underline">Available</a>
                </td>
            </tr>
            <tr className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-50 light:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 light:focus:ring-blue-600 light:ring-offset-gray-800 light:focus:ring-offset-gray-800 focus:ring-2 light:bg-gray-700 light:border-gray-600"/>
                        
                    </div>
                </td>
                <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap light:text-white">
                    <img className="w-10 h-10 rounded-full" src={person2} alt="Jese image"/>
                    <div className="pl-3">
                        <div className="text-base font-semibold">Kumar Shanu</div>
                        <div className="font-normal text-gray-500">Shanurocks@gmail.com</div>
                    </div>
                </th>
                <td className="px-6 py-4">
                    Chief Executive
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center">
                    <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white"><span className="flex w-2.5 h-2.5 bg-teal-500 rounded-full mr-1.5 flex-shrink-0"></span></span>Online
                    </div>
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 light:text-blue-500 hover:underline">Managing Team1 Team4 </a>
                </td>
            </tr>
            <tr className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-50 light:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 light:focus:ring-blue-600 light:ring-offset-gray-800 light:focus:ring-offset-gray-800 focus:ring-2 light:bg-gray-700 light:border-gray-600"/>
                        
                    </div>
                </td>
                <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap light:text-white">
                    <img className="w-10 h-10 rounded-full" src={person3} alt="Jese image"/>
                    <div className="pl-3">
                        <div className="text-base font-semibold">Rampal Sharma</div>
                        <div className="font-normal text-gray-500">SharmaRampa@gmail.com</div>
                    </div>
                </th>
                <td className="px-6 py-4">
                    District Manager
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> Offline
                    
                    </div>
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 light:text-blue-500 hover:underline">N/A</a>
                </td>
            </tr>
            <tr className="bg-white light:bg-gray-800 hover:bg-gray-50 light:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 light:focus:ring-blue-600 light:ring-offset-gray-800 light:focus:ring-offset-gray-800 focus:ring-2 light:bg-gray-700 light:border-gray-600"/>
                        
                    </div>
                </td>
                <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap light:text-white">
                    <img className="w-10 h-10 rounded-full" src={person1} alt="Jese image"/>
                    <div className="pl-3">
                        <div className="text-base font-semibold">Rakesh Sharma</div>
                        <div className="font-normal text-gray-500">rakesh@gmail.com</div>
                    </div>
                </th>
                <td className="px-6 py-4">
                    Assistant Manager
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> Offline
                    </div>
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 light:text-blue-500 hover:underline">N/A</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

          </div>
        </div></div></div>
  )
}
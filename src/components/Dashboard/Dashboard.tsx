import "./Dashboard.css"
import close from "../../assets/icons/close-icon.svg"
import menu from "../../assets/icons/menu-icon.svg"
import search from "../../assets/icons/search-icon.svg"
import chevron from "../../assets/icons/chevron-down.svg"
import funnel from "../../assets/icons/funnel-icon.svg"
import dots from "../../assets/icons/dots-icon.svg"
import avatar from "../../assets/images/avatar.jpg"
import person1 from "../../assets/images/person-1.jpg"
import person2 from "../../assets/images/person-2.jpg"
import person3 from "../../assets/images/person-3.jpg"
import {Link, Route, Routes,useLocation} from "react-router-dom";
import Overview from "./Overview";
import {useEffect} from "react";
import {useAuth} from "../../context/auth-context";


export default function Dashboard() {
    const location = useLocation()
    const {user} = useAuth()

    useEffect(() => {
        dashboardTabRouting()
    }, [location]);

    useEffect(() => {
        console.log(user)
    }, [user]);

    function dashboardTabRouting(){
        const pathname = location.pathname;
        //remove active class from each tab
        removeActiveClassFromTabs()
        // overview is opened at dashboard
        if(pathname === '/dashboard'){
            addActiveClassToTab('tab-overview');
        }
        const tabName = location.pathname.split('/dashboard')[1];
        switch (tabName) {
            case '/admins':
                addActiveClassToTab('tab-admins')
                break;
            case '/teams':
                addActiveClassToTab('tab-teams')
                break;
            case '/resources':
                addActiveClassToTab('tab-resources')
                break;
        }
    }

    function addActiveClassToTab(id:string) {
        const elem = document.getElementById(id)
        if(elem){
            elem.classList.add('active');
        }
    }

    function removeActiveClassFromTabs(){
        const tabList = document.getElementsByClassName('tab-btn-item')
        for (let i = 0; i < tabList.length; i++) {
            const tab = tabList[i];
            tab.classList.remove('active');
        }
    }

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
                                    <img src={close} alt=""/>
                                </button>
                                <li className="nav-item">
                                    <Link to={"/map"} className="nav-link">Map View</Link>
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
                            <div className="navbar-show-btn">
                                <img src={menu} alt=""/>
                            </div>
                        </div>

                        <div className="navbar-r">
                            <div className="nav-icon-btns">
                                <button className="nav-icon-btn">
                                    <img src={search} alt=""/>
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
                                    <img src={avatar} alt=""/>
                                </div>
                                <img src={chevron} alt="" className="profile-btn-icon"/>
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
                                    <li id={'tab-overview'} className="tab-btn-item active">
                                        <Link to={'/dashboard'} className="tab-btn-link" type="button">Overview</Link>
                                    </li>
                                    <li id={'tab-admins'} className="tab-btn-item">
                                        <Link to={'admins'} className="tab-btn-link" type="button">Admins</Link>
                                    </li>
                                    <li id={'tab-teams'} className="tab-btn-item">
                                        <Link to={'teams'} className="tab-btn-link" type="button">Teams</Link>
                                    </li>
                                    <li id={'tab-resources'} className="tab-btn-item">
                                        <Link to={'resources'} className="tab-btn-link" type="button">Tools/Equipments</Link>
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
                                    <img src={funnel} className="tab-r-btn-icon" alt=""/>
                                    <span className="tab-r-btn-text">Filters</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="content-tab-body">
                        <Routes>
                            <Route path={'/'} element={<Overview/>}/>
                            <Route path={'/admins'} element={<div>Admin</div>}/>
                            <Route path={'/teams'} element={<div>Teams</div>}/>
                            <Route path={'/resources'} element={<div>Resources</div>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    )
}
import "./Dashboard.css"
import close from "../assets/icons/close-icon.svg"
import menu from  "../assets/icons/menu-icon.svg"
import search from "../assets/icons/search-icon.svg"
import chevron from "../assets/icons/chevron-down.svg"
import funnel from "../assets/icons/funnel-icon.svg"
import dots from "../assets/icons/dots-icon.svg"
import avatar from "../assets/images/avatar.jpg"
import person1 from "../assets/images/person-1.jpg"
import person2 from "../assets/images/person-2.jpg"
import person3 from "../assets/images/person-3.jpg"


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
                  <img src= {close} alt="" />
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
                    <button className="item-top-btn">
                      <img src={dots} alt="" />
                    </button>
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
                    <button className="item-top-btn">
                      <img src={dots} alt="" />
                    </button>
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
                    <button className="item-top-btn">
                      <img src={dots} alt="" />
                    </button>
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
                    <button className="item-top-btn">
                      <img src={dots}alt="" />
                    </button>
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
        </div></div></div>
  )
}
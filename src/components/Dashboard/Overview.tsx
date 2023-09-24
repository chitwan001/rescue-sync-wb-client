import dots from "../../assets/icons/dots-icon.svg";
import person1 from "../../assets/images/p1.jpeg"
import person2 from "../../assets/images/p2.jpeg"
import person3 from "../../assets/images/p3.jpeg"
import person4 from "../../assets/images/p4.jpeg"
import person6 from "../../assets/images/p6.jpeg"
import avatar from "../../assets/images/avatar.jpeg";

export default function Overview() {
    return (
        <>
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
                                <img src={dots} alt=""/>
                            </button>
                        </div>
                        <div className="item-body">
                            <p className="item-body-text">
                                No. of Teams Assigned : 2<br/>
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
                                    <img src={person1} alt=""/>
                                    <img src={person3} alt=""/>
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
                                <img src={dots} alt=""/>
                            </button>
                        </div>
                        <div className="item-body">
                            <p className="item-body-text">
                                No. of Teams Required: 2<br/>
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
                                    <img src={person2} alt=""/>
                                    <img src={person1} alt=""/>
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
                                <img src={dots} alt=""/>
                            </button>
                        </div>
                        <div className="item-body">
                            <p className="item-body-text">
                                No. of Teams Assigned : 1<br/>
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
                                    <img src={avatar} alt=""/>
                                    <img src={person3} alt=""/>
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
                                <img src={dots} alt=""/>
                            </button>
                        </div>
                        <div className="item-body">
                            <p className="item-body-text">
                                No. of Teams Required: 2<br/>
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
                                    <img src={person1} alt=""/>
                                    <img src={person2} alt=""/>
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
        </>
    )
}
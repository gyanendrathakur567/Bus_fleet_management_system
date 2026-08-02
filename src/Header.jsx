import './Header.css';
function Header (){

    return (
        <>
        <header className="header-container">
            {/* Logo / Title Area with subtle interactive hover */}
            <div className="header-brand">
                <h1 className="fName">B S M</h1>
                <span className="divider">|</span>
                <h3 className="lName">BUS MANAGEMENT SYSTEM</h3>
            </div>

            {/* Quick Interactive Actions */}
            <div className="header-actions">
                <div className="search-bar">
                    <input type="text" placeholder="Search buses, routes..." />
                </div>
                <button className="icon-btn" title="Notifications">
                    🔔 <span className="badge"></span>
                </button>
                <div className="user-profile">
                    <div className="avatar">A</div>
                    <span>Admin</span>
                </div>
            </div>
        </header>
        <div>
            <nav className="nav">
                <a href="#" className="nav-box">Report</a>
                <a href="#" className="nav-box">Bus List</a>
                <a href="#" className="nav-box">Add Bus</a>
                <a href="#" className="nav-box">Route List</a>
                <a href="#" className="nav-box">Add Route</a>
                <a href="#" className="nav-box">Assign Bus</a>
                <a href="#" className="nav-box logout">Logout</a>
            </nav>
        </div>
        </>
    )

}
export default Header;


import { Link } from 'react-router-dom';
import './Header.css';
function Header (){

    return (
        <>
        <header className="header-container">
            {/* Logo / Title Area with subtle interactive hover */}
            <div className="header-brand">
                <h1 className="fName">B M S</h1>
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
        </>
    )

}
export default Header;


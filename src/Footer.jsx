import './Footer.css';
function Footer (){
    return(
        <footer className="footer-wrapper">
      <div className="footer-content">
        {/* Top Header & Status */}
        <div className="footer-top">
          <span className="footer-logo">B M S</span>
          <span className="footer-divider">|</span>
          <span className="footer-title">BUS MANAGEMENT SYSTEM</span>
          {/* Live Shift Clock */}
        <div className="footer-clock">
            <span className="clock-icon">🕒</span>
             <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
        </div>

        {/* Navigation Links */}
        <nav className="footer-nav">
          <a href="#reports" className="footer-nav-link">Reports & Analytics</a>
          <a href="#bus-list" className="footer-nav-link">Bus Fleet List</a>
          <a href="#routes" className="footer-nav-link">Route Management</a>
          <a href="#assign" className="footer-nav-link">Assign Buses</a>
          <a href="#support" className="footer-nav-link">Support</a>
        </nav>

        {/* Bottom Legal / Copyright Section */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Bus Fleet Management System. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <a href="#privacy" className="footer-legal-link">Privacy Policy</a>
            <span className="footer-bullet">•</span>
            <a href="#terms" className="footer-legal-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
    )
}
    export default Footer;
import './Layout.css';
import { Link, } from 'react-router-dom';
function layout1(){
    return(
        <div className=" page-layout">
        {/* <header className="pl-header">Header</header> */}
        <nav className="menu">
            {/* Navigation Links */}
                        <div className="nav-links">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
            
                            <Link to="/about" className="nav-link">
                                About
                            </Link>
            
                            <Link to="/contact" className="nav-link">
                                Contact us
                            </Link>
            
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                        </div>
        </nav>
        <aside className="pl-sidebar">
        <h3>Sidebar</h3>
        <ul>
            <li>Dashbaord</li>
            <Link to="Dashbaord" className="nav-link">
            Dashbaord
            </Link>
            <li>Orders</li>
            <Link to="Oders" className="nav-link">
            Oders
            </Link>
            <li>Customer</li>
            <Link to="Customer" className="nav-link">
                Customer
            </Link>
            <li>Setting</li>
            <Link to="Setting" className="nav-link">
                Setting
            </Link>
        </ul>
        </aside>
        <main className="pl-main">
        <h2>Main Content</h2>
        <p> this is the main content area of the layout.</p>
        </main>
        <footer className="pl-footer">@2026 my company 
        </footer>
        </div>
        
    );
}

export default layout1;
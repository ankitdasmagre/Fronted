import './Layout.css';
import { Outlet, NavLink, } from 'react-router-dom';
function layout(){
    return(
        <div className=" page-layout">
        <header className="pl-header">Header</header>
        <aside className="pl-sidebar">
        <h3>Sidebar</h3>
        <ul>
            <NavLink to="dashboard"><li>Dashboard</li></NavLink>
            <NavLink to="order"><li>Order</li></NavLink>
            
            <li><NavLink to="customers">Customers</NavLink></li>
            <li><NavLink to="setting">Setting</NavLink></li>
        </ul>
        </aside>
        <main className="pl-main">
        {/* <h2>Main Content</h2>
        <p> this is the main content area of the layout.</p> */}
        <Outlet/>
        </main>
        <footer className="pl-footer">@2026 my company 
        </footer>
        </div>
        
    );
}

export default layout;
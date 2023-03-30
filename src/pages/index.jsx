import { Link, Outlet } from "react-router-dom";
export default function RootLayout() {
    return (
        <div id='background'>
            <div id='nav'>
                <div><Link to="/">Home</Link></div>
                <div><Link to="/about">About</Link></div> 
            </div>
            
            <main>
                <div id='space'></div>
                <Outlet />
           </main>
       </div>
    );
}

export function RootIndex() {
    return <h1>Home</h1>;
} 
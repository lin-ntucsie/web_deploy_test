import { Link, Outlet } from "react-router-dom";
export default function RootLayout() {
    return (
        <div class='background'>
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
    return (
        <section>
            <div id='myself'>
                <p id = 'name'>林浩丞</p>
                <p id = 'en-name'>Lin Hao-Cheng</p>
                <p id = 'school'>NTU CSIE B10902004</p>
            </div>
        </section>
    );
} 
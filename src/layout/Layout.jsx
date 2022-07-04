import NavBar from '../component/Header';
import { Footer } from "../component/footer/Footer";
import { React } from 'react';


export function Layout({children}) {
    return (<>
        <NavBar/>
        {children}
        <Footer/>
    </>)
}
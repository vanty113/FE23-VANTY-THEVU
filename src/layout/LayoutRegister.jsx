import { Footer } from "component/footer/Footer";
import Header from "component/header/Header";


export function LayoutRegister({children}) {
    return (<>
    <Header/>
    {children}
    <Footer/>
    </>)
}
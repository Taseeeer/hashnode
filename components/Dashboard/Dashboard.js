import Header from "../Header/Header";
import Sidebar from "./Sidebar";

import { ThemeContext } from '../../libs/Context';
import { useContext } from 'react'; 



export default function Dashboard({ children }) {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={`bg-themeBg ${theme ? 'dark-mode' : ''}`}>

            <Header />

            <section className='flex pt-2'>
                <Sidebar />
                
                <section className='border w-full h-screen overflow-y-auto m-4 rounded-md'>
                    {children}
                </section>
            </section>
        </div>
    )
}
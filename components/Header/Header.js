import Image from 'next/image';
import logo from '../../public/assets/logo.png';

import { FiEdit2 } from 'react-icons/fi';
import { BiDownArrow, BiGitBranch, BiMoon, BiSun, BiBell, BiUserCircle, BiSearch } from 'react-icons/bi';
import Button from '../Common/Button';

import { ThemeContext } from '../../libs/Context';
import { useContext } from 'react'; 

export default function Header() {

    const { theme, handleThemeState } = useContext(ThemeContext);

    return (
    <header className='bg-primaryBg flex py-4 px-6 items-center gap-6 border-b'>
        <div className='w-[300px] items-center'>
            <Image 
                src={logo}
                alt="Landscape picture"
            />
        </div>

        <div className='flex items-center gap-2 bg-gray-100 py-2 px-6 ml-[2rem] rounded-3xl w-full'>
            <BiSearch className='text-gray-400' />
            <input 
                placeholder='Search for tags, people, articles, and many more'
                className='bg-gray-100 focus:outline-none'
            />
            <span className='ml-auto bg-white px-[7px] py-[2px] rounded-md'>/</span>
        </div>

        <div className='flex items-center gap-2 items-center bg-primaryColor text-white rounded-3xl'>
            <button className='flex items-center gap-2 px-2 py-2 font-bold text-sm'> {<FiEdit2 />} Write</button>
            <Button name={<BiDownArrow />} className='border-l px-2 py-3' />
        </div>

        <div className='flex items-center gap-4 text-3xl text-gray-600 font-thin cursor-pointer'>
            <BiGitBranch className='hover:bg-gray-100 rounded-full text-[3rem] p-[10px]' />

            { theme
                ? 
                <BiSun className='hover:bg-gray-100 rounded-full text-[3rem] p-[10px]' onClick={handleThemeState} /> 
                : 
                <BiMoon className='hover:bg-gray-100 rounded-full text-[3rem] p-[10px]' onClick={handleThemeState} /> 
            }

            <div className='relative hover:bg-gray-100 rounded-full p-2'>
                <BiBell className='hover:bg-gray-100 rounded-full' />
                <span 
                    className='absolute bg-red-500 text-white font-bold text-sm px-[9px] py-[2px] rounded-full bottom-6 left-5'
                >1</span>
            </div>

            <BiUserCircle className='bg-gray-200 p-2 rounded-full text-5xl text-gray-700' />
        </div>
    </header>
    )
}
import { BiNews, BiCompass, BiFileBlank, BiBookBookmark, BiChevronsRight, BiTrendingUp, BiChevronRight } from 'react-icons/bi';
import { FaTwitterSquare, FaLinkedin, FaInstagram, FaDiscord} from 'react-icons/fa';

export default function Sidebar() {
    return (
        <aside 
            className='bg-primaryBg flex m-4 mr-1 flex-col [&>*]:flex [&>*]:items-center [&>*]:gap-2 [&>*]:text-[1.07rem] [&>*]:font-medium border rounded-md w-[18rem]
            [&>*]:basis=[15%] [&>*]:cursor-pointer'>
            <section className='hover:bg-gray-200 px-4 py-2 text-fontColor'> <BiNews className='text-[1.3rem]' /> My Feed </section>
            <section className='hover:bg-gray-200 px-4 py-2 text-fontColor'> <BiCompass className='text-[1.3rem]' /> Explore </section>
            <section className='hover:bg-gray-200 px-4 py-2 text-fontColor'> <BiFileBlank className='text-[1.3rem]' /> Drafts </section>
            <section className='hover:bg-gray-200 px-4 py-2 text-fontColor'> <BiBookBookmark className='text-[1.3rem]' /> Bookmarks </section>
            <section className='border-b mx-4 py-2 text-fontColor'> <BiChevronsRight className='text-[1.3rem]' /> More </section>

            <section className='flex flex-col'>
                <div className='flex items-center gap-4 pt-4 mb-[-12px]'>
                    <span className='text-gray-700 text-fontColor'>Trending tags</span> 
                    <span className='text-gray-400 text-2xl'> <BiTrendingUp /></span>
                </div>

                <dl className='[&>*]:text-fontColor w-full text-sm [&>*]:flex p-4'>
                    <div className='flex items-center justify-between my-2 p-[4px] hover:bg-gray-100 rounded'>   
                        <dt>JavaScript</dt>
                        <dd className='bg-gray-200 text-fontGrayTwo px-[5px] py-[2px] text-[12px] rounded-full'>+164</dd>
                    </div>
                    <div className='flex items-center justify-between my-2 p-[4px] hover:bg-gray-100 rounded'>   
                        <dt>Web Development</dt>
                        <dd className='bg-gray-200 text-fontGrayTwo px-[5px] py-[2px] text-[12px] rounded-full'>+164</dd>
                    </div>
                    <div className='flex items-center justify-between my-2 p-[4px] hover:bg-gray-100 rounded'>   
                        <dt>React</dt>
                        <dd className='bg-gray-200 text-fontGrayTwo px-[5px] py-[2px] text-[12px] rounded-full'>+164</dd>
                    </div>
                    <div className='flex items-center justify-between my-2 p-[4px] hover:bg-gray-100 rounded'>   
                        <dt>Python</dt>
                        <dd className='bg-gray-200 text-fontGrayTwo px-[5px] py-[2px] text-[12px] rounded-full'>+164</dd>
                    </div>
                    <div className='flex items-center justify-between my-2 p-[4px] hover:bg-gray-100 rounded'>   
                        <dt>Beginner Roadmap</dt>
                        <dd className='bg-gray-200 text-fontGrayTwo px-[5px] py-[2px] text-[12px] rounded-full'>+164</dd>
                    </div>
                    <div className='flex items-center justify-between my-2 p-[4px] hover:bg-gray-100 rounded'>   
                        <dt>Beginner Roadmap</dt>
                        <dd className='bg-gray-200 text-fontGrayTwo px-[5px] py-[2px] text-[12px] rounded-full'>+164</dd>
                    </div>
                    <div className='flex items-center gap-2 pl-1 [&>*]:text-fontColor '>
                        <span className='text-[14px]'> See all </span>
                        <BiChevronRight className='text-xl' />
                    </div>
                </dl>
            </section>

            <section className='flex justify-around mx-4 py-6 [&>*]:text-2xl [&>*]:text-gray-500 border-b'>
                <FaTwitterSquare className='hover:text-blue-500' />
                <FaLinkedin className='hover:text-sky-500' />
                <FaInstagram className='hover:text-rose-400' />
                <FaDiscord className='hover:text-indigo-600' />
            </section>

            <section className='mr-auto p-6'>
                <span className='text-[14px] text-fontColor'>© 2022 Hashnode</span>
            </section>
        </aside>
    )
}
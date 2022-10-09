import Image from 'next/image';

import { GoMarkGithub, GoMarkdown, GoSmiley } from 'react-icons/go';
import { AiFillThunderbolt } from 'react-icons/ai';

import EditPencil from '../../public/assets/pencil.webp';

export default function AsBlogger() {

    const data = [
        {
            icon: <GoMarkGithub className='text-[#8b5cf6]' />,
            title: 'Automatic GitHub Backup',
            content: 'Every time you publish an article on your tech blog, a markdown version of the post is pushed to your private GitHub repo as a backup.'
        },
        {
            icon: <GoMarkdown className='text-[#ec4899]' />,
            title: 'Write in Markdown',
            content: 'Every time you publish an article on your tech blog, a markdown version of the post is pushed to your private GitHub repo as a backup.'
        },
        {
            icon: <GoSmiley className='text-[#12b981]' />,
            title: 'Map a custom domain',
            content: 'Every time you publish an article on your tech blog, a markdown version of the post is pushed to your private GitHub repo as a backup.'
        },
        {
            icon: <AiFillThunderbolt className='text-[#f59e0c]' />,
            title: 'Superfast Next.js Powered Tech Blogs',
            content: 'Every time you publish an article on your tech blog, a markdown version of the post is pushed to your private GitHub repo as a backup.'
        },
    ];


    return (
        <section className='bg-[rgba(16,24,39,1)] p-[4.5rem] rounded-2xl'>
            <p className='uppercase text-green-600 py-4'>key features</p>
            <div className='flex justify-between items-center'>
                <div className='w-[50%]'>
                    <span className='text-[3rem] font-bold text-white leading-[50px]'>Everything you need to start blogging as a developer!</span>
                </div>
                <div className='w-[150px]'>
                    <Image alt="Edit" src={EditPencil} />
                </div>
            </div>

            <section className='flex flex-wrap py-[3rem] gap-[2rem]'>
                { data.map((section, index) => (
                    <div key={index} className='flex gap-4 basis-[400px] py-[2rem] grow shrink-0'>
                        <div className={`text-[1.7rem] text-white`}> { section.icon } </div>
                        <div className='flex flex-col'>
                            <span className='font-medium text-[1.2rem] text-white'>{ section.title }</span>
                            <span className='text-white'>{ section.content}</span>
                        </div>
                    </div>
                ))}
            </section>
        </section>
    )
}
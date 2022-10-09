import Image from 'next/image';

import Button from '../Common/Button';

import backgroundStar from '../../public/assets/homebackground.png';
import line from '../../public/assets/line.png';
import stuff from '../../public/assets/stuff.webp';
import quincy from '../../public/assets/quincy.webp';
import quotes from '../../public/assets/dq.png';
import OwnContent from './OwnContent';
import AsBlogger from './AsBlogger';

export default function Hero() {
    return (
        <section className='bg-primaryBg relative px-[5.5rem] overflow-x-hidden'>

            <div className='absolute top-[-50px] right-[-80px] z-0'>
                <Image
                    alt="Background"
                    src={backgroundStar}
                    width={600}
                    height={600} 
                    />
            </div>

            <div className='p-6'>
                <div className='mx-auto text-center text-fontColor border rounded-md whitespace-normal py-4 px-2 w-[800px]'>
                    <span>✨ Introducing <strong className='text-green-600'>Hashnode for Teams</strong> </span> 
                    <span>Invite your team and public together. Optimized for devtools, engineering, and open-source teams.</span>
                </div>
            </div>

            <section className='flex justify-between pt-[2.5rem]'>
                <section className='w-[450px]'>
                    <h1 className='text-[3.75rem] font-bold leading-none text-fontColor'>
                        <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3466f6] to-[#7c3aed]'>Home</span> for tech writers and readers
                    </h1>

                    <p className='text-gray-600 text-[20px] pt-8 text-fontColor'>The hassle-free blogging platform for engineers, thought-leaders, and the dev community!</p>
                    <p className='font-bold text-[20px] text-bold pt-8 text-fontColor'>Blog on a custom domain, own your content and share your ideas with the world.</p>

                    <div className='flex items-center gap-4 py-2'>
                        <Button name="Get started - it's free" 
                            className='bg-primaryColor text-white px-4 py-2 my-4 font-bold text-xl font-normal rounded-[100px]' 
                        />
                        <div className='w-[200px]'>
                            <Image alt="Line" src={line} />
                        </div>
                    </div>
                </section>

                <section>
                    <div className='w-[430px]'>
                        <Image alt='Stuff' src={stuff} />
                    </div>
                </section>
            </section>

            <section className='relative p-[2.5rem] mt-[5.5rem] mb-4 rounded-md bg-gray-100'>
                <div className='absolute top-0 left-0'>
                    <Image src={quotes} alt="Quotes" width={95} height={80} />
                </div>

                <div className='flex gap-4 items-center'>
                    <div className='w-[380px]'>
                        <Image src={quincy} alt="Quincy" className='rounded-full' />
                    </div>
                    <div>
                        <p className='text-[1.2rem]'>"You can start a dev blog in just a few seconds using Hashnode and then you can move that to your own domain if you get one later. They will even help distribute your articles on their platform. By far the best place to create a blog, imho."</p>
                        <p className='text-[1.2rem] py-6'><strong>Quincy Larson</strong>, Founder freeCodeCamp</p>
                        <Button name='Join the community' className='bg-primaryColor py-2 px-4 text-white font-medium rounded-3xl' />
                    </div>
                </div>

            </section>

            <OwnContent />
            
            <AsBlogger />

        </section>
    ) 
}
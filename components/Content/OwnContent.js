import Image from 'next/image';

import illustrationOne from '../../public/assets/oc1.webp';
import illustrationTwo from '../../public/assets/oc2.webp';
import illustrationThree from '../../public/assets/oc3.webp';

export default function OwnContent() {

    const data = [
        {
            img: illustrationOne,
            alt: "Illustration",
            subTitle: "Blog on your personal domain",
            content: "Map your custom domain in just seconds. Serve your blog over HTTPS with no extra configuration. Get a high performance, secure, and fully-optimized dev blog that delights your readers.",
        },
        {
            img: illustrationTwo,
            alt: "Illustration",
            subTitle: "Instantly find your audience",
            content: "Every time you write an article, Hashnode publishes it on your domain and shares it with the dev community members on the homepage. The readers are directed to your website to read and interact with your content.",
        },
        {
            img: illustrationThree,
            alt: "Illustration",
            subTitle: "Blog on your personal domain",
            content: "Knowledge sharing on Hashnode is and will always be completely free. Because we value the relationship between you and your readers, we won't show ads or pop-ups on your articles.",
        },
    ]

    return (
        <>
        <section>
            <div className='flex flex-col justify-center text-center gap-4 pt-[3.5rem]'>
                <p className='uppercase text-primaryColor font-bold text-[1.1rem]'>Own your content</p>
                <h1 className='text-[3rem] font-bold text-fontColor'>No Ads. No Paywall. <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#3466f6] to-[#7c3aed]'>No Kidding.</span></h1>
            </div>
        </section>
        <section className='flex justify-between wrap [&>*]:text-fontColor py-[5rem]'>
            { data.map((each, index) => (
                <div key={index} className='flex flex-col w-[17rem]'>
                    <div className='w-[110px]'>
                        <Image alt={ each.alt } src={ each.img } />
                    </div>
                    <span className='font-bold text-[1.8rem]'>{ each.subTitle }</span>
                    <span className='text-gray-500 text-fontGrayTwo py-4'>{ each.content}</span>
                </div>
            ))}
        </section>
        </>
    )
}
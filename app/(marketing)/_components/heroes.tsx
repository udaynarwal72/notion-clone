import Image from 'next/image';
import jotionImage from 'public/jotion-hero.png'
const Heros = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-center max-w-full'>
                <div className='relative w-full sm:w-[350px] sm:h-[350px] md:h-[500px] md:w-[400px]'>
                    <Image src="/jotion-hero.png" fill
                        className='object-contain' alt="jotion hero" />
                </div>
            </div>

        </>
    );
}

export default Heros;
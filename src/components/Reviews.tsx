import Image from 'next/image';
import MaxWidthWrapper from './MaxWidthWrapper';

export function Reviews() {
    return (
        <MaxWidthWrapper className='relative max-w-5xl'>
            <Image
                src='/what-people-are-buying.png'
                alt=''
                className='absolute select-none hidden xl:block -left-32 top-1/3'
                width={300}
                height={100}
            />
        </MaxWidthWrapper>
    );
}

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string;
    dark?: boolean;
}

const Phone = ({ imgSrc, className, dark = false, ...props }: Props) => {
    return (
        <div
            className={cn(
                'relative pointer-events-none z-50 overflow-hidden',
                className
            )}
            {...props}
        >
            <Image
                src={
                    dark
                        ? '/phone-template-dark-edges.png'
                        : '/phone-template-white-edges.png'
                }
                alt=''
                className='pointer-events-none z-50 select-none'
                width={300}
                height={100}
            />

            <div className='absolute -z-10 inset-0'>
                <Image
                    src={imgSrc}
                    alt=''
                    className='object-cover min-h-full min-w-full'
                    width={300}
                    height={100}
                />
            </div>
        </div>
    );
};

export default Phone;

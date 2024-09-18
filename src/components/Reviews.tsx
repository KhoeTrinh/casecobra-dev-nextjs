'use client';

import Image from 'next/image';
import MaxWidthWrapper from './MaxWidthWrapper';
import { CSSProperties, useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

const PHONES = [
    '/testimontials/1.jpg',
    '/testimontials/2.jpg',
    '/testimontials/3.jpg',
    '/testimontials/4.jpg',
    '/testimontials/5.jpg',
    '/testimontials/6.jpg',
];

function splitArray<T>(arr: Array<T>, num: number) {
    const result: Array<Array<T>> = [];

    for (let i = 0; i < arr.length; i++) {
        const index = i % num;
        if (!result[index]) {
            result[index] = [];
        }
        result[index].push(arr[i]);
    }
    return result;
}

function ReviewColumn({
    reviews,
    className,
    reviewClassName,
    msPerPixel = 0,
}: {
    reviews: string[];
    className?: string;
    reviewClassName?: (reviewIndex: number) => string;
    msPerPixel?: number;
}) {
    const columnRef = useRef<HTMLDivElement | null>(null);
    const [columnHeight, setColumnHeight] = useState(0)

    useEffect(() => {
        if(!columnRef.current) return

        const resizeObserver = new window.ResizeObserver(() => {
            setColumnHeight(columnRef.current?.offsetHeight ?? 0)
        })

        resizeObserver.observe(columnRef.current)

        return () => {
            resizeObserver.disconnect()
        }
    }, []) 

    return (
        <div
            ref={columnRef}
            className={cn('animate-marquee sapce-y-8 py-4', className)}
            style={{ '--marquee-duration': duration } as CSSProperties}
        ></div>
    );
}

function ReviewGrid() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.4 });
    const columns = splitArray(PHONES, 3);
    const column1 = columns[0];
    const column2 = columns[1];
    const column3 = splitArray(columns[2], 2);

    return (
        <div
            ref={containerRef}
            className='relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] 
            grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 
            md:grid-cols-2 lg:grid-cols-3'
        >
            {isInView ? (
                <>
                    <ReviewColumn />
                </>
            ) : null}
        </div>
    );
}

export function Reviews() {
    return (
        <MaxWidthWrapper className='relative max-w-5xl'>
            <Image
                src='/what-people-are-buying.png'
                alt=''
                className='absolute select-none hidden xl:block -left-32 
                top-1/3'
                width={300}
                height={100}
            />

            <ReviewGrid />
        </MaxWidthWrapper>
    );
}

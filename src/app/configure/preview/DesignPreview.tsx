'use client';

import { previews } from '@/components/array';
import Phone from '@/components/Phone';
import { BASE_PRICE, PRODUCT_PRICES } from '@/config/products';
import { cn, formatPrice } from '@/lib/utils';
import { COLORS, MODELS } from '@/validators/option-validator';
import { Configuration } from '@prisma/client';
import { Check } from 'lucide-react';
import { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';

type Props = {
    configuration: Configuration;
};

const DesignPreview = ({ configuration }: Props) => {
    const [showConfetti, setShowConfetti] = useState(false);
    useEffect(() => setShowConfetti(true));

    const { color, model, finish, material } = configuration;
    const tw = COLORS.find(
        (supportedColor) => supportedColor.value === color
    )?.tw;
    const { label: modelLabel } = MODELS.options.find(
        ({ value }) => value === model
    )!;

    return (
        <>
            <div
                aria-hidden='true'
                className='pointer-events-none select-none absolute 
                inset-0 overflow-hidden flex justify-center'
            >
                <Confetti
                    active={showConfetti}
                    config={{ elementCount: 200, spread: 90 }}
                />
            </div>

            <div
                className='mt-20 flex flex-col items-center md:grid 
            text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 
            md:gap-x-8 lg:gap-x-12'
            >
                <div
                    className='md:col-span-4 lg:col-span-3 
                md:row-span-2 md:row-end-2'
                >
                    <Phone
                        className={cn(`bg-${tw}`)}
                        imgSrc={configuration.croppedImageUrl!}
                    />
                </div>

                <div className='mt-6 sm:col-span-9 sm:mt-0 md:row-end-1'>
                    <h3
                        className='text-3xl font-bold tracking-tight 
                    text-gray-900'
                    >
                        Your {modelLabel}
                    </h3>
                    <div className='mt-3 flex items-center gap-1.5 text-base'>
                        <Check className='h-4 w-4 text-green-500' />
                        In stock and ready to ship
                    </div>

                    <div className='sm:col-span-12 md:col-span-9 text-base'>
                        <div
                            className='grid grid-cols-1 gap-y-8 border-b 
                        border-gray-200 py-8 sm:grid-cols-2 sm:gap-x-6 
                        sm:py-6 md:py-10'
                        >
                            {previews.map((preview, index) => (
                                <div key={index}>
                                    <p className='font-medium text-zinc-950'>
                                        {preview.title}
                                    </p>
                                    <ol className='mt-3 text-zinc-700 list-disc list-inside'>
                                        {preview.description.map(
                                            (preview2, index) => (
                                                <li key={index}>
                                                    {preview2}
                                                </li>
                                            )
                                        )}
                                    </ol>
                                </div>
                            ))}
                        </div>

                        <div className='mt-8'>
                            <div className='bg-gray-50 p-6 sm:rounded-lg sm:p-8'>
                                <div className='flow-root text-sm'>
                                    <div className='flex items-center justify-between py-1 mt-2'>
                                        <p className='text-gray-600'>
                                            Base price
                                        </p>
                                        <p className='font-medium text-gray-900'>
                                            {formatPrice(BASE_PRICE / 100)}
                                        </p>
                                    </div>

                                    {finish === 'textured' ? (
                                        <div className='flex items-center justify-between py-1 mt-2'>
                                            <p className='text-gray-600'>
                                                Textured Finish
                                            </p>
                                            <p className='font-medium text-gray-900'>
                                                {formatPrice(
                                                    PRODUCT_PRICES.finish
                                                        .textured / 100
                                                )}
                                            </p>
                                        </div>
                                    ) : null}

                                    {material === 'polycarbonate' ? (
                                        <div className='flex items-center justify-between py-1 mt-2'>
                                            <p className='text-gray-600'>
                                                Soft polycarbonate material
                                            </p>
                                            <p className='font-medium text-gray-900'>
                                                {formatPrice(
                                                    PRODUCT_PRICES.material
                                                        .polycarbonate /
                                                        100
                                                )}
                                            </p>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DesignPreview;

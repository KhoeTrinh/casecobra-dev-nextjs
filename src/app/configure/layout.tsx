import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const layout = ({ children }: Props) => {
    return <MaxWidthWrapper className='flex-1 flex flex-col w-full'>
        {children}
    </MaxWidthWrapper>;
};

export default layout;

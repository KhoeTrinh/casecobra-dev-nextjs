import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Steps from '@/components/Steps';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const layout = ({ children }: Props) => {
    return <MaxWidthWrapper className='flex-1 flex flex-col w-full'>
        <Steps />
        {children}
    </MaxWidthWrapper>;
};

export default layout;

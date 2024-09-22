import { db } from '@/db';
import { notFound } from 'next/navigation';
import DesignPreview from '@/app/configure/preview/DesignPreview';

type Props = {
    searchParams: {
        [key: string]: string | string[] | undefined;
    };
};

const Page = async ({ searchParams }: Props) => {
    const { id } = searchParams;

    if (!id || typeof id !== 'string') {
        return notFound();
    }

    const configuration = await db.configuration.findUnique({
        where: { id },
    });
    if (!configuration) {
        return notFound();
    }

    return <DesignPreview configuration={configuration} />;
};

export default Page;

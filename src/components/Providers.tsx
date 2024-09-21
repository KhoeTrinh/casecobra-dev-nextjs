'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const client = new QueryClient();

const Providers = ({ children }: Props) => {
    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    );
};

export default Providers;

import { LayoutProps } from '@/models';
import * as React from 'react';

export function ClientLayout({ children }: LayoutProps) {
    return (
        <div className="text-white bg-[#292929]">
            {children}
        </div>
    );
}

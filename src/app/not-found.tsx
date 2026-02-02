'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Button from '@/app/Components/common/Button';

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#0E1014] px-4 text-center">
            <div className="relative">
                {/* Background glow effect */}
                <div className="absolute -top-20 left-1/2 h-[200px] w-[200px] -translate-x-1/2 rounded-full bg-[#167BFF] blur-[100px] opacity-20" />

                <h1 className="relative z-10 text-[120px] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-[#A0A4AE] sm:text-[180px]">
                    404
                </h1>
            </div>

            <h2 className="mt-4 text-2xl font-semibold text-white sm:text-4xl">
                Page Not Found
            </h2>

            <p className="mt-4 max-w-md text-sm text-[#A0A4AE] sm:text-base">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            <div className="mt-10">
                <div className="inline-block">
                    <Button
                        text="Back to Home"
                        color="bg-[#1057B5]"
                        isIcon={true}
                        onClick={() => router.push('/')}
                    />
                </div>
            </div>
        </div>
    );
}

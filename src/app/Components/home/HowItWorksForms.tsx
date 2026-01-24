import React from 'react';
import {
    UsernameFormProps,
    NameOnlyFormProps,
    UsernameOnlyFormProps,
    CustomFormProps
} from '@/app/types/howitworks';

export function UsernameForm({
    fullName,
    setFullName,
    usernamePhone,
    setUsernamePhone,
    usernameEmail,
    setUsernameEmail,
    keyword,
    setKeyword
}: UsernameFormProps) {
    return (
        <div className="w-full p-4">
            <div className="mb-3">
                <label className="block text-sm text-white mb-4">Name</label>
                <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter name"
                    className="w-full rounded-full bg-neutral-900 text-white placeholder-gray-500 py-3 px-4 border border-[#515151] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end justify-between mt-4">
                <div className="flex-1 w-full">
                    <label className="block text-sm text-white mb-2 sm:mb-4">Username</label>
                    <input
                        type="text"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        placeholder="Enter username"
                        className="w-full rounded-full bg-neutral-900 text-white placeholder-gray-500 px-4 py-3 border border-[#515151] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end justify-between mt-4">
                <div className="flex-1 w-full">
                    <label className="block text-sm text-white mb-2 sm:mb-4">Phone</label>
                    <input
                        type="text"
                        value={usernamePhone}
                        onChange={(e) => setUsernamePhone(e.target.value)}
                        placeholder="Enter phone number"
                        className="w-full rounded-full bg-neutral-900 text-white placeholder-gray-500 px-4 py-3 border border-[#515151] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex-1 w-full">
                    <label className="block text-sm text-white mb-2 sm:mb-4">Email</label>
                    <input
                        type="email"
                        value={usernameEmail}
                        onChange={(e) => setUsernameEmail(e.target.value)}
                        placeholder="Enter email address"
                        className="w-full rounded-full bg-neutral-900 text-white placeholder-gray-500 px-4 py-3 border border-[#515151] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
        </div>
    );
}

export function NameOnlyForm({ fullName, setFullName }: NameOnlyFormProps) {
    return (
        <div className="w-full p-4">
            <div className="mb-3">
                <label className="block text-sm text-white mb-4">Name</label>
                <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter name"
                    className="w-full rounded-full bg-neutral-900 text-white placeholder-gray-500 py-3 px-4 border border-[#515151] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    );
}

export function UsernameOnlyForm({ keyword, setKeyword }: UsernameOnlyFormProps) {
    return (
        <div className="w-full p-4">
            <div className="mb-3">
                <label className="block text-sm text-white mb-4">Username</label>
                <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Enter username"
                    className="w-full rounded-full bg-neutral-900 text-white placeholder-gray-500 py-3 px-4 border border-[#515151] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    );
}

export function CustomForm({ formType, controller, setController }: CustomFormProps) {
    return (
        <div className="w-full p-4">
            <div>
                <label className="block text-sm text-white font-inter mb-4">{formType === 1 ? 'Phone Number' : 'Email'}</label>
                <div className="flex items-end justify-between gap-4 flex-wrap sm:flex-nowrap">
                    <input
                        value={controller}
                        onChange={(e) => setController(e.target.value)}
                        type="text"
                        placeholder={formType === 1 ? "Enter Phone Number" : "Enter Email address"}
                        className="w-full rounded-full bg-neutral-900 text-white placeholder-gray-500 border border-[#515151] focus:outline-none focus:ring-2 focus:ring-blue-500 py-3 px-4"
                    />
                </div>
            </div>
        </div>
    );
}

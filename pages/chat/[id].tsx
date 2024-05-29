import Image from 'next/image';
import Link from "next/link";

const ChatWindow = () => (
    <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="flex flex-col items-center justify-center w-full max-w-md p-4 bg-white rounded-lg shadow-md">
            <div className="flex items-center mb-4 w-full">
                <Image
                    src="https://randomuser.me/api/portraits/women/35.jpg"
                    alt="Chat Partner"
                    width={48}
                    height={48}
                    className="w-12 h-12 bg-gray-300 rounded-full"
                    priority
                />
                <div className="ml-4">
                    <h2 className="text-lg font-semibold text-black">Marie Wondy</h2>
                    <p className="text-sm text-green-500">Active now</p>
                </div>
                <div className="ml-auto">
                    <Link href="/">
                        <button className="p-2 rounded-full bg-gray-200">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </Link>

                </div>
            </div>
            <div className="flex-1 overflow-y-auto mb-4 w-full">
                <div className="mb-4">
                    <p className="text-sm text-gray-500">28 July 2023</p>
                </div>
                <div className="mb-4">
                    <p className="text-lg bg-gray-200 p-2 rounded-lg inline-block text-black">Hey mate, how's all going?</p>
                </div>
                <div className="mb-4 flex flex-col items-end">
                    <p className="text-lg bg-blue-200 p-2 rounded-lg inline-block text-white">Yeah, everything good!</p>
                    <p className="text-lg bg-blue-200 p-2 rounded-lg mt-2 inline-block text-white">What's your project update? Are you having any trouble?</p>
                </div>
                <div className="mb-4">
                    <p className="text-lg bg-gray-200 p-2 rounded-lg inline-block text-black">No, going all perfect! Let me show you images of the project. Look at these!!!</p>
                    <div className="flex mt-2 space-x-2">
                        <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
                        <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
                        <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
                    </div>
                </div>
                <div className="mb-4 flex flex-col items-start">
                    <p className="text-lg bg-blue-200 p-2 rounded-lg inline-block text-white">Wow! These are great.</p>
                </div>
            </div>
            <div className="w-full mt-4">
                <input
                    type="text"
                    placeholder="Type a message..."
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
            </div>
        </div>
    </div>
);

export default ChatWindow;

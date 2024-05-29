const ChatWindow = () => (
    <div className="flex flex-col h-full p-4">
        <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div className="ml-4">
                <h2 className="text-lg font-semibold">Marie Wondy</h2>
                <p className="text-sm text-green-500">Active now</p>
            </div>
            <div className="ml-auto">
                <button className="p-2 rounded-full bg-gray-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
        <div className="flex-1 overflow-y-auto mb-4">
            {/* Example messages */}
            <div className="mb-4">
                <p className="text-sm text-gray-500">28 July 2023</p>
            </div>
            <div className="mb-4">
                <p className="text-lg bg-gray-200 p-2 rounded-lg">Hey mate, how's all going?</p>
            </div>
            <div className="mb-4 flex flex-col items-end">
                <p className="text-lg bg-blue-200 p-2 rounded-lg">Yeah, everything good!</p>
                <p className="text-lg bg-blue-200 p-2 rounded-lg mt-2">What's your project update? Are you having any trouble?</p>
            </div>
            <div className="mb-4">
                <p className="text-lg bg-gray-200 p-2 rounded-lg">No, going all perfect! Let me show you images of the project. Look at these!!!</p>
                <div className="flex mt-2 space-x-2">
                    <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
                    <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
                    <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
                </div>
            </div>
            <div className="mb-4 flex flex-col items-start">
                <p className="text-lg bg-blue-200 p-2 rounded-lg">Wow! These are great.</p>
            </div>
        </div>
        <div className="flex items-center">
            <button className="p-2 rounded-full bg-gray-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
            </button>
            <input
                className="flex-1 mx-4 p-2 border rounded-lg"
                type="text"
                placeholder="Type something..."
            />
            <button className="p-2 rounded-full bg-gray-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </div>
);

export default ChatWindow;

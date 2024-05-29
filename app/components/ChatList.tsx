const ChatList = () => (
    <div className="p-4">
        <h3 className="text-lg font-semibold mb-4">Top People</h3>
        <div className="space-y-4">
            {/* Example chat items */}
            {['Elena Ivanova', 'Marie Wondy', 'Oskar Jansson', 'Nora Jensen'].map((name) => (
                <div key={name} className="flex items-center p-2 bg-white rounded-lg shadow">
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                    <div className="ml-4">
                        <h4 className="text-md font-semibold">{name}</h4>
                        <p className="text-sm text-gray-500">Project Head</p>
                    </div>
                    <div className="ml-auto">
                        <button className="p-2 rounded-full bg-gray-200">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default ChatList;

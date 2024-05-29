import Image from 'next/image';

const ProfileHeader = () => (
    <div className="flex items-center p-4 bg-purple-200 rounded-lg">
        <Image
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Profile Picture"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full"
            priority
        />
        <div className="ml-4">
            <h2 className="text-lg font-semibold text-black">Pedrik Ronner</h2>
            <p className="text-sm text-green-500">Active now</p>
        </div>
        <div className="ml-auto">
            <button className="p-2 rounded-full bg-gray-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
            </button>
        </div>
    </div>
);

export default ProfileHeader;

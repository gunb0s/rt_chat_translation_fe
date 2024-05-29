import Link from 'next/link';
import Image from 'next/image';

const ChatList = () => (
    <div className="p-4">
        <h3 className="text-lg font-semibold mb-4 text-black">Top People</h3>
        <div className="space-y-4">
            {['Elena Ivanova', 'Marie Wondy', 'Oskar Jansson', 'Nora Jensen'].map((name, index) => (
                <Link key={name} href={`/chat/${index}`} className="flex items-center p-2 bg-white rounded-lg shadow hover:bg-gray-100">
                    <Image
                        src={`https://randomuser.me/api/portraits/women/${index + 30}.jpg`}
                        alt={`${name}'s Avatar`}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full"
                        priority
                    />
                    <div className="ml-4">
                        <h4 className="text-md font-semibold text-black">{name}</h4>
                        <p className="text-sm text-gray-500">Project Head</p>
                    </div>
                </Link>
            ))}
        </div>
    </div>
);

export default ChatList;

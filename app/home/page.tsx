import Head from 'next/head';
import ProfileHeader from "@/components/ProfileHeader";
import ChatList from "@/components/ChatList";

const Home = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen">
            <Head>
                <title>Chat App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="md:w-1/3 bg-gray-100 p-4">
                <ProfileHeader />
                <ChatList />
            </div>
            <div className="hidden md:block md:w-2/3 p-4 bg-white">
                <div className="flex items-center justify-center h-full text-gray-500">
                    Select a chat to start messaging
                </div>
            </div>
        </div>
    );
}

export default Home;

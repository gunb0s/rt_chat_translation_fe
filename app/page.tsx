import Head from 'next/head';
import ProfileHeader from "@/app/components/ProfileHeader";
import ChatList from "@/app/components/ChatList";
import ChatWindow from "@/app/components/ChatWindow";

const Home: React.FC = () => {
  return (
      <div className="flex h-screen">
        <Head>
          <title>Chat App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="w-1/4 p-4 bg-gray-100">
          <ProfileHeader />
          <ChatList />
        </div>
        <div className="w-3/4 p-4">
          <ChatWindow />
        </div>
      </div>
  );
}

export default Home;

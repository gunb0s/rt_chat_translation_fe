import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
            <div className="flex flex-col items-center gap-2 mb-8">
                <span className="text-9xl">🍉</span>
                <h1 className="text-4xl text-blue-600 font-bold">수박</h1>
                <h2 className="text-2xl text-gray-800">수박 채팅에 어서오세요!</h2>
            </div>
            <div className="flex flex-col items-center gap-3 w-full">
                <Link
                    href="/create-account"
                    className="w-full max-w-xs py-2.5 text-lg text-center text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
                >
                    시작하기
                </Link>
                <div className="flex gap-2 text-gray-800">
                    <span>이미 계정이 있나요?</span>
                    <Link href="/login" className="text-blue-600 hover:underline">
                        로그인
                    </Link>
                </div>
            </div>
        </div>
    );
}

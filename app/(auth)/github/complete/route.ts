import {NextRequest} from "next/server";
import {redirect} from "next/navigation";

export async function GET(request: NextRequest) {
    const code = request.nextUrl.searchParams.get("code");
    if (!code) {
        return new Response(null, {
            status: 400,
        });
    }
    return redirect("/home");
}

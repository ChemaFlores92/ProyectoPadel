import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import ImgFondo from "@/components/ImgFondo";

export default async function Page() {
    const session = await auth();

    if (!session || session.user.role !== "USER") {
        redirect("/");
    }

    const menuItems = [
        {
            href: "/jugadores",
            label: "Jugadores",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 11 11">
                    <path d="M9 1.25a1.25 1.25 0 1 1-2.5-.001A1.25 1.25 0 0 1 9 1.25zm0 7.23a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm1.81-3.39L8.94 3.18A.48.48 0 0 0 8.56 3H1.51a.5.5 0 0 0 0 1H5L2.07 8.3a.511.511 0 0 0 1 .21H3L4.16 7H6l-1.93 3.24a.51.51 0 0 0 1 .2l3.67-6.38l1.48 1.48a.5.5 0 1 0 .7-.71h-.04z" fill="currentColor" />
                </svg>
            ),
        },
        {
            href: "/entrenamientos",
            label: "Entrenamientos",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                    <path fill="currentColor" d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                </svg>
            ),
        }
    ];

    return (
        <>
            <ImgFondo />
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
                <div className="w-full max-w-5xl p-6 md:p-10 bg-blue-600 bg-opacity-80 rounded-xl shadow-md mt-8 mb-8 border border-blue-300 backdrop-blur-sm animate-fade-in-up">
                    <div className="flex flex-col items-center pb-8 w-full text-white">
                        <img
                            src={session.user.image || "https://ui-avatars.com/api/?name=Usuario&background=0D8ABC&color=fff"}
                            alt={session.user.name}
                            className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover mb-4 shadow-sm"
                        />
                        <h1 className="text-xl font-semibold mb-1 text-white tracking-wide uppercase">
                            {session.user.name}
                        </h1>
                        <p className="text-sm text-blue-100">{session.user.email}</p>
                        <p className="text-xs text-blue-200">{session.user.role}</p>
                    </div>

                    <hr className="border-blue-300 my-5" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
                        {menuItems.map((item, index) => (
                            <Link href={item.href} key={index}>
                                <div className="h-full w-full">
                                    <div className="flex flex-col items-center justify-center h-full w-full p-5 bg-blue-500 bg-opacity-80 rounded-lg shadow-sm hover:bg-blue-400 hover:scale-[1.03] transition-transform duration-300 cursor-pointer">
                                        <div className="p-3 rounded-full bg-white shadow mb-3 text-blue-700">
                                            {item.icon}
                                        </div>
                                        <h2 className="text-white text-center font-medium text-base">{item.label}</h2>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

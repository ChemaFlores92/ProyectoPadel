import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import ImgFondo from "@/components/ImgFondo";

async function page() {
    const session = await auth();

    if (session?.user.role !== 'ADMIN')
        redirect('/dashboard');

    const menuItems = [
        {
            href: "/auth/register",
            label: "Nuevo Usuario",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="7" r="5" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 22H5.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 6.649 14H7m12 0v4m-2-2h4" />
                    </g>
                </svg>
            ),
        },
        {
            href: "/entrenadores",
            label: "Entrenadores",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                        <circle cx="8" cy="6" r="3.25" />
                        <path d="M2.75 14.25c0-2.5 2-5 5.25-5s5.25 2.5 5.25 5" />
                    </g>
                </svg>
            ),
        },
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
            href: "/categorias",
            label: "Categorías",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
                    <path fill="currentColor" d="M14 25h14v2H14zm-6.83 1l-2.58 2.58L6 30l4-4l-4-4l-1.42 1.41zM14 15h14v2H14zm-6.83 1l-2.58 2.58L6 20l4-4l-4-4l-1.42 1.41zM14 5h14v2H14zM7.17 6L4.59 8.58L6 10l4-4l-4-4l-1.42 1.41z" />
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
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen"><div className="w-full max-w-6xl p-6 md:p-10 bg-blue-700 bg-opacity-90 rounded-2xl shadow-xl mt-8 mb-8 border-2 border-yellow-400 ring-1 ring-yellow-300 backdrop-blur-md animate-fade-in-up transition">
                <div className="flex flex-col items-center pb-10 w-full text-white">
                        {session?.user.image ? (
                            <img src={session.user.image} alt={session.user.name} className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mb-4 shadow-md" />
                        ) : (
                            <img src="/adminNuevo.svg" alt="Admin" className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mb-4 shadow-md" />
                        )}
                        <h1 className="text-2xl font-semibold mb-2 text-blue-100 tracking-wider uppercase">{session?.user.name}</h1>
                        <p className="text-sm text-blue-200">{session?.user.email}</p>
                        <p className="text-sm text-blue-300 italic">{session?.user.role}</p>
                    </div>

                    <hr className="border-blue-300 my-6" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full">
                        {menuItems.map((item, index) => (
                            <Link href={item.href} key={index}>
                                <div className="flex flex-col items-center justify-center p-5 bg-blue-500 bg-opacity-80 rounded-xl shadow-md hover:bg-blue-400 hover:scale-105 transition duration-300 cursor-pointer">
                                    <div className="p-3 rounded-full bg-white shadow-inner mb-3 text-blue-700">
                                        {item.icon}
                                    </div>
                                    <h2 className="text-white text-center font-bold text-lg">{item.label}</h2>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default page;

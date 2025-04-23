import Link from 'next/link';
import { auth } from "@/auth";
import { logout } from '@/lib/actions';

async function Header() {
    const session = await auth();

    return (
        <nav className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 shadow-lg border-b border-blue-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link legacyBehavior href="/">
                            <img
                                className="rounded w-10 h-10 lg:h-10 cursor-pointer hover:scale-105 transition-transform duration-300"
                                src="/logoPeque.png"
                                alt="Logo"
                            />
                        </Link>
                    </div>

                    {/* Panel link */}
                    <div className="flex items-center space-x-4">
                        {session && session.user.role === 'ADMIN' ? (
                            <Link legacyBehavior href="/admin">
                                <a className="font-bold text-white hover:text-blue-200 transition-colors duration-300">
                                    Panel Administrador
                                </a>
                            </Link>
                        ) : session && session.user.role === 'USER' ? (
                            <Link legacyBehavior href="/dashboard">
                                <a className="font-bold text-white hover:text-blue-200 transition-colors duration-300">
                                    Panel de Entrenador
                                </a>
                            </Link>
                        ) : null}
                    </div>

                    {/* Botones de Login / Logout */}
                    <div className="flex items-center space-x-4">
                        {session ? (
                            <form>
                                <button
                                    type="submit"
                                    className="inline-flex items-center px-4 py-2 border border-blue-300 text-sm font-semibold rounded-md text-white bg-blue-500 hover:bg-blue-400 hover:scale-105 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200"
                                    formAction={logout}>
                                    Logout
                                </button>
                            </form>
                        ) : (
                            <div className="flex">
                                <Link legacyBehavior href="/auth/login">
                                    <a className="ml-4 inline-flex items-center px-4 py-2 border border-blue-300 text-sm font-semibold rounded-md text-white bg-blue-500 hover:bg-blue-400 hover:scale-105 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200">
                                        Login
                                    </a>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;

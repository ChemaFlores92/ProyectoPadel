import Link from "next/link";
//jugadores

async function atras() {
    return (
        <>
            <div className="flex justify-start mt-6">
                <Link legacyBehavior href="/jugadores">
                    <a className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                            <path fill="#1e3a8a" d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10m-6.6 4.6L10.8 12l4.6-4.6L14 6l-6 6l6 6z" />
                        </svg>
                    </a>
                </Link>
            </div>
        </>
    )
}

export default atras;
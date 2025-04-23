function layoutJugadores({ children }) {
    return (
        <section className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-blue-100 bg-gradient-to-r from-blue-700 to-teal-500 py-3 px-6 rounded-xl shadow-lg inline-flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 16 16" className="mr-3">
                    <g fill="#ffffff" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                        <circle cx="8" cy="6" r="3.25" />
                        <path d="M2.75 14.25c0-2.5 2-5 5.25-5s5.25 2.5 5.25 5" />
                    </g>
                </svg>
                Jugadores
            </h1>
            <hr className="mb-6 border-t-2 border-cyan-500" />
            {children}
        </section>
    )
}

export default layoutJugadores
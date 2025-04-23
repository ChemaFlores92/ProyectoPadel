'use client'
import { useFormStatus } from 'react-dom'

function Button({ title }) {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className={`w-full py-3 px-4 text-sm font-semibold rounded-md transition-all duration-300 ease-in-out
                ${pending
                    ? 'bg-blue-400 cursor-not-allowed opacity-70'
                    : 'bg-blue-600 hover:bg-blue-500'
                }
                text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300`}
        >
            {pending ? "Cargando..." : title}
        </button>
    );
}

export default Button;

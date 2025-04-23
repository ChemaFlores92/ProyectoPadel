'use client'

import Button from '@/components/button-form';
import { useState } from 'react';
import { login } from '@/lib/actions';

function LoginForm() {
    const [resultado, setResultado] = useState("");
    const [tipo, setTipo] = useState("");

    async function wrapper(data) {
        const message = await login(data);
        if (message?.success) {
            setTipo('success');
            setResultado(message.success);
        }
        if (message?.error) {
            setTipo('error');
            setResultado(message.error);
        }
    }

    return (
        <form action={wrapper} className="credentials">
            <div className="mb-12 space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="usuario@mail.com"
                        className="w-full border-b-2 border-blue-600 bg-transparent py-2 focus:outline-none focus:border-blue-400 transition duration-300 placeholder-gray-400"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Contraseña
                    </label>
                    <div className="relative flex items-center">
                        <input
                            type="password"
                            name="password"
                            placeholder="••••••"
                            className="w-full border-b-2 border-blue-600 bg-transparent py-2 focus:outline-none focus:border-blue-400 transition duration-300 placeholder-gray-400"
                        />
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 cursor-pointer">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M..." fill="#71717A" />
                            </svg>
                        </div>
                    </div>
                </div>

                {resultado && (
                    <p className={`text-sm mt-2 ${tipo === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                        {resultado}
                    </p>
                )}
            </div>

            <div>
                <Button title="Iniciar sesión" />
            </div>
        </form>
    );
}

export default LoginForm;

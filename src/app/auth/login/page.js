import LoginForm from '@/components/login-form'
import OAuthForm from '@/components/oauth-form'
import ImgFondo from '@/components/ImgFondo';

const errors = new Map();
errors.set('OAuthSignin', "Error al construir una URL de autorización.");
errors.set('OAuthCallback', "Error al manejar la respuesta de un proveedor de OAuth.");
errors.set('OAuthCreateAccount', "No se pudo crear un usuario proveedor de OAuth en la base de datos.");
errors.set('EmailCreateAccount', "No se pudo crear un usuario de proveedor de correo electrónico en la base de datos.");
errors.set('Callback', "Error en la ruta del controlador de devolución de llamada de OAuth.");
errors.set('OAuthAccountNotLinked', "Este email ya está registrado con otro proveedor.");
errors.set('EmailSignin', "Comprueba tu dirección de correo electrónico.");
errors.set('CredentialsSignin', "Fallo al iniciar sesión. Verifique que los datos que proporcionó sean correctos.");
errors.set('SessionRequired', "Error al iniciar sesión. Verifique que los detalles que proporcionó sean correctos.");
errors.set('Default', "No se puede iniciar sesión.");

function page({ searchParams }) {
  const { error, callbackUrl } = searchParams;
  globalThis.callbackUrl = decodeURIComponent(callbackUrl ?? '%2Fdashboard');

  return (
    <>
      <ImgFondo />
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-8 space-y-6">
          <div className="flex flex-col items-center">
            <img src="/logo.png" alt="Logo" className="w-32 h-auto mb-4" />
            <h1 className="text-3xl font-bold text-blue-700 uppercase tracking-wider">Login</h1>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 text-sm rounded-md px-4 py-3">
              {errors.get(error) || errors.get('Default')}
            </div>
          )}

          <OAuthForm error={error} />
          <LoginForm error={error} />
        </div>
      </div>
    </>
  );
}

export default page;

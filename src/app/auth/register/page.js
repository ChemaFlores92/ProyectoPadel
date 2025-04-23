import RegisterForm from '@/components/register-form'
import Atras from '@/components/BtnBackRegistro'
import ImgFondo from '@/components/ImgFondo';

function page() {
  return (
    <>
      <ImgFondo />
      <div className="min-h-screen flex items-center justify-center px-4 py-6">
        <div className="w-full max-w-2xl bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-8 max-h-[90vh] overflow-y-auto">
          <div className="flex items-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256" className="mr-3">
              <g fill="#1e3a8a">
                <path d="M168 100a60 60 0 1 1-60-60a60 60 0 0 1 60 60" opacity=".2" />
                <path d="M256 136a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8m-57.87 58.85a8 8 0 0 1-12.26 10.3C165.75 181.19 138.09 168 108 168s-57.75 13.19-77.87 37.15a8 8 0 0 1-12.25-10.3c14.94-17.78 33.52-30.41 54.17-37.17a68 68 0 1 1 71.9 0c20.65 6.76 39.23 19.39 54.18 37.17M108 152a52 52 0 1 0-52-52a52.06 52.06 0 0 0 52 52" />
              </g>
            </svg>
            <h1 className="text-3xl font-bold text-blue-900 uppercase tracking-wide">Nuevo Registro</h1>
          </div>

          <hr className="border-t border-blue-300 mb-6" />

          <RegisterForm />

          <div className="mt-6">
            <Atras />
          </div>
        </div>
      </div>
    </>
  )
}

export default page;

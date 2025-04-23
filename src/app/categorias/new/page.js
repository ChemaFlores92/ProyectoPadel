import FormCategoria from "@/components/categoria/FormCategoria"
import Button from "@/components/Button"
import { newCategoria } from "@/lib/actions"
import Atras from '@/components/categoria/BtnAtrasCategoria'
import ImgFondo from "@/components/ImgFondo"

export const dynamic = 'force-dynamic'

function page() {
  return (
    <>
      <ImgFondo />
      <div className="container mx-auto p-6 max-w-2xl bg-white/90 backdrop-blur-md rounded-xl shadow-lg">
        <h3 className="bg-blue-600 text-white text-2xl font-bold p-3 rounded-md mb-6">Nueva Categoría:</h3>
        <FormCategoria action={newCategoria} categoria={null}>
          <br />
          <Button title='Crear categoria' />
        </FormCategoria>
        <div className="mt-6">
          <Atras />
        </div>
      </div>
    </>
  )
}

export default page
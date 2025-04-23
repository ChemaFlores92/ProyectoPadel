import FormEntrenamiento from "@/components/entrenamiento/FormEntrenamiento"
import Button from "@/components/Button"
import { newEntrenamiento } from "@/lib/actions"
import Atras from '@/components/entrenamiento/btnBackEntrenos'
import ImgFondo from "@/components/ImgFondo"

export const dynamic = 'force-dynamic'

function page() {
  return (
    <>
      <ImgFondo />
      <div className="container mx-auto p-6 max-w-2xl bg-white/90 backdrop-blur-md rounded-xl shadow-lg">
        <h3 className="bg-blue-600 text-white text-2xl font-bold p-3 rounded-md mb-6">Nuevo Entrenamiento:</h3>
        <FormEntrenamiento action={newEntrenamiento} entrenamiento={null}>
          <br />
          <Button title='Anotar Entreno' />
        </FormEntrenamiento>
        <div className="mt-6">
          <Atras />
        </div>
      </div>
    </>
  )
}

export default page
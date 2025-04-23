import FormularioJugador from "@/components/jugador/FormJugador"
import Button from "@/components/Button"
import { newJugador } from "@/lib/actions"
import AtrasJugadores from '@/components/jugador/buttonBackJugadores'
import ImgFondo from "@/components/ImgFondo"

export const dynamic = 'force-dynamic'

function page() {
  return (
    <>
<ImgFondo />
      <div className="container mx-auto p-6 max-w-2xl bg-white/90 backdrop-blur-md rounded-xl shadow-lg">
        <h3 className="bg-blue-600 text-white text-2xl font-bold p-3 rounded-md mb-6">Nuevo Jugador:</h3>
        <FormularioJugador action={newJugador} jugador={null}>
          <br />
          <Button title='Crear jugador' />
        </FormularioJugador>
        <div className="mt-6">
          <AtrasJugadores />
        </div>
      </div>
    </>
  )
}

export default page
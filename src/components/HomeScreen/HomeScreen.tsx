import QueryFn from '@/utils/queryFn'
import { useQuery } from '@tanstack/react-query'
import { FaSpotify } from 'react-icons/fa'
import { PiHouseLight } from 'react-icons/pi'

export function HomeScreen() {
  const { data } = useQuery({ queryKey: ['top/track'], queryFn: QueryFn })

  console.log(data)

  return (
    <div className="bg-black pl-3  py-2 text-white">
      <div className="flex items-center px-4 justify-between">
        <div className="flex items-center gap-6">
          <FaSpotify size={32} />
          <div className="flex items-center">
            <div className="rounded-full bg-[#1f1f1f] p-2">
              <PiHouseLight size={32} />
            </div>
            <div className="flex items-center">
              <div>icon</div>
              <input placeholder="O que voce quer ouvir?" />
              <div>icon</div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ul className="flex gap-2 font-bold">
            <li>Premium</li>
            <li>Suporte</li>
            <ul>Baixar</ul>
          </ul>
          <button className="rounded-full bg-white px-8 py-3 font-bold text-black" type="button">
            Entrar
          </button>
        </div>
      </div>
    </div>
  )
}

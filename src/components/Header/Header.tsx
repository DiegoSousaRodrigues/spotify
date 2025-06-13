import { CiSearch } from 'react-icons/ci'
import { FaSpotify } from 'react-icons/fa'
import { MdOutlineArchive } from 'react-icons/md'
import { PiHouseLight } from 'react-icons/pi'
import { Header, Wrapper } from './Header.styles'

export function HeaderComponent() {
  return (
    <Wrapper>
      <Header>
        <div className="grid w-full grid-cols-3 items-center gap-6">
          <FaSpotify size={32} />
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-[#1f1f1f] p-2">
              <PiHouseLight size={28} />
            </div>
            <div className="flex items-center gap-3 rounded-full bg-[#1f1f1f] px-3 py-2">
              <div className="flex w-[400px] items-center gap-2 border-r">
                <div>
                  <CiSearch size={28} />
                </div>
                <input placeholder="O que você quer ouvir?" />
              </div>
              <button type="button" className="cursor-pointer">
                <MdOutlineArchive size={28} />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-end gap-4">
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
      </Header>
    </Wrapper>
  )
}

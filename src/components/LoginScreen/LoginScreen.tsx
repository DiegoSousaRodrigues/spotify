import { Wrapper } from './LoginScreen.styles'

export function LoginScreen() {
  return (
    <Wrapper>
      <div className="h-fit bg-[#121212] px-[100px] py-[60px]">
        <label className="flex gap-1 flex-col rounded-lg">
          <span className="text-white font-semibold ">
            E-mail ou nome de usuario
          </span>
          <input
            type="text"
            className="border rounded-sm border-white text-white p-2"
          />
        </label>

        <label className="flex gap-1 flex-col bg-[#121212] px-[100px] py-[60px] rounded-lg">
          <span className="text-white font-semibold ">Senha</span>
          <input
            type="text"
            className="border rounded-sm border-white text-white p-2"
          />
        </label>
      </div>
    </Wrapper>
  )
}

import {
  Header,
  Title,
  Wrapper,
  WrapperConnectExternal,
} from './LoginScreen.styles'
import { FaApple, FaFacebook, FaSpotify } from 'react-icons/fa'
import ConnectExternal from '../ConnectExternal'
import { FcGoogle } from 'react-icons/fc'
import Input from '../Input'
import { Controller, useForm } from 'react-hook-form'
import { AuthenticationForm } from './LoginScreen.types'
import axios from 'axios'

const connectExternalMock = [
  { name: 'Continuar com Google', icon: <FcGoogle size={24} /> },
  {
    name: 'Continuar com Facebook',
    icon: <FaFacebook size={24} className="fill-blue-600" />,
  },
  {
    name: 'Continuar com Apple',
    icon: <FaApple size={24} className="fill-white" />,
  },
  { name: 'Continuar com um número de telefone' },
]

export function LoginScreen() {
  const { handleSubmit, control } = useForm<AuthenticationForm>()

  async function onSubmit(data: AuthenticationForm) {
    await axios.post('/api/token', data)
  }

  return (
    <Wrapper>
      <Header>
        <FaSpotify size={24} />
        <Title>Entrar no Spotify</Title>
      </Header>
      <WrapperConnectExternal>
        {connectExternalMock.map((item) => (
          <ConnectExternal {...item} key={item.name} />
        ))}
      </WrapperConnectExternal>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Controller
          control={control}
          name="clientId"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Client Id"
              onChange={onChange}
              value={value}
              placeholder="Client Id"
            />
          )}
        />

        <Controller
          control={control}
          name="clientSecret"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Client Secret"
              onChange={onChange}
              value={value}
              placeholder="Client Secret"
            />
          )}
        />

        <button
          type="submit"
          className="w-full bg-green-500 rounded-[28px] py-3 text-black font-bold text-lg"
        >
          Entrar
        </button>
      </form>
    </Wrapper>
  )
}

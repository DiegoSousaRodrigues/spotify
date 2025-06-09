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

  function onSubmit(data: AuthenticationForm) {
    console.log('Form submitted:', data)
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="clientId"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Input label="Client Id:" onChange={onChange} value={value} />
          )}
        />

        <Controller
          control={control}
          name="clientSecret"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Input label="Client Secret:" onChange={onChange} value={value} />
          )}
        />
      </form>
    </Wrapper>
  )
}

import QueryFn from '@/utils/queryFn'
import { useQuery } from '@tanstack/react-query'

export function HomeScreen() {
  const { data } = useQuery({ queryKey: ['top/track'], queryFn: QueryFn })

  console.log(data)

  return <div></div>
}

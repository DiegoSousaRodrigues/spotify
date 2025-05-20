import axios from 'axios'

export default async function QueryFn<T>({
  queryKey,
}: {
  queryKey: string[]
}): Promise<T> {
  const data = await axios.get(`api/${queryKey}`)
  return data.data
}

/*
 * The queryFn in React Query receives a single parameter: a QueryFunctionContext object.
 * This object contains:
 * - queryKey: The key for the query (array or string)
 * - pageParam: Used for paginated queries (optional)
 * - signal: An AbortSignal for cancellation (optional)
 * - meta: Any meta information passed to the query (optional)
 *
 * Example:
 * const queryFn = async ({ queryKey, pageParam, signal, meta }) => { ... }
 */

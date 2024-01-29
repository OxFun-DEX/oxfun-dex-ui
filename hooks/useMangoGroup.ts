import { Group } from '@ox-fun/rb-mango-v4'
import mangoStore from '@store/mangoStore'

export default function useMangoGroup(): {
  group: Group | undefined
} {
  const group = mangoStore((s) => s.group)

  return { group }
}

import PackRepository from '@/modules/packs/domain/PackRepository'
import Pack from '@/modules/packs/domain/Pack'

export const getPacksByType = (packRepository: PackRepository): ((type: string, currentPage: number, elementsByPage: number) => Promise<Pack[]>) => {
  return async (type: string, currentPage: number, elementsByPage: number): Promise<Pack[]> => {
    const packs = await packRepository.getByType(type, currentPage, elementsByPage) as Pack[]
    return packs
  }
}

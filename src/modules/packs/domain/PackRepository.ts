import Pack from './Pack'
import PackDetails from './PackDetails'

interface PackRepository {
  getById(packId: string): Promise<Pack | null>;
  getAll(): Promise<Pack[]>;
  getByType(type: string, currentPage: number, elementsByPage: number): Promise<Pack[]>;
  create(packData: PackDetails): Promise<Pack>;
  update(packId: string, updatedData: Partial<Pack>): Promise<Pack | null>;
  delete(packId: string): Promise<boolean>;
}

export default PackRepository

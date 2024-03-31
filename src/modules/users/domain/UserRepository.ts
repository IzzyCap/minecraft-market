import User from './User'

interface UserRepository {
  getById(userId: string): Promise<User | null>;
  exist(username: string, email: string): Promise<boolean | null>;
  create(username: string, email: string, password: string): Promise<User>;
  authenticate(email: string, password: string): Promise<User | null>;
}

export default UserRepository

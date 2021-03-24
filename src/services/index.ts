import { AuthRepository } from './repositories/auth'
import { ExampleRepository } from './repositories/example'

type RepositoryName = 'auth' | 'example'

export default function getRepository(name: RepositoryName): AuthRepository | ExampleRepository {
  switch (name) {
    case 'auth':
      return new AuthRepository()
    case 'example':
      return new ExampleRepository()
    default:
      return new AuthRepository()
  }
}

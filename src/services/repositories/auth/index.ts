import { BaseRepository } from '@/services/base'

export class AuthRepository extends BaseRepository {
  constructor() {
    super('login')
  }
}

import { ExampleInterface } from './index.d'
import { DefaultRespository } from '@/services/base'

export class ExampleRepository extends DefaultRespository<ExampleInterface> {
  constructor() {
    super('example')
  }
}

export interface BaseRepositoryInterface {
  prefix: string
}

export interface DefaultRespositoryInterface<T> extends BaseRepositoryInterface {
  all(payload?: Record<string, any>): Promise<Array<Record<string, T>>>
  findById(id: string | number): Promise<T>
  create(payload?: Record<string, any>): Promise<any>
  update(id: string | number, payload?: Record<string, any>): Promise<any>
  delete(id: string | number): Promise<any>
}

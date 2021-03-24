import { BaseRepositoryInterface, DefaultRespositoryInterface } from './index.d'
import request from '@/plugins/request'

export abstract class BaseRepository implements BaseRepositoryInterface {
  prefix: string

  constructor(prefix: string) {
    this.prefix = prefix
  }
}

export abstract class DefaultRespository<T> implements DefaultRespositoryInterface<T> {
  prefix: string

  constructor(prefix: string) {
    this.prefix = prefix
  }

  async all(payload: Record<string, any>): Promise<Array<Record<string, T>>> {
    try {
      const result = await request.get(`${this.prefix}`, {
        params: payload
      })
      return Promise.resolve(result.data.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async findById(id: string | number): Promise<T> {
    try {
      const result = await request.get(`${this.prefix}/${id}`)
      return Promise.resolve(result.data.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async create(payload?: Record<string, any>): Promise<any> {
    try {
      const result = await request.post(`${this.prefix}`, payload)
      return Promise.resolve(result.data.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async update(id: string | number, payload?: Record<string, any>): Promise<any> {
    try {
      const result = await request.put(`${this.prefix}/${id}`, payload)
      return Promise.resolve(result.data.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async delete(id: string | number): Promise<any> {
    try {
      await request.delete(`${this.prefix}/${id}`)
      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

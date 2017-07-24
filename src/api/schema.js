import { schema } from 'normalizr'

export const user = new schema.Entity('users', {}, { idAttribute: 'address' })
export const wallet = new schema.Entity('wallets', {}, { idAttribute: 'address' })

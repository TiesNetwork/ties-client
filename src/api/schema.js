import { schema } from 'normalizr'

export const transaction =  new schema.Entity('transactions', {}, { idAttribute: 'tx' });
export const invoice = new schema.Entity('invoices', { transaction: transaction });

export const project = new schema.Entity('projects');
export const transfer = new schema.Entity('transfers', {}, { idAttribute: 'tx' });
export const user = new schema.Entity('users', {}, { idAttribute: 'address' });
export const wallet = new schema.Entity('wallets', {}, { idAttribute: 'address' });

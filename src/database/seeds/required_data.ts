import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('roles').del();

    // Inserts seed entries
    await knex('roles').insert([{ role_name: 'user' }, { role_name: 'admin' }]);
}

import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex.schema.raw('DROP SCHEMA public CASCADE');

    await knex.schema.raw('CREATE SCHEMA IF NOT EXISTS public');
}

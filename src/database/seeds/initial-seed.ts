import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('test_setup').del();

    // Inserts seed entries
    await knex('test_setup').insert([
        { id: 1, testCol: 'rowValue1' },
        { id: 2, testCol: 'rowValue2' },
        { id: 3, testCol: 'rowValue3' },
    ]);
}

import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('test_setup', (table: Knex.TableBuilder) => {
        table.integer('id');
        table.string('testCol');
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('test_setup');
}

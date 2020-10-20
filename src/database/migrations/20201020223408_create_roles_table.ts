import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('roles', (table: Knex.TableBuilder) => {
        table.increments('role_id');
        table.string('role_name').unique('unique_role_name_index').notNullable();
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('roles');
}

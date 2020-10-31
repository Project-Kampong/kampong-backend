import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.transaction(async (tx) => {
        await tx.schema.createTable('users', (table: Knex.TableBuilder) => {
            table.uuid('user_id').primary();
            table.string('first_name').notNullable();
            table.string('last_name');
            table.string('email').unique('unique_user_email_index').notNullable();
            table.string('password').notNullable();
            table.enu('role', ['admin', 'user']).notNullable().defaultTo('user');
            table.boolean('is_activated').notNullable().defaultTo(false);
        });
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
}

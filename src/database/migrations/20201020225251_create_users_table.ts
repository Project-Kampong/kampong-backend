import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', (table: Knex.TableBuilder) => {
        table.increments('user_id');
        table.string('first_name').notNullable();
        table.string('last_name');
        table.string('email').unique('unique_user_email_index').notNullable();
        table.string('password').notNullable();
        table.string('role').references('role_name').inTable('roles').notNullable().defaultTo('user');
        table.boolean('is_activated').notNullable().defaultTo(false);
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
}

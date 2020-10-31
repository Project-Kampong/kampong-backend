import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.transaction(async (tx: Knex.Transaction) => {
        await tx.schema.createTable('users', (table: Knex.TableBuilder) => {
            table.uuid('user_id').primary();
            table.string('first_name').notNullable();
            table.string('last_name');
            table.string('email').unique('unique_user_email_index').notNullable();
            table.string('password').notNullable();
            table.enu('role', ['admin', 'user'], { useNative: true, enumName: 'user_roles' }).notNullable().defaultTo('user');
            table.boolean('is_activated').notNullable().defaultTo(false);
        });

        await tx.schema.createTable('pendingusers', (table: Knex.TableBuilder) => {
            table.increments('pending_user_id').primary();
            table.uuid('user_id').unique().notNullable().references('user_id').inTable('users').onDelete('CASCADE');
            table.string('token').unique().notNullable();
        });

        await tx.schema.createTable('forgetpasswordusers', (table: Knex.TableBuilder) => {
            table.increments('forget_password_user_id').primary();
            table.string('email', 320).unique().notNullable();
            table.string('token').unique().notNullable();
            table.timestamp('expiry').notNullable().defaultTo(knex.fn.now());
        });

        await tx.schema.createTable('profiles', (table: Knex.TableBuilder) => {
            table.uuid('user_id').primary().references('user_id').inTable('users').onDelete('CASCADE');
            table.string('nickname').notNullable();
            table.string('profile_picture');
            table.text('about');
            table.enu('gender', ['m', 'f', 'o', 'u'], { useNative: true, enumName: 'gender_enum' }).defaultTo('u');
        });

        await tx.schema.createTable('skills', (table: Knex.TableBuilder) => {});

        await tx.schema.createTable('profileskills', (table: Knex.TableBuilder) => {});

        await tx.schema.createTable('memberships', (table: Knex.TableBuilder) => {});

        await tx.schema.createTable('listings', (table: Knex.TableBuilder) => {});

        await tx.schema.createTable('listingstories', (table: Knex.TableBuilder) => {});

        await tx.schema.createTable('featuredlistings', (table: Knex.TableBuilder) => {});

        await tx.schema.createTable('hashtags', (table: Knex.TableBuilder) => {});

        await tx.schema.createTable('listingskills', (table: Knex.TableBuilder) => {});

        await tx.schema.createTable('jobs', (table: Knex.TableBuilder) => {});

        await tx.schema.createTable('faqs', (table: Knex.TableBuilder) => {});

        await tx.schema.createTable('likes', (table: Knex.TableBuilder) => {});

        await tx.schema.createTable('listingadmins', (table: Knex.TableBuilder) => {});

        await tx.schema.createTable('participants', (table: Knex.TableBuilder) => {});

        await tx.schema.createTable('subscriptions', (table: Knex.TableBuilder) => {});

        await tx.schema.createTable('milestones', (table: Knex.TableBuilder) => {});

        await tx.schema.createTable('listingupdates', (table: Knex.TableBuilder) => {});

        await tx.schema.createTable('listingcomments', (table: Knex.TableBuilder) => {});

        await tx.schema.createTable('locations', (table: Knex.TableBuilder) => {});

        await tx.schema.createTable('listinglocations', (table: Knex.TableBuilder) => {});
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.transaction(async (tx: Knex.Transaction) => {
        await tx.schema.dropTableIfExists('listinglocations');
        await tx.schema.dropTableIfExists('locations');
        await tx.schema.dropTableIfExists('listingcomments');
        await tx.schema.dropTableIfExists('listingupdates');
        await tx.schema.dropTableIfExists('milestones');
        await tx.schema.dropTableIfExists('subscriptions');
        await tx.schema.dropTableIfExists('participants');
        await tx.schema.dropTableIfExists('listingadmins');
        await tx.schema.dropTableIfExists('likes');
        await tx.schema.dropTableIfExists('faqs');
        await tx.schema.dropTableIfExists('jobs');
        await tx.schema.dropTableIfExists('listingskills');
        await tx.schema.dropTableIfExists('hashtags');
        await tx.schema.dropTableIfExists('featuredlistings');
        await tx.schema.dropTableIfExists('listingstories');
        await tx.schema.dropTableIfExists('listings');
        await tx.schema.dropTableIfExists('memberships');
        await tx.schema.dropTableIfExists('profileskills');
        await tx.schema.dropTableIfExists('skills');
        await tx.schema.dropTableIfExists('profiles');
        await tx.schema.raw('DROP TYPE IF EXISTS gender_enum');
        await tx.schema.dropTableIfExists('forgetpasswordusers');
        await tx.schema.dropTableIfExists('pendingusers');
        await tx.schema.dropTableIfExists('users');
        await tx.schema.raw('DROP TYPE IF EXISTS user_roles');
    });
}

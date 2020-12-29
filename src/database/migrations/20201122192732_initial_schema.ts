import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.transaction(async (tx: Knex.Transaction) => {
        await tx.schema.raw('CREATE EXTENSION IF NOT EXISTS pg_stat_statements');

        await tx.schema.createTable('loginuser', (table: Knex.TableBuilder) => {
            table.uuid('user_id').primary();
            table.string('first_name').notNullable();
            table.string('last_name');
            table.string('email').unique().notNullable();
            table.string('password').notNullable();
            table.enu('role', ['admin', 'user'], { useNative: true, enumName: 'user_role' }).notNullable().defaultTo('user');
            table.boolean('is_activated').notNullable().defaultTo(false);
        });

        await tx.schema.createTable('pendinguser', (table: Knex.TableBuilder) => {
            table.increments('pending_user_id').primary();
            table.uuid('user_id').unique().notNullable().references('user_id').inTable('loginuser').onDelete('CASCADE');
            table.string('token').unique().notNullable();
        });

        await tx.schema.createTable('forgetpassworduser', (table: Knex.TableBuilder) => {
            table.increments('forget_password_user_id').primary();
            table.string('email', 320).unique().notNullable().references('email').inTable('loginuser').onDelete('CASCADE');
            table.string('token').unique().notNullable();
            table.timestamp('expiry').notNullable().defaultTo(knex.fn.now());
        });

        await tx.schema.createTable('profile', (table: Knex.TableBuilder) => {
            table.uuid('user_id').primary().references('user_id').inTable('loginuser').onDelete('CASCADE');
            table.string('nickname').notNullable();
            table.string('profile_picture');
            table.text('about');
            table.string('gender');
            table.timestamp('dob');
            table.text('occupation');
            table.string('phone');
            table.string('facebook_link');
            table.string('twitter_link');
            table.string('instagram_link');
            table.string('linkedin_link');
            table.boolean('is_verified').notNullable().defaultTo(false);
            table.timestamp('created_on').notNullable().defaultTo(knex.fn.now());
        });

        await tx.schema.createTable('organisation', (table: Knex.TableBuilder) => {
            table.uuid('organisation_id').primary();
            table.string('name').notNullable();
            table.string('organisation_type');
            table.text('about');
            table.string('website_url');
            table.string('phone');
            table.string('email', 320);
            table.string('address');
            table.uuid('owned_by').references('user_id').inTable('loginuser').onDelete('SET NULL');
            table.specificType('locations', 'VARCHAR[]');
            table.text('story');
            table.string('facebook_link');
            table.string('twitter_link');
            table.string('instagram_link');
            table.string('banner_photo');
            table.string('profile_photo');
            table.specificType('additional_photos', 'VARCHAR[]');
            table.boolean('is_verified').notNullable().defaultTo(false);
            table.timestamp('created_on').notNullable().defaultTo(knex.fn.now());
            table.timestamp('deleted_on');
        });

        await tx.schema.createTable('membership', (table: Knex.TableBuilder) => {
            table.increments('membership_id').primary();
            table.uuid('organisation_id').notNullable().references('organisation_id').inTable('organisation').onDelete('CASCADE');
            table.uuid('user_id').notNullable().references('user_id').inTable('loginuser').onDelete('CASCADE');
            table.boolean('is_owner').notNullable().defaultTo(false);
            table.timestamp('joined_on').notNullable().defaultTo(knex.fn.now());
            table.unique(['organisation_id', 'user_id']);
        });

        await tx.schema.createTable('programme', (table: Knex.TableBuilder) => {
            table.increments('programme_id').primary();
            table.uuid('organisation_id').notNullable().references('organisation_id').inTable('organisation').onDelete('CASCADE');
            table.string('programme_title').notNullable();
            table.text('about');
            table.specificType('media_url', 'VARCHAR[]');
        });

        await tx.schema.createTable('category', (table: Knex.TableBuilder) => {
            table.increments('category_id').primary();
            table.string('category_name').unique().notNullable();
            table.string('category_group');
        });

        await tx.schema.createTable('listing', (table: Knex.TableBuilder) => {
            table.uuid('listing_id').primary();
            table.uuid('created_by').references('user_id').inTable('loginuser').onDelete('SET NULL');
            table.string('listing_title').notNullable();
            table.string('category').references('category_name').inTable('category').onDelete('SET NULL');
            table.text('about');
            table.string('tagline');
            table.text('mission');
            table.text('overview');
            table.text('problem');
            table.text('solution');
            table.text('outcome');
            table.string('listing_url');
            table.string('listing_email', 320);
            table.string('listing_status');
            table.specificType('pics', 'VARCHAR[]');
            table.boolean('is_published').notNullable().defaultTo(false);
            table.boolean('is_verified').notNullable().defaultTo(false);
            table.boolean('is_featured').notNullable().defaultTo(false);
            table.timestamp('start_date').notNullable().defaultTo(knex.fn.now());
            table.timestamp('end_date');
            table.timestamp('created_on').notNullable().defaultTo(knex.fn.now());
            table.timestamp('updated_on').notNullable().defaultTo(knex.fn.now());
            table.timestamp('deleted_on');
        });

        await tx.schema.createTable('listingorganisation', (table: Knex.TableBuilder) => {
            table.increments('listing_organisation_id').primary();
            table.uuid('listing_id').notNullable().references('listing_id').inTable('listing').onDelete('CASCADE');
            table.uuid('organisation_id').notNullable().references('organisation_id').inTable('organisation').onDelete('CASCADE');
            table.unique(['listing_id', 'organisation_id']);
        });

        await tx.schema.createTable('hashtag', (table: Knex.TableBuilder) => {
            table.increments('hashtag_id').primary();
            table.uuid('listing_id').notNullable().references('listing_id').inTable('listing').onDelete('CASCADE');
            table.string('tag').notNullable();
            table.unique(['listing_id', 'tag']);
        });

        await tx.schema.createTable('job', (table: Knex.TableBuilder) => {
            table.increments('job_id').primary();
            table.uuid('listing_id').notNullable().references('listing_id').inTable('listing').onDelete('CASCADE');
            table.string('job_title').notNullable();
            table.text('job_description');
            table.timestamp('deleted_on');
        });

        await tx.schema.createTable('faq', (table: Knex.TableBuilder) => {
            table.increments('faq_id').primary();
            table.uuid('listing_id').notNullable().references('listing_id').inTable('listing').onDelete('CASCADE');
            table.text('question').notNullable();
            table.text('answer');
        });

        await tx.schema.createTable('listinglike', (table: Knex.TableBuilder) => {
            table.increments('like_id').primary();
            table.uuid('user_id').notNullable().references('user_id').inTable('loginuser').onDelete('CASCADE');
            table.uuid('listing_id').notNullable().references('listing_id').inTable('listing').onDelete('CASCADE');
            table.unique(['user_id', 'listing_id']);
        });

        await tx.schema.createTable('organisationlike', (table: Knex.TableBuilder) => {
            table.increments('organisation_like_id').primary();
            table.uuid('user_id').notNullable().references('user_id').inTable('loginuser').onDelete('CASCADE');
            table.uuid('organisation_id').notNullable().references('organisation_id').inTable('organisation').onDelete('CASCADE');
            table.unique(['user_id', 'organisation_id']);
        });

        await tx.schema.createTable('listingadmin', (table: Knex.TableBuilder) => {
            table.increments('listing_admin_id').primary();
            table.uuid('user_id').notNullable().references('user_id').inTable('loginuser').onDelete('CASCADE');
            table.uuid('listing_id').notNullable().references('listing_id').inTable('listing').onDelete('CASCADE');
            table.unique(['user_id', 'listing_id']);
        });

        await tx.schema.createTable('participant', (table: Knex.TableBuilder) => {
            table.increments('participant_id').primary();
            table.uuid('user_id').notNullable().references('user_id').inTable('loginuser').onDelete('CASCADE');
            table.uuid('listing_id').notNullable().references('listing_id').inTable('listing').onDelete('CASCADE');
            table.timestamp('joined_on').notNullable().defaultTo(knex.fn.now());
            table.timestamp('end_on');
            table.unique(['user_id', 'listing_id']);
        });

        await tx.schema.createTable('milestone', (table: Knex.TableBuilder) => {
            table.increments('milestone_id').primary();
            table.uuid('listing_id').notNullable().references('listing_id').inTable('listing').onDelete('CASCADE');
            table.text('milestone_description');
            table.timestamp('date');
        });

        await tx.schema.createTable('listingupdate', (table: Knex.TableBuilder) => {
            table.increments('listing_update_id').primary();
            table.uuid('listing_id').notNullable().references('listing_id').inTable('listing').onDelete('CASCADE');
            table.text('listing_update_description');
            table.specificType('pics', 'VARCHAR[]');
            table.timestamp('created_on').notNullable().defaultTo(knex.fn.now());
            table.timestamp('updated_on').notNullable().defaultTo(knex.fn.now());
        });

        await tx.schema.createTable('listingcomment', (table: Knex.TableBuilder) => {
            table.increments('listing_comment_id').primary();
            table.uuid('user_id').notNullable().references('user_id').inTable('loginuser').onDelete('CASCADE');
            table.uuid('listing_id').notNullable().references('listing_id').inTable('listing').onDelete('CASCADE');
            table.text('comment');
            table.integer('reply_to_id').references('listing_comment_id').inTable('listingcomment').onDelete('SET NULL');
            table.timestamp('created_on').notNullable().defaultTo(knex.fn.now());
            table.timestamp('updated_on').notNullable().defaultTo(knex.fn.now());
        });

        await tx.schema.createTable('location', (table: Knex.TableBuilder) => {
            table.increments('location_id').primary();
            table.string('location_name').unique().notNullable();
            table.string('zone');
        });

        await tx.schema.createTable('listinglocation', (table: Knex.TableBuilder) => {
            table.increments('listing_location_id').primary();
            table.uuid('listing_id').notNullable().references('listing_id').inTable('listing').onDelete('CASCADE');
            table.integer('location_id').notNullable().references('location_id').inTable('location').onDelete('CASCADE');
            table.unique(['listing_id', 'location_id']);
        });

        await tx.schema.createTable('organisationannouncement', (table: Knex.TableBuilder) => {
            table.increments('announcement_id').primary();
            table.uuid('organisation_id').notNullable().references('organisation_id').inTable('organisation').onDelete('CASCADE');
            table.text('announcement').notNullable();
            table.timestamp('created_on').notNullable().defaultTo(knex.fn.now());
            table.timestamp('updated_on').notNullable().defaultTo(knex.fn.now());
            table.timestamp('deleted_on');
        });

        await tx.schema.createTable('organisationjob', (table: Knex.TableBuilder) => {
            table.increments('organisation_job_id').primary();
            table.uuid('organisation_id').notNullable().references('organisation_id').inTable('organisation').onDelete('CASCADE');
            table.string('organisation_job_title').notNullable();
            table.text('organisation_job_description');
        });
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.transaction(async (tx: Knex.Transaction) => {
        await tx.schema.dropTableIfExists('organisationjob');
        await tx.schema.dropTableIfExists('organisationannouncement');
        await tx.schema.dropTableIfExists('listinglocation');
        await tx.schema.dropTableIfExists('location');
        await tx.schema.dropTableIfExists('listingcomment');
        await tx.schema.dropTableIfExists('listingupdate');
        await tx.schema.dropTableIfExists('milestone');
        await tx.schema.dropTableIfExists('participant');
        await tx.schema.dropTableIfExists('listingadmin');
        await tx.schema.dropTableIfExists('organisationlike');
        await tx.schema.dropTableIfExists('listinglike');
        await tx.schema.dropTableIfExists('faq');
        await tx.schema.dropTableIfExists('job');
        await tx.schema.dropTableIfExists('hashtag');
        await tx.schema.dropTableIfExists('listingorganisation');
        await tx.schema.dropTableIfExists('listing');
        await tx.schema.dropTableIfExists('category');
        await tx.schema.dropTableIfExists('programme');
        await tx.schema.dropTableIfExists('membership');
        await tx.schema.dropTableIfExists('organisation');
        await tx.schema.dropTableIfExists('profile');
        await tx.schema.dropTableIfExists('forgetpassworduser');
        await tx.schema.dropTableIfExists('pendinguser');
        await tx.schema.dropTableIfExists('loginuser');
        await tx.schema.raw('DROP TYPE IF EXISTS user_role');
        await tx.schema.raw('DROP EXTENSION IF EXISTS pg_stat_statements');
    });
}

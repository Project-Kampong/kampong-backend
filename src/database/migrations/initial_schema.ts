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

        await tx.schema.createTable('skills', (table: Knex.TableBuilder) => {
            table.increments('skill_id').primary();
            table.string('skill').unique().notNullable();
            table.string('skill_group');
            table.string('skill_description');
        });

        await tx.schema.createTable('profileskills', (table: Knex.TableBuilder) => {
            table.increments('profile_skill_id').primary();
            table.uuid('user_id').notNullable().references('user_id').inTable('users');
            table.integer('skill_id').notNullable().references('skill_id').inTable('skills');
            table.unique(['user_id', 'skill_id']);
        });

        await tx.schema.createTable('organisations', (table: Knex.TableBuilder) => {
            table.increments('organisation_id').primary();
            table.string('name').notNullable();
            table.string('organisation_type');
            table.text('about');
            table.string('website_url');
            table.string('phone');
            table.string('email', 320);
            table.boolean('is_verified').notNullable().defaultTo(false);
            table.timestamp('created_on').notNullable().defaultTo(knex.fn.now());
            table.timestamp('deleted_on');
        });

        await tx.schema.createTable('memberships', (table: Knex.TableBuilder) => {
            table.increments('membership_id').primary();
            table.integer('organisation_id').notNullable().references('organisation_id').inTable('organisations').onDelete('CASCADE');
            table.uuid('user_id').notNullable().references('user_id').inTable('users').onDelete('CASCADE');
            table.boolean('is_owner').notNullable().defaultTo(false);
            table.timestamp('joined_on').notNullable().defaultTo(knex.fn.now());
            table.unique(['organisation_id', 'user_id']);
        });

        await tx.schema.createTable('listings', (table: Knex.TableBuilder) => {
            table.uuid('listing_id').primary();
            table.integer('organisation_id').references('organisation_id').inTable('organisations').onDelete('SET NULL');
            table.uuid('created_by').references('user_id').inTable('users').onDelete('SET NULL');
            table.string('title').notNullable();
            table.string('category').notNullable();
            table.text('about');
            table.string('tagline');
            table.text('mission');
            table.string('listing_url');
            table.string('listing_email', 320);
            table.string('listing_status');
            table.string('pic1');
            table.string('pic2');
            table.string('pic3');
            table.string('pic4');
            table.string('pic5');
            table.boolean('is_published').notNullable().defaultTo(false);
            table.boolean('is_verified').notNullable().defaultTo(false);
            table.timestamp('start_date').notNullable().defaultTo(knex.fn.now());
            table.timestamp('end_date');
            table.timestamp('created_on').notNullable().defaultTo(knex.fn.now());
            table.timestamp('deleted_on');
        });

        await tx.schema.createTable('listingstories', (table: Knex.TableBuilder) => {
            table.uuid('listing_id').primary().references('listing_id').inTable('listings').onDelete('CASCADE');
            table.text('overview');
            table.text('problem');
            table.text('solution');
            table.text('outcome');
        });

        await tx.schema.createTable('featuredlistings', (table: Knex.TableBuilder) => {
            table.increments('featured_listing_id').primary();
            table.uuid('listing_id').unique().notNullable().references('listing_id').inTable('listings');
        });

        await tx.schema.createTable('hashtags', (table: Knex.TableBuilder) => {
            table.increments('hashtag_id').primary();
            table.uuid('listing_id').notNullable().references('listing_id').inTable('listings').onDelete('CASCADE');
            table.string('tag').notNullable();
            table.unique(['listing_id', 'tag']);
        });

        await tx.schema.createTable('listingskills', (table: Knex.TableBuilder) => {
            table.increments('listing_skill_id').primary();
            table.uuid('listing_id').notNullable().references('listing_id').inTable('listings').onDelete('CASCADE');
            table.integer('skill_id').notNullable().references('skill_id').inTable('skills').onDelete('CASCADE');
            table.unique(['listing_id', 'skill_id']);
        });

        await tx.schema.createTable('jobs', (table: Knex.TableBuilder) => {
            table.increments('job_id').primary();
            table.uuid('listing_id').notNullable().references('listing_id').inTable('listings').onDelete('CASCADE');
            table.string('job_title').notNullable();
            table.text('job_description');
            table.timestamp('deleted_on');
        });

        await tx.schema.createTable('faqs', (table: Knex.TableBuilder) => {
            table.increments('faq_id').primary();
            table.uuid('listing_id').notNullable().references('listing_id').inTable('listings').onDelete('CASCADE');
            table.text('question').notNullable();
            table.text('answer');
        });

        await tx.schema.createTable('likes', (table: Knex.TableBuilder) => {
            table.increments('like_id').primary();
            table.uuid('user_id').notNullable().references('user_id').inTable('users').onDelete('CASCADE');
            table.uuid('listing_id').notNullable().references('listing_id').inTable('listings').onDelete('CASCADE');
            table.unique(['user_id', 'listing_id']);
        });

        await tx.schema.createTable('listingadmins', (table: Knex.TableBuilder) => {
            table.increments('listing_admin_id').primary();
            table.uuid('user_id').notNullable().references('user_id').inTable('users').onDelete('CASCADE');
            table.uuid('listing_id').notNullable().references('listing_id').inTable('listings').onDelete('CASCADE');
            table.unique(['user_id', 'listing_id']);
        });

        await tx.schema.createTable('participants', (table: Knex.TableBuilder) => {
            table.increments('participant_id').primary();
            table.uuid('user_id').notNullable().references('user_id').inTable('users').onDelete('CASCADE');
            table.uuid('listing_id').notNullable().references('listing_id').inTable('listings').onDelete('CASCADE');
            table.timestamp('joined_on').notNullable().defaultTo(knex.fn.now());
            table.timestamp('end_on');
            table.unique(['user_id', 'listing_id']);
        });

        await tx.schema.createTable('subscriptions', (table: Knex.TableBuilder) => {
            table.increments('subscription_id').primary();
            table.uuid('user_id').notNullable().references('user_id').inTable('users').onDelete('CASCADE');
            table.uuid('listing_id').notNullable().references('listing_id').inTable('listings').onDelete('CASCADE');
            table.unique(['user_id', 'listing_id']);
        });

        await tx.schema.createTable('milestones', (table: Knex.TableBuilder) => {
            table.increments('milestone_id').primary();
            table.uuid('listing_id').notNullable().references('listing_id').inTable('listings').onDelete('CASCADE');
            table.text('description');
            table.timestamp('date');
        });

        await tx.schema.createTable('listingupdates', (table: Knex.TableBuilder) => {
            table.increments('listing_update_id').primary();
            table.uuid('listing_id').notNullable().references('listing_id').inTable('listings').onDelete('CASCADE');
            table.text('description');
            table.string('pic1');
            table.string('pic2');
            table.string('pic3');
            table.string('pic4');
            table.string('pic5');
            table.timestamp('created_on').notNullable().defaultTo(knex.fn.now());
            table.timestamp('updated_on').notNullable().defaultTo(knex.fn.now());
        });

        await tx.schema.createTable('listingcomments', (table: Knex.TableBuilder) => {
            table.increments('listing_comment_id').primary();
            table.uuid('user_id').notNullable().references('user_id').inTable('users').onDelete('SET NULL');
            table.uuid('listing_id').notNullable().references('listing_id').inTable('listings').onDelete('SET NULL');
            table.text('comment');
            table.integer('reply_to_id').references('listing_comment_id').inTable('listingcomments').onDelete('SET NULL');
            table.timestamp('created_on').notNullable().defaultTo(knex.fn.now());
            table.timestamp('updated_on').notNullable().defaultTo(knex.fn.now());
            table.timestamp('deleted_on');
        });

        await tx.schema.createTable('locations', (table: Knex.TableBuilder) => {
            table.increments('location_id').primary();
            table.string('location').unique().notNullable();
        });

        await tx.schema.createTable('listinglocations', (table: Knex.TableBuilder) => {
            table.increments('listing_location_id').primary();
            table.uuid('listing_id').notNullable().references('listing_id').inTable('listings').onDelete('CASCADE');
            table.integer('location_id').notNullable().references('location_id').inTable('locations').onDelete('CASCADE');
            table.unique(['listing_id', 'location_id']);
        });
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
        await tx.schema.dropTableIfExists('organisations');
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

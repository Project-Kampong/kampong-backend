import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .raw(
            "CREATE OR REPLACE VIEW listingview AS WITH agg_listing_info AS(SELECT l.listing_id,COALESCE(f.faqs,'{}'::jsonb[])faqs,COALESCE(h.tags,'{}'::VARCHAR[])tags,COALESCE(j.jobs,'{}'::jsonb[])jobs,COALESCE(ll.user_likes,'{}'::uuid[])user_likes,COALESCE(lol.locations,'{}'::VARCHAR[])locations,COALESCE(lu.listing_updates,'{}'::jsonb[])listing_updates,COALESCE(ml.milestones,'{}'::jsonb[])milestones,COALESCE(p.participants,'{}'::uuid[])participants FROM listing l LEFT JOIN(SELECT listing_id,ARRAY_AGG(JSONB_BUILD_OBJECT('question',question,'answer',answer))faqs FROM faq GROUP BY listing_id)f ON l.listing_id=f.listing_id LEFT JOIN(SELECT listing_id,ARRAY_AGG(tag)tags FROM hashtag GROUP BY listing_id)h ON l.listing_id=h.listing_id LEFT JOIN(SELECT listing_id,ARRAY_AGG(JSONB_BUILD_OBJECT('job_title',job_title,'job_description',job_description))jobs FROM job GROUP BY listing_id)j ON l.listing_id=j.listing_id LEFT JOIN(SELECT listing_id,ARRAY_AGG(user_id)user_likes FROM listinglike GROUP BY listing_id)ll ON l.listing_id=ll.listing_id LEFT JOIN(SELECT listing_id,ARRAY_AGG(location_name)locations FROM listinglocation ll JOIN LOCATION lo ON ll.location_id=lo.location_id GROUP BY listing_id)lol ON l.listing_id=lol.listing_id LEFT JOIN(SELECT listing_id,ARRAY_AGG(JSONB_BUILD_OBJECT('description',description,'pics',pics,'created_on',created_on,'updated_on',updated_on))listing_updates FROM listingupdate GROUP BY listing_id)lu ON l.listing_id=lu.listing_id LEFT JOIN(SELECT listing_id,ARRAY_AGG(JSONB_BUILD_OBJECT('milestone_description',description,'date',date))milestones FROM milestone GROUP BY listing_id)ml ON l.listing_id=ml.listing_id LEFT JOIN(SELECT listing_id,ARRAY_AGG(user_id)participants FROM participant GROUP BY listing_id)p ON l.listing_id=p.listing_id)SELECT l.*,ali.faqs,ali.tags,ali.jobs,ali.user_likes,ali.locations,ali.listing_updates,ali.milestones,ali.participants,p.nickname,p.profile_picture,to_tsvector(l.title||' '||l.category||' '||array_to_string(ali.locations::text[],' '))AS keyword_vector FROM listing l LEFT JOIN agg_listing_info ali ON l.listing_id=ali.listing_id LEFT JOIN profile p ON l.created_by=p.user_id WHERE deleted_on IS NULL",
        )
        .raw('CREATE VIEW organisationview AS SELECT*FROM organisation WHERE deleted_on IS NULL')
        .raw(
            'CREATE VIEW listingcommentview AS SELECT lc.*,p.nickname,p.profile_picture FROM listingcomment lc LEFT JOIN profile p ON lc.user_id=p.user_id WHERE lc.deleted_on IS NULL',
        )
        .raw('CREATE VIEW featuredlistingview AS SELECT*FROM listingview WHERE is_featured=TRUE');
}

export async function down(knex: Knex): Promise<void> {
    return (
        knex.schema
            .raw('DROP VIEW IF EXISTS featuredlistingview CASCADE')
            .raw('DROP VIEW IF EXISTS listingview CASCADE')
            .raw('DROP VIEW IF EXISTS organisationview CASCADE')
            // TODO: deprecated, to be removed
            .raw('DROP VIEW IF EXISTS jobview CASCADE')
            .raw('DROP VIEW IF EXISTS listingcommentview CASCADE')
    );
}

import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .raw(
            "CREATE VIEW listingview AS WITH combinedlistinglocation AS(SELECT ls.listing_id,ARRAY_AGG(lo.location_name)AS locations,ARRAY_AGG(lo.location_id)AS location_ids FROM listing ls JOIN(listinglocation lsl JOIN location lo ON lsl.location_id=lo.location_id)ON ls.listing_id=lsl.listing_id GROUP BY ls.listing_id)SELECT l.*,p.nickname,p.profile_picture,cll.locations,cll.location_ids,to_tsvector(l.title||' '||l.category||' '||array_to_string(cll.locations::text[],' '))AS keyword_vector FROM listing l LEFT JOIN combinedlistinglocation cll ON l.listing_id=cll.listing_id LEFT JOIN profile p ON l.created_by=p.user_id WHERE deleted_on IS NULL",
        )
        .raw('CREATE VIEW organisationview AS SELECT*FROM organisation WHERE deleted_on IS NULL')
        .raw('CREATE VIEW jobview AS SELECT*FROM job WHERE deleted_on IS NULL')
        .raw(
            'CREATE VIEW listingcommentview AS SELECT lc.*,p.nickname,p.profile_picture FROM listingcomment lc LEFT JOIN profile p ON lc.user_id=p.user_id WHERE lc.deleted_on IS NULL',
        )
        .raw('CREATE VIEW featuredlistingview AS SELECT*FROM listingview WHERE is_featured=TRUE');
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema
        .raw('DROP VIEW IF EXISTS featuredlistingview CASCADE')
        .raw('DROP VIEW IF EXISTS listingview CASCADE')
        .raw('DROP VIEW IF EXISTS organisationview CASCADE')
        .raw('DROP VIEW IF EXISTS jobview CASCADE')
        .raw('DROP VIEW IF EXISTS listingcommentview CASCADE');
}

import { IDatabase, IMain } from 'pg-promise';
import { BaseRepository } from './base.repository';
import { Organisation, CreateOrganisationSchema, UpdateOrganisationSchema } from '../models';

export class OrganisationRepository extends BaseRepository {
    constructor(protected readonly db: IDatabase<any>, protected readonly pgp: IMain) {
        super(db, pgp);
    }

    // TODO: To fill in query
    getAllOrganisations(organisationId: string): Promise<Organisation[]> {
        return;
    }

    getOrganisationById(organisationId: string): Promise<Organisation> {
        return this.db.one('SELECT * FROM organisation WHERE organisation_id = $1', organisationId);
    }

    createOrganisation(createOrganisationData: CreateOrganisationSchema): Promise<Organisation> {
        return this.db.one('INSERT INTO organisation (${this:name}) VALUES (${this:csv}) RETURNING *', createOrganisationData);
    }

    updateOrganisationById(updateOrganisationData: UpdateOrganisationSchema, organisationId: string): Promise<Organisation> {
        const updateOrganisationQuery = this.pgp.helpers.update(updateOrganisationData, null, 'organisation') + this.pgp.as.format(' WHERE organisation_id = $1 RETURNING *', organisationId);
        return this.db.one(updateOrganisationQuery);
    }

    deleteOrganisationById(organisationId: string): Promise<Organisation> {
        return this.db.one('DELETE FROM organisation WHERE organisation_id = $1', organisationId);
    }
}

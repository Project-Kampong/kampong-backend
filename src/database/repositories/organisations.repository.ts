import { BaseRepository } from './base.repository';
import { Organisation, CreateOrganisationSchema, UpdateOrganisationSchema } from '../../models';

export class OrganisationsRepository extends BaseRepository {
    // TODO: To fill in query
    getAllOrganisations(): Promise<Organisation[]> {
        return this.db.manyOrNone('SELECT * FROM organisation');
    }

    getOrganisationById(organisationId: string): Promise<Organisation> {
        return this.db.one('SELECT * FROM organisation WHERE organisation_id = $1', organisationId);
    }

    createOrganisation(createOrganisationData: CreateOrganisationSchema): Promise<Organisation> {
        return this.db.one('INSERT INTO organisation (${this:name}) VALUES (${this:csv}) RETURNING *', createOrganisationData);
    }

    updateOrganisationById(updateOrganisationData: UpdateOrganisationSchema, organisationId: string): Promise<Organisation> {
        const updateOrganisationQuery =
            this.pgp.helpers.update(updateOrganisationData, null, 'organisation') +
            this.pgp.as.format(' WHERE organisation_id = $1 RETURNING *', organisationId);
        return this.db.one(updateOrganisationQuery);
    }

    deleteOrganisationById(organisationId: string): Promise<Organisation> {
        return this.db.one('DELETE FROM organisation WHERE organisation_id = $1', organisationId);
    }
}

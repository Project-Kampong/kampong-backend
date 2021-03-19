import { BaseRepository } from './base.repository';
import { Organisation, CreateOrganisationReqDto, UpdateOrganisationReqDto } from '../../models';

export class OrganisationsRepository extends BaseRepository {
    async getAllOrganisations(): Promise<Organisation[]> {
        return this.db.manyOrNone('SELECT * FROM organisation');
    }

    async getOrganisationById(organisationId: string): Promise<Organisation> {
        return this.db.one('SELECT * FROM organisation WHERE organisation_id = $1', organisationId);
    }

    async createOrganisation(createOrganisationData: CreateOrganisationReqDto): Promise<Organisation> {
        return this.db.one('INSERT INTO organisation (${this:name}) VALUES (${this:csv}) RETURNING *', createOrganisationData);
    }

    async updateOrganisationById(updateOrganisationData: UpdateOrganisationReqDto, organisationId: string): Promise<Organisation> {
        const updateOrganisationQuery =
            this.pgp.helpers.update(updateOrganisationData, null, 'organisation') +
            this.pgp.as.format(' WHERE organisation_id = $1 RETURNING *', organisationId);
        return this.db.one(updateOrganisationQuery);
    }

    async deleteOrganisationById(organisationId: string): Promise<Organisation> {
        return this.db.one('DELETE FROM organisation WHERE organisation_id = $1', organisationId);
    }
}

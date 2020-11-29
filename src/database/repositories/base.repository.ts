import { IDatabase, IMain } from 'pg-promise';

/**
 * @param db
 * Automated database connection context/interface.
 *
 * If you ever need to access other repositories from this one,
 * you will have to replace type 'IDatabase<any>' with 'any'.
 *
 * @param pgp
 * Library's root, if ever needed, like to access 'helpers'
 * or other namespaces available from the root.
 */
export abstract class BaseRepository {
    constructor(protected readonly db: IDatabase<any>, protected readonly pgp: IMain) {
        this.db = db;
        this.pgp = pgp;
    }
}

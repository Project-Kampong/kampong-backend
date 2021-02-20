import { BaseRepository } from './base.repository';
import { NewLikeSchema, Like, LikeInfo } from '../../models';

export class LikesRepository extends BaseRepository {
    async getAllLikesInfoForListing(listingId: string): Promise<LikeInfo[]> {
        return this.db.many(
            'SELECT like_id, ll.user_id, listing_id, nickname, profile_picture FROM listinglike ll LEFT JOIN profile p ON ll.user_id = p.user_id WHERE ll.listing_id = $1',
            listingId,
        );
    }

    async getAllLikesInfoForUser(userId: string): Promise<LikeInfo[]> {
        return this.db.many(
            'SELECT like_id, ll.user_id, listing_id, nickname, profile_picture FROM listinglike ll LEFT JOIN profile p ON ll.user_id = p.user_id WHERE ll.user_id = $1',
            userId,
        );
    }

    async getLikeById(likeId: string): Promise<Like> {
        return this.db.one('SELECT * FROM listinglike WHERE like_id = $1', likeId);
    }

    async createLike(createLikeData: NewLikeSchema): Promise<Like> {
        return this.db.one('INSERT INTO listinglike (${this:name}) VALUES (${this:csv}) RETURNING *', createLikeData);
    }

    async deleteLikeById(likeId: string): Promise<Like> {
        return this.db.one('DELETE FROM listinglike WHERE like_id = $1 RETURNING *', likeId);
    }
}

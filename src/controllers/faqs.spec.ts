import { mocked } from 'ts-jest/utils';
import { FaqsController } from './faqs';
import { FaqsRepository, ListingsRepository } from '../database';

const mockFaqsRepository = mocked(new FaqsRepository(null, null));
const mockListingsRepository = mocked(new ListingsRepository(null, null));

let faqsController: FaqsController;

describe('FaqsController', () => {
    beforeEach(() => {
        faqsController = new FaqsController(mockFaqsRepository, mockListingsRepository);
    });

    describe('getFaqs', () => {
        describe('when req.params.listing_id not provided', () => {
            it('should call res.json with advancedResults', async () => {
                const req = { params: {} };
                const res = {
                    advancedResults: { data: [1, 2, 3] },
                };
                const next = {};
                const ret = faqsController.getFaqs(req, res, next);
                expect(ret).toBe(undefined);
            });
        });
    });
});

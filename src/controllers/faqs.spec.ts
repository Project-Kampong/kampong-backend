import { mocked } from 'ts-jest/utils';
import { FaqsController } from './faqs';
import { FaqsRepository, ListingsRepository } from '../database';

const mockFaqsRepository = mocked(new FaqsRepository(null, null));
const mockListingsRepository = mocked(new ListingsRepository(null, null));

const mockResponse = () => {
    const res: { [key: string]: any } = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

let faqsController: FaqsController;

describe('FaqsController', () => {
    beforeEach(() => {
        faqsController = new FaqsController(mockFaqsRepository, mockListingsRepository);
    });

    describe('getFaqs', () => {
        describe('when req.params.listing_id is provided', () => {
            let req, res;
            beforeEach(() => {
                req = { params: { listing_id: 'a' } };
                res = mockResponse();
            });
            describe('when no errors', () => {
                const faqs = [{ faq_id: 1, listing_id: 'a', question: 'Why?', answer: 'Yes' }];
                jest.spyOn(mockListingsRepository, 'getListingById').mockResolvedValueOnce(null);
                jest.spyOn(mockFaqsRepository, 'getAllFaqsForListing').mockResolvedValueOnce(faqs);
                const expectedResponse = { success: true, data: faqs };

                it('should call res.json with success true and faqs from getAllFaqsForListing', async () => {
                    await faqsController.getFaqs(req, res);

                    expect(res.status).toHaveBeenCalledWith(200);
                    expect(res.json).toHaveBeenCalledWith(expectedResponse);
                });
            });

            describe('when there are errors', () => {
                const mockError = new Error('mock error');
                jest.spyOn(mockListingsRepository, 'getListingById').mockRejectedValueOnce(mockError);

                it('should not call res.json and call next instead', () => {
                    expect(faqsController.getFaqs(req, res)).rejects;

                    expect(res.status).not.toBeCalled();
                    expect(res.json).not.toBeCalled();
                });
            });
        });

        describe('when req.params.listing_id is not provided', () => {
            let req, res;
            beforeEach(() => {
                req = { params: {} };
                res = { ...mockResponse(), advancedResults: [1, 2, 3] };
            });
            describe('when no errors', () => {
                it('should call res.json with the contents of res.advancedResults', async () => {
                    await faqsController.getFaqs(req, res);

                    expect(res.status).toHaveBeenCalledWith(200);
                    expect(res.json).toHaveBeenCalledWith(res.advancedResults);
                });
            });
        });
    });
});

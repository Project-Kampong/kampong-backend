import { mocked } from 'ts-jest/utils';
import { FaqsController } from './faqs';
import { FaqsRepository, ListingsRepository } from '../database';
import { ErrorResponse } from '../utils';

const mockFaqsRepository = mocked(new FaqsRepository(null, null));
const mockListingsRepository = mocked(new ListingsRepository(null, null));

const res = {
    // allows chained json method to be called
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
};

const next = jest.fn();

let faqsController: FaqsController;

describe('FaqsController', () => {
    beforeEach(() => {
        faqsController = new FaqsController(mockFaqsRepository, mockListingsRepository);
    });

    describe('#getFaqsForListing', () => {
        describe('when req.params.listing_id is provided', () => {
            let req;
            beforeEach(() => {
                req = { params: { listing_id: 'a' } };
            });
            describe('when no errors', () => {
                const faqs = [{ faq_id: 1, listing_id: 'a', question: 'Why?', answer: 'Yes' }];
                jest.spyOn(mockListingsRepository, 'getListingById').mockResolvedValueOnce(null);
                jest.spyOn(mockFaqsRepository, 'getAllFaqsForListing').mockResolvedValueOnce(faqs);
                const expectedResponse = { success: true, data: faqs };

                it('should call res.json with success true and faqs from getAllFaqsForListing', async () => {
                    await faqsController.getFaqsForListing(req, res, next);

                    expect(res.status).toHaveBeenCalledWith(200);
                    expect(res.json).toHaveBeenCalledWith(expectedResponse);
                });
            });

            describe('when there are errors', () => {
                const mockError = new Error('mock error');
                jest.spyOn(mockListingsRepository, 'getListingById').mockRejectedValueOnce(mockError);

                it('should not call res.json and call next instead', () => {
                    expect(faqsController.getFaqsForListing(req, res, next)).rejects;

                    expect(res.status).not.toBeCalled();
                    expect(res.json).not.toBeCalled();
                });
            });
        });

        describe('when req.params.listing_id is not provided', () => {
            let req;
            beforeEach(() => {
                req = { params: {} };
            });
            it('should call next with ErrorResponse 404', async () => {
                await faqsController.getFaqsForListing(req, res, next);

                expect(res.status).not.toHaveBeenCalled();
                expect(res.json).not.toHaveBeenCalled();
                expect(next).toHaveBeenCalledWith(new ErrorResponse('Invalid route', 404));
            });
        });
    });

    describe('#updateFaq', () => {
        describe('when faq does not exist', () => {
            const req = {
                params: { id: 123 },
            };
            jest.spyOn(mockFaqsRepository, 'getFaqById').mockRejectedValue(new Error());
            it('should not check listing owner, and not call res.json', async () => {
                expect(faqsController.updateFaq(req, res, next)).rejects;

                expect(res.status).not.toBeCalled();
                expect(res.json).not.toBeCalled();
            });
        });

        describe('when faq exists', () => {
            jest.spyOn(mockFaqsRepository, 'getFaqById').mockResolvedValueOnce({
                faq_id: 234,
                listing_id: 'abc',
                question: 'why?',
                answer: 'why not?',
            });
            describe('when not listing owner nor admin', () => {
                const req = {
                    params: { id: 123 },
                    user: { role: 'user' },
                };

                it('should not call res.json and call next with ErrorResponse 403', () => {});
            });
        });
    });
});

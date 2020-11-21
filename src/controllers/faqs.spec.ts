import { mocked } from 'ts-jest/utils';
import { FaqsController } from './faqs';
import { FaqsRepository, ListingsRepository } from '../database';

// Mock imported function checkListingOwner, and leave ErrorResponse unmocked
jest.mock('../utils', () => {
    return {
        ...jest.requireActual('../utils'),
        checkListingOwner: jest.fn(),
    };
});
import { checkListingOwner, ErrorResponse } from '../utils';
const mockedCheckListingOwner = mocked(checkListingOwner, true);

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
                jest.spyOn(mockListingsRepository, 'getListingById').mockRejectedValueOnce(new Error('listing not found'));

                it('should not call res.json and call next instead', () => {
                    expect(() => faqsController.getFaqsForListing(req, res, next)).rejects;

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
                const ret = await faqsController.getFaqsForListing(req, res, next);

                expect(res.status).not.toHaveBeenCalled();
                expect(res.json).not.toHaveBeenCalled();
                // 2 ways:
                expect(next).toHaveBeenCalledWith(new ErrorResponse('Invalid route', 404));
                // or
                expect(ret).toEqual(next(new ErrorResponse('Invalid route', 404)));
            });
        });
    });

    describe('#updateFaq', () => {
        describe('when faq does not exist', () => {
            const req = {
                params: { id: 123 },
            };
            const mockError = new Error('abc');
            jest.spyOn(mockFaqsRepository, 'getFaqById').mockRejectedValueOnce(mockError);
            it('should not check listing owner, and not call res.json', async () => {
                await expect(faqsController.updateFaq(req, res, next)).rejects.toThrow(mockError);

                expect(res.status).not.toBeCalled();
                expect(res.json).not.toBeCalled();
            });
        });

        describe('when faq exists', () => {
            beforeEach(() => {
                jest.spyOn(mockFaqsRepository, 'getFaqById').mockResolvedValueOnce({
                    faq_id: 234,
                    listing_id: 'abc',
                    question: 'why?',
                    answer: 'why not?',
                });
            });
            describe('when not listing owner nor admin', () => {
                const req = {
                    params: { id: 123 },
                    user: { user_id: 'a123', role: 'user' },
                };
                mockedCheckListingOwner.mockResolvedValueOnce(false);

                it('should not call res.json and call next with ErrorResponse 403', async () => {
                    await faqsController.updateFaq(req, res, next);

                    expect(res.status).not.toBeCalled();
                    expect(res.json).not.toBeCalled();
                    expect(next).toBeCalledWith(new ErrorResponse(`Not authorised to update FAQ for this listing`, 403));
                });
            });

            describe('when listing owner', () => {
                const req = {
                    params: { id: 123 },
                    user: { user_id: 'a123', role: 'user' },
                    body: { question: 'What?', answer: 'Yes' },
                };
                beforeEach(() => {
                    mockedCheckListingOwner.mockResolvedValueOnce(true);
                });
                describe('when failed to update faq by id', () => {
                    const mockError = new Error('failed to update');
                    jest.spyOn(mockFaqsRepository, 'updateFaqById').mockRejectedValueOnce(mockError);
                    it('should not call res.json', async () => {
                        await expect(faqsController.updateFaq(req, res, next)).rejects.toThrow(mockError);

                        expect(res.status).not.toBeCalled();
                        expect(res.json).not.toBeCalled();
                    });
                });

                describe('when successfully update faq by id', () => {
                    const updatedData = {
                        faq_id: 234,
                        listing_id: 'abc',
                        question: 'why yes?',
                        answer: 'why not?',
                    };
                    jest.spyOn(mockFaqsRepository, 'updateFaqById').mockResolvedValueOnce(updatedData);
                    it('should call res.json with the updated data', async () => {
                        await faqsController.updateFaq(req, res, next);

                        expect(res.status).toHaveBeenCalledWith(200);
                        expect(res.json).toBeCalledWith({ success: true, data: updatedData });
                    });
                });
            });
        });
    });
});

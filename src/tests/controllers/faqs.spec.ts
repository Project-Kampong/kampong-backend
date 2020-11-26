import { mocked } from 'ts-jest/utils';
import { FaqsController } from '../../controllers/faqs';
import { FaqsRepository, ListingsRepository } from '../../database';

// Mock imported function checkListingOwner, and leave ErrorResponse unmocked
jest.mock('../../utils', () => {
    return {
        ...jest.requireActual('../../utils'),
        checkListingOwner: jest.fn(),
    };
});
import { checkListingOwner, ErrorResponse } from '../../utils';
const mockedCheckListingOwner = mocked(checkListingOwner, true);

// Mock injected dependencies
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

    afterAll(() => {
        jest.resetAllMocks();
        jest.restoreAllMocks();
    });

    describe('#getFaqsForListing', () => {
        describe('when req.params.listing_id is provided', () => {
            let req;
            beforeEach(() => {
                req = { params: { listing_id: 'a' } };
            });

            describe('when no errors', () => {
                const faqs = [{ faq_id: 1, listing_id: 'a', question: 'Why?', answer: 'Yes' }];
                beforeEach(() => {
                    jest.spyOn(mockListingsRepository, 'getListingById').mockResolvedValueOnce(null);
                    jest.spyOn(mockFaqsRepository, 'getAllFaqsForListing').mockResolvedValueOnce(faqs);
                });

                it('should call res.json with success true and faqs from getAllFaqsForListing', async () => {
                    const expectedResponse = { success: true, data: faqs };
                    await faqsController.getFaqsForListing(req, res, next);

                    expect(res.status).toHaveBeenCalledWith(200);
                    expect(res.json).toHaveBeenCalledWith(expectedResponse);
                });
            });
            describe('when there are errors', () => {
                const mockError = new Error('listing not found');
                beforeEach(() => {
                    jest.spyOn(mockListingsRepository, 'getListingById').mockRejectedValueOnce(mockError);
                });

                it('should not call res.json and call next instead', async () => {
                    await expect(faqsController.getFaqsForListing(req, res, next)).rejects.toThrow(mockError);

                    expect(res.status).not.toBeCalled();
                    expect(res.json).not.toBeCalled();
                });
            });
        });
        describe('when req.params.listing_id is not provided', () => {
            it('should call next with ErrorResponse 404', async () => {
                const req = { params: {} };
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

    describe('#createFaq', () => {
        const req = {
            body: {
                listing_id: 'b234',
                question: 'Why',
                answer: 'Yeap',
            },
            user: {
                user_id: 'c345',
                role: 'user',
            },
        };
        describe('when not listing owner nor admin', () => {
            beforeEach(() => {
                mockedCheckListingOwner.mockResolvedValueOnce(false);
            });

            it('should not call res.json and call next with ErrorResponse 403', async () => {
                await faqsController.createFaq(req, res, next);
                expect(res.status).not.toBeCalled();
                expect(res.json).not.toBeCalled();
                expect(next).toBeCalledWith(new ErrorResponse(`Not authorised to create FAQs for this listing`, 403));
            });
        });
        describe('when listing owner', () => {
            beforeEach(() => {
                mockedCheckListingOwner.mockResolvedValueOnce(true);
            });

            describe('when error creating faq', () => {
                const mockError = new Error('error creating faq');

                beforeEach(() => {
                    jest.spyOn(mockFaqsRepository, 'createFaq').mockRejectedValueOnce(mockError);
                });

                it('should not call res.json', async () => {
                    await expect(faqsController.createFaq(req, res, next)).rejects.toThrow(mockError);
                    expect(res.status).not.toBeCalled();
                    expect(res.json).not.toBeCalled();
                });
            });

            describe('when no error creating faq', () => {
                const updatedFaq = { faq_id: 543, listing_id: 'f12', question: 'How?', answer: 'Now' };

                beforeEach(() => {
                    jest.spyOn(mockFaqsRepository, 'createFaq').mockResolvedValueOnce(updatedFaq);
                });

                it('should not call res.json', async () => {
                    const expectedResponse = { success: true, data: updatedFaq };
                    await expect(faqsController.createFaq(req, res, next)).resolves.toBeUndefined();
                    expect(res.status).toBeCalledWith(201);
                    expect(res.json).toBeCalledWith(expectedResponse);
                });
            });
        });
    });

    describe('#updateFaq', () => {
        describe('when faq does not exist', () => {
            const req = {
                params: { id: 123 },
            };
            const mockError = new Error('abc');

            beforeEach(() => {
                jest.spyOn(mockFaqsRepository, 'getFaqById').mockRejectedValueOnce(mockError);
            });

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

                beforeEach(() => {
                    mockedCheckListingOwner.mockResolvedValueOnce(false);
                });

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

                    beforeEach(() => {
                        jest.spyOn(mockFaqsRepository, 'updateFaqById').mockResolvedValueOnce(updatedData);
                    });

                    it('should call res.json with the updated data', async () => {
                        await faqsController.updateFaq(req, res, next);

                        expect(res.status).toHaveBeenCalledWith(200);
                        expect(res.json).toBeCalledWith({ success: true, data: updatedData });
                    });
                });
            });
        });
    });

    describe('#deleteFaq', () => {
        describe('when faq does not exist', () => {
            const req = {
                params: { id: 123 },
            };
            const mockError = new Error('abc');

            beforeEach(() => {
                jest.spyOn(mockFaqsRepository, 'getFaqById').mockRejectedValueOnce(mockError);
            });

            it('should not check listing owner, and not call res.json', async () => {
                await expect(faqsController.deleteFaq(req, res, next)).rejects.toThrow(mockError);

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

                beforeEach(() => {
                    mockedCheckListingOwner.mockResolvedValueOnce(false);
                });

                it('should not call res.json and call next with ErrorResponse 403', async () => {
                    await faqsController.deleteFaq(req, res, next);

                    expect(res.status).not.toBeCalled();
                    expect(res.json).not.toBeCalled();
                    expect(next).toBeCalledWith(new ErrorResponse(`Not authorised to delete FAQ for this listing`, 403));
                });
            });

            describe('when listing owner', () => {
                const req = {
                    params: { id: 123 },
                    user: { user_id: 'a123', role: 'user' },
                };

                beforeEach(() => {
                    mockedCheckListingOwner.mockResolvedValueOnce(true);
                });

                describe('when failed to delete faq by id', () => {
                    const mockError = new Error('failed to delete');
                    jest.spyOn(mockFaqsRepository, 'deleteFaqById').mockRejectedValueOnce(mockError);
                    it('should not call res.json', async () => {
                        await expect(faqsController.deleteFaq(req, res, next)).rejects.toThrow(mockError);

                        expect(res.status).not.toBeCalled();
                        expect(res.json).not.toBeCalled();
                    });
                });

                describe('when successfully delete faq by id', () => {
                    const deletedData = {
                        faq_id: 234,
                        listing_id: 'abc',
                        question: 'why yes?',
                        answer: 'why not?',
                    };

                    beforeEach(() => {
                        jest.spyOn(mockFaqsRepository, 'deleteFaqById').mockResolvedValueOnce(deletedData);
                    });

                    it('should call res.json with the deleted data', async () => {
                        await faqsController.deleteFaq(req, res, next);

                        expect(res.status).toHaveBeenCalledWith(200);
                        expect(res.json).toBeCalledWith({ success: true, data: deletedData });
                    });
                });
            });
        });
    });
});

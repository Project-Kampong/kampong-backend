import { mocked } from 'ts-jest/utils';
import { HashtagsController } from './hashtags';
import { HashtagsRepository, ListingsRepository } from '../database';

// Mock imported function checkListingOwner, and leave ErrorResponse unmocked
jest.mock('../utils', () => {
    return {
        ...jest.requireActual('../utils'),
        checkListingOwner: jest.fn(),
    };
});
import { checkListingOwner, modelValidator, ErrorResponse, ModelValidator } from '../utils';
const mockedCheckListingOwner = mocked(checkListingOwner, true);

// Mock injected dependencies
const mockHashtagsRepository = mocked(new HashtagsRepository(null, null));
const mockListingsRepository = mocked(new ListingsRepository(null, null));
const mockModelValidator = mocked(new ModelValidator());

// mock validateModel method for entire test
jest.spyOn(mockModelValidator, 'validateModel').mockResolvedValue();

const res = {
    // allows chained json method to be called
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
};

const next = jest.fn();

let hashtagsController: HashtagsController;

describe('HashtagsController', () => {
    beforeEach(() => {
        hashtagsController = new HashtagsController(mockHashtagsRepository, mockListingsRepository, mockModelValidator);
    });

    afterAll(() => {
        jest.resetAllMocks();
        jest.restoreAllMocks();
    });

    describe('#getHashtagsForListing', () => {
        describe('when req.params.listing_id is provided', () => {
            let req;
            beforeEach(() => {
                req = { params: { listing_id: 'a' } };
            });

            describe('when no errors', () => {
                const hashtags = [{ hashtag_id: 1, listing_id: 'a', tag: '#hello' }];
                beforeEach(() => {
                    jest.spyOn(mockListingsRepository, 'getListingById').mockResolvedValueOnce(null);
                    jest.spyOn(mockHashtagsRepository, 'getAllHashtagsForListing').mockResolvedValueOnce(hashtags);
                });

                it('should call res.json with success true and hashtags from getAllHashtagsForListing', async () => {
                    const expectedResponse = { success: true, data: hashtags };
                    await hashtagsController.getHashtagsForListing(req, res, next);

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
                    await expect(hashtagsController.getHashtagsForListing(req, res, next)).rejects.toThrow(mockError);

                    expect(res.status).not.toBeCalled();
                    expect(res.json).not.toBeCalled();
                });
            });
        });
        describe('when req.params.listing_id is not provided', () => {
            it('should call next with ErrorResponse 404', async () => {
                const req = { params: {} };
                const ret = await hashtagsController.getHashtagsForListing(req, res, next);

                expect(res.status).not.toHaveBeenCalled();
                expect(res.json).not.toHaveBeenCalled();
                // 2 ways:
                expect(next).toHaveBeenCalledWith(new ErrorResponse('Invalid route', 404));
                // or
                expect(ret).toEqual(next(new ErrorResponse('Invalid route', 404)));
            });
        });
    });

    describe('#createHashtag', () => {
        const req = {
            body: {
                listing_id: 'b234',
                tag: '#hi',
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
                await hashtagsController.createHashtag(req, res, next);
                expect(res.status).not.toBeCalled();
                expect(res.json).not.toBeCalled();
                expect(next).toBeCalledWith(new ErrorResponse(`Not authorised to create hashtags for this listing`, 403));
            });
        });
        describe('when listing owner', () => {
            beforeEach(() => {
                mockedCheckListingOwner.mockResolvedValueOnce(true);
            });

            describe('when error creating hashtag', () => {
                const mockError = new Error('error creating hashtag');

                beforeEach(() => {
                    jest.spyOn(mockHashtagsRepository, 'createHashtag').mockRejectedValueOnce(mockError);
                });

                it('should not call res.json', async () => {
                    await expect(hashtagsController.createHashtag(req, res, next)).rejects.toThrow(mockError);
                    expect(res.status).not.toBeCalled();
                    expect(res.json).not.toBeCalled();
                });
            });

            describe('when no error creating hashtag', () => {
                const updatedHashtag = { hashtag_id: 543, listing_id: 'f12', tag: '#onetogether' };

                beforeEach(() => {
                    jest.spyOn(mockHashtagsRepository, 'createHashtag').mockResolvedValueOnce(updatedHashtag);
                });

                it('should not call res.json', async () => {
                    const expectedResponse = { success: true, data: updatedHashtag };
                    await expect(hashtagsController.createHashtag(req, res, next)).resolves.toBeUndefined();
                    expect(res.status).toBeCalledWith(201);
                    expect(res.json).toBeCalledWith(expectedResponse);
                });
            });
        });
    });

    describe('#deleteHashtag', () => {
        describe('when hashtag does not exist', () => {
            const req = {
                params: { id: 123 },
            };
            const mockError = new Error('abc');

            beforeEach(() => {
                jest.spyOn(mockHashtagsRepository, 'getHashtagById').mockRejectedValueOnce(mockError);
            });

            it('should not check listing owner, and not call res.json', async () => {
                await expect(hashtagsController.deleteHashtag(req, res, next)).rejects.toThrow(mockError);

                expect(res.status).not.toBeCalled();
                expect(res.json).not.toBeCalled();
            });
        });

        describe('when hashtag exists', () => {
            beforeEach(() => {
                jest.spyOn(mockHashtagsRepository, 'getHashtagById').mockResolvedValueOnce({
                    hashtag_id: 234,
                    listing_id: 'abc',
                    tag: '#strong',
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
                    await hashtagsController.deleteHashtag(req, res, next);

                    expect(res.status).not.toBeCalled();
                    expect(res.json).not.toBeCalled();
                    expect(next).toBeCalledWith(new ErrorResponse(`Not authorised to delete hashtag for this listing`, 403));
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

                describe('when failed to delete hashtag by id', () => {
                    const mockError = new Error('failed to delete');
                    jest.spyOn(mockHashtagsRepository, 'deleteHashtagById').mockRejectedValueOnce(mockError);
                    it('should not call res.json', async () => {
                        await expect(hashtagsController.deleteHashtag(req, res, next)).rejects.toThrow(mockError);

                        expect(res.status).not.toBeCalled();
                        expect(res.json).not.toBeCalled();
                    });
                });

                describe('when successfully delete hashtag by id', () => {
                    const deletedData = {
                        hashtag_id: 234,
                        listing_id: 'abc',
                        tag: '#covid-19',
                    };

                    beforeEach(() => {
                        jest.spyOn(mockHashtagsRepository, 'deleteHashtagById').mockResolvedValueOnce(deletedData);
                    });

                    it('should call res.json with the deleted data', async () => {
                        await hashtagsController.deleteHashtag(req, res, next);

                        expect(res.status).toHaveBeenCalledWith(200);
                        expect(res.json).toBeCalledWith({ success: true, data: deletedData });
                    });
                });
            });
        });
    });
});

import { mockApiUrl } from '../../../testing-utils/mocks';
import { getCatFact } from '../classicPromises';
import fetchMock from "jest-fetch-mock";

describe('Classic Promises', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        fetchMock.resetMocks();
    });
    it('should resolve with the cat fact data when fetch is successful', async () => {
        fetchMock.mockResponseOnce(JSON.stringify({ fact: 'Some cat fact' }));

        const result = await getCatFact(mockApiUrl);
        await expect(fetch).toHaveBeenCalledWith(mockApiUrl);
        await expect(result).toEqual({ fact: 'Some cat fact' });
    });

    it('should reject with an error when fetch fails', async () => {
        fetchMock.mockRejectOnce(new Error("An error occurred!"));
        await expect(getCatFact(mockApiUrl)).rejects.toThrow('An error occurred!');
    });

    it('should reject with an HTTP error when response comes back not ok', async () => {
        fetchMock.mockResponseOnce('', { status: 500 });
        await expect(getCatFact(mockApiUrl)).rejects.toThrow('HTTP Error: 500');
    });
});

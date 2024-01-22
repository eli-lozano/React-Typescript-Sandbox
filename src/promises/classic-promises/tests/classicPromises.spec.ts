import { getCatFact } from '../classicPromises';
import fetchMock from "jest-fetch-mock";

const responseMockSuccess = {
    ok: true,
    json: jest.fn().mockResolvedValue({ fact: 'Some cat fact' }),
};

const responseMockNetworkFail = {
    ok: false,
    status: 404,
};

const responseMockJsonFail = {
    ok: false,
    json: jest.fn().mockResolvedValue(new Error('JSON Parsing error')),
};

const url = "/some/cat/url";

describe('classic promises', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        fetchMock.resetMocks();
    });
    it('should resolve with the cat fact data when fetch is successful', async () => {
        fetchMock.mockResponseOnce(JSON.stringify({ fact: 'Some cat fact' }));


        const result = await getCatFact(url);
        await expect(fetch).toHaveBeenCalledWith(url);
        await expect(result).toEqual({ fact: 'Some cat fact' });
    });

    it.todo('should reject with an error when fetch fails');

    it.todo('should reject with an error when JSON parsing fails');
});

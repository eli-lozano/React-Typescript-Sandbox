import { mockApiUrl } from "../../../testing-utils/mocks";
import { getUSPopulationData } from "../newPromises";

describe('async/await Promises', () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });
    it('should resolve with population data when fetch is successful', async () => {
        fetchMock.mockResponseOnce(JSON.stringify([{ Nation: 'United States', Year: '2021', Population: 50000000 }]));

        const result = await getUSPopulationData(mockApiUrl);
        expect(result).toEqual([{ Nation: 'United States', Year: '2021', Population: 50000000 }]);
    });

    it('should log an error message to the console and return an empty list when fetch fails', async () => {
        fetchMock.mockRejectOnce(new Error('An error occurred!'));
        const result = await getUSPopulationData(mockApiUrl);
        expect(result).toEqual([]);
    });

    it('should log an error message to the console and return an empty list when HTTP response comes back as not OK (200)', async () => {
        fetchMock.mockResponseOnce('', { status: 500 });
        const result = await getUSPopulationData(mockApiUrl);
        expect(result).toEqual([]);
    });
});

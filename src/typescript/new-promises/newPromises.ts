import fetch from 'node-fetch';

export const getUSPopulationData = async (url: string) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`An HTTP Error occurred: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};

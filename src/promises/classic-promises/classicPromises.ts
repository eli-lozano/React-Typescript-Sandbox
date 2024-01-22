import fetch from 'node-fetch';

export const getCatFact = (url: string) => {
    return new Promise((resolve, reject) => {
        fetch(url).then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            return response.json();
        }).then((responseData) => {
            resolve(responseData);
        }).catch((error) => {
            reject(error);
        });
    });
};

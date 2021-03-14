import { MORSE_BASE_URL } from '../../config/constants';

const call = async (path, method, body) => {
    try {
        const url = `${MORSE_BASE_URL}${path}`;
        const headers = {
            'Content-Type': 'application/json'
        };

        const options = {
            method,
            headers,  
            body,
            json: true,
            mode: 'no-cors',
        };

        return await fetch(url, options);
    } catch (error) {
        throw new Error(`Fetch error: ${error}`);
    }
}

export default call;
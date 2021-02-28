export default class ApiClientService {

    constructor() {
        this._apiUrl = 'https://rickandmortyapi.com';
    }

    _get = async (url) => {

        const res = await fetch(`${this._apiUrl}${url}`);

        if(!res.ok) {
            throw new Error(`Can't fetch ${url}` +
                ` received ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = async () =>  {
        const res = await this._get('/api/character/');
        return res.results;
    }

    getCharacter = async (id) => {
        return this._get(`/api/character/${id}`)
    }


}
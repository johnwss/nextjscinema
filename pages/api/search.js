import {apiBase,apiKey} from '../../lib/tmdb';

export default async(req, res) => {
let myquery = req.query.myquery;


    const resp = await fetch(`${apiBase}/search/movie?api_key=${apiKey}&language=pt-br&query=${myquery}`);
    const json = await resp.json();

    res.status(200).json({
        list: json.results
    });
}
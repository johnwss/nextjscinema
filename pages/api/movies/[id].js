import {apiBase,apiKey} from '../../../lib/tmdb';

export default async(req, res) => {



    const resp = await fetch(`${apiBase}/movie/${req.query.id}?api_key=${apiKey}&language=pt-br`);
    const json = await resp.json();

    res.status(200).json({
        info: json
    });
}
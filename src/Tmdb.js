const API_KEY = '440df0f93567c03d8b79a8da13a6045c';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async(endPoint) => {
    const req = await fetch(`${API_BASE}${endPoint}&api_key=${API_KEY}`);
    const json = await req.json();
    return json;
}


const Tmdb = {
    getHomeList: async() => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR`),
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?language=pt-BR`),
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR`),
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR`),
            }, 
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR`),
            }, 
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR`),
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR`),
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR`),
            },
        ];
    },
    getMovieInfo: async(movieId, type) => {
        let info = {};

        if (movieId) {
            switch (type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR`)
                    break;

                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR`)
                    break;
                default:
                    info = null;
                    break;
            }
        }
        return info;
    }
}

export default Tmdb;
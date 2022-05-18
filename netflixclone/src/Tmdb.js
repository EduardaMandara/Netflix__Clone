const API_KEY = '38cee7f28d5b66f36b9c3cf8d8452a4b';
const API_BASE = 'https://api.themoviedb.org/3';

/* 
- Originais da Netflix
- recomendados (trending)
- em alta (top rated)
- ação
- comédia
- terror
- romance
- documentários
*/

const basicFetch = async (endpoint) => {
    const req = await fetch('$(API_BASE)$(endpoint)');
    const json = await req.json();
    return json;
}

export default {
 getHomeList: async () => {
     return [
        {
             slug: 'originals',
             title: 'Originais da Netflix',
             items: await basicFetch('/discover/tv?with_network=213'),
        },

        {
             slug: 'trending',
             title: 'Recomendados para Você',
             items: [],
        },

        {
            slug: 'toprated',
            title: 'Em Alta',
            items: [],
        },

        {
            slug: 'action',
            title: 'Ação',
            items: [],
        }, 
        
        {
            slug: 'comedy',
            title: 'Comédia',
            items: [],
        },

        {
            slug: 'horror',
            title: 'Terror',
            items: [],
        },

        {
            slug: 'romance',
            title: 'Romance',
            items: [],
        },
        
        {
            slug: 'documentary',
            title: 'Documentários',
            items: [],
        },
     ]
 }
} ;

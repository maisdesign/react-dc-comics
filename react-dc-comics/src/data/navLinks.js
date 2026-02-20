import characters from './characters.js'
import comics from './comics.js'
import movies from './movies.js'
import tv from './tv.js'
import games from './games.js'
import collectibles from './collectibles.js'
import videos from './videos.js'
import fans from './fans.js'
import news from './news.js'
import shop from './shop.js'

const navLinks = [
    { id: 1, label: 'CHARACTERS', link: '#', data: characters },
    { id: 2, label: 'COMICS', link: '#', data: comics },
    { id: 3, label: 'MOVIES', link: '#', data: movies },
    { id: 4, label: 'TV', link: '#', data: tv },
    { id: 5, label: 'GAMES', link: '#', data: games },
    { id: 6, label: 'COLLECTIBLES', link: '#', data: collectibles },
    { id: 7, label: 'VIDEOS', link: '#', data: videos },
    { id: 8, label: 'FANS', link: '#', data: fans },
    { id: 9, label: 'NEWS', link: '#', data: news },
    { id: 10, label: 'SHOP', link: '#', data: shop },
];

export default navLinks;
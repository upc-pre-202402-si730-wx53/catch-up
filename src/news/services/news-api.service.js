import axios from 'axios';

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const http = axios.create({
    baseURL: 'https://newsapi.org/v2'
});

export class NewsApiService {
    apiKey = NEWS_API_KEY;

    getSources(){
        return http.get(`top-headlines/sources?apiKey=${this.apiKey}`);
    }

    getArticlesForSource(sourceId){
        return http.get(`top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`);
    }

    getUrlToLogo(source){
        return source.urlToLogo;
    }
}

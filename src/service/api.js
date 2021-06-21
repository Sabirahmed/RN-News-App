import { news_url, api_key, country_code } from '../config/constant';

export async function getArticles(category='general') {
    try {
        let articles = await fetch(`${news_url}?country=${country_code}&category=${category}`, {
            headers: {
                'X-API-KEY': api_key
            }
        });

       // let articles = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=71d978ce9e49401bb7168c0e530e6f35');

        let result = await articles.json();
        
        articles = null;

        return result.articles;
    }
    catch(error) {
        throw error;
    }
}


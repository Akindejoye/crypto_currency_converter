import axios from "axios";
import { useEffect, useState } from "react";

const NewsFeed = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://crypto-news-live3.p.rapidapi.com/news',
            headers: {
              'x-rapidapi-host': 'crypto-news-live3.p.rapidapi.com',
              'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
            }
          };
          
          axios.request(options).then( (response) => {
            //   console.log(response.data);
              setArticles(response.data);
          }).catch((error) => {
              console.error(error);
          });
    }, [])

    const first7Articles = articles?.slice(0, 7)
    
    return ( 
        <div className="news-feed">
            <h2>NewsFeed</h2>
            {first7Articles?.map((article, index) => (
                <div key={index}>
                    <a href={article.url}><h1>{article.title}</h1></a>
                </div>
            ))}
        </div>
     );
}
 
export default NewsFeed;
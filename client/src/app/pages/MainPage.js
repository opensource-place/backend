import { useState, useEffect } from 'react';
import axios from 'axios';
const MainPage = () => {
    const [getData, setGetData] = useState([]);
    const dataFetch = () => {
        axios.get('https://api.github.com/repos/furkanportakal/opensourceadam/issues')
            .then((res) => { console.log(res) })
    }
    useEffect(() => {
        dataFetch();
    });
    return (
        <div>
            <button onClick={() => getData}>Add</button>
            {
                console.log(getData.url)
            }
        </div>
    );
}

export default MainPage;
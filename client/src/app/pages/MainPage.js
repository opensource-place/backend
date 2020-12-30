import { useState, useEffect } from 'react';
import axios from 'axios';
const MainPage = () => {
    const [getData, setGetData] = useState([]);
    useEffect(() => {
        axios.get('https://api.github.com/repos/furkanportakal/opensourceadam/issues', getData)
            .then((res) => { console.log(res) })
    });
    return (
        <div>
            <button onClick={() => getData}>Add</button>
            {
                console.log(getData)
            }
        </div>
    );
}

export default MainPage;
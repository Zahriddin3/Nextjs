import axios from "axios";


async function getData(){
    const response = await axios.get("https://rickandmortyapi.com/api/character/")
    return response.data.results
}







async function Youtube() {
    const data = await getData()
    return ( 
        <div>
            {data.map((ch)=>{
                return <p key={ch.name}>{ch.name}</p>
            })}
        </div>
     );
}

export default Youtube;
import Data from "../Products.json";
import {useState} from "react";

export default function SearchBar (){
    const [query, setQuery] = useState("")
    console.log(Data);
    return (
      <div className='card'>
        <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)} />
        {
        Data.filter(p => {
          if (query === '') {
            return p;
          } else if (p.name.toLowerCase().includes(query.toLowerCase())) {
            return p;
          }
        }).map((p, index) => (
          <div className="box" key={index}>
            <p>{p.name}</p>
          </div>
        ))
      }
      </div>
    )
   }



import './App.css';

import words from "./words.jsx";
import WordItem from "./WordItem.jsx";
import {useState} from "react";

const App = () => {
const [text,setText] = useState("");
const [filterText,setFilterText] = useState("");
  
  const worditems = words
    .filter((word)=>word.includes(filterText))
    .map((word, idx) => <WordItem word={word} key={idx} />);

  return (
    
    <div className="m-4 flex flex-col items-center">
      <form
        onSubmit={(e)=>{
          e.preventDefault();
          setFilterText(text);
        }}
        >
        <div className="flex shadow-md m-8 rounded-lg ">
        <button
                onClick={()=>setText("")}
                className="p-2 bg-green-200 px-2" >Reset</button>
      <input
        onChange={(e)=>setText(e.target.value)}
        value={text}
        className=" bg-neutral-200 p-2 " 
        placeholder="filter words"  
        type="text"
        />
          
        <button className="p-2 bg-green-200 px-2" >Filter</button>
        </div>
        
        
        
      </form>
      <div className="flex flex-wrap justify-center w-full max-w-lg">
        {worditems}
      </div>
    </div>
  );
};

export default App;

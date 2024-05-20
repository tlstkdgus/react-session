import React, {useState} from "react";

const TextInput = () =>{
    const [text, setText] = useState('');

    return(
        <div>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="텍스트 입력"/>
            <p>입력한 텍스트: {text}</p>
        </div>
    )
}

export default TextInput;
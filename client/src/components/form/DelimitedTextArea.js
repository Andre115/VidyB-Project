

function handleTextAreaChange(event){
    const text= event.target.value;
    const lines= text.split('\n').length;

    if(lines > 3){
        const delimitedText= text.split('\n').slice(0, 3);
        
    }
}
export default function back(){
    return(
      <button onClick={ApiError()}>Call API</button>
    )
  }
  
  function ap (){
    const res = fetch("http://127.0.0.1:3000/api/hello") 
    const date = res.json()
    console.log(date);
    //return date
  }

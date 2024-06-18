import TestBtn from "./testBtn";
import Plus from "@/app/plus";

export default function item({ params }) {
    const added = Plus(2,7)
    return (
        <div> 
           <p>item :{params.id}</p> 
           <p>{added}</p>
           <TestBtn/>
        </div>
    );
}
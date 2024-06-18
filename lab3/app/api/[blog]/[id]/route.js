export function GET(requset,{params}){
    return Response.json ({
        name: "Thanet",
        major : "IT",
        lv :"2",
        id: params.id
    });
}
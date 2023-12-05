import { useParams } from "react-router-dom";

function ViewPost({listData}) {
    let {id} = useParams();
    // let item = listData.find(function(item){
    //     return item.id == id
    // })
    let item = listData.find((item) => item.id==id)

    if(listData.length == 0) {
        return "데이터가 존재하지 않습니다."
    }
    return(
        <>
        {item.title} / {item.content}
        <div><a href="/">Home</a></div>
        </>
    )
}

export default ViewPost;
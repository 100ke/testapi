function MainListView({listData}) {
    return(
        <>
        {
            listData.map((item, i)=>{
                return (
                    <li key={i}>
                        {item.id}. 
                        <a href={`/article/${item.id}`}>{item.title}</a>
                    </li>
                )
            })
        }
        </>
    )
}

export default MainListView;
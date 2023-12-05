import { getArticles } from "../api";
import { useEffect, useState } from 'react';

function MainListView({ }) {
  const [listData, setListData] = useState([])

  const callApi = async () => {
    try {
      const articles = await getArticles();
      console.log(articles)
      setListData(articles)
    } catch (error) {
      console.error("에러 : ", error);
    }
  }

  useEffect(() => {
    callApi()
  }, [])

  return (
    <>
    <div className="container tableWrap">
      <h3 style={{textAlign:"center", marginBottom:"20px"}}>게시판</h3>
      <table>
        <tr>
          <th>글번호</th>
          <th>제목</th>
        </tr>
          {
            listData?.map(function (item, i) {  // 리스트 데이터가 있다면 뒤에 실행.. ? 이것때문에 안됨
              return (
                <>
                <tr>
                  <td className="num" key={i}>{item.id}</td>
                  <td className="title" key={i}><a href={`/articles/${item.id}`}>{item.title}</a></td>
                </tr>
                </>
              )
            })
          }
        </table>
    </div>
    </>
  )
}

export default MainListView;
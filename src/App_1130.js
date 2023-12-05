import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [memberData, setMemberData] = useState([])
  const callApi = async()=>{
  try {
      const response = await axios.get("http://localhost:8081/api/member")
      // const response = await axios.get("http://localhost:8081/api/member/1")
      console.log(response.data);
      setMemberData(response.data);
    } catch (error) {
      console.error("error" + error);
    }
  }

  useEffect(()=>{
    callApi()
  }, [])
  return (
    <div className="App">
      {/* 단일조회 */}
      {/* {memberData.email}
      {memberData.password} */}

      {/* 전체조회 */}
      {
        memberData.map((item,i)=>{
          return(
            <li key={i}>
              {item.email} / {item.password}
            </li>
          )
        })
      }
    </div>
  );
}

export default App;

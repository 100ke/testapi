import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewPost() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ title: '', content: '' })
    const handleSubmit = async (e) => {
        // alert("입력")
        try {
            const respons = await axios.post("http://192.168.0.169:8081/api/articles", formData)
        // 데이터 들어가는지 확인
        if(respons.status === 200){
            console.log('글 작성 완료');
            alert('글 작성 완료')
            navigate("/")
        }else{
            console.error('글 작성 에러')
        }
        } catch (error) {
            console.error("에러", error)
            alert('글 작성 에러')
        }
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value}) // e.target.name은 밑에서 입력한 것(name은 title, content)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>제목 : <input type="text" name="title" placeholder="제목" onChange={handleChange} value={formData.title}/></div>
                <div>내용 : <input type="text" name="content" placeholder="내용" onChange={handleChange} value={formData.content}/></div>
                <input type="submit" value="글작성" />
            </form>
            {formData?.title} / {formData?.content}
        </>
    )
}

export default NewPost;
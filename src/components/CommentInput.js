import { useState } from "react";

function CommentInput ({onAddComment}) {
    const [nickname, setNickname] = useState('')
    const [body, setBody] = useState('')
    const handleAddComment = ()=>{
        // alert("입력")
        const newComment = {nickname, body}
        onAddComment(newComment) // 부모에게 자료 전송
        setNickname('')
        setBody('')
    }
    return (
        <>
        <input type="text" name="nickname" placeholder="nickname"
            onChange={(e)=>{setNickname(e.target.value)}}
            value={nickname}
        />
        <input type="text" name="body" placeholder="body"
            onChange={(e)=>{setBody(e.target.value)}}
            value={body}
        />
        <div onClick={handleAddComment}>댓글 입력</div>

        <br />
        {nickname} / {body}
        </>
    )
}

export default CommentInput;
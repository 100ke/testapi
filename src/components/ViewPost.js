import { useParams } from 'react-router-dom'
import { delComment, getArticleById, getComments, postComment } from '../api';
import { useEffect, useState } from 'react';
import CommentInput from './CommentInput';

function ViewPost() {
    let { id } = useParams();
    const [postData, setPostData] = useState(null)
    const [commentData, setCommentData] = useState(null)
    const [deleteMsg, setDeleteMsg] = useState('')
    useEffect(()=>{
        const articlePost =  async ()=>{
            try {
                const post = await getArticleById(id)
                setPostData(post)

                const comment = await getComments(id)
                // console.log(comment.data);
                setCommentData(comment.data);
            } catch (error) {
                console.error("에러 : ",error)
            }
        }
        articlePost();
    },[id, deleteMsg])

    // if(!postData){
    //     return "null";
    // }

    const commentDel = async (id) => {
        try {
            delComment(id)
            setDeleteMsg("해당 댓글이 삭제되었습니다.")
        } catch (error) {
            console.error("댓글 삭제 에러 : ", error);
            setDeleteMsg("댓글 삭제 중 오류 발생")
        }

    }

    const addNewComment = async (newComment) => {
        // alert(newComment)
        try {
            await postComment(id, newComment) // articleId, nickname, body
            setDeleteMsg("댓글이 추가되었습니다.")
        } catch (error) {
            console.error("댓글 추가 에러 : ", error);
            setDeleteMsg("댓글 추가 중 오류 발생")
        }
    }

    return (
        <>
        {postData?.title}
        {postData?.content}

        <hr />
        <h4>댓글</h4>
        <ul className='commList'>
        {
            commentData?.map(function(item,i){
                return(
                    <li key={i}>{item.nickname} / {item.body} 
                    <span className='btn' onClick={()=>{commentDel(item.id)}}>삭제</span></li>
                    )
                })
            }
        </ul>
        <hr />
        <h4>댓글 작성</h4>
        <CommentInput onAddComment={addNewComment}/>

        <div className='tost'>
            {deleteMsg}
        </div>
        </>
    )
}

export default ViewPost;
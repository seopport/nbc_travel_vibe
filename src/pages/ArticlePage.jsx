import { useCallback, useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../components/common/Header';
import Body from '../components/common/Body';
import ArticleHeader from '../components/article/ArticleHeader';
import ArticleContent from '../components/article/ArticleContent';
import CommentForm from '../components/article/CommentForm';
import Comment from '../components/article/Comment';
import { StArticleWrapper, StArticleHr } from './styles/Article.style';
import {
  deleteCommentApi,
  getCommentsApi,
  postCommentApi
} from '../apis/comments';
import { deletePostApi, getPostsApi } from '../apis/posts';
import { postGetData } from '../redux/modules/PostReducer';

const ArticlePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [comments, setComments] = useState([]);

  const postId = searchParams.get('pid');
  const posts = useSelector((state) => state.post.posts);
  const post = posts.filter((v) => v.postId === postId)[0];

  const getComments = useCallback(async () => {
    const comments = await getCommentsApi(postId);
    setComments(comments);
  }, [postId]);

  console.log(comments);

  const postComment = async (content) => {
    await postCommentApi(content, postId, '1', 'kaka');
    await getComments();
  };

  const deleteComment = async (commentId) => {
    await deleteCommentApi(commentId);
    await getComments();
  };

  const moveToUpdate = () => {
    navigate(`/posting?pid=${postId}`);
  };

  const deletePost = async () => {
    await deletePostApi(postId);
    const newPosts = await getPostsApi();
    dispatch(postGetData(newPosts));
    navigate('/');
    comments.forEach((v) => {
      deleteCommentApi(v.commentId);
    });
  };

  useEffect(() => {
    if (post === undefined) {
      navigate('/');
    }
    getComments();
  }, [post, getComments, navigate]);

  return (
    <StArticleWrapper>
      <Header />
      {post && (
        <Body>
          <ArticleHeader
            category={post.category}
            title={post.title}
            userNickname={post.userNickname}
            createdAt={post.createdAt}
            moveToUpdate={moveToUpdate}
            deletePost={deletePost}
          />
          <StArticleHr />
          <ArticleContent
            content={post.content}
            likes={post.likes}
            photos={post.photos}
            commentsLen={comments ? comments.length : 0}
          />
          <StArticleHr />
          <CommentForm postComment={postComment} />
          <StArticleHr />
          <div>
            {comments &&
              comments.map((v, i) => (
                <Comment
                  key={v.commentId}
                  comment={v}
                  border={i < comments.length - 1}
                  deleteComment={deleteComment}
                />
              ))}
          </div>
        </Body>
      )}
    </StArticleWrapper>
  );
};

export default ArticlePage;

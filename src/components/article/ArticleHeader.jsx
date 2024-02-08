import {
  StArticleHeaderWrapper,
  StArticleHeaderTitle,
  StArticleHeaderBottom
} from './Styles/Article.style';

import { StUpdateBtn, StDeleteBtn } from '../common/styles/Button.style';

const ArticleHeader = () => {
  return (
    <StArticleHeaderWrapper>
      <span>카테고리</span>
      <StArticleHeaderTitle>글 제목</StArticleHeaderTitle>
      <StArticleHeaderBottom>
        <span>닉네임 | 날짜</span>
        <div>
          <StUpdateBtn $fontSize='14px' $width='50px' $height='30px'>
            수정
          </StUpdateBtn>
          <StDeleteBtn $fontSize='14px' $width='50px' $height='30px'>
            삭제
          </StDeleteBtn>
        </div>
      </StArticleHeaderBottom>
    </StArticleHeaderWrapper>
  );
};

export default ArticleHeader;

import React, { useState } from 'react';
import { StDeleteBtn, StSubmitBtn } from '../common/styles/Button.style';
import {
  StAvatar,
  StBtnsWrapper,
  StContainer,
  StCurrentPw,
  StEmail,
  StMyPageTitle,
  StMyPageWrapper,
  StNewPw,
  StNickName,
  StUserInfoDeatilWrapper,
  StUserInfoWrapper
} from './styles/MyPages.style';
import Body from '../common/Body';
import Header from '../common/Header';
import { useDispatch, useSelector } from 'react-redux';

const MyPage = () => {
  const user = useSelector((state) => state.user.users[0]);
  const userEmail = user.email // 유저 이메일 가져오기

  const [nickname, setNickname] = useState(user.nickname);
  const [password, setPassword] = useState(user.nono);
  const [image, setImage] = useState(user.image);

  const dispatch = useDispatch();

  const handleUpdate = () => {
    const updateUser = {
      ...user,
      nickname,
      password,
      image
    }
    dispatch(updateUser)
    console.log(updateUser)

  }

  return (
    <StContainer>
      <Header />
      <Body>
        <StMyPageWrapper>
          <StMyPageTitle>프로필 설정</StMyPageTitle>
          <StUserInfoWrapper>
            <StAvatar></StAvatar>
            <StUserInfoDeatilWrapper>
              <StEmail>
                <label>이메일</label>
                <div>{userEmail}</div>
              </StEmail>
              <StNickName>
                <label>닉네임</label>
                <input placeholder={user.nickname} type='text' value={nickname} onChange={(e) => setNickname(e.target.value)}></input>
              </StNickName>
              <StCurrentPw>
                <label>새로운 비밀번호</label>
                <input placeholder={user.password} type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
              </StCurrentPw>
              <StNewPw>
                <label>비밀번호 확인</label>
                <input type='password' onChange={(e) => setPassword(e.target.value)}></input>
              </StNewPw>
            </StUserInfoDeatilWrapper>
          </StUserInfoWrapper>
          <StBtnsWrapper>
            <StSubmitBtn onClick={handleUpdate}>저장</StSubmitBtn>
            <StDeleteBtn>취소</StDeleteBtn>
          </StBtnsWrapper>
        </StMyPageWrapper>
      </Body>
    </StContainer >
  );
};

export default MyPage;

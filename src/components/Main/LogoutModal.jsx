import { StBackground, StLogoutContainer } from './styles/LogoutModal.style'
import { StCloseBtn, StLogoName, StLogoutTitle, StLogoutButton, StCancelButton, StButtonWrap } from './styles/LogoutModal.style'
import { useLocation, useNavigate } from "react-router-dom";


const LogoutModal = ({ isLogoutModalOpen, setIsLogoutModalOpen, setIsLoggedIn, isLoggedIn }) => {

    const navigate = useNavigate();
    const handleCloseButtonClick = () => {
        setIsLogoutModalOpen(!isLogoutModalOpen)
    }

    const { pathname } = useLocation();

    const handleLogoutButtonClick = () => {
        setIsLogoutModalOpen(!isLogoutModalOpen)
        setIsLoggedIn(!isLoggedIn);
        if (pathname === '/') {
            alert('로그아웃 되었습니다.')
        } else {
            alert('로그아웃 되었습니다. 홈으로 이동합니다.')
        }
        navigate('/')
    }

    return (

        <StBackground $isLogoutModalOpen={isLogoutModalOpen}>
            <StLogoutContainer>
                <StLogoName style={{ margin: "0" }}>Travel Vibe</StLogoName>
                <StCloseBtn onClick={handleCloseButtonClick} style={{ marginTop: "5px", lineHeight: "20%" }}>x</StCloseBtn>
                <StLogoutTitle>로그아웃하시겠습니까?</StLogoutTitle>
                <StButtonWrap>
                    <StCancelButton onClick={handleCloseButtonClick}>취소</StCancelButton>
                    <StLogoutButton onClick={handleLogoutButtonClick}>로그아웃</StLogoutButton>
                </StButtonWrap>
            </StLogoutContainer>
        </StBackground>
    )
}

export default LogoutModal
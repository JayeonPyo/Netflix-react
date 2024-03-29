import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';





const onClickColor = e => {
var change = document.getElementsByClassName('nav');

for(var i = 0; i<change.length; i++){
  change[i].style.color="#e5e5e5";
  change[i].style.fontWeight="normal";
}
e.target.style.color='#fff';
e.target.style.fontWeight='bold'

};
const Wrapper = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  padding: 20px 56px;
  box-sizing: border-box;
  position:fixed;
  z-index:100;
top:0;
left:0;
right:0;
`;

const Logo = styled.img`
  height: 100%;
  margin-right: 30px;
`;

const NavText = styled.ul`
  display: flex;
  color: white;
  list-style: none;
  height: 100%;
  flex: 1;
  align-items: center;
`;

const NavTextItem = styled.li`
  margin : 0px 10px;
  display: flex;
  flex-direction: column;
  &:hover{
    font-weight:normal;
    color:#b3b3b3;
  }
  
`;

const NavIcon = styled.ul`
  display: flex;
  list-style: none;
  height: 100%;
`;

const NavIconItem = styled.li`
  width: fit-content;
  margin-right: 20px;
  & > img {
    height: 100%;
  }
`;

const Banner = props => {
  return (
    <Wrapper>
      <Logo src="https://cdn.pixelprivacy.com/wp-content/uploads/2017/12/Netflix-Logo-1024x277.png" />
      <NavText>
        <NavTextItem onClick = {onClickColor} className="nav"> <Link to="">홈</Link></NavTextItem>
        <NavTextItem onClick = {onClickColor} className="nav">TV 프로그램</NavTextItem>
        <NavTextItem onClick = {onClickColor} className="nav">영화</NavTextItem>
        <NavTextItem onClick = {onClickColor} className="nav">최신 등록 콘텐츠</NavTextItem>
        <NavTextItem onClick = {onClickColor} className="nav">내가 찜한 콘텐츠</NavTextItem>
      </NavText>

      <NavIcon>
        <NavIconItem>
          <img src="/search.svg" alt="" />
        </NavIconItem>
        <NavIconItem>
          <img src="/gift.svg" alt="" />
        </NavIconItem>
        <NavIconItem>
          <img src="/bell.svg" alt="" />
        </NavIconItem>
      </NavIcon>
    </Wrapper>
  );
};

export default Banner;

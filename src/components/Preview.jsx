import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
color: white;
overflow-x:hidden;
position: absolute;
top:0;
left:0;
right:0;
z-index:-1;

& > img {
    width: 100%;
}

`;

const Back = styled.div`
position:absolute;
left:5%;
top:15%;
right:60%;
`;
const ButtonParent = styled.div`
  display: flex;

  
`;
const Button = styled.button`
background-color: rgb(0,0,0,0.4);
border: none;
width:130px;
height:40px;
margin-top:10px;
margin-right:10px;
font-style:center;
color:white;
border-radius:2px;
transition:0.3s;


&:nth-child(1){ 

flex:1;
}
&:nth-child(2){ 
flex:1.5;
}
&:nth-child(3){ 
flex:1;
}

&:hover{
    background-color:white;
    color:black;
    transform: scale(1.1);
}

`;

const Preview = props => {
return (

    <Wrapper>
        <img 
        src="https://occ-0-988-993.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSpHMNyvIRy6PolVWkmMg80JA0Kdcldq3vIxohYsRrtBKVZEyJAW6ls4b6EoKP7DzCQ6Fvnq5C694tN5eN06_Hb5gHp2.webp?r=105](https://occ-0-988-993.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSpHMNyvIRy6PolVWkmMg80JA0Kdcldq3vIxohYsRrtBKVZEyJAW6ls4b6EoKP7DzCQ6Fvnq5C694tN5eN06_Hb5gHp2.webp?r=105"
        alt=""
        >
        </img>


        <Back>
        <img src="https://occ-0-988-993.1.nflxso.net/dnm/api/v6/5e0byrbbfBPBmtxyXMpKqMuqOQY/AAAABduWV1XI_V1CpMePQjJ8-_aIvKPmyAvR8CAXcOAAOByHH-uTuwXXxspW-VTWODhxZtUSBI1BPK3cvJE818mM1QQ_e73MVBZPxu6c.webp?r=9a5">
        </img>
        <div>
	격동의 구한말, 불꽃처럼 타오르는 여인이 있다. 조국을 위해 <br />
    가시밭길을 택한 명문가의 규수. 그녀가 한 사내를 만난다. <br />
    동지인지, 적인지, 그저 이방인인지 모를 사내를. <br />
       </div>
       <ButtonParent>
           <Button>재생</Button>
           <Button>내가 찜한 콘텐츠</Button>
           <Button>상세 정보</Button>
        </ButtonParent>
      
        </Back>
       
    </Wrapper>
);
}

export default Preview;
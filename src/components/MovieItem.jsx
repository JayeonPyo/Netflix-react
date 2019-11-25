import React from 'react';
import styled from 'styled-components';





const Wrapper = styled.div`
  width:calc(20% - 8px);
  padding-bottom:10%;
  height: 0;
  position:relative;
  margin-right:10px;

  margin-bottom:40px;


& > div{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom:0;
    background-color: #aaa;


    display: flex;
    justify-content:center;
    align-items:center;

}

& > img{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #aaa;


    display: flex;
    justify-content:center;
    align-items:center;

}


&:hover{

transform: scale(1.5);
transition: 0.5s;

}
`;


const MovieItem = props => {

                                                                                                  

    return (
      <Wrapper>
        
       <div></div> 
       <img src={"http://image.tmdb.org/t/p/w185"+ props.backdrop_path} alt=""/>
      

       
       </Wrapper>
    )
  };





export default MovieItem;
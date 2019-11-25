import React from 'react';
import Banner from '../components/Banner';
import Preview from '../components/Preview';
import MovieContainer from '../components/MovieContainer';
import axios from "axios";



 class Tv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    movies: []
    };

  }

  componentDidMount() {
    axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=a36305ddf529faa0c37acbf47e633d08&language=ko-kr"
    )
    .then(response => {
      console.log(response);
      this.setState({movies: response.data.results})
    })
    .catch(err => {
      console.log("err!",err);
    });

    axios
    .get(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=a36305ddf529faa0c37acbf47e633d08&language=ko-kr"
    )
    .then(response => {
      console.log(response);
      this.setState({movies2: response.data.results})
    })
    .catch(err => {
      console.log("err!",err);
    });

    axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=a36305ddf529faa0c37acbf47e633d08&language=ko-kr"
    )
    .then(response => {
      console.log(response);
      this.setState({movies3: response.data.results})
    })
    .catch(err => {
      console.log("err!",err);
    });
  }

  render() {
    return(
   <div style={{marginTop: "45%",overflowX:"hidden",width:"100%"}}> 
     <Banner />
     <Preview />
     <MovieContainer title="TV프로그램" movies={
     this.state.movies}/>
 
    <MovieContainer title="인기있는 영화" movies={
     this.state.movies2}/>

    <MovieContainer title="이번주 인기 영화" movies={
     this.state.movies3}/>

    
   </div> 
    );
  
  }
}

export default Tv;

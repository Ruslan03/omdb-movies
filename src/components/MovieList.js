import React, { useState, useEffect} from 'react';
import Styled from 'styled-components'
import screens from '../screens'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchMoreMovies } from '../store/reducers/movies/movies.thunk';
import Popup from './Popup';

const Container = Styled.div`
    
`;

const List = Styled.div`
    display : flex;
    flex-wrap: wrap;
    flex-direction : column;
    flex-grow: 1;
    justify-content: center;
    height: 100%;

    @media ${screens.md} { 
        flex-direction: row;
        flex-grow: 1;
    }
    
`;

const Card = Styled.div`
    background-image: url(${props => props.img && props.img !== 'N/A' ? props.img : 'no_img.png'});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 380px;
    margin: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    border-radius: 15px;
    cursor: pointer;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    @media ${screens.xl} { 
        width: 260px;
    }
`;

const Loading = Styled.div`
    width: 100%;
    text-align:center;
    font-size: 20pt;
    font-weight: bold;
    margin: 4em 0 4em;
`;

const MovieList = () => {
    const dispatch = useDispatch();
    const { movies, isLoading, hasMore} = useSelector(state => state.movies);


    useEffect(() => {
        window.onscroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                if(hasMore) {
                    dispatch(fetchMoreMovies())
                }
            }
          }
    }, [dispatch, hasMore])

    const [IsShowPopup, setIsShowPopup] = useState(false)
    const [PopupContent, setPopupContent] = useState(null)
    const showPopup = (movie) => {
        setPopupContent((
            <img src={movie.Poster !== 'N/A' ? movie.Poster: 'no_img.png'} alt={movie.Title} />
        ))
        setIsShowPopup(true)
    }

    return (
        <>
            <Popup content={PopupContent} showPopup={IsShowPopup} onClose={() => setIsShowPopup(false)} />
            <Container>
                <List>
                    {movies && movies.map((movie, index) => {
                        return (
                            <Card img={movie.Poster} key={index} onClick={() => showPopup(movie)}>
                                <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
                                
                            </Card>
                        )
                        
                    })}
                </List>
            </Container>
            <Loading>
                {isLoading && !hasMore && <h4>Loading...</h4>}
                {isLoading && hasMore && <h4>Load More...</h4>}
            </Loading>
        </>
    )
}

export default MovieList

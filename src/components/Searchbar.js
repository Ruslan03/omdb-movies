import React from 'react'
import Styled from 'styled-components'
import { useDispatch } from 'react-redux'
import actions from '../store/reducers/movies/movies.actions'
import { fetchMovies } from '../store/reducers/movies/movies.thunk';

const StyledSearchbar = Styled.div`
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

const Input = Styled.input`
    padding: 1.5em 2em;
    width: 40rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border: none;
    border-radius: 25px;
    outline: none;
`;

const Searchbar = () => {
    const dispatch = useDispatch();

    const WAIT_INTERVAL  = 1000;
    let TIMER = null;

    const handleChange = (e) => {
        clearTimeout(TIMER);
        let keyword = e.target.value;

        dispatch(actions.moviesLoadSuccess([]))
        
        TIMER = setTimeout(() => {
            if (keyword.length) {
                dispatch(actions.moviesSearchParams({
                    s: keyword
                }))
                dispatch(fetchMovies())
            };
        }, WAIT_INTERVAL);
        

        
    }
    
    return (
        <StyledSearchbar>
            <Input name="search" placeholder="Search Here..." onChange={handleChange} />
        </StyledSearchbar>
    )
}

export default Searchbar

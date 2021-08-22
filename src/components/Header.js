import React from 'react'
import Styled from 'styled-components';
import Searchbar from './Searchbar';

const StyledHeader = Styled.div`
    background: #f3f3f4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4em;
    height: 10rem;
`;
export default function Header() {
    return (
        <>
            <StyledHeader>
                <h1>Search Movies</h1>
            </StyledHeader>
            <Searchbar/>
        </>
    )
}

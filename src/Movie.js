import React, {useState, useEffect} from 'react'
import Styled from 'styled-components'
import screens from './screens'
import { useParams } from "react-router-dom";
import moviesService from "./services/movies.service";

const Container = Styled.div`
    height: 100vh;
    display: flex;
    justify-content:center;
`;

const Title = Styled.div`
    font-weight: bold;
    text-align: left;
    font-size: 25pt;
    padding: 1em 0;
`;

const Box = Styled.div`
    padding: 4em;
    width: 100%;

    @media ${screens.md} { 
        width: 50%;
    }
`;

const BoxBody = Styled.div`
    display: flex;
`;

const Poster = Styled.img`
    margin-right 1.5em;
`;

const Plot = Styled.div`
    line-height: 25px;
`;

const Movie = () => {
    let { imdbID } = useParams();
    const [isLoading, setLoading] = useState(true)
    const [movie, setMovie] = useState(null);

    

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await moviesService.getMoviesByImdbID(imdbID)
            setMovie(response.data)
            setLoading(false)
        }

        fetchMovie()
    }, [imdbID])

    if (movie){
        return (
            <Container>
                <Box>
                    {isLoading && <Title>Loading....</Title>}
                    <Title>{movie.Title}</Title>
                    <BoxBody>
                        <Poster src={movie.Poster} alt={movie.Title} />
                        <Plot>
                            <p>{movie.Plot}</p>
                        </Plot>
                    </BoxBody>
                </Box>
            </Container>
        )    
    }

    return (
        <Container>
            <Box>
                {isLoading && <Title>Loading....</Title>}
            </Box>
        </Container>
    )  
}

export default Movie

import React from 'react'
// import ReactDOM from 'react-dom'
import { cleanup, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import MovieList from '../MovieList'
import reducer from '../../store/reducers/movies/movies.reducer'
import initialState from '../../store/reducers/movies/movies.initialStates'

afterEach(cleanup)
function renderWithRedux(component, {store = createStore(reducer, initialState)} = {}) {
    return {
        ...render(<Provider store={store}>{component}</Provider>)
    }
}
it("Render Component", () => {
    renderWithRedux(<MovieList></MovieList>);
})
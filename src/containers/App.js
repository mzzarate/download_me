import React, { Component } from 'react'
import ClickItem from './game'

class App extends Component {
    render() {
        return (
            <div className='tc'>
                <MainBar />
                <CardList />
            </div>
        )
    }
}

export default App
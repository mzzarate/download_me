import React, { Component } from 'react'
import MainBar from '../components/mainBar'
import CardList from '../components/cardList'

class Game extends Component {

    render() {
        const { onIncrement, onDecrement } = this.props;
        return (
            <div>
                <span>{this.formatCount()}</span>
                <button onClick={() => onIncrement(this.props.counter)}>
                    Add
                        </button>

                <button
                    onClick={() => onDecrement(this.props.counter)}
                    disabled={this.props.counter.value === 0 ? "disabled" : ""}
                >
                    Delete
                        </button>
            </div>
        );
    }

    formatCount() {
        const { value } = this.props.counter;
        return value;
    }
}


class Counters extends React.Component {
    constructor() {
        super();
        this.state = {
            counters: [
                { id: 1, value: 0 },
                { id: 2, value: 0 },
                { id: 3, value: 0 },
                { id: 4, value: 0 },
                { id: 5, value: 0 }
            ],
            total: 0
        };
    }
    handleIncrement(counter) {
        const total = this.state.total + 1;
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters: counters, total: total });
    }

    handleDecrement(counter) {
        const total = this.state.total - 1;
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value--;
        this.setState({ counters: counters, total: total });
    }

    handleReset() {
        const total = 0;
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters: counters, total: total });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleReset.bind(this)}>Reset</button>
                {this.state.counters.map(counter => (
                    <Counter
                        key={counter.id}
                        onIncrement={this.handleIncrement.bind(this)}
                        onDecrement={this.handleDecrement.bind(this)}
                        counter={counter}
                    />
                ))}
                <div>Total: {this.state.total}</div>
            </div>
        );
    }
}



//     constructor(props) {
//         super(props)
//         this.state = {
//             counter: 0,
//             total: 0
//         }
//     }

//     handleIncrement(counter) {
//         const total = this.state.total + 1;
//         const counters = [...this.state.counters];
//         const index = counters.indexOf(counter);
//         counters[index] = { ...counter };
//         counters[index].value++;
//         this.setState({ counters: counters, total: total });
//     }

//     handleReset() {
//         const total = 0;
//         const counters = this.state.counters.map(c => {
//             c.value = 0;
//             return c;
//         });
//         this.setState({ counters: counters, total: total });
//     }

//     render() {
//         const { score, counter } = this.state.score


//         return (
//             <div className='tc'>
//                 <MainBar />
//                 <CardList />
//             </div>
//         )
//     }
}

export default Game
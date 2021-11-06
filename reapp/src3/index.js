import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = {
        answer: 42,
    }

    asyncFunc = () => {
        return Promise.resolve(37);
    }

    async componentDidMount() {
        this.setState({
            answer: await this.asyncFunc()
        });
    }

    render() {
        return (
            <h4>App class component -- state= {this.state.answer}</h4>
        )
    }
}

export default App;

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

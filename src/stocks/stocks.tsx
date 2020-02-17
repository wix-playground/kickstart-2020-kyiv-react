import React, {PureComponent} from 'react'
import { StockItem } from '../mocks'
import Stock from './stock';
// import {useMode} from '../hooks/use-mode';

interface StocksProps {
    items: StockItem[]
}

interface StocksState {
    foo: number
}

export class Stocks extends PureComponent<StocksProps, StocksState> {
    state = {
        foo: 0
    }
    //
    constructor(props: StocksProps) {
        super(props);
        this.state = {
            foo: 0
        }

        this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    componentDidMount(): void {
        console.log('Stocks mounted');
    }
    componentDidUpdate(): void {
        console.log('Stocks updated');
    }
    componentWillUnmount(): void {
        console.log('Stocks will unmount');
    }
    static getDerivedStateFromProps(props: StocksProps) {
        console.log('Stocks getDerivedStateFromProps', props);
        return null;
    }

    handleButtonClick() {
        console.log(this);
        this.setState({
            foo: 2
        })
    }

    render() {
        console.log('Stocks render');
        return (<>
                <button onClick={this.handleButtonClick}>Ok</button>
                <div>{
                    this.props.items.map(
                        item => <Stock
                            key={item.symbol}
                            item={item}
                        />
                    )
                }</div>
          </>
        );
    }
}

export default Stocks

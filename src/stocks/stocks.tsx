import React, {PureComponent} from 'react'
import { StockItem } from '../mocks'
import Stock from './stock';
// import {useMode} from '../hooks/use-mode';

interface StocksProps {
    items: StockItem[]
}

interface StocksState {
    foo: number
    foo2: number
}

export class Stocks extends PureComponent<StocksProps, StocksState> {
    state = {
        foo: 0,
        foo2: 0
    }

    myDiv: HTMLDivElement | null = null
    //
    constructor(props: StocksProps) {
        super(props);
        this.state = {
            foo: 4,
            foo2: 4
        }

        this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    componentDidMount(): void {
        console.log('Stocks mounted', this.state);
        if (!this.myDiv) {
            return
        }

        console.log(this.myDiv.offsetWidth)
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
            foo2: 2
        })
    }

    setMyDiv = (ref: any) => {
        this.myDiv = ref
        console.log(ref);
    }

    setMyElement(ref: any) {
        console.log(ref);
    }


    render() {
        console.log('Stocks render');
        return (<>
                <button onClick={this.handleButtonClick}>Ok</button>
                <div ref={this.setMyDiv}>{
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

import React, {PureComponent} from 'react'
import { StockItem } from '../mocks'
import Stock from './stock';
// import {useMode} from '../hooks/use-mode';
import {FilterContext, FilterState} from '../contexts/filters';
import {filter as filterHOC} from '../hocs/filter'

const {Consumer} = FilterContext


interface StocksProps {
    items: StockItem[],
    filters?: FilterState
}

interface StocksState {
    foo: number
    foo2: number
}

export class StocksComponent extends PureComponent<StocksProps, StocksState> {
    static contextType = FilterContext
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
        console.log('Stocks render', this.context, this.props.filters);

        return (<Consumer>
            {(filterValue) => <>
                {console.log(filterValue)}
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
            }
          </Consumer>
        );
    }
}

export const Stocks = filterHOC(StocksComponent) as any

import React, { Component } from 'react'
import Counter from './counter' 

class counters extends Component {
   constructor(props){
       super(props);
        this.InputText = React.createRef();
   }

    render() {
        return (
            <div>
                {this.props.counters.map(counter =>
                     <Counter key={counter.id} onDelete={this.props.onDelete} 
                     onIncrement={this.props.onIncrement} 
                     onDecrement={this.props.onDecrement} counter={counter}  />
                )}
                <div className='ml-5 mt-4 '><button className="btn btn-primary " onClick={this.props.onReset}>Reset</button>
                 <button className="btn btn-success ml-4 " onClick={this.props.onAddCounter}>add Counter</button></div>
                <div>
            
                </div>
              
            </div>
        )
   }

     
}



export default counters;
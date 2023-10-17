import React, {Component} from 'react'

class counter extends Component{
    render(){

        return (

            /* the props we are getting are counter->which contains whole counter object(counterID,value)
             onDelete->which has tp be called when user clicks on delete button, only the counter with same id should be deleted 
             so we pass the id of the counter for which delete button was presed/clicked*/
             
            <div>
            
            <span className={ this.getClassStyles() }> { this.formatvalue() } </span>
            
            <button onClick={()=>this.props.onIncrement(this.props.counter)} 
            className="btn btn-secondary button-sm">Increment</button>
            
            <button onClick={()=>this.props.onDecrement(this.props.counter)} className="btn btn-warning m-2" 
            id="btn-decrement" disabled={this.valueGretrerThanZero()}> Decrement</button>
            
            <button className="btn btn-danger btn-sm m-2" 
            onClick={()=>this.props.onDelete(this.props.counter.id)}>Delete</button>
           
            </div>
        );  
    }

    formatvalue(){
        const {value } =this.props.counter;
       return value===0? 'zero' :value;
    }

    valueGretrerThanZero(){
        return this.props.counter.value===0?true:false;
    }

    getClassStyles() {
        let styleClass = "m-2 badge badge-";
        styleClass += this.props.counter.value === 0 ? "warning" : "primary";
        return styleClass;
    }
  
}

export default counter;
    
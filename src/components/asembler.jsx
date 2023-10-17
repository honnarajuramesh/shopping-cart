import React,{Component} from 'react'
import Navbar from './navBar'
import Counters from './counters'

class Asembler extends Component{
    // For State Lifting Asembler(just a variable class name) is used. So it can share its state with all of its child components
    state={
        counters :[{id:1,value:10}],
        lastId:1
    }
    render(){
        return(
            <React.Fragment>

                <Navbar totalCounters={this.state.counters.filter(c=>c.value > 0 ).length}/>

                <Counters counters={this.state.counters}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onReset={this.handlerReset}
                onAddCounter={this.handleAddCounter}
                onDelete={this.handleDelete}>
                </Counters>

                

            </React.Fragment>
        );
    }


    handleDelete= counterId =>{
        console.log("Delete pressed",counterId)
            const counters=this.state.counters.filter(c=> c.id!==counterId )

            this.setState({counters})
        }

        handlerReset=()=>{
            let {counters}=this.state;
               
            counters.forEach(c=>c.value=0);

            this.setState({counters});

        }

        handleAddCounter=()=>{
            let {counters}=this.state;
            let {lastId} =this.state;

            counters.push({id:lastId+1,value:0});
            lastId+=1;
            this.setState({counters});
            this.setState({lastId})
        }

        handleIncrement=counter=>{
            // for practice i am getting counters by spread apporater insted of object destructaring
            //i am updating only counter that has been changed

            let counters=[...this.state.counters];
            const index=counters.indexOf(counter);
            // counters[indx]={...counter};
            counters[index].value++; 
            this.setState({counters});
        }

        handleDecrement=counter=>{
            let counters=[...this.state.counters];
            const index=counters.indexOf(counter);
            counters[index].value--;
            this.setState({counters});
        }
}

export default Asembler;
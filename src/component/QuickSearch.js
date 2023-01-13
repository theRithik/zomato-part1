import React,{Component} from 'react';
import './QuickSearch.css'
import Display from './QuickDisplay'

const url='http://3.17.216.66:4000/quicksearch';
class QuickSearch extends Component {
    constructor(){
        super()
        this.state={
            mealType:''
        }
    }

    render(){
        return(
              <div>
                <h2>Quick Search</h2>
                <h4>Find Best Meal Near You</h4>
              <Display mealData={this.state.mealType}/>
                     </div>
        )
    }

    componentDidMount(){
        fetch (url , {method:'GET'})
        .then((res)=> res.json())
        .then((data)=>{
            this.setState({mealType:data})
        })

    }
}

export default QuickSearch;
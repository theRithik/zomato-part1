import React,{Component} from 'react';
import './Search.css';


const lurl='http://3.17.216.66:4000/location';
const rurl='http://3.17.216.66:4000/restaurant?stateId='


class Search extends Component {
  constructor(){

    super()

    this.state={
      location:'',
      rest: ''
    }
  }

  renderCity=(data)=>{
    if(data){
      return data.map((item)=>{
        return(
        <option value={item.state_id} key={item.state_id}>{item.state} </option>
        )
      })
    }

  }

  renderRest=(data)=>{
    if(data){
      return data.map((item)=>{
        return(
          <option value={item.restaurant_id} key={item.restaurant_id}>
           {item.restaurant_name} | {item.address}
          </option>
        )
      })
    }
  }




handleView=(event)=>{
  console.log(event.target.value)
  let stateId = event.target.value

  fetch(`${rurl}${stateId}`,{method:'GET'})
  .then((res)=>res.json())
  .then((data)=>{
    this.setState({rest:data})
  })
  .catch((error)=>{
    console.log(error)
  })

}


    render(){
        return(
              <div>
                <div className='background'>
                 
                
                  <div className='heading'>
                    Find Best Restaurant Near You
                  </div>
                <div class ='container search'>
                  <div class = 'row select'>
                    <div class=' col-md-4 '>
                    <select class= 'form-select' defaultValue={'DEFAULT'} onChange={this.handleView}>
        <option value="DEFAULT" disabled>.....Select City ...</option>
                {this.renderCity(this.state.location)}
                  </select>
                  </div>
                  <div class='col-md-4'>
                  <select class= 'form-select' defaultValue={'DEFAULT'}>
        <option value="DEFAULT" disabled>.....Select Restaurant ...</option>
            {this.renderRest(this.state.rest)}
                  </select>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
        )
    }

    componentDidMount(){
      fetch(lurl,{method:'GET'})

      .then((res)=>res.json())

      .then((data)=>{
          this.setState({location:data})
              })

              .catch((err)=>{
                console.log(err)
              })
    }
}


export default Search;
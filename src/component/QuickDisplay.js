import React from 'react';
import {Link} from 'react-router-dom';

const Display=(props)=>{
    const listView=({mealData})=>{
     if (mealData){
        return mealData.map((item)=>{
            return(
                <Link to="" key={item.mealtype_id} >
                      <div className="card " style={{width: '18rem'}} >
                       <img src={item.meal_image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                         <h5 className="card-title">{item.mealtype}</h5>
                          <p className="card-text">{item.content}</p>
                           </div>
                           </div>
                            </Link>
                            
            )
        })
     }
    }
    return(
        <>   
        <div className='quick'>
       {listView(props)}
       </div>
       </>
    )
}
export default Display;
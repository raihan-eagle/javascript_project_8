import React from 'react';
import './List.css'


const List = (props) => {
    const{list} = props;
    let total=0;
    let name='';
    let nameList =[];
    for (const price of list){
        total = total + price.honorarium;
        name=price.name;
        nameList.push(name);
        console.log(nameList);
    }
    return (
        <div>
            <h2>Guest List: {props.list.length} people.</h2>
            <h4>Recently added: {name}</h4>
            {
                nameList.map((name)=>{
                    return(<p>{name}</p>)
                })
            }
            <h3>Total Honorarium: {total} BDT </h3>
        </div>
    );
};

export default List;
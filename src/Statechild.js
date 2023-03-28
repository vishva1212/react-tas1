
import React,{useState} from 'react';
let buy;
let mobiles = [{
    id:"001",
    name :"oneplus11",
    price : 56999,
    isPurchased: true},
    {
    id:"002",
    name : "Vivi Y100",
    price : 24999,
    isPurchased: false},
    {
    id:"003",  
    name : "Redmi 10",
    price : 56999,
    isPurchased : true},
    {
    id:"004",
    name : "iphone 13",
    price : 62990,
    isPurchased : false},
    {
    id:"005",
    name : "Nokia",
    price : 12000,
    isPurchased : true},
    {
    id:"006",
    name : "Poco M4",
    price : 13999,
    isPurchased : true}]



const Statechild = () => {
    let vis=mobiles;
    const[mob,hellow]=useState(vis)
    let fil=()=>{
        let buy=[...vis].filter(s=>s.isPurchased===true)
        hellow(buy)
    }
   let sorting=(sr)=>{
        var so=[...vis].sort((a,b) => {
            var sad=a.name.toUpperCase()
            var sosad=b.name.toUpperCase()
            if(sad<sosad){return -1}
            if(sad>sosad){return 1}
            return 0;
     })
    {sr==='asc' ?  hellow(so): hellow(so.reverse())}
       }
    let  price=()=>{
    var data=[...vis].sort((a,b)=>a.price-b.price)
    hellow(data)
   }
   
    return (
    <div>
         <button onClick={()=>fil()}>isPurchased</button>
        <button onClick={()=>sorting("asc")}>ascending order</button>
       <button onClick={()=>sorting("r")}>decending order</button>
       <button onClick={()=>price()}>price list</button>
        {mob.map((v,i)=><h1 key={i}>{v.name}-{v.price}</h1>)}

    </div>
  )
}

export default Statechild
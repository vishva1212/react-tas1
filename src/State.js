import React from 'react'
        

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

   
class State extends React.Component{
    constructor(){
        super();
        let k= mobiles;
        this.state={
          k
        }
    }
   render(){
    let f=this.state.k;
    let fil=()=>{
        let buy=[...f].filter(s=>s.isPurchased===true)
        this.setState({k:buy})
    }
   let sorting=(vis)=>{
        var so=[...f].sort((a,b) => {
            var sad=a.name.toUpperCase()
            var sosad=b.name.toUpperCase()
            if(sad<sosad){return -1}
            if(sad>sosad){return 1}
            return 0;
     })
    {vis==='asc' ? this.setState({k:so}):this.setState({k:so.reverse()})}
       }
    let  price=()=>{
    var data=[...f].sort((a,b)=>a.price-b.price)
    this.setState({k:data})
   }
   
    return(
        <>
        <button onClick={()=>fil()}>isPurchased</button>
        <button onClick={()=>sorting("asc")}>ascending order</button>
       <button onClick={()=>sorting("r")}>decending order</button>
       <button onClick={()=>price()}>price list</button>
        {f.map((v,i)=><h1 key={i}>{v.name}-{v.price}</h1>)}
        </>
    )
   }    
    
} 

export default State
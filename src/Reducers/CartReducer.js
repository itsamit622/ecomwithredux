import {CART_PRODUCTS ,REMOVE_CART_PRODUCTS ,INC_COUNT,DEC_COUNT}  from "../Actions/ActionTypes"




const IntialState ={

    cart:[]
}

function CART_REDUCER(
    state = IntialState,
  
    action
  ) {
    switch (action.type) {
     case CART_PRODUCTS:
       console.log("action",action.payload)
       action.payload.count = 1;
       let check=state.cart.every((item)=>{
         return item.id !==action.payload.id
       })
       if(check){
        let newstate =state.cart.concat(action.payload)
        console.log("newstate",newstate)
             return {...state ,cart:newstate}

       }
       else{
             
             let itemForCountIncrease = state.cart.find((item) => item.id == action.payload.id);
             itemForCountIncrease.count += 1;
             let oldItems = state.cart.filter((item) => item.id != action.payload.id);
            
             return {...state,cart:[...oldItems, { ...itemForCountIncrease }]}

       }
      //  console.log("check" ,check)
       
       

     
     case REMOVE_CART_PRODUCTS:
       console.log("actiondelete",action.payload)
       let products=state.cart.filter((value=>{
         if(value.id !==action.payload){
           return true
         }
         else{
           return false
         }
       }))
       console.log("actiondelete",products)
      return {...state ,cart:products}


      case INC_COUNT:
        let cartDetail = state.cart.map(( singleCartProd )=>{
          if(singleCartProd.id === action.payload){
            singleCartProd.count++;
          }
          return singleCartProd;
        });
        return {
          ...state,
          cart: cartDetail
        }
        case DEC_COUNT:
          console.log("actiondelete",action.payload)
          let cartDetail2 = state.cart.map(( singleCartProd )=>{
            if(singleCartProd.id === action.payload && singleCartProd.count >1){
              singleCartProd.count--;
            }
            return singleCartProd;
          });
          console.log("jskd" ,cartDetail2)
          return {
            ...state,
            cart: cartDetail2
          }
          // let cartDetail2 = state.cart.map(( singleCartProd )=>{
          //   if(singleCartProd.id === action.payload){
          //     singleCartProd.count++;
          //   }
          //   return singleCartProd;
          // });
          // return {
          //   ...state,
          //   cart: cartDetail2
          // }
        // console.log("action",action.payload)

        // console.log("actions",state)
      
        // // let selectedProducts=state.cart.find( element=>element.id ===action.payload );
        // let products2=state.cart.find((value=>{
        //   if(value.id ===action.payload){
        //     return true
        //   }
        //   else{
        //     return false
        //   }
        // }))
        // products2.count=products2.count +1;
        // console.log("mypro" ,products2)
        // let newstate3 =state.cart.concat(products2)

        
        // return {...state,cart:newstate3} 




    }
  
    return state;
  }
  
  export default CART_REDUCER;
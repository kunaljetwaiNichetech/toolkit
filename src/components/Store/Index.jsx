  import { createStore} from 'redux'

    const initialValue = {
        counter: 0
    }

    const reducer = (store=initialValue,action)=>{
        // this is action handeling using action and payload 
        if (action.type ==="INCREMENT")
        {
            //have to create new store 
            return {counter:store.counter + 1}
        }
        if (action.type ==="DECREMENT"){
            return {counter :store.counter - 1}
        }
        if (action.type === "ADDITION") {
          return { counter: store.counter +5 };
        }
        if (action.type === "Addval") {
          return { counter: store.counter+Number(action.payload.num) };
        }
        if (action.type === "Delval") {
          return { counter: store.counter.payload.val };
        }
        //cheacking the connection
        console.log('Working',action)

        return store
    }
    //this is to create the store and it require parameter for reducer
    const createstore =createStore(reducer)

    // to export the store we export and in provider accecc this to use globaly
export default createstore;
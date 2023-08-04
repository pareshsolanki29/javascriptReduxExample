const reducer =(state=[], action)=> {
    console.log('reducer', state, action)
    if(action.type==="ADD_USER"){
        return [...state, action.payload]
    }
    return state;
}

const store  = Redux.createStore(reducer)

store.subscribe(()=> {
   list.innerHTML = '';
   userInput.value= ''
   store.getState().forEach(user => {
    const li = document.createElement('li')
    li.textContent = user
    list.appendChild(li)
   });
})



const list = document.querySelector(".list");
const addUserBTN= document.querySelector(".addUser");
const userInput = document.querySelector(".userInput");


addUserBTN.addEventListener('click', ()=> {
    store.dispatch({type:"ADD_USER", payload:userInput.value})

})

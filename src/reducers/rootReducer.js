 
 let initState={
     users:[],
     posts:[
         {
             id: '1',
             title: 'Python', body: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant'
         },
         {
             id: '2',
             title: 'Java',
             body: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant'
         },
         {
             id: '3',
             title: 'JS',
             body: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant'
         }
     ]
 }
 
 let rootReducer=(state=initState,action)=>{
     if(action.type==='DELETE_POST'){
         let newPosts=state.posts.filter(post=>{
             return action.id!==post.id

         });
         return{
             ...state,
             posts:newPosts
         }
     }
return state;
 }

 export default rootReducer
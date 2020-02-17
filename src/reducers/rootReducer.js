 
 let initState={
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
return state;
 }

 export default rootReducer
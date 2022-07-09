// get button 
document.getElementById('comment-btn').addEventListener('click',function(){

    // get  comment value
   const comment =  document.getElementById('çomment-area');
   const commentValue = comment.value;
    //create element 
    const newElement = document.createElement('p');
   
    newElement.innerText = commentValue;
    // set the append child 
    const commentContainer = document.getElementById('comment-container');
    commentContainer.appendChild(newElement);
    comment.value = ''; 
});
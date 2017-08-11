console.log('Loaded!');
//submit comments
var commentInput = document.getElementById('combox');
var comment = commentInput.value;
var submit  = document.getElementById('submit_btn');
submit.onClick = function(){
    
    
    var comment = ["com1","com2","com3"];
    var list ='';
    for(i=0 ; i<=comment.length ; i++){
        list += '<li>' + comment[i] + '</li>';
        
    }
var ul = document.getElementById('comlist');
ul.innerHTML = list;
    
};
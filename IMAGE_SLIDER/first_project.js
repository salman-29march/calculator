
var image=['img1.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg','img6.jpg'];
var index=0;
var imgLen=image.length; 
var img=document.getElementById('img');

function next(){
     index++; 
     if(index >=imgLen){
           index=0;
           img.src=image[5];
           console.log(image[index]);
     }
     else{
          img.src=image[index];
          console.log(image[index]);
     }     
}
function prev(){
     index--;
     if(index<0){
         index=imgLen-1;
         img.src=image[index];
         console.log(image[index]);
     }else{
          img.src=image[index];
          console.log(image[index]);
     }
     
} 
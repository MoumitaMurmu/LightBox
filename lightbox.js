// function to include html popup code
function includePopupHtml(){
    let html = '<div id="vis-popup"><span id="close" onclick="closePopUp()"><img id="npop" src="lightbox/images/close.png" alt=""></span><img id="leftarrow" src="lightbox/images/left.png" alt=""><img id="rightarrow" src="lightbox/images/right.png" alt=""><img id="mainPopImage" src="images/mac.jpg" alt=""></div>';
let popdiv = document.createElement("div");
popdiv.innerHTML = html;
document.body.insertBefore(popdiv,document.body.firstChild);
}
// includePopupHtml();  call korle popup function ta visible hobe
// function to initiate plug in mane includePopupHtml ke initiate korarar jonno ekta function nichey create kora holo imagePopupInit().
//  code for pop up. mane kono image a select korle seta pop up hobe.
let img;
// current image ar index janar jonno variabe current create kora holo.
let current;
function imagePopupInit(target){
    // select all images with class="target"
img = document.getElementsByClassName(target);
console.log(img);
// add event listener on all selected images
for( var i=0; i<img.length; i++){
    // add cursor: pointer, on the selected images 
    img[i].style.cursor = 'pointer';
// add event listener
img[i].addEventListener("click", function(){
    document.getElementById("mainPopImage").src = this.src;
    document.getElementById("vis-popup").style.display = 'block';
    checkArrow();
})
}

 includePopupHtml();
 // add event listener for next button
 document.getElementById("rightarrow").addEventListener('click', function(){
    nextimg();
    
 });

// add event listener for prev button
document.getElementById("leftarrow").addEventListener('click', function(){
    previmg();
 });
 }
//  code for close button
function closePopUp(){
    document.getElementById("mainPopImage").src = "";
    document.getElementById("vis-popup").style.display = 'none';
}
// code for right(next image) button
  function nextimg(){
    // alert("prev"); 
    getCurrentImage();
    current++;
    document.getElementById("mainPopImage").src = this.src = img[current].src;
  }
// code for left(previous image) button
function previmg(){
    // alert("prev"); 
    getCurrentImage();
    current--;
    document.getElementById("mainPopImage").src = this.src = img[current].src;
}
// code for current image
function getCurrentImage(){
    for(var i=0; i<img.length; i++){
     if(img[i].src == document.getElementById("mainPopImage").src){
        current = i;
     }
    }
}
// code for first image and image ar left and right button hide kora.
function checkArrow(){
    getCurrentImage();
    if(current == "0"){
        document.getElementById("leftarrow").style.display = 'none';
        document.getElementById("rightarrow").style.display = 'block';

    }else if(current == img.length-1){
        document.getElementById("rightarrow").style.display = 'none';
        document.getElementById("leftarrow").style.display = 'block';
    }else{
        document.getElementById("leftarrow").style.display = 'block';
        document.getElementById("rightarrow").style.display = 'block';

 
    }
}

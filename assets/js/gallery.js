function showImg(posImg){
    var arrayImages = initArrayImages();
    var arrayLegends = initArrayLegends();
    var posCurrentImg = parseInt(document.getElementById("posCurrentImg").innerHTML);
    var indice = posCurrentImg + posImg;
    document.getElementById("modalImage").src = changeImgSrc(arrayImages[indice]);
    document.getElementById("modalLegend").innerHTML = arrayLegends[indice];                
}
function changeThumbnailSrc(img){
    var sourceUrl = "/assets/img/gallery/"+img+"-thumbnail.png";
    return sourceUrl;
}
function changeImgSrc(img){
    var sourceUrl = "/assets/img/gallery/"+img+".png";
    return sourceUrl;
}
function nextImages(){
    var arrayImages = initArrayImages();
    var arrayLegends = initArrayLegends();
    var posNextImages = 0;
    var posCurrentImg = parseInt(document.getElementById("posCurrentImg").innerHTML);
    if(posCurrentImg<9){posNextImages = posCurrentImg + 3;}else{posNextImages = 0;}
    document.getElementById("posCurrentImg").innerHTML = posNextImages;
    //alert(posNextImages);
    document.getElementById("srcImg1").src = changeThumbnailSrc(arrayImages[posNextImages]);
    document.getElementById("srcImg2").src = changeThumbnailSrc(arrayImages[posNextImages+1]);
    document.getElementById("srcImg3").src = changeThumbnailSrc(arrayImages[posNextImages+2]);
    document.getElementById("legendImg1").innerHTML = arrayLegends[posNextImages];
    document.getElementById("legendImg2").innerHTML = arrayLegends[posNextImages+1];
    document.getElementById("legendImg3").innerHTML = arrayLegends[posNextImages+2];
}
function initArrayImages(){
    var stringArrayImages=document.getElementById("arrayImages").innerHTML;
    var arrayImages = stringArrayImages.split(",");
    return arrayImages;
}
function initArrayLegends(){
    var stringArrayLegends=document.getElementById("arrayLegends").innerHTML;
    var arrayLegends = stringArrayLegends.split(",");
    return arrayLegends;
}
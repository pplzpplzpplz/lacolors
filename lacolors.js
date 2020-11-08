  // first wait for html structure to load THEN execute this JS
  window.onload = () => {

    var containerDiv = document.getElementById("container");
    // can paste from finder: 
    var allImgString = "IMG_5804.jpg,IMG_5712.jpg,IMG_5711.jpg,IMG_5709.jpg,IMG_5806.jpg,IMG_5708.jpg,IMG_5720.jpg,IMG_5748.jpg,IMG_5737.jpg,IMG_5749.jpg,IMG_5788.jpg,IMG_5771_alt.jpg,IMG_5721.jpg";
    let allImgArray = allImgString.split(',');


    // randomize array next 

    // when you put your mouse over items w the attribute:
    // onmouseover="showDivs(this)"
    function showDivs(x) {
      // DO THIS 
      x.style.height = "64px";
      x.style.width = "64px";
    }

    // when your mouse moves off of items w the attribute 
    // onmouseout="hideDivs(this)"
    function hideDivs(x) {
      // DO THIS 
      x.style.height = "32px";
      x.style.width = "32px";
    }
    

    var i;
    for (i = 0; i < allImgArray.length; i++) {
      var createIMG = document.createElement("IMG");

      createIMG.style.width = "300px";
      createIMG.style.height = "300px";

      createIMG.setAttribute(
        "src",
        "/images/" + allImgArray[i]
      );
      containerDiv.appendChild(createIMG);
    }



    // COLORTHIEF  
    const colorThief = new ColorThief();
    // find first img tag in html 
    const img = document.querySelector('img');

    const numColors = 10;
    // pull dominant color as RGB array
    var imgColor = colorThief.getPalette(img, numColors);



    for (i = 0; i < allImgArray.length; i++) {
      var div = document.createElement("div");
      div.style.width = "100px";
      div.style.height = "100px";
      div.style.background = "rgb(" + imgColor[i].toString() + ")";
      div.style.color = "white";
      div.innerHTML = "COLOR" + i;

      document.getElementById("main").appendChild(div);


      var colorBlockDiv = document.getElementById("colorBlock" + i);
      // colorBlockDiv.style.opacity = 0.2;

      // colorBlockDiv.style.background = "rgb(" + imgColor[i].toString() + ")";
    }

  }
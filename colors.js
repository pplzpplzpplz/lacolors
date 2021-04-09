// first wait for html structure to load THEN execute this JS
window.onload = () => {
  // COLORTHIEF  
  const numColors = 20;
  const colorThief = new ColorThief();
  // find all img tags in html 
  const allImgTagsArray = document.getElementsByTagName('img');
  var allImgColors = {};

  for (i = 0; i < allImgTagsArray.length; i++) {
    // pull dominant color as RGB array
    var imgColors = colorThief.getPalette(allImgTagsArray[i], numColors);
    // find id of the img element
    var imgId = allImgTagsArray[i].id;
    // add the colors into allImgColors Object, using id as the key value for each:
    allImgColors[imgId] = imgColors;

    allImgTagsArray[i].onclick = function() {
      var theseBlocks = generateBlocks(allImgColors[this.id]);
      setBlockDisplay(theseBlocks);
    };
  }
}

function generateBlocks(colors) {
  var colorBlocksWrap = document.createElement("DIV");
  for (i = 0; i < colors.length; i++) {
    var colorBlockDiv = document.createElement("DIV");
    colorBlockDiv.style.background = "rgb(" + colors[i] + ")";
    colorBlocksWrap.appendChild(colorBlockDiv);
  }
  return colorBlocksWrap;
}

function setBlockDisplay(colorElements) {
  var blocksContainer = document.getElementById('colorblocks');
  blocksContainer.innerHTML = "";
  blocksContainer.appendChild(colorElements);
}
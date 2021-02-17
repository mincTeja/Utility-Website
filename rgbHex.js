

  function getConvertedNumber(numberToBeConverted,fromNumberSytem,toNumberSystem=10){
    let convertedNumber=parseInt(numberToBeConverted, fromNumberSytem).toString(toNumberSystem);
    return convertedNumber;
  }
  function getHexToRgbConvertedObject(hexValue){
    let hexValuePairs = hexValue.match(/.{1,2}/g);
    let red = getConvertedNumber(hexValuePairs[0],16,10);
    let green = getConvertedNumber(hexValuePairs[1],16,10);
    let blue = getConvertedNumber(hexValuePairs[2],16,10);
    
    const rgbValues = {
      Red : red,
      Blue : blue,
      Green : green
    };
    return rgbValues;
  }

function getRgbToHexConvertedString(rgbValues){
    let convertedValue="#";
    for(let i=0;i<rgbValues.length;++i){
      let hex = getConvertedNumber(rgbValues[i],10,16);
       if(hex.length==1)
            hex="0"+hex;
      convertedValue+=hex;
    }
    
    return convertedValue;
  }

window.addEventListener('load',()=>{
    const hexValues = document.querySelector(".hexValue");
    const redValue = document.querySelector("#red");
    const greenValue = document.querySelector("#green");
    const blueValue = document.querySelector("#blue");
    const box = document.querySelector(".output-div");

    hexValues.addEventListener('change',()=>{
        const rgbValues=getHexToRgbConvertedObject(hexValues.value.substring(1,hexValues.value.length));
        redValue.value=rgbValues.Red;
        greenValue.value=rgbValues.Green;
        blueValue.value=rgbValues.Blue;
        box.style.backgroundColor = hexValues.value;
    });

    redValue.addEventListener('change',()=>{
        const rgbValues = [];
        rgbValues.push(redValue.value);
        rgbValues.push(greenValue.value);
        rgbValues.push(blueValue.value);
        hexValues.value = getRgbToHexConvertedString(rgbValues);
        console.log(rgbValues);
        box.style.backgroundColor = hexValues.value;
    });
    greenValue.addEventListener('change',()=>{
        const rgbValues = [];
        rgbValues.push(redValue.value);
        rgbValues.push(greenValue.value);
        rgbValues.push(blueValue.value);
        hexValues.value = getRgbToHexConvertedString(rgbValues);
        console.log(rgbValues);
        box.style.backgroundColor = hexValues.value;
    });
    blueValue.addEventListener('change',()=>{
        const rgbValues = [];
        rgbValues.push(redValue.value);
        rgbValues.push(greenValue.value);
        rgbValues.push(blueValue.value);
        hexValues.value = getRgbToHexConvertedString(rgbValues);
        console.log(rgbValues);
        box.style.backgroundColor = hexValues.value;
    });
});
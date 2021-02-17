function encodeURL(urlToBeEncoded){
    return encodeURIComponent(urlToBeEncoded);
  }

  function decodeURL(urlToBeEncoded){
    return decodeURIComponent(urlToBeEncoded);
  }

window.addEventListener('load',() => {
    const encode = document.querySelector(".encode");
    const decode = document.querySelector(".decode");
    const inputText = document.querySelector(".text-input");
    const outputText = document.querySelector(".text-output");
    encode.addEventListener('click',()=>{
        outputText.value = encodeURL(inputText.value);
    });
    decode.addEventListener('click',()=>{
        outputText.value = decodeURL(inputText.value);
    });
});


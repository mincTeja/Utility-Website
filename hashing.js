// const crypto = require('crypto');

function hashingString(algorithm,stringToBeHashed){
  
  const hashedString=crypto.createHash(algorithm).update(stringToBeHashed).digest('hex');
  return hashedString;
}


window.addEventListener('load',() => {
    const md5 = document.querySelector(".md5");
        const sha1 = document.querySelector(".sha1");
        const sha256 = document.querySelector(".sha256");
        const sha512 = document.querySelector(".sha512");
        const inputText = document.querySelector(".text-input");
        const outputText = document.querySelector(".text-output");
        md5.addEventListener('click',()=>{
            outputText.value = CryptoJS.MD5(inputText.value).toString(CryptoJS.enc.hex);
        });
        sha1.addEventListener('click',()=>{
            outputText.value = CryptoJS.SHA1(inputText.value).toString(CryptoJS.enc.hex);
        });
        sha256.addEventListener('click',()=>{
            outputText.value = CryptoJS.SHA256(inputText.value).toString(CryptoJS.enc.hex);
        });
        sha512.addEventListener('click',()=>{
            outputText.value = CryptoJS.SHA512(inputText.value).toString(CryptoJS.enc.hex);
        });
});


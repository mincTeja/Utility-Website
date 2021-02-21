window.addEventListener('load',()=>{
    const ipSection = document.querySelector(".ipaddress-section")
    fetch('https://api.ipify.org/?format=json').then(response => response.json()).then(json=> {
        const ip = json.ip.length>0 ? json.ip : "Please try again later";
        ipSection.innerHTML=ip; 
    });
});


fetch('home.html')
.then(res => res.text())
.then(text => {
    let oldelemf = document.querySelector("script#openpost");
    let newelemf = document.createElement("div");
    newelemf.innerHTML = text;
    oldelemf.parentNode.replaceChild(newelemf,oldelemf);
})

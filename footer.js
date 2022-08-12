

fetch('./footer.html')
.then(res => res.text())
.then(text => {
    let oldelemf = document.querySelector("script#replace_with_footer");
    let newelemf = document.createElement("div");
    newelemf.innerHTML = text;
    oldelemf.parentNode.replaceChild(newelemf,oldelemf);
})

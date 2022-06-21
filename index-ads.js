function loadAds() {
    this.multiAds();
    this.secAds();
    this.thirdAd();
}

function multiAds() {
    (function (s, u, z, p) {
        (s.src = u), s.setAttribute("data-zone", z), p.appendChild(s);
    })(
        document.createElement("script"),
        "https://inklinkor.com/tag.min.js",
        4729034,
        document.body || document.documentElement
    );
}
function secAds() {
    (function (d, z, s) {
        s.src = "//" + d + "/401/" + z;
        try {
            (document.body || document.documentElement).appendChild(s);
        } catch (e) { }
    })("eehuzaih.com", 4970316, document.createElement("script"));
}

function thirdAd() {
    try {
        document.body.innerHTML += `<iframe data-aa='2031954' src='//acceptable.a-ads.com/2031954' style='border:0px; padding:0; width:100%; height:100%; overflow:hidden; background-color: transparent;'></iframe>`;
    } catch (e) {
        console.log("thirdAd : " + e);
    }
}
function loadAds() {
    this.multiAds();
    this.secAds();
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

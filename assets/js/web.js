
function search (e) {
    if (e.keyCode == 13) {
        var search = document.getElementById("searchInput");

        if (!(search.value)) {
            return false;
        }

        window.location.href = "https://www.google.com/search?q=site%3Ablog.willdx.me%2Fwords+" + search.value;
        return false;
    }
}

function closeOther(ids, current) {
    ids.forEach(function (id) {
        if (id === current) {
            return
        }

        var x = document.getElementById(id);

        x.style.display = "none";
    })

}

function toggleById(ids, id) {
    closeOther(ids, id)

    var trigers = document.getElementById("triggers-wrapper")

    var current = trigers.getElementsByClassName(id)[0]

    var buttons = trigers.getElementsByClassName('button')

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active')
    }

    var x = document.getElementById(id);

    if (x.style.display === "none") {
        x.style.display = "block";
        current.classList.add("active");
    } else {
        x.style.display = "none";
        current.classList.remove("active");
    }
}

function toggleWechat () {
    var x = document.getElementById("wx");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function useWechat () {
    var wechat = document.getElementById("wechat");
    var alipay = document.getElementById("alipay");
    var wechatImage = document.getElementById("wechat-qrcode-image");
    var alipayImage = document.getElementById("alipay-qrcode-image");

    wechat.classList.add("active")
    alipay.classList.remove("active")

    wechatImage.style.display = "block"
    alipayImage.style.display = "none"
} 

function useAlipay () {
    var wechat = document.getElementById("wechat");
    var alipay = document.getElementById("alipay");
    var wechatImage = document.getElementById("wechat-qrcode-image");
    var alipayImage = document.getElementById("alipay-qrcode-image");

    alipay.classList.add("active")
    wechat.classList.remove("active")

    wechatImage.style.display = "none"
    alipayImage.style.display = "block"
} 

function displayDonation() {
    closeOther(wrappers, 'donation-wrapper')

    var x = document.getElementById('donation-wrapper');
    x.style.display = "block";
}

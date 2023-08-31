function acessGithub() {
    window.location.href = "https://github.com/NervousGroove"
}

function acessThor() {
    window.location.href = "https://programathor.com.br/users/224698"
}

window.addEventListener("DOMContentLoaded", function () {
    var age, ageInfo, ageSection;

    age = "𝟷𝟻";

    ageInfo = document.createElement("p");
    ageInfo.textContent = age + " 𝔄𝔫𝔬𝔰";

    ageSection = document.getElementById("idade");
    ageSection.appendChild(ageInfo);
});





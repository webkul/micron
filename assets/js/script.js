document.addEventListener("DOMContentLoaded", function () {
    var currentVersion = "1.1.3";
    var getVersion = document.querySelectorAll(".current-version");
    if (getVersion != undefined && getVersion != null) {
        for (var i = 0; i < getVersion.length; i++) {
            getVersion[i].textContent = currentVersion;
        }
    }
});

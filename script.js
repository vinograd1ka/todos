(function search(){
    var addButton = document.getElementById("add-button");
    var nameInput = document.getElementById("name-input");
    var list = document.getElementById("todos-list");

    var container = document.getElementsByClassName("search-container");
    addButton.addEventListener('click', function () {

        var div = document.createElement("div");
        div.onclick = function() {
            var check = div.getElementsByClassName('check')[0]
            var line = div.getElementsByClassName("text")[0]

            if (check.style.display !== 'none') {
                check.style.display = 'none';
                line.style.textDecoration = 'none';
            }
            else {
                check.style.display = 'block';
                line.style.textDecoration = 'line-through';
            }
        };

        div.className = "search-container"
        div.innerHTML =
            '<div class="search-header text">'+nameInput.value+'<i class="fas fa-check icon-search check"></i></div>' +
            '<div class="line"></div>'
        list.appendChild(div);
    });

    document.getElementById("add-button").onclick = function(e) {
        document.getElementById("name-input").value = "";
    }





})();


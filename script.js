(function search(){
    var addButton = document.getElementById("add-button");
    var nameInput = document.getElementById("name-input");
    var list = document.getElementById("todos-list");


    addButton.addEventListener('click', function () {

        var div = document.createElement("div");

        div.onclick = function() {

            if(div.classList.contains('complete')){
                //var check = div.getElementsByClassName('check')[0]
                div.classList.remove("complete");
                //check.style.display = 'none';
            }

            else{
                div.classList.add('complete')
                //check.style.display = 'block';
            }
        };

        div.className = "search-container"
        div.innerHTML =
            '<div class="search-header">'+nameInput.value+'<i class="fas fa-check check"></i></div>' +
            '<div class="line"></div>'
        list.appendChild(div);
    });

    document.getElementById("add-button").onclick = function(e) {
        document.getElementById("name-input").value = "";
    }

})();
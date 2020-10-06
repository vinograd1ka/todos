(function search(){
    var addButton = document.getElementById("add-button");
    var nameInput = document.getElementById("name-input");
    var list = document.getElementById("todos-list");
    var countingEl = document.getElementById('counting');
    var count = 0;
    var deleteButton = document.getElementById('button')
    addButton.addEventListener('click', function () {

        var div = document.createElement("div");

        div.onclick = function() {

            if(div.classList.contains('complete')){
                //var check = div.getElementsByClassName('check')[0]
                //check.style.display = 'none';
                div.classList.remove("complete");
                count--
                countingEl.innerHTML =
                    '<div class="counting-header" id="counting">Выбранно: '+count+' </div>'
            }

            else{
                //check.style.display = 'block';
                div.classList.add('complete');
                count++
                countingEl.innerHTML =
                    '<div class="counting-header" id="counting">Выбранно: '+count+' </div>'
            }
        };
        deleteButton.onclick = function() {
            var addComplete = document.querySelectorAll('.complete');
            for (let i = 0; i < addComplete.length; i++) {
                count--;
                addComplete[i].style.display = 'none';

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
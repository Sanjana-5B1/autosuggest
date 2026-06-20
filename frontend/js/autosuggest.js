//https://autosuggest-backend.onrender.com/api/autosuggest?q=a&weighted=true&algorithm=trie&limit=8
var API_URL = "https://autosuggest-backend.onrender.com/api/autosuggest";
var searchbar = document.getElementById("search-bar");
var searchSuggestions = document.getElementById("search-suggestions");
    //get user type data
    //use user type data in the query int he api call.
    //api call
    // Append all the dsearch suggestions to div tag in ui.
searchbar.addEventListener("input",function(){
    var query = searchbar.value.trim();
    console.log(query);
    fetchSuggestions(query);
})

function fetchSuggestions(query){
    var fullAPI = API_URL + "?q=" + query + "&weighted=true&algorithm=trie&limit=8";
    fetch(fullAPI)
        .then(function(res){
            return res.json();
        })
        .then(function(res){
            //console.log(query);
            showSuggestions(res);
            //return;
        })
        .catch(function(err){
            console.log("Error : "+err);
        })


}

function showSuggestions(data){
    var values = data.results;
    if(data.count == 0){
        searchSuggestions.innerHTML = "<div>No Matching results found</div>"
    }
    else{
        var htmlString = "";
        for(var i = 0;i < values.length;i++){
            //htmlString += "<div><span class = 'suggestion-item'>" + values[i].text + "</span><span class = 'item-weight'></span></div>";
            htmlString+="<div>"+values[i].text+"</div>";
        }
        searchSuggestions.innerHTML = htmlString;
    }
}










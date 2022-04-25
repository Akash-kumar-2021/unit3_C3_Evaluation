// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
// https://www.omdbapi.com/?s=avenger&apikey=e5eb4187

let movies_div = document.createElement("div");
let id ;

async function searchMovies()
{
    try{
        const search = document.getElementById("search").value ;
        console.log(search)

        const res = await fetch(`http://www.omdbapi.com/?apikey=e5eb4187=${search}`);
        
        const data = await res.json();
        
        const movies = data.Search;
        
        return movies ;
    }
    catch(err)
    {
      console.log("Err:",err);
    }
};
// append data in DOM
function appendMovies(data)
{
    movies_div = null ;
    data.forEach(function(el)
    {
        let p = document.createElement("p");
        p.innerText = el.Title;
        movies_div.append(p);
    });
}

async function main()
{
    let data = await searchMovies();
    if(data === undefined)
    {
        return false ;
    }
    appendMovies(data);
}

// debouncing

function debounce(func,delay)
{
    if(id)
    {
        clearTimeout(id);
    }
    id = setTimeout(function()
    {
        func();
    },delay);
}

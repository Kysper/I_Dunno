document.getElementById("recipe-search").addEventListener("click", e => {
  let search = document.getElementById("find-recipe").value;
  if (search != "") {
    axios.get(`/search-recipe`);
    
    axios.get(`/search-recipe?search=${search}`).then(response => {
      try {
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    });
    document.getElementById("find-recipe").value = "";
  }
  e.preventDefault();
});

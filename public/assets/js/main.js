
document.addEventListener("click", e => {
  let search = document.getElementById("find-recipe").value;
  e.preventDefault()
  if (search != "") {
    axios.get(`/search-recipe`);
    
    axios.get(`/search-recipe?search=${search}`).then(response => {
      try {
      } catch (error) {
        console.log(error);
      }
    });
  }
  document.getElementById("find-recipe").value = "";
});

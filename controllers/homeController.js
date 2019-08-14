

document.getElementsByClassName('recipe-list').insertAdjacentHtml('beforeend',`<ul> ID:${recipe.id}<br><br>
Title:${recipe.title}<br><br>
 Category:${recipe.category}<br><br>
 Area:${recipe.area}<br><br>
 Instructions:<p>${recipe.instructions}</p>
 <img src='${recipe.imageUrl}'/><br><br>
 <a href='${recipe.videoUrl}'>YouTube</a><br></ul>`)
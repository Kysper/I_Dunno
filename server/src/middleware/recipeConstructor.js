 
function RecipeConstructor(id,title,category,area,instructions,imageUrl,videoUrl){
          this.id = id
          this.title = title
          this.category = category
          this.area = area
          this.instructions = instructions
          this.imageUrl = imageUrl
          this.videoUrl = videoUrl
        }


        module.exports = RecipeConstructor;
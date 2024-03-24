function renderBlogs (){
    const blog=JSON.parse(localStorage.getItem("blogs"))||[]
    const blogsEl=document.querySelector(".guide")

    blogsEl.innerHTML=""

    for (let i=0; i<blog.length; i++){
        const cardEl=document.createElement("div")
        const titleEl=document.createElement("h3")
        const contentEl=document.createElement ("p")
        const hrEl=document.createElement("hr")
        const userEl=document.createElement ("p")

        cardEl.classList.add("card")
        hrEl.classList.add("title")

        titleEl.textContent=blog[i].title
        contentEl.textContent=blog[i].content
        userEl.textContent=`posted by: ${blog[i].username}`
        
        cardEl.append(titleEl,hrEl,contentEl,userEl)
        blogsEl.append(cardEl)
    }
}
        renderBlogs ()

        document.querySelector(".backp2").addEventListener("click",function(){
            location.href="index.html"
        })
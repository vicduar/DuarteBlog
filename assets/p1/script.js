



  function handleSubmit(){
    const username=document.querySelector("#username").value.trim()

    const title=document.querySelector("#title").value.trim()

    const content=document.querySelector("#content").value.trim()

    if(!username||!title||!content)   {
      const errorEl=document.querySelector("#error");
      errorEl.textContent="Please complete the form."
      
      setTimeout(() => {
        errorEl.textContent=""
      }, 3000);
      return
    }
    const data={
      username:username, title:title, content:content

    }
    handleLocalStorage(data)
    location.href="blog.html"
  }

  function handleLocalStorage(data){
      const blog=JSON.parse(localStorage.getItem("blogs"))||[]
      blog.push(data)
      localStorage.setItem("blogs",JSON.stringify(blog))

  }

  document.querySelector("#submit-btn").addEventListener("click", handleSubmit)


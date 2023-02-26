import {DOM} from "./DOM.js"

function buttonClick() {
    DOM.button.forEach((button) => { 
        button.addEventListener("click", function() {
            event.preventDefault()
            let URL = ""
            if (button.textContent==="Action") {
                URL = `https://api.jikan.moe/v4/anime?genres=1&order_by=score&sort=desc`
            }
            else if (button.textContent==="Adventure") {
                URL = `https://api.jikan.moe/v4/anime?genres=2&order_by=score&sort=desc`
            }
            else if (button.textContent="Psychological") {
                URL = `https://api.jikan.moe/v4/anime?genres=40&order_by=score&sort=desc`
            }
            async function getData(URL) {
                try {
                    const response = await fetch(URL)
                    if (response.status < 200 || response.status > 299) {
                        console.log(response.status)
                        throw error(response)
                    } else {
                        const data = await response.json()
                        console.log(data)
                        data.data.forEach((anime) => {
                            DOM.mangaSpace.insertAdjacentHTML(
                                "afterbegin",
                                `<div class="card">
                                    <h2>${anime.title}</h2>
                                    <img src="${anime.images.jpg.large_image_url}" alt="The popular anime ${anime.title}"
                                </div>`
                            ) 
                        })
                    }
                }
                catch (error) {
                    console.log(error)
                    console.log("womp womp")
                    DOM.mangaSpace.textContent = "Sorry not available"
                }
            } 
            getData(URL)
        })
        console.log("bruh")}  
    )
        
}


buttonClick()





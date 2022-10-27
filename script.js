const actionRating = document.querySelectorAll(".rating")
const submitBtn = document.getElementById("submit-btn")
const ratingContainer = document.getElementById("rating-container")
const thankYouContainer = document.getElementById("thank-you-container")
const changeRating = document.getElementById("change-rating")
let number = null

actionRating.forEach((rating) => {
    rating.addEventListener("click", (e)=>{
        actionRating.forEach(rate => rate.classList.remove("active"))
        e.target.classList.toggle("active")

        number = e.target.textContent
        changeRating.textContent = number
    })
})

submitBtn.addEventListener("click", ()=>{
    if(number){
        ratingContainer.style.display = "none"
        thankYouContainer.style.display = "block"
    }
})
   
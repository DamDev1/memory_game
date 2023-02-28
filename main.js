const section = document.querySelector('section')
const lifeCount = document.querySelector(".playerLife")

let playerLiveCount = 6;
lifeCount.innerHTML = playerLiveCount

const getData = () => [
    {imagSrc: "./image/image1.jpg", name: "image1"},
    {imagSrc: "./image/image2.jpg", name: "image2"},
    {imagSrc: "./image/image3.jpg", name: "image3"},
    {imagSrc: "./image/image4.jpg", name: "image4"},
    {imagSrc: "./image/image5.jpg", name: "image5"},
    {imagSrc: "./image/image6.jpg", name: "image6"},
    {imagSrc: "./image/image7.jpg", name: "image7"},
    {imagSrc: "./image/image1.jpg", name: "image1"},
    {imagSrc: "./image/image2.jpg", name: "image2"},
    {imagSrc: "./image/image3.jpg", name: "image3"},
    {imagSrc: "./image/image4.jpg", name: "image4"},
    {imagSrc: "./image/image5.jpg", name: "image5"},
    {imagSrc: "./image/image6.jpg", name: "image6"},
    {imagSrc: "./image/image7.jpg", name: "image7"}
];


// randomize the image
const randomize = () =>{
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5)
    return cardData;
}

const cardGenerator =() =>{
    const cardData =  randomize();

    cardData.forEach((item) =>{
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div")


        //giving the div class name
        card.className = "card";
        face.classList = "face";
        back.classList = "back";

        face.src = item.imagSrc;
        card.setAttribute("name", item.name)
        //appending the child to section 
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener("click", (e) =>{
            card.classList.toggle("toggleCard")
            checkCards(e);
        })
    })
}

//check card
const checkCards =(e)=>{
    console.log(e)
    const clickCard = e.target;
    clickCard.classList.add("flipped")
    const flippedCards = document.querySelectorAll(".flipped")
    const toggleCard = document.querySelectorAll(".toggleCard")
    console.log(flippedCards)
    //logic
    if(flippedCards.length === 2){
        if(flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")){
            flippedCards.forEach((card) =>{
                card.classList.remove("flipped");
                card.style.pointerEvents = "none"
            })
        }else{
            flippedCards.forEach((card) =>{
                card.classList.remove("flipped");
                setTimeout(() => {
                    card.classList.remove("toggleCard")
                }, 1000);
            })
            playerLiveCount--;
            lifeCount.innerHTML = playerLiveCount;

            if(playerLiveCount === 0){
                restest("you loss motherfucker try again fatherfucker")
            }
        }
    }

    if(toggleCard.length === 12){
        restest("Thank your God, you won ass")
    }
}


const restest = (text) =>{
    let cardData =randomize();
    let face = document.querySelectorAll(".face");
    let cards =  document.querySelectorAll(".card");
    section.style.pointerEvents = "none";
    cardData.forEach((item, index) =>{
        cards[index].classList.remove("toggleCard");

        //randomize
        setTimeout(() =>{
            cards[index].style.pointerEvents = "all";
            face[index].src = item.imagSrc;
            cards[index].setAttribute("name", item.name)
            section.style.pointerEvents = "all";
        },1000)
    })
    playerLiveCount = 6;
    lifeCount.innerHTML = playerLiveCount;
    setTimeout(() =>window.alert(text), 100)

}

cardGenerator()
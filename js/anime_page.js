document.addEventListener("DOMContentLoaded",()=>{
    console.log(200);
    let date, pub, article_section, stock_article, btn_article
        date = ({
            myDate : new Date().getFullYear(),
            target : document.querySelector("footer p")
            
        })
        /* bouton pour voir les articles */
        btn_article =document.querySelector(".btn-add")
        date.target.innerText += date.myDate;
        console.log(typeof date)

        pub = [
            {
                titre: "Vanitas no Carte",
                date: "release date: Jul, 2021",
                msg: "There once lived a vampire known as Vanitas, hated by his own kind for being born under a blue full moon, as most arise on the night of a crimson one. Afraid and alone, he created the Book of Vanitas, a cursed grimoire that would one day take his vengeance on all vampires; this is how the story goes at least.",
                img: "./asset/vanitasNoCarte.jpeg"
            },
            {
                titre: "Platinum End",
                date: "release date: Oct, 2021",
                msg: "After the death of his parents, a young Mirai Kakehashi is left in the care of his abusive relatives. Since then, he has become gloomy and depressed, leading him to attempt suicide on the evening of his middle school graduation. Mirai, however, is saved by a pure white girl named Nasse who introduces herself as a guardian angel wishing to give him happiness—by granting him supernatural powers and a chance to become the new God.",
                img: "./asset/PlatiniumEnd.jpg"
            },
            {
                titre: "Record of Ragnarok",
                date: "release date: Jun, 2021",
                msg: "High above the realm of man, the gods of the world have convened to decide on a single matter: the continued existence of mankind. Under the head of Zeus, the deities of Ancient Greece, Norse mythology, and Hinduism, among others, call assembly every one thousand years to decide the fate of humanity. Because of their unrelenting abuse toward each other and the planet, this time the gods vote unanimously in favor of ending the human race.",
                img: "./asset/recordOfRagnarok.jpg"
            }
        ]
        article_section = document.querySelector(".mes_articles");
        stock_article = "";
        for(data of pub){
            console.log(
                `${data.titre} ${data.date} ${data.msg} ${data.image} ${data.imoji}`
            )
            stock_article += `
                            <figure>
                                <img src="${data.img}" alt="image">
                                <figcaption>
                                    <h2>${data.titre}</h2>
                                    <time datetime="2021-04-10T20:00:00">${data.date}</time>
                                    <p>${data.msg}<span aria-hidden="true">${data.imoji}</span></p>
                                </figcaption>
                            </figure>`
            }
     
        btn_article.addEventListener("click",function(){
            article_section.innerHTML = stock_article;
            article_section.classList.toggle("article_on");
           this.classList.toggle("btn-remove");
        })




})

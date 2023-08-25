const quoteText = document.querySelector(".quote");
authorName = document.querySelector(".author .name");
quoteBtn = document.querySelector("button");
soundBtn = document.querySelector(".sound");
copyBtn = document.querySelector(".copy");
twitterBtn = document.querySelector(".twitter");


//random quote function
function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote......";
    //fetching random quotes/data from the API and parsing it into javascript object
    fetch("https://api.quotable.io/random").then(res=> res.json()).then(result=>{
        console.log(result)
        quoteText.innerText= result.content;
        authorName.innerText= result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");

    });
  
}
soundBtn.addEventListener("click", ()=>{
    //the speechSynthesisUtterance is a web speech api that represents a speech request
   let utterance = new SpeechSynthesisUtterance('${quoteText.innerText} by ${authorName.innerTex}');
   speechSynthesis.speech(utterance); //speech method of speechSynthesis speech the utterance
});

   copyBtn.addEventListener("click",()=>{
    // coping the quote text on copybtn click
    // writeText() property writes the specified text string to the system clipboard.
    navigator.clickboard.writeText(quoteText.innerText);
   });

       quoteBtn.addEventListener("click",randomQuote);
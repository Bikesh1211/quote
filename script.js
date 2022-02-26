let quotes;
let quotesData;
let quoteText;
let quoteAuthor
const quoteData = document.getElementById('quote-text')
const quoteAuthorName = document.getElementById('quote-author')
const newQuoteBtn = document.getElementById('new-quote-btn')
const twitterBtn = document.getElementById('twitter-btn')


const getNewQuote = () =>{
    let randomNum = Math.floor(Math.random()*1643)

    quotesData = quotes[randomNum]    
    
    quoteText = `"${quotesData.text}"`
    quoteAuthor = `By ${quotesData.author}`
    quoteAuthorName.innerHTML = quoteAuthor
    quoteData.innerHTML = quoteText
    // console.log(quoteText);

}

const tweetNow = () =>{
    let tweetPost = `https://twitter.com/intent/tweet?text=${quoteText} #quote #codebks_ `
    window.open(tweetPost)
}
tweetNow()
const getQuote = async () =>{
    const quoteApi = 'https://type.fit/api/quotes'
    try{
        let data = await fetch(quoteApi)
        quotes = await data.json()
        getNewQuote()
    }
    catch (error){

    }
}

newQuoteBtn.addEventListener('click',getNewQuote)
twitterBtn.addEventListener('click',tweetNow)
getQuote()

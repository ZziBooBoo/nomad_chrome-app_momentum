const quotes = [
    {
        quote: `"There is nothing in the world so irresistibly contagious as laughter and good humor"`,
        author: "Charles Dickens"
    },
    {
        quote: `"Love all, trust a few. Do wrong to none."`,
        author: "William Shakespeare"
    },
    {
        quote: `"The nice thing about egotists is that they don't talk about other people."`,
        author: "Lucille S. Harper"
    },
    {
        quote: `"A man's character may be learned from the adjectives which he habitually uses in conversation."`,
        author: "Mark Twain"
    },
    {
        quote: `"He has all the virtues I dislike and none of the vices I admire."`,
        author: "Winston Churchill"
    },
    {
        quote: `"Our remedies oft in ourselves do lie."`,
        author: "Shakespeare"
    },
    {
        quote: `"Golf is a good walk spoiled."`,
        author: "Mark Twain"
    },
    {
        quote: `"Marriage is the only adventure open to the cowardly"`,
        author: "Voltaire"
    },
    {
        quote: `"Be slow to fall into friendship; but when thou art in, continue firm & constant.."`,
        author: "Socrates"
    },
    {
        quote: `"The keenest sorrow is to recognize ourselves as the sole cause of all our adversities."`,
        author: "Sophocles"
    }
]


const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//console.log(randomNum);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


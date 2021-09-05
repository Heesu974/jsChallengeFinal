const quotes = [
    {
        quote: "Confidence is contagious. So is lack of confidence.",
        author: "Vince Lombardi"
    },
    {
        quote: "Shallow person believe in luck, Strong person believe in cause and effect.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "Do not follow where the path may lead. Go instead where there is no path and leave a trail",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "As I grow older, I pay less attention to what people say. I just watch what they do",
        author: "Andrew Carnegie"
    },
    {
        quote: "Choose a job you love, and you will never have to work a day in your life",
        author: "공자"
    },
    {
        quote: "Only those who date to fail greatly can ever achieve greatly",
        author: "Jhon F. Kennedy"
    },
    {
        quote: "It always seems impossible until its done",
        author: "Nelson Mandela"
    },
    {
        quote: "Pain is temporary. Qutting lasts forever",
        author: "Lance Amstrong"
    },
    {
        quote: "A person who never made a mistake never tried anything new",
        author: "Albert Einstein"
    },
    {
        quote: "Other man's faults are before our eyes, our own behind our back",
        author: "Seneca"
    }
]

const randomQuote = document.querySelector("#random-quote");
const randomAuthor = document.querySelector("#random-author");

function getRandom(min, max) {
    min = 0;
    max = quotes.length;
    return Math.floor(Math.random() * (max - min + 1) + min);

}
const getRandomOrder = quotes[getRandom()];
randomQuote.innerText = getRandomOrder.quote;
randomAuthor.innerText = getRandomOrder.author;




console.log(typeof randomQuote.innerText)
console.log(quotes[1].quote)

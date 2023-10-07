function square(number)
{
    return number * number;
}

// function getQuestion()
// {
//     let qst = document.getElementById('question');
// }
let qst = document.getElementById('question');

var random = Math.random();

document.write("<h1>javascriptから喋ってます</h1>");
var a = 2;
var b = square(a);

document.write("<h1>");
if (random <= 0.5)
{
    document.write(a + ", ");
    document.write(random);
}
else
{
    document.write(b + ", ");
    document.write(random);
}

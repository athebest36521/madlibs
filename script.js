alert("WTF ALREADY, not even 3 SECONDS have passed!!!");
alert("This page is ALSO not ready!!!");
alert("DON'T YOU DARE PROCEED");
let username = prompt('WHAT IS YOUR NAME?!');
let userFavColor = prompt('What is your favorite color?');
let userQuest = prompt('What is your quest?');
let swallowAirSpeed = prompt('What is the air speed of an unlaiden swallow?');
console.log(userName);


let myStory = `

<p> Hello ${userName}. Answer me these questions <span class='loud'>three</span>, and the 
other side you'll see.</p>

<p> I see you have already answered, so your quest is to ${userQuest}.
</p>`;

console.log(myStory);

document.getElementById('story').innerText = myStory;
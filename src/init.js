// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice
const details = {
    firstName: 'Raquel', 
    lastName: 'Matos',
    jobTitle: 'Engagement Manager', 
    homeOffice: 'London, EMEA',
    aboutMe: 'My name is Raquel and I’m 31 years old. I was born in Portugal in the beautiful city of Lisbon. I moved to London to challenge myself in learning a new culture and a new language. Why this challenge? I love challenges and I can always learn and grow from them! I’m very passionate about my work and let’s say that I’m a workaholic (trying to improve that – another challenge! – by discovering new passions and do what makes me happy: learn new things, spend time with my family and friends and, of course, travel). Want to know more about me? Just keep reading!'
};

// using jQuery and the object above, display the information as the appropriate button is clicked

$(document).ready(() => {
  $('.buttons button').on('click', (event) => {
    if($('.answer').text() === details[event.currentTarget.id]) {
      $('.answer').text('')
    } else {
      $('.answer').text(details[event.currentTarget.id]);
    }
  })
});


// Is this correct?


// $.getJSON("http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=7289e9613cb8f800099af227a5133275",function(json){
 // $('.weather').text(json);
 // const weatherResult = $.parseJSON(json);
// })

$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=London&APPID=7289e9613cb8f800099af227a5133275",function(data){
  $('.location').text(data.name);
  $('.temperature').text(parseInt(data.main.temp - 273.15, 10));
 })
 
 
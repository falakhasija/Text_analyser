let textArea=document.querySelector('#text');
let text=null;
let data={
    words:0,
    sentences:0,
    spaces:0,
    vowels:0,
    consonants:0,
    digits:0,
    lowercase:0,
    uppercase:0
};
const findlength= (item) => (item== null ? 0 : item.length);
const setText =() => {
    text=textArea.value;
    if(text!=null)
    {
        data.words=findlength(text.match (/[a-zA-Z]+/g));
        data.sentences=findlength(text.match(/\056/g));
        data.spaces = findlength(text.match(/\s/g));
        data.vowels = findlength(text.match(/[aeiou]/gi));
        data.consonants = findlength(text.match(/[bcdfghjklmnpqrstvwxyz]/gi));
        data.digits = findlength(text.match(/\d/g));
        data.uppercase = findlength(text.match(/[A-Z]/g));
        data.lowercase = findlength(text.match(/[a-z]/g));
    }
    localStorage.setItem("data", JSON.stringify(data));
    window.location = "info.html";
};
const getData = () => {
    return JSON.parse(localStorage.getItem("data"));
  };
  
  const showData = () => {
    let data = getData();
    let htmlContent = "";
    for (item in data) {
      htmlContent += `<div class="box">
          <h2>${data[item]}</h2>
          <p>${item}</p>
        </div>`;
    }
    document.querySelector(".info-wrapper").innerHTML = htmlContent;
  };
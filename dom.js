document.getElementById()

document.getElementsByClassName()

document.getElementsByTagName()

document.querySelector()

document.querySelectorAll()


/* -------------------------------------------------------------------- */

// Examine the Document Object

console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.images);
console.log(document.head);
console.log(documment.all);
console.log(document.images);
console.log(document.link);
console.log(document.forms[0]);

/* ----------------------------------------------------------------------- */


//Get Elements by Id

  var headerTitle =document.getElementById('header-title');
  console.log(document.getElementById('header-title'));
  console.log(headerTitle);


/* ----------------------------------------------------------------------- */
//To change text content, see below

  //var headerTitle = console.log(document.getElementById('header-title'));


   var headerTitle = document.getElementById("header-title");
   headerTitle.textContent = "hello";
   headerTitle.textContent = "alo";
   console.log(headerTitle);



/* ------------------------------------------------------------------------------------------------- */
 // To insert an h3 tag into the id of 'header-title' i.e. the heading of the doc//

  var headerTitle = document.getElementById('header-title');
  headerTitle.innerHTML = '<h3>Salaam!!</h3>';

   //The above changes the heading title from 'Items in a list' to 'Salaam!!'
/* ------------------------------------------------------------------------- */
//To change CSS styles

  var headerTitle = document.getElementById('header-title');
  headerTitle.style.borderBottom = 'solid 3px #000';

 //N.B: The CSS property of 'border-bottom' changes to 'borderBottom' in the DOM for Js//

/* -------------------------------------------------------------------------------- */
  //To put a border to the bottom of the header

 var Header = document.getElementById('main-header');
  Header.style.borderBottom = 'solid 3px #000';

/* -------------------------------------------------------------------------------------------- */
//Get elements by class name

var items = document.getElementsByClassName('list-group-item');
 console.log(items);
 console.log(items[3]);

//Below gets item (array of [n] where n = 'number') and changes its title

 var items =document.getElementsByClassName('list-group-item');
items[0].textContent = "React";
items[1].textContent = "Angular";
items[2].textContent = "Backbone";
items[3].textContent = "Laravel";
items[4].textContent = "Vue";


 //Changing the styles of the list items
 var items =document.getElementsByClassName('list-group-item');

 //changing the titles of the list-group
 items[0].textContent = "JavaScript";
 items[1].textContent = "PHP";
 items[2].textContent = "C++";
 items[3].textContent = "Python";
 items[4].textContent = "Java";


 //changing font weight to bold of first item
   items[0].style.fontWeight = 'bold';

//changing the background colour of the third item
  items[2].style.backgroundColor ='#ff00ff';


//setting all backgrounds to a grey colour
for(var i=0; i < items.length; i++){
  //current iteration
  items[i].style.backgroundColor = 'grey';
}
/* ---------------------------------------------------------------------------- */

//Get Elements by Tag Name

var li =document.getElementsByTagName('li');
console.log(li);
console.log(li[i]);


//changing the titles of the list-group
li[0].textContent = 'JavaScript';
li[1].textContent = 'PHP';
li[2].textContent = 'C++';
li[3].textContent = 'Python';
li[4].textContent = 'Java';


for(var i=0; i < li.length; i++){
  //current iteration
 li[i].style.backgroundColor = 'green';
}


/* ------------------------------------------------------- */

//Query Selector
//Works similar to jQuery
//Can use any CSS Selector
//Replace 'document.querySelector' with '$' and it will be jQuery
/* If there are more than two elements of the same type,
'querySelector' will only select the first one */


 var card = document.querySelector('.card');
card.style.border = 'solid #000 2px';

var input = document.querySelector('input');
input.value = 'Enter nothing here...';

var item = document.querySelector('.list-group-item');
//This will only apply to the first list only
item.style.color= '#ff0ff0';

//To get the last item
var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color= 'aqua';

//To get the second item
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = '#fff000';

/* ------------------------------------------------------------------ */


//Query Selector All
//Grabs all of same value

var titles = document.querySelectorAll('.title');
console.log(titles);

titles[0].textContent ='Insert Coin';

//Make alternate background colours on odd numbered list items
var oddList = document.querySelectorAll('li:nth-child(odd)');

//Make alternate background colours on odd numbered list items
var evenList = document.querySelectorAll('li:nth-child(even)');


for(var i=0; i < oddList.length; i++){
   oddList[i].style.backgroundColor = 'tomato';
   oddList[i].style.color = '#fff';
}


for(var i=0; i < evenList.length; i++){
   evenList[i].style.backgroundColor = 'purple';
   evenList[i].style.color = '#fff';
}

/* -------------------------------------------------------------------------- */


/* --------------Traversing the DOM --------------------------------------- */

//That is moving up and down the DOM


/* -----------------------Parents----------------------------------- */

 var itemList = document.querySelector('#items');

//parentNode method
  console.log(itemList.parentNode);

 itemList.parentNode.style.backgroundColor ='#f5f';
  console.log(itemList.parentNode.parentNode);
  /* ------------------------------------------------------------------- */

//parentElement

var itemList = document.querySelector('#items');
  console.log(itemList.parentElement);

 itemList.parentElement.style.backgroundColor ='#f5f';
  console.log(itemList.parentElement.parentElement);
  /* ------------------------------------------------------

  /* ----------------Children---------------------------------------- */

  //childNodes
  // console.log(itemList.childNodes);

  //childrenNodes
  //console.log(itemList.children);
  //console.log(itemList[1]);

  //changing background colour of the children
  itemList.children[1].style.backgroundColor = 'rgb(161, 24, 208)';
  itemList.children[1].style.color = '#fff';

   /* ----------------------------------------------------------- */

   //First child property(not recommended)
   //console.log(itemList.firstChild);

   //First Element child property
   console.log(itemList.firstElementChild);
   //Changing text content
   itemList.firstElementChild.textContent = 'Changed Text';
   /* ----------------------------------------------------------------------- */

   //Last child & Element child

    console.log(itemList.lastChild);
    console.log(itemList.lasElementChild);

   //Changing text content
   itemList.lastElementChild.textContent = 'Changed Text';


   /* ---------------------Siblings---------------------------- */


 //Next Sibling
  console.log(itemList.nextSibling);

 //Next Element Sibling
 console.log(itemList.nextElementSibling);
 //Returns null since none exist


 ///Previous Sibling
 console.log(itemList.previousSibling);

 //Previous Element Sibling
 console.log(itemList.previousElementSibling);

 //changing colour
 itemList.previousElementSibling.style.color ='#a33844';


 /* ----------------------------------------------------------- */


 /* ------------------Creating DOM Elements-------------------- */

 //create Element
 //Creating a div
 var newDiv = document.createElement('div');
 console.log(newDiv);

 //adding a class name to the div
 newDiv.className ='new-div';
  console.log(newDiv);

  //Adding an id to the div
  newDiv.id = 'div-id';
  console.log(newDiv);

  //setting an attribute
  newDiv.setAttribute('title','Hello Div');
  console.log(newDiv);

  //creating a text node
  var divTextNode = document.createTextNode('ZamCybermage');

  //Adding the text to the div
  newDiv.appendChild(divTextNode);
  console.log(newDiv);

  //Adding it to the container
  var container = document.querySelector('.container');
  var h1 = document.querySelector('h1');
  container.insertBefore(newDiv,h1);

  //changing font size
  newDiv.style.fontSize = '50px';

  /* ========================================================== */

  //------------------Adding Events---------------------------

  //Clicking on button to change appeareance

 var button =document.getElementById("button");
 var h_1 = document.getElementById("header-title");
 var main = document.querySelector("#main");
 //getting a click
 button.addEventListener("click", btnClick);

  function btnClick(){
    //changes heading when button is clicked
    h_1.textContent ="Changed text";
    //changing background of main div
    main.style.backgroundColor ="#555";
  }

//---------------------------------------------------------




  //Passing in an event parameter (e)
  //'e' is the event parameter

  var button =document.getElementById("button");
  button.addEventListener("click", btnClick);
  function btnClick(e){
//  --------console events-------------------------------
  //outputting all events to console
  console.log(e);

  //outputting to console what you actually clicked
   console.log(e.target);

  //outputting to console the id of the button
   console.log(e.target.id);

   //outputting the class to the console
   console.log(e.target.className);

   //outputting an array of classes
   console.log(e.target.classList);

   //outputting to console, the type of event
   console.log(e.type);

   //outputting mouse position on x-axis (i.e position from browser window horizontally)
   console.log(e.clientX);

   //outputting mouse position on y-axis (i.e position from browser window vertically)
   console.log(e.clientY);

   //outputting mouse position (x-axis) from the actual element and not the window (in this case the button)
   console.log(e.offsetX);

   //outputting mouse position (y-axis) from the actual element and not the window (in this case the button)
   console.log(e.offsetY);

   //outputting events from alt key. Hold 'alt key' while clicking button. The same can happen with ctrl and shift keys
   console.log(e.altKey);
   //NB: Client is from the browser while offset is from the element
 //---------------------------------------------------------------------



   //outputting the id of 'button' to the DOM when clicked
   var output = document.getElementById("output");
   output.innerHTML = "<h2>"+ e.target.id +"</h2>";
  }


  //================================================================================================================================


  //----------------Mouse events-------------------------------------------

 var button =document.getElementById("button");

 var box =document.getElementById("box");

 /* --------------Button Events----------------------- */
 //different events in the first parameter
  /* button.addEventListener("click", runEvent);

  //double click
  button.addEventListener("dblclick", runEvent);

  //mouse down
  button.addEventListener("mousedown", runEvent);

  //mouse up
  button.addEventListener("mouseup", runEvent); */
/*
  //The function will output the type of mouse event that occurred on the button
  function runEvent(e){
    console.log('EVENT TYPE:  ' + e.type);
  } */
  /* ------------------------------------------------- */

  /* ---------------Box events-------------------------- */

  /* //mouse enter on box. This will fire off an event when mouse is hovered over box
  box.addEventListener("mouseenter",runEvent);

  //mouse enter on box. This will fire off an event when mouse leaves box
  box.addEventListener("mouseleave",runEvent);

  //mouse over. This affects only inner events that are children unlike mouseenter that targets only the parent element
  box.addEventListener("mouseover",runEvent);

  //mouse out
  box.addEventListener("mouseout",runEvent); */

  /* //mouse move event. This fires events inside the box when the mouse is moved around
    box.addEventListener("mousemove",runEvent); */


  //The function will output the type of mouse event that occurred on the button

      //targetting the input
      var inputItem = document.querySelector("input[type='text']");

      //targetting the form
      var form = document.querySelector("form");

     //Listening to a keydown event on input
        inputItem.addEventListener("keydown", runEvent);

     //Listening to a keyup event on releasing the key
        inputItem.addEventListener("keyup", runEvent);

    //Listening to a keypress event
        inputItem.addEventListener("keypress", runEvent);

    //focus makes the input active when clicked
        inputItem.addEventListener("focus", runEvent);

    //blur makes the input blur when clicked out
        inputItem.addEventListener("blur", runEvent);

    //cut
        inputItem.addEventListener("cut", runEvent);

    //paste
        inputItem.addEventListener("paste", runEvent);

    //input
        inputItem.addEventListener("input", runEvent); */

   //For firing an event when items are chosen from a drop down
        //target the select element
        /* var select = document.querySelector("select");

        select.addEventListener("change", runEvent);
        select.addEventListener("input", runEvent);

    //submit event
      form.addEventListener("submit", runEvent);


      function runEvent(e){
        /* //to prevent the submit from submiting to an empty page
         e.preventDefault(); */
        console.log('EVENT TYPE:  ' + e.type);

        //to catch what you type in the input and log to console
        console.log(e.target.value);

        //To output into a div what you typed
        var output = document.getElementById("output");
        output.innerHTML = "<h2>"+e.target.value+"</h3>";

      //To make everything disappear when you cut it from input
        document.body.style.display = "none";


        //outputting mouse events into the browser
        /* var output = document.getElementById("output");
        output.innerHTML = "<h3>MouseX: " + e.offsetX + "</h3><h3>MouseY: "
        + e.offsetY + "</h3>";

       //connecting rgb values to the offset numbers.
      //  This changes the colours when the mouse is moved around in the box element
       box.style.backgroundColor ="rgb("+e.offsetX+","+e.offsetY+",40)";

      //making the colour click on the body
      document.body.style.backgroundColor ="rgb("+e.offsetX+","+e.offsetY+",40)";


      }

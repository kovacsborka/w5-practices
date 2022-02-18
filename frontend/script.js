
// PRIMITÍVEK

//      strings
// console.log("Hello!")
// console.log('Hello!')                          !!backtick között lehet sort törni
// console.log(`Hel                                          
// lo!`)                                                 


//      numbers
// console.log(typeof NaN)                        NaN = not a number
// console.log(typeof 2)
// console.log(0/0)
// console.log(2.14)


//     boolean
// console.log(true)                             logikai érték
// console.log(false)


//    undefined
// console.log(undefined)                         értékadás nem történt meg, type: undefined


//    null
// console.log(null)                           type: object -----> objektum helyettesítő, objektumként működő



// --------------------------------------------------------------------------------------------------

// ADATSTRUKTÚRÁK

// Object         kulcsértékpárokkal működik   {}

// Array (tömb)   indexértkékekkel működik

/* 
console.log({
    title: "Start coding",         //.json fájlban kell "" a key-re, javascripten belül nem szükséges
    type: "solo",
    difficulty: 4.1, 
    usefulness: 4.2,
    enjoyability: 3.7,
    materials: 3.4,
    tasks: [                        //tömb
        {                           //object      
            title: "Bank Accounts",
            description: ""
        },
        {
            title: "100 doors",
            description: ""
        },
        {
            title: "Word filter",
            description: ""
        }
    ]
})

 */

// --------------------------------------------------------------------------------------------------------

// VÁLTOZÓK

/* hoisting : Hoisting is JavaScript's default behavior of moving declarations to the top.
deklarálás+inicializálás (undefined-dal inicializálja)
nulladik sor: 0. var a = undefined;
var-t rendezi előre (nulladik sor)
varhoz hozzá lehet férni inicializálás előtt, lethez, consthoz nem (de már deklarálódnak)
https://www.w3schools.com/js/js_hoisting.asp
 */


/* 
var a = "Hello1"
let b = "Hello2"               
const c = "Hello3"

console.log(a)
console.log(b)
console.log(c) 
*/

// -------------------------------------------------------------------------------------------------

// FÜGGVÉNYEK


/* function d(){                   // {} belüli változók csak függvényen belül működnek (a is not defined)
    if( 1 + 1 === 2 ){
    }
    var a = "Hello1"
    let b = "Hello2"               
    const c = "Hello3"
    console.log(a)                  
    console.log(b)
    console.log(c) 
}
d()     //meghívtuk a d függvényt
*/


/* 
SCOPE    https://www.w3schools.com/js/js_scope.asp

Scope determines the accessibility (visibility) of variables.

global scope (var)
function scope (függvényen belül látszódik)     
block scope ()
*/

/* 
let e = 1 
// console.log(e)
e = 2
// console.log(e)  
e = e*2
// console.log(e) 


function multiplyByTwo(num){
    console.log(num)           //paraméterek mindig function scope 
    return num*2
}

let f = multiplyByTwo(1)
console.log(f)
console.log(multiplyByTwo(1));     // (1) argumentum

 */
// --------------------------------------------------------------------------------------------------

// METÓDUSOK

// függvényt is el tudunk menni objektumba

/* 
let g = {
    myMethod: function (){
        console.log("Hello");
    }
}
g.myMethod()                 //ponttal tudunk beljebb lépkedni

 */

/* 
let window = {
    addEventListener: function (eventName, evenFunction){
        if( eventName === "load" ) {
            eventFunction() 
        }
    }    
}

window.addEventListener("load",loadEvent) 
*/


/* 
let h = { 
    anotherMethod: function (text){
        return `You sent the following argument to this method: ${text}`
    }
}
let i = h.anotherMethod("argument")
console.log(i);
console.log(h.anotherMethod("another argument")); 
*/


// ------------------------------------------------------------------------------------------------------

// OBJECTEK

/* 
let myString = "mikkamakka";     //érték átmentése másik változóba (akár number, string, boolean v. undefined)

let mySecondString = myString;

let myThirdString = "mikkamakka"

console.log(myString);
console.log(mySecondString);

console.log(myString === mySecondString);       //true

console.log(myString === myThirdString); 
*/

/* 
let myObject = {
    myString: "mikkamakka"
};

let mySecondObject = myObject;

// console.log(myObject.myString)              //objecten belüli function futtatása (.)

// console.log(myObject === mySecondObject)    //összehashonlítás

let myThirdObject = {
    myString: "mikkamakka"
};

// console.log(myObject === myThirdObject);    //false lett

/* 
console.log("" === "");            //string esetében true 
console.log({} === {})             //false, mert hiába ugyanaz a tartalom, újra létrejön egy 
                                    //   teljesen független object 
*/
/*
mySecondObject.myString = "domdodom";       //visszamenőleg megváltoztatta a myObject myString értékét

// console.log(myObject.myString);


let myFourthObject = {...myObject};           //object másolás

myFourthObject.myString = "vacskamati";

console.log(myObject.myString);             //marad az eredeti érték
console.log(myFourthObject.myString);       //megkapta az új értéket

 */





//-------------------------------------------------------Practice----------------------------------------------------

function loadEvent(){

    let rootElement = document.getElementById("root")   //egyszer hívjuk meg a rootot

    let card2 = function (title, year, rate){ 
        return `
        <div class="card">
            <h1>${title}</h1>              
            <time>${year}</time>                                    
            <h3>${rate}</h3>                            
        </div>
        `;
    
    }

    let renderAllCardElements = function(incomingMoviesArray){

        let renderedCardList = `<div class="cards">`;
        
        //for ciklus ami végigmegy a cardsarrayen
        for (const incomingMovie of incomingMoviesArray) {
            //for ciklus minden llépcsőjénél hozzáadja a renderedCardListhez az adott elemet a megfelelő div cardban 
            renderedCardList += card2(incomingMovie.title, incomingMovie.year, incomingMovie.rate)

        }
        renderedCardList += `</div>`
        console.log(renderedCardList);
        //returnöli az elkészült elemekkel feltöltött renderedCardListet
        return renderedCardList;
    }


    let newGoodMovies = [];          //következő for ciklussal töltjük fel 

    for (const movieSend of movies) {
        if (movieSend.year > 2000 && movieSend.rate >= 8) {
            newGoodMovies.push(movieSend)
        }
    }
 

    newGoodMovies.sort(function(a, b){return a.year - b.year})

    rootElement.insertAdjacentHTML("beforeend", renderAllCardElements(newGoodMovies))  
    //beküld a renderAllCardElementhez egy tömböt
    //egy hosszú stringként
 
}
window.addEventListener("load", loadEvent);

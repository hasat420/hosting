/*
// object formate
var student = {
    name: "masud",
    age: 39,
    hometown: "dhaka",

}
// jason formate

//var student_jason = {
    //"name": "masud",
    //"age": 20,
  //  "hometown" : "gaibandha",
//};

//  object to json formate convert //
let object_to_json = JSON.stringify(student);
console.log(object_to_json);

// Json to object 
let json_to_object = JSON.parse(object_to_json);
console.log(json_to_object);

//   date type support for json ///
//string
//number
//object
//array
//boolean
//null
var person = {
    Name: "Rahim",
    age: 25,
    hometown: "Dhaka",
    marrid: false,
    dob: 1995-5-12,
    test_null: null,
    test_undefined: undefined,
    greet: function(){
        console.log(`hello ${this.Name}`)
    }
}
//console.log(person.age);
let json_formate = JSON.stringify(person);
console.log(json_formate);


var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var data = this.responseText;
        //console.log(data)
       jsonData(data);
    }
}


xmlhttp.open("GET", "data.json", true )
xmlhttp.send();
   */

/*
function jsonData(json_obj){
    //console.log(json_obj);
    let js_ob = JSON.parse(json_obj);
    //console.log(js_ob);
    for(x in js_ob.person){
        console.log(x);
        //console.log(js_ob.person[x])
        //var person = js_ob.person;
        //console.log(person[x])

        var persons = js_ob.person;
        for(y in persons[x]){
            //console.log(persons[x][y])
           
        }

    } 
}

 function jsonData(json_obj){
    
    let js_ob = JSON.parse(json_obj);
    console.log(js_ob);

    for(var x in js_ob.person){
        //console.log(`index ${x} item ${js_ob.person[x]}`);
        var person =  js_ob.person[x];
        //console.log(person[x]);
        console.log(person[x])
        var persons = js_ob.person;
        for(y in persons[x]){
            console.log(persons[x][y])
           
        }

    }
 }
      */
    
      /**
 

// for in loop /////////////////////
// object, string, array for in loop;
//for off [string/array]
let name = "md masud";
let item = ["cake", "cokcolate", "ice cream"];
let person = {
    name: "masud",
    age: 20,
    team: "bangladesh",
    profession: "criket"
}
for(var masud in name){
    //console.log(`index ${m} Item ${name [m] }`);
    //console.log(masud);
    //console.log(`index ${masud} item ${name[masud]}`)

}
for(var tasks in item){
    //console.log(`index ${tasks} item ${item [tasks]}`)
}

for(var ob in person){
    //console.log(`property ${ob} and value ${person[ob]}`);
}
for(var x of name){
    //console.log(`${x}`);
}
for(var x of item){
   // console.log(`item ${x} and ${item}`)
}
for(var x of person){
   // console.log(`${x}`);
}
         
///       ajax api call ///////////

document.getElementById('get_data').addEventListener('click', loaddata);

function loaddata(){
    let xhr = new XMLHttpRequest();
    xhr.open('GEt','https://jsonplaceholder.typicode.com/todos/1',true);
    xhr.onload = function(){
        if(this.status == 200){
            let data = JSON.parse(this.responseText);
            let userid = data.userId;
            console.log(userid);
        }
    }

    xhr.send();
}
        */
// setTimeout (function(){
//     console.log("hell");
// },5000);

// Callback function
// let persons = [
//     {firstname: "masud", lastname: "tasks"},
//     {firstname: "babu", lastname:"mia"},
//     {firstname: "masud", lastname: "khan"}
// ]









// function createperson (m){
//     setTimeout(function(){
//        persons.push(m)
//     },1000);
// }


// function getperson(){
//     setTimeout(function(){
//         let output = '';
//        persons.forEach(m => {
//        output +=  `<li> ${m.firstname} ${m.lastname}</li>`
//        });
//         document.getElementById('output').innerHTML = output;
//      },1000)
// };

// createperson({firstname: "tasks", lastname: "khan"})
// getperson();





// persons.forEach(function(m){
//     output += `<li> ${m.firstname} ${m.lastname} </li>`;
// });


// pormisses //////////////////
// function createperson(masud){
//     let pormis = new Promise(function(resolve, reject){
//         persons.push(masud);
//         resolve();
//     });
//     return pormis;
// };

// function getperson(){
//     setTimeout(function(){
//         let output = '';
//         persons.forEach(masud => {
//             output += `<li> ${masud.firstname} ${masud.lastname} </li>`;
//         });
//         document.getElementById('output').innerHTML = output;
//     },1000);
// }
// createperson({firstname: "kk", lastname: "dd"})
// .then(getperson);

// document.getElementById('get_data').addEventListener('click',getdata);
// function getdata(){
//    fetch('https://jsonplaceholder.typicode.com/todos/1')
//    .then (Response => Response.json())
//    .then(data => console.log(data))
   
//    .catch(function(err){
//     console.log(err);
//    })
   
// }









/* 

Es6 first //////////////////////
var a = 1;
let b = 2;
const c = 3;
var d = 7;

console.log(`global result`,a,b,c,d);

let masud = function(){
    var a = 4;
    let b = 5;
    const c = 6;
   
    
    console.log(`function result`,a,b,c,d);   
}
masud();
console.log(`global result`,a,b,c,d);

if (true) {
    var a = 88;
    let b = 10;
    const c = 11;
    console.log(`if result`,a,b,c);

}
console.log(`global result`,a,b,c,d);

for(let a = 0; a<10; a++){
    console.log(`for scop`,a);
}
console.log(`global result`,a,b,c,d);
console.log(`global result`,a,b,c,d);

*/



//////////////////
// function func(f){
//     console.log(f);
// }

// func('normal function');

// let essix = g => console.log(g)

// essix("arry fucntion");

// let carli = numb => {return numb*numb};
// console.log(carli(3))

// let getSwuare = num =>  num*num; 



// console.log(getSwuare(7)); 

// function normal(item){
//     console.log(item)
// }
// normal("banana");


// array function ///////



// callbackfunction /////////



// let numbers = [1,2,3,4,5,6];

// let num = function(item){
//     console.log(item*item)
// }

// numbers.forEach(num);



// array Destructing ///////////////////////
// let fruts = ["banana", "apple", "mango", "lico"];
// let [frut1,frut2, ,frut4] = fruts;
// console.log(frut1,frut4,);


// object Destructing /////////////
// let person = {
//     firstname: "masud",
//     lastname : "tasks",
//     dob: "03-11-1996"
// };

// //let { firstname:fname, lastname:lname, dob:birthday} = person;

// //console.log(fname, lname, birthday);

 
// function display({ firstname:fname, lastname:lname, dob:birthday}){
   
//     console.log(fname, lname, birthday)
// }
// display(person);


// srread operator/////////

// let str = "masudran";
// str = ['masud','tasks','dob']


// let fruts = ["banana", "apple", "mango", "lico"];
// let fruts1 = ["banana1", "apple", "mango"];
// let frut2 = ["banana2", "apple"];
// let newstr = [...fruts, ...fruts1, ...frut2]
//console.log(newstr);

//Spread on object es8

// let person = {
//     firstname: "masud",
//     lastname: "tasks", 

// }
//  let newperson  = {...person, fulname: "md masud tasks"};
 //console.log(newperson)

// es5 constructructor

// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }
// es6
// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age
//     }
// }


// let person1 = new Person("masud",23);
// let person2 = new Person("tasks",23);

// console.log(person1);
// console.log(person2);
// let form = document.querySelector('#task_form');
// let taskList = document.querySelector('ol');
// let cleartask = document.querySelector('#clear_task');
// let filter = document.querySelector('#task_filter')
// let taskInput = document.querySelector('#new_task')


// //
// form.addEventListener('submit', addTask);
// taskList.addEventListener('click', removetask);
// cleartask.addEventListener('click', clearTask);
// filter.addEventListener('keyup', TaskFilter);
// // add task
// function addTask(e) {
//     if (taskInput.value === '') {
//         alert('Add a task!');
//     } else {
//         // Create li element
//         let li = document.createElement('li');
//         li.appendChild(document.createTextNode(taskInput.value + " "));
//         let link = document.createElement('a');
//         link.setAttribute('href', '#');
//         link.innerHTML = 'x';
//         li.appendChild(link);
//         taskList.appendChild(li);
//         storeTaskInLocalStorage(taskInput.value);
//        taskInput.value = "";
//     }
//     e.preventDefault();
// }
// function removetask(e){
//     if (e.target.hasAttribute('href')) {
//         if(confirm("Are you sure")){
//             let ele = e.target.parentElement;
//             ele.remove();
//             removeFormLs(ele);
//         }
//     }
// }
// function clearTask(e){
//     if(confirm('are you sure')){
//         //taskList.innerHTML = '';
//         while(taskList.firstChild){
//             taskList.removeChild(taskList.firstChild);
//         }
//     }
// }


// function TaskFilter(e){
//  let text = e.target.value.toLowerCase();

//  document.querySelectorAll('li').forEach(task => {
//     let item = task.firstChild.textContent;

//     if(item.toLowerCase().indexOf(text) != -1){
//         task.style.display = "block";
//     }
//     else{
//         task.style.display = "none";
//     }
//  });
// }

// //store in local store

// function storeTaskInLocalStorage(task){
//    let tasks;
//    if (localStorage.getItem('tasks') === null) {
//         tasks = [];
//    }
//    else{
//     tasks = JSON.parse(localStorage.getItem('tasks'));
//    }
//    tasks.push(task);
//    localStorage.setItem('tasks', JSON.stringify(tasks));


// }

// //document

// document.addEventListener('DOMContentLoaded', gettasks);

// function gettasks(){
//     let tasks;
//     if (localStorage.getItem('tasks') === null) {
//          tasks = [];
//     }
//     else{
//      tasks = JSON.parse(localStorage.getItem('tasks'));
//     } 

//     tasks.forEach(task => {
//         let li = document.createElement('li');
//         li.appendChild(document.createTextNode(task + ""));
//         let link = document.createElement('a');
//         link.setAttribute('href', '#');
//         link.innerHTML = ' x';
//         li.appendChild(link);
//         taskList.appendChild(li);
//     });

    
// }
// function removeFormLs(taskItem){
//     let tasks;
//     if (localStorage.getItem('tasks') === null) {
//          tasks = [];
//     }
//     else{
//      tasks = JSON.parse(localStorage.getItem('tasks'));
//     } 
//     let li = taskItem;
//     li.removeChild(li.lastChild)
    
//     tasks.forEach((task,index) => {
//        if(li.textContent === task){
//         tasks.splice(index, 1);
//        } 
//     });
    
//     localStorage.setItem('tasks', JSON.stringify(tasks));
    
// }


let form = document.querySelector('#task_form');
let taskList = document.querySelector('ol');
let cleartask = document.querySelector('#clear_task');
let filter = document.querySelector('#task_filter')
let taskInput = document.querySelector('#new_task')

//add task
form.addEventListener('submit', addTask);
function addTask(e){
    if(taskInput.value == ''){
        alert("add some task");
    }
    else{
        let li = document.createElement('li');
            li.appendChild(document.createTextNode(taskInput.value + ''));
        let link = document.createElement('a');
            link.setAttribute('href', '#');
            link.innerHTML = ' x';
            li.appendChild(link);
            taskList.appendChild(li);

            taskInput.value = '';
            console.log(li)
    }
    e.preventDefault();
}


//removeTask
taskList.addEventListener('click', removeTask);

function removeTask(e){
    if(e.target.hasAttribute('href')){
        if(confirm("are you sure to remove")){
            let ele = e.target.parentElement;
                ele.remove();
        }
    }
}

//clearTask
cleartask.addEventListener('click', clearTask);

function clearTask(e){
    if(confirm("clear all")){
        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild);
        }
    }
}
// filtertask
filter.addEventListener('keyup', filterTask);


function filterTask(e){
    let text = e.target.value.toLowerCase();
    document.querySelectorAll('li').forEach(task => {
        let item = task.firstChild.textContent.toLocaleLowerCase();
        if(item.indexOf(text) != -1){
            task.style.display = 'block';
        }
        else{
            task.style.display = 'none';
        }
    });
    taskInput.value = '';
}


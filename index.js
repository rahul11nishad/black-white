const dar=document;
function dark()
{
    // document.getElementsId('main').style.backgroundColor="#fffaaa";
    document.getElementById('main').style.backgroundColor='black';
    dar.getElementById('buttom').innerHTML='light';
    dar.getElementById('once').style.color='white';
    dar.getElementById('you').style.color='black';
    dar.getElementById('you').style.backgroundColor='white';
    dar.getElementById('became').style.color='white';
    dar.getElementById('become').style.color='white';
    dar.getElementById('fear').style.color='black';
    dar.getElementById('fear').style.backgroundColor='white';
    dar.getElementById('life').style.color='black';
    dar.getElementById('life').style.backgroundColor='white';
    dar.getElementById('limit').style.color='black';
    dar.getElementById('limit').style.backgroundColor='white';
}
// dark();
















// const funalParticipants=["Taylor","Donald","Don","Natasha","Bobby"];
// const numbers=[84,27,57,38,37,85];
// // Defining the function
// function sum(num1,num2)
// {
//     return num1+num2;
// }
// // calling the function:
// sum(45,52);
// //  Defining the function 
// // the parameter is name 
// function sayHello(name)
// {
//     return `Hello, ${name}!`;
// }
// console.log(sayHello("raone"));

// // without return, so the function doesn't output the sum
// function add(num1,num2)
// {
//     num1+num2;
// }
// // Named function
// function rocketToMars()
// {
//     return "BOOM!";
// }

// // Anonymous function 
// const rockettoMars=function()
// {
//     return "BOOM!";
// }
// const dog=function()
// {
//     return "WoOf!";
// }
// // Arrow function with two arguments
// const sum2=(firstParam,secondParam)=>
// {
//     return firstParam+secondParam;
// };
// console.log(sum2(78,90));
// // Arrow function with no arguments 
// const printHello=()=>
// {
//     return "Hello World!";
// };

// console.log(printHello());
// // Arrow function with a single argument 
// const checkWeight=weight=>{
//     console.log(`Baggage weight :${weight} kilograms.`);
// };

// checkWeight(34);
// // concise arrow fucntions
// const multiply=(a,b)=>a+b;
// console.log(multiply(2,40));

// let plusFive=(number)=>{
//     return number+5;
// }
// plusFive(4);
// f is assinged the value of plusFive 
// let f=plusFive;
// console.log(f(8))

// Callback functions 
// from here  i am going to use callback functions 
// const isEven=(n)=>{
//     return n%2==0;
// };
// function isDeByThree(number){
//     return number%3==0;
// }
// let printMsg=(evenFunction,ByTwo,num)=>
// {
//     const isNumEven=evenFunction(num);
//     const byTwo=ByTwo(num);
//     console.log(`the number ${num} is an even number:${isNumEven}.`);
//     if(byTwo)
//     {
//         console.log(`The number ${num} is devided by three.`);
//     }
//     else
//     {
//         console.log(`The number ${num} is not devided by three.`);
//     }
// }

// Pass in isEven as the callback function 
// printMsg(isEven,isDeByThree,8);
// Prints: The number 4 is an even number :True 
// const numbers=[57,58,23,21,23,79,89,83,56];
// // numbers.forEach(number=>console.log(number));
// const objects=[
//     {
//         name:"roman",
//         age:33,
//         color:"black",
//         height:120,
//         weight:23
//     },
//     {
//         name:"natasha",
//         age:23,
//         color:"brown",
//         height:122,
//         weight:45
//     },
//     {
//         name:"roy",
//         age:19,
//         color:"black",
//         height:110,
//         weight:23
//     },
//     {
//         name:"rayman",
//         age:23,
//         color:"brown",
//         height:100,
//         weight:21
//     },
//     {
//         name:"ron",
//         age:31,
//         color:"black",
//         height:130,
//         weight:20
//     }
// ];
// // const element=objects.map(obj=>{
// //     if(obj.age>25)
// //     {
// //         return {"name":obj.name,"color":obj.color};
// //     }
// // });
// // console.log(element);
// const finalParticipants=['Taylor','Donald','Don','Natasha','Bobby'];
// const announcements=finalParticipants.map(member=>{
//     return member+' joined the contest.';
// })
// // console.log(announcements);
// const filteredArray=numbers.filter(n=>
//     {
//         return n>70;
//     });
// // console.log(numbers,filteredArray);
// const number=[1,2,3,4,5,6];
// const total=number.reduce((accumulator,currentValue)=>
// {
//     return currentValue+accumulator;
// });
// // console.log(total);
// // Dot notation for accessing object properties. 
// const apple={
//     color:'Green',
//     Price:{
//         bulk:'$3/kg',
//         smallQty:'$4/kg'
//     }
// }
// // console.log(apple.Price.bulk,apple.big);
// const Student={
//     name:'raone',
//     score:450,
//     grade:'A'
// }
// console.log(Student)
// delete Student.score;
// Student.grade="F";
// console.log(Student);
// for(let key in Student)
// {
//     console.log(`${key}: ${Student[key]}`);
// }
// const origNum=8;
// const origObj={
//     color:'blue'
// };
// const changeItUp=(num,obj)=>
// {
//     num=7;
//     obj.color='red';
// };
// changeItUp(origNum,origObj);
// console.log(origNum);
// console.log(origObj);

// javaScript Object Methods 
// const engine={
//     start(adverb)
//     {
//         console.log(`The engine starts up ${adverb}....`);
//     },
//     sputter:()=>{
//         console.log(`The engine sputters...`)
//     }
// };
// engine.start('fastly');
// engine.sputter();

// JavaScript destructuring assignment shorthand sytax 
// const rubiks={
//     possiblePerutations:'23,38,38,22,21',
//     invented:19734,
//     largecode:'`17x17x12h'
// };
// const {possiblePerutations,invented,largecode}=rubiks;
// console.log(possiblePerutations,invented);'
// shorthand property name systax for object creation 
// const activity='suffering';
// const problem='momeny';
// const set={activity,problem}
// console.log(set);  
// const cat={
//     name:'Pipey',
//     age:5,
//     whatName(){
//         return 'Hi,'+this.name;
//     }
// }
// console.log(cat.whatName());

// const restaurant={
//     _numcustomers:35,
//     _seatCapacity:100,
//     get availableSeats()
//     {
//         return this._seatCapacity-this._numcustomers;
//     },
//     set availableSeats(num){
//         this._numcustomers=this.num;
//     }
// }
// console.log(restaurant.availableSeats());

// getter and setter 
// const myCat={
//     _name:"Dottie",
//     get name()
//     {
//         return this._name;
//     },
//     set name(newName)
//     {
//         if(typeof(newName)==="string"&& newName.length>0)
//         {
//             this._name=newName;
//         }
//         else
//         {
//             console.log('Error :name must be a non-nempty string');
//         }
//         // this._name=newName;
//     }
// }

// console.log(myCat.name);//invokes the getter function
// myCat.name="yUU";// invokes the setter function
// console.log(myCat.name);//now it has been changed

// JavaScript factory functions 
// const dogFactory=(name,age,color)=>{
//     return {
//         name:name,
//         age:age,
//         color:color,
//         back(){
//             console.log("Woof!");
//         }    
//     };
// }
// // dogFactory('Yuly',4,'red');
// console.log(dogFactory('Yuly',4,'red'));
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// class 
// class Dog{
//     constructor(name)
//     {
//         this._name=name;
//     }
//     introduce()
//     {
//         console.log("This is "+this._name+'!');
//     }
//     static bark()
//     {
//         console.log('Woof!');
//     }
// }
// const myDog=new Dog('Buu');
// myDog.introduce();
// Dog.bark();


// class Media{
//     constructor(info){
//         this.publishDate=info.publishDate;
//         this.name=info.name;
//     }
// }
// class Song extends Media{
//     constructor(title,author,songData){
//         super(songData);
//         this.title=title;
//         this.author=songData.author;
//     }
//     play(){
//         console.log('song Playing!');
//     }
//     stop(){
//         console.log("Stopping!");
//     }
// }
// const mysong=new Song({
//     author:'aueen',
//     name:'hum tum',
//     publishDate:1982
// });
// // const mySong=new Song("Tu mila",'arjit');
// // mySong.play()
// console.log(mysong.title,mysong.author);

// %%A%%%%%%%%%%%%%%%%%%%%%%
// promises
//  const promises=new Promise((resole,reject)=>{
//      const res=false;
//     //An asynchronous operation 
//     if(res){
//         resole('Resolved!');
//     }
//     else{
//         reject(Error('Error!'));
//     }
//  });
//  promises.then((res)=>console.log(res),(err)=>console.log(err));

// const promise=new Promise((resole,reject)=>{
//     setTimeout(()=>{
//         reject(Error('Promise rejected on condinationally.'));
//     },1000);
// });
// promise.then((res)=>{
//     console.log(res);
// });
// promise.catch((err)=>{
//     alert(err);
// });

// const promise1=new Promise((resole,reject)=>{
//     setTimeout(()=>{
//         resolve(1);
//     },300);
// })
// const promise2=new Promise((resole,reject)=>{
//     setTimeout(()=>{
//         resolve(2)
//     },200);
// });
// Promise.all([promise1,promise2]).then((res)=>{
//     console.log(res[0]);
//     console.log(res[1])
// });
// Executor function of JavaScript Promise object
// const executor=(resolve,reject)=>{
//     resolve('Resolved!');
// };
// const promise=new Promise(executor);
// const promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Result!');
//     },200);
// });
// promise.then((res)=>{
//     console.log(res);
// },(err)=>{
//     alert(err);
// });

// const login=()=>{
//     alert('login!');
// };
// setTimeout(login,200);






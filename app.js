// Chapter1


// Task No 1
alert("Welcome to my Website");

// Task No 2
alert("Error! Please enter a valid password");

// Task No 3
alert("Welcome to JS Land...\nHappy Coding!");

// Task No 4
alert("Welcome to JS Land...");
alert("Happy Coding!");

// Task No 5
alert("Hello I can run JS through my web browser's console");
console.log("Hello I can run JS through my web browser's console")




// chapter2

// Task No 1
var userName="zainhashmi18";

// Task No 2
var myName="Syed Zain Ul Hassan Hashmi";

// Task No 3
var message="Hello World";
var age=22;
var course="Web and Mobile App Development";
alert(message);

// Task No 4
alert("Student Username: "+userName);
alert("Student Name: "+myName);
alert("Student Age: "+age);
alert("Course: "+course);

// Task No 5
var name="PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(name);

// Task No 6
var email="Zainhashmi275@gmail.com";
alert("My Email Address is: "+email);

// Task No 7
var book="A smarter way to learn JavaScript";
alert("I am trying to learn from the Book "+book);

// Task No 8
document.write("Yah! I can write HTML content through JS")

// Task No 9
var design="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(design);
document.write(design);



// Chapter 3

// Task No 1
var age=22;
alert("I am "+age+" years old");

// Task No 2
var N=14;
alert("You have visited this site "+N+" times");

// Task No 3
var birthyear= +prompt("what is your birth year");
document.write("My Birth Year is "+birthyear+"<br>"+"Data type of my ddecleared variable is number.");

// Task No 4
var visitName= prompt("Sir/Mam your good name please?");
var prodTitle= prompt("Product Name");
var ordQty= +prompt("Order Quantity");
document.write(visitName+ " Ordered "+ordQty+" "+prodTitle+"(s)"+" on XYZ Clothing store" );


// Chapter 4

// Task No 1
var var1,var2,var3;

// Task No 2
// 5 illegal variable names
var my age;
var  *age=22;
var 2prod;
var break;
var :Game;

// 5 Legal variable names
var myName;
var num5;
var $dollar;
var _fan;
var my_age;

// Task No 3
var va1="numbers";
var va2="$";
var va3="_";
var va4="Letter"
var va5="Sensitive"
var va6="Keyword"
document.write("<b>Rules for naming JS variables</b><br>");
document.write("Variable names can only contain "+va1+","+va2+" and"+va3 +". " +"For example $my_1stVariable<br>");
document.write("Variable must begin with "+va4+","+va2+" and"+va3+". " +"For example  $name, _name or name<br>");
document.write("Variable names are case "+va5+"<br>");
document.write("Variable names should not be JS "+va6+"<br>");


// Chapter 5

// Task No 1
var numb1=+prompt("Number 1");
var numb2=+prompt("Number 2");;
var res=numb1+numb2;
document.write("Sum of "+numb1+" and "+numb2+" is "+res);

// Task No 2 (Subtraction)
var numb1=+prompt("Number 1");
var numb2=+prompt("Number 2");;
var res=numb1-numb2;
document.write("Subtraction of "+numb1+" and "+numb2+" is "+res);

//(Multiplication)
var numb1=+prompt("Number 1");
var numb2=+prompt("Number 2");;
var res=numb1*numb2;
document.write("Multiplication of "+numb1+" and "+numb2+" is "+res);

// //(Division)
var numb1=+prompt("Number 1");
var numb2=+prompt("Number 2");;
var res=numb1/numb2;
document.write("Division of "+numb1+" and "+numb2+" is "+res);

// //(Modulus)
var numb1=+prompt("Number 1");
var numb2=+prompt("Number 2");;
var res=numb1%numb2;
document.write("Division of "+numb1+" and "+numb2+" is "+res);

// Task No 3 
var val= +prompt("Value after variable declaration is: ");
document.write("Initial Value is "+val+"<br>");
val+=1;
document.write("Value after increment is: "+val+"<br>")
val+=7;
document.write("Value after Addition is: "+val+"<br>")
val-=1;
document.write("Value after Decrement is: "+val+"<br>")
val%=3;
document.write("The remainder is: "+val+"<br>")


// Task No 4
var movieTicket=600;
var buying= +prompt("Number of ticket you are buying: ")
var ticketCost=movieTicket*buying;
document.write("Total cost to buy "+buying+" ticket(s) to a movie is "+ticketCost+"PKR")

// Task No 5
var tabNum= +prompt("input a number: ")
for(var i=1; i<=10; i++){
    document.write(tabNum+" X "+i+" = "+tabNum*i+"<br>");
}

// Task No 6
var cel=+prompt("Input Temperature in Celsius: ")
var fah=+prompt("Input Temperature in Fahrenheit: ")
var ftoc=(fah-32)*5/9;
var ctof=(cel*9/5)+32;
document.write(cel+"C is "+ctof+"F <br>")
document.write(fah+"F is "+ftoc+"C")

// Task No 7
var price1=+prompt("Price of item 1 ")
var qty1=+prompt("order quantity of item 1 ")
var price2=+prompt("Price of item 2 ")
var qty2=+prompt("order quantity of item 2 ")
var item1price=price1*qty1;
var item2price=price2*qty2;
var shipcharge=100;
var tCost=item1price+item2price+shipcharge;
document.write("Price of item 1 is "+price1+"<br>Quantity of item 1 is "+qty1+"<br>Price of item 2 is "+price2+"<br> Quantity of item 2 is "+qty2+"<br>Shipping Charges are "+shipcharge+"<br>")
document.write("Total Cost of Your Order is "+tCost)

// Task No 8
var tMarks=600;
var obtMarks=+prompt("Input your Obtained Marks: ");
var Perc=obtMarks/tMarks*100;
document.write("Total Marks: "+tMarks+"<br> Obtained Marks: "+obtMarks+"<br>Percentage: "+Perc+"%")

// Task No 9
var usdToPkr=165.22;
var riyalPkr=43.99;
var usd=+prompt("input USD amount: ")
var usdconv=usdToPkr*usd;
var riyal=+prompt("input Riyal amount: ")
var riyalconv=riyalPkr*riyal;
document.write("CURRENCY IN PKR <br>")
document.write("USD to PKR= "+usdconv+"<br>riyal to PKR= "+riyalconv+"<br>Total Currency in PKR: "+(usdconv+riyalconv))

// Task No 10
var nume1=2;
nume1=((nume1+5)*10)/2;
document.write(nume1);

// Task No 11
var byear=1997;
var cyear=2020;
document.write("Current Year: "+cyear+"<br>Birth Year: "+byear+"<br>Your Age: "+(cyear-byear))

// Task No 12
var radius=50;
var cc=2*3.142*radius;
var rsq=radius*radius;
var ac=3.142*rsq;
document.write("Circumference of a circle: "+cc+"<br>Area of a circle: "+ac)

// Task No 13
var favSnack="KitKat";
var cage=22;
var mage=55;
var rage=mage-cage;
var rdays=rage*365;
var eamount=5;
document.write("Favourite Snack: "+favSnack+"<br>Current Age: "+cage+"<br>Maximum Age: "+mage+"<br>Amount of Snacks Per Day: "+eamount+"<br>");
document.write("You will need: "+(eamount*(rdays))+" to last you until the ripe old age of "+mage);


// Chapter No 6-9

//Task NO 1
var a=10;
document.write("Value of a is: "+a+"<br>");
document.write("Value of ++a is: "+(++a)+"<br>");
document.write("Now the value of a is: "+a+"<br>");
document.write("Value of a++ is: "+(a++)+"<br>");
document.write("Now the value of a is: "+a+"<br>");
document.write("Value of --a is: "+(--a)+"<br>");
document.write("Now the value of a is: "+a+"<br>");
document.write("Value of a-- is: "+(a--)+"<br>");
document.write("Now the value of a is: "+a+"<br>");

// Task No 2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write(result);
--a;
// here a value will be 1 because it is pre decrement and it will subtract first then move to next variable
--a - --b;
// due to pre decrement a=1 and b=0
--a - --b + ++b;
// (--a - --b)=1 and ++b is 1 because it will add 1 first. so --a - --b + ++b=2
--a - --b + ++b + b--;
// (--a - --b + ++b)=2 and b-- will be 1 becuse it is post decrement so the answer is 3

// Task No 3
var usName=prompt("Enter Your Name: ")
document.write("Hey...!!! "+usName+"<br>Welcome to JS Land")

// Task No 5
var tabNum1= +prompt("input a number: ")
if(tabNum1==0){
    tabNum1=5;
    for(var i=1; i<=10; i++){
        document.write(tabNum1+" X "+i+" = "+tabNum1*i+"<br>");
    }
}
else{
    for(var i=1; i<=10; i++){
        document.write(tabNum1+" X "+i+" = "+tabNum1*i+"<br>");
    }
}

// Task No 6
var math=+prompt("Enter Maths Marks: ")
var eng=+prompt("Enter English Marks: ")
var js=+prompt("Enter JavaScript Marks: ")

subtotal=100;


// Chapter No 9-11

// Task No 1
var cityName=prompt("Enter Your City Name: ");
if(cityName==="karachi" || cityName==="Karachi" ||cityName==="KARACHI"){
    document.write("Welcome to city of lights")
}

// Task No 2
var gen=prompt("Enter Your Gender: ");
if(gen==="male"||gen==="Male"||gen==="MALE"){
    document.write("Good Morning Sir")
}
else if(gen==="female"||gen==="Female"||gen==="FEMALE"){
    document.write("Good Morning Madam")
}
else{
    document.write("Give correct gender")
}

// Task No 3
var siglight=prompt("Enter Traffic Signal Light: ")
if(siglight==="red"||siglight==="Red"||siglight==="RED"){
     document.write("Must Stop")
}
else if(siglight==="yellow"||siglight==="Yellow"||siglight==="YELLOW"){
        document.write("Ready to move")
}
else if(siglight==="green"||siglight==="Green"||siglight==="GREEN"){
    document.write("Move now")
}
else{
    document.write("Give correct Light")
}

// Task No 4
var fuelCheck=+prompt("Enter Remaining Fuel: ");
if(fuelCheck<=0.25){
    document.write("Please refill the fuel in your car")
}
else{
    document.write("You have enough fuel")
}

// Task No 5
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}     

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
alert("True");
}
if (false){
alert("False");
}

if("caz" < "cat"){
    alert("car is smaller than cat");
    }
    
// Task No 6
var markObt=+prompt("Enter Obtained Marks: ");
var totmarks=300;
var percen=markObt/totmarks*100;
document.write("Total Marks: "+totmarks+"<br>Obtained Marks: "+markObt+"<br>Percentage: "+percen+"<br>Grade: ")
if(percen>=80){
    document.write("A-One<br>Remarks: Excellent")
}
else if(percen>=70){
    document.write("A<br>Remarks: Good")
}
else if(percen>=60){
    document.write("B<br>Remarks: You Need To Improve")
}
else if(percen<60){
    document.write("Fail<br>Remarks: Sorry")
}

// Task No 7
var SecNum= 4;
var guessNum=+prompt("Guess The Secret Number: ");
if(guessNum===SecNum){
    document.write("Bingo! Correct answer");
}
else(
    document.write("Close enough to the correct answer")
)

// Task No 8
var divNum=+prompt("Enter A Number: ");
if(divNum%3==0){
    document.write("Number is Divisible by 3")
}
else{
    document.write("Number is not Divisible by 3")
}

// Task No 9
var numCheck=+prompt("Enter A Number: ");
if(numCheck%2==0){
    document.write("This is even Number")
}
else{
    document.write("This is Odd Number")
}

// Task No 10
var takeTemp=+prompt("Enter Temperature: ");
if(takeTemp>40){
    document.write("It is too hot outside.")
}
else if(takeTemp>30){
    document.write("The Weather today is Normal.")
}
else if(takeTemp>20){
    document.write("Today’s Weather is cool.")
}
else if(takeTemp>10){
    document.write("OMG! Today’s weather is so Cool.")
}

// Task No 11
var fNum=+prompt("Enter 1st Num: ");
var opNum=prompt("Enter Operater: ");
var sNum=+prompt("Enter 2nd Num: ");
if(opNum==="+"){
    document.write(fNum+sNum);
}
else if(opNum==="-"){
    document.write(fNum-sNum);
}
else if(opNum==="*"){
    document.write(fNum*sNum);
}
else if(opNum==="/"){
    document.write(fNum/sNum);
}
else if(opNum==="%"){
    document.write(fNum%sNum);
}


// Chapter No 12-13

// Task No 1
var numm= prompt("Enter: ");
var storeAscii=numm.charCodeAt(0);
if(storeAscii>=65 && storeAscii<=90){
    document.write("Uppercase")
}
else if(storeAscii>=97 && storeAscii<=122){
    document.write("Lowercase")
}
else if(storeAscii>=48 && storeAscii<=57){
    document.write("Number")
}

// Task No 2
var n1=+prompt("Enter Number 1")
var n2=+prompt("Enter Number 2")
if(n1>n2){
    document.write("Largest is: "+n1);
}
else if(n2>n1){
    document.write("Largest is: "+n2);
}
else if(n2===n1){
    document.write("Numbers Are Equal");
}

// Task No 3
var numinp=+prompt("Enter Number 1");
if(numinp>0){
    document.write("Number is Positive")
}
else if(numinp<0){
    document.write("Number is Negative")
}
else if(numinp==0){
    document.write("Number is 0")
}

// Task No 4
var str=prompt("Enter String: ")
var word=str.length;
if(word==1){
if(str=="a" ||str=="i" ||str=="o"||str=="u"){
    document.write("it is a vowel")
}
else{
    document.write("it is not a vowel")
}
}

// Task No 5
var pass="abcd";
var cpass=prompt("Enter a password: ");
if(cpass===""){
    document.write("Please enter your password");
}
else if(cpass!=pass){
    document.write("Incorrect password");
}
else if(cpass==pass){
    document.write("Correct! The password you entered matches the original password");
}

// Task NO 6
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
document.write(greeting);
}
else{
greeting = "Good evening";
document.write(greeting);
}

// Task No 7
var time=+prompt("Enter Time: ")
if(time>=0000 && time<1200){
    document.write("Good Morning");
}
if(time>=1200 && time<1700){
    document.write("Good Aftenoon");
}
if(time>=1700 && time<2100){
    document.write("Good Evening");
}
if(time>=2100 && time<2359){
    document.write("Good Night");
}


//Chapter No 14-16

// Task No 1
var studName = [];

// Task No 2
var studNames ={Firstname:"",Lastname:""};

// Task No 3
var animalNames=["elephant","tiger","dog","cat"];
alert(animalNames[1]);

// Task No 4
var numArr=[1,2,3,4,5,6,7,8,9];
alert(numArr[1]);

// Task No 5
var boolArr=[false,true];
alert(boolArr);

// Task No 6
var mixArr=["zain","hashmi",22,'M',2500.25];
alert(mixArr);

// Task No 7
document.write("Qualifilcation<br>");
var eduArr=[ "SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil","PhD"];
document.write(eduArr[0]+"<br>"+eduArr[1]+"<br>"+eduArr[2]+"<br>"+eduArr[3]+"<br>"+eduArr[4]+"<br>"+eduArr[5]+"<br>"+eduArr[6]+"<br>"+eduArr[7]+"<br>");

// Task No 8
var nameStud=["Michael","John","Tony"];
var scoreStud=[320,230,480];
document.write("Score of "+nameStud[0]+" is "+scoreStud[0]+". Percentage is "+scoreStud[0]/500*100+"%<br>");
document.write("Score of "+nameStud[1]+" is "+scoreStud[1]+". Percentage is "+scoreStud[1]/500*100+"%<br>");
document.write("Score of "+nameStud[2]+" is "+scoreStud[2]+". Percentage is "+scoreStud[2]/500*100+"%<br>");

// TasK No 9
var colArr=["Grey","White","Green","Black","Yellow","Orange"];
colAdd=prompt("Add a color in begining: ");
colArr.unshift(colAdd);
document.write(colArr)

// // TasK No 9(b)
var addCol=prompt("Add a color in last: ");
colArr.push(addCol);
document.write(colArr)

// // Task No 9(c)
var addCol2=prompt("Add 1 color: ");
var addCol3=prompt("Add 2 color: ");
colArr.unshift(addCol2,addCol3);
document.write(colArr);

// Task No 9(d)
colArr.shift(1);
document.write(colArr);

// Task no 9(e)
colArr.pop(1);
document.write(colArr);

// Task No 9(f)
var addCol4=prompt("add color: ");
var addPos=prompt("Select Position: ");
colArr.splice(addPos,0,addCol4);
document.write(colArr);

// Task No 9(e)
var delPos=prompt("From which position you want to delete: ");
var qtyCol=prompt("How many Colors You want to delete: ");
colArr.splice(delPos,qtyCol)
document.write(colArr);

// Task No 10
var studScore=[320,350,480,360,250,490,150];
document.write("Scores of Students: "+studScore+"<br>");
var sortedArr=studScore.sort();
document.write("Ordered Scores of Students: "+sortedArr)

// Task No 11
var cityArr=["karachi","lahore","islamabad","hyderabad","multan"];
var selectCity=cityArr.slice(1,4);
document.write(selectCity);

// Task No 12
var arrAnim = ["This","is","my","cat"];
var sepArr=arrAnim.join(" ")
document.write(sepArr);

// Task No 13
var dev=[];
var addDev=prompt("Add Device: ");
var addDev2=prompt("Add Device: ");
var addDev3=prompt("Add Device: ");
var addDev4=prompt("Add Device: ");
dev.push(addDev,addDev2,addDev3,addDev4);
document.write(dev+"<br>");
dev.shift(1)
document.write(dev+"<br>")
dev.shift(2)
document.write(dev+"<br>")
dev.shift(2)
document.write(dev+"<br>")
dev.shift(4)
document.write(dev+"<br>")

// Task No 14
var devi=["keyboard","mouse","printer"];
document.write(devi+"<br>");
var rever=devi.reverse();
document.write(rever);

// Task No 15
var mobComp=["Apple","Samsung", "Motorola", "Nokia", "Sony","Haier"];
document.write(mobComp[0]+"<br>"+mobComp[1]+"<br>"+mobComp[2]+"<br>"+mobComp[3]+"<br>"+mobComp[4]+"<br>"+mobComp[5]+"<br>")


// Chapter No 17-20
// Task No 1
var mulArr=[[],[]];

// Task No 2
var mulArr=[[1,2,3,4],[5,6,7,8],[0,2,4,5]];
document.write(mulArr[0]+"<br>"+mulArr[1]+"<br>"+mulArr[2]+"<br>");

// Task No 3
for (var i=1; i<=10; i++){
    document.write(i+"<br>");
}

// Task No 4
var tabNum2= +prompt("input a number: ")
var tabLength=+prompt("Enter Length: ")
    for(var i=1; i<=tabLength; i++){
        document.write(tabNum2+" X "+i+" = "+tabNum2*i+"<br>");
    }

// Task No 5
var a=["apple", "banana", "mango", "orange","strawberry"];
for (var i in a) {
      document.write(a[i]+"<br>");
     }
     for (var i in a) {
        document.write("Element at index "+i+" is " + a[i]+"<br>");
       }

// Task No 6
for(var i=1;i<=15; i++){
    document.write(i+" ")
}

// Task no 6(b)
for(var i=10;i>=1; i--){
    document.write(i+" ")
}

// Task No 6(c)
for(var i=0;i<=20; i+=2){
    document.write(i+" ")
}

// Task No 6(d)
for(var i=1;i<=20; i+=2){
    document.write(i+" ")
}

// Task No 6(e)
for(var i=2;i<=20; i+=2){
    document.write(i+"K ")
}

// Task No 7
var arrA=["cake","apple pie","cookie","chips","patties"]
var usinp=prompt("search: ");
for(var i=0; i<=20;i++){
    if(usinp===arrA[i]){
        document.write(arrA[i]+ " is availbe at index "+i+" in our bakery<br>")
    }
    else if(usinp!=arrA[i]){
        document.write(" We are sorry."+usinp+" is not available in our bakery")
    }
    break;
}

// Task No 8
var arrNum=[25,85,65,75,88,5];
var large=0;
for(var i=0; i<=arrNum.length;i++){
    if(arrNum[i]>large){
        large=arrNum[i]; 
    }
}
document.write(large)

// Task No 9
var arrNum1=[25,85,65,75,88,5];
var large1=arrNum1.length;
for(var i=0; i<=arrNum1.length;i++){
    if(arrNum1[i]<large1){
        large1=arrNum1[i]; 
    }
}
document.write(large1)

// Task No 10
for(var i=5; i<=100; i+=5){
    document.write(i+", ")
}
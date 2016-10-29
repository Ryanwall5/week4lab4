// JavaScript source code

function getregister() {

    var firstname = document.getElementById("value1").value;

    var resultfirst = document.getElementById("first");

    resultfirst.innerHTML = firstname;

    var lastname = document.getElementById("value2").value;

    //var resultlast = document.getElementById("last");
    document.getElementById("last").innerHTML = lastname;
    //resultlast.innerHTML = lastname;

    var age = document.getElementById("value3").value;

    var resultage = document.getElementById("age");

    resultage.innerHTML = age;

    var schoolyears = document.getElementsByName('year');
    var year;
    for (var i = 0; i < schoolyears.length; i++)
    {
        if(schoolyears[i].checked)
        {
            year = schoolyears[i].value;
            break;
        }

    }

   // if (document.getElementsById("y1").checked)
   //     year = document.getElementsById("y1").value;
   //else if (document.getElementsById("y2").checked)
   //     year = document.getElementsById("y2").value;
   // else if (document.getElementsById("y3").checked)
   //     year = document.getElementsById("y3").value;
   //else if (document.getElementsById("y4").checked)
   //     year = document.getElementsById("y4").value;
   // else if (document.getElementsById("y5").checked)
   //     year = document.getElementsById("y5").value;

    document.getElementById("school").innerHTML = year;

   
    
}
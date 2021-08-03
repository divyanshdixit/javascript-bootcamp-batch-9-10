// event, eventhandler(function)

// events that happedn to html elements
// js react to these events

// html load finish 
// onload 
// onchange
// onblur
// onfocus
// onkeydown
// onclick
// ondblclick

// html allows evernt handler attributed with js code (directly added to html element)

{/* <p style=""></p> */}

 <p onclick="myfunction()" id="para"> </p>

//  Dom
document.getElementById('para').onclick = myfunc()

// var myfunction = 

// DOm
document.getElementById('para').addEventListener('click', function(e){
    console.log('object')
})

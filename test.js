function reg() {
    document.getElementsByClassName("register_fieldset")[0].style.opacity = "0";
    document.getElementsByClassName("register_fieldset")[0].style.top = "100%";
    document.getElementsByClassName("test_div")[0].style.opacity = "1";
    document.getElementsByClassName("test_div")[0].style.top = "50%";
}


function change_gif() {
    if (sessionStorage.getItem("gif_count") == 0) {
        open_gif()
        sessionStorage.setItem("gif_count", 1);
    } else {
        close_gif()
        sessionStorage.setItem("gif_count", 0);
    }
}

function open_gif() {
    document.getElementById('div1').style.transform = 'rotate(45deg)'
    document.getElementById('div1').style.top = '240px'
    //document.getElementById('div1').style.left = '93px'


    document.getElementById('div2').style.top = '200px'
    //document.getElementById('div1').style.left = '107px'
    document.getElementById('div2').style.transform = 'rotate(-45deg)'
}

function close_gif() {
    document.getElementById('div1').style.transform = 'rotate(0deg)'
    document.getElementById('div1').style.top = '200px'
    //document.getElementById('div1').style.left = '93px'


    document.getElementById('div2').style.top = '240px'
    //document.getElementById('div1').style.left = '107px'
    document.getElementById('div2').style.transform = 'rotate(0deg)'
}

function IdX() {
    let a = performance.now();
    let id = document.getElementById('p1')
    for (let i = 0; i < 100000; i++) {
        let num = 0
        //num = id + 1 + id + 1 + id + 1 + id + 1
        //num = id + 1 + id + 1 + id + 1 + id + 1
        num = id + 1
    }
    let b = performance.now();
    console.log(b - a)
}

function IdX2() {
    let a = performance.now();
    //let id = document.getElementById('p1').innerHTML
    for (let i = 0; i < 100000; i++) {
        let num = 0
        //num = document.getElementById('p1').innerHTML + 1 + document.getElementById('p1').innerHTML + 1 + document.getElementById('p1').innerHTML + 1 + document.getElementById('p1').innerHTML + 1
        //num = document.getElementById('p1').innerHTML + 1 + document.getElementById('p1').innerHTML + 1 + document.getElementById('p1').innerHTML + 1 + document.getElementById('p1').innerHTML + 1
        num = document.getElementById('p1').innerHTML + 1
    }
    let b = performance.now();
    console.log(b - a)
}

function ClassX() {
    let a = performance.now();
    for (let i = 0; i < 100000; i++) {
        let num = 0
        //num = document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1
        //num = document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1
        num = document.getElementsByClassName('p2')[0].innerHTML + 1
        num = document.getElementsByClassName('p2')[1].innerHTML + 1
        num = document.getElementsByClassName('p2')[2].innerHTML + 1
        num = document.getElementsByClassName('p2')[3].innerHTML + 1

    }
    let b = performance.now();
    console.log(b - a)
}

function ClassX2() {
    let a = performance.now();
    let id = document.getElementsByClassName('p2')[0].innerHTML
    let id2 = document.getElementsByClassName('p2')[1].innerHTML
    let id3 = document.getElementsByClassName('p2')[2].innerHTML
    let id4 = document.getElementsByClassName('p2')[3].innerHTML
    //let id = document.getElementsByClassName('p2')[0].innerHTML
    for (let i = 0; i < 100000; i++) {
        let num = 0

        //num = id + 1 + id + 1 + id + 1 + id + 1
        //num = id + 1 + id + 1 + id + 1 + id + 1
        num = id + 1
        num = id2 + 1
        num = id3 + 1
        num = id4 + 1
    }
    let b = performance.now();
    console.log(b - a)
}

//IdX()
//IdX2()
//ClassX()
//ClassX2()


function IdX3() {
    let a = performance.now();
    let id = document.getElementById('p1').innerHTML
    let id2 = document.getElementById('p2').innerHTML
    let id3 = document.getElementById('p3').innerHTML
    let id4 = document.getElementById('p4').innerHTML
    for (let i = 0; i < 100000; i++) {
        let num = 0
        //num = document.getElementById('p1').innerHTML + 1 + document.getElementById('p1').innerHTML + 1 + document.getElementById('p1').innerHTML + 1 + document.getElementById('p1').innerHTML + 1
        //num = document.getElementById('p1').innerHTML + 1 + document.getElementById('p1').innerHTML + 1 + document.getElementById('p1').innerHTML + 1 + document.getElementById('p1').innerHTML + 1
        num = id + 1
        num = id2 + 1
        num = id3 + 1
        num = id4 + 1
        num = id + 1
        num = id2 + 1
        num = id3 + 1
        num = id4 + 1

    }
    let b = performance.now();
    console.log(b - a)
}

function Class3() {
    let a = performance.now();
    let id = document.getElementsByClassName('p2')[0].innerHTML
    let id2 = document.getElementsByClassName('p2')[1].innerHTML
    let id3 = document.getElementsByClassName('p2')[2].innerHTML
    let id4 = document.getElementsByClassName('p2')[3].innerHTML
    for (let i = 0; i < 100000; i++) {
        let num = 0
        //num = document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1
        //num = document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1
        num = id + 1
        num = id2 + 1
        num = id3 + 1
        num = id4 + 1
        num = id + 1
        num = id2 + 1
        num = id3 + 1
        num = id4 + 1

    }
    let b = performance.now();
    console.log(b - a)
}

function Class32() {
    let a = performance.now();
    let id = document.getElementsByClassName('p2')[0].innerHTML;
    let id2 = document.getElementsByClassName('p2')[1].innerHTML;
    let id3 = document.getElementsByClassName('p2')[2].innerHTML;
    let id4 = document.getElementsByClassName('p2')[3].innerHTML;
    for (let i = 0; i < 100000; i++) {
        let num = 0;
        //num = document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1
        //num = document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1
        num = id + 1;
        num = id2 + 1;
        num = id3 + 1;
        num = id4 + 1;
        num = id + 1;
        num = id2 + 1;
        num = id3 + 1;
        num = id4 + 1;

    }
    let b = performance.now();
    console.log(b - a);
}
//IdX3()
//Class32()
//Class3()
var array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

function Class32() {
    let a = performance.now();
    for (let i = 0; i < 100000; i++) {
        let num = 0
        //num = document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1
        //num = document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1
        let id = document.getElementsByClassName('p2')[0]
        let id2 = document.getElementsByClassName('p2')[1]
        num = id.innerHTML + 1
        num = id2.innerHTML + 1
        num = id.innerHTML + 1
        num = id2.innerHTML + 1
        num = id.innerHTML + 1
        num = id2.innerHTML + 1
        num = id.innerHTML + 1
        num = id2.innerHTML + 1




    }
    let b = performance.now();
    console.log(b - a)
}

function Class323() {
    let a = performance.now();
    for (let i = 0; i < 100000; i++) {
        let num = 0
        //num = document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1
        //num = document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1

        let id = document.getElementsByClassName('p2')[0].innerHTML
        let id2 = document.getElementsByClassName('p2')[1].innerHTML
        num = id + 1
        num = id2 + 1
        num = id + 1
        num = id2 + 1
        num = id + 1
        num = id2 + 1
        num = id + 1
        num = id2 + 1




    }
    let b = performance.now();
    console.log(b - a)
}

function loop1xc(x) {
    let a = performance.now();
    for (let i = 0; i < x.length; i++) {
        let num = 0
        num = x[i] + 1
    }
    let b = performance.now();
    console.log(b - a)
}

function loop2xc(x) {
    let a = performance.now();
    for (let i = 0, ln = x.length; i < ln; i++) {
        let num = 0
        num = x[i] + 1
    }
    let b = performance.now();
    console.log(b - a)
}
loop1xc(array)
loop2xc(array)
var x = {
    'ime': 'marko',
    "prezime": "nikolic"
}
localStorage.setItem("x_local", JSON.stringify(x));

function Class1() {
    let a = performance.now();
    let id = JSON.parse(localStorage.x_local)

    for (let i = 0; i < 100000; i++) {
        let num = 0;
        //num = document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1
        //num = document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1
        num = id.ime + 1;
        num = id.prezime + 1;


        num = id.ime + 1;
        num = id.prezime + 1;


        num = id.ime + 1;
        num = id.prezime + 1;



    }
    let b = performance.now();
    console.log(b - a);
}

function Class22() {
    let a = performance.now();
    let id = JSON.parse(localStorage.x_local)
    let id1 = id.ime
    let id2 = id.prezime

    for (let i = 0; i < 100000; i++) {
        let num = 0;
        //num = document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1
        //num = document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1
        num = id1 + 1;
        num = id2 + 1;


        num = id1 + 1;
        num = id2 + 1;


        num = id1 + 1;
        num = id2 + 1;



    }
    let b = performance.now();
    console.log(b - a);
}

function Class2() {
    let a = performance.now();

    for (let i = 0; i < 100000; i++) {
        let num = 0;
        //num = document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1
        //num = document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1 + document.getElementsByClassName('p2')[0].innerHTML + 1
        num = JSON.parse(localStorage.x_local).ime + 1;
        num = JSON.parse(localStorage.x_local).prezime + 1;


        num = JSON.parse(localStorage.x_local).ime + 1;
        num = JSON.parse(localStorage.x_local).prezime + 1;


        num = JSON.parse(localStorage.x_local).ime + 1;
        num = JSON.parse(localStorage.x_local).prezime + 1;



    }
    let b = performance.now();
    console.log(b - a);
}
//Class1()
//Class22()

function loop1x() {
    let a = performance.now();
    let {
        ime,
        prezime
    } = JSON.parse(localStorage.x_local)
    for (let i = 0; i < 10000; i++) {
        let num = 0
        num = ime + 1
        num = prezime + 1
    }
    let b = performance.now();
    console.log(b - a)
}

function loop2x() {
    let a = performance.now();
    let imeX = JSON.parse(localStorage.x_local)
    for (let i = 0; i < 10000; i++) {
        let num = 0
        num = imeX.ime + 1
        num = imeX.prezime + 1
    }
    let b = performance.now();
    console.log(b - a)
}

//loop1x()
//loop2x()
function if1() {
    let a = performance.now();
    let x = true
    for (let i = 0; i < 10000; i++) {
        if (x == true) {}
        if (x == true) {}
        if (x == true) {}
        if (x == true) {}
        if (x == true) {}
        if (x == true) {}
    }
    let b = performance.now();
    console.log(b - a)
}

function if12() {
    let a = performance.now();
    let x = 0
    for (let i = 0; i < 10000; i++) {
        if (x) {}
        if (x) {}
        if (x) {}
        if (x) {}
        if (x) {}
        if (x) {}
    }
    let b = performance.now();
    console.log(b - a)
}

function if2() {
    let a = performance.now();
    let x = 0
    for (let i = 0; i < 10000; i++) {
        if (x == 1) {} else {
            if (x == 1) {} else {
                if (x == 1) {} else {
                    if (x == 1) {} else {
                        if (x == 1) {} else {
                            if (x == 1) {}
                        }
                    }

                }
            }
        }
    }
    let b = performance.now();
    console.log(b - a)
}

localStorage.setItem("x_local", JSON.stringify('igor'));


function vrati() {
    const user = localStorage.getItem('x_local')
    return user
}

function vrati1() {
    let a = performance.now();
    for (let i = 0; i < 10000; i++) {
        num = 0
        num = user + 1
    }
    let b = performance.now();
    console.log(b - a)
}

function vrati2() {
    let a = performance.now();
    for (let i = 0; i < 10000; i++) {
        num = 0
        num = localStorage.getItem('x_local') + 1
    }
    let b = performance.now();
    console.log(b - a)
}

//vrati1()
//vrati2()
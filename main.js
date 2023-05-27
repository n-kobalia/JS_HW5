
// task1
const div = document.querySelector("#div")
const btn = document.querySelector("#btn")

btn.addEventListener("click",function(){
    div.style.display = "none"
})

// task2
const body = document.body
const div1 = document.createElement('div')
div1.id = "card"
const h2 = document.createElement('h2')
h2.innerText = "Gandalf"
const a = document.createElement("a")
a.href = "#"
a.innerText = "Go to profile"

div1.append(h2,a)
body.append(div1)


// task3 

// const btn = document.querySelectorAll(".answer")

// for(let i = 0; i < btn.length; i++){
//     corectAnswer = true;
//     btn[i].addEventListener('click',function(){

//         btn[i].style.backgroundColor = 'green'
//     })
// } 

// ვეღარ მოვასწარი :((((()))))


const btn = document.querySelector("#btn")

const parrafo = document.querySelector("#p-1")

btn.addEventListener("click", evento =>{
    
    //alert("Se ha hecho click")
    confirm ("Desea cambiar el color al texto?")
        ? $("#h1-1").css({ color: "red" })
        : console.log('Dio NO OK')
})



$(() => {
    // Selectores:
    // id="el-1" => "#el-1"
    // class="el-1" => ".el-1"
    // $("#el-1").hide()

    $(".hide-btn").click(() => {
        // $("h1").hide()
        $("h1").fadeOut()
    })
    $(".show-btn").click(() => {
        // $("h1").show()
        $("h1").fadeIn()
    })

    $("li").dblclick(() => {
        $("h1").css({ color: "red" })
    })

    $(".new-element").click(() => {
        // $("ul").append("<li>New Element</li>")
        $("ul").prepend("<li>New Element</li>")
    })

    $("li").mouseenter((elem) => {
        elem.target.style.color = "blue"
    })

    $("li").mouseleave(elem => {
        elem.target.style.color = "black"
    })

})
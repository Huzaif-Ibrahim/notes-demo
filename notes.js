let notes = JSON.parse(localStorage.getItem("notes")) || []
//changes made
let showNotes = (arr) => {
    let grid = document.querySelector(".grid").innerHTML = ""

    arr.forEach(val => {
        if(!val.done){
        let note = document.createElement("div")
        note.classList.add("note")

        let h3 = document.createElement("h3")
        h3.textContent = val.title

        let p = document.createElement("p")
        p.textContent = val.description

        let noteOperations = document.createElement("div")
        noteOperations.classList.add("note-operations")

        let doneButton = document.createElement("button")
        doneButton.textContent = "Done"
        doneButton.classList.add("done")
        doneButton.id = "done"

        let delButton = document.createElement("button")
        delButton.textContent = "Delete"
        delButton.classList.add("delete")
        delButton.id = val.title

        noteOperations.append(doneButton)
        noteOperations.append(delButton)

        note.append(h3)
        note.append(p)
        note.append(noteOperations)
        document.querySelector(".grid").append(note)
        }
    })

    let newNote = document.createElement("div")
    newNote.classList.add("new-note")

    let newSpan = document.createElement("span")
    newSpan.style.fontSize = "50px"
    newSpan.textContent = "+"

    newNote.append(newSpan)
    document.querySelector(".grid").prepend(newNote)
}
showNotes(notes)

let formDiv = document.querySelector(".form")
let form = document.querySelector("form")
let input = document.querySelector("input")
let textarea = document.querySelector("textarea")
let newBtn = document.querySelector(".new-note")
let delButton = document.querySelector(".delete")
let doneButton = document.querySelector(".done") 

form.addEventListener("submit", (e) => {
    formDiv.style.display = "none"
    e.preventDefault()
    let newTitle = input.value
    let newDesc = textarea.value
    let newNote = {
        id: newTitle,
        title: newTitle,
        description: newDesc,
        done: false
    }

    notes.unshift(newNote)
    localStorage.setItem("notes", JSON.stringify(notes))

    showNotes(notes)

    input.value = ""
    textarea.value = ""
    console.log(notes)
})

newBtn.addEventListener("click", () => {
    formDiv.style.display = "flex"
})

delButton.addEventListener("click", (e) => {
    console.log(e)
    notes = notes.filter(val => {
        console.log(val)
        return val.id != e.target.id
    })
    localStorage.setItem("notes", JSON.stringify(notes))

    showNotes(notes)
})
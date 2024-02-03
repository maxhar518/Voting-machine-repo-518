
const memberInput = document.querySelector("#member")
const container = document.querySelector("#container")

const membersData = []

const loopHandler = () => {
    container.innerHTML = ""
    let i = 0
    for (let item of membersData) {
        container.innerHTML +=
            `
            <span>${item.name}</span>
            <span> vote: ${item.vote}</span>
            <button onclick="voteHandler(${i})" >Increase Vote</button>
            <button onclick="edit(this)">Edit</button>
            <button onclick="del(this)">Delete</button>
            </br></br>
             `
        i = i + 1
    }
}

const voteHandler = (index) => {
    console.log(index);
    console.log(membersData[index]);
    membersData[index].vote += 1
    loopHandler()
}


const submitHandler = () => {
    console.log("I am submit handler");

    const member = {
        name: memberInput.value,
        vote: 0
    }
    membersData.push(member)

    console.log(memberInput.value);
    console.log(membersData);
    memberInput.value = ""
    loopHandler()
}

loopHandler()

function edit(e){
    // console.log(e.parentNode.firstElementChild.textContent);
 
    var a = prompt("Enter Value To Update", e.parentNode.firstElementChild.textContent);
    e.parentNode.firstElementChild.textContent =a;
}

function del(e){
    e.parentNode.remove()
}
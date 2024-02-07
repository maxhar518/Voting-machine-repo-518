
const memberInput = document.querySelector("#member")
const container = document.querySelector("#container")
const highestVoteMemberDiv = document.querySelector("#highestVoteMember")

const membersData = []

const loopHandler = () => {
    container.innerHTML = ""
    let i = 0
    let highestVote = 0
    let highestVoteIndex = -1

    for (let item of membersData) {
        container.innerHTML +=
            `
            <span>${item.name}</span>
            <span> vote: ${item.vote}</span>
            <button onclick="voteHandler(${i})" >Increase Vote</button>
            <button onclick="edit(this)">Edit</button>
            <button onclick="del(this)">Delete</button><br>
            </br></br>
             `
             if(item.vote > highestVote){
                highestVote = item.vote
                highestVoteIndex =i
             }
        i = i + 1
    }

    if(highestVoteIndex !==-1){
        highestVoteMemberDiv.textContent = `Highest Votes:(${membersData[highestVoteIndex].name})`
    }else{
        highestVoteMemberDiv.textContent = ''
    }
}

const voteHandler = (index) => {
    var a = membersData[index].vote += 1
    loopHandler()
    // console.log(a);
}


const submitHandler = () => {
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
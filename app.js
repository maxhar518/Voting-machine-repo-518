
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
            <span>${item.name} </span>
            <span> vote: ${item.vote}</span>
            <button class="ml-2 p-3 border rounded-md bg-red-600 text-white" onclick="voteHandler(${i})" >Increase Vote</button>
            <button class="ml-2 p-3 border rounded-md bg-red-600 text-white" onclick="edit(${i})">Edit</button>
            <button class="ml-2 p-3 border rounded-md bg-red-600 text-white" onclick="del(${i})">Delete</button><br>
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
    const newmemberName = memberInput.value.trim()

    if (!newmemberName) {
        alert("please Enter name")
    }
    if (membersData.some(member => member.name.toLowerCase() === newmemberName.toLowerCase())) {
       alert('Cannot add Same Name')
       return; 
    }
    const member = {
        name: newmemberName,
        vote: 0
    }
    membersData.push(member)

    console.log(memberInput.value);
    console.log(membersData);
    memberInput.value = ""
    loopHandler()
}


function edit(index){
    var newname = prompt("Enter Value To Update");
    if (newname !== null) {
        membersData[index].name = newname;
        loopHandler()
    }
}

function del(i){
    membersData.splice(i,1)
    loopHandler();
}
loopHandler()
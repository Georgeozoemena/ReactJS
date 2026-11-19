const DestructuredObject = {
    firstPerson: {
        name: "George Ozoemena",
        bio: "I am a software engineer and I love to code"
    },
    secondPerson: {
        name: "Vanessa Ozoemena",
        bio: "I am a graphic designer and I love to create"
    },
    thirdPerson: {
        name: "Jesse Ozoemena",
        bio: "I am a musician and I love to play the guitar"
    }
}

const {firstPerson, secondPerson, thirdPerson} = DestructuredObject

console.log(firstPerson.name)
console.log(secondPerson.name)  
console.log(thirdPerson.name) 
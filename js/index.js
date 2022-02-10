document.addEventListener('DOMContentLoaded', () => {
    let monsterContainer = document.getElementById('monster-container')
    let monsterUrl = 'http://localhost:3000/monsters'
    let createMonster = document.getElementById('create-monster')

    fetch(monsterUrl)
    .then(res => res.json())
    .then(data => render50Monsters(data))

    
    function render50Monsters(monsterDataArray) {
        
        for (index = 0; index <= 50; index++) {
            addMonsters(monsterDataArray[index])
            // console.log(monsterDataArray[index])
        }
    }
    function addMonsters(monsterDataObjects) {
        
        let newDiv = document.createElement('div')
    
        let monsterName = document.createElement('h2')
        monsterName.textContent = monsterDataObjects.name;
        let monsterAge = document.createElement('h4');
        monsterAge.textContent =`Age: ${monsterDataObjects.age}`
        let monsterBio = document.createElement('p')
        monsterBio.textContent = `Bio: ${monsterDataObjects.description}`;
        // console.log(monsterBio)
        monsterContainer.appendChild(newDiv)
        newDiv.append(monsterName, monsterAge, monsterBio)
    }

    function createNewMonsterForm() {
        let newMonsterForm = document.createElement('form')
        newMonsterForm.id = "monster-form"
        createMonster.appendChild(newMonsterForm)

            newMonsterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                addMonsters(e.target['name'].value)
                addMonsters(e.target['age'].value)
                addMonsters(e.target['description'].value)
                newMonsterForm.reset();
            })

        let newInputName = document.createElement('input')
        newInputName.textContent = "name"
        newInputName.id = "name"
        newInputName.placeholder = "name..."
        
        let newInputAge = document.createElement('input')
        newInputAge.textContent = "age"
        newInputAge.id = "age"
        newInputAge.placeholder = "age..."
        
        let newInputDescription = document.createElement('input')
        newInputDescription.textContent = "description"
        newInputDescription.id = "description"
        newInputDescription.placeholder = "description..."

        let newInputBtn = document.createElement('button')
        newInputBtn.textContent = "Create"

        newMonsterForm.append(newInputName, newInputAge, newInputDescription, newInputBtn)
        console.log(newInputName)
    }
    createNewMonsterForm();

    function addNewMonsterToList(inputValue) {
        addMonsters(inputValue)

    }

})

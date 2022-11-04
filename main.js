let output = document.getElementById(`output`);

const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

  //creo un ciclo for che legge l'array e stampa le varie persone

  for ( i = 0; i < team.length; i++){

    let persona = team[i]
    
    console.log(persona.name)
    console.log(persona.role)
    console.log(persona.image)

    output.innerHTML += `<div class="stringa"> ${persona.name} </div>`    //`${persona.name} `  
    output.innerHTML += `<div class="stringa"> ${persona.role} </div>` 
    output.innerHTML += `<img src=./img/${persona.image} >`
  }
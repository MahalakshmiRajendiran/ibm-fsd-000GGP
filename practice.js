function checkbox(){
  
    var checkboxes = document.getElementsByName('skill');
    var checkboxesChecked = [];
    
    for (var i=0; i<checkboxes.length; i++) {
             if (checkboxes[i].checked) {
                checkboxesChecked.push(checkboxes[i].value);
       }
    }
    document.getElementById("skills").value = checkboxesChecked;
  
  }/*const trainer=[
    {
        id : 002,
        name: 'sundar',
        subject1 : 'maths',
        subject2 : 'english'
    },
    {
        id :007,
        name : 'mani',
        subject1 :'sanskrit',
        subject2 : 'social'
    },
    {
        id : 001,
        name : 'navin',
        subject1:'biology',
        suubject2 : 'physics'
    }
];*/

const loadTrainer= ()=>{

    let rows = '';

    //console.log(emps);

    // traverse the array

    trai.forEach((trainer) =>{

        rows += traRow(trainer);

    });

    traTable(rows);

}

const filterTra = () =>{

    let rows = '';

    searchByOrg = document.getElementById('search').value;

   trai.filter((tra)=>{

        return tra.organization == searchByOrg;

    }).forEach((trainer)=>{

        rows += traRow(trainer);

    });

    traTable(rows);

}

const traRow = (trainer)=>{

    return `<tr>

        <td>${trainer.id}</td>

        <td>${trainer.name}</td>

        <td>${trainer.email}</td>

        <td>${trainer.organization}</td>

    </tr> `

}


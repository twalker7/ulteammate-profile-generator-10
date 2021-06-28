function card(person){

let extraField = '';
let picture = '';
if(person.role ==="Manager"){
    extraField ='Office Number: ' + person.officeNumber;
    picture = 'fab fa-java'
}else if(person.role === "Engineer"){
    extraField ='GitHub: ' + person.github;
    picture = 'fas fa-glasses';
}else{
    extraField ='School: ' + person.schoolName;
    picture = 'fas fa-user-graduate';
}

return `
<div class="col">
<div class="card mt-5" style="width: 18rem;">
    <div class="card-body bg-primary text-white">
        <h5 class="card-title">${person.name}</h5>
        <p class="card-text"> <i class="${picture}"></i> <span> ${person.role}</span></p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${person.id}</li>
        <li class="list-group-item">Email: ${person.email}</li>
        <li class="list-group-item">${extraField}</li>
    </ul>

</div>
</div>
`
}




module.exports = card;
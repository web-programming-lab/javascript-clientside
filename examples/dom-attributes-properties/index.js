console.log(document.body.id); // myBodyId (property)
console.log(document.body.irgendetwas); //undefined, da nicht standard
console.log(document.body.getAttribute('id')); // myBodyId
console.log(document.body.getAttribute('irgendetwas')); // das ist kein standard
document.body.yay = { name: 'test' };
console.log(document.body.yay); // {name: "test"}

// local storage
localStorage.setItem('name','Mrunmai');
localStorage.getItem('name');
localStorage.removeItem('name');
localStorage.clear();

// JSON
obj = {name:"Mrunmai",length:1,a:{this:"that"}};
js = JSON.stringify(obj);
console.log(typeof js);
console.log(js);

parsed = JSON.parse('{"name":"Mrunmai","length":1,"a":{"this":"that"}}');
console.log(parsed);

// Template literals - backticks
a = 13 + 34;
console.log(`The value of a is ${a}`)

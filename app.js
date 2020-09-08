var firebaseConfig = {
    apiKey: "AIzaSyACcdPFcKsqkJj8x1t6z-C27c5i4q00EUQ",
    authDomain: "fir-add-f9176.firebaseapp.com",
    databaseURL: "https://fir-add-f9176.firebaseio.com",
    projectId: "fir-add-f9176",
    storageBucket: "fir-add-f9176.appspot.com",
    messagingSenderId: "136362278141",
    appId: "1:136362278141:web:0b0f2479439806641fd294"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()   


$(function() {
    $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
    function(json) {
    const ip = document.getElementById("ip").appendChild(document.createTextNode(json.ip))
    addTask()
     }
    );
   });
   async function readTasks() {
    tasks = []
    const logTasks = await db.collection("cars").get()
    for (doc of logTasks.docs) {
    tasks.push({
        id: doc.id,
        ip: doc.data().ip,
        })
    }
}


   async function addTask(){
    const date = new Date().toISOString()
    const ip = document.getElementById("ip").innerHTML
    console.log(ip)
    await db.collection("cars").add({
      ip: ip,
      date: date,
    })
    readTasks()
  }


var scaleclicks = 0
var acesslimit = 0
var numberclicks = 0
function limit(){
    acesslimit += 1
    numberclicks += 1
    console.log(numberclicks)
    if(numberclicks == scaleclicks + 75 ){
        scaleclicks = numberclicks
        alert("Atenção! Muitas Solicitações Continuas")
        console.log("Acessos atuais" + acesslimit)
    }
    if(acesslimit >= 150){
        alert("Número de Solicitações diárias esgotadas!")
    }
}

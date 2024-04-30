import * as readline from "readline-sync";

let events = [];

export function getAllEvents() {
  console.table(events);
}

export function createEvent() {
  let name,
    local,
    data,
    talks = [],
    dist = [];
  name = readline.question("- Nome do evento:\n");
  local = readline.question("- Local do evento:\n");
  data = readline.question("- Data do evento:\n");
  console.log(
    "Caso haja mais de um palestrante, coloque os nomes separados por vírgula\n Exemplo: João, Gustavo, Felipe"
  );

  let talkerName = readline.question("- Palestrantes do evento:\n");
  let talkFormatter = "";

  for (let i = 0; i< talkerName.length; i++ ) {
    let letter = talkerName[i]
    if (letter !== ",") {
      talkFormatter = talkFormatter + letter;
    }

    if (letter == ",") {
      talks[talks.length] = talkFormatter;
      talkFormatter = "";
    }
    if (talkerName.length-1 == i) {
      talks[talks.length] = talkFormatter;
      
    }
  }
  console.log(
    "Caso haja mais de um público alvo, coloque os nomes separados por vírgula\n Exemplo: Menores de 15, Estudantes, professores"
  );
  let distName = readline.question("- Públicos destinado:\n");
  let distFormatter = "";

  for (let i = 0; i< distName.length; i++ ) {
    let letter = distName[i]
    if (letter !== ",") {
      distFormatter = distFormatter + letter ;
    }

    if (letter == ",") {
      dist[dist.length] = distFormatter;
      distFormatter = "";
    }
    if (distName.length - 1 == i) {
      dist[dist.length] = distFormatter;
    }
  }

  let newEvent = { name, data, talks, dist, local };
  events[events.length] = newEvent;
}

export function updateEvent() {
  if(events.length == 0){
    console.log('Não há eventos registrados')
    return true
  }
  let prop;
  console.table(events);
  let select = readline.question("Digite o nome do evento:");
  let selected = {
    1: "name",
    2: "local",
    3: "data",
    4: "talks",
    5: "dist",
  };
  for (let i = 0; i < events.length; i++) {
    if (events[i].name == select) {
      console.log("--------------------------------------------");
      console.log("             PAINEL DE ALTERAÇÃO           -");
      console.log("--------------------------------------------");
      console.log("- O que deseja alterar ?                   -");
      console.log("- [1]- Nome do evento                      -");
      console.log("- [2]- Local do evento                     -");
      console.log("- [3]  Data                                -");
      console.log("- [4]  Palestrantes do evento              -");
      console.log("- [5]  Público Alvo                        -");
      console.log("--------------------------------------------");
      prop = readline.question("");
      let changes = readline.question("Digite a nova informação: \n");
      if (prop == 4) {
        let changesFormatter = "";
        events[i][selected[prop]] = []
        for (let j = 0; j< changes.length; j++ ) {
          let letter = changes[j]
          if (letter !== ",") {
            changesFormatter = changesFormatter + letter ;
          }

          if (letter == ",") {
            events[i].talks[events[i].talks.length] = changesFormatter;
            changesFormatter = "";
          }
          if (changes.length - 1 == j) {
            events[i].talks[events[i].talks.length] = changesFormatter;
          }
        }
        console.log(`Evento ${select} alterado`)
        return;
      }
      if (prop == 5) {
        let changesFormatter = "";
        events[i][selected[prop]] = []
        for (let j = 0; j< changes.length; j++ ) {
          let letter = talkerName[j]
          if (letter !== ",") {
            changesFormatter = changesFormatter + letter ;
          }

          if (letter == ",") {
            events[i].dist[events[i].dist.length] = changesFormatter;
            changesFormatter = "";
          }
          if (changes.length - 1 == j) {
            events[i][events[i].dist.length] = changesFormatter;
          }
        }
        console.log(`Evento ${select} alterado`)
        return;
      }

      events[i][selected[prop]] = changes;
      console.log(`Evento ${select} alterado`)
    }
  }
}

export function deleteEvent() {
  console.table(events);
  let select = readline.question("Digite o nome do evento a ser excluído:");
  for(let i = 0; i < events.length; i++){
    if(events[i].name == select){
      delete events[i];
      console.log(`Evento ${select} excluído`)
      return
    }
  }
}

// Cenário Dois - Gestão de Eventos
import * as readline from "readline-sync";
import { createEvent, getAllEvents, updateEvent, deleteEvent } from "./controller.js";
var resp = "";

function app() {
  let resp;
  console.log("Bem Vindo ao sistema gerenciador de eventos!");
  console.log("--------------------------------------------");
  console.log("                   MENU                    -");
  console.log("--------------------------------------------");
  console.log("- Ecolha uma opção:                        -")
  console.log("- [1]- Cadastrar novo evento               -");
  console.log("- [2]- Listar eventos                      -");
  console.log("- [3]  Modificar evento                    -");
  console.log("- [4]  Excluir evento                      -");
  console.log("- [5]  Sair                                -");
  console.log("--------------------------------------------");
  resp= readline.question("");

    if (resp == 5) {
        console.log("Programa finalizado")
      return true;
    }
    if (resp == 1) {
       createEvent();
    }
    if (resp == 2) {
        getAllEvents();
    }
    if (resp == 3) {
        updateEvent();
    }
    if (resp == 4) {
        deleteEvent();
    }
    return app();
  
}
app();

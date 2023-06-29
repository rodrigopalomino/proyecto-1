import { pool } from "../db";

export function obtener() {
  let especialidad = document.getElementById("especialidad");
  let doctor = document.getElementById("doctor");
  let fecha = document.getElementById("fecha");

  const cita = [especialidad, doctor, fecha];

  return cita;
}

export function consultarEspeDB(){
    pool.query("Select especialidad from doctor",function(error,resultado,fields)){
        if(error){
            console.log(error)
        }else{
            console.log(resultados)
        }
    }
}

export function consultarDoctDB(){
    let especialidad=document.getElementById("especialidad")
    pool.query("Select nombre from doctor where especialidad="+especialidad,function(error,resultado,fields)){
        if(error){
            console.log(error)
        }else{
            console.log(resultados)
        }
    }
}

export function Fechas() {
    pool.query("select ")
}





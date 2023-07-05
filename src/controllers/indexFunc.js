import { pool } from "../db.js";

export const principal =async (req, res) => {
  
  const [rows_doctor]= await pool.query("select * from doctor")
  
  const especialidades = [...new Set(rows_doctor.map(doctor => doctor.especialidad))];


  const doctoresPorEspecialidad = {};
  rows_doctor.forEach(doctor => {
    const { especialidad, nombre } = doctor;
    if (doctoresPorEspecialidad[especialidad]) {
      doctoresPorEspecialidad[especialidad].push(nombre);
    } else {
      doctoresPorEspecialidad[especialidad] = [nombre];
    }
  });
  console.log("doctores : ",doctoresPorEspecialidad)
  const fechaActual=new Date().toISOString().split('T')[0];

  

  res.render('index',{rows_doctor,fechaActual,especialidades, doctoresPorEspecialidad});
};

export const enviar = async (req, res) => {
  const especialidad = req.body.especialidad;
  const doctor = req.body.doctor;
  const fecha = req.body.fecha;

  res.redirect(`kapu?especialidad=${especialidad}&doctor=${doctor}&fecha=${fecha}`);

};
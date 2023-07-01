import { pool } from "../db.js";

export const principal =async (req, res) => {
  
  const[rows_doctor]= await pool.query("select * from doctor")
  
  const fechaActual=new Date().toISOString().split('T')[0];

  const rows_doctor_id=[]

  res.render('index',{rows_doctor,fechaActual});
};

export const enviar = async (req, res) => {
  const especialidad = req.body.especialidad;
  const doctor = req.body.doctor;
  const fecha = req.body.fecha;

  // res.redirect(`kapu?especialidad=${especialidad}?doctor=${doctor}?fecha=${fecha}`)
  res.redirect(`kapu?especialidad=${especialidad}&doctor=${doctor}&fecha=${fecha}`);

};
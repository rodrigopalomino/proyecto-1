import { pool } from "../db.js";

export const principal =async (req, res) => {
  
  const[rows_doctor]= await pool.query("select * from doctor")
  
  const fechaActual=new Date().toISOString().split('T')[0];

  const rows_doctor_id=[]

  const x=req.body.especialidad

  console.log(x)

  res.render('index',{rows_doctor,fechaActual});
};

export const enviar = async (req, res) => {
  const especialidad = req.body.especialidad;
  console.log(especialidad);
  res.redirect(`/kapu?especialidad=${encodeURIComponent(especialidad)}`);
};
import { pool } from "../db.js";

export const getFormulario = (req, res) => {
    const especialidad = req.query.especialidad
    const doctor = req.query.doctor
    const fecha = req.query.fecha


    res.render('kapu', { especialidad, doctor, fecha })
}

export const postFormulario = async (req, res) => {
    const nombre = req.body.nombre
    const telefono = req.body.telefono
    const dni = req.body.dni
    const doctor = req.body.doctor
    const fecha = req.body.fecha

    const [rows_doctor] = await pool.query('select * from doctor')

    let id_doctor = 0;
    rows_doctor.forEach(row => {
        if (row.nombre == doctor) {
            id_doctor = row.id;
        }
    });
    
    await pool.query('INSERT INTO paciente (dni, nombre, telefono) VALUES (?, ?, ?)', [dni, nombre, telefono])

    await pool.query('INSERT INTO cita (estado, id_doctor, dni_paciente, fecha) VALUES (?, ?, ?, ?)', [0, id_doctor, dni, fecha])

    res.redirect(`estado?doctor=${doctor}&nombre=${nombre}&fecha=${fecha}`)
}
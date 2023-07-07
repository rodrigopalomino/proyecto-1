import { pool } from "../db.js";
import cron from "node-cron"

const actualizarEstadoCita = async (codigo) => {
    await pool.query('UPDATE cita SET estado = ? WHERE codigo = ?', [1, codigo]);
    console.log(`Estado actualizado para citaId: ${codigo}`);
};

export const getFormulario = (req, res) => {
    // Guarda las variables del primer formulario en variables locales
    const especialidad = req.query.especialidad
    const doctor = req.query.doctor
    const fecha = req.query.fecha
    

    res.render('kapu', { especialidad, doctor, fecha })
}

export const postFormulario = async (req, res) => {
    // Guarda las variables de los txt en variables locales 
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

    const [tabla] = await pool.query('select dni from paciente')

    let validar = true
    tabla.forEach(f_dni => {
        if(dni == f_dni.dni){
            validar=false
        }
    })

    if (validar == true ) {
        await pool.query('INSERT INTO paciente (dni, nombre, telefono) VALUES (?, ?, ?)', [dni, nombre, telefono])
        console.log("se subio a la base de  datos")
    }

    await pool.query('INSERT INTO cita (estado, id_doctor, dni_paciente, fecha) VALUES (?, ?, ?, ?)', [0, id_doctor, dni, fecha])

    const [codigo] = await pool.query('select count(codigo) as codigo from cita;')
    console.log("codigo: ",codigo[0].codigo)

    if (codigo[0].codigo) {
        console.log("esperando ")
        cron.schedule('0 */2 * * *', () => {
            actualizarEstadoCita(codigo[0].codigo);
        });
    }


    res.redirect(`estado?doctor=${doctor}&nombre=${nombre}&fecha=${fecha}`)
}
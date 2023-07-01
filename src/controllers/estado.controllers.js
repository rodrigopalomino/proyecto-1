import { pool } from "../db.js";


export const getEstados = async (req,res) => {

    const [tabla_completa] = await pool.query('SELECT c.codigo,c.estado, p.nombre, d.nombre as doctor, c.fecha FROM cita c JOIN paciente p ON p.dni = c.dni_paciente JOIN doctor d ON d.id = c.id_doctor order by c.codigo;')

    res.render('estado',{ tabla_completa })
}

export const postEstado = async (req, res) => {
    res.redirect('estadoBuscado')
}

export const getConsultas = async (req,res) => {

    const [tabla_completa] = await pool.query('SELECT c.codigo,c.estado, p.nombre, d.nombre as doctor, c.fecha FROM cita c JOIN paciente p ON p.dni = c.dni_paciente JOIN doctor d ON d.id = c.id_doctor order by c.codigo;')

    res.render('consultas', {tabla_completa})
}


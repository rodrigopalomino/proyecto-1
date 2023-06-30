import { pool } from "../db.js";


export const getEstados = async (req,res) => {

    const [rows_cita] = await pool.query('select * from cita')
    const [rows_paciente] = await pool.query('select * from paciente')
    const [rows_doctor] = await pool.query('select * from doctor')
    
    const codigo = rows_cita.map(row => row.codigo)
    const estado = rows_cita.map(row => row.estado)
    const id_doctor = rows_cita.map(row => row.id_doctor)
    const dni_paciente = rows_cita.map(row => row.dni_paciente)
    const lista_nombre = []
    const lista_doctores = []



    rows_paciente.forEach(element => {
        dni_paciente.forEach(dni_paciente => {
            if( dni_paciente==element.dni){
                lista_nombre.unshift(element.nombre)
            }
        })
    });

    rows_doctor.forEach(element => {
        id_doctor.forEach(id_doctor => {
            if( id_doctor==element.id){
                lista_doctores.unshift(element.nombre)
            }
        })
    });
    

    const lista_estado = estado.map(row => row == 1 ? 'atendido' : 'atendiendo')
    console.log("codigo : ",codigo)
    console.log("lista_estadp",lista_estado)
    console.log("nombre",lista_estado)
    console.log("doctores",lista_doctores)

    res.render('estado',{codigo, lista_estado, lista_nombre, lista_doctores})
}
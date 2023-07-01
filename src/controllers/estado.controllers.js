import { pool } from "../db.js";


export const getEstados = async (req,res) => {

    const [rows_cita] = await pool.query('select * from cita')
    const [rows_paciente] = await pool.query('select * from paciente')
    const [rows_doctor] = await pool.query('select * from doctor')
    
    const codigo = rows_cita.map(row => row.codigo)
    const estado = rows_cita.map(row => row.estado)
    const id_doctor = rows_cita.map(row => row.id_doctor)
    const dni_paciente = rows_cita.map(row => row.dni_paciente)
    const lista_fechas = rows_cita.map(row => row.fecha )

    const lista_fechas1 = lista_fechas.map(row => row.toString().substring(0, 10));

    console.log(lista_fechas1)
    console.log(lista_fechas)

    const lista_nombre = []
    const lista_doctores = []

    const nombre_doctor =  req.query.doctor
    const nombre_paciente =  req.query.nombre
    const fecha =  req.query.fecha

    const table_codigo = rows_cita[rows_cita.length-1].codigo
    let table_estado = rows_cita[rows_cita.length-1].estado

    if(table_estado == 0) table_estado = "atendiendo"
    else table_estado = "atendido"


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
    
    //estado 1 = atendido , 0 = atendiendo
    const lista_estado = estado.map(row => row == 1 ? 'atendido' : 'atendiendo')
    

    res.render('estado',{codigo, lista_estado, lista_nombre, lista_doctores, nombre_doctor, nombre_paciente, fecha, table_codigo, table_estado,lista_fechas, lista_fechas1 })
}

export const postEstado = async (req, res) => {
    res.redirect('estadoBuscado')
}
import { pool } from "../db.js";


export const getEstados = async (req,res) => {

    const [tabla_completa] = await pool.query("SELECT c.codigo, c.estado, p.nombre, d.nombre as doctor, DATE_FORMAT(c.fecha, '%d/%m/%Y') AS fecha_f FROM cita c JOIN paciente p ON p.dni = c.dni_paciente JOIN doctor d ON d.id = c.id_doctor ORDER BY c.codigo;");
    
    res.render('estado',{ tabla_completa })
}

export const postEstado = async (req, res) => {
    res.redirect('estadoBuscado')
}

export const getConsultas = async (req,res) => {

    const [tabla_completa] = await pool.query('SELECT c.codigo,c.estado, p.nombre, d.nombre as doctor, c.fecha FROM cita c JOIN paciente p ON p.dni = c.dni_paciente JOIN doctor d ON d.id = c.id_doctor order by c.codigo;')

    res.render('consultas', {tabla_completa})

}


export const postConsultas = async (req, res) => {

    try {
        const codigo = req.body.codigo
        const [tabla] = await pool.query('select * from cita')
        
        if ( codigo > tabla.length+1 ){   
            throw new Error("nuevo error")
        }

        res.redirect(`miconsulta/${codigo}`)
    } catch (error) {


        
    }
}


export const getMiConsulta = async (req,res) => {


    try {

        const codigo = req.params.id

        const [tabla_completa] = await pool.query('SELECT c.codigo,c.estado, p.nombre, d.nombre as doctor, c.fecha FROM cita c JOIN paciente p ON p.dni = c.dni_paciente JOIN doctor d ON d.id = c.id_doctor where c.codigo = ? order by c.codigo;', [codigo])

        res.render("miconsulta", { tabla_completa })


    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "algo salio mal 3"
        })
    }

}

export const getMiConsulta2 = async (req,res) => {

    try {
        const codigo = req.body.codigo
        const [tabla_completa] = await pool.query('SELECT c.codigo,c.estado, p.nombre, d.nombre as doctor, c.fecha FROM cita c JOIN paciente p ON p.dni = c.dni_paciente JOIN doctor d ON d.id = c.id_doctor where c.codigo = ? order by c.codigo;', [codigo])
        res.render("miconsulta", { tabla_completa })
    } catch (error) {
        return res.status(500).json({
            massage: 'algo salio mal 4'
        })
    }

}
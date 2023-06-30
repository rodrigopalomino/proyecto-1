import { pool } from "../db.js";

export const principal =async (req, res) => {
  
  const[rows_doctor]= await pool.query("select * from doctor")
  
  const fechaActual=new Date().toISOString().split('T')[0];

  res.render('index',{rows_doctor,fechaActual});
};

export const buscador=async(req,res)=>{
  barra=document.getElementById("ctn-bars-search");
  cover=document.getElementById("cover-ctn-search");
  input=document.getElementById("doctor")
  box_search=document.getElementById("caja-busqueda")

  filtro=input.value.toUpperCase();
  li=box_search.getElementByTagName("li")

  //filtro de elementos
  for(i=0;i<li.lengh;i++){
    a=li[i].getElementByTagName("a")[0]
    textValue=a.textContent || a.innerText;

    if(textValue.toUpperCase().indexOf(filtro)>-1){
      li[i].style.display="";
      box_search.style.display="block";
    }

  }


}

import Database from "@database/db";


const allAvos = async(request, response) => {
  const database = new Database()
  const data = await database.getAll();
  //Esto es necesario para que no de error de CORS, de esta manera indicamos quienes podran hacer peticiones a nuestra api
  const origin = request.header('origin')
  if(ACCEPTED_ORIGINS.includes(origin) || !origin){
    response.setHeader('Access-Control-Allow-Origin', '*');
  }
  response.status(200).json({ length:data.length, data });
}

export default allAvos;
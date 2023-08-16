import Database from "@database/db";

const ACCEPTED_ORIGINS = [
  'http://localhost:3000',
  'https://avocado-store-27222.vercel.app'
]

const allAvos = async(request, response) => {
  const database = new Database()
  const data = await database.getAll();
  //Esto es necesario para que no de error de CORS, de esta manera indicamos quienes podran hacer peticiones a nuestra api
  const origin = request.header('origin')
  if(ACCEPTED_ORIGINS.includes(origin)){
    response.setHeader('Access-Control-Allow-Origin', origin);

  }
  response.status(200).json({ length:data.length, data });
}

export default allAvos;
import Database from "@database/db";

const allAvos = async(request, response) => {
  const database = new Database()
  const data = await database.getAll();
  response.header('Access-Control-Allow-Origin', '*')
  response.status(200).json({ length:data.length, data });
}

export default allAvos;
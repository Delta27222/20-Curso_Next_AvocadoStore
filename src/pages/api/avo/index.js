import Database from "@database/db";

const allAvos = async(request, response) => {
  const database = new Database()
  const data = await database.getAll();
  response.status(200).json({ length:data.length, data });
}

export default allAvos;
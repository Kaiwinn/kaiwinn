import axios from 'axios'
// https://datausa.io/api/data?drilldowns=Nation&measures=Population
const SEVER_NAME = 'datausa.io/api'

async function getPopulation({ drilldowns, measures }) {
  const urlGetPopulation = `https://${SEVER_NAME}/data?drilldowns=${drilldowns}&measures=${measures}`

  try {
    let result = []
    let responseData = await axios.get(urlGetPopulation)

    responseData.data.data.forEach(function (item) {
      let myObject = {}
      myObject.nationID = item['ID Nation']
      myObject.nationName = item['Nation']
      myObject.yearID = item['ID Year']
      myObject.population = item['Population']
      result.push(myObject)
    })
    return result
  } catch (err) {
    throw err
  }
}

export default {
  getPopulation,
}

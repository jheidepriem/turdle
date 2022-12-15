const fetchApiUrl = () => {
  return fetch('http://localhost:3001/api/v1/words')
  .then(response => response.json())
  .then(data => {
    turdleWords = data
    setGame()
  })
  .catch(error => console.log(error))
}
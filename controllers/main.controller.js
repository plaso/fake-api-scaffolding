const axios = require("axios")

module.exports.list = (req, res, next) => {
  axios.get("http://localhost:8000/cities")
    .then(response => {
      res.render("cities", { cities: response.data })
    })
    .catch(next)
}

module.exports.doDelete = (req, res, next) => {
  axios.delete(`http://localhost:8000/cities/${req.params.id}`)
    .then(response => console.log(response))
    .catch(next)
}

module.exports.create = (req, res, next) => {
  res.render("create-city")
}

module.exports.doCreate = (req, res, next) => {
  axios.post("http://localhost:8000/cities", req.body)
    .then(() => res.redirect("/cities"))
    .catch(next)
}

module.exports.edit = (req, res, next) => {
  axios.get("http://localhost:8000/cities", {
    params: {
      id: req.params.id
    }
  })
    .then(city => {
      res.render("edit-city", { city: city.data[0] })
    })
    .catch(next)
}

module.exports.doEdit = (req, res, next) => {
  axios.put(`http://localhost:8000/cities/${req.params.id}`, { name: req.body.name })
    .then(() => res.redirect("/cities"))
    .catch(next)
}
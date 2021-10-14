import express from "express"

import registerRouter from "../../commons/registerRouter"

import getAllByUserId from "./controllers/getAllByUserId"
import create from "./controllers/create"
import createValidator from "./validators/createValidator"

const router = express.Router()

// should the userId be exposed in the route?
router.get('/', getAllByUserId)
router.post('/', createValidator, create)

const bindRoutesToApp = registerRouter({
  domain: "/buckets",
  router,
})

export default bindRoutesToApp

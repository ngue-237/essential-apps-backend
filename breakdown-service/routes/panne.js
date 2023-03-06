var express = require('express');
const { ajouterPanne, getAllPannes, getPanne, modifierPanne, supprimerPanne } = require('../controller/panne');
var router = express.Router();

//requête url POST (http://localhost:8084/api/v1/breakdowns/pannes)
router.route("/pannes").post(ajouterPanne);
//requête url GET (http://localhost:8084/api/v1/breakdowns/pannes)
router.route("/pannes").get(getAllPannes);
//requête url GET (http://localhost:8084/api/v1/breakdowns/pannes/:id)
router.route("/pannes/:id").get(getPanne);
//requête url PUT (http://localhost:8084/api/v1/breakdowns/pannes/:id)
router.route("/pannes/:id").put(modifierPanne);
//requête url DELETE (http://localhost:8084/api/v1/breakdowns/pannes/:id)
router.route("/pannes/:id").delete(supprimerPanne);

module.exports = router;
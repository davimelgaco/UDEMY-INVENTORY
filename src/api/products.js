const serviceProducts = require("../service/products")

class ApiProduct {
    async FindById(req, res) {
        try {
            const { id } = req.params
            const organizationId = req.session.organizationId
            const product =  await serviceProducts.FindById(organizationId, id)

            res.status(200).send({ product })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
    async FindAll(req, res) {
        try {
            const organizationId = req.session.organizationId
            const products = await serviceProducts.FindAll(organizationId)

            res.status(200).send({ products })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
    async Create(req, res) {
        try {
            const organizationId = req.session.organizationId
            const { name, description } = req.body
            const product = await serviceProducts.Create(organizationId, name, description)

            res.status(200).send({ product })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async Update(req, res) {
        try {
            const organizationId = req.session.organizationId
            const { id } = req.params
            const { name, description } = req.body
            const product = await serviceProducts.Update(organizationId, id, name, description)

            res.status(200).send({ product })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
    async Delete(req, res) {
        try {
            const organizationId = req.session.organizationId
            const { id } = req.params
            const product = await serviceProducts.Delete(organizationId, id)

            res.status(200).send({ product })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
}

module.exports = new ApiProduct()
const serviceInventory = require("../service/inventory")


class ApiInventory {
    async FindById(req, res) {
        try {
            const organizationId = req.session.organizationId
            const { id } = req.params
            const inventory = await serviceInventory.FindById(organizationId, id)

            res.status(200).send({ inventory })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
    async FindAll(req, res) {
        try {
            const organizationId = req.session.organizationId
            const inventories = await serviceInventory.FindAll(organizationId)

            res.status(200).send({ inventories })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
    async Create(req, res) {
        try {
            const organizationId = req.session.organizationId
            const { name } = req.body
            const inventory = await serviceInventory.Create(organizationId, name)

            res.status(200).send({ inventory })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async Update(req, res) {
        try {
            const organizationId = req.session.organizationId
            const { id } = req.params
            const { name } = req.body
            const inventory = await serviceInventory.Update(organizationId, id, name)

            res.status(200).send({ inventory })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
    async Delete(req, res) {
        try {
            const organizationId = req.session.organizationId
            const { id } = req.params
            const inventory = await serviceInventory.Delete(organizationId, id)

            res.status(200).send({ inventory })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
}

module.exports = new ApiInventory()
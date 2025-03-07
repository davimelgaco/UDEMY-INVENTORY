class ApiInventory {
    async FindById(req, res) {
        try {
            const organizationId = 1
            const { id } = req.params
            const inventory = {}  // await service.findById(inventoryId)

            res.status(200).send({ inventory })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
    async FindAll(req, res) {
        try {
            const organizationId = 1
            const inventories = [{}]  // await service.findById(inventoryId)

            res.status(200).send({ inventories })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
    async Create(req, res) {
        try {
            const organizationId = 1
            const { name } = req.body
            const inventory = {}  // await service.findById(inventoryId)

            res.status(200).send({ inventory })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async Update(req, res) {
        try {
            const organizationId = 1
            const { id } = req.params
            const { name } = req.body
            const inventory = {}  // await service.findById(inventoryId)

            res.status(200).send({ inventory })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
    async Delete(req, res) {
        try {
            const organizationId = 1
            const { id } = req.params
            const inventory = {}  // await service.findById(inventoryId)

            res.status(200).send({ inventory })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
}

module.exports = new ApiInventory()
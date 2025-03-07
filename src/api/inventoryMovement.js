class ApiInventoryMovement {
    async FindById(req, res) {
        try {
            const organizationId = 1
            const { id, inventoryId } = req.params
            const inventoryMovement = {}  // await service.findById(inventoryMovementId)

            res.status(200).send({ inventoryMovement })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
    async FindAll(req, res) {
        try {
            const organizationId = 1
            const { inventoryId } = req.params
            const inventoryMovements = [{}]  // await service.findById(inventoryMovementId)

            res.status(200).send({ inventories })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
    async Create(req, res) {
        try {
            const organizationId = 1
            const userId = 1
            const { inventoryId } = req.params
            const { type, amount, productId } = req.body
            const inventoryMovement = {}  // await service.findById(inventoryMovementId)

            res.status(200).send({ inventoryMovements })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async Update(req, res) {
        try {
            const organizationId = 1
            const { id, inventoryId } = req.params
            const { type, amount, productId } = req.body
            const inventoryMovement = {}  // await service.findById(inventoryMovementId)

            res.status(200).send({ inventoryMovement })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
    async Delete(req, res) {
        try {
            const organizationId = 1
            const { id, inventoryId } = req.params
            const inventoryMovement = {}  // await service.findById(inventoryMovementId)

            res.status(200).send({ inventoryMovement })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
}

module.exports = new ApiInventoryMovement()
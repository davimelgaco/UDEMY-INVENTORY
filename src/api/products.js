class ApiProduct {
    async FindById(req, res) {
        try {
            const { id } = req.params
            const organizationId = 1
            const product = { id }  // await service.findById(productId)

            res.status(200).send({ product })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
    async FindAll(req, res) {
        try {
            const organizationId = 1
            const products = [{ organizationId }]  // await service.findById(productId)

            res.status(200).send({ products })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
    async Create(req, res) {
        try {
            const organizationId = 1
            const { name, description } = req.body
            const product = {}  // await service.findById(productId)

            res.status(200).send({ product })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async Update(req, res) {
        try {
            const organizationId = 1
            const { name, description } = req.body
            const product = {}  // await service.findById(productId)

            res.status(200).send({ product })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
    async Delete(req, res) {
        try {
            const organizationId = 1
            const { id } = req.params
            const product = {}  // await service.findById(productId)

            res.status(200).send({ product })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
}

module.exports = new ApiProduct()
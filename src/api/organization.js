class ApiOrganization {
    async FindById(req, res) {
        try {
            const { id } = req.params
            const organization = {}  // await service.findById(organizationId)

            res.status(200).send({ organization })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
    async Create(req, res) {
        try {
            const { name, address, phone, email } = req.body
            const organization = { name, address, phone, email }  // await service.findById(organizationId)

            res.status(200).send({ organization })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async Update(req, res) {
        try {
            const { name, address, phone, email } = req.body
            const organization = { name, address, phone, email }  // await service.findById(organizationId)

            res.status(200).send({ organization })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
    async Delete(req, res) {
        try {
            const { id } = req.params
            const organization = {}  // await service.findById(organizationId)

            res.status(200).send({ organization })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
}

module.exports = new ApiOrganization()
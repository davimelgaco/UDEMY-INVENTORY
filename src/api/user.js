class ApiUser {
    async FindById(req, res) {
        try {
            const organizationId = 1

            const { id } = req.params
            const user = {}  // await service.findById(userId)

            res.status(200).send({ user })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
    async FindAll(req, res) {
        try {
            const organizationId = 1
            const users = [{}]  // await service.findById(userID)

            res.status(200).send({ users })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
    async Create(req, res) {
        try {
            const organizationId = 1
            const { name, email, password, role } = req.body
            const user = {}  // await service.findById(userId)

            res.status(200).send({ user })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async Update(req, res) {
        try {
            const organizationId = 1
            const { name, email, password, role } = req.body
            const user = {}  // await service.findById(userId)

            res.status(200).send({ user })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
    async Delete(req, res) {
        try {
            const organizationId = 1
            const { id } = req.params
            const user = {}  // await service.findById(userId)

            res.status(200).send({ user })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
}

module.exports = new ApiUser()
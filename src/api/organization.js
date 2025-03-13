const ServiceOrganization = require('../service/organization');

class ApiOrganization {
    async FindById(req, res) {
        try {
            const { id } = req.params
            const organization =  await ServiceOrganization.FindById(id)

            res.status(200).send({ organization })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
    async Create(req, res) {
        try {
            const { name, address, phone, email } = req.body
            const organization = await ServiceOrganization.Create(name, address, phone, email)

            res.status(200).send({ organization })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
 
    async Update(req, res) {
        try {
            const { id } = req.params
            const { name, address, phone, email } = req.body
            const organization = await ServiceOrganization.Update(id, name, address, phone, email)

            res.status(200).send({ organization })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
    async Delete(req, res) {
        try {
            const { id } = req.params
            const organization = await ServiceOrganization.Delete(id)

            res.status(200).send({ organization })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
}

module.exports = new ApiOrganization()
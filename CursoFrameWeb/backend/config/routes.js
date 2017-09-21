const express = require('express')

module.exports = function (server) {
    //API Routes
    const router = express.Router()
    server.use('/api',router)

    const billingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(router,'/billingCycles')

    const billingSummaryService = require('../api/billingSumary/billingSumaryService')
    router.route('/billingSummary').get(billingSummaryService.getSummary)

}
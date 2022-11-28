const  express = require('express')
const  { createIssueCtr, getUnresolvedIssuesCtr, updateIssueCtr } = require('../controller/issue.controller')
const router = express.Router()


router.post('/issues', createIssueCtr)
router.get('/issues', getUnresolvedIssuesCtr)
router.post('/issues/update', updateIssueCtr)



module.exports = router;

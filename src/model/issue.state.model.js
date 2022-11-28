import mongoose from 'mongoose'



const issueStateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        active:false
        },

})


const IssueState = mongoose.model('IssueState', issueStateSchema)

export default IssueState
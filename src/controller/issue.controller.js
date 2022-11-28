const  { createIssueService, unResolvedIssueService, updateIssueService } = require( "../service/issue.service.js");

exports.createIssueCtr = async(req,res)=>{
    req.body.state = [
        {
          type: "open",
          date: new Date(),
          isCompleted: true,
        },
        {
          type: "pending",
          isCompleted: false,
        },
        {
          type: "closed",
          isCompleted: false,
        },
       
      ];
    try{
        const createdIssue = await createIssueService(req.body)
        res.status(201).json(createdIssue)
    }catch(e){
        console.log(e);
        return res.status(400).json({
            error: e
        });
    }

}

exports.getUnresolvedIssuesCtr = async(req, res) => {
    
    try{
        const issues = await unResolvedIssueService()
        res.status(200).json(issues)
    }catch(e){
        console.log(e);
        return res.status(400).json({
            error: e
        });
      }
}


exports.updateIssueCtr = async(req,res)=>{

        try{
            const updatedIssue = await updateIssueService(req.body)
            res.status(200).json(updatedIssue)
        }catch(e){
            console.log(e);
            return res.status(400).json({
                error: e
            });
        }

}

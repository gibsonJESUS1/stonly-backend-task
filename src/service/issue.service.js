
const  { createDTAissue, getUnresolvedIssues, updateIssue } = require("../dataacess/issue.datacess.js")

exports.createIssueService = (userInputs) => {

  return createDTAissue(userInputs)
}

exports.unResolvedIssueService = async () => {
  let convertedResponse = [];
  try {
    const issues = await getUnresolvedIssues()
  // push new response with only active state to new array
    for (let n in issues) {
      convertedResponse.push({
        _id: issues[n]._id,
        title: issues[n].title,
        description: issues[n].description,
        status: issues[n].status,
        state: issues[n].state.filter((rs) => rs.isCompleted === false)
      })
    }
    return convertedResponse;
  } catch (e) {
    console.log(e)
    return e
  }


}


exports.updateIssueService = (userInput) => {
  return updateIssue(userInput)
}

const Issue = require("../model/issue.model.js");

exports.createDTAissue = async (userInput) => {
  try {
    const _issue = new Issue({ ...userInput })
    const _createdData = await _issue.save()
    return _createdData
  } catch (e) {
    return { error: e }
  }
}

exports.getUnresolvedIssues = async () => {

  try {
    const _issues = await Issue.find({})
    return _issues
  } catch (e) {
    console.log(e)
    return { error: e.message }

  }
}

exports.updateIssue = async (userInputs) => {
  const { issueId, type } = userInputs

  try {
    const _issue = await Issue.updateOne({ _id: issueId, "state.type": type },

      {

        $set: {
          "status": type,
          "state.$": [
            { type: type, date: new Date(), isCompleted: true },
          ],

        },

      },

    )

    return _issue
  } catch (err) {
    console.log(err, "u")
    return { error: err.message }
  }
}

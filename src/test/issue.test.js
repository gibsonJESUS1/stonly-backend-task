const { CustomConsole } = require('@jest/console');
const request  = require('supertest');
const  app = require('../app');
const testDb = require("../db/test.db");
const Issue  = require("../model/issue.model")

beforeEach(()=>{
    testDb()
})

test("should create issue", async()=>{
    await request(app).post("/api/issues").send({
        title:"can relate",
        description: "theyreally cant relate"
    }).expect(201)
})  

test("should fetch all issues", async()=>{
   await request(app).get("/api/issues")
    .expect(200)
   
})  

test("should update issue", async()=>{
   
   const response = await Issue.find({})
  
const payload ={
    issueId:response[0]._id,
    type:response[0].state[1].type,
    status:response[0].state[1].type
}
console.log(payload)
     await request(app).post("/api/issues/update",payload)
    .expect(200)
    
})
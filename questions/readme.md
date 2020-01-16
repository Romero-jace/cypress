Q: What is an excellent bug report you created at a previous company which was of a high priority, high severity in a build about to be deployed to production? (Please write the bug report below)

A: I can remember a bug that existed on Production from the beginning that I found while creating some autoamted tests. 

To make the tests run much quicker and to not double test I would make calls to our auth API for a JWT token and use that as login. I was doing this on lower environments but out of curiosity I decided to try the call to our Prod auth API, and all you needed was a user ID with no info to get a JWT token back. This would allow any malicious user to just create one-time JWT tokens for anyone as long as they just go through the user ID. I raised this immediately to my manager/dev architecht/and our CTO. My bug reports usually look something like this 

Summary: (I try to have just enough info that someone could see what the issue is from the summary title)

Able to make call to Prod Auth API for JWT token with only User ID 

Description: (This is where I go into more detail, usually using some of the summary but trying to explain it in a way that someone outside of engineering can understand)

Anyone that makes a call to our Auth API directly can cycle through a list of User ID's and obtain one-time JWT tokens for any user. There appears to be nothing that would gate a user from doing this. 

Repro Steps: 

1. Make call to Auth API using any user ID
2. Retrieve JWT token
3. Set token in browser dev tools
4. Observe you can login as another user

Expected Outcome: 

This should not be active on Production, at least not without security measures gating. 


Q: For the created bug report example you created in the previous question, what happened and how did you navigate the bug lifecycle, bug discussion?

A: This was taken care of almost immediately by removing the route entirely from Prod, but the only way to verify was on Prod. I did help watch the deployment process and once it hit Production I verified the route was no longer accessible. 
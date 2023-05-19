const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET - get user's trips from database (user id)
 */
router.get("/user", (req, res) => {
    const userId = req.user.id;
  
    const queryText = `
      SELECT * FROM "trip" WHERE id = $1;
    `;
  
    pool
      .query(queryText, [userId])
      .then((result) => {
        res.send(result.rows);
      })
      .catch((error) => {
        console.log("Error router GET userID:", error);
        res.sendStatus(500);
      });
  });
  
  // GET trip by ID
  router.get("/:id", (req, res) => {
    const tripID = req.params.id;
    const userID = req.user?.id; // use optional chaining to check if req.user exists
  
    let queryText = `
      SELECT 
        t.*
      FROM 
        "trip" t
        JOIN 
        "user" u ON t."user_id" = u."id"
      WHERE t."user_id" = $1 AND t."id" = $2;  
      `;
    let queryParams = [tripID];
  
    // add JOIN and userID check if userID is passed
    if (userID) {
      queryText = `
        SELECT 
          * trip, 
       
        
      `;
      queryParams = [userID, tripID];
    }
  
    pool
      .query(queryText, queryParams)
      .then((result) => {
        if (result.rows.length === 0) {
          res.sendStatus(404);
        } else {
          const trip = result.rows[0];
          res.send(trip);
        }
      })
      .catch((error) => {
        console.log("Error in triprouter tripID:", error);
        res.sendStatus(500);
      });
  });

  router.get("/userSavedTrip/:id", (req, res) => {
    const userID = req.params.id; // Retrieve the user ID from the request parameter
  
    const queryText = `
      SELECT 
        t.*, 
        s."saveID" AS "saved"
      FROM 
        "trip" t
        JOIN "save" s ON t."tripID" = s."tripID"
      WHERE 
        s."id" = $1;
    `;
  
    pool
      .query(queryText, [userID])
      .then((result) => {
        const trip = result.rows;
        res.send(trip);
      })
      .catch((error) => {
        console.log("Error getting saved trips:", error);
        res.sendStatus(500);
      });
  });
  
  
  router.get("/", (req, res) => {
    const userID = req.user?.id;
    const selectSaved = userID ? ', s."saveID" AS "saved"' : '';
    
    const queryText = `
      SELECT 
        t.*, 
        u."id" AS "userID"
        ${selectSaved}
       
      FROM 
        "trip" t 
        JOIN "user" u ON t."id" = u."id"
        ${userID ? 'LEFT JOIN "save" s ON t."tripID" = s."recipeID" AND s."id" = $1' : ''}
        
      ORDER BY t."tripID" DESC;
    `;
  
    const queryParams = userID ? [userID] : [];
  
    pool
      .query(queryText, queryParams)
      .then((result) => {
        const trips = result.rows.map((trip) => ({
          ...trip,
        }));
        res.send(trips);
      })
      .catch((error) => {
        console.log("Error getting trips in triprouter:", error);
        res.sendStatus(500);
      });
  });



  module.exports = router;
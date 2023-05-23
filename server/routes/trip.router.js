const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET - get user's trips from database (user id)
 */
router.get("/", (req, res) => {
  const userID = req.user?.id;
  const queryText = `
  SELECT * FROM "trip" AS t
  WHERE t."user_id" = $1
  ORDER BY t."tripID" DESC;
`;
  
  const queryParams = [userID]; 

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
 router.get("/trip/:id", (req, res) => {
    const userID = req.params.id; // Retrieve the user ID from the request parameter
  
    const queryText = `
      SELECT 
        t.*, 
        s."saveID" AS "saved"
      FROM 
        "trip" t
        JOIN "save" s ON t."id" = s."tripID"
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

  router.get("/user/:userId/entries", (req, res) => {
    const userId = req.params.userId;
    const queryText = `
      SELECT e.*
      FROM "entry" e
      WHERE e."user_id" = $1;
    `;
  
    pool
      .query(queryText, [userId])
      .then((result) => {
        const entries = result.rows;
        res.send(entries);
      })
      .catch((error) => {
        console.log("Error getting user trip entries:", error);
        res.sendStatus(500);
      });
  });
  

router.post('/', async (req, res) => {
  const db = await pool.connect();
  // POST route code here
  try {
      // Tells Postgres to begin running the queries
      console.log('BEGIN transaction');
      await db.query('BEGIN');

      const insertCategoryQuery = 
      `INSERT INTO "category" ("type") 
      VALUES ($1) 
      RETURNING "id";`;
      
      console.log('Executing query:', insertCategoryQuery);
      const result = await db.query(insertCategoryQuery, [req.body.type]);
      // TODO: We should make sure that rows.length is > 0
      const categoryId = result.rows[0].id;
      console.log('New category ID:', categoryId);

      // const trip = [];
      const insertTripQuery = 
      `INSERT INTO "trip" 
      ("user_id", "description", "start_date", "end_date") 
      VALUES ($1, $2, $3, $4);`;
      
      for(let trip of req.body.trips) {
          await db.query(insertTripQuery,[
            trip.user_id,
            trip.description,
            trip.start_date,
            trip.end_date,
          ]);
      
          console.log('Inserted trip:', trip);
      }
      

      // Commits all of the queries
      console.log('COMMIT transaction');
      await db.query('COMMIT');
      res.sendStatus(200);
  } catch (error) {
      console.log(`ROLLBACK ${error}`);
      await db.query('ROLLBACK');
      res.sendStatus(500);
  } finally {
      db.release();
  }
});



router.put('/edit', (req, res) => {
  console.log('In PUT request');
  const updatedTrip = req.body;
  // Query to update Trip

  let updateQuery = 
  `UPDATE "trip" 
   SET "description" = $1, "start_date" = $2, "end_date" = $3
   WHERE "id" = $4;`;
//     "start_date" DATE,
//     "end_date" DATE
  pool.query(updateQuery,
    [
    updatedTrip.description,
    updatedTrip.start_date,
    updatedTrip.end_date,
    updatedTrip.id
    ])
    .then(() => { 
    console.log("Trip updated successfully");
    res.sendStatus(200);
  })
    .catch((error) => {
    console.log('Error in PUT on trip.router', error);
    res.sendStatus(500);
    });
});


  router.delete('/:id', (req, res) => {
    const deleteId = req.params.id;
    let queryText = `DELETE FROM "trip" WHERE "id"=$1;`;
    
    pool
    .query(queryText, [deleteId])
    .then(() => {
      console.log("Trip deleted successfully");
      res.sendStatus(200);
    })
    .catch((error) => {
        console.log(`Error in DELETE ${error}`);
        res.sendStatus(500);
    });
});










module.exports = router;




// router.put("/:id", (req, res) => {
//   const tripID = req.params.id;
//   const userID = req.user?.id; // use optional chaining to check if req.user exists

//   let queryText = `
//     SELECT 
//       t.*
//     FROM 
//       "trip" t
//       JOIN 
//       "user" u ON t."user_id" = u."id"
//     WHERE t."user_id" = $1 AND t."id" = $2;  
//     `;
//   let queryParams = [tripID];

//   // add JOIN and userID check if userID is passed
//   if (userID) {
//     queryText = `
//       SELECT 
//         * trip, 
     
      
//     `;
//     queryParams = [userID, tripID];
//   }

//   pool
//     .query(queryText, queryParams)
//     .then((result) => {
//       if (result.rows.length === 0) {
//         res.sendStatus(404);
//       } else {
//         const trip = result.rows[0];
//         res.send(trip);
//       }
//     })
//     .catch((error) => {
//       console.log("Error in triprouter tripID:", error);
//       res.sendStatus(500);
//     });
// });
 
  
  





  // router.get("/user", (req, res) => {
//     const userId = req.user.id;
  
//     const queryText = `
//       SELECT * FROM "trip" WHERE id = $1;
//     `;
  
//     pool
//       .query(queryText, [userId])
//       .then((result) => {
//         res.send(result.rows);
//       })
//       .catch((error) => {
//         console.log("Error router GET userID:", error);
//         res.sendStatus(500);
//       });
//   });
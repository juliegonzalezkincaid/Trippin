const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();


//  */GET /: Retrieves the user's trips from the database based on the user ID. It returns an array of trips ordered by their IDs in descending order.
router.get("/", (req, res) => {
  const userID = req.user?.id;
  const queryText = `
  SELECT * FROM "trip" AS t
  WHERE t."user_id" = $1
  ORDER BY t."id" DESC;
`;
  
  const queryParams = [userID]; 

  pool
    .query(queryText, queryParams)
    .then((result) => {
     res.send (result.rows);
    })
    .catch((error) => {
      console.log("Erro getting trips in triprouter:", error);
      res.sendStatus(500);
    });
});
//* GET /trip/:id: Retrieves a specific trip along with its associated save ID. It performs a join operation between the "trip" and "save" tables to get the trip information. The save ID is returned as "saved" in the response.
 router.get("/trip/:id", (req, res) => {
    const tripID = req.params.id; // Retrieve the user ID from the request parameter
    const queryText = `
      SELECT 
        t.*, 
      FROM 
        "trip" t
   WHERE 
        t."id" = $1;
    `;
  
    pool
      .query(queryText, [tripID])
      .then((result) => {
        const trip = result.rows;
        res.send(trip);
      })
      .catch((error) => {
        console.log("Error getting saved trips:", error);
        res.sendStatus(500);
      });
  });

  // *GET /user/:userId/entries: Retrieves all entries associated with a specific user ID. It fetches the entries from the "entry" table based on the user ID provided.
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
  
  //* POST /: Creates a new trip in the database.
router.post('/', async (req, res) => { 
  // Data from the client (form)
  const trip = req.body;
  try {
      const insertTripQuery = 
      `INSERT INTO "trip" 
      ("user_id", "description", "start_date", "end_date") 
      VALUES ($1, $2, $3, $4);`;
      
      await pool.query(insertTripQuery,[
        req.user.id, // the logged in user
        trip.description,
        trip.startDate,
        trip.endDate,
      ]);
  
      console.log('Inserted trip:', trip);
      
      res.sendStatus(200);
  } catch (error) {
      console.log(error);
      res.sendStatus(500);
  }
});


// PUT /edit: Updates a trip in the database. It expects the updated trip data in the request body and performs an update query on the "trip" table using the provided information.
router.put('/edit/id', (req, res) => {
  console.log('In PUT request');
  const updatedTrip = req.body;
  console.log('Updated trip:', updatedTrip);

  // Query to update Trip

  let updateQuery = 
  `UPDATE "trip" 
   SET 
    "description" = $1, 
    "start_date" = $2, 
    "end_date" = $3
   WHERE 
    "id" = $4;`;

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

// DELETE /:id: Deletes a trip from the database based on the trip ID provided in the URL parameter.
  router.delete('/:id', (req, res) => {
    const deleteId = req.params.id;
    const queryText = `DELETE FROM "trip" WHERE "id" = $1;`;
    
    pool.query(queryText, [deleteId])
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
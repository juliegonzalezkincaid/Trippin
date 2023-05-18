
// CREATE TABLE "trip" (
//     "id" INTEGER PRIMARY KEY,
//     "user_id" INTEGER,
//     "description" VARCHAR,
//     "start_date" DATE,
//     "end_date" DATE
//     );


function AddTrips() {

    return (
        <div>

            <form>
                Description:
                <input
                    type="text"
                />

                Start Date:
                <input
                    type="date"
                />

                End Date:
                <input
                    type="date"
                />



            </form>



        </div>
    )
}

export default AddTrips;
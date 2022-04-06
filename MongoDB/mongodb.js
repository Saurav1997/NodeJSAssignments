const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const url = "mongodb://localhost:27017";
const dbName = "Session_5_Assignment";

MongoClient.connect(url,(error,client) =>{
    if(error){
        return console.log("Unable to connect to mongodb");
    }
    const db = client.db(dbName);

    db.collection("Employee").insertOne({
        name:"Saurav",
        dept:"IT"
    },(error,result) => {
        if(error){
            console.log("unable to enter data");
        }
        console.log(result.insertedId + " inserted succesfully");
    })

    db.collection("Students").insertMany([
        {
            name: "Saurav",
            class: "Math 101"
        },
        {
            name: "Saurav",
            class: "Geology 102"
        },
        {
            name: "Anand",
            class: "Quantum Physics 101"
        }
    ],(error,result) => {
        if(error){
            console.log("unable to enter data");
        }
        console.log(result.insertedIds + " inserted succesfully");
    })
    
    db.collection("Students").find({name: "Saurav"}).toArray((error,result)=>{
        console.log(result);
    });

    db.collection("Students").updateMany({
        name: "Saurav"
    },{
        $set:{
            dept:"Information Technology"
        }
    }).then((result) =>{
        console.log(result.modifiedCount);
    }).catch((error) =>{
        console.log("error");
    });
});

use("instagram")



// db.getCollection('posts').aggregate([
//   {
//     $group: {
//       _id: "$username",
//       dups: { $push: "$_id" },
//       count: {
//         "$sum": 1
//       }
//     }
//   },
//   {
//     $match: {
//       count: { "$gt": 1 }
//     }
//   }

// ])
//   .forEach(function (doc) {
//     doc.dups.shift();
//     db.posts.remove({ _id: { $in: doc.dups } });

//   });

deleteItems = db.posts.find().limit(50)
var docID = []
deleteItems.forEach(element => {
    docID.push(element._id)

});
db.getCollection('posts').deleteMany({ _id: { $in: docID } })


const mongoose = require('mongoose');

// יצירת חיבור למסד הנתונים
mongoose.connect('mongodb+srv://tz0556776105:5ZpRdMRIdy40jepC@cluster.l47zh4d.mongodb.net/');

// קבלת החיבור הפעיל
const db = mongoose.connection;

// טיפול בשגיאת חיבור
db.on('error', console.error.bind(console, 'connection error:'));

// טיפול בהתחברות מוצלחת
db.once('open', () => {
    console.log("mongo connected");
});

module.exports = db;

// const db = mongoose
//   .connect('mongodb+srv://tz0556776105:5ZpRdMRIdy40jepC@cluster.l47zh4d.mongodb.net/', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
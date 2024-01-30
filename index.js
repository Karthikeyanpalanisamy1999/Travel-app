const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const TravelsModel = require('./models/Travels');
const BookingModel = require('./models/Booking');
const AddtamilnaduModel = require('./models/Addtamilnadu');
const multer = require('multer');
const path = require('path');
const AddnationalModel = require('./models/Addnational');
const AddinternationalModel = require('./models/Addinternational');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Travels", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Multer storage configuration
const storage1 = multer.memoryStorage();
const storage2 = multer.memoryStorage();
const storage3 = multer.memoryStorage();

const upload1 = multer({ storage: storage1 });

const upload2 = multer({ storage: storage2 });

const upload3 = multer({ storage: storage3 });

app.post("/register", (req, res) => {
  TravelsModel.create(req.body)
    .then(travel => res.json(travel))
    .catch(err => res.json(err))
});

app.post("/bookingform", (req, res) => {
  BookingModel.create(req.body)
    .then(booking => res.json(booking))
    .catch(err => res.json(err))
});

app.post("/addtamilnadu", upload1.single('image'), (req, res) => {
  const { place, amount, duration, rating } = req.body;
  const imageBuffer = req.file.buffer;

  AddtamilnaduModel.create({ place, amount, duration, rating, image: imageBuffer })
    .then(addtamilnadu => res.json(addtamilnadu))
    .catch(err => res.json(err))
});

app.post("/addnational", upload2.single('image'), (req, res) => {
  const { place, amount, duration, rating } = req.body;
  const imageBuffer = req.file.buffer;


  AddnationalModel.create({ place, amount, duration, rating, image: imageBuffer})
    .then(addnational => res.json(addnational))
    .catch(err => res.json(err))
});

app.post("/addinternational", upload3.single('image'), (req, res) => {
  const { place, amount, duration, rating } = req.body;
  const imageBuffer = req.file.buffer;

 
  AddinternationalModel.create({ place, amount, duration, rating, image: imageBuffer})
    .then(addinternational => res.json(addinternational))
    .catch(err => res.json(err))
});

app.get('/login', (req, res) => {
  TravelsModel.find({})
    .then(travel => res.json(travel))
    .catch(err => res.json(err))
});

app.get('/tamilnadu', (req, res) => {
  AddtamilnaduModel.find({})
    .then(addtamilnadu => res.json(addtamilnadu))
    .catch(err => res.json(err))
});

app.get('/national', (req, res) => {
  AddnationalModel.find({})
    .then(addnational => res.json(addnational))
    .catch(err => res.json(err))
});

app.get('/international', (req, res) => {
  AddinternationalModel.find({})
    .then(addinternational => res.json(addinternational))
    .catch(err => res.json(err))
});

app.get('/list', (req, res) => {
  BookingModel.find({})
    .then(booking => res.json(booking))
    .catch(err => res.json(err))
});
app.get('/update/:id', (req, res) => {
  const id = req.params.id;
  AddtamilnaduModel.findById({ _id: id })
    .then(addtamilnadu => res.json(addtamilnadu))
    .catch(err => res.json(err));
});

app.put('/updatetamilnadu/:id', upload1.single('image'), async (req, res) => {
  const id = req.params.id;
  const { place, amount, duration, rating } = req.body;
  const imageBuffer = req.file ? req.file.buffer : undefined;

  try {
    // Fetch the existing record
    const addtamilnadu = await AddtamilnaduModel.findById(id);

    // Update the fields if provided
    addtamilnadu.place = place || addtamilnadu.place;
    addtamilnadu.amount = amount || addtamilnadu.amount;
    addtamilnadu.duration = duration || addtamilnadu.duration;
    addtamilnadu.rating = rating || addtamilnadu.rating;

    // Update the image if provided
    if (imageBuffer) {
      addtamilnadu.image = imageBuffer;
    }

    // Save the updated record
    const updatedRecord = await addtamilnadu.save();

    // Send the updated record as a response
    res.json(updatedRecord);
  } catch (err) {
    res.json({ error: err.message });
  }
});


  app.get('/updatena/:id',(req,res)=>{
    const id =req.params.id;
    AddnationalModel.findById({_id:id})
    .then(addnational=>res.json(addnational))
    .catch(err=>res.json(err))
  })
  app.put('/updatenational/:id', upload1.single('image'), async (req, res) => {
    const id = req.params.id;
    const { place, amount, duration, rating } = req.body;
    const imageBuffer = req.file ? req.file.buffer : undefined;
  
    try {
      // Fetch the existing record
      const addnational = await AddnationalModel.findById(id);
  
      // Update the fields if provided
     addnational.place = place ||addnational.place;
     addnational.amount = amount ||addnational.amount;
     addnational.duration = duration ||addnational.duration;
     addnational.rating = rating || addnational.rating;
  
      // Update the image if provided
      if (imageBuffer) {
        addnational.image = imageBuffer;
      }
  
      // Save the updated record
      const updatedRecord = await addnational.save();
  
      // Send the updated record as a response
      res.json(updatedRecord);
    } catch (err) {
      res.json({ error: err.message });
    }
  });
  
    app.get('/updatein/:id',(req,res)=>{
      const id =req.params.id;
      AddinternationalModel.findById({_id:id})
      .then(addinternational=>res.json(addinternational))
      .catch(err=>res.json(err))
    })
    app.put('/updateinternational/:id', upload1.single('image'), async (req, res) => {
      const id = req.params.id;
      const { place, amount, duration, rating } = req.body;
      const imageBuffer = req.file ? req.file.buffer : undefined;
    
      try {
        // Fetch the existing record
        const addinternational = await AddinternationalModel.findById(id);
    
        // Update the fields if provided
       addinternational.place = place ||addinternational.place;
       addinternational.amount = amount ||addinternational.amount;
       addinternational.duration = duration ||addinternational.duration;
       addinternational.rating = rating || addinternational.rating;
    
        // Update the image if provided
        if (imageBuffer) {
          addinternational.image = imageBuffer;
        }
    
        // Save the updated record
        const updatedRecord = await addinternational.save();
    
        // Send the updated record as a response
        res.json(updatedRecord);
      } catch (err) {
        res.json({ error: err.message });
      }
    });
    
  app.delete('/delete/:id',(req,res)=>{
    const id=req.params.id;
    AddtamilnaduModel.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))
    .catch(err=>res.json(err))
})
app.delete('/delete1/:id',(req,res)=>{
  const id=req.params.id;
  AddnationalModel.findByIdAndDelete({_id:id})
  .then(res=>res.json(res))
  .catch(err=>res.json(err))
})
app.delete('/delete2/:id',(req,res)=>{
  const id=req.params.id;
  AddinternationalModel.findByIdAndDelete({_id:id})
  .then(res=>res.json(res))
  .catch(err=>res.json(err))
})
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

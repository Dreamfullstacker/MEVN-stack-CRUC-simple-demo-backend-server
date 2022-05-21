module.exports = mongoose => {
    const Students = mongoose.model(
      "students",
      mongoose.Schema(
        {
          name: String,
          email: String,
          phone : Number
        },
      )
    );
  
    return Students;
  };
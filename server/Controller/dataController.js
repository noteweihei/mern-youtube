const Data = require("../Models/data");

exports.created = async (req, res) => {
  try {
    const { name, tel } = req.body;
    const data = await Data.findOne({ name });
    if (data) {
      res.json({ error: "มีข้อมูลอยู่แล้ว", data });
    } else {
      const db = await Data(req.body).save();
      res.json(db);
    }
  } catch (error) {
    res.json({ error: "server Fail" }).status(500);
  }
};

exports.read = async (req, res) => {
  try {
    const data = await Data.find({}).exec();
    res.json(data);
  } catch (error) {
    res.json({ error: "server Fail" }).status(500);
  }
};

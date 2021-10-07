const Contentstack = require("contentstack");
const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });

const getEntryData = async (req, res, next) => {
  const Stack = Contentstack.Stack(
    process.env.API_KEY,
    process.env.DELIVERY_TOKEN,
    process.env.ENVIROMENT_NAME
  );

  try{
    const Query = await Stack.ContentType('contentstack_data').Entry(process.env.ENTRY_ID).includeReference(['navbar','banner','clients','section','footer']).fetch()
    let data = await Query.toJSON()
    // console.log(data);
    res.status(200).send(data);
  }
  catch(err){
    console.log(err);
    res.status(404).send(err);
  }  
};

module.exports.getEntryData = getEntryData;

const Contentstack = require("contentstack");
const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });

const getEntryData = async (req, res, next) => {
  const Stack = Contentstack.Stack(
    process.env.API_KEY,
    process.env.DELIVERY_TOKEN,
    process.env.ENVIROMENT_NAME
  );

  const Query = await Stack.ContentType("contentstack_data").Entry(
    process.env.ENTRY_ID
  );

  Query.includeReference(["saima_navbar", "bltcc83b47f7b8add8c"])
    .fetch()
    .then(
      function success(entry) {
        console.log(entry.toJSON());
        res.status(200).send(entry.toJSON());
      },
      function error(err) {
        console.log(err);
        res.send(err);
      }
    );
};

module.exports.getEntryData = getEntryData;

import  { connect } from "mongoose";
import app from "./app";
import config from "./config";

async function main() {
  try {
    await connect(config.database_url as string);
    console.log("🔋 Database Connected");

    app.listen(config.port, () => {
      console.log(`Educhamp server listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
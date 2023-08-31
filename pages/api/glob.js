import fs from "fs";
import { promisify } from "util";

const readdir = promisify(fs.readdir);

export default async function sickPicks(req, res) {
  readdir("/tmp", null, (err, files) => {
    res.json({
      files,
      __dirname,
    });
  });
}

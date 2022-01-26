import "dotenv/config";
import fs from "fs-extra";
import path from "path";

//REMOVE TARGET FOLDER
if(fs.pathExistsSync(process.env.TARGET)) {
    fs.removeSync(process.env.TARGET, {recursive : true});
}

//CREATE TARGET FOLDER
fs.mkdirsSync(process.env.TARGET);
fs.mkdirsSync(path.join(process.env.TARGET, "vendors"), { recursive: true});
fs.mkdirsSync(path.join(process.env.TARGET, "resources"), {recursive:true});

//COPY DEPENDENCIES
fs.copySync(process.env.LIB_FONTELLO, path.join(process.env.TARGET, "vendors/fontello"));
fs.copySync(process.env.LIB_GIFJS, path.join(process.env.TARGET2, "vendors/gif.js"));

// COPY HTML & CSS
fs.copySync(process.env.HTML, path.join(process.env.TARGET , "/index.js"));
fs.copySync(process.env.CSS, path.join(process.env.TARGET, "resources/style.css"));

console.log(process.env.TARGET);
//build-automation here
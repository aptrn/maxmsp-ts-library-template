import * as mylib from "@my-username/my-library";

inlets = 1;
outlets = 1;
autowatch = 1;

function bang() {
  post(mylib.greet() + "\n");
}

bang();

// .ts files with this at the end become a script usable in a [js] or [jsui] object
// If you are going to require your module instead of import it then you should comment
// these two lines out of this script
let module = {};
export = {};

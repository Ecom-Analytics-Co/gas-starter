// for Jest testing you need to use exports - but you cant have exports in GAS projects
// this strips exports from the distributed files
module.exports = {
  files: "dist/**/*.js",
  from: [
    /^module.exports\s?=[^{]*?$/gm,
    /^module.exports\s?=\s?{.*?};?.*?$/gms,
  ],
  to: "",
};

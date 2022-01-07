# 🚨 Delete this info section after cloning! 🚨

* Remember the docs below are for the other devs that might work on this project in the future
* If you are cloning this repo, make sure to update everything below to be relevant for the project
* Update the project name, Local Setup instructions, etc.
* Leave the link to the best practices, maybe consider adding to them
* Make sure the "Create the `.clasp.json` file" example is applicable

### ✅ Purge commits history on the newly cloned repo
This is to disassociate the cloned repo from its source repo

```shell
# Check out to a temporary branch:
git checkout --orphan TEMP_BRANCH
# Add all the files:
git add -A
# Commit the changes:
git commit -am "Initial commit"
# Delete the old branch:
git branch -D master
# Rename the temporary branch to master:
git branch -m master
# Finally, force update to the repository:
git push -f origin master
```

**🚨 👆 Delete the above info section after cloning! 👆 🚨**


# THE_PROJECT_NAME_HERE

For the current Google Apps Script development best practices see: https://github.com/Ecom-Analytics-Co/gas-dev-guide

## About

👉 SHORT_DESCRIPTION_OF_WHAT_THIS_PROJECT_DOES

## Local Setup

### ✅ Run `npm install`

Run `npm install` to install the Node.js dependencies

### ✅ Add the `config.js` file, if needed

**📝 Note:** The [Properties Service](https://developers.google.com/apps-script/guides/properties) may be a better option in many cases.

In the project directory create a `config.js` file. This file is used for API keys and env specific global variables, similar to a `.env` file. The contents of this file should look something like this:

```javascript
// SOME_CONSTANTS_HERE
```

### ✅ Add the `.clasp.json` file

Add a `.clasp.json` file the project directory. This file contains the deployment config for clasp. You can also use the command `clasp create` for brand new projects.

The contents of this file should be something like below:

```
{
  "scriptId": "_YOUR_GAS_SCRIPT_PROJECT_ID_HERE_",
  "rootDir": "dist/",
  "filePushOrder": ["config.js"]
}
```

You can get the `scriptId` of an existing script project from its URL: `https://script.google.com/home/projects/1Cmz...THIS-IS-THE-SCRIPT-ID...fuifY/edit` or from Project Settings > IDs.

More info here: https://github.com/google/clasp#project-settings-file-claspjson

### ✅ If missing, add the `appsscript.json` file

If the `appsscript.json` file is not already part of the repo:

Go to the script projects Project Settings and make sure "Show "appsscript.json" manifest file in editor" is checked. Create the `appsscript.json` file in the project directory and copy over the contents of the editor's `appsscript.json` file to your local one.
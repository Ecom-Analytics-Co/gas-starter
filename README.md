**--- 🚨 Delete this info section after cloning! 🚨 ---**

* If you are cloning this repo, make sure to update everything below to be relavant for your project
* Update the project name, URL to 1Password vault, etc.
* Leave the link to the best practices
* Make sure the "Create the `.clasp.json` file" example is applicable
* Remember the docs below are for the other devs that might work on this repo

**--- 🚨 Delete this info section after cloning! 🚨 ---**


# THE_PROJECT_NAME_HERE

For the current Google Apps Script development best practices see: https://github.com/Ecom-Analytics-Co/gas-dev-guide

## About

SHORT_DESCRIPTION_OF_WHAT_THIS_PROJECT_DOES

## Local Setup

### ✅ Run `npm install`

Run `npm install` to install the Node.js dependencies

### ✅ Add the `config.ts` file

In the project directory create a `config.ts` file. This file is used for API keys and env specific global variables, similar to a `.env` file. The contents of this file should look something like this:

```javascript
// SOME_CONSTANTS_HERE
```

The contents to use for this file are on 1Password, you may need to ask for permissions to access this file.

### ✅ Add the `.clasp.json` file

Add a `.clasp.json` file the project directory. This file contains the deployment config for clasp.

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

## (Work in Progress) Automatic deployment via GitHub Actions

GitHub [actions](https://github.com/features/actions) may be used to automatically deploy to script.google.com upon push to `master`.

### Setup

Enable the workflow under **Actions** > Workflows

Under **Settings** > **Secrets** set the following repo secrets:

- `PROD_CLASPRC_JSON`: the content of your `~/.clasprc.json`
- `REPO_ACCESS_TOKEN`: a personal access token with the `repo` scope so that the GitHub action can store refreshed access tokens
- `PROD_SCRIPT_ID`: the id of the project
- `PROD_CONFIG_FILE`: the content of the prod `config.js` file

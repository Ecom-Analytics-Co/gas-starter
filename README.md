**--- Delete this info section after cloning! ---**

* If you are cloning this repo, make sure to update everything below to be relavant for your project
* Update the project name, URL to 1Password vault, etc.
* Leave the link to the best practices
* Make sure the "Create the `.clasp.json` file" example is applicable
* Remember the docs below are for the other devs that might work on this repo

**--- Delete this info section after cloning! ---**


# Your Project Name Here

For the current Google Apps Script development best practices see: https://github.com/Ecom-Analytics-Co/gas-dev-guide

## About

SHORT_DESCRIPTION_OF_WHAT_THIS_PROJECT_DOES

## Local Setup

### `npm install`

Run `npm install` to install the Node.js dependencies

### Add the `config.py` file

In the project directory create a `config.js` file, this file is used for API keys and env specific global variables, similar to a `.env` file.

Get the contents to use for this file on 1Password (you may need to ask for permissions to access this file): URL_TO_1PASSWORD_VAULT_GOES_HERE_AFTER_CLONING

### Create the `.clasp.json` file

#### For a new / private script project

The `clasp create` command creates a new script project in your [script.google.com > My Projects](https://script.google.com/home/my) and also creates a `.clasp.json` [clasp configuration file](https://github.com/google/clasp#project-settings-file-claspjson). For standalone projects, run the command `clasp create --type standalone`. For attached (ex. Sheets, Docs) projects, run the command `clasp create --parentId <id>` where `<id>` is the file id for the file the script is to be attached to.

#### For a shared / collab script project

If you are working on an existing shared script project or manually create a new script project, you can manually create the `.clasp.json` file the project directory. The contents of this file should be something like below. You can get the `scriptId` of an existing script project from its URL: `https://script.google.com/home/projects/1Cmz...this-is-the-script-id...fuifY/edit` or from Project Settings > IDs.

```
{
  "scriptId": "_your_gas_script_project_id_here_",
  "rootDir": "dist/",
  "filePushOrder": ["config.js"]
}
```

### Add the `appsscript.json` file, if needed

#### For a new / private script project

This file is created during the `clasp create` command. You can also follow the instructions below to re-create it for an existing script.  

#### For a shared / collab script project

Go to the shared projects Project Settings and make sure "Show "appsscript.json" manifest file in editor" is checked. Create the `appsscript.json` file in the project directory and copy over the contents of the editor's `appsscript.json` file to your local one.


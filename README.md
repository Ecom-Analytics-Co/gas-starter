# Google Apps Script Development

## Build with Google Apps Script

### :package: New Project Setup

**1.** Clone the repository and install npm dependencies

```shell
git clone https://github.com/ecomanalytics/gas-starter project-directory
cd project-directory
npm install
```

**2.** Log in to Google clasp and authorize using your Google account.

```shell
npx clasp login
```

**3.** Create a new "standalone" script project or one bound to a Google Sheet. This step creates the `.clasp.json` file.

```shell
npx clasp create --title "example standalone project" --rootDir ./dist
```

```shell
npx clasp create --type sheets --title "example attached project" --rootDir ./dist
```

More on `create` commands here: https://github.com/google/clasp#create

**4.** Include the necessary OAuth Scopes in the [appsscript.json](appsscript.json) file

**5.** Deploy the project

The `dist` directory contains the bundled code that is pushed to Google Apps Script.

```shell
npm run deploy
```

---
## Directories
The `src/` directory contains the server side code for the application. Add appropriate server side code in this directory.

A temporary `dist/` directory will be created as part of the build and deploy process.

---

## Clasp Files Guide

### appsscript.json file

#### "Manifest updated. Do you want to overwrite?"

```shell
? Manifest file has been updated. Do you want to push and overwrite?
```

If you see a prompt like the above:

1. Say yes
2. Open the script on script.google.com (refresh if already opened) or use `clasp open`
3. Under project settings make sure `Show "appsscript.json" manifest file in editor` is checked
4. Go to the scripts editor on script.google.com and under Files open `appsscript.json`
5. Copy the contents of `appsscript.json` into your local [appsscript.json](appsscript.json) file

Note that this warning may show even when an insignificant change, like formatting, is made

#### Example minimal appsscript.json

```json
{
  "timeZone": "America/New_York",
  "runtimeVersion": "V8",
  "dependencies": {},
  "exceptionLogging": "STACKDRIVER"
}
```

#### Example webapp appsscript.json

```json
{
  "timeZone": "America/New_York",
  "runtimeVersion": "V8",
  "dependencies": {},
  "exceptionLogging": "STACKDRIVER",
  "webapp": {
    "executeAs": "USER_DEPLOYING",
    "access": "ANYONE_ANONYMOUS"
  }
}
```

More info: [Apps Script: Manifest structure](https://developers.google.com/apps-script/manifest)

#### OAuth Scopes

You can set scopes explicitly in the [appsscript.json](appsscript.json) `appsscript.json` under the `oauthScopes`
top-level field. The "oauthScopes" field specifies an array of strings.

```json
{
  "...": "...",
  "oauthScopes": [
    "https://www.googleapis.com/auth/spreadsheets.readonly",
    "https://www.googleapis.com/auth/youtube.upload"
  ]
}
```

More info: [Apps Script: Authorization Scopes](https://developers.google.com/apps-script/concepts/scopes)

Complete list of OAuth scopes: [OAuth 2.0 Scopes for Google APIs](https://developers.google.com/identity/protocols/oauth2/scopes)

### .clasp.json file

When running clone or create, a file named .clasp.json is created in the current directory to describe clasp's
configuration for the current project.

#### Example minimal .clasp.json

```json
{
  "scriptId": "123WgD6FBS2bGsPMQF...Z2tcYeQpExK_xuQ5rabc",
  "rootDir": "dist/"
}
```

#### Example advanced .clasp.json

```json
{
  "scriptId": "123WgD6FBS2bGsPMQF...Z2tcYeQpExK_xuQ5rabc",
  "rootDir": "dist/",
  "projectId": "project-id-xxxxxxxxxxxxxxxxxxx",
  "fileExtension": "ts",
  "filePushOrder": ["file1.ts", "file2.ts"]
}
```

More info: [Project Settings File (.clasp.json)](https://github.com/google/clasp#project-settings-file-claspjson)

### .claspignore file

The `.claspignore` file allows you to specify file and directories that you do not wish to not upload to your Google
Apps Script project via `clasp push`.

The default `.claspignore` file in the Apps Script Starter kit will push all the JS and HTML inside the `rootDir` folder
and ignore all the other files.

More info: [Ignore File (.claspignore)](https://github.com/google/clasp#ignore-file-claspignore)

# Issue with the concat script on Windows

https://github.com/jalba/concat-cli/issues/1
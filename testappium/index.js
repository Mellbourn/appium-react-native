// import wdio from "webdriverio";
// const { getElementId } = require("wd/lib/utils");
const wdio = require("webdriverio");

// javascript
const opts = {
  path: "/wd/hub",
  port: 4723,
  capabilities: {
    automationName: "XCUITest",
    platformName: "iOS",
    platformVersion: "15.5",
    deviceName: "iPhone 13",
    app: "/Users/klas.mellbourn/Library/Developer/Xcode/DerivedData/AwesomeTSProject-eflasywsgbbkqdercbrvegpkcpyg/Build/Products/Debug-iphonesimulator/AwesomeTSProject.app",
  },
};

async function main() {
  const client = await wdio.remote(opts);

  const contexts = await client.getContexts();
  console.log("🚀 ~ file: index.js ~ line 21 ~ main ~ contexts", contexts);

  const btn = await client.$(`~button`);
  await btn.click();

  const field = await client.$(`~email`);
  await field.setValue("Hello World!");

  // TODO: getting values doesn't work
  const text = await client.$("~text");
  const textValue = await text.getValue();
  console.log("textValue", textValue);

  await client.deleteSession();
}

main();

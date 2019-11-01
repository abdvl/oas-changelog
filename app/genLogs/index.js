const writeHtml = require("./writeFiles/html");
const writeJsonFile = require("./writeFiles/json");
const writeMarkdownFile = require("./writeFiles/markdown");
const fs = require("fs");

const changelog = require("../../swagger-changelog-merakified").changelog;
const mergeSpecWithChanges = require("./mergeSpec");

/**
 * Config for swagger-changelog
 */
const config = {
    changes: {
        breaks: {
            major: 2,
            minor: 2,
            patch: 3,
            unchanged: 0
        },
        smooths: {
            major: 1,
            minor: 1,
            patch: 2,
            unchanged: 0
        }
    }
};

module.exports = async function genLogs(
    oldSpec,
    newSpec,
    location = "./output"
) {
    const log = await changelog(oldSpec, newSpec, config);
    const res = await mergeSpecWithChanges(log.diff, newSpec);
    const diff = res;

    context = {};

    if (typeof oldSpec === "object") {
        context.oldSpec = oldSpec;
    } else {
        const oldSpecFile = JSON.parse(fs.readFileSync(oldSpec, "utf8"));
        context.oldSpec = oldSpecFile;
    }

    if (typeof newSpec === "object") {
        context.newSpec = newSpec;
    } else {
        const newSpecFile = JSON.parse(fs.readFileSync(newSpec, "utf8"));
        context.newSpec = newSpecFile;
    }

    context.uniqueNames = [...new Set(diff.map(item => item.name))];
    // move Renamed to top
    context.uniqueNames = [
        "Renamed",
        ...context.uniqueNames.filter(item => item !== "Renamed")
    ];
    context.uniqueGroups = [...new Set(diff.map(item => item.group))];

    context.uniqueMethods = [...new Set(diff.map(item => item.method))];
    context.diff = diff;

    writeJsonFile(context, location);
    writeHtml(context, location);
    writeMarkdownFile(context, location);

    return context;
};

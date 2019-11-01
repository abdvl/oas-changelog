const SwaggerParser = require("swagger-parser");

module.exports = async function mergeSpecWithChanges(diff, specPath) {
    //const spec = await fs.readFileSync(specPath, "utf8");

    const parsed = await SwaggerParser.parse(specPath)
        .then(r => {
            //console.log("r", r);
            return r;
        })
        .catch(e => console.log("SwaggerParser error ", e));
    // const paths = parsed.paths;

    //console.log("parsed", parsed);
    const paths = parsed.paths;
    //console.log("paths", paths);

    diff = diff.map(d => {
        pathDetails = paths[d.path];
        if (!pathDetails) {
            return d;
        }
        pathDetailKeys = Object.keys(pathDetails);

        let firstPath = pathDetails[pathDetailKeys[0]];
        if (firstPath) {
            //console.log("Object.keys(pathDetails)", Object.keys(pathDetails));

            if (firstPath.tags) {
                console.log("pathDetails.tags", firstPath.tags);
                if (firstPath.tags.length > 0) {
                    d.group = firstPath.tags[0];
                }
            } else {
                d.group = "Other Changes";
            }

            if (d.method) {
                if (Object.keys(pathDetails).includes(d.method)) {
                    d.apiDetails = pathDetails[d.method];
                }
            } else {
                d.apiDetails = pathDetails;
            }

            return d;
        } else {
            return d;
        }
    });

    return diff;
};

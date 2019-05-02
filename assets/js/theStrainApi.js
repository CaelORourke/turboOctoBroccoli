// Documentation for the Strain API can be found at http://strains.evanbusse.com/index.html

var theStrainApi = (function () {
    var apiKey = "mppWKrF";
    function baseURL(methodUrl) {
        return "http://strainapi.evanbusse.com/" + apiKey + "/" + methodUrl;
    };

    function getApiData(methodUrl) {
        return $.ajax({
            url: baseURL(methodUrl),
            method: "GET"
        });
    };

    return {
        // Information Queries
        // Used for getting information needed for making other queries.
        // For example, getting the list of strains or effects so you know what search parameters are available.
        info: {
            // List all Effects
            getAllEffects: function () {
                return getApiData("searchdata/effects");
            },

            // List all Flavors
            getAllFlavors: function () {
                return getApiData("searchdata/flavors");
            }
        },

        // Search Queries
        // The main type of query used to get strain information based on a variety of criteria.
        search: {
            // Search for strains by name
            getStrainsByName: function (name) {
                return getApiData("strains/search/name/" + name);
            },

            // Search for strains by race (Available races: Sativa, Indica, and Hybrid)
            getStrainsByRace: function (race) {
                return getApiData("strains/search/race/" + race);
            },

            // Search for strains by effect
            getStrainsByEffect: function (effect) {
                return getApiData("strains/search/effect/" + effect);
            },

            // Search for strains by flavor
            getStrainsByFlavor: function (flavor) {
                return getApiData("strains/search/flavor/" + flavor);
            }
        },

        // Additional Queries
        // Some of the search queries only return the strain with basic information and not effects or flavors.
        // These additional queries use the strain id to return its corresponding effect or flavor data.
        data: {
            // Get strain descriptions
            getStrainDescriptions: function (strainId) {
                return getApiData("strains/data/desc/" + strainId);
            },

            // Get strain effects
            getStrainEffects: function (strainId) {
                return getApiData("strains/data/effects/" + strainId);
            },

            // Get strain flavors
            getStrainFlavors: function (strainId) {
                return getApiData("strains/data/flavors/" + strainId);
            }
        },

        // Get all strains (Please use this route sparingly as it is requires a lot of computing power)
        getAllStrains: function () {
            return getApiData("strains/search/all");
        }
    };
})();

// console.log(theStrainApi);

// theStrainApi.info.getAllEffects().then(function (response) {console.log(response);});
// theStrainApi.info.getAllFlavors().then(function (response) {console.log(response);});

// theStrainApi.getAllStrains().then(function (response) {console.log(response);});

// theStrainApi.search.getStrainsByName("Af").then(function (response) {console.log(response);});
// theStrainApi.search.getStrainsByRace("Sativa").then(function (response) {console.log(response);});
// theStrainApi.search.getStrainsByEffect("Happy").then(function (response) {console.log(response);});
// theStrainApi.search.getStrainsByFlavor("Pine").then(function (response) {console.log(response);});

// theStrainApi.data.getStrainDescriptions(1).then(function (response) {console.log(response);});
// theStrainApi.data.getStrainEffects(1).then(function (response) {console.log(response);});
// theStrainApi.data.getStrainFlavors(1).then(function (response) { console.log(response); });

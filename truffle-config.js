console.log('directory here', __dirname);

module.exports = {
    contracts_build_directory: "./public/abis",
    networks: {
        development: {
            host: "127.0.0.1",
            port: 9545,
            network_id: "*" // Match any network id
        }
    }
};
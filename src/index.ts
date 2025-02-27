import localtunnel from "localtunnel";
import localtunnelConfig from "./localtunnel-config.json"

(async () => {
  for (let i = 0; i < localtunnelConfig.length; i++) {
    const tunnel = await localtunnel({ port: localtunnelConfig[i].port, subdomain: localtunnelConfig[i].subdomain });
    // the assigned public url for your tunnel
    // i.e. https://abcdefgjhij.localtunnel.me
    tunnel.url;
    console.log(`Tunnel opened for ${tunnel.url} port ${localtunnelConfig[i].port}`);

    tunnel.on('close', () => {
      // tunnels are closed
      console.log(`Tunnel closed for ${tunnel.url} port ${localtunnelConfig[i].port}`);
    });
  }
})();
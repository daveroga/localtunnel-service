# Localtunnel Service
Project to start localtunnel as a service starting local tunnel for a list of tunnels specified in `src/localtunnel-config.json`.

## Set up
1. Copy localtunnel json example
```
cp src/localtunnel-config.example.json src/localtunnel-config.json
```
2. Configure your tunnels
3. Start the tunneling
```
npm run dev
```

If you want to test in local with transpilation
```
npm run start
```
Or if you want to run in production
```
npm run pm2
```
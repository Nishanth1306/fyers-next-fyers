module.exports = {
  apps: [
    {
      name: "fyers-next",           // PM2 app name
      script: "npm",                // Run npm command
      args: "run start",            // npm script to execute
      env: {
        NODE_ENV: "production",     // Environment
        PORT: 4002 ,
      }
    }
  ]
};

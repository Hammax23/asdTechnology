module.exports = {
  apps: [
    {
      name: 'asdtechnology',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/asdtechnology',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3001
      },
      error_file: '/var/log/pm2/asdtechnology-error.log',
      out_file: '/var/log/pm2/asdtechnology-out.log',
      log_file: '/var/log/pm2/asdtechnology.log',
      time: true
    }
  ]
};

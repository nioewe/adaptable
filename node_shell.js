const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'9818cba9-1b35-4c6d-9ca8-7beae2bd8851'}`,
		PORT: `${process.env.PORT||8080}`
	}
})

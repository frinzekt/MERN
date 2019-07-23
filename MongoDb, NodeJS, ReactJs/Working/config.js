const { env } = process;

export const nodeEnv = env.nodeEnv || "development";

export const logStars = message => {
	console.info("*********");
	console.info(message);
	console.info("*********");
};

export default {
	port: env.PORT || 8080,
	host: env.HOST || "0.0.0.0", //we need to host the site from the environment that can be accessed in ALL IP in machine
	get serverUrl() {
		return `http://${this.host}:${this.port}`;
	}
};

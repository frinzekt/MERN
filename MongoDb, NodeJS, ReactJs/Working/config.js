const { env } = process;

export const nodeEnv = env.nodeEnv || "development";

export const logStars = message => {
	console.info("*********");
	console.info(message);
	console.info("*********");
};

export default {
	port: env.PORT || 8080
};

import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "a0.muscache.com",
				protocol: "https",
				port: "",
			},
		],
	},
};

export default nextConfig;

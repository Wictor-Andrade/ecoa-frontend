import {z} from "zod";

const envSchema = z.object({
	VITE_BACKEND_API_URL: z.url(),
	VITE_FEATURE_FLAG: z.string().optional(),
});

const _env = {
	VITE_BACKEND_API_URL: import.meta.env.VITE_BACKEND_API_URL,
	VITE_FEATURE_FLAG: import.meta.env.VITE_FEATURE_FLAG,
};

export const env = envSchema.parse(_env);

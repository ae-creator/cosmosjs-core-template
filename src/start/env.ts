import { ENV_STATE_ENUM, Environment } from "@cosmoosjs/core";

/**
 * This file is used to validate environment variables
 * We use zod to validate them
 * 
 * You can access zod directly with the const
 * Env.validator
 * 
 * For more information on the zod api
 * @link https://zod.dev/
 */ 
export default {
  ENV: Environment.validator.nativeEnum(ENV_STATE_ENUM),
  PORT: Environment.validator.string().transform(Number),
}
import dotenv from 'dotenv'

export function loadEnv()  {
    dotenv.config()

}
type serverConfig = {
    PORT: number
}
loadEnv()

export const ServerConfig: serverConfig= {
    PORT : 3000
}
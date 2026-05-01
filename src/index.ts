import express from 'express';
import { serverConfig } from './config';
import v1Router from './router/v1';
import logger from './config/logger';
import { appErrorHandler, genericErrorHandler } from './middleware/error.middleware';
import { attachCorrelationIdMiddleware } from './middleware/correlation';
import { sequelize } from './db/models/sequelize';
const app = express();

app.use(express.json());

app.use(attachCorrelationIdMiddleware);
app.use('/api/v1', v1Router);

app.use(appErrorHandler);
app.use(genericErrorHandler);

app.listen(serverConfig.PORT, async() => {
    logger.info(`Server is running on http://localhost:${serverConfig.PORT}`);
    logger.info(`Press Ctrl+C to stop the server.`);
    await sequelize.authenticate()
    logger.info("Database connected successfully")
       
});


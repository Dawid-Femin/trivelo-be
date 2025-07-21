export default () => ({
    port: parseInt(process.env.PORT || '3000', 10),
    nodeEnv: process.env.NODE_ENV || 'development',

    database: {
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT || '5432', 10),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        name: process.env.DB_NAME,
    },

    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN || '3600s',
    },

    mail: {
        host: process.env.MAIL_HOST,
        port: parseInt(process.env.MAIL_PORT || '587', 10),
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});

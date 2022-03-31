module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3c10a710e60fc5dd015db3bf4268b10a'),
  },
});

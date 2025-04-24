// import jwt from 'jsonwebtoken';

// export const verifyToken = (req, res, next) => {
//   const token = req.headers['authorization'];

//   if (!token) {
//     return res.status(403).json({ message: 'No token provided' });
//   }

//   // Remove "Bearer" prefix if included in token
//   const tokenStr = token.startsWith('Bearer ') ? token.slice(7) : token;

//   jwt.verify(tokenStr, process.env.JWT_SECRET, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ message: 'Invalid or expired token' });
//     }

//     // Attach the decoded user ID to the request for further use
//     req.userId = decoded.userId;
//     next();  // Continue to the next route handler
//   });
// };

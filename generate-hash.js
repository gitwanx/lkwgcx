const crypto = require('crypto');
const salt = 'luoke_fudan_2024';
const password = 'qaz123456';
const hash = crypto.createHash('sha256').update(password + salt).digest('hex');
console.log('Password:', password);
console.log('Salt:', salt);
console.log('SHA-256 Hash:', hash);
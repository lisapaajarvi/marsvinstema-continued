function checkAdminAccess(req, res, next) {
    if (req.session.access !== 'admin') {
        return res.status(403).json('Access denied');
    }
    next();
};

module.exports = checkAdminAccess;

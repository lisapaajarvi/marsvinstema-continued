exports.checkAdminAccess = (req, res, next) => {
    if (req.session.access !== 'admin') {
        return res.status(403).json('Access denied');
    }
    next();
};

exports.checkUserLogin = (req, res, next) => {
    if (req.session.access === 'admin' || req.session.id === req.body._id) {
        next();
    }
    else {
        res.status(403).json('Access denied');
    }
};

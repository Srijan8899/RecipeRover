const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (error) {
        res.status(error.code || 500).json({
            success: false, // Fixed typo: sccess -> success
            message: error.message
        });
    }
};

export default asyncHandler;

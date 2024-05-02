const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (error) {
        // Determine the appropriate status code based on the error type
        const statusCode = error.statusCode || 500;
        // Respond with an error message and status code
        res.status(statusCode).json({
            success: false,
            message: error.message
        });
    }
};

export default asyncHandler;

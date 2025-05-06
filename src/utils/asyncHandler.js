// through promises
const asyncHandler = (requestHandler) => {
  (req, res, next) =>{
    Promise.resolve(requestHandler(req, res, next)).catch((err)=> next(err))
  }
}

export {asyncHandler}





// const asyncHandler = () => {};
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}
// const asyncHandler = () => { () =>{} }


    // through try and catch method
    // const asyncHandler = (fn) => async (req, res, next) => {
    //     try {
    //         await fn(req, res, next)
    //     } catch (error) {
    //         error.status(error.code || 500).json({
    //             success: false,
    //             message: error.message
    //         })
    //     }
    // }
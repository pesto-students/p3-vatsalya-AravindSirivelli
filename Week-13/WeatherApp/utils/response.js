const GenerateSuccessRespone = (body) => {
    return {
        "code": 200,
        "message": "SUCCESS",
        "data": body
    }
}
const GenerateErrorRespone = (body) => {
    return {
        "code": 500,
        "message": "ERROR",
        "data": body
    }
}

module.exports = { GenerateSuccessRespone, GenerateErrorRespone }
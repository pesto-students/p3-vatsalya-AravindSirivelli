const GenerateRespone = (body) => {
    return {
        "code": body.cod,
        "message": body?.message ? "ERROR - " + body.message : "SUCCESS",
        "data": body
    }
}
const GenerateErrorRespone = (body) => {
    return {
        "code": 500,
        "message": "INTERNAL ERROR",
        "data": body
    }
}

module.exports = { GenerateRespone, GenerateErrorRespone }
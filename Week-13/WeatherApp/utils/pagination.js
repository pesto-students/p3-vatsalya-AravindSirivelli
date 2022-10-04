const paginate = (data, size, page) => {
    if (!data)
        return data
    return data?.slice((page - 1) * size, page * size);
}

module.exports = { paginate }
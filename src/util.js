const paginate = (followers) => {
    const itemPerPage = 10
    const pages = followers.length / itemPerPage

    const newFollowers = Array.from({length: pages},(_,index) => {
        const start = itemPerPage * index

        return followers.slice(start, start + itemPerPage)
    })

    return newFollowers
}

export default paginate





































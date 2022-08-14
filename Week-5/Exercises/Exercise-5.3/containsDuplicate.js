const hasDuplicate = function (nums) {
    const set = new Set([...nums]);
    return set.size != nums.length;
};

hasDuplicate([1, 1, 2, 3]); // true
hasDuplicate([1, 4, 2, 3]); // false
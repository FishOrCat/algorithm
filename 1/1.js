const ksum = function ksum(arr, N, V) {
    const res = arguments[3] || new Set();
    if (N == 1 && !res.has(V) && arr.indexOf(V) > -1) {
        return Array.from(res.add(V));
    }
    if (N == 1) {
        return false;
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        const cache = new Set(arguments[3] || []);
        if (cache.has(arr[i])) {
            continue;
        }
        cache.add(arr[i]);
        const result = ksum(arr, N - 1, V - arr[i], cache);
        if (result) return result;
    }
    return false;
};

module.exports = ksum;

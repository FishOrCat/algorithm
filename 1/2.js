function ksum(arr, N, V) {
    if (!arr.length) return false;
    const res = arguments[3] || [];
    const index = arguments[4] || 0;
    if (index >= arr.length) {
        return false;
    }
    if (N == 1) {
        if (arr.indexOf(V) >= index) {
            return Array.from(res.concat([V]));
        } else {
            return false;
        }
    }
    const path = arguments[3] || [];
    const item = arr[index];
    const res2 = ksum(arr, N - 1, V - item, path.concat([item]), index + 1);
    if (res2) return res2;
    const res1 = ksum(arr, N, V, path.slice(0), index + 1);
    if (res1) return res1;
    return false;
}

module.exports = ksum;
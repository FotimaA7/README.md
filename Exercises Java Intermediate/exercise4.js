function countWordOccurrences() {
    const str = "hello world hello";
    const wordCount = {};
    str.split(" ").forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });
    console.log("Word Occurrences:", wordCount);
}
